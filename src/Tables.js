import React from 'react';
import styled from 'styled-components'

const Styles = styled.div `
  table{
    width: 60%;
    margin: auto;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    background-color: #d1cdcd;
    thead{
      tr{
        th{
          background-color: #787272 !important;
          border-bottom: 2px solid black;
        }
      }
    }
    tr:nth-child(even) {
       background-color: #dddddd;
    }
    td{
      padding: 5px;
    }

  }
`
const $ = require('jquery');
$.DataTable = require('datatables.net');


class Tables extends React.Component {
    componentDidMount() {
      const columns = [
          {
              title: 'Peers(Uid)',
              width: 120,
              data: 'uid'
          },
          {
              title: 'Stake',
              width: 180,
              data: 'stake'
          },
      ];
      const data = [{uid: 0, stake: 0}, {uid: 1, stake: 4}, {uid: 2, stake: 9}, {uid: 3, stake: 7}, {uid: 4, stake: 15}, {uid: 5, stake: 10}, {uid: 6, stake: 0}, {uid: 7, stake: 8}, {uid: 8, stake: 12}, {uid: 9, stake: 0}, {uid: 10, stake: 2}];
        this.$el = $(this.el);
        this.$el.DataTable({
           dom: "fltip",
           data: data,
           columns,
           ordering: true,
           paging: true,
           columnDefs: [
                { "targets": [1], "searchable": false }
            ],
            oLanguage: {
               "sSearch": "Search by uid of peer: "
             }
        });
    }
    render() {
        return (
            <div>
                <Styles>
                  <table
                   ref={(el) => (this.el = el)}
                   className="table table-borderless display"
                   cellSpacing="0"
                  />
                </Styles>
            </div>);
    }
}

export default Tables;
