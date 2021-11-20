let selectedCell = document.querySelector(".selected-cell");
let fontfamilyInput = document.querySelector(".font-family-selector");
let bold_icon = document.querySelector(".icon-bold");
let italic_icon = document.querySelector(".icon-italic");
let underline_icon = document.querySelector(".icon-underline");
let backgroundHInput = document.querySelector(".background_color");
let backgroundInput = document.querySelector(".icon-color-fill");
let textColorHInput = document.querySelector(".text_color");
let textColorInput = document.querySelector(".icon-color-text");
let leftAlign = document.querySelector(".icon-align-left");
let rightAlign = document.querySelector(".icon-align-right");
let centerAlign = document.querySelector(".icon-align-center");
let fontSizeInput = document.querySelector(".font-size-selector");
let formulaInput = document.querySelector(".formula-input");


let sheetDB = [];
    let db = [];
    // Creating first sheet using javascript
    {
        let addSheetBtn = document.querySelector(".icon-add");
        addSheetBtn.click();
    }
    
    // Function to change cell properties
    inputCellContainer.addEventListener("click",(e) => {
        let element = document.querySelector(".input-cell.selected");
        if(element != null){
            element.classList.remove("selected");
        }
        e.target.classList.add("selected");
        let rid = e.target.getAttribute("rId");
        let cid = e.target.getAttribute("cId");
        rid = parseInt(rid) + 1;
        cid = parseInt(cid) + 1;
        let ans = "";
            let n = cid;
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

        selectedCell.innerText = ans + rid;

        let cellObj = getRidCidFromAddress(selectedCell.innerText)
        // console.log(cellObj)
        let cellObject = db[cellObj.rid][cellObj.cid]
        fontSizeInput.value = cellObject.fontSize
        fontfamilyInput.value = cellObject.fontFamily
        formulaInput.value = cellObject.formula

        bold_icon.classList.remove("selected")
        italic_icon.classList.remove("selected")
        underline_icon.classList.remove("selected")
        leftAlign.classList.remove("selected")
        rightAlign.classList.remove("selected")
        centerAlign.classList.remove("selected")
        if(cellObject.bold){
            bold_icon.classList.add("selected")
        }

        if(cellObject.italic){
            italic_icon.classList.add("selected")
        }

        if(cellObject.underline){
            underline_icon.classList.add("selected")
        }

        if(cellObject.halign == "left"){
            leftAlign.classList.add("selected")
        }

        if(cellObject.halign == "center"){
            centerAlign.classList.add("selected")
        }

        if(cellObject.halign == "right"){
            rightAlign.classList.add("selected")
        }

    });
    
    let firstCell = document.querySelector(".input-cell");
    firstCell.click();
    firstCell.focus();
        
    // Function to return rid and cid from the given address
    function getRidCidFromAddress(address) {
        // A-Z, 1-100
        // B
        let AsciiValue = address.charCodeAt(0);
        let cid;
        let rid;
        if(address.charCodeAt(1) >= 65 && address.charCodeAt(1) <= 90){
            cid = ( (AsciiValue - 65 + 1) * 26 ) + (address.charCodeAt(1) - 65);
            rid =  Number(address.substring(2)) - 1;
        }else{
            cid = AsciiValue - 65;
            rid = Number(address.substring(1)) - 1;
        }
        return {
            rid: rid, cid: cid
        }
        
    }