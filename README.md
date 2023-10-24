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

If a column has `property` defined, it will be sortable. Custom components can be used for rendering, which must have a `record` prop which will be passed the record object.

If a breakpoint is defined (one of `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`), the column will only be shown on that size of screen or larger. Columns with a breakpoint of `xxxl` will always be hidden by default. On screens smaller than the breakpoint, hidden columns can be viewed by clicking the plus icon on the left side of the row.

### Render table

```html
<Trestable {columns} {data} {params} />
```

A key/value object of query params must be passed in so Trestable can know which columns the table has been sorted by.

### Pagination

The pagination component can be rendered as follows:

```html
{#if pages > 1}
    <Pagination {pages} {page} {params} {limit}
        on:limitChanged={handleLimitChange}
    />
{/if}
```

The limit change handler could be defined as follows:

```ts
function handleLimitChange(event: CustomEvent<{ limit: number }>) {
    localStorage.setItem("pageSize", event.detail.limit.toString());
    const search = new URLSearchParams(params);
    search.set("limit", event.detail.limit.toString());
    search.delete("page");
    goto("?" + search.toString());
}
```
