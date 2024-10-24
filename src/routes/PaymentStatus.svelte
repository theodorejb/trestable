<script lang="ts">
    import type { Payment } from "./exampleData.js";

    interface Props {
        record: Payment;
    }

    let { record }: Props = $props();
</script>

<span style="color: {record.lastEvent.color}">{record.lastEvent.status}</span>

{#if record.lastEvent.details}
    <br />
    <em class="small">{record.lastEvent.details}</em>
{/if}
