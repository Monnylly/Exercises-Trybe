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

}