export type SupportedFormatters = "NumberFormat" | "DateFormat";

export interface Formatter {
  index: number;
  options: Record<string, unknown>;
  type: SupportedFormatters;
}
