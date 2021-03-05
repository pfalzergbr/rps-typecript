export const computerChoice = (choices: Choice<ValidRules>[]): Choice<ValidRules> => {
  return choices[Math.floor(Math.random()* choices.length)]
}