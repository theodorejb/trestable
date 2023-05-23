<script lang="ts">
    import ColValue from "./ColValue.svelte";
    import { getCellClass } from "./functions.js";
    import type { TableOptions, Breakpoint } from "./types.js";

    type T = $$Generic;

    export let options: TableOptions<T>;
    export let maxBreakpoint: Breakpoint | undefined;
    export let record: T;

    let isOpen = false;
</script>

<tr>
    {#if maxBreakpoint}
        <td class="d-{maxBreakpoint}-none px-0">
            <button
                class="btn btn-link p-0"
                title="Toggle Details"
                on:click={() => (isOpen = !isOpen)}
            >
                {#if isOpen}
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
        <td class={getCellClass(col, false)}>
            <ColValue {col} {record} />
        </td>
    {/each}
</tr>
{#if isOpen}
    <tr class="d-{maxBreakpoint}-none">
        <td colspan={options.columns.length}>
            <table class={options.detailsClass}>
                <tbody>
                    {#each options.columns as col}
                        {#if col.breakpoint}
                            <tr class="d-{col.breakpoint}-none">
                                <th class={col.thClass}>{col.name}</th>
                                <td class={col.tdClass}><ColValue {col} {record} /></td>
                            </tr>
                        {/if}
                    {/each}
                </tbody>
            </table>
        </td>
    </tr>
{/if}

<style>
    /* breakpoints from https://getbootstrap.com/docs/5.3/layout/breakpoints/ */

    @media (max-width: 575.98px) {
        /* xs screen */
        .no-bottom-border > tbody > tr:last-child > :is(td, th) {
            border-bottom: 0;
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        /* sm screen */
        .no-bottom-border > tbody > tr:nth-last-child(1 of :not(.d-sm-none)) > :is(td, th) {
            border-bottom: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        /* md screen */
        .no-bottom-border
            > tbody
            > tr:nth-last-child(1 of :not(.d-sm-none, .d-md-none))
            > :is(td, th) {
            border-bottom: 0;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        /* lg screen */
        .no-bottom-border
            > tbody
            > tr:nth-last-child(1 of :not(.d-sm-none, .d-md-none, .d-lg-none))
            > :is(td, th) {
            border-bottom: 0;
        }
    }

    @media (min-width: 1200px) and (max-width: 1399.98px) {
        /* xl screen */
        .no-bottom-border
            > tbody
            > tr:nth-last-child(1 of :not(.d-sm-none, .d-md-none, .d-lg-none, .d-xl-none))
            > :is(td, th) {
            border-bottom: 0;
        }
    }

    @media (min-width: 1400px) {
        /* xxl screen */
        .no-bottom-border
            > tbody
            > tr:nth-last-child(
                1 of :not(.d-sm-none, .d-md-none, .d-lg-none, .d-xl-none, .d-xxl-none)
            )
            > :is(td, th) {
            border-bottom: 0;
        }
    }
</style>
