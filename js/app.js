var app = angular.module("app", ['jtt_footballdata']);
app.controller('controller', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

    var apiKey = '2ac0452cdead4db09a842c3a4f279114';
    /*
    footballdataFactory.getPlayersByTeam({
        id: 3,
        apiKey: apiKey,
    }).then(function(_data){
        //console.info("getPlayersByTeam", _data);
        var players = _data.data.players;
        for (var i = players.length - 1; i >= 0; i--) {
            document.getElementById("id").innerHTML += "<p>"+players[i].name+": "+players[i].marketValue+ "</p>";
        }
    });*/

    // crea un array delle statistiche di squadra
    footballdataFactory.getLeagueTableBySeason({
        id: 426,//426=premier 438:serie a
        matchday: 38,
        apiKey: apiKey,
    }).then(function(_data){
        /*console.info("getLeagueTableBySeason", _data);*/
        var standing = _data.data.standing;
        $scope.teams = [{}];
        for (var i = 0; i < standing.length; i++) {
            if( i==0 ) {
                $scope.teams = [
                { 
                name: standing[i].teamName,
                logo: standing[i].crestURI, 
                points: standing[i].points,
                goals: standing[i].goals,
                goalsAgainst: standing[i].goalsAgainst
                }           
        ];
            } else {
                $scope.teams.push({ 
                    name: standing[i].teamName,
                    logo: standing[i].crestURI, 
                    points: standing[i].points,
                    goals: standing[i].goals,
                    goalsAgainst: standing[i].goalsAgainst 
                });
            }
        }
    });


    footballdataFactory.getLeagueTableBySeason({
        id: 438,//438:serie a
        matchday: 38,
        apiKey: apiKey,
    }).then(function(_data){
        /*console.info("getLeagueTableBySeason", _data);*/
        var standing = _data.data.standing;
        $scope.teamsIta = [{}];
        for (var i = 0; i < standing.length; i++) {
            if( i==0 ) {
                $scope.teamsIta = [
                { 
                name: standing[i].teamName,
                logo: standing[i].crestURI, 
                points: standing[i].points,
                goals: standing[i].goals,
                goalsAgainst: standing[i].goalsAgainst
                }           
        ];
            } else {
                $scope.teamsIta.push({ 
                    name: standing[i].teamName,
                    logo: standing[i].crestURI, 
                    points: standing[i].points,
                    goals: standing[i].goals,
                    goalsAgainst: standing[i].goalsAgainst 
                });
            }
        }
    });

footballdataFactory.getLeagueTableBySeason({
        id: 436,//438:liga
        matchday: 38,
        apiKey: apiKey,
    }).then(function(_data){
        /*console.info("getLeagueTableBySeason", _data);*/
        var standing = _data.data.standing;
        $scope.teamsEs = [{}];
        for (var i = 0; i < standing.length; i++) {
            if( i==0 ) {
                $scope.teamsEs = [
                { 
                name: standing[i].teamName,
                logo: standing[i].crestURI, 
                points: standing[i].points,
                goals: standing[i].goals,
                goalsAgainst: standing[i].goalsAgainst
                }           
        ];
            } else {
                $scope.teamsEs.push({ 
                    name: standing[i].teamName,
                    logo: standing[i].crestURI, 
                    points: standing[i].points,
                    goals: standing[i].goals,
                    goalsAgainst: standing[i].goalsAgainst 
                });
            }
        }
    });
    footballdataFactory.getLeagueTableBySeason({
        id: 434,//Bundesliga
        matchday: 38,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getLeagueTableBySeason", _data);
        var standing = _data.data.standing;
        $scope.teamsDe = [{}];
        for (var i = 0; i < standing.length; i++) {
            if( i==0 ) {
                $scope.teamsDe = [
                { 
                name: standing[i].teamName,
                logo: standing[i].crestURI, 
                points: standing[i].points,
                goals: standing[i].goals,
                goalsAgainst: standing[i].goalsAgainst
                }           
        ];
            } else {
                $scope.teamsDe.push({ 
                    name: standing[i].teamName,
                    logo: standing[i].crestURI, 
                    points: standing[i].points,
                    goals: standing[i].goals,
                    goalsAgainst: standing[i].goalsAgainst 
                });
            }
        }
    });
}]);
