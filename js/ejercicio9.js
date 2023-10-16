let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];

function eliminarDuplicadosManual(array){
        outputArray = array;
        for(var i=0;i<array.length;i++){
           outputArray.sort();
           if(outputArray[i]==outputArray[i+1]){
                outputArray.splice(i,1);
                i-=1;
           }
        }
    }

function eliminarDuplicadosSet(array){

    let noRepetidos = new Set();

    for(var i=0;i<array.length;i++){
        var numero = array[i];
         noRepetidos.add(numero);
    }
   
    outputArray = noRepetidos;
}

eliminarDuplicadosSet(array);
eliminarDuplicadosManual(array);
console.log(outputArray);
