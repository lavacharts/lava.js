/** @test {LavaJs} */
describe('LavaJs', function () {

    /** @test {LavaJs#init} */
    describe('init', function () {
        it('should load Google to the window.', function () {
            return lava.init().then(function () {
                expect(window.google).to.not.be.undefined;
            });
        });
    });

    /** @test {LavaJs#query} */
    describe('query', function () {
        var testUrl = 'http://not.a.real.url.com';

        it('should create a new DataQuery from string URL.', function () {
            var query = lava.query(testUrl);

            expect(query).to.be.instanceOf(LavaJs.DataQuery);
            expect(query.url).to.be.equal(testUrl);
        });

        it('should create a new DataQuery from an Object.', function () {
            var dataQuery = lava.query({
                url:   testUrl,
                opts:  {option:'value'},
                query: function(q){return q}
            });

            expect(dataQuery.url).to.equal(testUrl);
            expect(dataQuery.opts).to.be.an('object').that.include({option:'value'});
            expect(dataQuery.query).to.be.a('function');
        });
    });

    /** @test {LavaJs#create} */
    describe('create', function () {
        it('should create a new Chart from a JSON payload.', function () {
            var chart = lava.create(getPieChartJson());

            expect(chart).to.be.an.instanceOf(LavaJs.Chart);

            expect(chart.label).to.equal('MyCoolChart');
            expect(chart.type).to.equal('PieChart');
            expect(chart.class).to.equal('PieChart');
            expect(chart.uuid).to.equal('PieChart::MyCoolChart');
            expect(chart.packages).to.equal('corechart');
            expect(chart.container).to.be.instanceOf(HTMLElement);

            expect(chart._dataSrc).to.exist
            expect(chart._elementId).to.equal('test-chart');

            expect(chart.data).to.be.undefined;
            expect(chart.gchart).to.be.undefined;

            expect(typeof chart._setup).to.equal('function');
            expect(typeof chart.draw).to.equal('function');
            expect(typeof chart.setData).to.equal('function');
        });

        it('should have a Chart and DataTable after lava.run()', function () {
            var chart = lava.create(getPieChartJson());
            var lavaRunSpy = sinon.spy(chart, 'run');

            lava.store(chart);

            return lava.run().then(function () {
                sinon.assert.calledOnce(lavaRunSpy);

                expect(chart.data).to.shallowDeepEqual(new google.visualization.DataTable());

                console.log(Object.keys(chart.gchart));

                expect(chart.gchart.container).to.equal(
                    (new google.visualization.PieChart(testdiv)).container
                );
            });
        });
    });

    /** @test {LavaJs#store} */
    describe('store', function () {
        var chart;

        beforeEach(function () {
            lava._volcano.clear();

            chart = lava.store(getPieChartJson());
        });

        it('should create a new chart from a JSON payload.', function () {
            expect(chart).to.be.an.instanceOf(LavaJs.Chart);
        });

        it('should have stored the chart once created.', function () {
            expect(lava._volcano.size).to.equal(1);
        });
    });

    /** @test {LavaJs#get} */
    describe('get', function () {
        beforeEach(function () {
            lava._volcano.clear();

            lava.store(getPieChartJson());
        });

        it('should return a valid Renderable when given a valid label.', function () {
            var chart = lava.get('MyCoolChart');

            expect(chart).to.be.an.instanceOf(LavaJs.Chart);
            expect(chart.uuid).to.equal('PieChart::MyCoolChart');
        });

        it('should throw "RenderableNotFound" if the renderable is not found.', function () {
            expect(function () {
                lava.get('Pizza!');
            }).to.throw();
        });

        it('should throw "RenderableNotFound" if a string label is not given.', function () {
            expect(function () {
                lava.get(1234);
            }).to.throw();
        });
    });

    /** @test {LavaJs#ready} */
    describe('ready', function () {
        it('should call the callback once Google has been loaded.', function () {
            var callback = sinon.spy();

            lava.ready(callback);

            return lava.run().then(function () {
                sinon.assert.calledOnce(callback);
            });
        });

        it('should throw an "InvalidCallback" error if not passed a function.', function () {
            expect(function () {
                lava.ready('marbles');
            }).to.throw();
        });
    });

    /** @test {LavaJs#loadData} */
    describe('loadData', function () {
        var lavaRunSpy, chartSetDataSpy, chartDrawSpy, chartApplyFormatsSpy, chart;

        var data = getDataTableJson();
        var formattedData = {
            data: data,
            formats: [
                getNumberFormat(1)
            ]
        };

        beforeEach(function () {
            chart = lava.create(getPieChartJson());

            lavaRunSpy = sinon.spy(lava, 'run');
            chartDrawSpy = sinon.spy(chart, 'draw');
            chartSetDataSpy = sinon.spy(chart, 'setData');
            chartApplyFormatsSpy = sinon.spy(chart, 'applyFormats');

            lava.store(chart);
        });

        describe('with JSON', function () {
            describe('and no formats', function () {
                it('should update the DataTable.', function () {
                    return lava.run().then(function () {
                        assert(chartDrawSpy.calledAfter(lavaRunSpy));

                        lava.loadData('MyCoolChart', data);

                        assert(chartDrawSpy.calledAfter(chartSetDataSpy));

                        //sinon.assert.calledWith(chartSetDataSpy, data);

                        sinon.assert.calledTwice(chartSetDataSpy);
                        sinon.assert.calledTwice(chartDrawSpy);

                        var chart = lava.get('MyCoolChart');

                        expect(chart.data).to.shallowDeepEqual(new google.visualization.DataTable());
                    });
                });
            });

            describe('and with formats', function () {
                it('should apply the formats while updating the DataTable.', function () {
                    return lava.run().then(function () {
                        assert(chartDrawSpy.calledAfter(lavaRunSpy));

                        lava.loadData('MyCoolChart', formattedData);

                        //sinon.assert.calledWith(chartSetDataSpy, formattedData);

                        //sinon.assert.calledOnce(chartApplyFormatsSpy);

                        assert(chartDrawSpy.calledAfter(chartSetDataSpy));

                        sinon.assert.calledTwice(chartSetDataSpy);
                        sinon.assert.calledTwice(chartDrawSpy);

                        var chart = lava.get('MyCoolChart');

                        expect(chart.data).to.shallowDeepEqual(new google.visualization.DataTable());
                    });
                });
            });
        });

        describe('with an Array', function () {
            var arrayData = [
                ['Age', 'Salary'],
                [20, 30000],
                [25, 40000],
                [30, 50000],
                [35, 60000]
            ];

            it('should update the DataTable.', function () {
                return lava.run().then(function () {
                    assert(chartDrawSpy.calledAfter(lavaRunSpy));

                    lava.loadData('MyCoolChart', arrayData);

                    sinon.assert.calledWith(chartSetDataSpy, arrayData);

                    assert(chartDrawSpy.calledAfter(chartSetDataSpy));

                    sinon.assert.calledTwice(chartSetDataSpy);
                    sinon.assert.calledTwice(chartDrawSpy);

                    expect(chart.data).to.shallowDeepEqual(new google.visualization.DataTable());
                });
            });
        });
    });

    describe('loadOptions', function() {
    //    var chart, options;
    //
    //    beforeEach(function()
    //        chart = getMyCoolChart();
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
    //         lava.loadOptions('MyCoolChart', options, function (chart) {
    //            expect(chart.setOptions).toHaveBeenCalledOnce();
    //            expect(chart.setOptions).toHaveBeenCalledWithExactly(options);
    //
    //            expect(chart.redraw).toHaveBeenCalledOnce();
    //            expect(chart.redraw).toHaveBeenCalledAfter(chart.setOptions);
    //        });
    //    });
    });

    describe('redrawCharts()', function() {
    //    it('should be called when the window is resized.', function() {
    //        var resize = sinon.spy(lava, 'redrawCharts');
    //
    //        window.dispatchEvent(new Event('resize'));
    //
    //        expect(resize).toHaveBeenCalledOnce();
    //    });
    });

    describe('events', function () {
        it('should emit and listen to events', function () {
            lava.on('test', function (p1, p2) {
                expect(p1).to.equal('taco');
                expect(p2).to.equal('bell');
            });

            lava.emit('test', 'taco', 'bell');
        });

        it('should emit ready after lava.run()', function () {
            var readyEventSpy = sinon.spy();

            lava.on('ready', readyEventSpy);

            return lava.run().then(function () {
                assert(readyEventSpy.calledOnce);
            })
        });
    });
});