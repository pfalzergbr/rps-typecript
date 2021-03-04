export const computerChoice = (choices: ValidRules[]): ValidRules => {
  return choices[Math.floor(Math.random()* choices.length)]
}