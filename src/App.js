import DataGrid from 'react-data-grid';
import data from './data';
import React from 'react';
import { makeColumns } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

export default function App() {

  // const columns = [
  //   { key: 'id', name: 'ID' },
  //   { key: 'title', name: 'Title' }
  // ];

  // const rows = [
  //   { id: 0, title: 'Example' },
  //   { id: 1, title: 'Demo' }
  // ];

  const newData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  return (
    <>
      <DataGrid
        columns={makeColumns(data)}
        rows={data}
      />
      <VictoryChart domainPadding={20}>
        <VictoryAxis 
          tickValues={[1, 2, 3, 4]}
        />
        <VictoryAxis 
          dependentAxis
        />
        <VictoryBar 
          data={newData}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </>
  );
}
