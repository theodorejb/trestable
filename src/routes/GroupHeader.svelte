<script lang="ts">
    import type { Payment } from "./exampleData.js";

    interface Props {
        key: string | number;
        records: Payment[];
    }

    let { key, records }: Props = $props();
    let cheap = $derived(key === "< $1000");
</script>

<b class={cheap ? "text-success" : "text-info"}>
    {#if cheap}
        Cheap
    {:else}
        Expensive
    {/if}
    items
</b>

({records.length})
