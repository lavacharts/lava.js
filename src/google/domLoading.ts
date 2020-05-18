/**
 * Promise for the DOM to be ready.
 */
export async function domLoading(): Promise<void> {
  return new Promise(resolve => {
    if (["interactive", "complete"].includes(document.readyState)) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => resolve());
    }
  });
}
