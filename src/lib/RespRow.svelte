<script lang="ts">
    import ColValue from "./ColValue.svelte";
    import ColHeadValue from "./ColHeadValue.svelte";
    import { getCellClass } from "./functions.js";
    import type { Column, Breakpoint } from "./types.js";

    type T = $$Generic;

    export let columns: Column<T>[];
    export let maxBreakpoint: Breakpoint | undefined;
    export let record: T;
    export let detailsClass: string;
    export let params: { [key: string]: string };

    let isOpen = false;

    $: toggleLabel = isOpen ? "Hide Details" : "Show Details";
</script>

<tr>
    {#if maxBreakpoint}
        <td class="d-{maxBreakpoint}-none px-0">
            <button
                class="btn btn-link p-0"
                title={toggleLabel}
                aria-label={toggleLabel}
                on:click={() => (isOpen = !isOpen)}
            >
                {#if isOpen}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 488 488"
                        fill="currentColor"
                        ><path
                            d="M 69.136963,200 H 418.86304 C 437.22091,200 452,214.77909 452,233.13696 v 21.72608 C 452,273.22091 437.22091,288 418.86304,288 H 69.136963 C 50.779085,288 36,273.22091 36,254.86304 V 233.13696 C 36,214.77909 50.779085,200 69.136963,200 Z"
                        /></svg
                    >
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 488 488"
                        fill="currentColor"
                        ><path
                            d="M 233.13672 36 C 214.77886 36 200 50.77886 200 69.136719 L 200 200 L 69.136719 200 C 50.77886 200 36 214.77886 36 233.13672 L 36 254.86328 C 36 273.22114 50.77886 288 69.136719 288 L 200 288 L 200 418.86328 C 200 437.22114 214.77886 452 233.13672 452 L 254.86328 452 C 273.22114 452 288 437.22114 288 418.86328 L 288 288 L 418.86328 288 C 437.22114 288 452 273.22114 452 254.86328 L 452 233.13672 C 452 214.77886 437.22114 200 418.86328 200 L 288 200 L 288 69.136719 C 288 50.77886 273.22114 36 254.86328 36 L 233.13672 36 z "
                        /></svg
                    >
                {/if}
            </button>
        </td>
    {/if}
    {#each columns as col}
        <td class={getCellClass(col, false)}>
            <ColValue {col} {record} />
        </td>
    {/each}
</tr>
{#if isOpen}
    <tr class="d-{maxBreakpoint}-none">
        <td colspan={columns.length}>
            <table class={detailsClass}>
                <tbody>
                    {#each columns as col}
                        {#if col.breakpoint}
                            <tr class="d-{col.breakpoint}-none">
                                <th class="{col.thClass ?? ''} bg-transparent">
                                    <ColHeadValue {col} {params} />
                                </th>
                                <td class="{col.tdClass ?? ''} bg-transparent">
                                    <ColValue {col} {record} />
                                </td>
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
