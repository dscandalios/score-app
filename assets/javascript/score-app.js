// function libIt() {
//      var storyDiv = document.getElementById("story");
//      var name = document.getElementById("name").value;
//      var adjective = document.getElementById("adjective").value;
//      var noun = document.getElementById("noun").value;
//      storyDiv.innerHTML = name + " married a " + adjective + " " + noun + "... So weird!";
//    }

// $("#inputForm button")


function keepScore(e) {
    e.preventDefault();
    var input = document.getElementById("winInput");
    var winRecent = parseInt(input.value);
    var winningTableCell = document.getElementById("winRow");
    var currentWin = parseInt(winningTableCell.innerText);
    var total = currentWin + winRecent;
    winningTableCell.innerText = total;
}

document.getElementById('inputForm')
.getElementsByTagName("BUTTON")[0]
.addEventListener("click", keepScore);
