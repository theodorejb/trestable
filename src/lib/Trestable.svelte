<script lang="ts">
    import { getCellClass, getMaxBreakpoint, getValue } from "./functions.js";
    import type { TableOptions } from "./types.js";

    type T = $$Generic;

    export let options: TableOptions<T>;

    let maxBreakpoint = getMaxBreakpoint(options.columns);
    let openCols: { [key: string]: boolean } = {};
</script>

<div class="table-responsive">
    <table class="table" class:caption-top={!!options.caption}>
        {#if options.caption}
            <caption>{options.caption}</caption>
        {/if}
        <thead>
            <tr class="table-primary">
                {#if maxBreakpoint}
                    <th class="d-table-cell d-{maxBreakpoint}-none" />
                {/if}
                {#each options.columns as col}
                    <th class={getCellClass(col, true, false)}>{col.name}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each options.data as row, i}
                <tr>
                    {#if maxBreakpoint}
                        <td class="d-table-cell d-{maxBreakpoint}-none px-0">
                            <button
                                class="btn btn-link p-0"
                                title="Toggle Details"
                                on:click={() => (openCols[i] = !openCols[i])}
                            >
                                {#if openCols[i]}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        ><path
                                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                                        /></svg
                                    >
                                {:else}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        ><path
                                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                        /></svg
                                    >
                                {/if}
                            </button>
                        </td>
                    {/if}
                    {#each options.columns as col}
                        <td class={getCellClass(col, false, false)}>
                            {#if col.component}
                                <svelte:component this={col.component} record={row} />
                            {:else if col.getValue}
                                {col.getValue(row)}
                            {:else if col.property}
                                {getValue(col.property, row)}
                            {/if}
                        </td>
                    {/each}
                </tr>
                {#if openCols[i]}
                    <tr class="table-row d-{maxBreakpoint}-none">
                        <td colspan={options.columns.length}>
                            <table class="table table-sm mb-0 no-bottom-border">
                                <tbody>
                                    {#each options.columns as col}
                                        {#if col.breakpoint}
                                            <tr>
                                                <th class={getCellClass(col, true, true)}
                                                    >{col.name}</th
                                                >
                                                <td class={getCellClass(col, false, true)}>
                                                    {#if col.component}
                                                        <svelte:component
                                                            this={col.component}
                                                            record={row}
                                                        />
                                                    {:else if col.getValue}
                                                        {col.getValue(row)}
                                                    {:else if col.property}
                                                        {getValue(col.property, row)}
                                                    {/if}
                                                </td>
                                            </tr>
                                        {/if}
                                    {/each}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>

<style>
    .no-bottom-border > tbody > tr:last-child > :is(td, th) {
        border-bottom: 0;
    }
</style>
