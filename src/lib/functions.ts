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

        const index = breakpoints.indexOf(o.breakpoint);

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

export function getPropertyParam(property: string): string {
    const parts = property.split(".");
    let param = "";

    for (const part of parts) {
        param += `[${part}]`;
    }

    return param;
}

export function getParamProperty(param: string): string {
    let property = param.replaceAll("][", ".");
    property = property.replaceAll("sort[", "");

    return property.replaceAll("]", "");
}

export function getValue<X>(property: string, obj: X): string | number | boolean {
    const parts = property.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = obj;

    for (const part of parts) {
        val = val[part];

        if (val === null) {
            return "";
        }
    }

    return val;
}
