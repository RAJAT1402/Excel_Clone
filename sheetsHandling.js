let sheetAddBtn = document.querySelector(".icon-add");
let sheetContainer = document.querySelector(".sheet-tab-container");

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
    // handleSheetRemoval(sheet);
    newSheet.click();
})

function createSheetDB(){
    let db = []
    for(let i = 1;  i <= 100; i++){
        let rowArr = []
        for(let j = 1; j <= 100 ; j++){
            let cellObj = {
                color: "black",
                backgroundColor: "white",
                fontFamily: "Arial",
                fontSize: 14,
                halign: "left",
                italic: false,
                underline: false,
                bold: false,
                value:""
            }
            rowArr.push(cellObj)
        }
        db.push(rowArr)
    }
    sheetDB.push(db)
}

function handleSheetActiveness(sheet){
    sheet.addEventListener("click", (e) => {
        let sheetIdx = Number(sheet.getAttribute("id"));
        handleSheetDB(sheetIdx);
        handleSheetProperties();
        // handleSheetUI(sheet);
        // console.log(sheetDB);
    })
}

function handleSheetDB(sheetIdx){
    db = sheetDB[sheetIdx];
    // console.log(db);
}

function handleSheetProperties(){
    for(let i = 1 ; i <= 100 ; i++){
        for(let j = 1 ; j <= 100 ; j++){
            let cell = document.querySelector(`.input-cell[rId='${i}'][cId='${j}']`);
            // console.log(cell)
            cell.click();
        }
    }

    let firstCell = document.querySelector(".input-cell");
    firstCell.click();
    firstCell.focus();
}

// function handleSheetUI(){
//     let allSheetFolders = document.querySelectorAll(".sheet-tab");
//     for (let i = 0; i < allSheetFolders.length; i++) {
//         allSheetFolders[i].style.backgroundColor = "transparent";
//     }
//     sheet.style.backgroundColor = "";
// }