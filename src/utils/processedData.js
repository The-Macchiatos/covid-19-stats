import data from "../data/stats";

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
        name: 'Total',
        cases: getDataForDay(1)['total'],
        cases_prev: getDataForDay(2)['total'],
        logo: 'viruses'
    }
];

function getDataForDay(index) {
    const active = data[data.length - index]['active']['total'];
    const recovered = data[data.length - index]['recovered'];
    const death = data[data.length - index]['death'];
    const total = active + recovered + death;
    return {active, recovered, death, total}
}

export {cardData}
