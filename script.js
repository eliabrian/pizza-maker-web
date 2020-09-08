let pizzaTypes = document.querySelectorAll("input[type=radio][name=pizza]");
let pizzaSizes = document.querySelectorAll("input[type=radio][name=size]");
let toppingsType = document.getElementsByName("toppings");

let pizza = {
    type: 0,
    size: 0,
    toppings: [],
    countTotal: function () {
        return (
            this.type +
            this.size +
            this.toppings.reduce(function (a, b) {
                return a + b;
            }, 0)
        );
    },
};

let pizzaOneToppings = {
    toppings: ["avocado", "broccoli", "onion", "zucchini", "tuna", "ham"],
};

let pizzaTwoToppings = {
    toppings: [
        "broccoli",
        "onion",
        "zucchini",
        "lobster",
        "oyster",
        "salmon",
        "bacon",
        "ham",
    ],
};

let pizzaThreeToppings = {
    toppings: [
        "broccoli",
        "onion",
        "zucchini",
        "tuna",
        "bacon",
        "duck",
        "ham",
        "sausage",
    ],
};

function disableToppings() {
    for (let i = 0; i < toppingsType.length; i++) {
        toppingsType[i].disabled = true;
        toppingsType[i].checked = false;
    }
}

function filterToppings(pizza) {
    disableToppings();
    for (let i = 0; i < pizza.toppings.length; i++) {
        document.getElementById(pizza.toppings[i]).disabled = false;
    }
}

pizzaTypes.forEach((type) =>
    type.addEventListener("change", function () {
        if (type.checked) {
            pizza.type = parseInt(type.value);
        }
        pizza.toppings = [];
        document.getElementById("totalPrice").innerHTML = pizza.countTotal();
    })
);

pizzaSizes.forEach((size) =>
    size.addEventListener("change", function () {
        if (size.checked) {
            pizza.size = parseInt(size.value);
        }
        document.getElementById("totalPrice").innerHTML = pizza.countTotal();
    })
);

toppingsType.forEach((topping) =>
    topping.addEventListener("change", function () {
        if (topping.checked) {
            pizza.toppings.push(parseInt(topping.value));
        }
        document.getElementById("totalPrice").innerHTML = pizza.countTotal();
    })
);

document.getElementById("pizzaOne").onchange = function () {
    filterToppings(pizzaOneToppings);
};

document.getElementById("pizzaTwo").onchange = function () {
    filterToppings(pizzaTwoToppings);
};

document.getElementById("pizzaThree").onchange = function () {
    filterToppings(pizzaThreeToppings);
};