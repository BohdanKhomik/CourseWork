;
(function() {
    var catalogSection = document.querySelector('.section_catalog');

    if (catalogSection === null) {
        return;
    }

    var removeChildren = function(item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };

    var updateChildren = function(item, children) {
        removeChildren(item);
        for (var i = 0; i < children.length; i += 1) {
            item.appendChild(children[i]);
        }
    };

    var catalog = catalogSection.querySelector('.catalog');
    var catalogNav = catalogSection.querySelector('.catalog_nav');
    var catalogItems = catalogSection.querySelectorAll('.catalog_item');

    catalogNav.addEventListener('click', function(e) {
        var target = e.target;
        var item = myLib.closestItemByClass(target, 'menu_btn');

        if (item === null || item.classList.contains('active')) {
            return;
        }

        e.preventDefault();
        var filterValue = item.getAttribute('filter');
        var previousBtnActive = catalogNav.querySelector('.menu_btn.active');

        previousBtnActive.classList.remove('active');
        item.classList.add('active');

        if (filterValue === 'all') {
            updateChildren(catalog, catalogItems);
            return;
        }

        var filteredItems = [];
        for (var i = 0; i < catalogItems.length; i += 1) {
            var current = catalogItems[i];
            if (current.getAttribute('category') === filterValue) {
                filteredItems.push(current);
            }
        }

        updateChildren(catalog, filteredItems);
    });
})();