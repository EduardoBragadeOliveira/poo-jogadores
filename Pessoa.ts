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
    
    set nome(nome : string) {
        this.nome = nome;
    }
    get idade() : number{
        return this.idade
    }
    set idade(idade : number){
        this.idade = idade;
    }
    get cpf() : number{
        return this.cpf
    }
    set cpf(cpf: number){
        this.cpf = cpf
    }
    
     get nickname() : string {
        return this.nickname
    }
    
    public set nickname(nickname : string) {
        this.nickname = nickname;
    }
    
    
}

