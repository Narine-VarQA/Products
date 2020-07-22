var product = $(".items");
var bar = $(".basket");

var productcount = 0;
var total = 0;
var product = $(".items");

$(document).ready(function() {
    $(".product-buy").click(function() {
        $(".link").css("display", "none");
        $(product).append(bar);

    });


    $(".product-buy").click(function() {
        productcount++;
        $(".total-count").text(productcount);
        total += parseInt(product.find(".product-price").text());
        $(".total-price").text(total);
    });
});