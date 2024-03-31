const {sortHeroesByHealth} = require('./index');

const heroes = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'воин', health: 120}
];

test('сортировка героев по уровню здоровья', () => {
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    {name: 'воин', health: 120},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ]);
});
