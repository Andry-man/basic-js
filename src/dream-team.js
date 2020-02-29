module.exports = function createDreamTeam(name) {
let answer = [];
let answerString = '';
for (let i = 0; i< name.length; i++) {
let number = name[i];
answer.push(number[0])
answerString+=answer[i]
}
answer.sort()
return answerString;
};