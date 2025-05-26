import { data } from "./utils/data";
import { columns } from "./utils/columns";
import { createTable } from "./components/table";
import { createTitle } from "./components/title";
import { createFooter } from "./components/footer";

const app = document.querySelector('#app');

window.addEventListener("load", () => {
    const title = createTitle('Jonas ❤️❤️❤️❤️');
    const table = createTable(columns, data);
    const footer = createFooter('Dainius');

    app.appendChild(title);
    app.appendChild(table);
    app.appendChild(footer)
})
