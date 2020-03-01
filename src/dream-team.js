module.exports = function createDreamTeam(name) {
    let answer = [];
    let answerString = [];
    let finAnswer = [];
    let ann = [];
    let finA = [];
    var re = / /gi;
    let stri = [];
    let an = '';
    if (typeof name == "number" ) {
        return false;
    }
    if (typeof name == "boolean" ) {
        return false;
    }
    if (Array.isArray(name) == false ) {
        return false;
    }
    for (let i = 0; i< name.length; i++) {
        if (typeof name[i] === "number" ) {
            return false;
        }
        if (typeof name[i] === "undefined" ) {
            return false;
        }
        if ( name[i] === "null" ) {
            return false;
        }
        if (typeof name[i] === "boolean" ) {
            return false;
        }
        if (Array.isArray(name) === false ) {
            return false;
        }
        answerString.push(name[i]);
        finAnswer.push(answerString[i].trim())
    }
    for (let index = 0; index < finAnswer.length; index++) {
       stri.push(finAnswer[index][0])
    }
    for (let ind = 0; ind < stri.length; ind++) {
        stri.sort()
        an+=stri[ind].toUpperCase()
        
    }
    return an;

};


//разбить arr[0] запятыми на символы, парсить его на нули