exports.a = 10;
exports.b = function(){
    console.log('b method');
}

exports.abs = function(num) {
    return Math.abs(num);
}

exports.circleArea = function(radius){
    return radius*radius * Math.PI;
}