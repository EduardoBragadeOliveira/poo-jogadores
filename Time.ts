import { Jogador } from "./Jogador";
import { Torneio } from "./Torneio";

export class Time {
    private _nome: string
    private _qtdTitulos: number
    private _tier: number
    private _jogadores: Jogador[]
    private _torneioParticipante: Torneio[]

    constructor(nome: string, qtdTitulos: number, tier: number, jogadores: Jogador[]) {
        this._nome = nome
        this._qtdTitulos = qtdTitulos
        this._tier = tier
        this._jogadores = jogadores
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

    adicionarJogador(jogador: Jogador) {
        this._jogadores.push(jogador)
    }

    removerJogador(jogador: Jogador) {
        let index = this._jogadores.indexOf(jogador);
        if (index >= 0) {
            this._jogadores.splice(index, 1);
        }
    }

    get torneiosParticipante(): Torneio[] {
        return this._torneioParticipante;
    }

    AdicionarTorneiosParticipante(torneioParticipante: Torneio) {
        this._torneioParticipante.push(torneioParticipante);
    }
    RemoverTorneiosParticipante(torneioParticipante: Torneio) {
        let index = this._torneioParticipante.indexOf(torneioParticipante);
        if (index >= 0) {
            this._torneioParticipante.splice(index, 1);
        }
    }

}