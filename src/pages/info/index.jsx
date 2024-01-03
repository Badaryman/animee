import { For, Show, createResource } from "solid-js";
import { useParams } from "@solidjs/router";
import { CardsLoader, EpisodesLoader, InfoLoader } from "../../components/Loader";
import Episodes from "../../components/Episodes";
import Cards from "../../components/Cards";

const getInfo = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/info/" + id)).json();
}

const getEpisodes = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/episode/" + id)).json();
}

const getRecommendations = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/recommendations/" + id + "?limit=8")).json();
}

export default function Info(props) {

    const params = useParams();

    const [info] = createResource(() => params.id, getInfo);
    const [episodes] = createResource(() => params.id, getEpisodes);
    const [recommendations] = createResource(() => params.id, getRecommendations);

    return (
        <>
            <Show when={!info.loading} fallback={<InfoLoader />} />
            <Show when={info() && !info.loading}>
                <Show when={info().bannerImage}>
                    <section className="flex justify-center items-center p-4 md:py-4 md:px-8">
                        <img src={info().bannerImage} alt={info().title.romaji} title={info().title.romaji}
                            loading="lazy" width="100%" height="100"
                            className="w-full h-28 md:h-40 object-cover rounded-sm opacity-50" />
                    </section>
                </Show>
                <section className="space-y-2 p-4 md:py-4 md:px-8">
                    <h2 className="text-white text-xl font-medium">{info().title.romaji}</h2>
                    <div className="grid md:grid-cols-[auto,1fr] gap-4">
                        <div className="hidden md:flex flex-col gap-2">
                            <img src={info().coverImage.large} alt={info().title.romaji}
                                loading="lazy" width="300" height="500"
                                className="w-44 h-64 object-cover rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Show when={info().season && info().year}
                                fallback={<p className="text-white">Unknown</p>}>
                                <p className="text-white">{info().season} {info().year}</p>
                            </Show>
                            <div className="flex flex-wrap items-center gap-2">
                                <For each={info().genres}>
                                    {(genre, i) => (
                                        <button type="button" className="bg-main text-white text-sm rounded-sm py-1 px-2 
                                        hover:bg-opacity-85">{genre}</button>
                                    )}
                                </For>
                            </div>
                            <div className="flex items-center gap-2">
                                <Show when={info().format}>
                                    <p className="text-white">
                                        {info().format === "TV_SHORT" ? "TV Short"
                                            : info().format === "MOVIE" ? "Movie"
                                                : info().format === "SPECIAL" ? "Special"
                                                    : info().format === "MUSIC" ? "Music"
                                                        : info().format === "MANGA" ? "Manga"
                                                            : info().format === "NOVEL" ? "Novel"
                                                                : info().format === "ONE_SHOT" ? "One Shot"
                                                                    : info().format}</p>
                                    <p className="text-white text-opacity-75">❖</p>
                                </Show>
                                <Show when={info().status}>
                                    <p className="text-white">
                                        {info().status === "FINISHED" ? "Finished"
                                            : info().status === "RELEASING" ? "Releasing"
                                                : info().status === "NOT_YET_RELEASED" ? "TBA"
                                                    : info().status === "CANCELLED" ? "Cancelled"
                                                        : info().status}</p>
                                </Show>
                                <Show when={info().score.averageScore}>
                                    <p className="text-white text-opacity-75">❖</p>
                                    <p className="text-white">{info().score.averageScore}%</p>
                                </Show>
                            </div>
                            <div innerHTML={info().description}
                                className={`text-white h-36 overflow-y-scroll`} />
                        </div>
                    </div>
                </section>
            </Show>
            <Show when={!episodes.loading} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={episodes() && !episodes.loading}>
                    <Episodes container="Episodes" data={episodes()} id={params.id} />
                </Show>
            </Show>
            <Show when={!recommendations.loading} fallback={<CardsLoader count={new Array(8)} />} />
            <Show when={recommendations() && !recommendations.loading}>
                <Cards container="Recommendations" data={recommendations()} />
            </Show>
        </>
    )
}