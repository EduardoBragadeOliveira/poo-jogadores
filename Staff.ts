import { Pessoa } from "./Pessoa";

export class Staff extends Pessoa{
    private _ocupacao: string;
    
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

}