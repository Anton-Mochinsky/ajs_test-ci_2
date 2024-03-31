const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  
  const sortHeroesByHealth = (heroes) => {
    return heroes.sort((a, b) => b.health - a.health);
  }
  
  module.exports = { sortHeroesByHealth };
  