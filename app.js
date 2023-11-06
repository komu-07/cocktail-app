import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
const URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=p';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
