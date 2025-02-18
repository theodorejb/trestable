<script lang="ts">
    import type { Payment } from "./exampleData.js";

    interface Props {
        key: string | number;
        records: Payment[];
    }

    let { key, records }: Props = $props();
</script>

<b>{key}</b> ({records.length} items)
