<script lang="ts" generics="T">
    import { getCellClass } from "./functions.js";
    import type { Column, Breakpoint, CalcColumn } from "./types.js";

    interface Props {
        columns: Column<T>[];
        maxBreakpoint: Breakpoint | undefined;
        records: T[];
        calcRowClass: ((calcColumns: CalcColumn<T>[]) => string) | undefined;
    }

    let { columns, maxBreakpoint, records, calcRowClass }: Props = $props();

    let calcColumns: CalcColumn<T>[] = $derived(
        columns.map((c) => ({
            column: c,
            value: c.bottomCalc ? c.bottomCalc(records) : null,
        })),
    );
</script>

<tr class={calcRowClass ? calcRowClass(calcColumns) : ""}>
    {#if maxBreakpoint}
        <td class="d-{maxBreakpoint}-none d-print-none px-0"></td>
    {/if}
    {#each calcColumns as col}
        <td class={getCellClass(col.column, false)}>
            {#if col.value !== null && col.column.calcFormatter}
                {col.column.calcFormatter(col.value)}
            {:else}
                {col.value}
            {/if}
        </td>
    {/each}
</tr>
