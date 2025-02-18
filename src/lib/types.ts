import type { Component } from "svelte";

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
    breakpoint?: Breakpoint;
    thClass?: string;
    tdClass?: string;
}

export interface Column<T> extends BaseColumn {
    component?: Component<{
        record: T;
        updateRecord: (record: T) => void;
    }>;
    property?: Leaves<T>;
    getValue?: (data: T) => string;
    bottomCalc?: (records: T[]) => number;
    calcFormatter?: (value: number) => string;
}

export interface CalcColumn<T> {
    column: Column<T>;
    value: number | null;
}

export interface IndexedRecord<T> {
    index: number;
    record: T;
}

export type GroupHeaderCmp<T> = Component<{
    key: string | number;
    records: T[];
}>;
