$(document).ready(function(){
    var cart = JSON.parse(localStorage.getItem("cart"))

    if (cart === null) {
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    $("#nav-cart").text("Cart (" + cart.length + ")");


    $(document).on("click", ".shop-glazing-option", function() {
        $(this).parent().children().removeAttr("id");
        $(this).attr("id", "glaze-selected")
    });

    $(document).on("click", ".shop-quantity-option", function() {
        $(this).parent().children().removeAttr("id");
        $(this).attr("id", "quantity-selected")
    });

    $(document).on("click", "#add-to-cart", function() {
        localStorage.removeItem("cart");
        var selection = {
            quantity: $("#quantity-selected").text(),
            glaze: $("#glaze-selected").text(),
            price: parseFloat($("#price-option").text().substring(1)),
            name: $("#product-title").text(),
            img: $("#modal-image").attr("src")
        };
        cart.push(selection)

        $("#nav-cart").text("Cart (" + cart.length + ")");

        localStorage.setItem("cart", JSON.stringify(cart));

        window.open("browsepage.html", "_self");
    });
});