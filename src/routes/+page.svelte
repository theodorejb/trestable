<script lang="ts">
    import { exampleData } from "./exampleData.js";
    import type { Payment } from "./exampleData.js";
    import type { TableOptions } from "$lib/types.js";
    import Trestable from "$lib/Trestable.svelte";
    import PaymentStatus from "./PaymentStatus.svelte";
    import PaymentActions from "./PaymentActions.svelte";

    let options: TableOptions<Payment> = {
        caption: "Payments",
        data: exampleData,
        columns: [
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
                name: "Invoice #",
                property: "invoiceNum",
                breakpoint: "xxl",
            },
            {
                name: "Actions",
                tdClass: "text-nowrap small",
                component: PaymentActions,
            },
        ],
    };

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
        <h1>Trestable</h1>

        <p class="lead">A responsive data table component built with Svelte and Bootstrap 5.</p>

        <Trestable {options} />
    </div>
</main>
