import { Torneio } from "./Torneio";

export class Organizadora {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    adicionarTorneio(torneio: Torneio) {
        this._torneio.push(torneio);
    }

    removerTorneio(torneio: Torneio) {
        let index = this._torneio.indexOf(torneio);
        if (index >= 0) {
            this._torneio.splice(index, 1);
        }
    }
}
