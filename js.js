function tabuada(){
var num = parseInt (document.getElementById("num").value);
var resultado = document.getElementById('resposta');
var tabuada ='';

for (var count = 1; count <=10; count ++){
  tabuada += num + "X" + count + "=" + 
  num*count+ "<br/>"; //conta

  resultado.innerHTML = tabuada;
  }
}
