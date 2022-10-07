const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

/*
If the current ingredient is "egg", then add "biscuit" to the finished foods array
If the current ingredient is "beef patty", then add "burger" to the finished foods array
If the current ingredient is "potato", then add "fries" to the finished foods array
*/

for (const ingredient of rawIngredients) {
    if (ingredient === "egg") {
        finishedFood.push("biscuit")
    }
    else if (ingredient === "beef patty") {
        finishedFood.push("burger")
    }
    else if (ingredient === "potato") {
        finishedFood.push("fries")
    }
}

console.log(finishedFood)