// This is the equivalent of the old waitsFor/runs syntax
// which was removed from Jasmine 2
// @link https://gist.github.com/abreckner/110e28897d42126a3bb9#file-waitsforandruns-js
function waitsForAndRuns(escapeFunction, runFunction, escapeTime) {
    if (! escapeTime) {
        escapeTime = 250;
    }

    // check the escapeFunction every millisecond so as soon as it is met we can escape the function
    var interval = setInterval(function() {
        if (escapeFunction()) {
            clearMe();
            runFunction();
        }
    }, 1);

    // in case we never reach the escapeFunction, we will time out
    // at the escapeTime
    var timeOut = setTimeout(function() {
        clearMe();
        runFunction();
    }, escapeTime);

    // clear the interval and the timeout
    function clearMe(){
        clearInterval(interval);
        clearTimeout(timeOut);
    }
};

function getPieChartJson() {
    return {
        label: "My Cool Chart",
        type: "PieChart",
        elementId: "test-chart",
        datatable: [
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ],
        options: {
            title: 'My Daily Activities'
        }
    }
}

function getDataTableJson() {
    return {
        "cols": [
            {"type": "string", "label": "Stuff"},
            {"type": "number", "label": "Age"}
        ],
        "rows": [
            {"c": [{"v": "things1"}, {"v": 37}]},
            {"c": [{"v": "things2"}, {"v": 72}]}
        ]
    };
}

function getDataTableArray() {
    return [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ];
}

function getOptions() {
    return {
        "title": "Company Finances",
        "legend": "none",
        "colorAxis": {"colors": ["black", "green"]}
    };
}

window.utils = {
    getPieChartJson:   getPieChartJson,
    getDataTableJson:  getDataTableJson,
    getDataTableArray: getDataTableArray,
    getOptions:        getOptions,
    waitsForAndRuns:   waitsForAndRuns
};

