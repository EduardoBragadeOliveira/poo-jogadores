import { Time } from "./Time";

export class Torneio{
private _nome:string
private _premiacao: number
private _tier:number
private _dataComeco: Date
private _dataFim: Date
private _capacidadeMaximaDeTimes: number
private _times: Time[]

constructor(nome:string, premiacao: number, tier:number, dataComeco: Date, dataFim: Date, capacidadeMaximaDeTimes: number, times: Time[]){
    this._nome = nome;
    this._premiacao= premiacao
    this._tier= tier
    this._dataComeco= dataComeco
    this._dataFim = dataFim
    this._capacidadeMaximaDeTimes= capacidadeMaximaDeTimes
    this._times= times   
}
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get premiacao(): number {
        return this._premiacao;
    }

    set premiacao(premiacao: number) {
        this._premiacao = premiacao;
    }
    get tier(): number {
        return this._tier;
    }

    set tier(tier: number) {
        this._tier = tier;
    }

    get dataComeco(): Date {
        return this._dataComeco;
    }

    set dataComeco(dataComeco: Date) {
        this._dataComeco = dataComeco;
    }
    get dataFim(): Date {
        return this._dataFim;
    }

    set dataFim(dataFim: Date) {
        this._dataFim = dataFim;
    }
    get capacidadeMaximaDeTimes(): number {
        return this._capacidadeMaximaDeTimes;
    }

    set capacidadeMaximaDeTimes(capacidadeMaximaDeTimes: number) {
        this._capacidadeMaximaDeTimes = capacidadeMaximaDeTimes;
    }
    
    get times(): Time[]{
        return this._times;
    }

    adicionarTime(time:Time) {
        this._times.push(time);
    }

    removerTime(time: Time) {
        let index = this._times.indexOf(time);
        if (index >= 0) {
            this._times.splice(index, 1);
        }
}
}