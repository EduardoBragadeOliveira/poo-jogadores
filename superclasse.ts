export class Pessoa{
   private _nome:string
    private _idade:number
    private _cpf:number
    private _nickname: string

    constructor(nome:string, idade:number, cpf:number, nickname:string){
        this._nome= nome
        this._idade= idade
        this._cpf= cpf
        this._nickname = nickname
    }       
    get nome() : string {
    return this.nome 
    }
    
    set nome(_nome : string) {
        this.nome = _nome;
    }
    get idade() : number{
        return this.idade
    }
    set idade(_idade : number){
        this.idade = _idade;
    }
    get cpf() : number{
        return this.cpf
    }
    set cpf(_cpf: number){
        this.cpf = _cpf
    }
    
     get nickname() : string {
        return this.nickname
    }
    
    public set nickname(_nickname : string) {
        this.nickname = _nickname;
    }
    
    
}

