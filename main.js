function calcular(){
    const distancia = parseFloat((document.getElementById('distancia').value).replace(',', '.'))
    const valorDoCombustivel = parseFloat((document.getElementById('valor-do-combustivel').value).replace(',', '.'))
    const consumoPorkm = parseFloat((document.getElementById('consumo-por-km').value).replace(',', '.'))
    const valorDoFrete = parseFloat((document.getElementById('valor-do-frete').value).replace(',', '.'))
    const gasto = (valorDoCombustivel / consumoPorkm) * distancia
    console.log(valorDoCombustivel)

    const lucro = valorDoFrete - gasto
    console.log(valorDoCombustivel)

    exibir(gasto, lucro)
}

function exibir(gasto, lucro){

    const caixa1 = document.querySelector(".java1")
    caixa1.classList.remove('display__none')
    caixa1.classList.add('corpo__principal__resultado')

    const caixa2 = document.querySelector(".java2")
    caixa2.classList.remove('display__none')
    caixa2.classList.add('corpo__principal__resultado')

    const botao = document.querySelector(".java3")
    botao.classList.remove('display__none')
    botao.classList.add('corpo__principal__botao__apagar')
     
    let exibirGasto = document.getElementById('caixa-gasto')
    exibirGasto.innerHTML = `<p class="corpo__principal__resultado__valor">$${gasto}</p>`

    let exibirLucro = document.getElementById('caixa-lucro')
    exibirLucro.innerHTML = `<p class="corpo__principal__resultado__valor">$${lucro}</p>`
}

function apagar(){
    const caixa1 = document.querySelector(".java1")
    caixa1.classList.add('display__none')
    caixa1.classList.remove('corpo__principal__resultado')

    const caixa2 = document.querySelector(".java2")
    caixa2.classList.add('display__none')
    caixa2.classList.remove('corpo__principal__resultado')

    const botao = document.querySelector(".java3")
    botao.classList.add('display__none')
    botao.classList.remove('corpo__principal__botao__apagar')

    document.getElementById('distancia').value = ''
    document.getElementById('valor-do-combustivel').value = ''
    document.getElementById('consumo-por-km').value = ''
    document.getElementById('valor-do-frete').value = ''
}