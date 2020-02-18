let arr = [...document.getElementsByClassName("fav-image")]
setFavs()
arr.forEach(elm => {

    elm.onclick = e => {

        e.preventDefault()
        console.log(elm.getAttribute("id"))

        if (elm.hasAttribute("favorite"))
        {
            elm.toggleAttribute("favorite")
            setFavs()
            //axios.put(`/delete.favorite?${elm.getAttribute("id")}`)

        } else
        {
            axios.put(`/add-favorite?id=${elm.getAttribute("id")}`)
                .then(data => {
                    if (data.status == 200)
                    {
                        elm.toggleAttribute("favorite")
                        setFavs()
                    }
                })
                .catch(err => console.log("ha ocurrido un error: ", err))
        }
    }
})