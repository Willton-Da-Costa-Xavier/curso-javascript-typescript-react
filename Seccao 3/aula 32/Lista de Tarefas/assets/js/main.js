const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');



function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function LimpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function CriaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','apagar esta tarefa');
    li.appendChild(botaoApagar);
}

const criaTarefa = (textoInput) =>{
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    LimpaInput();
    CriaBotaoApagar(li);    
    salvarTarefas();
}

btnTarefa.addEventListener('click', () =>{
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener("click",(e)=>{
    const el = e.target;
    if(el.classList.contains('apagar')){

        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefas of liTarefas){
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
        
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa2  of listaDeTarefas){
        criaTarefa(tarefa2);
    }
}
adicionaTarefasSalvas();