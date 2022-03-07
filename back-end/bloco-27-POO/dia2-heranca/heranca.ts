// Crie uma classe chamada Superclass .
class SuperClass {
  // A Superclass deve possuir um atributo público isSuper
  public isSuper: boolean;

  constructor() {
    // isSuper deve ser setado como true na inicialização.
    this.isSuper = true;
  }

  // // A Superclass deve possuir um método público chamado sayHello , que deve imprimir um "Olá mundo!".
  public sayHello(): void {
    console.log('Olá mundo');
  }

}
// Crie uma classe chamada Subclass que herda da Superclass .

class SubClass extends SuperClass{
  // public sayHello2(): void {
  //   this.sayHello();
  // }

  constructor(){
    super();
    this.isSuper= false;
  }

}

// Crie uma função fora do escopo da Subclass que recebe um objeto da Superclass .
// const funcRecebe = (object: SuperClass) => {
//   // Dentro da função, chame o método sayHello do objeto passado como parâmetro.
//   object.sayHello();
// }

// const funcRecebe = (object: SubClass) => {
//   // Dentro da função, chame o método sayHello do objeto passado como parâmetro.
//   object.sayHello2();
// }

const funcRecebe = (object: SuperClass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub');
}

// Crie um objeto da Superclass e outro da Subclass .

const sup = new SuperClass();
const sub = new SubClass();


// Chame a função 2 vezes, passando os objetos criados.

funcRecebe(sup);
funcRecebe(sub);

// Com base no exemplo do exercício anterior:
// Comente a chamada da função passando o objeto da Superclass .
// Faça a função receber não mais um objeto da Superclass , mas sim da Subclass .
// Crie, na Subclass , um método público chamado sayHello2 .
// Chame o método sayHello dentro do método sayHello2 .
// Mude a visibilidade do método sayHello de public para protected .
// Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2 .
// Mude a visibilidade do método sayHello de protected para private . O que acontece?
// Desfaça estas alterações (ou seja, volte para como era ao final do primeiro exercício) antes de fazer o próximo exercício.


