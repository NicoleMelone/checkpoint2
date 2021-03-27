let cheese = 1000;
let mod = 0;
let automod = 0;

let clickUpgrades = {
    cheeseknife: {
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    pickaxes: {
        price: 500,
        quantity: 0,
        multiplier: 5
    }
};

let autoUpgrades = {
    rovers: {
        price: 600,
        quantity: 0,
        multiplier: 20
    },
    hammerofdawn: {
        price: 1100,
        quantity: 0,
        multiplier: 60
    }
}




function clickUp(item) {
    let click = clickUpgrades[item]

    if (cheese >= click.price) {
        cheese -= click.price,
            click.price += 100,
            click.quantity++,
            mod += click.multiplier
    }
    if (item === 'cheeseknife') {
        let cheesekn = clickUpgrades['cheeseknife']
        document.getElementById('cheeseknife').innerText = `Quantity: ${cheesekn.quantity}`
        document.getElementById('knifecost').innerText = `Cost: ${cheesekn.price}`
    } else if (item === 'pickaxes') {
        let paxes = clickUpgrades['pickaxes']
        document.getElementById('pickaxes').innerText = `Quantity: ${paxes.quantity}`
        document.getElementById('pickcost').innerText = `Cost: ${paxes.price}`
    }

    upDate()

}

function autoUp(item) {
    let autos = autoUpgrades[item]
    if (cheese >= autos.price) {
        cheese -= autos.price,
            autos.price += 100,
            autos.quantity++,
            automod += autos.multiplier
    }
    if (item === 'rovers') {
        let rove = autoUpgrades['rovers']
        document.getElementById('rovers').innerText = `Quantity: ${rove.quantity}`
        document.getElementById('rovercost').innerText = `Cost: ${rove.price}`
    } else if (item === 'hammerofdawn') {
        let hammer = autoUpgrades['hammerofdawn']
        document.getElementById('hammerofdawn').innerText = `Quantity: ${hammer.quantity}`
        document.getElementById('hammercost').innerText = `Cost: ${hammer.price}`
    }


    collectAutoUpgrades()
    upDate()
}

function collectAutoUpgrades() {
    cheese += automod


    upDate()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 2000);
}

function mine() {
    cheese++
    cheese += mod
    upDate()
}

function upDate() {
    let template = ''
    let template2 = ''
    template += `<div class="col-6 text-center border border-dark cheese">Current Resources: ${cheese}</div>`

    template2 += `<div class="col-6 m-2 text-center border border-dark">Total Multipliers: ${mod + automod}</div>`



    document.getElementById('resource').innerHTML = template
    document.getElementById('modifier').innerHTML = template2
}




mine()
startInterval()