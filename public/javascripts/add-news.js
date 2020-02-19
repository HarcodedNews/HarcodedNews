function addNews(obj) {

    axios.put('/add-news', { new: obj })
        .then(data => {
            if (data.status == 200)
            {
                console.log("Noticia creada")
            } else if (data.status == 303)
            {
                console.log("Noticia ya existia en nuestra base de datos")
            }
        })
        .catch(err => console.log("Ha habido un error: ", err))
}
