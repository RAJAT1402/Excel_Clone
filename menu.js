let fileIcon = document.querySelector(".menu-file");
let homeIcon = document.querySelector(".menu-home");

let fileBar = document.getElementById("file");
let homeBar = document.getElementById("home");

// Function for working of file and home buttons
fileIcon.addEventListener("click", () => {
    homeIcon.classList.remove("selected");
    fileIcon.classList.add("selected");
    homeBar.style.display = "none";
    fileBar.style.display = "flex";  
})

homeIcon.addEventListener("click", () => {
    fileIcon.classList.remove("selected");
    homeIcon.classList.add("selected");
    fileBar.style.display = "none";  
    homeBar.style.display = "flex";
})

// Function to change font size 
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let address = selectedCell.innerText;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);

    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize+"px";

    // change in database
    db[ridcidObj.rid][ridcidObj.cid].fontSize = fontSize;
})

// select -> fontFamily
fontfamilyInput.addEventListener("change", function () {
    let fontFamily = fontfamilyInput.value;
    let address = selectedCell.innerText;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);

    // change fontFamily property
    tobeChangedCell.style.fontFamily = fontFamily;

    // chnage in databse
    db[ridcidObj.rid][ridcidObj.cid].fontFamily = fontFamily;
})


    bold_icon.addEventListener("click",() => {
        bold_icon.classList.toggle("selected");
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);

        if(db[ridcidObj.rid][ridcidObj.cid].bold){
            tobeChangedCell.style.fontWeight = "normal";
            db[ridcidObj.rid][ridcidObj.cid].bold = false
        }else{
            tobeChangedCell.style.fontWeight = "bold";
            db[ridcidObj.rid][ridcidObj.cid].bold = true
        }
    });

    italic_icon.addEventListener("click",() => {
        italic_icon.classList.toggle("selected");
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        
        if(db[ridcidObj.rid][ridcidObj.cid].italic){
            tobeChangedCell.style.fontStyle = "normal";
            db[ridcidObj.rid][ridcidObj.cid].italic = false
        }else{
            tobeChangedCell.style.fontStyle = "italic";
            db[ridcidObj.rid][ridcidObj.cid].italic = true
        }
    });

    underline_icon.addEventListener("click",() => {
        underline_icon.classList.toggle("selected");
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        
        if(db[ridcidObj.rid][ridcidObj.cid].underline){
            tobeChangedCell.style.textDecoration = "none";
            db[ridcidObj.rid][ridcidObj.cid].underline = false
        }else{
            tobeChangedCell.style.textDecoration = "underline";
            db[ridcidObj.rid][ridcidObj.cid].underline = true
        }
    });
    
    // Function to click on bacground Color input
    backgroundInput.addEventListener("click", function (e) {
        //   dom help hidden click trigger 
        backgroundHInput.click();
    })

    backgroundHInput.addEventListener("change", function (e) {
        let color = backgroundHInput.value;
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.backgroundColor = color;
        
        db[ridcidObj.rid][ridcidObj.cid].color = color;
    })

    // Function to click on text color input
    textColorInput.addEventListener("click", function (e) {
        //dom help hidden click trigger 
        textColorHInput.click();
    })

    textColorHInput.addEventListener("change", function (e) {
        let color = textColorHInput.value;
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.color = color;
        // Updating in databse
        db[ridcidObj.rid][ridcidObj.cid].backgroundColor = color;
    })

    leftAlign.addEventListener("click", function () {
        let element=document.querySelector(".align-icon.selected");
        element.classList.remove("selected");
        leftAlign.classList.add("selected");

        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.textAlign = "left";
        
        db[ridcidObj.rid][ridcidObj.cid].halign = "left"
    })

    rightAlign.addEventListener("click", function () {
        let element=document.querySelector(".align-icon.selected");
        element.classList.remove("selected");
        rightAlign.classList.add("selected");

        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.textAlign = "right";
        
        db[ridcidObj.rid][ridcidObj.cid].halign = "right"
    })

    centerAlign.addEventListener("click", function () {
        let element=document.querySelector(".align-icon.selected");
        element.classList.remove("selected");
        centerAlign.classList.add("selected");

        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.textAlign = "center";
        
        db[ridcidObj.rid][ridcidObj.cid].halign = "center"
    })