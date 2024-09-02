import { Pessoa } from "./Pessoa";
import { Campeao } from "./Campeao";

export class Jogador extends Pessoa{
    private _posicao: string;
    private _elo: string;
    private _campeoes: Campeao[];
    
    constructor(nome: string, idade: number, cpf:number, nickname:string, posicao: string, elo: string, campeoes: Campeao[]){
        super(nome, idade, cpf, nickname);
        this._posicao = posicao;
        this._elo = elo;
        this._campeoes = campeoes;
    }
    
    get posicao() : string {
        return this._posicao;
    }
    set posicao(posicao : string) {
        this._posicao = posicao;
    }

    get elo() : string {
        return this._elo;
    }
    set elo(elo : string) {    
        this._elo = elo;
    }

    get campeoes() : Campeao[] {
        return this._campeoes;
    }
    set campeoes(campeoes : Campeao[]) {
        this._campeoes = campeoes;
    }
    
}