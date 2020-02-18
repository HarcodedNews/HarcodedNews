let divs = document.getElementsByClassName('fav-image')
let favLinks = document.getElementsByClassName('fav-link')
let quitFavLinks = document.getElementsByClassName('quit-fav-link')

divs = [...divs]
favLinks = [...favLinks]
quitFavLinks = [...quitFavLinks]

console.log(divs, favLinks, quitFavLinks)

divs.forEach((elm, idx) => {
    if (elm.getAttribute('favorite'))
    {
        favLinks[idx].classList.remove('hidden')
        quitFavLinks[idx].classList.add('hidden')

    } else
    {
        favLinks[idx].classList.add('hidden')
        quitFavLinks[idx].classList.revmove('hidden')
    }
})
