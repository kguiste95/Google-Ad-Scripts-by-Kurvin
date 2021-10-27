function addCommas(number) {
  if (number && (typeof number == "number")==true){
    var num = (number).toString();
    var deci = num.slice(num.indexOf("."))
    if (num.indexOf(".") !=-1){
      num = num.slice(0, num.indexOf("."));
    }
    var num2 = "";
    for (var i = 0; i < num.length; i++){
      if ((num.length - i)%3==0 && i>0){
        num2 += ","+num[i];
      } else {
        num2 += num[i];
      }
    }
    num = num2
    if (deci.indexOf(".")!= -1){
      num +=deci
    }
    return num;
  }
}