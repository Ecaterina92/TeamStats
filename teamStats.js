let team = {
    _players : [
        {firstName: 'John', lastName: 'Johnson', age: 20}, 
        {firstName: 'Holly', lastName: 'Mathews', age: 23},
        {firstName: 'Mike', lastName: 'Jackson', age: 76} 
    ],
    _games : [
        {opponent: 'Nick', teamPoints: 82, opponentPoints: 31},
        {opponent: 'Richard', teamPoints: 71, opponentPoints: 23},
        {opponent: 'Holly', teamPoints: 54, opponentPoints: 21}
    ],

    get _players () {
        return this._players;
    },

    get _games () {
        return this._games;
    },
    
    addPlayer (firstName, lastName, age)  {
    let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
};
this._players.push(player);
},
addGame (opponent, teamPoints, opponentPoints) {
    let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        oponnentPoints: opponentPoints
    };
    this._games.push(game);
},
}
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('The Mountain', 82, 23);
team.addGame('Best USA team', 67, 21);
team.addGame('The rock', 78, 45);

console.log(team);
