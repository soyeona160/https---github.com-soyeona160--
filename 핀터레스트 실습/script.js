const startSlide = slideItems[0];
const endSlide = slideItenms[slideItems.length-1];


function nextMove() {
    currSlide++;
    if (currSlide <= masSlide) {

    } else {
        currSlide = 0;
        let offset = slideWidth * currSlide;
    }
}