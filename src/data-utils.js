import React from 'react';

export function makeColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key
        .split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    };
  });

  return columns;
}

//in each country, list the most popular job (average?) (line-graph)
export function mostPopularJob(arr) {

}

/* OUTPUT:
{
  China: Books,
  Ethiopia: Automotive,
  France: Kids
  etc...
}
*/

// languages spoken in China (pie chart)
export function languagesInChina(arr) {

}

/* OUTPUT:
{
  French: 2,
  Chinese: 4,
  Georgian: 6,
  etc...
}
*/

// fav color breakdown of each Gender (bar-graph)
export function eachGenderFavColor(arr) {

}

/* OUTPUT:
{
  male: {
    pink: 9,
    orange: 2,
    red: 3,
  },
  non-binary: {
    pink: 3,
    yellow: 18,
    orange: 1,
  },
  genderqueer: {
    pink: 6,
    yellow: 20,
    red: 10,
  },
  etc...
}
*/