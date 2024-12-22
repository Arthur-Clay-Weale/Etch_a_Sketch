const container = document.querySelector("#container");
let boxes = [];
container.style.cssText = "border: 2px solid blue;display: flex; flex-wrap : wrap; align-item: center; width: 1445px";

function createDivs (){
    for(let i = 0; i < 256 ;i++){
        const box = document.createElement("div");
        boxes.push(box);
        console.log(boxes[i]);
        container.append(box);
        box.style.cssText = "border : 2px solid green; height : 80px; width : 80px; margin: 3px; align-item: center";
    }
}

createDivs();