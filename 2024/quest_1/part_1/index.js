// Solving date: 25-8-2025 22:30 CET
const fs = require('fs');
let potions = 0;

const input = fs.readFileSync('input.txt').toString().split('');
input.forEach(c => {
    switch (c) {
        case 'B':
            potions++;
            break;
        case 'C':
            potions += 3;
            break;
    }
})
console.log(potions);