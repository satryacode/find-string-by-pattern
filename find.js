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
    let recommendedWords = [];
    for (let item of dataSource) {
        let sum = 0;
        for (let i in knownLetter) {
            if (item.indexOf(knownLetter.charAt(i)) > -1) sum++;

            if (sum == knownLetter.length) {
                recommendedWords.push(item);
                sum = 0;
            }
        }
    }

    if (recommendedWords.length > 0) return recommendedWords;
    else return dataSource;

}
