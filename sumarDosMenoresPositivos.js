//La función recibe un arreglo de enteros y filtra los positivos en un nuevo arreglo. Luego utilizando sort junto con una función de comparación, ordena el array de valores positivos de menor a mayor. Por último suma las dos primeras posiciones del array ya ordenado y devuelve el resultado.
function myFunction(arr){
  let arrPositives = arr.filter(el => el > 0)
  let arrInOrder = arrPositives.sort((a, b) => a - b);
  let res = arrInOrder[0] + arrInOrder[1];
  return res; 
}
