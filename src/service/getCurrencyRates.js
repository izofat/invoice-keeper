import axios from "axios";
import { ref } from "vue";
const APIURL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_Ixhp4o3L1YjWEJORp5ylaf0ZZjhg8Iiu23vUGNrI&currencies=EUR&base_currency=";

export const getCurrencyRate = async (currency) => {
  try {
    const currencyRates = ref([]);
    const response = await axios.get(new URL(APIURL + currency));
    if (response.status >= 200 && response.status < 300) {
      currencyRates.value = response.data.data.EUR.value;
      return currencyRates.value;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};
