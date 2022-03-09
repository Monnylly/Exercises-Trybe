class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notaDeProva: number[];
  private _notaDeTrabalho: number[];

  constructor(matricula: string, nome: string){
    this._matricula= matricula;
    this._nome = nome;
    this._notaDeProva = [];
    this._notaDeTrabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string){
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error ('o nome tem que ter mais de 3 caracteres');
    }
    this._nome = value;
  }

  get notaDeProva(): number[] {
    return this._notaDeProva;
  }

  set notaDeProva(value: number[]) {
    if (value.length > 4) {
      throw new Error ('o aluno so pode ter até quatro notas de prova');
    };
    this._notaDeProva = value;
  }

  get notaDeTrabalho(): number[] {
    return this._notaDeTrabalho;
  }

  set notaDeTrabalho(value: number[]){
    if (value.length > 3){
      throw new Error ('o aluno so pode ter até tres notas de trabalho');
    }
    this._notaDeTrabalho = value;
  }
  // Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

  somaNotas(): number {
    return [...this.notaDeProva, ...this.notaDeTrabalho].reduce((acc, notas) => {
      notas += acc;

      return notas;
    }, 0);
  }
  mediaNotas(): number {
    const somaNotas = this.somaNotas();
    const divisor = this.notaDeProva.length + this._notaDeTrabalho.length;

    return Math.round(somaNotas / divisor);
  }


}

// const estudante1 = new Estudante('254586666', 'Juliana');
// console.log(estudante1);

// const estudante2 = new Estudante('1111252', 'Mariana');
// console.log(estudante2);