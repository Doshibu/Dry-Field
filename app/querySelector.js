export const querySelectors = {
    wallet: '#wallet',
    mainCitern: '#main-citern',
    fieldCitern: '.field-citern',
    score: '#score',
    fields: '.field'
}

export const getElement = (selector) => document.querySelector(querySelectors.selector)