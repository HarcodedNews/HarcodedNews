const links = [...document.getElementsByClassName('fav-image')]
links.forEach(elm => {
    elm.onclick = e => {
        e.preventDefault()
        axios.delete(`/delete-favorite?id=${elm.getAttribute("id")}`)
            .then(() => {
                window.location = "/profile"
            })
            .catch(err => {
                console.log(err)
                window.location = "/auth/login"
            })
    }
})