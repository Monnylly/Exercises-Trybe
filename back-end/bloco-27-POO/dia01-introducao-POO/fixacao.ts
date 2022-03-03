class tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }
  turnOn():void {
    console.log(`Tv ${this._brand}, ${this._size}, resolurion: ${this._resolution}navailable connections: ${this._connections}`);
  }
  get connectedTo(): string {
    return this._connectedTo;
  }
  set connectedTo(value: string) {
    if(this._connectedTo.includes(value)){
      this._connectedTo = value;
      console.log(this._connectedTo);
    }else {
      console.log('Sorry, connection unavailable');
    }
  }
}
const tv01 = new tv('LG', 32, '4k', ['HDMI', 'Ethernet', 'Wifi']);
tv01.turnOn();
tv01.connectedTo = 'Wi-fi';
console.log('connected to: ', tv01.connectedTo);
