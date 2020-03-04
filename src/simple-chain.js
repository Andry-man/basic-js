const chainMaker = {
  chain:[],
  getLength() { // отдаёт длинну 
    return this.chain.length;
  },
  addLink(val) { // пушим новую входящую инфу (val) в массив chain
      this.chain.push(`( ${val} )`) 
      return this;
  },
  removeLink(position) { // удаляем по номеру позиции обьект из массива 
    if (typeof position !== 'number') {
      this.chain = []
      throw new Error;                        //если числа нет в массиве вернуть Error
    }
    if ( position > this.getLength() || position < 1) {
      this.chain = []
      throw new Error;
    }
    
    // if (  position in this.val == false ) {  // не уверен
    //   throw new Error;
    // }
    this.chain.splice(position-1,1)
    this.chain;
    return this
  },
  reverseChain() { // реверсим массив
    this.chain.reverse();
    return this;
  },
  finishChain() { // возращаем ответ и обнуляем массив
   let answer = '';
   answer+=this.chain.join('~~'),
   this.chain=[]
   return answer;
  }
};

module.exports = chainMaker;
