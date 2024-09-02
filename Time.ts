import { IRelatorioValidarTimeTorneio } from "./IRelatorioValidarTimeTorneio";
import { Jogador } from "./Jogador";
import { Torneio } from "./Torneio";

export class Time implements IRelatorioValidarTimeTorneio{
    private _nome: string
    private _qtdTitulos: number
    private _tier: number
    private _jogadores: Jogador[]
    private _torneiosParticipante: Torneio[]

    constructor(nome: string, qtdTitulos: number, tier: number, jogadores: Jogador[]) {
        this.validarNome(nome)
        this._nome = nome
        this._qtdTitulos = qtdTitulos
        this.validarTier(tier)
        this._tier = tier
        this._jogadores = jogadores
        this._torneiosParticipante = []
    }

    get nome(): string {
        return this._nome;
    }
    
    set nome(nome: string) {
        this._nome = nome;
    }

    get qtdTitulos(): number {
        return this._qtdTitulos;
    }

    set qtdTitulos(qtdTitulos: number) {
        this._qtdTitulos = qtdTitulos;
    }

    get tier(): number {
        return this._tier;
    }

    set tier(tier: number) {
        this._tier = tier;
    }

    get jogadores(): Jogador[] {
        return this._jogadores;
    }

    public adicionarJogador(jogador: Jogador) {
        this._jogadores.push(jogador)
    }

    public removerJogador(jogador: Jogador) {
        let index = this._jogadores.indexOf(jogador);
        if (index >= 0) {
            this._jogadores.splice(index, 1);
        }
    }

    get torneiosParticipante(): Torneio[] {
        return this._torneiosParticipante;
    }

    public AdicionarTorneiosParticipante(torneioParticipante: Torneio) {
        this._torneiosParticipante.push(torneioParticipante);
    }

    public RemoverTorneiosParticipante(torneioParticipante: Torneio) {
        let index = this._torneiosParticipante.indexOf(torneioParticipante);
        if (index >= 0) {
            this._torneiosParticipante.splice(index, 1);
        }
    }

    public validarTier(tier: number): void {
        if (tier < 0 && tier > 5) {
            throw new Error("Time: O tier do time deve estar entre 1 e 4.");
        }
    }

    public validarNome(nome: string): void {
        if (nome.length < 4) {
            throw new Error(`Time: O nome do time deve ser maior que 4 caracteres.`);
        }
    }

}