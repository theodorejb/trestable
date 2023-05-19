<script lang="ts">
    import type { Payment } from "./exampleData.js";

    export let record: Payment;
</script>

<span style="color: {record.lastEvent.color}">{record.lastEvent.status}</span>

{#if record.lastEvent.details}
    <br />
    <em class="small">{record.lastEvent.details}</em>
{/if}
