<script lang="ts">
    import type { Payment } from "./exampleData.js";

    interface Props {
        record: Payment;
        updateRecord: (record: Payment) => void;
    }

    let { record, updateRecord }: Props = $props();

    function change() {
        const newRecord = $state.snapshot(record);
        newRecord.lastEvent = {
            ...newRecord.lastEvent,
            status: "Updated",
            color: "magenta",
            details: "New description",
        };
        updateRecord(newRecord);
    }
</script>

<span style="color: {record.lastEvent.color}">{record.lastEvent.status}</span>

{#if record.lastEvent.details}
    <br />
    <em class="small">{record.lastEvent.details}</em>
{/if}
{#if record.lastEvent.details === "Reason: Not worth it"}
    <button class="btn btn-sm btn-outline-primary ms-1" onclick={change}>Change</button>
{/if}
