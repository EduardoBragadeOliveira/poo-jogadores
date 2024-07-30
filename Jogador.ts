
export class Jogador{
    private _nick : string
    private _elo:number
    private _nivel:number
    private _dataRegistro: Date
    private _times: Times[]
    private _campeoes: Campeao[]
     
     constructor(nick:string, elo:number, nivel:number, dataRegistro:Date, times:Times[], campeoes:Campeoes[]){  
        this._nick = nick;
        this._elo = elo;
        this._nivel = nivel;
        this._dataRegistro = dataRegistro
        this._times = times 
        this._campeoes = campeoes

    }
get nick(){
return this.nick;
}
set nick(nick: string){
   this.nick = nick;
}
get elo(){
    return this.elo;
}
set elo(elo:number){
     this.elo=elo;
}
get nivel(){
    return this.nivel;
}
set nivel(nivel:number){
     this._nivel=nivel;
}
get dataRegistro(){
    return this._dataRegistro;
}
set dataRegistro(elo:number){
     this._dataRegistro = dataRegistro;
}
get times(){
    return this._times.push;
}
adicionartime(times: Times){
    this._times.push(times);
}

removertime(times: Times){
    let index = this._times.indexOf(times);
    if(index >= 0){
        this._times.splice(index, 1);
    }        
}
get campeoes(){
    return this._campeoes.push;
}
adicionarcampeoes(campeoes: Campeoes){
    this._campeoes.push(campeoes);
}

removercampeoes(campeoes: Campeoes){
    let index = this._campeoes.indexOf(campeoes);
    if(index >= 0){
        this._campeoes.splice(index, 1);
    }        
}
}