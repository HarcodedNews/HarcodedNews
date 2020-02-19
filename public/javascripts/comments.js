// const axiosApp = axios.create({ baseURL: "https://api.currentsapi.services/v1" })



document.querySelector('#commentFrom').onsubmit = e => {
    alert("fsdaf")
    e.preventDefault()
    console.log("enviado")
    const id = document.querySelector('#commentInfo').dataset.id
    const commentInfo = document.getElementById("commentInfo").value

    axios.post('comments/', { commentInfo, id })
        .then(sent => console.log(sent))
        .catch(err => console.log(`error: ${err}`))
}