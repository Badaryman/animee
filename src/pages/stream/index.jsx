import { Show, createResource } from "solid-js";
import { A, useParams, useSearchParams } from "@solidjs/router";
import { EpisodesLoader, StreamLoader, DownloadLoader } from "../../components/Loader";
import Episodes from "../../components/Episodes";

const getStream = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/stream/" + id)).json();
}

const getDownload = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V1 + "/download/" + id)).json();
}

const getEpisodes = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/episode/" + id)).json();
}

export default function Stream(props) {

    const params = useParams();
    const [query] = useSearchParams();

    const [stream] = createResource(() => params.episode, getStream);
    const [download] = createResource(() => params.episode, getDownload);
    const [episodes] = createResource(() => query.id, getEpisodes);

    return (
        <>
            <Show when={!stream.loading} fallback={<StreamLoader />} />
            <Show when={stream() && !stream.loading}>
                <section className="p-4 md:py-4 md:px-8">
                    <h2 className="text-white text-xl font-medium">{stream().info.title}</h2>
                    <p className="text-white text-base text-opacity-50">
                        Episode {stream().info.episode}</p>
                </section>
                <section className="p-4 md:py-4 md:px-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-2">
                        <div className="hidden md:grid grid-cols-1 gap-1 w-40 md:h-[500px] overflow-y-scroll pr-2">
                            <Show when={episodes() && !episodes.loading}>
                                <For each={episodes().episodes}>
                                    {(e, i) => (
                                        <A href={"/e/" + e.id + "?id=" + query.id} key={i()}>
                                            <div className="text-white bg-main text-sm font-medium 
                                            text-center w-full rounded-sm p-2 hover:bg-opacity-75">EP {e.number}</div>
                                        </A>
                                    )}
                                </For>
                            </Show>
                        </div>
                        <div className="flex flex-col gap-2">
                            <iframe
                                src={stream().plyr.main}
                                frameborder="0"
                                allowFullScreen={true}
                                className="w-full h-40 md:h-[500px] rounded-sm" />
                        </div>
                    </div>
                </section>
                <Show when={!download.loading} fallback={<DownloadLoader />} />
                <Show when={download() && !download.loading}>
                    <section className="flex justify-center items-center p-4 md:py-4 md:px-8">
                        <A href={download().download} target="_blank"
                            className="text-white bg-main text-center rounded-sm w-full
                        pt-1 pb-1.5 px-2 hover:bg-opacity-75">Download</A>
                    </section>
                </Show>
            </Show>
            <section className="grid md:hidden">
                <Show when={!episodes.loading} fallback={<EpisodesLoader count={new Array(24)} />}>
                    <Show when={episodes() && !episodes.loading}>
                        <Episodes container="Episodes" data={episodes()} id={query.id} />
                    </Show>
                </Show>
            </section>
        </>
    )
}