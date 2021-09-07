const iconsWeather = (weather, outputIllation, timesDay) => {
  const size = outputIllation ? '100x50': '60x50'
  const folderSize = outputIllation ? 'weather100x50': 'weather60x50'
  const newarrarrIconsWether = []
  if (outputIllation)
    for (let key = 0; key < 24; key++) {
      newarrarrIconsWether.push(
          arrCreate(
              weather, timesDay, key, folderSize, size, outputIllation))
    }
  else
    for (let key = 0; key < 7; key++) {
      newarrarrIconsWether.push(
          arrCreate(
              weather, timesDay, key, folderSize, size, outputIllation))
    }
  return newarrarrIconsWether
}

const arrCreate = (arr, timesDay, key, folderSize, size, outputIllation) => {
  if (outputIllation) {
    if (
      arr[key].weatherId == 800 &&
      (timesDay[key] <= 20 && timesDay[key] >= 5)
    )
      return `../../static/images/${folderSize}/Weather3_${size}.svg`
    if (
      arr[key].weatherId == 800 &&
      (timesDay[key] > 20 || timesDay[key] <= 24 &&
        timesDay[key] >= 0 && timesDay[key] < 5)
    )
      return `../../static/images/${folderSize}/Weather9_${size}.svg`
    if (
      (arr[key].weatherId == 801 ||
          arr[key].weatherId == 802) &&
        timesDay[key] <= 20 &&
        timesDay[key] >= 5
    )
      return `../../static/images/${folderSize}/Weather1_${size}.svg`
    if (
      (arr[key].weatherId == 801 ||
          arr[key].weatherId == 802) &&
          (timesDay[key] > 20 || timesDay[key] <= 24 &&
            timesDay[key] >= 0 && timesDay[key] < 5)
    )
      return `../../static/images/${folderSize}/Weather10_${size}.svg`
  } else {
    if (arr[key].weatherId == 800)
      return `../../static/images/${folderSize}/Weather3_${size}.svg`
    if (
      (arr[key].weatherId == 801 ||
        arr[key].weatherId == 802)
    )
      return `../../static/images/${folderSize}/Weather1_${size}.svg`
  }
  if (
    arr[key].weatherId == 803 ||
    arr[key].weatherId == 804
  )
    return `../../static/images/${folderSize}/Weather2_${size}.svg`
  if (
    arr[key].weatherId == 500 ||
    arr[key].weatherId == 501
  )
    return `../../static/images/${folderSize}/Weather5_${size}.svg`
  if (
    arr[key].weatherId >= 502 &&
    arr[key].weatherId <= 531
  )
    return `../../static/images/${folderSize}/Weather4_${size}.svg`
  if (
    arr[key].weatherId >= 300 &&
    arr[key].weatherId <= 321
  )
    return `../../static/images/${folderSize}/Weather11_${size}.svg`
  if (
    arr[key].weatherId >= 200 ||
    (arr[key].weatherId <= 202 &&
      arr[key].weatherId >= 230) ||
    arr[key].weatherId <= 232
  )
    return `../../static/images/${folderSize}/Weather6_${size}.svg`
  if (
    arr[key].weatherId >= 210 &&
    arr[key].weatherId <= 221
  )
    return `../../static/images/${folderSize}/Weather7_${size}.svg`
  if (
    arr[key].weatherId >= 600 &&
    arr[key].weatherId <= 622
  )
    return `../../static/images/${folderSize}/Weather12_${size}.svg`
  if (
    arr[key].weatherId == 701 &&
    arr[key].weatherId == 721 &&
    arr[key].weatherId == 741
  )
    return `../../static/images/${folderSize}/Weather8_${size}.svg`
}

export default iconsWeather
