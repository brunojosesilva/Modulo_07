const formularios = document.getElementById('formulario-campos');

const valorcampoA = document.getElementById('numeroA');
const valorcampoB = document.getElementById('numeroB');

function validarNumeros(parm_valorcampoA, parm_valorcampoB) {
    /* pode ser assim ou conforme abaixo no return 
    let campoValidado = false;
    console.log(parm_valorcampoA);
    console.log(parm_valorcampoB);

    if (parm_valorcampoA < parm_valorcampoB){
        campoValidado = true;
    }
    return campoValidado;
    */
    return parm_valorcampoA < parm_valorcampoB;
}

formularios.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validarNumeros(valorcampoA.value, valorcampoB.value)) {
        /* seleciona a classe para alterar os estilos */ 
        const displayMensagem = document.querySelector('.mensagem');
        displayMensagem.innerHTML = 'Campos validados com sucesso!';
        displayMensagem.style.display = 'block'


    } else {
        /* seleciona a classe para alterar os estilos */ 
        const displayMensagem = document.querySelector('.mensagem');
        displayMensagem.innerHTML = `Campos NãO validados, campo A: <b>${valorcampoA.value}<b/> deve ser menor que campo B:<b>${valorcampoB.value}<b/> .`;
        displayMensagem.style.display = 'block'
    }
    valorcampoA.value = '';
    valorcampoB.value = '';
})