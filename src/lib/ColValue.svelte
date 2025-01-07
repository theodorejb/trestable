<script lang="ts" generics="T">
    import { getValue } from "./functions.js";
    import type { Column } from "./types.js";

    interface Props {
        col: Column<T>;
        record: T;
        updateRecord: (record: T) => void;
    }

    let { col, record, updateRecord }: Props = $props();
</script>

{#if col.component}
    <col.component {record} {updateRecord} />
{:else if col.getValue}
    {col.getValue(record)}
{:else if col.property}
    {getValue(col.property, record)}
{/if}
