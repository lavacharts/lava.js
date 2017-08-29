/* jshint undef: true, unused: true */
/* globals sinon, jasmine, describe, it, expect, beforeEach */

/** @test {LavaJs} */
describe('LavaJs.js Test Suite', function () {
    before(function () {
        var div = document.createElement('div');
        div.id = 'test-chart';

        document.body.appendChild(div);
    });

    after(function () {
        document.body.removeChild(
            document.getElementById('test-chart')
        );
    });

    /** @test {LavaJs#create} */
    describe('lava#create', function () {
        it('Should create a new Chart from a JSON payload.', function () {
            var chart = lava.create(utils.getPieChartJson());

            expect(chart.label).to.equal('My Cool Chart');
            expect(chart.type).to.equal('PieChart');
            expect(chart.class).to.equal('PieChart');
            expect(chart.uuid).to.equal('PieChart::My Cool Chart');
            expect(chart.packages).to.equal('corechart');
            expect(chart.element).to.be.instanceOf(HTMLElement);
            expect(chart.data).to.be.undefined;
            expect(chart.gchart).to.be.undefined;
            expect(typeof chart.run).to.equal('function');
            expect(typeof chart.draw).to.equal('function');
            expect(typeof chart.setData).to.equal('function');
        });

        it('Should have a Google Chart and DataTable after lava.run().', function () {
            var chart = lava.create(utils.getPieChartJson());
            var renderSpy = sinon.spy(chart, 'render');

            lava.run().then(function () {
                assert(renderSpy.calledOnce);
                expect(chart.data).to.be.instanceOf(google.visualization.DataTable);
                expect(chart.gchart).to.be.instanceOf(google.visualization.PieChart);
            });
        });
    });

    describe('lava#EventEmitter', function () {
        it('Should emit and listen to events', function () {
            lava.on('test', function (p1, p2) {
                expect(p1).to.equal('taco');
                expect(p2).to.equal('bell');
            });

            lava.emit('test', 'taco', 'bell');
        })
    });

    /** @test {LavaJs#run} */
    describe('lava#init', function () {
        //it('Should load Google to the window.', function (done) {
        //    lava.init().then(function() {
        //        expect(window.google).to.exist;
        //
        //        done();
        //    }).catch(function(e){
        //        done(e);
        //    });
        //});
    });

    /** @test {LavaJs#ready} */
    describe('lava#ready', function () {
        it('Should call the callback once Google has been loaded.', function () {
            var callback = sinon.spy();

            lava.run();
            lava.ready(callback);

            lava.on('ready', function () {
                sinon.assert.calledOnce(callback);
            });
        });

        it('Should accept a function to use as a callback.', function () {
            var readyCallback = sinon.spy(lava, 'ready');

            lava.ready(readyCallback);
            lava.run();

            assert(readyCallback.calledOnce);
        });

        it('Should throw an "InvalidCallback" error if passed a non-function.', function () {
            expect(function () {
                lava.ready('marbles');
            }).to.throw();
        });
    });

    /** @test {LavaJs#store} */
    describe('lava#store', function () {
        before(function () {
            lava._volcano.clear();
        });

        it('Should create a new chart and store it when given a JSON payload.', function () {
            lava.store(utils.getPieChartJson());

            expect(lava._volcano.size).to.equal(1);
        })
    });

    /** @test {LavaJs#get} */
    describe('lava#get', function () {
        before(function () {
            lava._volcano.clear();
            lava.store(utils.getPieChartJson());
        });

        it('Should return a valid Renderable when given a valid label.', function () {
            var chart = lava.get('My Cool Chart');

            expect(chart.uuid).to.equal('PieChart::My Cool Chart');
        });

        it('Should throw "RenderableNotFound" if the renderable is not found.', function () {
            expect(function () {
                lava.get('Pizza!');
            }).to.throw();
        });

        it('Should throw "RenderableNotFound" if a string label is not given.', function () {
            expect(function () {
                lava.get(1234);
            }).to.throw();
        });
    });

    /** @test {LavaJs#loadData} */
    describe('lava#loadData', function () {
        var chart, data, formats;

        beforeEach(function () {
            chart = lava.create(utils.getPieChartJson());
            data = utils.getDataTableJson();
            //formats = [{format:""},{format:""}];

            sinon.spy(chart, 'setData').withArgs(data);
            sinon.spy(chart, 'draw');
            //sinon.stub(chart, 'applyFormats').withArgs(formats);

            lava.store(chart);
        });

        it('should work with JSON and no formats', function () {
            //return lava.run().then(function () {
            //    lava.loadData('My Cool Chart', data);
            //
            //    assert(chart.setData.calledOnce);
            //    assert(chart.setData.calledBefore(chart.draw));
            //    assert(chart.setData.calledWith(data));
            //
            //    assert(chart.draw.calledOnce);
            //    assert(chart.draw.calledAfter(chart.setData));
            //});
        });
    });

    describe('lava#loadOptions()', function() {
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
    });

    describe('lava#redrawCharts()', function() {
    //    it('Should be called when the window is resized.', function() {
    //        var resize = sinon.spy(lava, 'redrawCharts');
    //
    //        window.dispatchEvent(new Event('resize'));
    //
    //        expect(resize).toHaveBeenCalledOnce();
    //    });
    });
});