var goods = {
    a1: {
        name: 'sword',
        cost: 50,
    },
    a2: {
        name: 'dagger',
        cost: 30,
    },
    a3: {
        name: 'hammer',
        cost: 70,
    },
    a4: {
        name: 'gun',
        cost: 150,
    }
};

function init(){
    var buts = document.getElementsByTagName('button');
        for(var i = 0; i < buts.length; i++) {
            var but = buts[i];
            but.onclick = c123;
        }
    }

function c123() {
    alert('спасибо!');
}

function createCatalog() {
    var catalog = document.getElementById('catalog');
    var div = document.createElement('div');
    div.className = 'newGood';
    catalog.appendChild(div);
    div.innerHTML = goods['a' + i].name + ' по цене ' + goods['a' + i].cost + ' рублей';
    var but = document.createElement('button');
    but.className = 'buy';
    but.id = 'buy' + i;
    but.innerText = 'Купи меня';
    catalog.appendChild(but);
}

var count = 0;
for (var key in goods) {
    count++;
  }

for (i = 1; i <= count; i++) {
    createCatalog(i);
}

window.onload = init;

// let sword = {};
// sword.cost = 50;

// let dagger = {};
// dagger.cost = 30;

// let hammer = {};
// hammer.cost = 70;

// let total = 0;
// let end = false;

// function Buy() {
//     let choice = prompt("Укажите товар. \n1. Меч \n2. Кинжал \n3. Молот \n4. Выход", "Вот здесь вводить");

//     if (choice == 1) {
//         total = total + sword.cost;
//         console.log(total);
//         return end;
//     } else if (choice == 2) {
//         total = total + dagger.cost;
//         return end;
//     } else if (choice == 3) {
//         total = total + hammer.cost;
//         return end;
//     } else {
//         end = true;
//         return end;
//     }
// }

// Buy();

// while (end == false) {
//     Buy();
// }

// console.log("Сумма: " + total);

