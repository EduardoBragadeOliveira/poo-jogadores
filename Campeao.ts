export class Campeao {
    private _nome: string;
    private _posicao: string;
    private _nivelMaestria: number;

    constructor(nome: string, posicao: string, nivelMaestria: number) {
        this._nome = nome;
        this._posicao = posicao;
        this._nivelMaestria = nivelMaestria;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string){
        this._nome = nome;
    }

    get posicao(): string {
        return this._posicao;
    }
    set posicao(posicao: string){
        this._posicao = posicao;
    }

    get nivelMaestria(): number {
        return this._nivelMaestria;
    }

    set nivelMaestria(nivelMaestria: number){
        this._nivelMaestria = nivelMaestria;
    }
}