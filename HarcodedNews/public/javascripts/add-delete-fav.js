let arr = [...document.getElementsByClassName("link")]

arr.forEach(elm => {
    elm.onclick = e => {

        e.preventDefault()

        console.log(elm.getAttribute("id"))

        //axios.put('/add-favorite?')

    }
})

