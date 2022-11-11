(function() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (let i=1; i<minPerSlide; i++) {
            console.log(next);
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            if(i===1){
                cloneChild.children[0].setAttribute("class","mx-3 enmedio")
            }
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
})();