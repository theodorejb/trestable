import type { BaseColumn, Breakpoint } from "./types.js";

export function getMaxBreakpoint(cols: BaseColumn[]): Breakpoint | undefined {
    let maxBreakpoint = undefined;

    for (const o of cols) {
        if (o.breakpoint === "xxl") {
            maxBreakpoint = o.breakpoint;
            break;
        }

        if (
            !maxBreakpoint ||
            o.breakpoint === "xl" ||
            (o.breakpoint === "lg" && maxBreakpoint !== "xl") ||
            (o.breakpoint === "md" && !["lg", "xl"].includes(maxBreakpoint)) ||
            (o.breakpoint === "sm" && !["md", "lg", "xl"].includes(maxBreakpoint))
        ) {
            maxBreakpoint = o.breakpoint;
            continue;
        }
    }

    return maxBreakpoint;
}

export function getCellClass(col: BaseColumn, header: boolean, details: boolean): string {
    let classStr = (header ? col.thClass : col.tdClass) || "";

    if (col.breakpoint) {
        if (details) {
            classStr += ` d-table-cell d-${col.breakpoint}-none`;
        } else {
            classStr += ` d-none d-${col.breakpoint}-table-cell`;
        }
    }

    return classStr;
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
