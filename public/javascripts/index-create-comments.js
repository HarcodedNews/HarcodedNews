let arr_ = [...document.getElementsByClassName('createComment')]
let cards = [...document.getElementsByClassName('titleNew')]


arr_.forEach((elm, idx) => {
    elm.onclick = e => {
        e.preventDefault()
        addNews({
            idNew: document.getElementsByClassName('fav-image')[idx].getAttribute('id'),
            title: document.getElementsByClassName('titleNew')[idx].innerText,
            description: document.getElementsByClassName('description')[idx].innerText,
            url: document.getElementsByClassName('link')[idx].getAttribute('href'),
            image: document.getElementsByClassName('image')[idx].getAttribute('src'),
        })
            .then(id => window.location = `/comments/create-comments/${id}`)
            .catch(err => err)
    }
})