/**
 * Returns a random play option, "Rock" "Paper" "Scissors" "Lizard" "Spock"
 * @param isLizardSpockMode boolean value, true allows 'Lizard' and 'Spock' to be options returned 
 */
export default function getRandomRPSLS(isLizardSpockMode: boolean): string {
  const max = isLizardSpockMode ? 5 : 3;
  const min = 1;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  switch (random) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    case 4:
      return "Lizard";
    case 5:
      return "Spock";
    default:
      throw new Error("Computer picked impossible option...");
  }
};