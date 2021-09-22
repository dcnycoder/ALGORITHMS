team1 = [1,2,3,4,5]
team2 = [0,1,2,10000,3]

function compareTeams(team1, team2) {
  team1 = team1.sort((a,b) => a-b)
  team2 = team2.sort((a,b) => a-b)

  console.log("team1, team2: ", team1, team2)
  const tallerTeam = (team1[0]>team2[0])? team1 : team2
  const shorterTeam = (tallerTeam === team1)? team2 : team1
  for (let i=0; i<tallerTeam.length; i++) {
    if (tallerTeam[i]<shorterTeam[i]) return false
  }
  return true
}

console.log(compareTeams(team1, team2))
