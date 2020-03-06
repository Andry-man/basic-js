module.exports = function createDreamTeam(members) {
    let answer = members;
    if (!Array.isArray(members)) { // return false если прилитает не массив
    return false;
    }
    let matrix = [];
     return answer.reduce((arr, item) => { // проверяет каждую строку массива на typeof === string
        if (typeof item === 'string') { //пушит первую букву в строке (делает большой) пушит в массив, и возвращает его
            matrix.push(item.trim()[0].toUpperCase());
           }
           return matrix; 
          },matrix).sort().join(''); // сортирует убирает пробелы
        
        
    };