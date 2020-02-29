const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
var k = (0.693/5700)*1.22*10**4;
var t = (15/sampleActivity)/k*(15/8.0)/(1.22*10**4)*5.2*10**3;
return k ;
 

};
