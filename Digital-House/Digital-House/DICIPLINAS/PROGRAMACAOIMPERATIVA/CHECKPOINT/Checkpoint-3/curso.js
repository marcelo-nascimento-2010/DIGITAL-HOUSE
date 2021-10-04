const alunos = require('./aluno')

function Curso(paramNomeCurso, paramNotaAprovacao, paramFaltasMaximas, paramListaEstudantes) {
    this.nomeCurso = paramNomeCurso;
    this.notaAprovacao = paramNotaAprovacao;
    this.faltasMaximas = paramFaltasMaximas;
    this.listaEstudantes = paramListaEstudantes;

    this.adicionaAluno = function (nome, qtdfaltas, notas) {
        this.listaEstudantes.push({ nome, qtdfaltas, notas })
    }

    this.calculaAprovacao = function (aluno) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.qtdfaltas < this.faltasMaximas) {
            return true;
        } else if (aluno.calcularMedia() >= this.notaAprovacao && aluno.qtdfaltas == this.faltasMaximas) {
            if (aluno.calcularMedia() >= (this.notaAprovacao * 1.1)) {
                return true;
            } else return false;
        }
        else return false;

    }
}

matematica = new Curso("Matemática", 6, 3, alunos);