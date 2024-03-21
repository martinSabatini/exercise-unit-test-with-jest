const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));



function fromDollarToYen(dollar){
    let yen = dollar*0.0066;
    return yen;

}
function fromEuroToDollar(euro){
    let dollar = euro*1.07;
    return dollar;
}
function fromYenToPound(yen){
    let pound = yen*192.33;
    return pound;
}
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };