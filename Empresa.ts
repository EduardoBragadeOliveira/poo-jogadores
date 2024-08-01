import { Funcionario } from "./Funcionario";
import { Torneio } from "./Torneio";
import { Time } from "./Time";

export class Empresa{
    private _nome: string
    private _funcionarios: Funcionario[]
    private _dataFundacao: Date
    private _cnpj: string
    private _torneiosEmAndamento: Torneio[]

    constructor(nome: string, funcionarios: Funcionario[], dataFundacao: Date, cnpj: string, torneiosEmAndamento: Torneio[]) {
        this._nome = nome;
        this._funcionarios = funcionarios;
        this._dataFundacao = dataFundacao;
        this._cnpj = cnpj
        this._torneiosEmAndamento = torneiosEmAndamento
    }

    get nome(): string {
        return this.nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get funcionarios(): Funcionario[] {
        return this._funcionarios;
    }

    adicionarFuncionario(funcionario: Funcionario) {
        this._funcionarios.push(funcionario);
    }

    removerFuncionario(funcionario: Funcionario) {
        let index = this._funcionarios.indexOf(funcionario);
        if (index >= 0) {
            this._funcionarios.splice(index, 1);
        }
    }
    
    get dataFundacao(): Date {
        return this.dataFundacao;
    }
    
    set dataFundacao(dataFundacao: Date) {
        this._dataFundacao = dataFundacao;
    }

    get cnpj(): string {
        return this._cnpj;
    }

    set cnpj(cnpj: string) {
        this._cnpj = cnpj;
    }

    verTorneiosEmAndamento(time: Time): void {
        this._torneiosEmAndamento.forEach((item) => {
            if(time.tier == item.tier){
                console.log(item);
            }
        })
    }

    inscricaoTorneio(time: Time, torneio: Torneio): void{
        if(torneio.capacidadeMaximaDeTimes < torneio.times.length){
            if(time.jogadores.length >= 5){
                if(time.tier == torneio.tier){
                    torneio.times.push(time);
                    console.log("Inscrição efetuada com sucesso!");
                }
            }
        }
    }
}