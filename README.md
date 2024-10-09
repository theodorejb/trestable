# Trestable

A responsive data table component built with Svelte and Bootstrap.

## Installation

```
npm install trestable
```

## Usage

### Define array of columns

```ts
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
```

Custom components can be used for rendering, which must have a `record` prop which will be passed the record object.

If a breakpoint is defined (one of `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`), the column will only be shown on that size of screen or larger. Columns with a breakpoint of `xxxl` will always be hidden by default. On screens smaller than the breakpoint, hidden columns can be viewed by clicking the plus icon on the left side of the row.

### Render table

```svelte
<Trestable {columns} {data} {params} />
```

A key/value object of query params must be passed in so Trestable can know which columns the table has been sorted by.

### Sorting

If a Column object has a `property` value, the column header will be a clickable link to the current page with a `sort[property]=asc` query parameter. Clicking the header a second time will change the sort direction to `desc`, and clicking it a third time will remove the sort parameter.

The query parameter can be used in a `page.ts` load function to perform server-side or client-side sorting.

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
// page.ts
import { sortAndPage } from "trestable";

export async function load({ url }) {
    const data = await myCustomLoadFn();
    // client-side filtering could also be done here

    return sortAndPage(url.searchParams, data, 10);
}
```

Then use the values in `page.svelte`:
```svelte
<script lang="ts">
    import type { PageData } from "./$types.js";
    import { Pagination, Trestable, type Column } from "trestable";

    export let data: PageData;
    $: pages = data.pages;
    $: page = data.page;
    $: params = data.params;
    $: limit = data.limit;

    // see above examples for how to render the <Trestable /> and <Pagination /> components
</script>
```