const textForNumbers = function (firstText, secondText) {
    let printsCount = 0
    for (let i = 1; i < 101; i++ ) {
        const isMultiple3 = i % 3 == 0
        const isMultiple5 = i % 5 == 0
       if (isMultiple3 && isMultiple5) {
        console.log(firstText + secondText)
        printsCount++
       } else if (isMultiple3) {
        console.log(firstText)
        printsCount++
       } else if (isMultiple5) {
        console.log(secondText)
        printsCount++
       }
    }
    console.log(`Impreso ${printsCount} veces`)
}

textForNumbers('Multiplo de 3 ', 'Multiplo de 5 ')