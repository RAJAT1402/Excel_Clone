let column_name = document.querySelector(".column-name-container");
let row_name = document.querySelector(".row-name-container");
let inputCellContainer = document.querySelector(".input-cell-container");

//Generating Top Row And Left Column
for (let i = 1; i <= 100; i++) {
  let colDiv = document.createElement("div");
  colDiv.setAttribute("class", "column-name");

  let rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row-name");

  let ans = "";
  let n = i;
  while (n > 0) {
    let rem = n % 26;
    if (rem == 0) {
      ans = "Z" + ans;
      n = Math.floor(n / 26) - 1;
    } else {
      ans = String.fromCharCode(rem - 1 + 65) + ans;
      n = Math.floor(n / 26);
    }
  }
  colDiv.innerText = ans;
  column_name.appendChild(colDiv);

  rowDiv.innerText = i;
  row_name.appendChild(rowDiv);

  // Another way of generating columns
  // column += `<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`;
  // row += `<div class="row-name" id="rowId-${i}">${i}</div>`;
}

//Generating input cells
for (let i = 0; i < 100; i++) {
  let row = document.createElement("div");
  row.setAttribute("class", "cell-row");

  for (let j = 0; j < 100; j++) {
    let div = document.createElement("div");
    div.setAttribute("class", "input-cell");
    div.setAttribute("contentEditable", "true");

    //   every cell identification required
    div.setAttribute("rId", i);
    div.setAttribute("cId", j);
    row.appendChild(div);
  }

  inputCellContainer.appendChild(row);
}
