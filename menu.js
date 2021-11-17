// let alignmentContainer = document.querySelector(".align-icon");
// let justifyAlign = document.querySelector(".icon-align-justify");


// change
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    // let address = selectedCell.value;
    let address = selectedCell.innerText;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize+"px";
    // console.log(ridcidObj.rid + " " + ridcidObj.cid);
    db[ridcidObj.rid][ridcidObj.cid].fontSize = fontSize;
})
// select -> fontFamily
fontfamilyInput.addEventListener("change", function () {
    let fontFamily = fontfamilyInput.value;
    // let address = selectedCell.value;
    let address = selectedCell.innerText;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontFamily = fontFamily;

    db[ridcidObj.rid][ridcidObj.cid].fontFamily = fontFamily;
})

// console.log(bold_icon);
    bold_icon.addEventListener("click",() => {
        bold_icon.classList.toggle("selected");

        // let address = selectedCell.value;
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

        // let address = selectedCell.value;
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        // console.log(db[ridcidObj.ridn][ridcidObj.cidn].italic)
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

        // let address = selectedCell.value;
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        
        if(db[ridcidObj.rid][ridcidObj.cid].underline){
            tobeChangedCell.style.textDecoration = "none";
            db[ridcidObj.rid][ridcidObj.cid].underline = false
            // console.log(tobeChangedCell.style.textDecoration)
        }else{
            tobeChangedCell.style.textDecoration = "underline";
            db[ridcidObj.rid][ridcidObj.cid].underline = true
            // console.log(tobeChangedCell.style.textDecoration)
        }
    });
    
    backgroundInput.addEventListener("click", function (e) {
        //   dom help hidden click trigger 
        backgroundHInput.click();
        // console.log("clicked");
    })

    backgroundHInput.addEventListener("change", function (e) {
        let color = backgroundHInput.value;
        // console.log(color);
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.backgroundColor = color;
        
        db[ridcidObj.rid][ridcidObj.cid].color = color;
    })

    textColorInput.addEventListener("click", function (e) {
        //dom help hidden click trigger 
        textColorHInput.click();
        // console.log("clicked");
    })
    textColorHInput.addEventListener("change", function (e) {
        let color = textColorHInput.value;
        // console.log(color);
        let address = selectedCell.innerText;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.input-cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        tobeChangedCell.style.color = color;
        // db me bhi update karta hu
        db[ridcidObj.rid][ridcidObj.cid].backgroundColor = color;
    })


    // let alignIcon = document.querySelectorAll(".align-icon");
    // alignIcon[0].addEventListener("click",myfunction);
    // alignIcon[1].addEventListener("click",myfunction);
    // alignIcon[2].addEventListener("click",myfunction);
    // function myfunction(){
    //     let element=document.querySelector(".align-icon.selected");
    //     element.classList.remove("selected");
    //     (this).classList.add("selected");
    // };

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