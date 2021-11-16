let AllGridCells = document.querySelectorAll(".input-cell");

// cell -> formula remove / value set
for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("blur", function () {
        let content = AllGridCells[i].textContent;
        let address = selectedCell.innerText;
        let {rid, cid} = getRidCidFromAddress(address);
        let cellObject = db[rid][cid];
        // console.log(content)
            // if(cellObject.formula){
            //     removeFormula(address, cellObject.formula);
            //     cellObject.formula = "";
            // }
        setUI(content, rid, cid)
    })
}

// Formula bar
// Set formula / Update formula
formulaInput.addEventListener("keydown", function(e){
    if(e.key == "Enter" && formulaInput.value != ""){
        // Formula get
        let cFormula = formulaInput.value;
        let address = selectedCell.innerText;
        let {rid, cid} = getRidCidFromAddress(address);
        let cellObject = db[rid][cid];
            // if(cellObject.formula != cFormula){
            //     removeFormula(address, cellObject.formula)
            // }

        let value = evaluateFormula(cFormula);
        // console.log(value)

        setUI(value, rid, cid);
        cellObject.formula = cFormula;
        setFormula(address, cFormula);
    }
})

function evaluateFormula(formula){
    // console.log(formula)
    let formulaEntities = formula.split(" ");
    // [(,A1,+,A2,)]
    // console.log(formulaEntities);
    for (let i = 0; i < formulaEntities.length; i++) {
        let ascii = formulaEntities[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // address -> rid cId
            let cellrcObj =
                getRidCidFromAddress(formulaEntities[i]);
            // db -> value
            let value = db[cellrcObj.rid][cellrcObj.cid].value;
            // replace in formula
            formula = formula.replace(formulaEntities[i], value);
        }
    }
    // console.log(formula);
    // eval -> evaluate-> inbuilt 
    
    let result = eval(formula); 
    return result;
}

function setUI(value, rid, cid) {
    let tobeChangedCell = document.querySelector
        (`.input-cell[rId='${rid}'][cId='${cid}']`);
    tobeChangedCell.textContent = value;
    db[rid][cid].value=value;

    let childrenArr = db[rid-1][cid-1].children;

    for(let i = 0 ; i < childrenArr.length ; i++){
        let childrenObj = getRidCidFromAddress(childrenArr[i]);
        let chCellObj = db[childrenObj.rid][childrenObj.cid];
        let value = evaluateFormula(chCellObj.formula);
        setUI(value, childrenObj.rid, childrenObj.cid);
    }
}

function setFormula(address, formula){
    let formulaEntities = formula.split(" ");
    // [(,A1,+,A2,)]
    // console.log(formulaEntities);
    for (let i = 0; i < formulaEntities.length; i++) {
        let ascii = formulaEntities[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // address -> rid cId
            let parentObj = getRidCidFromAddress(formulaEntities[i]);
            // db -> value
            let children = db[parentObj.rid - 1][parentObj.cid - 1].children;
            // console.log(parentObj.rid + " " + parentObj.cid)
            // replace in formula
            children.push(address);
        }
    }
}

function removeFormula(address, formula){
    let formulaEntities = formula.split(" ");

    for(let i = 0 ; i < formulaEntities.length ; i++){
        let ascii = formulaEntities[i].charCodeAt(0);
        if(ascii >= 65 && ascii <= 90){
            let parentObj = getRidCidFromAddress(formulaEntities[i]);

            let children = db[parentObj.rid][parentObj.cid].children;
            let idx = children.indexOf(address);
            children.slice(idx, 1);
        }
    }
}