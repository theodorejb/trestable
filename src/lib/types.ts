import type { ComponentType, SvelteComponent } from "svelte";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type Leaves<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
              ? ""
              : `.${Leaves<T[K]>}`}`;
      }[keyof T]
    : never;

export interface BaseColumn {
    name: string;
    component?: ComponentType<SvelteComponent>;
    breakpoint?: Breakpoint;
    thClass?: string;
    tdClass?: string;
}

export interface Column<T> extends BaseColumn {
    property?: Leaves<T>;
    getValue?: (data: T) => string;
}
