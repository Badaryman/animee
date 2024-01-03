import { createResource } from "solid-js";
import View from "../components/View";
import Cards from "../components/Cards";

const getTrending = async () => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/trending?limit=8")).json();
}

const getPopular = async () => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/popular?limit=8")).json();
}

export default function Home(props) {

    const [trending] = createResource(getTrending);
    const [popular] = createResource(getPopular);

    return (
        <>
            <View data={trending()} />
            <Cards container="Trending Now" data={trending()} />
            <Cards container="All Time Popular" data={popular()} />
        </>
    )
}