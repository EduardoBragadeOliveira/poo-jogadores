export class Funcionario{
    private _nome:string
    private _cargo:string
    private _salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.validarNome(nome)
        this._nome = nome
        this._cargo = cargo
        this.validarSalario(salario);
        this._salario = salario
    }
    
    get nome(){
        return this._nome;
    }
    set nome(nome:string){
        this.validarNome(nome);
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
        this.validarSalario(salario);
        this._salario = salario;
    }

    private validarNome(nome: string): void {
        if (nome.length < 3) {
            throw new Error("Funcionario: O nome precisa ter pelo menos 3 caracteres.");
        }
    }

    private validarSalario(salario: number): void {
        if (salario < 0) {
            throw new Error("Funcionario: O salario deve ser maior que R$ 0.");
        }
    }
}