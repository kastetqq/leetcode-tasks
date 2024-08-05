const isPalindrome = (s) => {
    str = []

    for ( i = 0; i < s.length; i++) {

        const char = s[i].toLowerCase()

        if (char !== "!" && char !== "," && char !== "." && char !== "?" && 
            char !== ":" && char !== ";" && char !== ")" && char !== "(" &&
            char !== "'" && char !== "-" && char !== "[" && char !== "]" && 
            char !== " " && char !== "@" && char !== "#" && char !== "№" && 
            char !== "_" && char !== "/" && char !== "|") {
            str.push(char)
        } 

    }

    const readyStr = str.join('')
    const reversedStr = readyStr.split('').reverse().join('');

    if (readyStr === reversedStr) {
        //console.log(true)
        return(true)
    } else {
        return(false)
        //console.log(false)
    }

}