import { A } from "@solidjs/router";

export default function Layout(props) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="flex justify-between items-center p-4 md:py-4 md:px-8">
                <A href="/" className="text-main text-4xl font-bold lowercase">Hiruki</A>
                <A href="/search" className="bg-main text-white rounded-sm py-1 px-2 hover:bg-opacity-85">
                    <i className="fa-solid fa-magnifying-glass" />
                </A>
            </section>
            {props.children}
            <section id="footer">
                <div className="flex justify-center md:justify-start items-center p-4 md:py-4 md:px-8">
                    <p className="text-white text-sm">©{currentYear} Hiruki. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}