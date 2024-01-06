/*
chance  odd     reak odd
4%      24.00   1/chance - 1
8%      11.50
12%     7.33  
16%     5.25 
20%     4.00    
24%     3.17    
32%     2.12    
40%     1.50
48%     1.08
56%     0.79    
64%     0.56    
72%     0.39
80%     0.25    
88%     0.14
96%     0.04
*/


let chance = 0.12
let odd = 1/chance - 1
let principal = 1000000;
let amount

function hitPost() {
    if (Math.random() > chance) {
        return false;
    } else {
        return true;
    }
}

// 按自身資產比例投資
// while (principal > 6000) {
//     amount = principal
//     if (hitPost() == true) {
//         principal += amount * odd
//         console.log(`------, principal = ${Math.floor(principal)}`)
//     } else {
//         principal -= amount
//         console.log(`******, principal = ${Math.floor(principal)}`)
//     }
// }

// 按固定資金投資
let total_steps = 0;
let total_rounds = 100000;
for (let i = 0; i < total_rounds; i++){
    principal = 100000
    while (principal > 6000) {
        amount = 2000
        if (hitPost() == true) {
            principal += amount * odd * 0.97
            // console.log(`*----*, principal = ${Math.floor(principal)}`)
        } else {
            principal -= amount
            // console.log(`******, principal = ${Math.floor(principal)}`)
        }
        total_steps++
    }
}

let average_steps = Math.floor(total_steps/total_rounds)
console.log(average_steps)