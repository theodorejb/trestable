<script lang="ts">
    interface Props {
        key: string | number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        records: any[];
    }

    let { key, records }: Props = $props();
</script>

<b>{key}</b> ({records.length} item{records.length === 1 ? "" : "s"})
