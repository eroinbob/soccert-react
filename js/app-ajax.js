var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.football-data.org/v1/soccerseasons/426/leagueTable",
  "method": "GET",
  "headers": {
    "X-Auth-Token": "2ac0452cdead4db09a842c3a4f279114",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);

  var teams = [];
  var person = [];
 	for (var i = response.standing.length - 1; i >= 0; i--) {
 		teams.push(response.standing[i].teamName);
 	}

 	for (var i = teams.length - 1; i >= 0; i--) {
 		console.log(teams[i]);
 	}
   
});



