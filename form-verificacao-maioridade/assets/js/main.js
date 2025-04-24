function meuEscopo () {
    const form = document.querySelector('#form')
    const nome = form.querySelector('#nome')
    const idade = form.querySelector('#idade')

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        verificacao();
        nome.value = '';
        idade.value = '';
    })
    function verificacao () {
        if (nome.value.length <= 0 || idade.value.length <= 0) {
            setResultado('Preencha todos os campos.', 'erro')
        } else if (idade.value < 18 ){
            setResultado(`${nome.value}, você é de menor.`, 'menor')
        } else {
            setResultado(`${nome.value}, você é de maior.`, 'maior')
        }
    }
    function criarP (className){
        const p = document.createElement('p');
        p.classList.add(className);
        return p; 
    }
    function setResultado (msg, classe) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criarP(classe);
        p.innerText = msg;
        resultado.appendChild(p);
    }
}
meuEscopo()
