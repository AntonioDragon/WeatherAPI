const iconsWeather = (arr, outputIllation, timesDay) => {
  const size = outputIllation ? '100x50': '60x50'
  const folderSize = outputIllation ? 'weather100x50': 'weather60x50'
  const newarrarrIconsWether = []
  if (outputIllation)
    for (let key = 0; key < 24; key++) {
      newarrarrIconsWether.push(
          arrCreate(
              arr.data.hourly, timesDay, key, folderSize, size, outputIllation))
    }
  else
    for (let key = 0; key < 7; key++) {
      newarrarrIconsWether.push(
          arrCreate(
              arr.data.daily, timesDay, key, folderSize, size, outputIllation))
    }
  return newarrarrIconsWether
}

const arrCreate = (arr, timesDay, key, folderSize, size, outputIllation) => {
  if (outputIllation) {
    if (
      arr[key].weather[0].id == 800 &&
      (timesDay[key] <= 20 && timesDay[key] >= 5)
    )
      return `../../static/images/${folderSize}/Weather3_${size}.svg`
    if (
      arr[key].weather[0].id == 800 &&
      (timesDay[key] > 20 || timesDay[key] <= 24 &&
        timesDay[key] >= 0 && timesDay[key] < 5)
    )
      return `../../static/images/${folderSize}/Weather9_${size}.svg`
    if (
      (arr[key].weather[0].id == 801 ||
          arr[key].weather[0].id == 802) &&
        timesDay[key] <= 20 &&
        timesDay[key] >= 5
    )
      return `../../static/images/${folderSize}/Weather1_${size}.svg`
    if (
      (arr[key].weather[0].id == 801 ||
          arr[key].weather[0].id == 802) &&
          (timesDay[key] > 20 || timesDay[key] <= 24 &&
            timesDay[key] >= 0 && timesDay[key] < 5)
    )
      return `../../static/images/${folderSize}/Weather10_${size}.svg`
  } else {
    if (arr[key].weather[0].id == 800)
      return `../../static/images/${folderSize}/Weather3_${size}.svg`
    if (
      (arr[key].weather[0].id == 801 ||
        arr[key].weather[0].id == 802)
    )
      return `../../static/images/${folderSize}/Weather1_${size}.svg`
  }
  if (
    arr[key].weather[0].id == 803 ||
    arr[key].weather[0].id == 804
  )
    return `../../static/images/${folderSize}/Weather2_${size}.svg`
  if (
    arr[key].weather[0].id == 500 ||
    arr[key].weather[0].id == 501
  )
    return `../../static/images/${folderSize}/Weather5_${size}.svg`
  if (
    arr[key].weather[0].id >= 502 &&
    arr[key].weather[0].id <= 531
  )
    return `../../static/images/${folderSize}/Weather4_${size}.svg`
  if (
    arr[key].weather[0].id >= 300 &&
    arr[key].weather[0].id <= 321
  )
    return `../../static/images/${folderSize}/Weather11_${size}.svg`
  if (
    arr[key].weather[0].id >= 200 ||
    (arr[key].weather[0].id <= 202 &&
      arr[key].weather[0].id >= 230) ||
    arr[key].weather[0].id <= 232
  )
    return `../../static/images/${folderSize}/Weather6_${size}.svg`
  if (
    arr[key].weather[0].id >= 210 &&
    arr[key].weather[0].id <= 221
  )
    return `../../static/images/${folderSize}/Weather7_${size}.svg`
  if (
    arr[key].weather[0].id >= 600 &&
    arr[key].weather[0].id <= 622
  )
    return `../../static/images/${folderSize}/Weather12_${size}.svg`
  if (
    arr[key].weather[0].id == 701 &&
    arr[key].weather[0].id == 721 &&
    arr[key].weather[0].id == 741
  )
    return `../../static/images/${folderSize}/Weather8_${size}.svg`
}

export default iconsWeather
