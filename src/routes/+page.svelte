<script lang="ts">
    import type { Payment } from "./exampleData.js";
    import type { Column, TableOptions } from "$lib/types.js";
    import Pagination from "$lib/Pagination.svelte";
    import Trestable from "$lib/Trestable.svelte";
    import PaymentStatus from "./PaymentStatus.svelte";
    import PaymentActions from "./PaymentActions.svelte";
    import type { PageData } from "./$types.js";

    export let data: PageData;

    const columns: Column<Payment>[] = [
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

    let options: TableOptions<Payment> = {
        class: "table caption-top mb-4",
        data: [],
        columns: [],
    };

    let includeXxxlCol = false;

    $: if (includeXxxlCol) {
        options.columns = columns;
    } else {
        options.columns = columns.filter((c) => c.breakpoint !== "xxxl");
    }

    $: options.data = data.data;

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
</script>

<svelte:head>
    <title>Trestable</title>
</svelte:head>

<main class="flex-shrink-0">
    <div class="container-lg">
        <h1 class="mt-1">Trestable</h1>

        <p class="lead">A responsive data table component built with Svelte and Bootstrap 5.</p>

        <Trestable {options}>
            <caption>Payments</caption>
        </Trestable>

        <Pagination page={data.page} pages={data.pages} params={data.params} />

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
