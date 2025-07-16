 const nav = document.querySelector('nav');
const title = document.getElementById('nav-title')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        nav.classList.add('fixed');

        title.style.display = 'inline-block';
    }else{
        nav.classList.remove('fixed')
        title.style.display = 'none';
    }
    
})

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.practice-area .card');
    const cardFour = document.querySelector('.card-four');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardDetails = card.querySelector('.card-details');
            if (!cardDetails) return;

            // Hide original card-four
            cardFour.style.display = 'none';

            // Create or select replacement container
            let replacement = document.querySelector('.card-details-replacement');
            if (!replacement) {
                replacement = document.createElement('div');
                replacement.className = 'card-details-replacement';
                cardFour.parentNode.insertBefore(replacement, cardFour.nextSibling);
            }

            // Set replacement content and style
            replacement.innerHTML = cardDetails.innerHTML;
            replacement.style.display = 'block';
            replacement.style.border = '1px solid rgba(31, 45, 42, 0.96)';
            replacement.style.padding = '15px';
            replacement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            replacement.style.width = '490px'
        });
    });

    // Scroll to top functionality for footer up arrow
    const upArrow = document.querySelector('.footer-arrow');
    if (upArrow) {
        upArrow.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Updated Partners section image sliders for multiple sets
    const partnersSection = document.querySelector('.partners');
    const titles = partnersSection.querySelectorAll('.title');

    titles.forEach(title => {
        const navigation = title.querySelector('.navigation');
        const leftArrow = navigation.querySelector('.fa-arrow-left');
        const rightArrow = navigation.querySelector('.fa-arrow-right');
        const recognitions = title.nextElementSibling; // The sibling .recognitions div

        const imageWidth = 150 + 20 + 20; // image width + padding + margin (adjusted to match CSS)
        let currentPosition = 0; // 0 means showing first set of images

        rightArrow.addEventListener('click', () => {
            const imagesCount = recognitions.querySelectorAll('img').length;
            const containerWidth = recognitions.offsetWidth;
            const totalImagesWidth = imagesCount * imageWidth;

            console.log('Right arrow clicked');
            console.log('imagesCount:', imagesCount);
            console.log('containerWidth:', containerWidth);
            console.log('totalImagesWidth:', totalImagesWidth);
            console.log('currentPosition:', currentPosition);

            if (totalImagesWidth > containerWidth) {
                const maxShift = totalImagesWidth - containerWidth;
                // Calculate next shift position
                let shiftAmount = (currentPosition + 1) * imageWidth * 2;
                if (shiftAmount > maxShift) {
                    shiftAmount = maxShift;
                }
                console.log('shiftAmount:', shiftAmount);
                recognitions.style.transform = `translateX(-${shiftAmount}px)`;
                currentPosition = shiftAmount / (imageWidth * 2);
            }
        });

        leftArrow.addEventListener('click', () => {
            console.log('Left arrow clicked');
            console.log('currentPosition:', currentPosition);
            if (currentPosition > 0) {
                const shiftAmount = (currentPosition - 1) * imageWidth * 2;
                recognitions.style.transform = `translateX(-${shiftAmount}px)`;
                currentPosition = currentPosition - 1;
            }
        });
    });
});
