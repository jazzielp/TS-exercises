const palindromo = (cadena : string) => {
  let objCadena = cadena.split("").reverse().join("");
  let result = cadena === objCadena ? true : false;
  return result;
}

let palabra = "palindromo";

console.log( palindromo(palabra) === true ? `la palabra "${palabra}" es un palindromo` : `la palabra "${palabra}" no es un palindromo`);
