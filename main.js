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
    // Crea una copia delle armi per evitare di modificare l'array originale
    const availableWeapons = weapons;

    return fighters.map(fighter => {
        // estraggo un indice randomico corrispondente ad un arma
        const weaponIndex = Math.floor(Math.random() * availableWeapons.length);

        // tolgo l'arma estratta dall'array con splice
        const weapon = availableWeapons.splice(weaponIndex, 1)[0];

        // creo un nuovo oggetto con combattente e arma con spread operator 
        return {
            ...fighter,
            weapon
        };
    });

}

// array con combattenti e armi
const fightersWithWeapons = assignWeapons(fighters, weapons);

console.log(fightersWithWeapons);

