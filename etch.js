

let boxes = [];
const container = document.querySelector("#container");
const addBoxesBtn =document.createElement("button");
addBoxesBtn.innerText = "Add Boxes";
console.log(addBoxesBtn);
container.style = "border: 2px solid blue;display: flex; flex-wrap : wrap; align-item: center; width: 95px; box-sizing: border-box";

function createDivs (){
    for(let i = 0; i < 256 ;i++){
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

createDivs(); 
