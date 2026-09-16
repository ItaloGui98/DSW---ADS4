// Q1
function converterSegundos(tsegundos) {
    const horas = Math.floor(tsegundos / 3600);
    const minutos = Math.floor((tsegundos % 3600) / 60);
    const segundos = tsegundos % 60; 

    console.log(`${tsegundos}s → ${horas}h ${minutos}min ${segundos}s`);
    return { horas, minutos, segundos };
}  
converterSegundos(3665);

// Q2
function converterCelsius(celsius) {
    const fahrenheit = Math.floor((celsius * 1.8) + 32);
    const kelvin = Math.floor(celsius + 275.15);

    console.log(`${celsius}°C equivale a:`);
    console.log(`${fahrenheit}°C equivale a:°F`);
    console.log(`${kelvin}°C equivale a:°K`);

    return {fahrenheit, kelvin};
}
converterCelsius(40);

// Q3
function calcularPedido(preco, quantidade) {
    const subtotal = preco * quantidade;
    let desconto = 0;

    if (subtotal > 300) {
        desconto = subtotal * 0.10;
    } else if (subtotal > 100) {
        desconto = subtotal * 0.05;
    }

    const total = subtotal - desconto;

    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);

    return { subtotal, desconto, total };
}

calcularPedido(80, 5);

// Q4
function verificarPessoa(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    const podeVotar = idade >= 16;
    const votoObrigatorio = idade >= 18 && idade <= 70;
    const isentoMilitar = idade < 18;

    console.log(`Idade: ${idade} anos`);
    console.log(`Pode votar: ${podeVotar}`);
    console.log(`Voto obrigatório: ${votoObrigatorio}`);
    console.log(`Isento do serviço militar: ${isentoMilitar}`);

    return { idade, podeVotar, votoObrigatorio, isentoMilitar };
}

verificarPessoa(2008);

// Q5
function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case "+":
            return numero1 + numero2;

        case "-":
            return numero1 - numero2;

        case "*":
            return numero1 * numero2;

        case "/":
            if (numero2 === 0) {
                return "Erro: não é possível dividir por zero.";
            }
            return numero1 / numero2;

        default:
            return "Erro: operador inválido.";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));

// Q6
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

console.log(calcularIMC(70, 1.75));

// Q7
function pedraPapelTesoura(jogador1, jogador2) {
    if (jogador1 === jogador2) {
        console.log("Empate!");
        return "Empate";
    }

    const vence = {
        pedra: "tesoura",
        papel: "pedra",
        tesoura: "papel"
    };

    let resultado;

    if (vence[jogador1] === jogador2) {
        resultado = "Jogador 1 venceu";
    } else {
        resultado = "Jogador 2 venceu";
    }

    console.log(resultado);
    return resultado;
}

pedraPapelTesoura("pedra", "tesoura");

// Q8
function verificarPalindromo(texto) {
    const textoLimpo = texto.toLowerCase().replaceAll(" ", "");
    const invertido = textoLimpo.split("").reverse().join("");

    const resultado = textoLimpo === invertido;

    console.log(`"${texto}" → ${resultado}`);

    return resultado;
}

verificarPalindromo("Arara");

// Q9
function analisarNotas(notas) {
    let soma = 0;
    let maior = notas[0];
    let menor = notas[0];

    for (const nota of notas) {
        soma += nota;

        if (nota > maior) {
            maior = nota;
        }

        if (nota < menor) {
            menor = nota;
        }
    }

    const media = soma / notas.length;

    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Maior nota: ${maior}`);
    console.log(`Menor nota: ${menor}`);

    return { media, maior, menor };
}

analisarNotas([7, 8, 6, 9, 10]);

// Q10
function fibonacci(n) {
    let anterior = 0;
    let atual = 1;

    for (let i = 0; i < n; i++) {
        const proximo = anterior + atual;

        anterior = atual;
        atual = proximo;
    }

    console.log(`Fibonacci(${n}) = ${anterior}`);

    return anterior;
}

fibonacci(10);

// Q11
function validarSenha(senha) {
    const erros = [];

    if (senha.length < 8) {
        erros.push("Mínimo de 8 caracteres");
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push("Precisa de uma letra maiúscula");
    }

    if (!/[0-9]/.test(senha)) {
        erros.push("Precisa de um número");
    }

    console.log(`Senha: ${senha}`);
    console.log(`Regras não cumpridas: ${erros}`);

    return erros;
}

validarSenha("abc123");

// Q12
const produtos = [
    { nome: "Notebook", preco: 3000, quantidade: 5 },
    { nome: "Mouse", preco: 100, quantidade: 10 },
    { nome: "Teclado", preco: 200, quantidade: 3 },
    { nome: "Monitor", preco: 1200, quantidade: 2 }
];

function valorEstoque(produtos) {
    let total = 0;

    for (const produto of produtos) {
        total += produto.preco * produto.quantidade;
    }

    console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);

    return total;
}
valorEstoque(produtos);

function produtoMaisCaro(produtos) {
    let maisCaro = produtos[0];

    for (const produto of produtos) {
        if (produto.preco > maisCaro.preco) {
            maisCaro = produto;
        }
    }

    console.log(`Produto mais caro: ${maisCaro.nome}`);

    return maisCaro;
}
produtoMaisCaro(produtos);

function produtosAbaixoDoMinimo(produtos, minimo) {
    const resultado = [];

    for (const produto of produtos) {
        if (produto.quantidade < minimo) {
            resultado.push(produto);
        }
    }

    console.log(resultado);

    return resultado;
}
produtosAbaixoDoMinimo(produtos, 5);

// Q13
const contatos = [
    {
        nome: "João",
        telefone: "99999-1111",
        categoria: "Amigos"
    },
    {
        nome: "Maria",
        telefone: "98888-2222",
        categoria: "Família"
    }
];

function adicionarContato(nome, telefone, categoria) {
    contatos.push({
        nome: nome,
        telefone: telefone,
        categoria: categoria
    });

    console.log("Contato adicionado!");
}
adicionarContato("Carlos", "97777-3333", "Trabalho");

function removerContato(nome) {
    const indice = contatos.findIndex(contato => contato.nome === nome);

    if (indice !== -1) {
        contatos.splice(indice, 1);
        console.log("Contato removido!");
    } else {
        console.log("Contato não encontrado.");
    }
}

removerContato("João");

function listarCategoria(categoria) {
    const resultado = [];

    for (const contato of contatos) {
        if (contato.categoria === categoria) {
            resultado.push(contato);
        }
    }

    console.log(resultado);

    return resultado;
}

listarCategoria("Amigos");

// Q13 Valores Únicos
function valoresUnicos(numeros) {
    const resultado = [];

    for (const numero of numeros) {
        if (!resultado.includes(numero)) {
            resultado.push(numero);
        }
    }

    console.log(resultado);

    return resultado;
}

valoresUnicos([1, 2, 2, 3, 4, 4, 5, 5]);

// Q14
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco - (this.preco * percentual / 100);
    }

    estaDisponivel() {
        return this.quantidade > 0;
    }
}

const produto1 = new Produto("Notebook", 3000, 5);
const produto2 = new Produto("Mouse", 100, 0);
const produto3 = new Produto("Teclado", 200, 10);

produto1.aplicarDesconto(10);

console.log(produto1);
console.log(`Disponível: ${produto1.estaDisponivel()}`);

console.log(produto2);
console.log(`Disponível: ${produto2.estaDisponivel()}`);

produto3.aplicarDesconto(20);

console.log(produto3);
console.log(`Disponível: ${produto3.estaDisponivel()}`);

// Q15
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    extrato() {
        console.log(`
Titular: ${this.titular}
Saldo: R$ ${this.saldo.toFixed(2)}
        `);
    }
}

const conta1 = new ContaBancaria("João", 1000);
const conta2 = new ContaBancaria("Maria", 500);

conta1.depositar(200);
conta1.sacar(300);

conta2.depositar(100);
conta2.sacar(200);

conta1.extrato();
conta2.extrato();

// Q16
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

const retangulo = new Retangulo(10, 5);

console.log(`Área: ${retangulo.calcularArea()}`);
console.log(`Perímetro: ${retangulo.calcularPerimetro()}`);

// Q17 
class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionar(nome, telefone, categoria) {
        this.contatos.push({
            nome: nome,
            telefone: telefone,
            categoria: categoria
        });
    }

    remover(nome) {
        const indice = this.contatos.findIndex(
            contato => contato.nome === nome
        );

        if (indice !== -1) {
            this.contatos.splice(indice, 1);
        }
    }

    listarCategoria(categoria) {
        const resultado = [];

        for (const contato of this.contatos) {
            if (contato.categoria === categoria) {
                resultado.push(contato);
            }
        }

        return resultado;
    }
}

const agenda = new Agenda();

agenda.adicionar("João", "99999-1111", "Amigos");
agenda.adicionar("Maria", "98888-2222", "Família");
agenda.adicionar("Carlos", "97777-3333", "Trabalho");

console.log(agenda.contatos);

console.log(agenda.listarCategoria("Amigos"));

agenda.remover("João");

console.log(agenda.contatos);

//Na versão anterior, o array e as funções ficavam separados. Na versão com classe, o array de contatos fica dentro da própria Agenda, e as funções de adicionar, remover e listar ficam como métodos da classe.

