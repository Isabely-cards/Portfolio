
//icon navBar
let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('#navBar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

//scroll sections

window.onscroll = () => {

    let header = document.querySelector('header')
    let sections = document.querySelector('section')
    let navLinks = document.querySelector('header nav a')

    header.classList.toggle('sticky', window.scrollY > 100)
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')

    sections.forEach (sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
            sec.classList.add('show-animate')
        }else {
            sec.classList.remove('show-animate')

        }
    })
}
