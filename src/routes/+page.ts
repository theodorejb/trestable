import { getParamProperty, getValue } from "$lib/functions.js";
import { exampleData } from "./exampleData.js";

export async function load({ url }) {
    const page = +(url.searchParams.get("page") ?? 1);
    const limit = +(url.searchParams.get("limit") ?? 5);
    const data = [...exampleData];

    for (const p of url.searchParams) {
        if (p[0].startsWith("sort[")) {
            data.sort(getCompareFn(p[0], p[1]));
            break;
        }
    }

    return {
        page,
        pages: Math.ceil(data.length / limit),
        params: Object.fromEntries(url.searchParams),
        limit,
        data: data.slice((page - 1) * limit, limit * page),
    };
}

function getCompareFn(sortCol: string, dir: string) {
    const property = getParamProperty(sortCol);

    return (a: object, b: object) => {
        const aVal = getValue(property, dir === "asc" ? a : b);
        const bVal = getValue(property, dir === "asc" ? b : a);

        if (aVal < bVal) {
            return -1;
        }

        if (aVal > bVal) {
            return 1;
        }

        return 0;
    };
}
