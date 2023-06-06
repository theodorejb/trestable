<script lang="ts">
    import type { BaseColumn } from "./types.js";
    import { getPropertyParam } from "./functions.js";

    export let col: BaseColumn;
    export let params: { [key: string]: string };
    let sortLink = "";
    let curSortVal = "";

    $: if (col.property) {
        let param = "sort" + getPropertyParam(col.property);
        curSortVal = params[param];

        if (!curSortVal) {
            sortLink = `?${param}=asc`;
        } else if (curSortVal === "asc") {
            sortLink = `?${param}=desc`;
        } else {
            sortLink = "?";
        }
    }
</script>

{#if col.property}
    <a class="icon-link icon-link-hover" href={sortLink}>
        {col.name}
        <svg class="bi" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            {#if curSortVal === "asc"}
                <path
                    d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                />
            {:else if curSortVal === "desc"}
                <path
                    d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                />
            {:else}
                <path
                    d="M19.5 186.7L144.6 54.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6L300.5 186.7c2.2 2.3 3.5 5.4 3.5 8.7c0 7-5.6 12.6-12.6 12.6H28.6c-7 0-12.6-5.6-12.6-12.6c0-3.2 1.2-6.3 3.5-8.7zm-11.6-11C2.8 181 0 188.1 0 195.4C0 211.2 12.8 224 28.6 224H291.4c15.8 0 28.6-12.8 28.6-28.6c0-7.3-2.8-14.4-7.8-19.7L187 43.6C180 36.2 170.2 32 160 32s-20 4.2-27 11.6L7.8 175.7zM19.5 325.3c-2.2-2.3-3.5-5.4-3.5-8.7c0-7 5.6-12.6 12.6-12.6H291.4c7 0 12.6 5.6 12.6 12.6c0 3.2-1.2 6.3-3.5 8.7L175.4 457.4c-4 4.2-9.6 6.6-15.4 6.6s-11.4-2.4-15.4-6.6L19.5 325.3zm-11.6 11L133 468.4c7 7.4 16.8 11.6 27 11.6s20-4.2 27-11.6L312.2 336.3c5-5.3 7.8-12.4 7.8-19.7c0-15.8-12.8-28.6-28.6-28.6H28.6C12.8 288 0 300.8 0 316.6c0 7.3 2.8 14.4 7.8 19.7z"
                />
            {/if}
        </svg>
    </a>
{:else}
    {col.name}
{/if}

<style>
    .icon-link {
        color: inherit;
        text-decoration: none;
    }

    .icon-link:hover {
        text-decoration: underline;
    }
</style>
