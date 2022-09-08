// 🤔 Pensando na solução

//     Crie dinamicamente uma tag main dentro do body.
//     Crie uma variável products que é um array de objetos, cada objeto tem um nome e um preço. Segue o exemplo:
//     Dentro da tag main você deverá inserir uma lista não ordenada para o array de products.
//     Crie uma variável soma, que irá representar a soma total dos itens no carrinho.
//     Crie um botão contendo a string "Finalizar".
//     Crie uma section que irá receber a soma e o botão.
//     Dentro da tag main, após a lista não ordenada de products, você deverá inserir a section com a soma dos produtos e o botão "Finalizar"
//     Todas as tags deverão ser criadas dinamicamente utilizando o DOM 


//criando o main
const principal = document.createElement("main")
document.querySelector("body").appendChild(principal)


const secao = document.createElement("section")
principal.appendChild(secao)
secao.classList.add("secao") //para add classe pra brincar no css dps e com remove no lugar do add pra tirar

//aqui eu colocaria um header mas tou com preguiça

const lista = document.createElement("ul")
secao.appendChild(lista)
lista.classList.add("lista")



//funcao para criar produtos
function createProduct(paraName, paraPrice) {

    const productsCart = {

        name: paraName,
        price: paraPrice,
    }


    return productsCart
}


const listaProdutos = []

listaProdutos.push(createProduct("Uva Crimson  ", 10))
listaProdutos.push(createProduct("Vinho Dom Bosco  ", 20))
listaProdutos.push(createProduct("Mamão  ", 5))
listaProdutos.push(createProduct("Impressora 3d  ", 1000))
listaProdutos.push(createProduct("Refrigerante  ", 5))

console.log(listaProdutos)

//passar o array dos produtos pra li
// for (let index = 0; index <= listaProdutos.length-1; index++) {
//     nameItem.innerText = listaProdutos[index].name

// }


function createItem(obj) {
    let listItem = document.createElement("li")
    let nameItem = document.createElement("span") //poderia ser um p tb
    let priceItem = document.createElement("span")

    nameItem.innerText = obj.name
    priceItem.innerText = "R$ " + obj.price

    listItem.appendChild(nameItem)
    listItem.appendChild(priceItem)
    lista.appendChild(listItem)
}

for (let i = 0; i < listaProdutos.length; i++) {

    createItem(listaProdutos[i])

}

function soma(objArray) {
    let soma = 0
    for (let i = 0; i < objArray.length; i++) {
        soma += objArray[i].price

    }
    return soma
}

//falta renderizar soma e o botao q n faz pn

let renderizadorSoma = document.createElement("li")
renderizadorSoma.innerText = "Total:   R$ " + soma(listaProdutos)
lista.appendChild(renderizadorSoma)



const buttonEnd = document.createElement("button")
buttonEnd.innerText = "Finalizar"
secao.appendChild(buttonEnd)

