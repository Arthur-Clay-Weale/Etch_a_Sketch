const container = document.querySelector("#container");
let boxes = [];
container.style.cssText = "5px solid blue";

function createDivs (){
    for(let i = 0; i < 256 ;i++){
        const box = document.createElement("div");
        boxes.push(box);
        console.log(boxes[i]);
        container.append(box);
    }
}

createDivs();