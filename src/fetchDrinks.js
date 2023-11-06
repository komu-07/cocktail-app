import { showLoading } from './toggleLoading.js';
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default fetchDrinks;
