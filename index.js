// Write your code here
class Breakfast {
    constructor(food, drank) {
        this.food = food
        this.drink = drank
    }
}

class Lunch {
    constructor(salad, food, drank){
        this.salad = salad
        this.soup = food
        this.drink = drank
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}