import {readFileSync, realpathSync} from 'fs';

export default function getChartTypes() {
    const mapPath = realpathSync(__dirname+'/../resources/visualization-map.json');
    const chartMap = JSON.parse(readFileSync(mapPath));

    return Object.getOwnPropertyNames(chartMap);
}
