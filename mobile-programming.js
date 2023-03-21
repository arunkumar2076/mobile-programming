function createRandomArray(rows, columns) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = Math.floor(Math.random() * 101);
        }
    }
    return arr;
}
const row = 3;
const columns = 3;
var array2D = createRandomArray(row, columns);

console.log("Generate 2D Array", array2D);

function sortArrayByColumn(arr, colIndex) {
    arr.sort((a, b) => a[colIndex] - b[colIndex]);
    return arr;
}
console.log("Sort 2D Array", sortArrayByColumn(array2D, 1));

const awards = [
    {
        name: 'James Peebles',
        category: 'Physics',
        research: 'Theoretical discoveries in physical cosmology',
        year: 2019,
    },
    {
        name: 'Michel Mayor',
        category: 'Physics',
        research: 'Discovery of an exoplanet orbiting a solar-type star',
        year: 2019,
    },
    {
        name: 'Didier Queloz',
        category: 'Physics',
        research: 'Discovery of an exoplanet orbiting a solar-type star',
        year: 2019,

    },
    {
        name: 'John B. Goodenough',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
    },
    {
        name: 'M. Stanley Whittingham',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
    },
    {
        name: 'Akira Yoshino',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
    },
    {
        name: 'Arthur Ashkin',
        category: 'Physics',
        research: 'Optical tweezers and their application to biological systems',
        year: 2018,
    },
    {
        name: 'Gerard Mourou',
        category: 'Physics',
        research: 'Method of generating high-intensity, ultra-short optical pulses',
        year: 2018,
    },
    {
        name: 'Donna Strickland',
        category: 'Physics',
        research: 'Method of generating high-intensity, ultra-short optical pulses',
        year: 2018,
    },
    {
        name: 'Frances H. Arnold',
        category: 'Chemistry',
        research: 'Directed evolution of enzymes',
        year: 2018,
    },
    {
        name: 'George P. Smith',
        category: 'Chemistry',
        research: 'Phage display of peptides and antibodies.',
        year: 2018,
    },

    {
        name: 'Sir Gregory P. Winter',
        category: 'Chemistry',
        research: 'Phage display of peptides and antibodies.',
        year: 2018,
    },
];

function generateWinnersArray(arrOfObject) {
    const outputArray = [];
    const groupedArray = arrOfObject.reduce((acc, curr) => {
        const key = `${curr.category}-${curr.year}`;
        if (!acc[key]) {
            acc[key] = {
                category: curr.category,
                year: curr.year,
                winners: [],
            };
        }
        acc[key].winners.push(curr);
        return acc;
    }, {});
    for (const key in groupedArray) {
        if (Object.hasOwnProperty.call(groupedArray, key)) {
            const group = groupedArray[key];
            const numWinners = group.winners.length;
            let totalShare = 1;
            if (numWinners > 1) {
                totalShare = 1 / numWinners;
            }
            const winnersArray = group.winners.map((winner) => {
                return { name: winner.name, share: totalShare };
            });
            outputArray.push({
                category: group.category,
                year: group.year,
                winners: winnersArray,
            });
        }
    }
    return outputArray;
}

console.log(generateWinnersArray(awards));