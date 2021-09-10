const transformCity = (city) =>{
  const translateChar = new Map([
    ['А', 'A'], ['Б', 'B'], ['В', 'V'], ['Г', 'G'], ['Д', 'D'], ['Е', 'E'],
    ['Ж', 'Zh'], ['З', 'Z'], ['И', 'I'], ['Й', 'J'], ['К', 'K'], ['Л', 'L'],
    ['М', 'M'], ['Н', 'N'], ['О', 'O'], ['П', 'P'], ['Р', 'R'], ['С', 'S'],
    ['Т', 'T'], ['У', 'U'], ['Ф', 'F'], ['Х', 'H'], ['Ц', 'Ts'], ['Ч', 'Ch'],
    ['Ш', 'Sh'], ['Щ', 'Shch'], ['Ы', 'Y'], ['Э', 'E'], ['Ю', 'Yu'],
    ['Я', 'Ya'], ['І', 'I'],
    ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],
    ['ж', 'zh'], ['з', 'z'], ['и', 'i'], ['й', 'j'], ['к', 'k'], ['л', 'l'],
    ['м', 'm'], ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'], ['с', 's'],
    ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'ts'], ['ч', 'ch'],
    ['ш', 'sh'], ['щ', 'shch'], ['ъ', ''], ['ы', 'y'], ['ь', ''], ['э', 'e'],
    ['ю', 'yu'], ['я', 'ya'], [`'`, `'`], [`"`, `"`], ['і', 'i'],
  ])
  const transcriptCity = []
  for (const charCity of city)
    for (const elementMap of translateChar.keys())
      if (charCity === elementMap)
        transcriptCity.push(translateChar.get(elementMap))
  return transcriptCity.join('')
}

export default transformCity
