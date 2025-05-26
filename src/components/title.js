export const createTitle = (title) => {

    const h1 = document.createElement('h1');
    h1.className = 'title is-size-1 has-text-centered';
    h1.textContent = title;
    return h1;
}