import React from 'react';
var Highcharts = require('highcharts');
require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/series-label')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);

class Stakes extends React.Component {

    static getDerivedStateFromProps(props, state) {
      return {"uids" : props.uid, "ranks" : props.rank, "stakes" : props.stake};
    }
    constructor(props) {
        super(props);
        this.state = {
          uids: [],
          ranks: [],
          stakes: []
        }
    }

    highChartsRender(state) {
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo: 'stakes-column-graph'
            },
            credits: false,
            title: {
                text: 'Stakes and Ranks For Peers'
            },
            xAxis: {
              categories: this.state.uids
                ,
                crosshair: true,
                title: {
                    text: 'Uid'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">UID: {point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Stake',
                data: this.state.stakes

            }, {
                name: 'Rank',
                data: this.state.ranks

            }]
        });
    }

    componentDidMount() {
        console.log("Mounted")
        this.highChartsRender();
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      if (this.state.uids !== prevState.uids) {

      }
      return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("Updated");
    }

   	render() {
      console.log("Rendered")
      console.log(this.state.stakes)
       	return (
            <div id="stakes-column-graph">
            </div>
       	);
   	}
}

export default Stakes;
