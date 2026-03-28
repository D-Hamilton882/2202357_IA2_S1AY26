let cart = {};
let subtotal = 0;

/* REGISTER */
function registerUser() {
    let username = document.getElementById("registerUser").value;

    if (!username) {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", username);

    alert("Registered Successfully!");

    document.getElementById("authPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

/* LOGIN */
function loginUser() {
    let loginInput = document.getElementById("loginUser").value;
    let storedUser = localStorage.getItem("user");

    if (!loginInput) {
        alert("Enter username");
        return;
    }

    if (storedUser !== loginInput) {
        alert("User not registered! Please register first.");
        return;
    }

    alert("Login Successful!");

    document.getElementById("authPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

/* CART */
function addToCart(name, price) {
    if (cart[name]) {
        cart[name].qty++;
    } else {
        cart[name] = {price: price, qty: 1};
    }
    updateCart();
}

function updateCart() {
    let cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = "";
    subtotal = 0;

    for (let item in cart) {
        let itemTotal = cart[item].price * cart[item].qty;
        subtotal += itemTotal;

        cartDiv.innerHTML += item + " x" + cart[item].qty + " - $" + itemTotal + "<br>";
    }

    let tax = subtotal * 0.15;
    let total = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

function clearCart() {
    cart = {};
    updateCart();
}

/* CHECKOUT */
function checkout() {
    if (subtotal === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order Confirmed!");
}

function cancelCheckout() {
    alert("Checkout Cancelled");
}