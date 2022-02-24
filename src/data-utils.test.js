//to test functions 
import { makeColumns } from './data-utils';

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


test('should list most popular job in each country', () => {
  const expected = [];

  const actual = [];

  expect.equal(actual, expected);
});