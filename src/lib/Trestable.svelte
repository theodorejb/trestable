<script lang="ts" generics="T">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { Column } from "./types.js";
    import RespRow from "./RespRow.svelte";
    import ColHeadValue from "./ColHeadValue.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        data: T[];
        columns: Column<T>[];
        theadTrClass?: string;
        tbodyClass?: string;
        detailsClass?: string;
        params?: { [key: string]: string };
        children?: Snippet;
    }

    let {
        class: className = "trestable table",
        data,
        columns,
        theadTrClass = "table-primary",
        tbodyClass = "",
        detailsClass = "table table-sm mb-0 no-bottom-border",
        params = {},
        children,
    }: Props = $props();

    let maxBreakpoint = $derived(getMaxBreakpoint(columns));
</script>

<table class={className}>
    {@render children?.()}
    <thead>
        <tr class={theadTrClass}>
            {#if maxBreakpoint}
                <th class="d-{maxBreakpoint}-none"></th>
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
