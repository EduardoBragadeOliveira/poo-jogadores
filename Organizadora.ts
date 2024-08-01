import { Torneio } from "./Torneio";

export class Organizadora {
    private _nome: string;
    public torneios: Torneio[];

    constructor(nome: string, torneios: Torneio[]) {
        this._nome = nome;
        this.torneios = torneios;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    adicionarTorneio(torneio: Torneio) {
        this.torneios.push(torneio);
    }

    removerTorneio(torneio: Torneio) {
        let index = this.torneios.indexOf(torneio);
        if (index >= 0) {
            this.torneios.splice(index, 1);
        }
    }
}
