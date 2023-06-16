<script lang="ts">
    import type { Payment } from "./exampleData.js";
    import type { Column } from "$lib/types.js";
    import type { PageData } from "./$types.js";
    import { goto } from "$app/navigation";
    import Pagination from "$lib/Pagination.svelte";
    import Trestable from "$lib/Trestable.svelte";
    import PaymentStatus from "./PaymentStatus.svelte";
    import PaymentActions from "./PaymentActions.svelte";

    export let data: PageData;

    const allColumns: Column<Payment>[] = [
        {
            name: "ID",
            property: "id",
            breakpoint: "sm",
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
            breakpoint: "md",
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
            breakpoint: "md",
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
        {
            name: "Actions",
            tdClass: "text-nowrap small",
            component: PaymentActions,
        },
    ];

    let paginationIcons = false;
    let includeXxxlCol = false;
    let columns: Column<Payment>[] = [];

    $: if (includeXxxlCol) {
        columns = allColumns;
    } else {
        columns = allColumns.filter((c) => c.breakpoint !== "xxxl");
    }

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

    function handleLimitChange(event: CustomEvent<{ limit: number }>) {
        const search = new URLSearchParams(data.params);
        search.set("limit", event.detail.limit.toString());
        goto("?" + search.toString());
    }
</script>

<svelte:head>
    <title>Trestable</title>
</svelte:head>

<main class="flex-shrink-0">
    <div class="container-lg">
        <h1 class="mt-1">Trestable</h1>

        <p class="lead">A responsive data table component built with Svelte and Bootstrap 5.</p>

        <Trestable class="table caption-top mb-4" {columns} data={data.data} params={data.params}>
            <caption>Payments</caption>
        </Trestable>

        <Pagination
            page={data.page}
            pages={data.pages}
            params={data.params}
            useIcons={paginationIcons}
            limit={+(data.params.limit ?? 25)}
            on:limitChanged={handleLimitChange}
        />

        <div class="form-check mb-2">
            <input
                class="form-check-input"
                type="checkbox"
                id="paginationIcons"
                bind:checked={paginationIcons}
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
