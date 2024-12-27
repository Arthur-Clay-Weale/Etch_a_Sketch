

let boxes = [];
const btnContainer = document.querySelector("#btn-id");
const container = document.querySelector("#container");
const boxesBtn =document.createElement("button");
boxesBtn.innerText = "Add Boxes";
btnContainer.append(boxesBtn);
//console.log(boxesBtn);
container.style = "border: 2px solid blue;display: flex; flex-wrap : wrap; align-item: center; width: 96px;height: 95px; box-sizing: border-box";

boxesBtn.addEventListener("click",promptButton);
let  totalNumOfBoxes = 16 ** 2 ;

function promptButton (){
    container.innerHTML = "";
    totalNumOfBoxes = 0;
    console.log(totalNumOfBoxes);
    numOfBoxes = prompt("How many boxes do you need on each side");
    console.log(numOfBoxes);
    totalNumOfBoxes = numOfBoxes ** 2;
    console.log(totalNumOfBoxes);
    createDivs(totalNumOfBoxes);
    let dimension = parseInt("6px",10);
    let newDimension = (dimension * numOfBoxes);
        console.log(newDimension);
    container.style = `border: 2px solid blue;display: flex; flex-wrap : wrap; align-item: center; width: ${newDimension}px ;height: ${newDimension}px; box-sizing: border-box`;
}

//promptButton();

function createDivs (totalNumOfBoxes){
    for(let i = 0; i < totalNumOfBoxes ;i++){
        const box = document.createElement("div");
        box.classList.add("hovering");
        boxes.push(box);
        //console.log(boxes[i]);
        container.append(box);
        box.style.cssText = "border : 1px solid black; height : 2px; width : 2px; margin: 1px; align-item: center";
    }
        for(let eachbox of boxes){
            function changeBackgroundColor () {
                eachbox.style.backgroundColor = "black";
                console.log(eachbox);
            }
            eachbox.addEventListener("mouseover", changeBackgroundColor)
        }
}

createDivs(totalNumOfBoxes); 
