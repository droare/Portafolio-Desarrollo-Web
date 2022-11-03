function serieFibonacci(){
let tamSerie;
let serie=[];
let v1=0,v2=1,v3;  
tamSerie = document.getElementById('tamSerie').value;
serie.push(v1);
serie.push(v2);
for(let i=3;i<=tamSerie;i++){
  v3=v1+v2;
  v1=v2;
  v2=v3;
serie.push(v3);
}
document.getElementById('imprSerie').innerHTML = serie;

//Prevenimos el refresh de la pagina 
document.getElementById("formContent").addEventListener('submit', (event)=>{
  event.preventDefault();
});

}
