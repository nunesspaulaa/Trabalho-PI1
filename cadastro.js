let controladoresReference = document.querySelectorAll(".controlador")
let botaoCriarContaReference = document.querySelector("#botaoLogin")
// let inputNomeReference = document.getElementById("inputNome");
// let inputSobrenomeReference = document.getElementById("inputSobrenome");
// let inputEmailReference = document.getElementById("inputEmail");
let inputSenhaReference = document.getElementById("inputSenha");
let inputRepitaSenhaReference = document.getElementById("inputRepitaSenha");
// console.dir(controladoresReference)

botaoCriarContaReference.disabled = true;
botaoCriarContaReference.style.cursor = 'not-allowed';

for(let controladorReference of controladoresReference) {

    let inputReference = controladorReference.children[0]

    inputReference.addEventListener('keyup', function(event) {
    
        if(inputReference.checkValidity()) {
    
            controladorReference.classList.remove('erro');
            botaoCriarContaReference.disabled = false;
            botaoCriarContaReference.style.cursor = 'pointer';
    
        } else {
    
            controladorReference.classList.add('erro');
            botaoCriarContaReference.disabled = true;
            botaoCriarContaReference.style.cursor = 'not-allowed';
    
        }
    })

    // Validação das senhas
    inputReference.addEventListener('keyup', function(event) {

        if(inputRepitaSenhaReference.value === inputSenhaReference.value) {

            inputRepitaSenhaReference.parentNode.classList.remove('erro');
            botaoCriarContaReference.disabled = false;
    
        } else {
        
            inputRepitaSenhaReference.parentNode.classList.add('erro');
            botaoCriarContaReference.disabled = true;
            botaoCriarContaReference.style.cursor = 'not-allowed';
    
        }
    })


}

function criarConta(){
    botaoCriarContaReference.addEventListener("click", alert("Conta Criada com sucesso!"));
}

botaoCriarContaReference.addEventListener("mouseover",function(){
    this.style.backgroundColor="green"
})

botaoCriarContaReference.addEventListener("mouseout",function(){
    this.style.backgroundColor="rgb(254,65,163)"
})