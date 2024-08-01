export class Funcionario{
    private _nome:string
    private _cargo:string
    private _salario:number

    constructor(nome:string, cargo:string, salario:number){
        this._nome = nome
        this._cargo = cargo
        this._salario = salario
    }
    
    get nome(){
        return this._nome;
    }
    set nome(nome:string){
        this._nome = nome;
    }

    get cargo(){
        return this._cargo;
    }	
    set cargo(cargo:string){
        this._cargo = cargo;
    }

    get salario(){
        return this._salario;
    }
    set salario(salario:number){
        this._salario = salario;
    }

}