import { exampleData } from "./exampleData.js";

export async function load({ url }) {
    let page = +(url.searchParams.get("page") ?? 1);

    return {
        page,
        pages: 2,
        params: Object.fromEntries(url.searchParams),
        data: page === 1 ? exampleData.slice(0, 6) : exampleData.slice(6, 7),
    };
}
