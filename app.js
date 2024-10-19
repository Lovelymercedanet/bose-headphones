document.addEventListener('mousemove', (event) => {

    const maxDistance = 300;

    const crossOne = document.getElementById('cross-headphones-1-id');
    const circleOneOne = document.getElementById('cross-circle-1-1-id');
    const circleOneTwo = document.getElementById('cross-circle-1-2-id');
    const rectOne = crossOne.getBoundingClientRect();
    const elementXOne = rectOne.left + rectOne.width / 2;
    const elementYOne = rectOne.top + rectOne.height / 2;
    const distanceOne = Math.sqrt(
        Math.pow(event.clientX - elementXOne, 2) + Math.pow(event.clientY - elementYOne, 2)
    );
    let newOpacityOne = 1 - (distanceOne / maxDistance);
    newOpacityCloserCircleOne = Math.max(0.1, Math.min(newOpacityOne, 1));
    newOpacitySecondCircleOne = Math.max(0, Math.min(newOpacityOne, 1));
    circleOneOne.style.opacity = newOpacityCloserCircleOne;
    circleOneTwo.style.opacity = newOpacitySecondCircleOne;

    const crossTwo = document.getElementById('cross-headphones-2-id');
    const circleTwoOne = document.getElementById('cross-circle-2-1-id');
    const circleTwoTwo = document.getElementById('cross-circle-2-2-id');
    const rectTwo = crossTwo.getBoundingClientRect();
    const elementXTwo = rectTwo.left + rectTwo.width / 2;
    const elementYTwo = rectTwo.top + rectTwo.height / 2;
    const distanceTwo = Math.sqrt(
        Math.pow(event.clientX - elementXTwo, 2) + Math.pow(event.clientY - elementYTwo, 2)
    );
    let newOpacityTwo = 1 - (distanceTwo / maxDistance);
    newOpacityCloserCircleTwo = Math.max(0.1, Math.min(newOpacityTwo, 1));
    newOpacitySecondCircleTwo = Math.max(0, Math.min(newOpacityTwo, 1));
    circleTwoOne.style.opacity = newOpacityCloserCircleTwo;
    circleTwoTwo.style.opacity = newOpacitySecondCircleTwo;

    const crossThree = document.getElementById('cross-headphones-3-id');
    const circleThreeOne = document.getElementById('cross-circle-3-1-id');
    const circleThreeTwo = document.getElementById('cross-circle-3-2-id');
    const rectThree = crossThree.getBoundingClientRect();
    const elementXThree = rectThree.left + rectThree.width / 2;
    const elementYThree = rectThree.top + rectThree.height / 2;
    const distanceThree = Math.sqrt(
        Math.pow(event.clientX - elementXThree, 2) + Math.pow(event.clientY - elementYThree, 2)
    );
    let newOpacityThree = 1 - (distanceThree / maxDistance);
    newOpacityCloserCircleThree = Math.max(0.1, Math.min(newOpacityThree, 1));
    newOpacitySecondCircleThree = Math.max(0, Math.min(newOpacityThree, 1));
    circleThreeOne.style.opacity = newOpacityCloserCircleThree;
    circleThreeTwo.style.opacity = newOpacitySecondCircleThree;
})

const crossTwo = document.querySelector('.cross-headphones-2');
crossTwo.addEventListener('mouseover', () => {
    const panel = document.querySelector('.cross-headphones-2-info-panel');
    panel.classList.remove('hidden-panel');
    panel.classList.add('visible-panel');
})
crossTwo.addEventListener('mouseout', () => {
    const panel = document.querySelector('.cross-headphones-2-info-panel');
    panel.classList.remove('visible-panel');
    panel.classList.add('hidden-panel');
})

function scrollSlider(direction) {
    const slider = document.querySelector('.products-slider-items');
    slider.scrollLeft += 235 * direction;
}

const productsCardSlider = document.querySelector('.products-cards__wrapper');
productsCardSlider.addEventListener('wheel', function (event) {
    event.preventDefault();
    const scrollAmount = 358;
    productsCardSlider.scrollLeft += (event.deltaY > 0) ? scrollAmount : -scrollAmount
});

function switchColorItem(item, color) {
    document.querySelector('.hero-content__color-current-name')
        .innerText = color[0]
            .toUpperCase() + color.slice(1);

    const colorItems = document.querySelectorAll('.hero-content__color-item');
    colorItems.forEach((item) => {
        if (item.classList.contains('hero-content__current-color-item')) {
            item.classList.remove('hero-content__current-color-item')
            item.style.cssText = `outline: none;`
        }
    })

    const targetItem = document.querySelector(`.hero-content__color-item-${item}`);
    targetItem.classList.add('hero-content__current-color-item');
    const targetItemStyles = window.getComputedStyle(targetItem);
    const targetItemBackgroundColor = targetItemStyles.getPropertyValue('background-color');
    targetItem.style.cssText = `outline: 3px solid ${targetItemBackgroundColor};`
}

function switchFeature(item) {
    const featureItem = document.querySelector(`.feature--${item}`);
    const featureItems = document.querySelectorAll('.feature');

    featureItems.forEach((element) => {
        if (element.classList.contains('feature--active'))
            element.classList.remove('feature--active');
    });

    if (featureItem.classList.contains('feature--active'))
        return
    else
        featureItem.classList.add('feature--active');
}