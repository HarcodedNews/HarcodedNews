let arr = [...document.getElementsByClassName("fav-image")]
setFavs()
arr.forEach((elm, idx) => {

    elm.onclick = e => {

        e.preventDefault()

        if (elm.hasAttribute("favorite"))
        {
            axios.delete(`/delete-favorite?id=${elm.getAttribute("id")}`)
                .then(data => {
                    if (data.data.status === "ok")
                    {
                        elm.toggleAttribute("favorite")
                        setFavs()
                    } else if (data.data.status === "redirect")
                    {
                        window.location = data.data.path
                    }
                })
                .catch(err => console.log(err))

        } else
        {

            let id = addNews({
                idNew: document.getElementsByClassName('fav-image')[idx].getAttribute('id'),
                title: document.getElementsByClassName('titleNew')[idx].innerText,
                description: document.getElementsByClassName('description')[idx].innerText,
                url: document.getElementsByClassName('link')[idx].getAttribute('href'),
                image: document.getElementsByClassName('image')[idx].getAttribute('src')
            }).then(id => {
                axios.put(`/add-favorite?id=${id}`)
                    .then(data => {
                        if (data.data.status === "ok")
                        {
                            elm.toggleAttribute("favorite")
                            setFavs()
                        } else if (data.data.status === "redirect")
                        {
                            window.location = data.data.path
                        }
                    })
                    .catch(err => {
                        console.log("ha ocurrido un error: ", err)
                        window.location = "/auth/login"
                    })
            }).catch(err => err)

        }
    }
})