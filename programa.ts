import { Campeao } from "./Campeao";
import { Time } from "./Time";
import { Jogador } from "./Jogador";
import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";
import { Torneio } from "./Torneio";
import { Organizadora } from "./Organizadora";

try { 
    let rell = new Campeao('Rell', 'Jungle', 150);
    let zyra = new Campeao('Zyra', 'Jungle', 170);
    let tryndamere = new Campeao('Tryndamere', 'Top', 55);
    let jhin = new Campeao('Jhin', 'ADC', 100);
    let yone = new Campeao('Yone', 'Mid', 200);

    let pain  = new Time('Pain Gaming', 4, 1, []);
    let keyd = new Time('Keyd', 3, 2, []);

    let cariok: Jogador = new Jogador('Jeff', 25, 101110, 'Cariok', 'Jungle', 'Desafiante', [rell, zyra]);
    let wizer: Jogador = new Jogador('Gabriel', 35, 215115,'Wizer', 'Top','Desafiante', [tryndamere]);
    let dynquedo: Jogador = new Jogador('Marcelo', 15, 111110,'Dynquedo', 'Mid','Desafiante', [yone]);
    let titan: Jogador = new Jogador('Eduardo', 16, 2424512,'Titan', 'Adc','Desafiante', [jhin]);
    let kuri: Jogador = new Jogador('Lucas', 34, 242345236,'Kuri', 'Suporte','Desafiante', [zyra]);
    let xkflayz: Jogador = new Jogador('Matheus', 19, 123123,'Xkflayz', 'Adc','Desafiante', [rell]);

    pain.adicionarJogador(cariok);
    pain.adicionarJogador(wizer);
    pain.adicionarJogador(dynquedo);
    pain.adicionarJogador(titan);
    pain.adicionarJogador(kuri);

    keyd.adicionarJogador(xkflayz);

    let msi = new Torneio('MSI', 1000, 1, new Date('2024-07-31'), new Date('2024-08-31'), 5, []);

    let gigabyte = new Organizadora('GigaByte', [msi]);

    let riot = new Empresa('Riot', [], new Date('2009-01-01'), '11.111.111/1111-11', [gigabyte]);

    riot.verTorneiosEmAndamento()
    console.log("Jogadores da Pain")
    console.log(pain.jogadores)
    console.log("Tentativa de inscrição no torneio")
    riot.inscricaoTorneio(pain, msi);
    console.log("Jogadores da Keyd")
    console.log(keyd.jogadores)
    console.log("Tentativa de inscrição no torneio")
    riot.inscricaoTorneio(keyd, msi);

}
catch (erro: any) {
    console.log(erro.message);
}