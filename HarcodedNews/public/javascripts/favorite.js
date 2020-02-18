let icons = document.getElementsByClassName('fav-image')
let favLinks = document.getElementsByClassName('fav-link')
let quitFavLinks = document.getElementsByClassName('quit-fav-link')

icons = [...icons]

function setFavs() {
  icons.forEach((elm, idx) => {
    if (elm.hasAttribute('favorite'))
    {
      favLinks[idx].classList.remove('hidden')
      quitFavLinks[idx].classList.add('hidden')
    } else
    {
      favLinks[idx].classList.add('hidden')
      quitFavLinks[idx].classList.remove('hidden')
    }
  })
}


