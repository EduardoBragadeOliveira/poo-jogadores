import { Funcionario } from "./Funcionario";
import { Torneio } from "./Torneio";
import { Time } from "./Time";
import { Organizadora } from "./Organizadora";

export class Empresa{
    private _nome: string
    private _funcionarios: Funcionario[]
    private _dataFundacao: Date
    private _cnpj: string
    private _organizadorasParceiras: Organizadora[]

    constructor(nome: string, funcionarios: Funcionario[], dataFundacao: Date, cnpj: string, organizadorasParceiras: Organizadora[]) {
        this._nome = nome;
        this._funcionarios = funcionarios;
        this._dataFundacao = dataFundacao;
        this._cnpj = cnpj
        this._organizadorasParceiras = organizadorasParceiras
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

    verTorneiosEmAndamento(): void {
        this._organizadorasParceiras.forEach((organizadoraItem) => {
            console.log(`Organizadora ${organizadoraItem.nome}`)
            organizadoraItem.torneios.forEach((torneioItem) => {
                console.log(`Torneio ${torneioItem.nome}`)
                console.log(`Tier ${torneioItem.tier}`)
            })
        })
    }

    inscricaoTorneio(time: Time, torneio: Torneio): void{
        if(torneio.times.indexOf(time) < 0){
            if(torneio.capacidadeMaximaDeTimes > torneio.times.length){
                if(time.jogadores.length >= 5){
                    if(time.tier == torneio.tier){
                        torneio.times.push(time);
                        time.AdicionarTorneiosParticipante(torneio);
                        console.log("Inscrição efetuada com sucesso!") 
                    } else {
                        console.log("O tier do seu time está diferente do campeonato");
                    }
                } else {
                    console.log("A quantidade de jogadores é inválida");
                }
            } else {
                console.log("A capacidade de times excedeu");
            }
        } else{
            console.log("Seu time já está cadastrado no torneio");
        }
    }

    get organizadoras(): Organizadora[] {
        return this._organizadorasParceiras;
    }

    adicionarOrganizadora(organizadora: Organizadora): void {
        this._organizadorasParceiras.push(organizadora);
    }

    removerOrganizadora(organizadora: Organizadora): void {
        let index = this._organizadorasParceiras.indexOf(organizadora);
        if (index >= 0) {
            this._organizadorasParceiras.splice(index, 1);
        }
    }
}