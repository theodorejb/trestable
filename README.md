# Trestable

A responsive data table component built with Svelte and Bootstrap.

## Installation

```
npm install trestable
```

## Usage

### Get data and define array of columns

```svelte
<script lang="ts">
    import { Pagination, Trestable, type Column } from "trestable";

    let { data } = $props(); // from load function in page.ts
    let pages = $derived(data.pages);
    let page = $derived(data.page);
    let params = $derived(data.params);
    let limit = $derived(data.limit);

    const columns: Column<MyObj>[] = [
        {
            name: "Name",
            property: "fullName",
        },
        {
            name: "Status",
            property: "status",
            getValue: (d) => d.status ? "Active" : "Inactive",
        },
        {
            name: "Items",
            breakpoint: "md",
            component: MyComponent,
        },
    ];
</script>
```

Custom components can be used for rendering, which must have a `record` prop which will be passed the record object.

If a breakpoint is defined (one of `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`), the column will only be shown on that size of screen or larger. Columns with a breakpoint of `xxxl` will always be hidden by default. On screens smaller than the breakpoint, hidden columns can be viewed by clicking the plus icon on the left side of the row.

### Render table

```svelte
<Trestable {columns} data={data.items} {params} />
```

A key/value object of query params must be passed for Trestable to know if/how the table has been sorted.

### Sorting

If a Column object has a `property` value, the column header will be a clickable link to the current page with a `sort[property]=asc` query parameter. Clicking the header a second time will change the sort direction to `desc`, and clicking it a third time will remove the sort parameter.

The query parameter can be used in a `page.ts` load function to perform server-side or client-side sorting.

### Row grouping

To group rows, set the `groupBy` Trestable prop to a function which takes a single `record` argument,
and returns any string or number as a group identifier based on the record properties.

To override the default group header, set the `groupHeader` prop to a component which takes `key` (the group identifier) and `records` props.

### Calculation rows

To output a row at the bottom of the table (or below each group, if `groupBy` is set), specify a `bottomCalc` function on the desired columns.
This function must take a single `records` argument and return a number. To customize the formatting of the displayed calculation,
set a `calcFormatter` function on the column, which will be passed the calculated number and must return a string.

Note that row grouping and calculation rows only include the data passed to Trestable, so probably shouldn't be used in concert with pagination.

### Pagination

The pagination component can be rendered as follows:

```svelte
{#if pages > 1}
    <Pagination {pages} {page} {params} {limit} {limitChanged} useIcons={true} />
{/if}
```

The limit change handler could be defined as follows:

```ts
function limitChanged(limit: number) {
    localStorage.setItem("pageSize", limit.toString());
    const search = new URLSearchParams(params);
    search.set("limit", limit.toString());
    search.delete("page");
    goto("?" + search.toString());
}
```

The pagination component renders previous, next, and nearby page links.
These link to the current URL with a `page=n` query parameter.
This value can be used in a `page.ts` load function to perform server-side or client-side filtering/offsetting.

### Client-side sorting and pagination

Trestable provides a `sortAndPage` function for simple client-side sorting and pagination.
The function must be passed a `URLSearchParams` object, the data array, and the default number of items per page.
It returns an object with `pages`, `page`, `params`, `limit`, `items`, and `error` properties.
The `error` property is a blank string which can be overwritten to include an error message with the result.

```ts
// +layout.ts
import { error } from "@sveltejs/kit";
import { getMyData } from "$lib/api/MyData.js";

export async function load() {
    try {
        return {
            data: await getMyData(),
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        error(e.response.status ?? 500, e.message);
    }
}
```

```ts
// +page.ts
import { sortAndPage } from "trestable";

export async function load({ url, parent }) {
    // get data in parent layout to avoid unnecessary API requests when sorting
    let { data } = await parent();

    // data could be optionally filtered here as well

    return sortAndPage(url.searchParams, data, 10);
}
```
