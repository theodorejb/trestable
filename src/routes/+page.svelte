<script lang="ts">
    import type { Payment } from "./exampleData.js";
    import type { CalcColumn, Column } from "$lib/types.js";
    import { goto } from "$app/navigation";
    import Pagination from "$lib/Pagination.svelte";
    import Trestable from "$lib/Trestable.svelte";
    import PaymentStatus from "./PaymentStatus.svelte";
    import GroupHeader from "./GroupHeader.svelte";

    let { data } = $props();
    let pages = $derived(data.pages);
    let page = $derived(data.page);
    let params = $derived(data.params);
    let limit = $derived(data.limit);
    // eslint-disable-next-line svelte/prefer-writable-derived
    let items = $state(data.items);

    $effect(() => {
        items = data.items;
    });

    let group = $state(false);
    let customGroupHeader = $state(false);
    let bottomCalc = $state(false);
    let useIcons = $state(false);
    let includeXxxlCol = $state(false);

    const allColumns: Column<Payment>[] = $derived([
        {
            name: "ID",
            property: "id",
            breakpoint: "md",
        },
        {
            name: "Item",
            property: "itemName",
            breakpoint: "lg",
        },
        {
            name: "Purchaser",
            property: "purchaser",
        },
        {
            name: "Amount",
            property: "amount",
            getValue: (d) => formatUSD(d.amount),
            bottomCalc: bottomCalc ? bottomCalcFn : undefined,
            calcFormatter: formatUSD,
        },
        {
            name: "Status",
            property: "lastEvent.status",
            component: PaymentStatus,
        },
        {
            name: "Latest Activity",
            property: "lastEvent.date",
            getValue: (d) => formatDateTime(new Date(d.lastEvent.date)),
            breakpoint: "sm",
            thClass: "text-nowrap",
        },
        {
            name: "Bank Name",
            property: "bankName",
            breakpoint: "xl",
        },
        {
            name: "Office",
            property: "office",
            breakpoint: "xxxl",
        },
        {
            name: "Invoice #",
            property: "invoiceNum",
            breakpoint: "xxl",
        },
    ]);

    const limits = [5, 10, 50, 100, 200];

    let columns: Column<Payment>[] = $derived(
        includeXxxlCol ? allColumns : allColumns.filter((c) => c.breakpoint !== "xxxl"),
    );

    function formatUSD(amount: number): string {
        const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        return formatter.format(amount);
    }

    function formatDateTime(date: Date): string {
        const formatter = new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
        return formatter.format(date);
    }

    function limitChanged(limit: number) {
        // eslint-disable-next-line svelte/prefer-svelte-reactivity
        const search = new URLSearchParams(params);
        search.set("limit", limit.toString());
        search.delete("page");
        goto("?" + search.toString());
    }

    function groupByFn(record: Payment) {
        return record.amount < 1000 ? "< $1000" : ">= $1000";
    }

    function bottomCalcFn(records: Payment[]) {
        return records.reduce((prev, cur) => prev + cur.amount, 0);
    }

    function calcRowClass(calcColumns: CalcColumn<Payment>[]) {
        for (let col of calcColumns) {
            if (col.column.property === "amount" && col.value !== null && col.value > 2000) {
                return "table-success";
            }
        }

        return "table-danger";
    }
</script>

<svelte:head>
    <title>Trestable</title>
</svelte:head>

<main class="flex-shrink-0">
    <div class="bg-primary-subtle py-3">
        <div class="container-lg">
            <h1 class="display-2">
                <img src="logo.svg" alt="Trestable Logo" width="60" />
                Trestable
            </h1>
            <p class="lead mt-3">
                A responsive data table component built with Svelte and Bootstrap 5.
            </p>

            <p>
                <a href="https://github.com/theodorejb/trestable" class="btn btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                    View Readme
                </a>
            </p>
        </div>
    </div>

    <div class="container-lg">
        <h2 class="mt-3">Demo</h2>

        <Trestable
            class="table caption-top mb-4"
            {columns}
            bind:data={items}
            {params}
            groupBy={group ? groupByFn : undefined}
            {calcRowClass}
            groupHeader={customGroupHeader ? GroupHeader : undefined}
        >
            <caption>Payments</caption>
        </Trestable>

        <Pagination {pages} {page} {params} {useIcons} {limit} {limits} {limitChanged} />

        <div class="form-check mb-1">
            <input
                class="form-check-input"
                type="checkbox"
                id="enableGrouping"
                bind:checked={group}
            />
            <label class="form-check-label" for="enableGrouping">Custom grouping function</label>
        </div>
        {#if group}
            <div class="form-check mb-1">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="customGroupHeader"
                    bind:checked={customGroupHeader}
                />
                <label class="form-check-label" for="customGroupHeader">Custom group header</label>
            </div>
        {/if}
        <div class="form-check mb-1">
            <input
                class="form-check-input"
                type="checkbox"
                id="bottomCalc"
                bind:checked={bottomCalc}
            />
            <label class="form-check-label" for="bottomCalc">Custom calculation row</label>
        </div>
        <div class="form-check mb-1">
            <input
                class="form-check-input"
                type="checkbox"
                id="paginationIcons"
                bind:checked={useIcons}
            />
            <label class="form-check-label" for="paginationIcons">Use icons for pagination</label>
        </div>
        <div class="form-check mb-3">
            <input
                class="form-check-input"
                type="checkbox"
                id="includeXxxlCol"
                bind:checked={includeXxxlCol}
            />
            <label class="form-check-label" for="includeXxxlCol">Include always-hidden column</label
            >
        </div>
    </div>
</main>

<style>
    .bi {
        margin-top: -4px;
        margin-right: 2px;
    }
</style>
