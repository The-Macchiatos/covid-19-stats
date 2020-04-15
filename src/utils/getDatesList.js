import moment from 'moment';
import data from '../data/stats.json';

const getDatesList = () => {
  let xDates = [];
  let formattedDate = new Date(moment(data[0].date, 'DD/MM/YYYY').format('YYYY-MM-DD'));
  for (let index = 0; index < data.length; index++) {
    formattedDate.setDate(formattedDate.getDate() + (index === 0 ? 0 : 1));
    const date = formattedDate.toISOString().split('T')[0];
    xDates.push(new Date(date).getTime());
  }
  return xDates;
};
export default getDatesList;

