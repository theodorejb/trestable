<script lang="ts">
    import "../styles.scss";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

{@render children?.()}
