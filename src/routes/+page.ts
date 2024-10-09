import { sortAndPage } from "$lib/functions.js";
import { exampleData } from "./exampleData.js";

export async function load({ url }) {
    const data = [...exampleData];
    return sortAndPage(url.searchParams, data, 5);
}
