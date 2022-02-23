import React from 'react';

export function makeColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key.replace('_', ' ')
    };
  });

  return columns;
}
