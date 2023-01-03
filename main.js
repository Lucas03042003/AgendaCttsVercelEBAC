const form = document.getElementById('form-atividade');
const contatos = [];
const nums = [];
const foto = '<img src="pessoa.jpg" alt="ícone de rosto"/>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTab();
});

function addLinha(){
    const inputCtt = document.getElementById('Contato');
    const inputTel = document.getElementById('numTelef');

    if(contatos.includes(inputCtt.value)){
        alert('Esse Contato já foi adicionado');
    }else{
        if(nums.includes(inputTel.value)){
            alert('Esse Telefone já foi adicionado');
        }else{
            contatos.push(inputCtt.value);
            nums.push(inputTel.value);

            let linha = '';
            linha += '<td>' + inputCtt.value + '</td>';
            linha += '<td>' + inputTel.value + '</td>';
            linha += '<td id="pessoa">' + foto + '</td>';
            linha += '<tr>';

            linhas += linha;
            }
        }

    inputCtt.value = '';
    inputTel.value = '';
}

function atualizaTab(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

