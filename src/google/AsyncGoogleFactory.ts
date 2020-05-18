import { onGoogleReady } from "./onGoogleReady";

export async function AsyncGoogleFactory(
  className: string,
  ...restArgs: any[]
): Promise<any> {
  return new Promise(resolve => {
    onGoogleReady(google => {
      const googleClass = (google.visualization as any)[className];
      if (restArgs) {
        resolve(new googleClass(...restArgs));
      } else {
        resolve(new googleClass());
      }
    });
  });
}
