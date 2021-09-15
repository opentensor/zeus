import React from 'react';
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

highcharts3d(Highcharts);
cylinder(Highcharts);

class Stakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [{
              data: [0, 4, 9, 7, 15, 10, 0, 8, 12, 0, 2],
              name: 'Stakes',
              showInLegend: false
          }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
          chart: {
              type: 'cylinder',
              options3d: {
                  enabled: true,
                  alpha: 15,
                  beta: 15,
                  depth: 50,
                  viewDistance: 25
              },
              renderTo: 'stakes-cylinder-graph'
          },
          credits: false,
          title: {
              text: 'Bittensor Stake Per Uid'
          },
          xAxis: {
            title: {
              text: "Uid",
            },
          },

          yAxis: {
            title: {
              text: "Stake",
            },
          },
          plotOptions: {
              series: {
                  depth: 25,
                  colorByPoint: true
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
            <div id="stakes-cylinder-graph">
            </div>
       	);
   	}
}

export default Stakes;
