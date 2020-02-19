let arr = [...document.getElementsByClassName("fav-image")]
setFavs()
arr.forEach(elm => {

    elm.onclick = e => {

        e.preventDefault()

        if (elm.hasAttribute("favorite"))
        {
            axios.delete(`/delete-favorite?id=${elm.getAttribute("id")}`)
                .then(data => {
                    if (data.status == 200)
                    {
                        elm.toggleAttribute("favorite")
                        setFavs()
                    }
                })
                .catch(err => console.log(err))

        } else
        {
            axios.get(`/add-favorite?id=${elm.getAttribute("id")}`)
                .then(data => {
                    if (data.status == 200)
                    {
                        elm.toggleAttribute("favorite")
                        setFavs()
                    }
                    window.history.href = "/auth/login"
                })
                .catch(err => console.log("ha ocurrido un error: ", err))
        }
    }
})