class Student {
  private _matricula: string;
  private _name: string = String();
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(matricula: string, name: string){
    this._matricula = matricula;
    this._name = name;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
}

  set matricula(value: string) {
    this._matricula = value;
}
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
        throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }
  get notasProvas(): number[] {
    return this._notasProvas;
}

  set notasProvas(value: number[]) {
      if (value.length > 4) {
          throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }

      this._notasProvas = value;
  }
    get notasTrabalhos(): number[] {
      return this._notasTrabalhos;
  }

    set notasTrabalhos(value: number[]) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }

        this._notasTrabalhos = value;
    }


};