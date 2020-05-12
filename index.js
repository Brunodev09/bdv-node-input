class BdvNodeInput {
    constructor(questionList) {
        this._rl = null;
        this.questions = questionList || ["y no question?"];
        this.answerList = [];
    }

    flush(questionList) {
        this.questions = questionList || ["y no question?"];
        this.answerList = [];
        return this;
    }

    question(msg, index) {
        return new Promise((resolve, reject) => {
            console.log(msg + ":");
            msg = "";
            this._rl.question(msg, (answer) => {
                this.answerList.push(answer);
                if (!this.questions[index + 1]) {
                    this._rl.close();
                    return resolve(this.answerList);
                }
                index++;
                resolve(this.question(this.questions[index], index));
            })
        });
    }

    startAsking() {
        return new Promise((resolve, reject) => {
            this._rl = require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            });
            resolve(this.question(this.questions[0], 0));
        })
    }
}
module.exports = BdvNodeInput;
