import { ControlWrapper } from "../wrapper/ControlWrapper";

type WrapperOptionsPartial = Exclude<
  google.visualization.ControlWrapperOptions,
  "controlType"
>;

export function category(payload: WrapperOptionsPartial): ControlWrapper {
  return new ControlWrapper({
    controlType: "CategoryFilter",
    ...payload
  });
}

export function chartRange(payload: WrapperOptionsPartial): ControlWrapper {
  return new ControlWrapper({
    controlType: "ChartRangeFilter",
    ...payload
  });
}

export function dateRange(payload: WrapperOptionsPartial): ControlWrapper {
  return new ControlWrapper({
    controlType: "DateRangeFilter",
    ...payload
  });
}

export function numberRange(payload: WrapperOptionsPartial): ControlWrapper {
  return new ControlWrapper({
    controlType: "NumberRangeFilter",
    ...payload
  });
}

export function string(payload: WrapperOptionsPartial): ControlWrapper {
  return new ControlWrapper({
    controlType: "StringFilter",
    ...payload
  });
}

export const Filters = {
  category,
  chartRange,
  dateRange,
  numberRange,
  string
};
