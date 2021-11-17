let column_name =document.querySelector(".column-name-container")
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
    // column += `<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`;
    // row += `<div class="row-name" id="rowId-${i}">${i}</div>`;    
}
        
// column_name.innerHTML = column;
// row_name.innerHTML = row;
        

        //Generating cells
    //    let row1 = "";
    //    let cells = "";
    //    let input_cell;
    //    for(let i = 1 ; i<=100 ; i++){
    //         row1 = `<div class="cell-row">`;
    //         let column = "";
    //         for(let j = 1 ; j <=100 ; j++){
    //                 let colCode = document.querySelector(`.colId-${j}`).getAttribute("id").split("-")[1];
    //                  column = `<div class="input-cell" contenteditable="true" id="row-${i}-col-${j}" data="code-${colCode}"></div>`;
    //                  row1 += column;
    //         }
    //         row1 += `</div>`;
    //         cells+=row1;
    //     }
    //     inputCellContainer.innerHTML = cells;
    for (let i = 0; i < 100; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "cell-row");
        
        for (let j = 0; j < 100; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "input-cell");
            // div.textContent = String.fromCharCode(j+65)+(i+1)  
            // div.textContent = i + "," + j
            div.setAttribute("contentEditable", "true")
            //   every cell identification required 
            
            div.setAttribute("rId", i);
            div.setAttribute("cId", j);
            row.appendChild(div);  
        }
        
        inputCellContainer.appendChild(row)
    }

    let sheetDB = [];
    let db = [];
    for(let i = 0 ; i < 100 ; i++){
        let rowArr = [];
        for(let j = 0 ; j < 100 ; j++){
            // creating database
            let cellObj = {
                color: "black",
                backgroundColor: "white",
                fontFamily: "Arial",
                fontSize: 14,
                halign: "left",
                italic: false,
                underline: false,
                bold: false,
                value:"",
                formula: "",
                children: []
            }
            rowArr.push(cellObj)
        }
        db.push(rowArr)
    }