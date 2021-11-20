let ctrlKey;

document.addEventListener("keydown", (e) =>{
    ctrlKey = e.ctrlKey;
})

document.addEventListener("keyup", (e) =>{
    ctrlKey = e.ctrlKey;
})

for(let i = 0 ; i < 100 ; i++){
    for(let j = 0 ; j < 100 ; j++){
        let cell = document.querySelector(`.input-cell[rId='${i}'][cId='${j}']`);
        handleSelectedCells(cell);
    }
}

let copyBtn = document.querySelector(".icon-copy");
let cutBtn = document.querySelector(".icon-cut");
let pasteBtn = document.querySelector(".icon-paste");


let rangeStorage = [];

function handleSelectedCells(cell){

    cell.addEventListener("click", (e) =>{

        if(!ctrlKey) return;
        if(rangeStorage.length >= 2){
            defaultSelectedCellsUI();
            rangeStorage = [];
        }

        // UI
        // cell.style.border = "3px solid #218c74";
        cell.classList.add("selected1");

        let rid = Number(cell.getAttribute("rid"));
        let cid = Number(cell.getAttribute("cid"));

        rangeStorage.push([rid, cid]);

        console.log(rangeStorage);
    })
}

function defaultSelectedCellsUI(){
    for(let i = 0 ; i < rangeStorage.length ; i++){
        let cell = document.querySelector(`.input-cell[rId='${rangeStorage[i][0]}'][cId='${rangeStorage[i][1]}']`);
        cell.classList.remove("selected1");
    }
}

let copyData = [];
copyBtn.addEventListener("click", (e) => {
    if (rangeStorage.length < 2) return;
    copyData = [];

    let [strow, stcol, endrow, endcol] = [ rangeStorage[0][0], rangeStorage[0][1], rangeStorage[1][0], rangeStorage[1][1] ];

    for (let i = strow;i <= endrow;i++) {
        let copyRow = [];
        for (let j = stcol;j <= endcol;j++) {
            let cellProp = db[i][j];
            copyRow.push(cellProp);
        }
        copyData.push(copyRow);
    }

    defaultSelectedCellsUI();
})

cutBtn.addEventListener("click", (e) => {
    if (rangeStorage.length < 2) return;
    let [strow, stcol, endrow, endcol] = [ rangeStorage[0][0], rangeStorage[0][1], rangeStorage[1][0], rangeStorage[1][1] ];

    for (let i = strow;i <= endrow;i++) {
        for (let j = stcol;j <= endcol;j++) {
            let cell = document.querySelector(`.input-cell[rId='${i}'][cId='${j}']`);
            
            // DB
            let cellProp = db[i][j];
            cellProp.value = "";
            cellProp.bold = false;
            cellProp.italic = false;
            cellProp.underline = false;
            cellProp.fontSize = 14;
            cellProp.fontFamily = "Arial";
            cellProp.color = "black";
            cellProp.backgroundColor = "white";
            cellProp.halign = "left";

            // UI
            cell.textContent = cellProp.value;
            cell.click();
        }
    }

    defaultSelectedCellsUI();
})

pasteBtn.addEventListener("click" ,() => {
    // Past cells data work
    if (rangeStorage.length < 2) return;

    let rowDiff = Math.abs(rangeStorage[0][0] - rangeStorage[1][0]);
    let colDiff = Math.abs(rangeStorage[0][1] - rangeStorage[1][1]);

    // Target
    let address = selectedCell.innerText;

    let ridcidObj = getRidCidFromAddress(address);
    let [stRow, stCol] = [ridcidObj.rid, ridcidObj.cid];

    // r -> refers copydata row
    // c -> refers copydata col
    for (let i = stRow,r = 0;i <= stRow+rowDiff;i++,r++) {
        for (let j = stCol,c = 0;j <= stCol+colDiff;j++,c++) {
            let cell = document.querySelector(`.input-cell[rId='${i}'][cId='${j}']`);
            if (!cell) continue;

            // DB
            let data = copyData[r][c];
            let cellProp = db[i][j];

            cellProp.value = data.value;
            cellProp.bold = data.bold;
            cellProp.italic = data.italic;
            cellProp.underline = data.underline;
            cellProp.fontSize = data.fontSize;
            cellProp.fontFamily = data.fontFamily;
            cellProp.color = data.color;
            cellProp.backgroundColor = data.backgroundColor;
            cellProp.halign = data.halign;

            // UI
            cell.textContent = cellProp.value;
            cell.click();
        }
    }
})