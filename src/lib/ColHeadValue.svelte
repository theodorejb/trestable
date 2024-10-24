<script lang="ts" generics="T">
    import { run } from "svelte/legacy";

    import { getPropertyParam } from "./functions.js";
    import type { Column } from "./types.js";

    interface Props {
        col: Column<T>;
        params: { [key: string]: string };
    }

    let { col, params }: Props = $props();
    let sortLink = $state("");
    let curSortVal = $state("");

    run(() => {
        if (col.property) {
            let filteredParams = Object.fromEntries(
                Object.entries(params).filter(
                    ([key]) => key !== "page" && !key.startsWith("sort["),
                ),
            );

            let paramsObj = new URLSearchParams(filteredParams);
            let param = "sort" + getPropertyParam(col.property);
            curSortVal = params[param];

            if (!curSortVal) {
                paramsObj.set(param, "asc");
            } else if (curSortVal === "asc") {
                paramsObj.set(param, "desc");
            }

            sortLink = "?" + paramsObj.toString();
        }
    });
</script>

{#if col.property}
    <a class="icon-link icon-link-hover" href={sortLink}>
        {col.name}
        {#if curSortVal === "asc" || curSortVal === "desc"}
            <svg class="bi" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                {#if curSortVal === "asc"}
                    <path
                        d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                    />
                {:else if curSortVal === "desc"}
                    <path
                        d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                    />
                {/if}
            </svg>
        {/if}
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
