export function ViewLoader(props) {
    return (
        <>
            <section>
                <div className="bg-white bg-opacity-50 w-full h-64 rounded-sm animate-pulse" />
            </section>
        </>
    )
}

export function CardsLoader(props) {
    return (
        <>
            <section className="space-y-2 p-4 md:py-4 md:px-8">
                <div className="bg-white bg-opacity-50 w-44 h-6 rounded-sm animate-pulse" />
                <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
                    <For each={props.count}>
                        {(e, i) => (
                            <div class="flex flex-col space-y-1" key={i()}>
                                <div className="bg-white bg-opacity-50 w-38 h-32 md:h-32 lg:h-60 rounded-sm animate-pulse" />
                                <div className="bg-white bg-opacity-50 w-38 h-4 rounded-sm animate-pulse" />
                                <div className="bg-white bg-opacity-50 w-38 h-4 rounded-sm animate-pulse" />
                            </div>
                        )}
                    </For>
                </div>
            </section>
        </>
    )
}

export function InfoLoader(props) {
    return (
        <>
            <section className="flex justify-center items-center p-4 md:py-4 md:px-8">
                <div className="bg-white bg-opacity-50 w-full h-28 md:h-40 rounded-sm animate-pulse" />
            </section>
            <section className="space-y-2 p-4 md:py-4 md:px-8">
                <div className="bg-white bg-opacity-50 w-64 h-8 rounded-sm animate-pulse" />
                <div className="grid md:grid-cols-[auto,1fr] gap-4">
                    <div className="hidden md:flex flex-col gap-2">
                        <div className="bg-white bg-opacity-50 w-44 h-64 md:h-60 rounded-sm animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white bg-opacity-50 w-48 h-6 rounded-sm animate-pulse" />
                        <div className="flex flex-wrap items-center gap-2">
                            <For each={new Array(4)}>
                                {(e, i) => (
                                    <div className="bg-white bg-opacity-50 w-16 h-8 rounded-sm animate-pulse" />
                                )}
                            </For>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white bg-opacity-50 w-52 h-6 rounded-sm animate-pulse" />
                        </div>
                        <div className="bg-white bg-opacity-50 w-full h-36 rounded-sm animate-pulse" />
                    </div>
                </div>
            </section>
        </>
    )
}

export function EpisodesLoader(props) {
    return (
        <>
            <section className="space-y-2 p-4 md:py-4 md:px-8">
                <div className="flex justify-start items-center">
                    <div className="bg-white bg-opacity-50 w-32 h-6 rounded-sm animate-pulse" />
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                        <For each={props.count}>
                            {(e, i) => (
                                <div className="bg-white bg-opacity-50 w-full h-10 rounded-sm animate-pulse" />
                            )}
                        </For>
                    </div>
                    <div className="bg-white bg-opacity-50 w-full h-8 rounded-sm animate-pulse" />
                </div>
            </section>
        </>
    )
}

export function StreamLoader(props) {
    return (
        <>
            <section className="p-4 md:py-4 md:px-8">
                <div className="bg-white bg-opacity-50 w-64 h-10 rounded-sm animate-pulse" />

            </section>
            <section className="space-y-4 p-4 md:py-4 md:px-8">
                <div className="grid md:grid-cols-[auto,1fr] gap-2">
                    <div className="hidden md:grid grid-cols-1 gap-1 w-40 md:h-[500px] overflow-y-scroll pr-2">
                        <For each={new Array(12)}>
                            {(e, i) => (
                                <div className="bg-white bg-opacity-50 w-full h-10 rounded-sm animate-pulse" />
                            )}
                        </For>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white bg-opacity-50 w-full h-40 md:h-[500px] rounded-sm animate-pulse" />
                    </div>
                </div>
                <div className="bg-white bg-opacity-50 w-full h-8 rounded-sm animate-pulse" />
            </section>
        </>
    )
}

export function DownloadLoader(props) {
    return (
        <>
            <section className="flex justify-center items-center py-4 px-4">
                <div className="bg-white bg-opacity-50 w-full h-8 rounded-sm animate-pulse" />
            </section>
        </>
    )
}