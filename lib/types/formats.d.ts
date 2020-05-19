export declare type SupportedFormatters = "NumberFormat" | "DateFormat";
export interface Formatter {
    index: number;
    options: Record<string, any>;
    type: SupportedFormatters;
}
