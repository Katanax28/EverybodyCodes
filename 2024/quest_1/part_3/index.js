// Solving date: 25-8-2025 23:28 CET
const fs = require('fs');
let potions = 0;
let enemies;
let enemiesInGroup;

const input = fs.readFileSync('input.txt').toString().split('');
for (let i = 0; i < input.length; i += 3) {
    enemies = [input[i], input[i + 1], input[i + 2]];
    enemiesInGroup = 3;
    enemies.forEach(enemy => {
        if (enemy === 'x') enemiesInGroup--
    })

    if (enemiesInGroup === 0) continue;

    if (enemiesInGroup === 1) {
        enemies.forEach(enemy => {
            switch (enemy) {
                case 'B':
                    potions++;
                    break;
                case 'C':
                    potions += 3;
                    break;
                case 'D':
                    potions += 5;
                    break;
            }
        })
    } else if (enemiesInGroup === 2) {
        enemies.forEach(enemy => {
            switch (enemy) {
                case 'A':
                    potions++;
                    break;
                case 'B':
                    potions += 2;
                    break;
                case 'C':
                    potions += 4;
                    break;
                case 'D':
                    potions += 6;
                    break;
            }
        })
    } else {
        enemies.forEach(enemy => {
            switch (enemy) {
                case 'A':
                    potions += 2;
                    break;
                case 'B':
                    potions += 3;
                    break;
                case 'C':
                    potions += 5;
                    break;
                case 'D':
                    potions += 7;
                    break;
            }
        })
    }
}

console.log(potions);