// Solving date: 25-8-2025 23:03
const fs = require('fs');
let potions = 0;
let enemies;

const input = fs.readFileSync('input.txt').toString().split('');
for (let i = 0; i < input.length; i += 2) {
    enemies = [input[i], input[i + 1]];

    if (enemies[0] === 'x' && enemies[1] === 'x') continue;

    if (enemies.includes('x')) {
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
    } else {
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
    }
}

console.log(potions);