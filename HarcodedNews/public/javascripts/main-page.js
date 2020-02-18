let arr = [...document.getElementsByClassName("fav-image")]
setFavs()
arr.forEach(elm => {
    elm.onclick = e => {

        e.preventDefault()

        if (elm.hasAttribute("favorite"))
        {
            elm.toggleAttribute("favorite")
            setFavs()
            //axios.put(`/delete.favorite?${elm.getAttribute("id")}`)

        } else
        {

            elm.toggleAttribute("favorite")
            setFavs()
            //axios.put(`/add-favorite?${elm.getAttribute("id")}`)
        }
    }
})

