const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];


// Milestone 1 - Scelta dell’arma:
// ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

function assignWeapons(fighters, weapons) {
    // Creo una copia delle armi per evitare di modificare l'array originale
    const availableWeapons = weapons;

    return fighters.map(fighter => {
        // estraggo un indice randomico corrispondente ad un arma
        const weaponIndex = Math.floor(Math.random() * availableWeapons.length);

        // tolgo l'arma estratta dall'array con splice
        const weapon = availableWeapons.splice(weaponIndex, 1)[0];

        // creo un nuovo oggetto con combattente e arma e aggiungo voce per potenza totale con spread operator 
        return {
            ...fighter,
            weapon,
            totalPower: fighter.power + weapon.power
        };
    });

}

// array con combattenti e armi
const fightersWithWeapons = assignWeapons(fighters, weapons);

console.log('array con combattenti e armi: ', fightersWithWeapons);


// Milestone 2 - Allenamento:
// ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

function training(fightersWithWeapons) {

    for (let i = 0; i < fightersWithWeapons.length; i++) {
        // estrggo un numero da 1 a 100 che rappresenta il livello di allenamento
        let trainingLevel = Math.floor((Math.random() * 100) + 1);
        // console.log(trainingLevel);

        // moltiplico la potenza per il livello di allenamento
        let newPower = fightersWithWeapons[i].power * trainingLevel;
        // console.log(newPower);

        // aggiorno la potenza del combattente
        fightersWithWeapons[i].power = newPower;

        // aggiorno totalPower
        fightersWithWeapons[i].totalPower = newPower + fightersWithWeapons[i].weapon.power;

    }

    return fightersWithWeapons;
}

const trainingArray = training(fightersWithWeapons);
console.log('array dopo allenamento ', trainingArray);


// Milestone 3 - Qualificazione:
// escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

// con filter creo un nuovo array senza combattenti con forza inferiore a 2000
const qualificationArray = trainingArray.filter((fighter) => fighter.totalPower > 2000);
console.log('array dopo qualificazioni: ', qualificationArray);

// per milestone 4 serve un numero pari di combattenti quindi aggiungo un combattente se dispari
if (qualificationArray.length % 2 !== 0) {
    qualificationArray.push({
        name: "Robot",
        totalPower: 4000
    })
}



// Milestone 4 - Combattimento:
// i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 
// In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

// array per vincitori 
const winnersArray = [];

// ciclo con i + 2 per muoversi di due alla volta e non ripetere incontri
for (let i = 0; i < qualificationArray.length; i = i + 2) {

    let firstFighter = qualificationArray[i];
    let secondFighter = qualificationArray[i + 1];
    // condizione per essere pushati nell'array vincitori
    if (firstFighter.totalPower >= secondFighter.totalPower) {
        winnersArray.push(firstFighter);
    } else {
        winnersArray.push(secondFighter);
    }
}

console.log('array dei vincitori: ', winnersArray);



// Milestone 5 - Premiazione:
// tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

// nuovo array con ordine per potenza 
const winnersArraySorted = winnersArray.sort((a, b) => b.totalPower - a.totalPower);
console.log('array dei vincitori ordinati per potenza: ', winnersArraySorted);

// prendo solo i primi tre 
const finalWinners = winnersArraySorted.slice(0, 3);
console.log('prime tre posizioni: ', finalWinners);

