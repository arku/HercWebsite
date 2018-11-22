import axios from 'axios';

const hercJSON = 'https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON';
const hercPRICE = 'https://chart.anthemgold.com/bi-1.0-SNAPSHOT/Report'

axios.get(hercJSON + hercPRICE);
const result = await axios.get(hercJSON);
result.data.list[0]
console.log(result);