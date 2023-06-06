<script lang="ts">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { Column } from "./types.js";
    import RespRow from "./RespRow.svelte";

    type T = $$Generic;

    export let data: T[];
    export let columns: Column<T>[];
    export let theadTrClass = "table-primary";
    export let tbodyClass = "";
    export let detailsClass = "table table-sm mb-0 no-bottom-border";

    $: maxBreakpoint = getMaxBreakpoint(columns);
</script>

<table class={$$props.class ?? "trestable table"}>
    <slot />
    <thead>
        <tr class={theadTrClass}>
            {#if maxBreakpoint}
                <th class="d-{maxBreakpoint}-none" />
            {/if}
            {#each columns as col}
                <th class={getCellClass(col, true)}>{col.name}</th>
            {/each}
        </tr>
    </thead>
    <tbody class={tbodyClass}>
        {#each data as record}
            <RespRow {columns} {maxBreakpoint} {record} {detailsClass} />
        {/each}
    </tbody>
</table>
