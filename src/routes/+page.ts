import { sortAndPage } from "$lib/functions.js";
import { exampleData } from "./exampleData.js";

export async function load({ url }) {
    return sortAndPage(url.searchParams, exampleData, 5);
}
