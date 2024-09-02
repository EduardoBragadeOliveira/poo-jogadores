import { Pessoa } from "./Pessoa";
import { IRelatorio } from "./IRelatorio";

export class Staff extends Pessoa implements IRelatorio<Date>{
    private _ocupacao: string;
    public _dataRelatorio: Date;

    constructor(nome: string, idade: number, cpf:number, nickname:string, ocupacao: string){
        super(nome, idade, cpf, nickname);
        this._ocupacao = ocupacao;
    }
    
    get ocupacao() : string {
        return this._ocupacao;
    }
    set ocupacao(ocupacao : string) {
        this._ocupacao = ocupacao;
    }
    public imprimirRelatorio(): void {
        console.log('Relatório do Staff');
        console.log(`Nome: ${this.nome}`);
        console.log(`idade: ${this.idade}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`NickName: ${this.nickname}`);
        console.log(`Ocupacao: ${this.ocupacao}`);
        this._dataRelatorio = new Date();
      }
}