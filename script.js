// Exercício 1

// let primeiroNumero = parseInt(prompt("Digite o primeiro número:"));
// let segundoNumero = parseInt(prompt("Digite o segundo número:"));

// if (primeiroNumero > segundoNumero) {
//     alert(`O maior número é ${primeiroNumero} e a diferença é ${primeiroNumero-segundoNumero}`);
// } else {
//     alert(`O maior número é ${segundoNumero} e a diferença é ${segundoNumero-primeiroNumero}`);
// }

// #########################################################

// Exercício 2

// let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
// let segundoNumero = parseFloat(prompt("Digite o segundo número:"));

// if (primeiroNumero > segundoNumero) {
//     alert(`O número ${primeiroNumero} é maior que o número ${segundoNumero}`);    
// } else if (segundoNumero > primeiroNumero) {
//     alert(`O número ${segundoNumero} é maior que o número ${primeiroNumero}`);
// } else {
//     alert(`Números Iguais!`);
// }

// #########################################################

// Exercício 3

// let salarioTrabalhador = parseFloat(prompt("Informe o seu salário:"));
// let prestacao = parseFloat(prompt("Infome o valor da prestação:"));

// let limitePermitido = (salarioTrabalhador * 0.3);

// if (prestacao > limitePermitido) {
//     alert (`Empréstimo não concedido`);
// } else {
//     alert(`Empréstimo concedido`);
// }

// #########################################################

// Exercício 4

// let numeroVerificacao = parseInt(prompt("Digite qualquer número para validação:"));

// let resultado1 = numeroVerificacao%3;
// let resultado2 = numeroVerificacao%5;
// let verificacao = numeroVerificacao%2;

// if (resultado1 == 0 && resultado2 == 0) {
//     alert(`Valor inválido`);
// } else if (resultado1 == 0) {
//     alert(`Valor divisivel por 3`);
// } else if (resultado2 == 0) {
//     alert(`Valor divisivel por 5`);
// }

// if (resultado1 != 0 && resultado2 != 0 && verificacao == 0) {
//     alert(`É par`);
// } else if (resultado1 != 0 && resultado2 != 0 && verificacao != 0) {
//     alert(`É impar`);
// }

// #########################################################

// Exercício 5

// let diaDaSemana = parseInt(prompt("Informe de 1 a 7 o dia da semana desejado:"));

// const semana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

// if (diaDaSemana > 7) {
//     alert(`Valor informado fora dos parâmetros`);
// } else {
//     alert(semana[(diaDaSemana-1)]);
// }

// #########################################################

// Exercício 6

// let salarioMensal = parseFloat(prompt("Informe o salário do funcionário:"));
// let percentualDeReajuste = parseFloat(prompt("Informe o percentual de reajuste concedido: (%)"));
// let novoSalario = salarioMensal * ((percentualDeReajuste/100)+1);

// if (percentualDeReajuste <= 5) {
//     alert(`O salário do funcionário corrigido é de: ${novoSalario}`);
// }

// no exercício não foi solicitado nenhum alerta caso o percentual de reajuste fosse maior que 5%.

// #########################################################

// Exercício 7

// let valorDolar = parseFloat(prompt("Digite o Valor em dolar ($):"));
// let cotacaoAtual = parseFloat(prompt("Digite a Cotação atual do dolar (R$):"));

// valorDolar = valorDolar.toFixed(2);
// cotacaoAtual = cotacaoAtual.toFixed(2);

// let conversao = (valorDolar * cotacaoAtual);
// conversao = conversao.toFixed(2);

// alert(`\$${valorDolar.toString().replace(".",",")} é equivalente a R\$${conversao.toString().replace(".",",")} tendo ${cotacaoAtual.toString().replace(".",",")} como cotação.`);

// #########################################################

// Exercício 8

// let areaPuverizada = parseInt(prompt("Informe a área desejada: (acres)"));
// let tipoPuverizacao = parseInt(prompt("Esocolha o tipo de puverização: [1 - Ervas Daninhas], [2 - Gafanhotos], [3 - Broca] ou [4 - Todas opções juntas]"));

// let tipo1 = 50;
// let tipo2 = 100;
// let tipo3 = 150;
// let tipo4 = 250;

// let valorPuverizacao;

// if (areaPuverizada > 1000) {
//     if (tipoPuverizacao == 1) {
//         valorPuverizacao = (tipo1 * areaPuverizada)*0.95; 
//     }
//     if (tipoPuverizacao == 2) {
//         valorPuverizacao = (tipo2 * areaPuverizada)*0.95;
//     }
//     if (tipoPuverizacao == 3) {
//         valorPuverizacao = (tipo3 * areaPuverizada)*0.95;
//     }
//     if (tipoPuverizacao == 4) {
//         valorPuverizacao = (tipo4 * areaPuverizada)*0.95;
//     }
// } else {
//     if (tipoPuverizacao == 1) {
//         valorPuverizacao = (tipo1 * areaPuverizada);
//     }
//     if (tipoPuverizacao == 2) {
//         valorPuverizacao = (tipo2 * areaPuverizada);
//     }
//     if (tipoPuverizacao == 3) {
//         valorPuverizacao = (tipo3 * areaPuverizada);
//     }
//     if (tipoPuverizacao == 4) {
//         valorPuverizacao = (tipo4 * areaPuverizada);
//     }
// }

// if (valorPuverizacao > 750) {
//         let valorUltrapassado = (valorPuverizacao - 750);
//         valorUltrapassado = (valorUltrapassado * 0.9);
//         valorPuverizacao = (valorUltrapassado+750); 
// }

// valorPuverizacao = valorPuverizacao.toFixed(2);

// alert(`O valor ser pago é de: R$ ${valorPuverizacao.toString().replace(".", ",")}`);

// #########################################################

// Exercício 9

// let tempo = parseFloat(prompt("Informe o tempo gasto na viagem: (h)"));
// let velocidade = parseInt(prompt("Qual foi sua velocidade durante a viagem? (km/h)"));

// let consumo = 12;
// let distancia = (tempo * velocidade);

// let litrosUsados = (distancia / consumo).toFixed(2);

// alert(`Seu veículo percorreu ${distancia}km a ${velocidade}km/h em ${tempo}h de viagem e consumiu ${litrosUsados}l de gasolina`);

// #########################################################

// Exercício 10

// let valor = parseFloat(prompt("Digite o valor da prestação:"));
// let taxa = parseFloat(prompt("Informe a taxa de juros:"));
// let tempo = parseFloat(prompt("Qual o tempo de atraso dessa prestação:"));

// let prestacao = valor + (valor * (taxa / 100) * tempo);

// if ((tempo % 1) === 0) {
//      alert(`Prestação = R$${prestacao.toString().replace(".", ",")}`);
//  } else {
//      alert(`Valor inválido o tempo de atraso deve ser em dias.`)
//  }








