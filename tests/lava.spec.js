/* jshint undef: true, unused: true */
/* globals sinon, jasmine, describe, it, expect, beforeEach */

describe('LavaJs.js Test Suite', function () {
    beforeEach(function () {
        var div = document.createElement('div');
        div.id = 'test-chart';

        document.body.appendChild(div);
    });

    afterEach(function () {
        document.body.removeChild(
            document.getElementById('test-chart')
        );
    });

    describe('lava#create', function () {
        it('Should create a new Chart from a JSON payload.', function () {
            var chart = lava.create(utils.getPieChartJson());

            expect(chart.label).toEqual('My Cool Chart');
            expect(chart.type).toEqual('PieChart');
            expect(chart.class).toEqual('PieChart');
            expect(chart.uuid).toEqual('PieChart::My Cool Chart');
            expect(chart.packages).toEqual('corechart');
            expect(chart.element).toEqual(jasmine.any(HTMLElement));
            expect(chart.data).toBeNull();
            expect(chart.gchart).toBeNull();
            expect(typeof chart.render).toEqual('function');
            expect(typeof chart.draw).toEqual('function');
            expect(typeof chart.setData).toEqual('function');
            expect(typeof chart.setOptions).toEqual('function');
        });

        it('Should have a Google Chart and DataTable after lava.run().', function () {
            var chart = lava.create(utils.getPieChartJson());
            var renderSpy = sinon.spy(chart, 'render');

            lava.run();

            lava.ready(function () {
                sinon.assert.calledOnce(renderSpy);
                expect(chart.data).toBe(jasmine.any(google.visualization.DataTable));
                expect(chart.gchart).toBe(jasmine.any(google.visualization.PieChart));
            });
        });
    });


    describe('lava#EventEmitter', function () {
        it('Should emit and listen to events', function () {
            lava.on('test', function (p1, p2) {
                expect(p1).toBe('taco');
                expect(p2).toBe('bell');
            });

            lava.emit('test', 'taco', 'bell');
        })
    });


    describe('lava#run', function () {
        it('Should emit a "ready" event.', function (done) {
            var callback = sinon.spy();

            lava.on('ready', callback);
            lava.run();

            utils.waitsForAndRuns(function () {
                return callback.called;
            }, function () {
                expect(callback).toHaveBeenCalled();
                done();
            });
        });

        it('Should have loaded Google to the window when "ready"', function () {
            lava.run();

            lava.on('ready', function () {
                expect(window.google).toBeDefined();
            });
        });
    });

    describe('lava#ready', function () {
        it('Should call the callback once Google has been loaded.', function () {
            var callback = sinon.spy();

            lava.run();
            lava.ready(callback);

            lava.on('ready', function () {
                sinon.assert.calledOnce(callback);
            });
        });
    });


    describe('lava#ready()', function () {
        it('Should accept a function to use as a callback.', function () {
            var callback = sinon.spy(lava, 'ready');

            lava.ready(callback);
            lava.run();

            expect(callback).toHaveBeenCalledOnce();
        });

        it('Should throw an "InvalidCallback" error if passed a non-function.', function () {
            expect(function () {
                lava.ready('marbles');
            }).toThrowError();
        });
    });


    describe('lava#store()', function () {
        beforeEach(function () {
            lava._volcano = [];
        });

        it('Should create a new chart and store it when given a JSON payload.', function () {
            lava.store(utils.getPieChartJson());

            expect(Object.keys(lava._volcano).length).toBe(1);
        })
    });


    describe('lava#get()', function () {
        beforeEach(function () {
            lava._volcano = [];
            lava.store(utils.getPieChartJson());
        });

        it('Should return a valid Renderable when given a valid label.', function () {
            var chart = lava.get('My Cool Chart');

            expect(chart.uuid).toEqual('PieChart::My Cool Chart');
        });

        it('Should throw "RenderableNotFound" if the renderable is not found.', function () {
            expect(function () {
                lava.get('Pizza!');
            }).toThrowError();
        });

        it('Should throw "RenderableNotFound" if a string label is not given.', function () {
            expect(function () {
                lava.get(1234);
            }).toThrowError();
        });
    });


    describe('lava#loadData()', function () {
        var chart, data, formats;

        beforeEach(function () {
            chart = lava.create(utils.getPieChartJson());
            data = utils.getDataTableJson();
            //formats = [{format:""},{format:""}];

            sinon.stub(chart, 'setData').withArgs(data);
            sinon.stub(chart, 'draw');
            sinon.stub(chart, 'applyFormats').withArgs(formats);

            lava.store(chart);
            lava.run();
        });

        it('should work with JSON and no formats', function () {
            lava.loadData('My Cool Chart', data);

            expect(chart.setData).toHaveBeenCalledOnce();
            expect(chart.setData).toHaveBeenCalledWithExactly(data);

            expect(chart.draw).toHaveBeenCalledOnce();
            expect(chart.draw).toHaveBeenCalledAfter(chart.setData);
        });

        //describe('Loading data into the chart from the DataTable->toJson() PHP method', function() {
        //    it('should work with JSON and formats', function() {
        //        lava.loadData('My Cool Chart', data);
        //
        //        expect(chart.setData).toHaveBeenCalledOnce();
        //        expect(chart.setData).toHaveBeenCalledWithExactly(data);
        //
        //        expect(chart.redraw).toHaveBeenCalledOnce();
        //        expect(chart.redraw).toHaveBeenCalledAfter(chart.setData);
        //    });

        //describe('and when the DataTable has formats', function() {
        //    var formatted;
        //
        //    beforeEach(function() {
        //        formatted = {
        //            data: data,
        //            formats: formats
        //        };
        //    });
        //
        //    it('should still load data, but from the ".data" property', function() {
        //        lava.loadData('My Cool Chart', formatted, chart {
        //            expect(chart.setData).toHaveBeenCalledOnce();
        //            expect(chart.setData).toHaveBeenCalledWithExactly(formatted.data);
        //
        //            expect(chart.redraw).toHaveBeenCalledOnce();
        //            expect(chart.redraw).toHaveBeenCalledAfter(chart.setData);
        //        });
        //    });
        //
        //    it('should apply the formats', function() {
        //        lava.loadData('My Cool Chart', formatted, function (chart) {
        //            expect(chart.setData).toHaveBeenCalledOnce();
        //            expect(chart.setData).toHaveBeenCalledWithExactly(formatted.data);
        //
        //            expect(chart.applyFormats).toHaveBeenCalledOnce();
        //            expect(chart.applyFormats).toHaveBeenCalledAfter(chart.setData);
        //            expect(chart.applyFormats).toHaveBeenCalledWithExactly(formatted.formats);
        //
        //            expect(chart.redraw).toHaveBeenCalledOnce();
        //            expect(chart.redraw).toHaveBeenCalledAfter(chart.setData);
        //        });
        //    });
        //});
        //});
    });


    //describe('lava#loadOptions()', function() {
    //    var chart, options;
    //
    //    beforeEach(function()
    //        chart = getMy Cool Chart();
    //        options = getOptions();
    //
    //        sinon.stub(chart, 'setOptions').withArgs(options);
    //        sinon.stub(chart, 'redraw');
    //
    //        lava._volcano = [];
    //        lava._volcano.push(chart);
    //    });
    //
    //    it('should load new options into the chart.', function() {
    //         lava.loadOptions('My Cool Chart', options, function (chart) {
    //            expect(chart.setOptions).toHaveBeenCalledOnce();
    //            expect(chart.setOptions).toHaveBeenCalledWithExactly(options);
    //
    //            expect(chart.redraw).toHaveBeenCalledOnce();
    //            expect(chart.redraw).toHaveBeenCalledAfter(chart.setOptions);
    //        });
    //    });
    //});

    //describe('lava#redrawCharts()', function()
    //    it('Should be called when the window is resized.', function() {
    //        var resize = sinon.spy(lava, 'redrawCharts');
    //
    //        window.dispatchEvent(new Event('resize'));
    //
    //        expect(resize).toHaveBeenCalledOnce();
    //    });
    //});
});