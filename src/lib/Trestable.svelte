<script lang="ts" generics="T">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { Column } from "./types.js";
    import RespRow from "./RespRow.svelte";
    import ColHeadValue from "./ColHeadValue.svelte";

    let className = "trestable table";
    export { className as class };

    export let data: T[];
    export let columns: Column<T>[];
    export let theadTrClass = "table-primary";
    export let tbodyClass = "";
    export let detailsClass = "table table-sm mb-0 no-bottom-border";
    export let params: { [key: string]: string } = {};

    $: maxBreakpoint = getMaxBreakpoint(columns);
</script>

<table class={className}>
    <slot />
    <thead>
        <tr class={theadTrClass}>
            {#if maxBreakpoint}
                <th class="d-{maxBreakpoint}-none" />
            {/if}
            {#each columns as col}
                <th class={getCellClass(col, true)}>
                    <ColHeadValue {col} {params} />
                </th>
            {/each}
        </tr>
    </thead>
    <tbody class={tbodyClass}>
        {#each data as record}
            <RespRow {columns} {maxBreakpoint} {record} {detailsClass} {params} />
        {/each}
    </tbody>
</table>
