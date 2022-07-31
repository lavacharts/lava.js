// $sales = $lava->DataTable();

// $sales->addDateColumn('Date')
//       ->addNumberColumn('Orders');

// foreach (range(2, 5) as $month) {
//     for ($a=0; $a < 20; $a++) {
//         $day = rand(1, 30);
//         $sales->addRow(["2014-${month}-${day}", rand(0,100)]);
//     }
// }

// $lava->CalendarChart('Sales', $sales, [
//     'title' => 'Cars Sold',
//     'unusedMonthOutlineColor' => [
//         'stroke'        => '#ECECEC',
//         'strokeOpacity' => 0.75,
//         'strokeWidth'   => 1
//     ],
//     'dayOfWeekLabel' => [
//         'color'    => '#4f5b0d',
//         'fontSize' => 16,
//         'italic'   => true
//     ],
//     'noDataPattern' => [
//         'color' => '#DDD',
//         'backgroundColor' => '#11FFFF'
//     ],
//     'colorAxis' => [
//         'values' => [0, 100],
//         'colors' => ['black', 'green']
//     ]
// ]);

// For Laravel, omit "$lava = new Lavacharts" and replace "$lava->" with "Lava::"

// Otherwise, pass $calendarchart or $lava to your view to render.
// View
