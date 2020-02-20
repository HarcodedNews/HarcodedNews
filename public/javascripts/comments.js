// const axiosApp = axios.create({ baseURL: "https://api.currentsapi.services/v1" })



document.querySelector('#commentFrom').onsubmit = e => {
    // alert("fsdaf")
    e.preventDefault()
    // console.log("enviado")
    const id = document.querySelector('#commentInfo').getAttribute('dataid')
    console.log(id)
    const commentInfo = document.getElementById("commentInfo").value

    axios.post('comments/', { commentInfo, id })
        .catch(err => console.log(`error: ${err}`))

    document.getElementById("commentInfo").value = ""
}

