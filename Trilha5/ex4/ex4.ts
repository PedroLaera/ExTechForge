/*Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

Crie duas subclasses: Election e Poll.
Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).*/

abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        } else {
            this.votes[candidate] = 1;
        }
        console.log(`Voto add ${candidate}.`);
    }
    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        } else {
            this.votes[candidate] = 1;
        }
        console.log(`Voto add ${candidate}.`);
    }

    getResults(): object {
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(entry => ({ candidate: entry[0], votes: entry[1] }));

        return sortedCandidates;
    }
}
const election = new Election();
election.voteFor("1");
election.voteFor("2");
election.voteFor("3");
console.log("Resultado:", election.getResults());

const poll = new Poll();
poll.voteFor("a");
poll.voteFor("b");
poll.voteFor("c");
poll.voteFor("d");
poll.voteFor("e");
console.log("Resultados:", poll.getResults());
