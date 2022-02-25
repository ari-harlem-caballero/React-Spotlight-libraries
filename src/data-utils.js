
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

//list the most popular job: total of each job (line-graph)
export function mostPopularJob(arr) {
  const jobTotalsObj = arr.reduce((acc, curr) => {
    if (acc[curr.job]) {
      acc[curr.job]++;
    } else {
      acc[curr.job] = 1;
    }

    return acc;
  }, []);

  const jobsArr = Object.entries(jobTotalsObj);

  const finalArr = jobsArr.map((job) => {
    return { x: job[0], y: job[1] };
  });

  return finalArr;
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

export function eachGenderFavColor(arr) {
  const colors = arr.reduce((acc, curr) => {
    if (acc.includes(curr.favorite_color)) {
      null;
    } else {
      acc.push(curr.favorite_color);
    }

    return acc;
  }, []);
  const colorsByGender = colors.map(color => {
    const hashMap = arr.reduce((acc, curr) => {
      if (acc[curr.gender] && curr.favorite_color === color) {
        acc[curr.gender]++;
      } else if (curr.favorite_color === color) {
        acc[curr.gender] = 1;
      } else {
        null;
      }

      return acc;
    }, {});

    const arr2 = Object.entries(hashMap);
    const finalArr = arr2.map(entry => {
      return { gender: entry[0], count: entry[1] };
    });

    return { [color]: finalArr };
  });
  // below us is the end of our function
  return colorsByGender;
}
