function createCartList(cart) {
    $("#nav-cart").text("Cart (" + cart.length + ")");

    var subtotal = cart.reduce(((acc, curr) => acc + curr.price), 0);
    $("#checkout-price").text("$" + subtotal);

    var cartContainer = $("#cart-items-container");
    cart.forEach((item, index) => {
        var cartImageContainer = '<div class="cart-image-container"><img class="cart-image" src=' + item.img + ' alt="img not found"/></div>'
        var cartItemOptions = '<div class="cart-item-options"><div class="cart-item-price">$' + item.price + '</div><div id="' + index + '" class="remove-item">Remove Item</div><div class="review-details">Review Details</div></div>'
        var cartItemQuantity = '<div class="cart-item-quantity-container"><div class="cart-item-description">Quantity:</div><div class="cart-item-value">' + item.quantity + '</div></div>'
        var cartItemGlazing = '<div class="cart-item-glazing-container"><div class="cart-item-description">Glazing:</div><div class="cart-item-value">' + item.glaze + '</div></div>'
        var cartItemInfo = '<div class="cart-item-info"><div class="cart-item-name">' + item.name + '</div>' + cartItemQuantity + cartItemGlazing + '</div>'
        var cartItem = '<div class="cart-item">' + cartImageContainer + cartItemOptions + cartItemInfo + '</div>'
        cartContainer.append(cartItem)
    });
};

$(document).ready(function(){
    var cart = JSON.parse(localStorage.getItem("cart"))

    if (cart === null) {
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    createCartList(cart)

    $(document).on("click", ".remove-item", function() {
        var index = parseInt($(this).attr("id"));

        cart.splice(index, 1);

        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart));

        $("#cart-items-container").empty();
        createCartList(cart);
    });
});