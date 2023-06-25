<script lang="ts" generics="T">
    import { getValue } from "./functions.js";
    import type { Column } from "./types.js";

    export let col: Column<T>;
    export let record: T;
</script>

{#if col.component}
    <svelte:component this={col.component} {record} />
{:else if col.getValue}
    {col.getValue(record)}
{:else if col.property}
    {getValue(col.property, record)}
{/if}
