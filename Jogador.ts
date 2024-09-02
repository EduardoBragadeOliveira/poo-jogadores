import { Pessoa } from "./Pessoa";
import { Campeao } from "./Campeao";
import { IRelatorio } from "./IRelatorio";

export class Jogador extends Pessoa implements IRelatorio<Date>{
    private _posicao: string;
    private _elo: string;
    private _campeoes: Campeao[];
    public _dataRelatorio: Date;
    
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

    public imprimirRelatorio(): void {
        console.log('Relatório do Jogador');
        console.log(`Nome: ${this.nome}`);
        console.log(`idade: ${this.idade}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`NickName: ${this.nickname}`);
        console.log(`Posição: ${this.posicao}`);
        console.log(`Elo: ${this.elo}`);
        console.log(`Campeões: ${this.campeoes}`);
        this._dataRelatorio = new Date();
      }
    
}