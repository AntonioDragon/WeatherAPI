const addToSessionStorage = (post) =>{
    let serialArray = JSON.stringify(post)
    sessionStorage.setItem('ArrayFavorite', serialArray)
}

export default addToSessionStorage
