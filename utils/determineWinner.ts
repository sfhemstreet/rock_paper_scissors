/**
 * Returns "Tie", "User" or "Opponent" given strings for user option and opponent option.
 * @param user play option, "Rock" "Paper" "Scissors" "Lizard" or "Spock"
 * @param opponent play option, "Rock" "Paper" "Scissors" "Lizard" or "Spock"
 */
export default function determineWinner(user: string, opponent: string): string {
  if(user !== "Rock" && user !== "Paper" && user !== "Scissors" && user !==  "Lizard" && user !== "Spock"){
    throw new Error("Invalid string for user, must be 'Rock' 'Paper' 'Scissors' 'Lizard' or 'Spock'");
  }
  if(opponent !== "Rock" && opponent !== "Paper" && opponent !== "Scissors" && opponent !==  "Lizard" && opponent !== "Spock"){
    throw new Error("Invalid string for opponent, must be 'Rock' 'Paper' 'Scissors' 'Lizard' or 'Spock'");
  }

  if(user === opponent){
    return "Tie";
  }
  if(user === "Rock" && (opponent === "Scissors" || opponent === "Lizard")){
    return "User";
  }
  if(user === "Paper" && (opponent === "Rock" || opponent ==="Spock")){
    return "User";
  }
  if(user === "Scissors" && (opponent === "Paper" || opponent === "Lizard")){
    return "User";
  }
  if(user === "Lizard" && (opponent === "Paper" || opponent === "Spock")){
    return "User";
  }
  if(user === "Spock" && (opponent === "Scissors" || opponent === "Rock")){
    return "User";
  }
  else {
    return "Opponent";
  }
}