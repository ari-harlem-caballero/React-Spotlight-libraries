import DataGrid from 'react-data-grid';
import data from './data';
import React from 'react';
import { languagesInChina, makeColumns } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryPie } from 'victory';
import { VictoryTheme } from 'victory';

export default function App() {

  // const columns = [
  //   { key: 'id', name: 'ID' },
  //   { key: 'title', name: 'Title' }
  // ];

  // const rows = [
  //   { id: 0, title: 'Example' },
  //   { id: 1, title: 'Demo' }
  // ];

  const piechart = languagesInChina(data);

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
      <VictoryChart 
        domainPadding={20}
        theme={VictoryTheme.material}>
        <VictoryAxis 
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Q1', 'Q2', 'Q3', 'Q4']}
        />
        <VictoryAxis 
          dependentAxis
          tickFormat={ (x) => (`$${x / 1000}k`)}
        />
        <VictoryBar 
          data={newData}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
      
      <VictoryPie 
        colorScale={['palevioletred', 'gold', 'lightskyblue']}
        padAngle={({ datum }) => datum.x}
        innerRadius={100}
        data={piechart}
      />

      <VictoryChart
        theme={VictoryTheme.grayscale}
        title="series-1">
        <VictoryLine 
          style={{
            data: { stroke: 'goldenrod' }
          }}
          animate={{
            onLoad: { duration: 2000 }
          }}
          data={[
            { x: 'dog', y: 2 },
            { x: 'cat', y: 3 },
            { x: 'mice', y: 3 },
            { x: 'bird', y: 4 },
            { x: 'fire', y: 5 },
            { x: 'darkness', y: 4 },
          ]}
        />
      </VictoryChart>
    </>
  );
}
