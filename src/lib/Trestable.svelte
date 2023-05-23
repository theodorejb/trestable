<script lang="ts">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { TableOptions } from "./types.js";
    import RespRow from "./RespRow.svelte";

    type T = $$Generic;

    export let options: TableOptions<T>;
    $: maxBreakpoint = getMaxBreakpoint(options.columns);

    if (options.class === undefined) {
        options.class = "trestable table";
    }

    if (options.theadTrClass === undefined) {
        options.theadTrClass = "table-primary";
    }

    if (options.detailsClass === undefined) {
        options.detailsClass = "table table-sm mb-0 no-bottom-border";
    }
</script>

<table class={options.class}>
    <slot />
    <thead>
        <tr class={options.theadTrClass}>
            {#if maxBreakpoint}
                <th class="d-{maxBreakpoint}-none" />
            {/if}
            {#each options.columns as col}
                <th class={getCellClass(col, true)}>{col.name}</th>
            {/each}
        </tr>
    </thead>
    <tbody class={options.tbodyClass}>
        {#each options.data as record}
            <RespRow {options} {maxBreakpoint} {record} />
        {/each}
    </tbody>
</table>
