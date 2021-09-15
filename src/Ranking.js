import React from 'react';
import Highcharts from "highcharts";
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/histogram-bellcurve')(Highcharts);


class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [{
              name: 'Peer Ranks',
              type: 'histogram',
              xAxis: 1,
              yAxis: 1,
              baseSeries: 's1',
              zIndex: -1
          }, {
              name: 'Ranks',
              type: 'scatter',
              data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3,
                    4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4,
                    3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5,
                    3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9,
                    2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9,
                    3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6,
                    3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9,
                    2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7,
                    3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1,
                    3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3],
              id: 's1',
              marker: {
                  radius: 1.5
              }
          }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
          chart: {
              type: 'histogram',
              renderTo: 'rank-histogram-graph'
          },
          credits: false,
          title: {
              text: 'Bittensor Ranks Per Uid'
          },

          xAxis: [{
              title: { text: 'Uid' },
              alignTicks: false
          }, {
              title: { text: 'Uid' },
              alignTicks: false,
              opposite: true
          }],

          yAxis: [{
              title: { text: 'Ranks' }
          }, {
              title: { text: 'Peer Ranks' },
              opposite: true
          }],

          plotOptions: {
              histogram: {
                  accessibility: {
                      point: {
                          valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                      }
                  }
              }
          },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

   	render() {
       	return (
            <div id="rank-histogram-graph">
            </div>
       	);
   	}
}

export default Ranking;
