import { Campeao } from "./Campeao";
import { Time } from "./Time";
import { Jogador } from "./Jogador";
import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";
import { Torneio } from "./Torneio";
import { Organizadora } from "./Organizadora";

let rell = new Campeao('Rell', 'Jungle', 150);
let zyra = new Campeao('Zyra', 'Jungle', 170);
let tryndamere = new Campeao('Tryndamere', 'Top', 55);
let jhin = new Campeao('Jhin', 'ADC', 100);
let yone = new Campeao('Yone', 'Mid', 200);

let pain  = new Time('Pain Gaming', 4, 1, []);
let keyd = new Time('Keyd', 3, 2, []);

let cariok = new Jogador('Cariok', 'Desafiante', 500, new Date("2014-01-01"), pain, [rell, zyra]);
let wizer = new Jogador('Wizer', 'Desafiante', 350, new Date("2014-01-02"), pain, [tryndamere]);
let dynquedo = new Jogador('Dynquedo', 'Desafiante', 400, new Date("2014-01-03"), pain, [yone]);
let titan = new Jogador('Titan', 'Desafiante', 450, new Date("2014-01-04"), pain, [jhin]);
let kuri = new Jogador('Kuri', 'Desafiante', 450, new Date("2014-01-05"), pain, [zyra]);
let xkflayz = new Jogador('Xkflayz', 'Desafiante', 450, new Date("2014-01-06"), keyd, [rell]);

pain.adicionarJogador(cariok);
pain.adicionarJogador(wizer);
pain.adicionarJogador(dynquedo);
pain.adicionarJogador(titan);
pain.adicionarJogador(kuri);

keyd.adicionarJogador(xkflayz);


let msi = new Torneio('MSI', 1000, 1, new Date('2024-07-31'), new Date('2024-08-31'), 5, []);

let gigabyte = new Organizadora('GigaByte', [msi]);

let riot = new Empresa('Riot', [], new Date('2009-01-01'), '11.111.111/1111-11', [gigabyte]);

riot.inscricaoTorneio(pain, msi);
riot.verTorneiosEmAndamento()



// console.log(xkflayz);
// console.log(xkflayz.times);
// console.log(pain);
// console.log(cariok);