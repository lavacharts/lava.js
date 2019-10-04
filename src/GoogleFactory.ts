type GoogleClasses = "DataTable" | "Dashboard" | "Chart";

export default function GoogleFactory<T>(
  gClass: GoogleClasses,
  ...args: any[]
): T {
  return new window.google.visualization[gClass](...args);
}

GoogleFactory<google.visualization.DataTable>("DataTable");
