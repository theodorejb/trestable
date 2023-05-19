<script lang="ts">
    import type { Payment } from "./exampleData.js";

    export let record: Payment;
</script>

<a href="/">View History</a>

{#if record.lastEvent.id < 3}
    <br /><a href="/">Cancel</a>
    <br /><a href="/">Resend Email</a>
{/if}
