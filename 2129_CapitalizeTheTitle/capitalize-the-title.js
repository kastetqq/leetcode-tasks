const capitalizeTitle = (title) => {

    let words = title.split(" "); 
    let ready = [];

    for (let word of words) {

        if (word.length === 0) continue; 

        if(word.length === 1 || word.length === 2) {
            let smallWord = word.slice(0).toLowerCase();
            ready.push(smallWord);
        }

        else if(word.length >= 3) {
            let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            ready.push(capitalizedWord);
        }
        
    }

    let result = ready.join(" ");

    //console.log(result);
    return result
}