import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastroCompleto';
  nome = null; // model de nome
  idade = null; // model de idade 
  pessoas = [ // array de pessoas que guarda o nome e idade

  ];

  totalPessoas = null; // contador que será utilizado no momento em que se cadastra uma nova pessoa
  maisVelho = null;
  maisNovo = null;

cadastrar(){ // função de cadastro
  this.pessoas.push({nome:this.nome, idade:this.idade}); // função para puxar o nome e a idade da pessoa cadastrada pro array
  this.nome = null; // variável de nome
  this.idade = null; // variável de idade 
  this.totalPessoas +=1; // contador que armazena na variável totalPessoas +1 a cada pessoa que é cadastrada
  this.idades(); // chamada da função idades que atualiza a pessoa mais velha ou mais nova que é cadastrada segundo o parâmetro
}

excluir (id){ // função de exclusão
this.pessoas.splice(this.pessoas.indexOf(id),1); // função splice que apaga o registro da pessoa segundo o index informado e a quantidade
this.totalPessoas -=1; // decrementa o contador a cada pessoa que é excluída
this.idades(); // chamada da função idades que atualiza a pessoa mais velha ou mais nova que é cadastrada segundo o parâmetro
}

idades (){  // função de atualização da idade mais nova e mais velha

    var idades = this.pessoas.map(({idade}) => idade); // usando a função map para buscar a idade para colocar nova varíavel para fazer as comparações
    var velho = Math.max(...idades); // usa-se a função max da biblioteca MATH para comparar se a idade é a maior
    var novo = Math.min(...idades); // usa-se a função max da biblioteca MATH para comparar se a idade é a menor
 
    this.maisVelho = this.pessoas.find(({idade})=> idade ==  velho); // substitui na varíavel maisVelho se aquela idade segundo a função atribuida a variável velho for verdade
    this.maisNovo = this.pessoas.find(({idade})=> idade ==  novo); // substitui na varíavel maisNovo se aquela idade segundo a função atribuida a variável novo for verdade
}
}
