import { Campeao } from "./Campeao";
import { Time } from "./Time";
import { Jogador } from "./jogador";
import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";
import { Torneio } from "./Torneio";
import { Organizadora } from "./Organizadora";

let rell = new Campeao('Rell', 'Jungle', 150);
let zyra = new Campeao('Zyra', 'Jungle', 170);
let tryndamere = new Campeao('Tryndamere', 'Top', 55);

let cariok = new Jogador('Cariok', 'Desafiante', 500, new Date("2014-01-01"), [], [rell, zyra]);

let pain  = new Time('Pain Gaming', 4, 1, [cariok]);

let xkflayz = new Jogador('xkflayz', 'Prata', 380, new Date("2020-01-01"), [pain], [tryndamere]);

console.log(xkflayz);
console.log(xkflayz.times);
console.log(pain);
console.log(cariok);