export const computerChoice = (choices: ValidRules[]) => {
  return choices[Math.floor(Math.random()* choices.length)]
}