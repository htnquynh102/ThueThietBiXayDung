document.addEventListener("DOMContentLoaded", function() {
    var priceElements = document.querySelectorAll(".price");
    
    priceElements.forEach(function(priceElement) {
        var price = parseInt(priceElement.textContent.replace(/[^0-9]/g, ''));
        if (!isNaN(price)) {
            priceElement.textContent = price.toLocaleString('vi-VN') + "₫";
        }
    });
});