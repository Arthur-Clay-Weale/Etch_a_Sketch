

let boxes = [];
const btnContainer = document.querySelector("#btn-id");
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.style = "display: flex; justify-content: center; width: 100%; height: 100%"
const boxesBtn =document.createElement("button");
boxesBtn.innerText = "Add Boxes";
btnContainer.append(boxesBtn);
container.style = "border: 2px solid blue;display: flex; flex-wrap : wrap; width: 400px;height: 400px; box-sizing: border-box; justify-content: center";

boxesBtn.addEventListener("click",promptButton);
let  totalNumOfBoxes = 16 ** 2 ;
let defaultBoxSize = (400 / 16) - 2;

function promptButton (){
    container.innerHTML = "";
    totalNumOfBoxes = 0;
    console.log(totalNumOfBoxes);
    numOfBoxes = prompt("How many boxes do you need on each side");
    console.log(numOfBoxes);
    totalNumOfBoxes = numOfBoxes ** 2;
    console.log(totalNumOfBoxes);
    let newDimension = (400 / numOfBoxes) - 2;
        console.log(newDimension);
        createDivs(totalNumOfBoxes, newDimension);
}

function createDivs (totalNumOfBoxes,boxSize){
    for(let i = 0; i < totalNumOfBoxes ;i++){
        const box = document.createElement("div");
        box.classList.add("hovering");
        boxes.push(box);
        container.append(box);
        box.style.cssText = `border : 1px solid black; height : ${boxSize}px; width : ${boxSize}px; align-item: center`;
    }
        for(let eachbox of boxes){
            function changeBackgroundColor () {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
                eachbox.style.backgroundColor = `${rgbColor}`;
                console.log(eachbox);
            }
            eachbox.addEventListener("mouseover", changeBackgroundColor)
        }
}
createDivs(totalNumOfBoxes,defaultBoxSize); 
