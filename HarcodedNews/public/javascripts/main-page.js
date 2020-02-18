let arr = [...document.getElementsByClassName("link")]

arr.forEach(elm => {
    elm.onclick = e => {

        e.preventDefault()

        if (elm.getAttribute("activated"))
        {
            axios.put(`/delete.favorite?${elm.getAttribute("id")}`)
        } else
        {
            axios.put(`/add-favorite?${elm.getAttribute("id")}`)
        }

    }
})

