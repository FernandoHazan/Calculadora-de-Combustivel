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

    if(lucro >= 0 || lucro < 0){
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
    
    let dados = document.getElementById('caixa1')
    
    
    if(arrayTeste.length === 0){
    dados.innerHTML = `<h2 class="corpo__principal__resultado__titulo">Nenhum cálculo feito</h2>`
    }else{
    
    for(let i=0; i < arrayTeste.length; i++){

      if(arrayTeste[i].valorDoFrete >= 0 || arrayTeste[i].valorDoFrete <= 0){
        dados.innerHTML = dados.innerHTML + `<div class="corpo__principal__caixa-historico__bloco1"><p>Distancia: $${arrayTeste[i].distancia}</p><p>Preço por litro: $${arrayTeste[i].consumoPorkm}</p><p>Preço do combustivel: $${arrayTeste[i].valorDoCombustivel}</p><p>Preço do frete: $${arrayTeste[i].valorDoFrete}</p><div class="corpo__principal__caixa-historico__bloco2"><p class="corpo__principal__caixa-historico__bloco2__valores">Lucro: $${arrayTeste[i].lucro}</p><p class="corpo__principal__caixa-historico__bloco2__valores">Gasto: $${arrayTeste[i].gasto}</p></div></div>`
    } else{
        dados.innerHTML = dados.innerHTML + `<div class="corpo__principal__caixa-historico__bloco1"><p>Distancia: $${arrayTeste[i].distancia}</p><p>Preço por litro: $${arrayTeste[i].consumoPorkm}</p><p>Preço do combustivel: $${arrayTeste[i].valorDoCombustivel}</p><p>Preço do frete: xx</p><div class="corpo__principal__caixa-historico__bloco2"><p class="corpo__principal__caixa-historico__bloco2__valores">Lucro: xx</p><p class="corpo__principal__caixa-historico__bloco2__valores">Gasto: $${arrayTeste[i].gasto}</p></div></div>`
    }
}
    }
    
    const caixa1 = document.querySelector(".troca1")
    const caixa2 = document.querySelector(".troca2")
    if(caixa1.classList.contains("display__none")){
    
        caixa1.classList.remove('display__none')
        caixa1.classList.add('corpo__principal__historico-titulo')

        caixa2.classList.remove('display__none')
        caixa2.classList.add('corpo__principal__caixa-historico')

    } else{
    
        caixa1.classList.add('display__none')
        caixa1.classList.remove('corpo__principal__historico-titulo')

        caixa2.classList.add('display__none')
        caixa2.classList.remove('corpo__principal__caixa-historico')

        dados.innerHTML = ''
    }
}