// Nome	Sobrenome	Idade	PesoKG	Altura	Plano
// José	da Silva	27	83.5	1.70	Ouro
// Carlos	de Souza	28	80.1	1.76	Diamante
// Aline	Ferreira	33	63.7	1.53	Não Possui
// Ana	Paula	26	55.0	1.62	Prata

let pessoa = [
  { nome: "Diego", sobrenome: "Reis", idade: 35, peso: 76, altura: 1.71, plano: true },
  { nome: "José", sobrenome: "da Silva", idade: 27, peso: 83.5, altura: 1.70, plano: true },
  { nome: "Carlos", sobrenome: "de Souza", idade: 28, peso: 80.1, altura: 1.76, plano: true },
  { nome: "Aline", sobrenome: "Ferreira", idade: 33, peso: 83.5, altura: 1.53, plano: false },
  { nome: "Ana", sobrenome: "Paula", idade: 26, peso: 83.5, altura: 1.62, plano: true }
]

let i = 0

do { 
 console.log(`${pessoa[i].nome} tem ${pessoa[i].idade} anos e seu índice de massa corporal é de ${(pessoa[i].peso / (pessoa[i].altura ** 2)).toFixed(2)}`);
 i++
} while (i < pessoa.length);

// console.log(pessoa[2].altura ** 2)
