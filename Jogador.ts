import { Campeao } from "./Campeao";
import { Time } from "./Time";

export class Jogador{
    private _nick: string
    private _elo: string
    private _nivel: number
    private _dataRegistro: Date
    private _times: Time[]
    private _campeoes: Campeao[]

    constructor(nick: string, elo: string, nivel: number, dataRegistro: Date, times: Time[], campeoes: Campeao[]) {
        this._nick = nick;
        this._elo = elo;
        this._nivel = nivel;
        this._dataRegistro = dataRegistro
        this._times = times
        this._campeoes = campeoes
    }

    get nick(): string {
        return this.nick;
    }

    set nick(nick: string) {
        this._nick = nick;
    }

    get elo(): string {
        return this._elo;
    }

    set elo(elo: string) {
        this._elo = elo;
    }
    
    get nivel(): number {
        return this.nivel;
    }
    
    set nivel(nivel: number) {
        this._nivel = nivel;
    }

    get dataRegistro(): Date {
        return this._dataRegistro;
    }

    set dataRegistro(dataRegistro: Date) {
        this._dataRegistro = dataRegistro;
    }

    get times(): Time[] {
        return this._times;
    }

    adicionarTime(time: Time) {
        this._times.push(time);
    }

    removerTime(time: Time) {
        let index = this._times.indexOf(time);
        if (index >= 0) {
            this._times.splice(index, 1);
        }
    }

    get campeoes(): Campeao[] {
        return this._campeoes;
    }

    adicionarCampeoes(campeao: Campeao) {
        this._campeoes.push(campeao);
    }

    removerCampeoes(campeao: Campeao) {
        let index = this._campeoes.indexOf(campeao);
        if (index >= 0) {
            this._campeoes.splice(index, 1);
        }
    }
}