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
