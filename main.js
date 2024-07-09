class Historicos {
    constructor(distancia, valorDoCombustivel, consumoPorkm, valorDoFrete, gasto, lucro) {
        this.distancia = distancia
        this.valorDoCombustivel = valorDoCombustivel
        this.consumoPorkm = consumoPorkm
        this.valorDoFrete = valorDoFrete
        this.gasto = gasto
        this.lucro = lucro
    }
}

const arrayTeste = []

function calcular(){
    const distancia = parseFloat((document.getElementById('distancia').value).replace(',', '.'))
    const valorDoCombustivel = parseFloat((document.getElementById('valor-do-combustivel').value).replace(',', '.'))
    const consumoPorkm = parseFloat((document.getElementById('consumo-por-km').value).replace(',', '.'))
    const valorDoFrete = parseFloat((document.getElementById('valor-do-frete').value).replace(',', '.'))
    const gasto = ((valorDoCombustivel / consumoPorkm) * distancia).toFixed(2)
    
    const lucro = (valorDoFrete - gasto).toFixed(2)

    if(distancia >= 0 && valorDoCombustivel >= 0 && consumoPorkm >= 0){
        exibir(gasto, lucro)
        historico(distancia, valorDoCombustivel, consumoPorkm, valorDoFrete, gasto, lucro)
    } else{
        const caixa1 = document.querySelector(".java1")
        caixa1.classList.remove('display__none')
        caixa1.classList.add('corpo__principal__resultado')
        let exibirGasto = document.getElementById('caixa-gasto')
        exibirGasto.innerHTML = `<h2 class="corpo__principal__resultado__titulo">Dados insuficientes</h2>`
    }
}

function exibir(gasto, lucro){

    const caixa1 = document.querySelector(".java1")
    caixa1.classList.remove('display__none')
    caixa1.classList.add('corpo__principal__resultado')

    if(lucro > 0 || lucro < 0){
    const caixa2 = document.querySelector(".java2")
    caixa2.classList.remove('display__none')
    caixa2.classList.add('corpo__principal__resultado')

    let exibirLucro = document.getElementById('caixa-lucro')
    exibirLucro.innerHTML = `<h2 class="corpo__principal__resultado__titulo">O lucro do frete será:</h2>` + `<p class="corpo__principal__resultado__valor">$${lucro}</p>`
    } else{
    const caixa2 = document.querySelector(".java2")
    caixa2.classList.remove('display__none')
    caixa2.classList.add('corpo__principal__resultado')

    let exibirLucro = document.getElementById('caixa-lucro')
    exibirLucro.innerHTML = `<h2 class="corpo__principal__resultado__titulo">O lucro do frete será:</h2>` + `<p class="corpo__principal__resultado__valor">------</p>`
    }
    const botao = document.querySelector(".java3")
    botao.classList.remove('display__none')
    botao.classList.add('corpo__principal__botao__apagar')
     
    let exibirGasto = document.getElementById('caixa-gasto')
    exibirGasto.innerHTML = `<h2 class="corpo__principal__resultado__titulo">O preço do combustivel é:</h2>` + `<p class="corpo__principal__resultado__valor">$${gasto}</p>`

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

function historico(distancia, valorDoCombustivel, consumoPorkm, valorDoFrete, gasto, lucro){

    let novoItem = new Historicos(distancia, valorDoCombustivel, consumoPorkm, valorDoFrete, gasto, lucro)
    arrayTeste.push(novoItem)
    console.log(arrayTeste)
}

function exibirHistorico(){

}
    


