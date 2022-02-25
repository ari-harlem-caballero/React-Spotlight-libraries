
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
  const country = arr.filter(user => user.country);
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
  const chineseUsers = arr.filter(user => user.country === 'China');

  const languages = chineseUsers.reduce((acc, user) => {
    if (acc[user.language]) {
      acc[user.language]++;
    } else {
      acc[user.language] = 1;
    }

    return acc;
  }, {});
  const languagesArr = Object.entries(languages);

  const finalArr = languagesArr.map((language) => {
    return { x: language[0], y: language[1] };
  });

  return finalArr;
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
  const genders = arr.reduce((acc, curr) => {
    if (acc.includes(curr.gender)) {
      null;
    } else {
      acc.push(curr.gender);
    }
    return acc;
  }, []);

  const favColorBreakdown = genders.map(gender => {
    const favColor = arr.reduce((acc, curr) => {
      if (gender === curr.gender) {
        if (acc[curr.favorite_color]) {
          acc[curr.favorite_color]++;
        } else {
          acc[curr.favorite_color] = 1;
        }
      }
      return acc;
    }, {});

    return {
      [gender]: favColor
    };
  });

  const colorArr = Object.entries(favColorBreakdown);

  const finalArr = colorArr.map((favorite_color) => {
    return { gender: favorite_color[1] }; 
  });

  console.log(finalArr);
  return finalArr;
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