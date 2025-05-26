export const createFooter = (name) => {

    const footer = document.createElement('footer');
    footer.className = 'footer';

    const div = document.createElement('div');
    div.className = 'content has-text-centered';

    const p = document.createElement('p');
    p.className = 'is-size-3 has-text-weight-bold';
    const date = new Date().getFullYear();
    p.textContent = `${name}, ${date}`;
    
    div.appendChild(p);

    footer.appendChild(div);

    return footer;
}