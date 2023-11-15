const buscarPalabra = (frase: string, palabra: string): string => {
  const fraseLipia: string = frase.toLowerCase().replace(/[!¡.,¿?-]/gi, '')

  const arrayFrase: string[] = fraseLipia.split(' ')
  console.log(arrayFrase)
  let count = 0
  arrayFrase.forEach((element: string) => {
    if (element === palabra) {
      count++
    }
  })

  return `La palabra "${palabra}" se repite ${count} veces en la frase "${frase}"`
}

const result = buscarPalabra('hola mundo, como estan, hola soy hola', 'hola')
console.log(result)
