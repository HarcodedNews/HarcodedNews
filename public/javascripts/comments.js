
document.querySelector('#commentFrom').onsubmit = e => {

    e.preventDefault()

    const id = document.querySelector('#commentInfo').getAttribute('dataid')
    console.log(id)
    const commentInfo = document.getElementById("commentInfo").value

    axios.post('comments/', { commentInfo, id })
        .then(data => window.location = data.data.path)
        .catch(err => console.log(`error: ${err}`))

    document.getElementById("commentInfo").value = ""
}

