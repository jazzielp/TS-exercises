const numMax = 10;
const legend = "tabla del ";

const mult = (num : number) => {
  console.log(legend + num)

  for(let i = 1; i <= numMax; i++){
    let result = i * num;
    console.log(` ${i} x ${num} = ${result}`);
  }
}

mult(5);
