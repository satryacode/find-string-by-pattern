function find(dataSource, patternChar, patternQuery, knownLetter, excludeLetter) {
    //filter data from exclude letter, and pattern string
    for (let i in patternQuery) {
        if (patternQuery[i] != patternChar) {
            dataSource = dataSource.filter(item => {
                return item.charAt(i) == patternQuery[i]
            });
        } else {
            dataSource = dataSource.filter(item => {
                return excludeLetter.indexOf(item.charAt(i)) < 0
            });
        }
    }

    //filter data from known letters
    let recommendedWords = [], regStr = "", i = knownLetter.length;
    while (i--){
        regStr += "(?=.*" + knownLetter[i] + ")";
    }

    let reg = new RegExp(regStr);
    for(let item of dataSource){
        if (reg.test(item)) {
            recommendedWords.push(item);
        }
    }

    if (recommendedWords.length > 0) return recommendedWords;
    else return dataSource;

}
