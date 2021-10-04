// Henrique Brumatti

function Aluno(paramNome, paramQtdFaltas, paramNotas) {
    this.nome = paramNome;
    this.qtdFaltas = paramQtdFaltas;
    this.notas = paramNotas;

    this.calcularMedia = function () {
        let totalNota = 0;

        for (let nota of this.notas) {
            totalNota += nota;
        }

        return totalNota / this.notas.length;
    }

    this.faltas = function () {
        this.qtdFaltas += 1;
    }
}


const aluno1 = new Aluno("Henrique", 1, [10, 8, 9]);
const aluno2 = new Aluno("Joao", 0, [9, 8, 10]);
const aluno3 = new Aluno("Marcos", 2, [10, 10, 9]);
const aluno4 = new Aluno("Everton", 1, [6, 4, 3]);
const aluno5 = new Aluno("Roberto", 3, [10, 6, 6]);

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

module.exports = alunos;