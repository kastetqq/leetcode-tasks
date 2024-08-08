const romanToInt = (s) => {

    const numbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    result = 0;

    for(i = 0; i < s.length; i++){

        current = numbers[s[i]];

        next = numbers[s[i+1]];

        if(current < next){

            result += next - current;
            i++;
        }
        else result += current;
    }
    return result;
}