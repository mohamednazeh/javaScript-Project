
// image collage ie ..image getting focus on mouusehover where others display none

// const collageImages = [...document.querySelectorAll('.collage-img')]
const collageImages = [...document.querySelectorAll('.collage-img')];

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if (index != i) {
                image.style.filter = 'blur(10px)';    //get 8alwash
                item.style.zIndex = 2;
            }
        })
    })


    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) =>{
            image.style = null;

        })
    })

})




