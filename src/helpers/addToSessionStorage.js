const addToSessionStorage = (post) =>{
    sessionStorage.clear()
    let serialArray = JSON.stringify(post)
    sessionStorage.setItem('ArrayFavorite', serialArray)
}

export default addToSessionStorage
