let downloadBtn = document.querySelector(".icon-download");
let openBtn = document.querySelector(".icon-upload");
let openInput = document.querySelector(".open_input");

downloadBtn.addEventListener("click", function (e) {

    // anchor create
    let a = document.createElement("a");
    // file put -> db array 
    var StringCode = encodeURIComponent(JSON.stringify(db));
    var dataStr = "data:text/json;charset=utf-8," +
        StringCode;
    a.href = dataStr;
    a.download = "file.json";
    // // anchor click
    a.click();
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
        db = JSONdata
        // console.log(db);
        setUI();
    });
})

function setUI() {
    for (let i = 1; i <= 100; i++) {

        for (let j = 1; j <= 100; j++) {
            //    set all the properties on ui with matchiing rid,cid
            let cellObject = db[i-1][j-1];
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