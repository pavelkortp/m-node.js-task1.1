/**
 * Takes csv format text and retun new function.
 * @param {string} csv text in csv format. 
 * @returns function
 */
export function csvParse(csv) {
    const topCities = csv
        .split('\n')
        .filter(e => !e.startsWith('#') && e !== '')
        .map(e => {
            const props = e.split(',')
            return {
                x: props[0],
                y: props[1],
                name: props[2],
                population: props[3]
            }
        })
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((acc, e, rating) => {
            acc[e.name] = {
                population: e.population,
                rating: rating + 1
            };
            return acc;
        }, {});
    return function parseLine(text) {
        return text
            .split(' ')
            .map(e => {
                if(topCities[e] !== undefined){
                    return `${e} (${topCities[e].rating} place in the top 10 largest cities of Ukraine, population of ${topCities[e].population} humans)`;
                }
                return e
            })
            .join(' ');
    }
}


