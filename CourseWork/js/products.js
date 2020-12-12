;
(function() {
    var catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    var changeProductSize = function(target) {
        var product = myLib.closestItemByClass(target, 'products');
        var previousBtnActive = product.querySelector('.size.active');

        previousBtnActive.classList.remove('active');
        target.classList.add('active');
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('size') && !target.classList.contains('active')) {
            e.preventDefault();
            changeProductSize(target);
        }
    });
})();