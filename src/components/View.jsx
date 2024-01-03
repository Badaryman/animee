import { Show } from "solid-js";
import { SliderProvider, Slider } from "solid-slider";
import { autoplay } from "solid-slider/plugins/autoplay";
import "solid-slider/slider.css";
import { ViewLoader } from "./Loader";
import { A } from "@solidjs/router";

export default function View(props) {
    return (
        <>
            <section className="hidden md:flex p-4 md:py-4 md:px-8">
                <SliderProvider>
                    <Slider options={{ loop: true, drag: true }} plugins={[autoplay(5000, {})]}>
                        <Show when={props.data} fallback={<ViewLoader />}>
                            <For each={props.data.results}>
                                {(e, i) => (
                                    <Show when={e.bannerImage}>
                                        <div key={i()} className="relative">
                                            <img src={e.bannerImage} alt={e.title.romaji} title={e.title.romaji}
                                                loading="lazy" width="100%" height="100"
                                                className="w-full md:h-64 lg:h-64 object-cover rounded-sm opacity-35" />
                                            <div className="absolute top-0 flex flex-col gap-2 p-4">
                                                <h2 className="text-white text-2xl font-semibold">{e.title.romaji}</h2>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-white text-sm font-semibold">
                                                        {e.format === "TV_SHORT" ? "TV Short"
                                                            : e.format === "MOVIE" ? "Movie"
                                                                : e.format === "SPECIAL" ? "Special"
                                                                    : e.format === "MUSIC" ? "Music"
                                                                        : e.format === "MANGA" ? "Manga"
                                                                            : e.format === "NOVEL" ? "Novel"
                                                                                : e.format === "ONE_SHOT" ? "One Shot"
                                                                                    : e.format}</p>
                                                    <span className="text-white text-opacity-75 text-sm">❖</span>
                                                    <p className="text-white text-sm font-semibold">
                                                        {e.status === "FINISHED" ? "Finished"
                                                            : e.status === "RELEASING" ? "Releasing"
                                                                : e.status === "NOT_YET_RELEASED" ? "TBA"
                                                                    : e.status === "CANCELLED" ? "Cancelled"
                                                                        : e.status}</p>
                                                </div>
                                                <p innerHTML={e.description}
                                                    className="text-white text-opacity-85 w-full h-24 
                                                    overflow-y-hidden pr-2 hover:overflow-y-scroll" />
                                                <div className="my-4">
                                                    <A href={"/i/" + e.id} 
                                                    className="text-white bg-main rounded-sm 
                                                    pt-2 pb-2.5 px-4">Watch Now</A>
                                                </div>
                                            </div>
                                        </div>
                                    </Show>
                                )}
                            </For>
                        </Show>
                    </Slider>
                </SliderProvider>
            </section>
        </>
    )
}