<script lang="ts" generics="T">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { CalcColumn, Column, GroupHeaderCmp, IndexedRecord } from "./types.js";
    import ColHeadValue from "./ColHeadValue.svelte";
    import type { Snippet } from "svelte";
    import GroupSet from "./GroupSet.svelte";

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
    }

    let {
        class: className = "trestable table",
        data = $bindable(),
        columns,
        theadTrClass = "table-primary",
        tbodyClass = "",
        detailsClass = "table table-sm mb-0 no-bottom-border",
        groupBy,
        groupHeader,
        calcRowClass,
        params = {},
        children,
    }: Props = $props();

    function replace(index: number, record: T) {
        data[index] = record;
    }

    let maxBreakpoint = $derived(getMaxBreakpoint(columns));

    let groupedData = $derived.by(() => {
        const map = new Map<string | number, IndexedRecord<T>[]>();

        // preserve original index to allow replacing records
        if (groupBy) {
            for (const [index, record] of data.entries()) {
                const key = groupBy(record);
                const existing = map.get(key);
                const iRecord = { index, record };

                if (existing) {
                    existing.push(iRecord);
                } else {
                    map.set(key, [iRecord]);
                }
            }
        } else {
            const iRecords = [];
            for (const [index, record] of data.entries()) {
                iRecords.push({ index, record });
            }
            map.set("All", iRecords);
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
                {groupHeader}
                {calcRowClass}
                {params}
            />
        {/each}
    </tbody>
</table>
