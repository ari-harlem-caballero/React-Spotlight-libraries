import DataGrid from 'react-data-grid';
import data from './data';
import React from 'react';
import { languagesInChina, makeColumns, mostPopularJob } from './data-utils';
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

  const linechart = mostPopularJob(data);

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
      <h2>Languages Spoken in China:</h2>
      <VictoryPie 
        padding={90}
        colorScale={['palevioletred', 'gold', 'lightskyblue']}
        padAngle={({ datum }) => datum.x}
        innerRadius={70}
        data={piechart}
      />
      <h2>Users Jobs:</h2>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        title="series-1"
        width={700}>
        <VictoryLine 
          style={{
            data: { stroke: 'goldenrod' }
          }}
          animate={{
            onLoad: { duration: 2000 }
          }}
          data={linechart}
        />
      </VictoryChart>
    </>
  );
}
