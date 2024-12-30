

let boxes = []; // Initialises an empty array for the storage of boxes.
const btnContainer = document.querySelector("#btn-id"); //Selects the id of the button container in HTML
const container = document.querySelector("#container");//Selects the id of the container
const body = document.querySelector("body");
body.style = "display: flex; justify-content: center; width: 100%; height: 100%" //Dom styling for the body
const boxesBtn =document.createElement("button");
boxesBtn.innerText = "Add Boxes";//Adds inner text for the button 
btnContainer.append(boxesBtn);// Appends or adds the boxes button into the DOM Tree
container.style = "border: 2px solid blue;display: flex; flex-wrap : wrap; width: 400px;height: 400px; box-sizing: border-box; justify-content: center";

boxesBtn.addEventListener("click",promptButton);//Event listener for the add boxes button 
let  totalNumOfBoxes = 16 ** 2 ;//Default math for the default 256 boxes
let defaultBoxSize = (400 / 16) - 2;//Default dimentions for the boxes

//Function that executes when the button is clicked 
function promptButton (){
    container.innerHTML = "";//Clears the container after prompt button has been called
    totalNumOfBoxes = 0; //Re-initialises the total number of boxes to zero
    console.log(totalNumOfBoxes);//Just a way of test if the code was working at that part
    numOfBoxes = prompt("How many boxes do you need on each side");// Question for the prompt
    console.log(numOfBoxes);
    totalNumOfBoxes = numOfBoxes ** 2;
    console.log(totalNumOfBoxes);
    let newDimension = (400 / numOfBoxes) - 2;
        console.log(newDimension);
        createDivs(totalNumOfBoxes, newDimension);
}
// Function to create divs
function createDivs (totalNumOfBoxes,boxSize){
    for(let i = 0; i < totalNumOfBoxes ;i++){
        const box = document.createElement("div");
        box.classList.add("hovering");
        boxes.push(box);//Appends the boxes into the box array initialised earlier
        container.append(box);//Appends boxes into the DOM tree
        box.style.cssText = `border : 1px solid black; height : ${boxSize}px; width : ${boxSize}px; align-item: center`;
    }
    //loop for background coloring the boxes
        for(let eachbox of boxes){
            function changeBackgroundColor () {
                let red = Math.floor(Math.random() * 256); //Accesses random color combination from 0-255
                let green = Math.floor(Math.random() * 256);//Accesses random color combination from 0-255
                let blue = Math.floor(Math.random() * 256);//Accesses random color combination from 0-255
                    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
                eachbox.style.backgroundColor = `${rgbColor}`;
                console.log(eachbox);
            }
            eachbox.addEventListener("mouseover", changeBackgroundColor)//Adds the background color of the box the moment you hover over the box.
        }
}
createDivs(totalNumOfBoxes,defaultBoxSize); //Calls create divs function
