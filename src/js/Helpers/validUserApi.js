const validUserAPI = (temp) =>{
  if (!temp.cell) temp.cell = 'Missing info'
  if (!temp.email) temp.email = 'Missing info'
  if (!temp.gender) temp.gender = 'Missing info'
  if (!temp.nat) temp.nat = 'Missing info'
  if (!temp.phone) temp.phone = 'Missing info'
  if (!temp.dob) throw new 'Missing API value - dob'
  if (!temp.dob.age) temp.dob.age = 'Missing info'
  if (!temp.dob.date) temp.dob.date = 'Missing info'
  if (!temp.id) throw new 'Missing API value - id'
  if (!temp.id.name) temp.id.name = 'Missing info'
  if (!temp.id.value) temp.id.value = 'Missing info'
  if (!temp.location) throw new 'Missing API value - location'
  if (!temp.location.city) temp.location.city = 'Missing info'
  if (!temp.location.country) temp.location.country = 'Missing info'
  if (!temp.location.postcode) temp.location.postcode = 'Missing info'
  if (!temp.location.state) temp.location.state = 'Missing info'
  if (!temp.location.coordinates) throw new 'Missing API value - location'
  if (!temp.location.coordinates.latitude)
    temp.location.coordinates.latitude = 'Missing info'
  if (!temp.location.coordinates.longitude)
    temp.coordinates.longitude = 'Missing info'
  if (!temp.location.street) throw new 'Missing API value - location'
  if (!temp.location.street.name)
    temp.location.street.name = 'Missing info'
  if (!temp.location.street.number)
    temp.location.street.number = 'Missing info'
  if (!temp.location.timezone) throw new 'Missing API value - location'
  if (!temp.location.timezone.description)
    temp.location.timezone.description = 'Missing info'
  if (!temp.location.timezone.offset)
    temp.location.timezone.offset = 'Missing info'
  if (!temp.login) throw new 'Missing API value - login'
  if (!temp.login.md5) temp.login.md5 = 'Missing info'
  if (!temp.login.password) temp.login.password = 'Missing info'
  if (!temp.login.salt) temp.login.salt = 'Missing info'
  if (!temp.login.sha1) temp.login.sha1 = 'Missing info'
  if (!temp.login.sha256) temp.login.sha256 = 'Missing info'
  if (!temp.login.username) temp.login.username = 'Missing info'
  if (!temp.login.uuid) temp.login.uuid = 'Missing info'
  if (!temp.name) throw new 'Missing API value - name'
  if (!temp.name.first) temp.name.first = 'Missing info'
  if (!temp.name.last) temp.name.last = 'Missing info'
  if (!temp.name.title) temp.name.title = 'Missing info'
  if (!temp.picture) throw new 'Missing API value - picture'
  if (!temp.registered) throw new 'Missing API value - registered'
  if (!temp.registered.age) temp.registered.age = 'Missing info'
  if (!temp.registered.date) temp.registered.date = 'Missing info'
  return temp
}

export default validUserAPI
