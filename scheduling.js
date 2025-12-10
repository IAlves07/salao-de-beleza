const profissionais = [
    {id: 1, nome: "Ana Silva", img: "img/Loira.png"},
    {id: 2, nome: "Maria Thereza", img: "img/Modelos.png"},
    {id: 3, nome: "Andressa Alves", img: "img/Modelos.png"},
    {id: 4, nome: "Ana Ambrozi", img: "img/Modelos.png"},
    {id: 5, nome: "Thayná Fowler", img: "img/Modelos.png"},
    {id: 6, nome: "Bianca Beans", img: "img/Modelos.png"}
];

//Variável que não pode mudar
const horariosDisponiveis = [
    "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30"
];


//Variável
let agendamento = {
    profissional: null,
    data: null,
    hora: null,
    nomeCliente: null,
    servico: null
};

//Inicialização
document.addEventListener("DOMContentLoaded", () =>{
    carregarProfisionais();
    configurarDataMinima();
});

//Gerar lista de profissionais
function carregarProfisionais(){
    const container = document.getElementById("lista-profissionais");
    container.innerHTML = "";

    profissionais.forEach(pro => {
        const div = document.createElement("div");
        div.className = "card-pro";
        div.onclick = () => selecionarProfissional(pro,div);

        div.innerHTML = `
        <img src="${pro.img}" alt="${pro.nome}">
        <h3>${pro.nome}</h3>
        `;
        container.appendChild(div);
    });
}

//Configurar Calendário

function configurarDataMinima(){
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById("data-escolhida").min = hoje;
}

//Seleção

function selecionarProfissional (pro, divClicada){
    agendamento.profissional = pro;
    document.querySelectorAll(".card-pro").forEach(card => card.classList.remove("selecionado"));
    divClicada.classList.add("selecionado");

    document.getElementById("pro-selecionado").innerText = pro.nome;

    carregarHorarios();

    const passo2 = document.getElementById("passo2");
    passo2.style.display = "block";

    setTimeout(() => {
        passo2.scrollIntoView({behavior: "smooth", block: "start"});
    }, 100);
}

function carregarHorarios(){
    const container = document.getElementById("lista-horarios");
    container.innerHTML = "";

    horariosDisponiveis.forEach(hora => {
        const btn = document.createElement("button");
        btn.className = "btn-horario";
        btn.innerText = hora;

        btn.onclick = function(){
            document.querySelectorAll(".btn-horario").forEach(b => b.classList.remove("selecionado"));
            this.classList.add("selecionado");
            agendamento.hora = hora;
        };

        container.appendChild(btn);
    });
}

//Navegação e confirmação

function irParaResumo(){
    const dataInput = document.getElementById("data-escolhida").value;
    if (!dataInput){
        alert("Por favor, escolha uma data no calendário");
        return;
    }
    if (!agendamento.hora){
        alert("Por favor, selecione um horário disponível");
        return;
    }

//Formatar data
    const partesData = dataInput.split('-');
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    agendamento.data = dataFormatada;

//preeche os dados
    document.getElementById("resumo-pro").innerText = agendamento.profissional.nome;
    document.getElementById("resumo-data").innerText = agendamento.data;
    document.getElementById("resumo-hora").innerText = agendamento.hora;

//Esconde o passo 2
    document.getElementById("passo2").style.display = "none";

//passo 3
    const passo3 = document.getElementById("passo3");
    passo3.style.display = "block";
    passo3.scrollIntoView({behavior: "smooth"});
}

function voltarPasso(passoParaVoltar){
    if(passoParaVoltar === 1){
        document.getElementById("passo2").style.display = "none";
        document.getElementById("passo3").style.display = "none";
        document.querySelectorAll(".card-pro").forEach(card => card.classList.remove("selecionado"))
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else if (passoParaVoltar ===2){
        document.getElementById("passo3").style.display = "none";
        document.getElementById("passo2").style.display = "block";
        document.getElementById("passo2").scrollIntoView({behavior: "smooth"});
    }
}

function finalizarAgendamento(){
    const nomeCliente = document.getElementById("nome-cliente").value;
    const servicoSelecionado = document.getElementById("servico-cliente").value;

    if (nomeCliente.trim() === ""){
        alert("Por favor, digite seu nome completo");
        return;
    }
    if (servicoSelecionado === ""){
        alert("Por favor, selecione o tipo de serviço");
        return;
    }
//Salva no objeto
    agendamento.nomeCliente = nomeCliente;
    agendamento.servico = servicoSelecionado;

//Esconde tudo e mostra sucesso
    document.getElementById("passo1").style.display = "none";
    document.getElementById("passo2").style.display = "none";
    document.getElementById("passo3").style.display = "none";

//Atualizar o texto final

    const textoFinal = `Olá, <strong>${nomeCliente}</strong>!<br>
    seu agendamento para <strong>${servicoSelecionado}</strong> com <strong>${agendamento.profissional.nome}</strong><br>foi confirmado para o dia <strong>${agendamento.data}</strong> às <strong>${agendamento.hora}</strong>.`;

    document.getElementById("texto-confirmacao-final").innerHTML = textoFinal;
    const sucesso = document.getElementById("mensagem-sucesso");
    sucesso.style.display = "block";
    sucesso.scrollIntoView({behavior: "smooth"});
}


