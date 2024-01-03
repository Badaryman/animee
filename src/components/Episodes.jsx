import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { EpisodesLoader } from "./Loader";

export default function Episodes(props) {

    const [count, setCount] = createSignal(24);

    return (
        <>
            <Show when={props.data} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={props.data.episodes.length > 0}>
                    <section className="space-y-2 p-4 md:py-4 md:px-8">
                        <div className="flex justify-start items-center">
                            <h2 className="text-white text-xl font-medium">{props.container}</h2>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                                <For each={props.data.episodes.slice(0, count())}>
                                    {(e, i) => (
                                        <A href={"/e/" + e.id + "?id=" + props.id} key={i()}>
                                            <div className="text-white bg-main text-sm font-medium 
                                            text-center rounded-sm p-2 hover:bg-opacity-75">EP {e.number}</div>
                                        </A>
                                    )}
                                </For>
                            </div>
                            <Show when={props.data.episodes.length > 24 && count() === 24}>
                                <button type="button" onClick={() => setCount(props.data.episodes.length)}
                                    className="text-white bg-main w-full rounded-sm 
                                        py-1 hover:bg-opacity-75">View More</button>
                            </Show>
                        </div>
                    </section>
                </Show>
            </Show>
        </>
    )
}