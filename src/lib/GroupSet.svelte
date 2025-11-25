<script lang="ts" generics="T">
    import CalcRow from "./CalcRow.svelte";
    import RespRow from "./RespRow.svelte";
    import type { Column, Breakpoint, IndexedRecord, GroupHeaderCmp, CalcColumn } from "./types.js";

    interface Props {
        columns: Column<T>[];
        maxBreakpoint: Breakpoint | undefined;
        key: string | number;
        iRecords: IndexedRecord<T>[];
        hasBottomCalc: boolean;
        replace: (index: number, record: T) => void;
        detailsClass: string;
        groupHeader: GroupHeaderCmp<T> | undefined;
        calcRowClass: ((calcColumns: CalcColumn<T>[]) => string) | undefined;
        params: { [key: string]: string };
        groupCollapseLabel: string;
        groupExpandLabel: string;
        rowCollapseLabel: string;
        rowExpandLabel: string;
    }

    let {
        columns,
        maxBreakpoint,
        key,
        iRecords,
        hasBottomCalc,
        replace,
        detailsClass,
        groupHeader: GroupHeader,
        calcRowClass,
        params,
        groupCollapseLabel,
        groupExpandLabel,
        rowCollapseLabel,
        rowExpandLabel,
    }: Props = $props();

    let isOpen = $state(true);
    let toggleLabel = $derived(isOpen ? groupCollapseLabel : groupExpandLabel);
    let records = $derived(iRecords.map((ir) => ir.record));
</script>

{#if GroupHeader}
    <tr class="table-secondary">
        <td colspan={columns.length}>
            <button
                type="button"
                class="btn btn-link p-0 me-2"
                title={toggleLabel}
                aria-label={toggleLabel}
                onclick={() => (isOpen = !isOpen)}
            >
                {#if isOpen}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        ><path
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        /></svg
                    >
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        ><path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                        /></svg
                    >
                {/if}
            </button>

            <GroupHeader {key} {records} />
        </td>
    </tr>
{/if}

{#if isOpen || !GroupHeader}
    {#each iRecords as rec}
        <RespRow
            {columns}
            {maxBreakpoint}
            record={rec.record}
            index={rec.index}
            {replace}
            {detailsClass}
            {params}
            collapseLabel={rowCollapseLabel}
            expandLabel={rowExpandLabel}
        />
    {/each}
{/if}

{#if hasBottomCalc}
    <CalcRow {columns} {maxBreakpoint} {records} {calcRowClass} />
{/if}
