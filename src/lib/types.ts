import type { ComponentType, SvelteComponent } from "svelte";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export interface BaseColumn {
    name: string;
    property?: string;
    component?: ComponentType<SvelteComponent>;
    breakpoint?: Breakpoint;
    thClass?: string;
    tdClass?: string;
}

export interface Column<T> extends BaseColumn {
    getValue?: (data: T) => string;
}
