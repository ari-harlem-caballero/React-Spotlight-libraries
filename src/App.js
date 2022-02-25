import DataGrid from 'react-data-grid';
import data from './data';
import React from 'react';
import { eachGenderFavColor, languagesInChina, makeColumns, mostPopularJob } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryPie, VictoryStack } from 'victory';
import { VictoryTheme } from 'victory';

export default function App() {

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
          tickFormat={['Bigender', 'Agender', 'Female', 'Male', 'Genderqueer', 'Non-binary'
          ]}
        />
        <VictoryAxis 
          dependentAxis
          tickFormat={ (x) => (`${x / 1}`)}
        />
        <VictoryStack>
          {barchart.map((item, i) => {
            const colorKey = Object.keys(item)[0];

            return <VictoryBar 
              key={i}
              data={item[colorKey]}
              x="gender"
              y="count"
              style = {{
                data: {
                  fill: colorKey, stroke: colorKey
                }
              }}
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
