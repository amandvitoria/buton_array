

var dadosLista = [];

function salvarPlan(){
    let plan = document.getElementById("planejamento").value;
   
    if(plan){

        dadosLista.push(plan);
        criarLista();
        document.getElementById('planejamento').value = '';

    }

}
//função para criar linhas de usuario

 
function criarLista(){

    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>planejamento</th><th>Ações</th></tr>';

 

    for(let i = 0; i <= (dadosLista.length - 1); i++){

        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class ='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><button class ='btn btn-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>"

        document.getElementById('tabela').innerHTML = tabela;

    }

}

// função editar planejamento
function editar(i){
    document.getElementById('planejamento').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);

}
// função excluir planejamento
function excluir(i){
    dadosLista.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);
}
// função comprido planejamento
function comprido(i){
    document.getElementById('planejamento').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);}