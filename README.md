# bdv-node-input

Script to synchronously and recursively fetch user input with nodejs.

## Quick usage

1. Clone this repository
2. Run the following snippet in a new file:
```javascript
    const BdvNodeInput = require('./BdvNodeInput')
    const ask = new BdvNodeInput(["What's your name", "What's you car", "What's your address"])
    const answers = await ask.startAsking()
    console.log(answers) // Will return [user_answer_1, user_answer_2, user_answer_3]
```