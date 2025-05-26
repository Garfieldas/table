export const createTable = (headers, rows) => {
    const table = document.createElement("table");
    table.className = "table is-bordered is-striped is-hoverable is-fullwidth is-size-7";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.className = "has-background-primary has-text-white";

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    const tbody = document.createElement("tbody");

    const colorClasses = [
        "has-background-info-light",
        "has-background-warning-light",
        "has-background-success-light",
        "has-background-danger-light",
        "has-background-link-light"
    ];

    rows.forEach((row, index) => {
        const tr = document.createElement("tr");
        tr.className = colorClasses[index % colorClasses.length];

        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.classList.add('has-text-black');
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
};
