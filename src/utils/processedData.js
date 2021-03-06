import data from "../data/stats";
import summary from '../data/summary';

const cardData = [
    {
        name: 'Active Cases',
        cases: getDataForDay(1)['active'],
        cases_prev: getDataForDay(2)['active'],
        logo: 'lungs-virus',
        percentage: getDataForDay(1)['active'] / getDataForDay(1)['total'] * 100
    },
    {
        name: 'Recovered',
        cases: getDataForDay(1)['recovered'],
        cases_prev: getDataForDay(2)['recovered'],
        logo: 'shield-virus',
        percentage: getDataForDay(1)['recovered'] / getDataForDay(1)['total'] * 100
    },
    {
        name: 'Deceased',
        cases: getDataForDay(1)['death'],
        cases_prev: getDataForDay(2)['death'],
        logo: 'heartbeat',
        percentage: getDataForDay(1)['death'] / getDataForDay(1)['total'] * 100
    },
    {
        name: 'Critical',
        cases: getDataForDay(1)['critical'],
        cases_prev: getDataForDay(2)['critical'],
        logo: 'viruses',
        percentage: getDataForDay(1)['critical'] / getDataForDay(1)['total'] * 100
    }
];

export function getDataForDay(index) {
    const active = data[data.length - index]['active'];
    const recovered = data[data.length - index]['recovered'];
    const death = data[data.length - index]['death'];
    const critical = data[data.length - index]['critical'];
    const newCases = data[data.length - index]['new'];
    const overseas = data[data.length - index]['overseas'];
    const total = data[data.length - index]['total'];
    return {active, recovered, death, critical, total, newCases, overseas}
}


export function getLastUpdated(type) {

    return type === 'summary' ? summary.date : data[data.length - 1].date;
}

export {cardData}
