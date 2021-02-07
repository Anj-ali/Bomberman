const arr = [];
var count = 0;
for (var i = 0; i < 10; i++) {
    var temp = Math.floor(Math.random() * 81) + 1;
    while (arr.includes(temp)) {
        temp = Math.floor(Math.random() * 81) + 1;
    }
    arr.push(temp);
}

//set1.clear();

console.log(arr);

for (var i = 1; i <= 81; i++) {
    var cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", "cell_" + i);

    cell.addEventListener("click", cellClicked);
    document.getElementById("grid").appendChild(cell);
}

function cellClicked(cell) {
    var c = Number(cell.target.getAttribute("id").slice(5));
    var bc = bomb_clicked(c);
    if (bc) {
        lost()
    }
    else {
        count++;
        var score = document.getElementById("gameScore").innerHTML = count;
        cellColorChange(c);
    }

    if (count == 71) {
        win();
    }

    // console.log(c);
    // console.log(bc);
}

function bomb_clicked(num) {
    if (arr.includes(num)) {
        return true;
    }

    return false;
}

function lost() {
    removeEL();
    showBomb();
    document.getElementById("resultDisplay").innerText = "game over";
}

function win() {
    removeEL();
    showBomb();
    document.getElementById("resultDisplay").innerText = "win";
}

function removeEL() {
    for (var i = 1; i <= 81; i++) {
        document.getElementById("cell_" + i).removeEventListener("click", cellClicked);
    }
}

function showBomb() {
    for (var i =0;i<10;i++) {
        document.getElementById("cell_" +arr[i]).style.backgroundImage = "url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)";
        document.getElementById("cell_" +arr[i]).style.backgroundSize = "cover";
        document.getElementById("cell_" + arr[i]).style.backgroundColor = "rgb(255, 0, 0)";
    }
}



function cellColorChange(c) {
    document.getElementById("cell_" + c).style["background-color"] = "rgb(66, 230, 26)";
    document.getElementById("cell_" + c).removeEventListener("click", cellClicked);
}

function reset() {
    resetCell();
    scoreReset();
    addListner();
    document.getElementById("resultDisplay").innerText = "";
}

function resetCell() {
    for (var i = 1; i <= 81; i++) {
        document.getElementById("cell_" + i).style.backgroundImage = "";
        document.getElementById("cell_"+i).removeAttribute('style');
    }

    while(arr.length>0){
        arr.pop();
    }

    count = 0;
    for (var i = 0; i < 10; i++) {
        var temp = Math.floor(Math.random() * 81) + 1;
        while (arr.includes(temp)) {
            temp = Math.floor(Math.random() * 81) + 1;
        }
        arr.push(temp);
    }

    console.log(arr);
}

function scoreReset() {
    var score = document.getElementById("gameScore").innerHTML = 0;
}

function addListner() {
    for (var i = 1; i <= 81; i++) {
        var cell = document.getElementById("cell_" + i);
        cell.addEventListener("click", cellClicked);
    }
}
