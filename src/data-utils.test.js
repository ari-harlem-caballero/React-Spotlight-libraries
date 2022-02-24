//to test functions 
import { eachGenderFavColor, languagesInChina, makeColumns } from './data-utils';


test('makeColumns should make an array of columns that capitalizes key', () => {
  const expected = [
    { key: 'first_name', name: 'First Name' },
    { key: 'last_name', name: 'Last Name' },
    { key: 'email', name: 'Email' },
    { key: 'gender', name: 'Gender' },
    { key: 'city', name: 'City' },
    { key: 'country', name: 'Country' },
    { key: 'language', name: 'Language' },
  ];

  const actual = makeColumns([
    { first_name: 'Paul', last_name: 'Rudd', email: 'youwish@youknew.com', gender: 'Vague', city: 'Chicago', country: 'Mexico', language: 'ASL' },
    { first_name: 'Cody', last_name: 'Smith', email: 'figureitout@not.com', gender: 'Snail', city: 'Paris', country: 'Korea', language: 'Spanish' },
    { first_name: 'Rebekah', last_name: 'Rutz', email: 'dontask@mine.com', gender: 'Female', city: 'Grand Rapids', country: 'China', language: 'French' },
  ]);

  expect(actual).toEqual(expected);
});


// skip('should list most popular job in each country', () => {
//   const expected = [
//     {
//       China: 'Books',
//       Ethiopia: 'Automotive',
//       France: 'Kids'
//     }
//   ];

//   const actual = [];

//   expect.equal(actual, expected);
// });


test('should render all langauges spoken in China', () => {
  const expected = [
    {
      French: 1,
      Chinese: 1,
    }
  ];

  const actual = languagesInChina([
    { country: 'China', language: 'Chinese' },
    { country: 'China', language: 'French' },
  ]);

  expect(actual).toEqual(expected);
});


// test('should render the favorite colors of each gender demographic', () => {
//   const expected = [
//     {
//       male: {
//         pink: 9,
//         orange: 2,
//         red: 3,
//       }
//     },
//     {
//       'Non-binary': {
//         pink: 3,
//         yellow: 18,
//         orange: 1,
//       }
//     },
//     {
//       'Female': {
//         pink: 3,
//         yellow: 18,
//         orange: 1,
//       }
//     },
//     {
//       genderqueer: {
//         pink: 6,
//         yellow: 20,
//         red: 10,
//       }
//     }
//   ];

//   const actual = eachGenderFavColor([
//     {
//       male: {
//         pink: 9,
//         orange: 2,
//         red: 3,
//       }
//     },
//     {
//       'Non-binary': {
//         pink: 3,
//         yellow: 18,
//         orange: 1,
//       }
//     },
//     {
//       'Female': {
//         pink: 3,
//         yellow: 18,
//         orange: 1,
//       }
//     },
//     {
//       genderqueer: {
//         pink: 6,
//         yellow: 20,
//         red: 10,
//       }
//     },
//     {
//       Bigender: {
//         yellow: 20,
//         red: 10,
//       }
//     }
//   ]);

//   expect(actual).toEqual(expected);
// });