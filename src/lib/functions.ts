import type { BaseColumn, Breakpoint } from "./types.js";

export function getMaxBreakpoint(cols: BaseColumn[]): Breakpoint | undefined {
    const breakpoints = ["sm", "md", "lg", "xl", "xxl", "xxxl"];
    const lastIndex = breakpoints.length - 1;
    let maxBreakpointIndex = -1;
    let maxColumn = null;

    for (const o of cols) {
        if (!o.breakpoint) {
            continue;
        }

        let index = breakpoints.indexOf(o.breakpoint);

        if (index > maxBreakpointIndex) {
            maxBreakpointIndex = index;
            maxColumn = o;
        }

        if (index === lastIndex) {
            break;
        }
    }

    return maxColumn?.breakpoint;
}

export function getCellClass(col: BaseColumn, header: boolean): string {
    let cls = (header ? col.thClass : col.tdClass) || "";

    if (col.breakpoint) {
        cls += ` d-none d-${col.breakpoint}-table-cell`;
    }

    return cls;
}

export function getValue<X>(property: string, obj: X): string {
    const parts = property.split(".");
    let val: any = obj;

    for (const part of parts) {
        val = val[part];

        if (val === null) {
            return val;
        }
    }

    return val;
}
