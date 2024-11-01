<script lang="ts">
    interface Props {
        pages: number;
        page: number;
        limitChanged: (limit: number) => void;
        params?: { [key: string]: string };
        label?: string;
        paramName?: string;
        prevName?: string;
        nextName?: string;
        useIcons?: boolean;
        limitLabel?: string;
        limit?: number;
        limits?: number[];
    }

    let {
        pages,
        page: reqPage,
        limitChanged,
        params = {},
        label = "Table page navigation",
        paramName = "page",
        prevName = "Previous",
        nextName = "Next",
        useIcons = false,
        limitLabel = "Page size",
        limit = $bindable(25),
        limits = [10, 25, 50, 100, 200],
    }: Props = $props();

    let page = $derived(reqPage > pages ? pages : reqPage);
    let allPages = $derived([...Array(pages).keys()].map((i) => i + 1));
    let pageArr = $derived.by(() => {
        if (pages > 5) {
            let startPage = page - 3;
            let endPage = page + 2;

            if (startPage < 0) {
                endPage += 0 - startPage;
                startPage = 0;
            } else if (endPage >= pages) {
                startPage -= endPage - pages;
            }

            let pageArray = allPages.slice(startPage, endPage);
            pageArray[0] = 1;
            pageArray[pageArray.length - 1] = pages;
            return pageArray;
        } else {
            return allPages;
        }
    });

    function getLink(page: number, params: { [key: string]: string }) {
        const search = new URLSearchParams(params);
        search.set(paramName, page.toString());
        return "?" + search.toString();
    }
</script>

<nav aria-label={label}>
    <div class="row justify-content-evenly g-3 mb-3">
        <div class="col-sm-9">
            <ul class="pagination mb-0">
                <li class="page-item" class:disabled={page < 2}>
                    <a
                        tabindex={page < 2 ? -1 : null}
                        class="page-link"
                        aria-label={prevName}
                        href={getLink(page - 1, params)}
                    >
                        {#if useIcons}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="pg-img"
                                height="1em"
                                viewBox="0 0 320 512"
                                fill="currentColor"
                                ><path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                /></svg
                            >
                        {:else}
                            {prevName}
                        {/if}
                    </a>
                </li>

                {#each pageArr as pg}
                    <li class="page-item" class:active={pg === page}>
                        <a class="page-link" href={getLink(pg, params)}>{pg}</a>
                    </li>
                {/each}

                <li class="page-item" class:disabled={page === pages}>
                    <a
                        tabindex={page === pages ? -1 : null}
                        class="page-link"
                        aria-label={nextName}
                        href={getLink(page + 1, params)}
                    >
                        {#if useIcons}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="pg-img"
                                height="1em"
                                viewBox="0 0 320 512"
                                fill="currentColor"
                                ><path
                                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                /></svg
                            >
                        {:else}
                            {nextName}
                        {/if}
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-sm-3">
            {#if limits.length > 0}
                <select
                    aria-label={limitLabel}
                    class="form-select float-sm-end w-auto"
                    bind:value={limit}
                    onchange={() => limitChanged(limit)}
                >
                    <option value="" disabled>{limitLabel}</option>
                    {#each limits as limit}
                        <option value={limit}>{limit}</option>
                    {/each}
                </select>
            {/if}
        </div>
    </div>
</nav>

<style>
    .pg-img {
        position: relative;
        top: -2px;
    }
</style>
