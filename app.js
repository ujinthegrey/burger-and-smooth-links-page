const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow')
    console.log(menuArrows);

    if (menuArrows.length) {
        for (let menuArrow of menuArrows) {
            menuArrow.addEventListener('click', (e) => {
                menuArrow.parentElement.classList.toggle('_active')
            }) 
        }
    }
} else {
    document.body.classList.add('_pc')
}
/* ---show/hide-menu-on-burger-click--------- */
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        
    })
}


/* --smooth-scroll---------------- */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                menuIcon.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}