<script lang="ts">
    import { getCellClass, getMaxBreakpoint } from "./functions.js";
    import type { TableOptions } from "./types.js";
    import RespRow from "./RespRow.svelte";

    type T = $$Generic;

    export let options: TableOptions<T>;

    let maxBreakpoint = getMaxBreakpoint(options.columns);
</script>

<div class="table-responsive">
    <table class="table" class:caption-top={!!options.caption}>
        {#if options.caption}
            <caption>{options.caption}</caption>
        {/if}
        <thead>
            <tr class="table-primary">
                {#if maxBreakpoint}
                    <th class="d-table-cell d-{maxBreakpoint}-none" />
                {/if}
                {#each options.columns as col}
                    <th class={getCellClass(col, true)}>{col.name}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each options.data as record}
                <RespRow {options} {maxBreakpoint} {record} />
            {/each}
        </tbody>
    </table>
</div>
