<script lang="ts" generics="T">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { CalcColumn, Column, GroupHeaderCmp, IndexedRecord } from "./types.js";
    import ColHeadValue from "./ColHeadValue.svelte";
    import type { Snippet } from "svelte";
    import GroupSet from "./GroupSet.svelte";
    import DefaultGroupHeader from "./DefaultGroupHeader.svelte";

    interface Props {
        class?: string;
        data: T[];
        columns: Column<T>[];
        theadTrClass?: string;
        tbodyClass?: string;
        detailsClass?: string;
        groupBy?: (record: T) => string | number;
        groupHeader?: GroupHeaderCmp<T>;
        calcRowClass?: (calcColumns: CalcColumn<T>[]) => string;
        params?: { [key: string]: string };
        children?: Snippet;
        groupCollapseLabel?: string;
        groupExpandLabel?: string;
        rowCollapseLabel?: string;
        rowExpandLabel?: string;
    }

    let {
        class: className = "trestable table",
        data = $bindable(),
        columns,
        theadTrClass = "table-primary",
        tbodyClass = "",
        detailsClass = "table table-sm mb-0 no-bottom-border",
        groupBy,
        groupHeader = DefaultGroupHeader,
        calcRowClass,
        params = {},
        children,
        groupCollapseLabel = "Collapse Group",
        groupExpandLabel = "Expand Group",
        rowCollapseLabel = "Hide Details",
        rowExpandLabel = "Show Details",
    }: Props = $props();

    function replace(index: number, record: T) {
        data[index] = record;
    }

    let maxBreakpoint = $derived(getMaxBreakpoint(columns));

    let groupedData = $derived.by(() => {
        // eslint-disable-next-line svelte/prefer-svelte-reactivity
        const map = new Map<string | number, IndexedRecord<T>[]>();

        // preserve original index to allow replacing records
        for (const [index, record] of data.entries()) {
            const key = groupBy ? groupBy(record) : "all";
            const existing = map.get(key);
            const iRecord = { index, record };

            if (existing) {
                existing.push(iRecord);
            } else {
                map.set(key, [iRecord]);
            }
        }

        return map;
    });

    let hasBottomCalc = $derived(columns.some((c) => !!c.bottomCalc));
</script>

<table class={className}>
    {@render children?.()}
    <thead>
        <tr class={theadTrClass}>
            {#if maxBreakpoint}
                <th class="d-{maxBreakpoint}-none d-print-none"></th>
            {/if}
            {#each columns as col}
                <th class={getCellClass(col, true)}>
                    <ColHeadValue {col} {params} />
                </th>
            {/each}
        </tr>
    </thead>
    <tbody class={tbodyClass}>
        {#each groupedData as [key, iRecords]}
            <GroupSet
                {columns}
                {maxBreakpoint}
                {key}
                {iRecords}
                {hasBottomCalc}
                {replace}
                {detailsClass}
                groupHeader={groupBy ? groupHeader : undefined}
                {calcRowClass}
                {params}
                {groupCollapseLabel}
                {groupExpandLabel}
                {rowCollapseLabel}
                {rowExpandLabel}
            />
        {/each}
    </tbody>
</table>
