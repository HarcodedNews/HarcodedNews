function addNews(obj) {
    return axios.put('/add-news', { new: obj })
        .then(data => data.data.id)
        .catch(err => console.log(err))
}