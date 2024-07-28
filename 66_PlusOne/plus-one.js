function plusOne(digits) {
    
    let num = 0
    
    for(i = 0; i < digits.length; i++){
        num = 10 * num + digits[i]
    }

    num++
    let arr = []

    while(num > 0){
        arr.unshift(num%10);
        num=num/10|0;
    }
    
    // console.log(arr)
    return arr
};