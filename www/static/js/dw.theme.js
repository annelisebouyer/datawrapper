(function(){

    // Datawrapper.Theme
    // -----------------

    // Every theme will inherit the properties of this
    // theme. They can override everything or just a bit
    // of them. Also, every theme can extend any other
    // existing theme.
    Datawrapper.Themes = {};

    Datawrapper.Themes.Base = _.extend({}, {

        colors: {
            palette: ['#85B4D4', '#B2DF8A', '#E31A1C',  '#FF7F00', '#6A3D9A', '#B15928'],
            highlight: '#00589E',
            focus: '#0063A5',
            context: '#aaa',
            axis: '#000000',
            grid: '#999999',
            positive: '#85B4D4',
            'highlight-positive': '#85B4D4',
            negative: '#E31A1C',
            'highlight-negative': '#9E5800',
            background: '#ffffff'
            
        },

        locale: 'de_DE',

        lineChart: {
            strokeWidth: {
                highlight: 3,
                normal: 1
            },
            hoverDotRadius: 3,
            maxLabelWidth: 80
        },

        barChart: {

        },

        horizontalGrid: {
            stroke: '#e9e9e9'
        },

        yTicks: false,

        yAxis: {
            'stroke-width': 1
        },

        padding: {
            left: 0,
            right: 20,
            bottom: 30,
            top: 10
        },

        leftPadding: 20,
        rightPadding: 20,
        lineLabelWidth: 20,
        yLabelOffset: 8,

        bottomPadding: 40,
        xLabelOffset: 20,

        hover: true,
        tooltip: true,

        hpadding: 0,
        vpadding: 10
    });

}).call(this);