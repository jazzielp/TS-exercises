
const buscarPalabra = (frase : string, palabra : string): string => {
  let fraseLipia : string = frase.toLowerCase().replace(/[!¡.,¿?-]/gi, "");

  let arrayFrase : string[] = fraseLipia.split(" ");
  console.log(arrayFrase);
  let count = 0;
  arrayFrase.forEach( (element: string) => {
    if(element === palabra){
      count++;
    }
  });

  return `La palabra "${palabra}" se repite ${count} veces en la frase "${frase}"`;

}

let result = buscarPalabra("hola mundo, como estan, hola soy hola", "hola");
console.log(result);
