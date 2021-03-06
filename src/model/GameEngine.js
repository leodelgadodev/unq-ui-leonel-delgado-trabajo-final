import State from './GameState.json';

const GameEngine = {

    resetPlayers() {
        State.player1 = "";
        State.player2 = "";
    },

    resetElections() {
        State.election1 = "";
        State.election2 = "";
    },

    resetScore() {
        State.score1 = 0;
        State.score2 = 0;
    },

    setPlayers(play1, play2) {
        State.player1 = play1;
        State.player2 = play2;
    },

    saveChoice(player, election) {
        switch(player) {
            case 1: State.election1 = election; break;
            case 2: State.election2 = election; break;
        }
    },

    updateScoreFor(player) {
        switch(player) {
            case 1: State.score1 = State.score1 + 1; break;
            case 2: State.score2 = State.score2 + 1; break;
        }
    },

    getScore(player) {
        let res;
        switch(player) {
            case 1: res = State.score1; break;
            case 2: res = State.score2; break;
        }

        return res;
    },

    getPlayer(number) {
        let res;
        switch(number) {
            case 1: {
                res = State.player1;
            } break;
            case 2: {
                res = State.player2;
            }
        }
        return res;
    },

    computerPlay() {
        let election = randomInt(1, 5);
        switch(election) {
            case 1: {
                State.election2 = "Piedra";
            } break;
            case 2: {
                State.election2 = "Papel";
            } break;
            case 3: {   
                State.election2 = "Tijeras";
            } break;
            case 4: {
                State.election2 = "Lagarto";
            } break;
            case 5: {
                State.election2 = "Spock";
            }
        }
    },

    calculateEndgameAndReturnResultJSON(comparator1, comparator2) {
        let e1 = State.election1;
        let e2 = State.election2;
        
        if((e2 === comparator1) || (e2 === comparator2)) {
            return {winner: State.player1, choice: State.election1};
        } else if (e1 === e2) {
            return {winner: false}
        } else {
            return {winner: State.player2, choice: State.election2};
        }
    },

    calculateRound() {
        let res;
        let e1 = State.election1;

        switch(e1) {
            case "Piedra": {
                debugger; res = this.calculateEndgameAndReturnResultJSON("Tijeras", "Lagarto");
            } break;
            case "Papel": {
                res = this.calculateEndgameAndReturnResultJSON("Piedra", "Spock");
            } break;
            case "Tijeras": {
                res = this.calculateEndgameAndReturnResultJSON("Papel", "Lagarto");
            } break;
            case "Lagarto": {
                res = this.calculateEndgameAndReturnResultJSON("Papel", "Spock");
            } break;
            case "Spock": {
                res = this.calculateEndgameAndReturnResultJSON("Tijeras", "Piedra");
            } break;
        }

        return res;
    },

    configureMode(mode) {
        switch(mode) {
            case "player": {
                State.player1 = 'Jugador 1';
                State.player2 = 'Jugador 2';
            } break;
            case "computer": {
                State.player1 = 'Jugador';
                State.player2 = "Computador";
            }
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default GameEngine;