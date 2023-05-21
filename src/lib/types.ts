import type { ComponentType, SvelteComponentTyped } from "svelte";

export interface TableOptions<T> {
    caption?: string;
    data: T[];
    columns: Column<T>[];
}

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export interface BaseColumn {
    name: string;
    property?: string;
    component?: ComponentType<SvelteComponentTyped>;
    breakpoint?: Breakpoint;
    thClass?: string;
    tdClass?: string;
}

export interface Column<T> extends BaseColumn {
    getValue?: (data: T) => string;
}
