<script lang="ts">
    export let pages: number;
    export let page: number;
    export let params: { [key: string]: string } = {};
    export let label = "Table page navigation";
    export let paramName = "page";
    export let prevName = "Previous";
    export let nextName = "Next";

    $: if (page > pages) {
        page = pages;
    }

    $: allPages = [...Array(pages).keys()].map((i) => i + 1);
    let pageArr: number[] = [];

    $: if (pages > 6) {
        let startPage = page - 3;
        let endPage = page + 3;

        if (startPage < 0) {
            endPage += 0 - startPage;
            startPage = 0;
        } else if (endPage >= pages) {
            startPage -= endPage - pages;
        }

        pageArr = allPages.slice(startPage, endPage);
        pageArr[0] = 1;
        pageArr[5] = pages;
    } else {
        pageArr = allPages;
    }

    function getLink(page: number, params: { [key: string]: string }) {
        const search = new URLSearchParams(params);
        search.set(paramName, page.toString());
        return "?" + search.toString();
    }
</script>

<nav aria-label={label}>
    <ul class="pagination">
        <li class="page-item" class:disabled={page < 2}>
            <a tabindex={page < 2 ? -1 : null} class="page-link" href={getLink(page - 1, params)}
                >{prevName}</a
            >
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
                href={getLink(page + 1, params)}>{nextName}</a
            >
        </li>
    </ul>
</nav>
