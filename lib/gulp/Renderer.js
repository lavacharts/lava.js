import Nightmare from "nightmare";
import { resolve } from "path";
import { cwd } from "process";

import getPhpServer from "./PhpServer";

function _getNightmare(timeout) {
  return new Nightmare({
    gotoTimeout: timeout,
    waitTimeout: timeout,
    loadTimeout: timeout,
    executionTimeout: timeout
  });
}

export default function renderChart(chartType) {
  return getPhpServer().then(server => {
    const chartUrl = "http://localhost:" + server.port + "/" + chartType;
    const renderDir = resolve(cwd(), "renders");
    const chartImg = renderDir + "/" + chartType + ".png";

    console.log("Nightmare opening " + chartUrl);

    return _getNightmare(5000)
      .viewport(800, 600)
      .goto(chartUrl)
      .wait(3000)
      .screenshot(chartImg)
      .end(() => {
        console.log("Saved screenshot to " + chartImg);

        server.closeServer();
      });
  });
}
