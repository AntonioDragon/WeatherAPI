const validUserAPI = (temp) =>{
  const errorCreate = (message) =>{
    throw new Error(`Api value missing nesting : ${message}`)
  }

  const missing = 'Missing info'

  const {cell = missing, email = missing,
    gender = missing, nat = missing, phone = missing,
    dob: {age: ageDob = missing, date: dateDob = missing} = errorCreate('dob'),
    id: {name: idName = missing, value = missing} = errorCreate('id'),
    location: {city = missing, country = missing,
      postcode = missing, state = missing,
      coordinates: {latitude = missing, longitude = missing},
      street: {name: nameStreet = missing, number = missing},
      timezone: {description = missing,
        offset = missing}} = errorCreate('location'),
    login: {md5 = missing, password = missing, salt = missing, sha1 = missing,
      sha256 = missing, username = missing,
      uuid = missing} = errorCreate('login'),
    name: {first = missing, last = missing,
      title = missing} = errorCreate('name'),
    picture: {large = missing, medium = missing,
      thumbnail = missing} = errorCreate('picture'),
    registered: {age: ageReg = missing,
      date: dateReg = missing} = errorCreate('registered'),
  } = temp

  const validObj = {
    cell: cell, email: email, gender: gender, nat: nat, phone: phone,
    dob: {age: ageDob, date: dateDob},
    id: {name: idName, value: value},
    location: {city: city, country: country, postcode: postcode, state: state,
      coordinates: {latitude: latitude, longitude: longitude},
      street: {name: nameStreet, number: number},
      timezone: {description: description, offset: offset}},
    login: {md5: md5, password: password, salt: salt, sha1: sha1,
      sha256: sha256, username: username, uuid: uuid},
    name: {first: first, last: last, title: title},
    picture: {large: large, medium: medium, thumbnail: thumbnail},
    registered: {age: ageReg, date: dateReg},
  }
  return validObj
}

export default validUserAPI
