import {format, parse} from 'date-fns';
import data from '../data/stats.json';

const getDatesList = () => {
  let xDates = [];
  const parsedDate = parse('18/03/2020', 'dd/MM/yyyy', new Date());
  const formatDate = format(parsedDate, 'yyyy-MM-dd');

  let formattedDate = new Date(formatDate);

  for (let index = 0; index < data.length; index++) {
    formattedDate.setDate(formattedDate.getDate() + (index === 0 ? 0 : 1));
    const date = formattedDate.toISOString().split('T')[0];
    xDates.push(new Date(date).getTime());
  }

  return xDates;
};
export default getDatesList;

