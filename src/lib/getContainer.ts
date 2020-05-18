/**
 * Get the HTMLElement into which the chart will be rendered.
 */
export function getContainer(containerId: string): HTMLElement {
  const container = document.getElementById(containerId);

  if (container === null) {
    throw new Error(`document.getElementById("${containerId}") returned null.`);
  }

  return container;
}
