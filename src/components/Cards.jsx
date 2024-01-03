import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { CardsLoader } from "./Loader";

export default function Cards(props) {
    return (
        <>
            <Show when={props.data} fallback={<CardsLoader count={new Array(8)} />}>
                <Show when={props.data.results.length > 0}>
                    <section className="space-y-2 p-4 md:py-4 md:px-8">
                        <h2 className="text-white text-xl font-medium">{props.container}</h2>
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
                            <For each={props.data.results}>
                                {(e, i) => (
                                    <A href={"/i/" + e.id} class="flex flex-col space-y-1" key={i()}>
                                        <img src={e.coverImage.large} alt={e.title.romaji}
                                            loading="lazy" width="300" height="500"
                                            className="h-full object-cover rounded-sm" />
                                        <h2 className="text-white text-sm truncate">{e.title.romaji}</h2>
                                        <div className="flex gap-1">
                                            <button type="button"
                                                className="text-main border-main text-[10px] border rounded-sm 
                                                px-1 hover:bg-opacity-85">
                                                {e.format === "TV_SHORT" ? "TV Short"
                                                    : e.format === "MOVIE" ? "Movie"
                                                        : e.format === "SPECIAL" ? "Special"
                                                            : e.format === "MUSIC" ? "Music"
                                                                : e.format === "MANGA" ? "Manga"
                                                                    : e.format === "NOVEL" ? "Novel"
                                                                        : e.format === "ONE_SHOT" ? "One Shot"
                                                                            : e.format}</button>
                                            <Show when={e.seasonYear}
                                                fallback={<button type="button"
                                                    className="text-white border-white text-[10px] border rounded-sm 
                                                    px-1 hover:bg-opacity-85">
                                                    {e.status === "FINISHED" ? "Finished"
                                                        : e.status === "RELEASING" ? "Releasing"
                                                            : e.status === "NOT_YET_RELEASED" ? "TBA"
                                                                : e.status === "CANCELLED" ? "Cancelled"
                                                                    : e.status}</button>}>
                                                <button type="button"
                                                    className="text-white border-white text-[10px] border rounded-sm 
                                        px-1 hover:bg-opacity-85">{e.seasonYear}</button>
                                            </Show>
                                        </div>
                                    </A>
                                )}
                            </For>
                        </div>
                    </section>
                </Show>
            </Show>
        </>
    )
}