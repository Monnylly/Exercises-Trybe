class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number){
    const dataValida = `${ano}-${mes}-${dia}`;
    if(new Date(dataValida).getDate() !== dia){
      dia= 1;
      mes = 1;
      ano= 1990;
    }
    this._dia= dia;
    this._mes= mes;
    this._ano= ano;
  }
  get dia(): number {
    return this._dia
  }
  set dia(value: number){
    this._dia = value;
  }
  get mes():number {
    return this._mes;
  }
  set mes(value: number){
    this._mes = value;
  }
  get ano(): number {
    return this._ano;
  }
  set ano(value: number){
    this._ano= value;
  }

  getNameMonth():string {
    const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return meses[this.mes -1];
  }

  anoBissexto():boolean {
    return this._ano %4 ===0;
  }

  compare(date: Data): number {
    const dataCorrente = `${this.ano}-${this.mes}-${this.dia}`;

    const dataStr = `${date.ano}-${date.mes}-${date.dia}`;

    if(new Date(dataCorrente) > new Date(dataStr)) return 1;
    if(new Date(dataCorrente) < new Date(dataStr)) return -1;

    return 0;
  }
}


const testDate = new Data(29, 5, 2020);

console.log('mês por extenso: ', testDate.getNameMonth());
console.log('é ano bissexto: ', testDate.anoBissexto() ? 'sim' : 'nao');

console.log(testDate);

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);