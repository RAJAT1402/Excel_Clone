let sheetAddBtn = document.querySelector(".icon-add");
let sheetContainer = document.querySelector(".sheet-tab-container");
let leftScroll = document.querySelector(".icon-left-scroll");
let rightScroll = document.querySelector(".icon-right-scroll");

leftScroll.addEventListener("click", () => {
    sheetContainer.scrollLeft -= 50;
})

rightScroll.addEventListener("click", () => {
    sheetContainer.scrollLeft += 50;
})

sheetAddBtn.addEventListener("click", () =>{
    let newSheet = document.createElement("div");
    let allSheets = document.querySelectorAll(".sheet-tab");
    newSheet.setAttribute("id",allSheets.length);
    newSheet.setAttribute("class","sheet-tab");
    newSheet.innerText = "Sheet-" + (allSheets.length+1) ;
    sheetContainer.appendChild(newSheet);

    newSheet.scrollIntoView();
    
    createSheetDB();
    handleSheetActiveness(newSheet);
    newSheet.click();
    handleSheetRemoval(newSheet);
})

function sheetOpenHandler(){
    let newSheet = document.createElement("div");
    let allSheets = document.querySelectorAll(".sheet-tab");
    newSheet.setAttribute("id",allSheets.length);
    newSheet.setAttribute("class","sheet-tab");
    newSheet.innerText = "Sheet-" + (allSheets.length+1) ;
    sheetContainer.appendChild(newSheet);

    newSheet.scrollIntoView();
    newSheet.click();
    handleSheetActiveness(newSheet);
    handleSheetRemoval(sheet);
}

function handleSheetRemoval(sheet){
    sheet.addEventListener("mousedown", (e) => {
        // Right Click
        if(e.button !== 2) return;

        let allSheetFolders = document.querySelectorAll(".sheet-tab");
        if(allSheetFolders.length == 1){
            alert("You need to have atleast one sheet");
            return;
        }

        let response = confirm("Your sheet will be deleted permanently, Are you sure ?")
        if(response == false) return;

        let sheetIdx = Number(sheet.getAttribute("id"));

        sheetDB.splice(sheetIdx, 1);

        handleSheetUIRemoval(sheet);

        db = sheetDB[0];
        handleSheetProperties();
    })
}

function handleSheetUIRemoval(sheet){
    sheet.remove();

    let allSheetFolders = document.querySelectorAll(".sheet-tab");
    for(let i = 0 ; i < allSheetFolders.length; i++){
        allSheetFolders[i].setAttribute("id", i);
        allSheetFolders[i].innerText = `Sheet ${i+1}`;
        allSheetFolders[i].style.backgroundColor = "transparent";
    }
    allSheetFolders[0].style.backgroundColor = "lightgray";
}

function createSheetDB(){
    let db = []
    for(let i = 0;  i < 100; i++){
        let rowArr = []
        for(let j = 0; j < 100 ; j++){
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
    // console.log(db);
    sheetDB.push(db)
    // console.log(sheetDB);
}

function handleSheetActiveness(sheet){
    sheet.addEventListener("click", (e) => {
        let sheetIdx = Number(sheet.getAttribute("id"));
        handleSheetDB(sheetIdx);
        handleSheetProperties();
        handleSheetUI(sheet);
        // console.log(db);
    })
}

function handleSheetDB(sheetIdx){
    db = sheetDB[sheetIdx];
    // console.log(db);
}

function handleSheetProperties(){
    for(let i = 0 ; i < 100 ; i++){
        for(let j = 0 ; j < 100 ; j++){
            let cellObject = db[i][j];
            let tobeChangedCell = document.querySelector(`.input-cell[rId='${i}'][cId='${j}']`);
            // console.log(cellObject.value);
            // console.log(tobeChangedCell)
            tobeChangedCell.innerText = cellObject.value;
            tobeChangedCell.style.color = cellObject.color;
            tobeChangedCell.style.fontWeight = cellObject.fontWeight;
            tobeChangedCell.style.backgroundColor = cellObject.backgroundColor;
            tobeChangedCell.style.fontFamily = cellObject.fontFamily;
            tobeChangedCell.style.textAlign = cellObject.halign;
            tobeChangedCell.style.textDecoration = cellObject.underline == false ? "none" : "underline";
            tobeChangedCell.style.fontStyle = cellObject.italic == false ? "normal" : "italic";
            tobeChangedCell.style.fontSize = cellObject.fontSize;
        }
    }

    let firstCell = document.querySelector(".input-cell");
    firstCell.click();
    firstCell.focus();
}

function handleSheetUI(sheet){
    let allSheetFolders = document.querySelectorAll(".sheet-tab");
    for (let i = 0; i < allSheetFolders.length; i++) {
        allSheetFolders[i].style.backgroundColor = "transparent";
    }
    sheet.style.backgroundColor = "lightgray";
}