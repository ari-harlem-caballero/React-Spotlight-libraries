import DataGrid from 'react-data-grid';
import data from './data';
import React from 'react';
import { eachGenderFavColor, languagesInChina, makeColumns, mostPopularJob } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryPie, VictoryStack } from 'victory';
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

  const barchart = eachGenderFavColor(data);


  return (
    <>
      <DataGrid
        columns={makeColumns(data)}
        rows={data}
      />


      <VictoryChart 
        domainPadding={10}
        theme={VictoryTheme.material}>
        <VictoryAxis 
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={['Bigender', 'Female', 'Agender', 'Non-binary', 'Male', 'GenderQueer'
          ]}
        />
        <VictoryAxis 
          dependentAxis
          tickFormat={ (x) => (`${x / 1}`)}
        />
        <VictoryStack>
          {barchart.map((item, i) => {
            return <VictoryBar 
              key={i}
              data={item}
              x="gender"
              y="count"
            />;

          })}
        </VictoryStack>

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
