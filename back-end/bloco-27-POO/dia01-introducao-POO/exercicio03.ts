// Exercício 3
// Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão", "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.


class Cliente {
  private _nome: string = String();

  constructor(nome: string){
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string){
    if(value.length < 4){
      throw new Error('o nome deve conter no minimo 4 caracteres');
    }
    this._nome = value;
  }
}


class ItemPedido {
  private _nome: string = String();
  private _preco: number = Number();

  constructor(nome: string, preco: number){
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if(value.length < 4) {
      throw new Error('o nome deve conter no mínimo 4 caracteres');
    }
    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    if(value < 0) throw new Error('o preco deve ser positivo');
    this._preco = value;
  }
}



class Pedido{
  private _cliente: Cliente;
  private _itens: ItemPedido[] = [];
  private _formaPagto: string;
  private _desconto: number = 0;

  constructor(cliente: Cliente, itens: ItemPedido[], formaPagto: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._formaPagto = formaPagto;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): ItemPedido [] {
    return this._itens;
  }

  set itens(value: ItemPedido[]) {
    if(value.length === 0) {
      throw new Error('o pedido deve ter pelo menos um item.');
    }
  }

  get formaPagto(): string {
    return this._formaPagto;
  }

  set formaPagto(value: string) {
    this._formaPagto = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if(value < 0) {
      throw new Error('o desconto não pode ser valor negativo');
    }
    this._desconto = value;
  }

   totalCompra(): number {
     return this._itens.reduce((acc, item) => {
       const tot = acc += item.preco;
       return tot;
     }, 0);
   }

   totalComDesconto(): number {
     return this.totalCompra() *(1 - this.desconto);
   }
}

// class Data {
//   private _dia: number;
//   private _mes: number;
//   private _ano: number;

//   constructor(dia: number, mes: number, ano: number){
//     const dataValida = `${ano}-${mes}-${dia}`;
//     if(new Date(dataValida).getDate() !== dia){
//       dia= 1;
//       mes = 1;
//       ano= 1990;
//     }
//     this._dia= dia;
//     this._mes= mes;
//     this._ano= ano;
//   }
//   get dia(): number {
//     return this._dia
//   }
//   set dia(value: number){
//     this._dia = value;
//   }
//   get mes():number {
//     return this._mes;
//   }
//   set mes(value: number){
//     this._mes = value;
//   }
//   get ano(): number {
//     return this._ano;
//   }
//   set ano(value: number){
//     this._ano= value;
//   }
// }

// const testDate = new Data(29, 1, 1989);

// console.log(testDate);

// Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

const cliente = new Cliente('João');

const sandwiche = new ItemPedido('Sandwiche Natural', 5.00);
const juice = new ItemPedido('Suco de Abacaxí', 5.00);
const dessert = new ItemPedido('Gelatina de Uva', 2.50);

const order = new Pedido(cliente, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.totalCompra());
console.log('Valor com desconto: ', order.totalComDesconto());