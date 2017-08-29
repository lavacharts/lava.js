function getPieChartJson() {
    return {
        label: 'MyCoolChart',
        type: 'PieChart',
        elementId: 'test-chart',
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
        cols: [
            {type: 'string', label: 'Stuff'},
            {type: 'number', label: 'Age'}
        ],
        rows: [
            {c: [{v: 'things1'}, {v: 37}]},
            {c: [{v: 'things2'}, {v: 72}]}
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
        title: 'Company Finances',
        legend: 'none',
        colorAxis: {
            colors: ['black', 'green']
        }
    };
}

window.utils = {
    getPieChartJson:   getPieChartJson,
    getDataTableJson:  getDataTableJson,
    getDataTableArray: getDataTableArray,
    getOptions:        getOptions
};

