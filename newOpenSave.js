let downloadBtn = document.querySelector(".icon-download");
let openBtn = document.querySelector(".icon-upload");
let openInput = document.querySelector(".open_input");
let newInput = document.querySelector(".icon-open");

downloadBtn.addEventListener("click", function (e) {

    // anchor create
    let a = document.createElement("a");
    // file put -> db array 
    var StringCode = encodeURIComponent(JSON.stringify(sheetDB));
    var dataStr = "data:text/json;charset=utf-8," +
        StringCode;
    a.href = dataStr;
    a.download = "file.json";
    // anchor click
    a.click();

    // Excel download but dont work with styling
    // styling -> pass
    // var ws = XLSX.utils.json_to_sheet(db);
    // var wb = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, "sheet1");
    // XLSX.writeFile(wb, "file.xlsx");
})
openBtn.addEventListener("click", function (e) {
    openInput.click();
})
openInput.addEventListener("change", function (e) {
    let filesArr = openInput.files;
    // first file select 
    let file = filesArr[0];
    // fileReader -> browser inbuilt
    const reader = new FileReader();
    // read as text 
    reader.readAsText(file);
    reader.addEventListener('load', (event) => {
        // img.src = event.target.result;
        let JSONdata = JSON.parse(event.target.result);
        sheetDB = JSONdata
        db = sheetDB[0]
        // console.log(db);
        setUI1();
        for(let i = 0 ; i < sheetDB.length - 1 ; i++){
            sheetOpenHandler();
        }
    });
})

newInput.addEventListener("click", () => {
    // // Set db to empty
    // db = [];

    // // Set initial Entries
    // createSheetDB();

    // // ui -> map according to new db
    // setUI1();

    let response = confirm("All sheets will be deleted permanently, Are you sure ?")
    if(response == false) return;
    location.reload()
})

function setUI1() {
    for (let i = 0; i < 100; i++) {

        for (let j = 0; j < 100; j++) {
            //    set all the properties on ui with matchiing rid,cid
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
}