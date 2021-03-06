// Display the header.
// Display the connect-4 board
// Ask the player whether they like to play?
//     Some button at the bottom reacts to the question.
// Ask the name of players
// A function to randomly choose: who's going to select the color of the chip first
// Ask the toss winner to choose the color of chip.
// record the decision and automatically assign the other color to second player.
// Change the HTML to display the game has started
// Ask the winning player to drop the chip (Update the text on the page.)
// The chip should appear in the selected column on the board
// Ask the other player to drop the chip.  (Update the text on the page.)
// The chip should appear in the selected column on the board
// Ask the fist player again
// Continue until someone wins 
// Declare the winner and ask if they want to restart.  (Update the text on the page.)


var playGameQ = prompt("Do you like to play the game (y or n)? ")
console.log(playGameQ)


// Button reaction to playGameQ
if (playGameQ == "y") {
    $("#buttonOne").css("background-color", "#00b339")
    $("#buttonOne").text("Yes")
    var playerNames = askName()
    console.log(playerNames)

    var tossResult = toss()
    console.log(`toss result: ${tossResult}`)
    var playerOne = playerNames[tossResult[0]]
    var playerTwo = playerNames[tossResult[1]]       
    console.log(`Toss Winner: ${playerOne}, Toss Loser: ${playerTwo}`)
    $("#buttonTwo").text(`${playerOne} won the toss`)
    $("#pOne").text(`${playerOne}`);
    $("#pTwo").text(`${playerTwo}`);

    AskChipChoice()    
    console.log(`${playerOne} colour is ${chipColors[0]}, ${playerTwo} color is ${chipColors[1]}`)
    
    $("#pOne").css("background-color", chipColors[0]);
    $("#pTwo").css("background-color", chipColors[1]);

    $(".updates").text(`${playerOne}, you turn to drop the chip`)

}

if (playGameQ == "n") {
    $("#buttonOne").css("background-color", "#ff0000")
    $("#buttonOne").text("No")
}

// // Toss to decide who's going to select the color of the disk first

function toss() {
    var TossWin = Math.floor(Math.random() * 2)
    if (TossWin === 1) {
        otherSideOfCoin = 0;
    }
    else {
        otherSideOfCoin = 1;
    }
    return [TossWin, otherSideOfCoin]
}


function askName() {
    var pOneName = prompt("Player1, please enter your name: ");
    var pTwoName = prompt("Player2, please enter your name: ");
    return [pOneName, pTwoName]
}

function AskChipChoice() {
    var playerColor = prompt(`${playerOne}, choose your disc color (r or y): `)
    if (playerColor === "r") {
        chipColors = ["rgb(255, 33, 33)", "rgb(255, 205, 23)"]
    }
    else {
        chipColors = ["rgb(255, 205, 23)", "rgb(255, 33, 33)"]   
    }
    return chipColors
}

$(".rowOne").click(function() {
    if (clicks.length % 2 == 0) {
        $(".updates").text(`${playerTwo}, you turn to drop the chip`)
        $("#pOne").css("opacity", "10%")
        $("#pTwo").css("opacity", "100%")
    }
    else {
        $(".updates").text(`${playerOne}, you turn to drop the chip`)
        $("#pTwo").css("opacity", "10%")
        $("#pOne").css("opacity", "100%")
    }

    if ($("#buttonThree").text() === "Won") {
        $("table").css("background-color", "rgb(20, 255, 106)")
        $("table").css("transition-duration", "3s")
        if (clicks.length % 2 === 0) {
            $(".updates").text(`${playerOne}, you Won! Refresh to restart`)
            $("#pOne").css("opacity", "100%")
            $("pOne").css("background-color", "rgb(48, 255, 124)")
            $("pTwo").css("background-color", "rgb(110, 255, 163)")
        }
        else {
            $(".updates").text(`${playerTwo}, you Won! Refresh to restart`)
            $("#pTwo").css("opacity", "100%")
            $("pTwo").css("background-color", "rgb(110, 255, 163)")
            $("pOne").css("background-color", "rgb(48, 255, 124)")
        }
    }
})

var clicks = [1, 1]
$("tr").eq(0).click(function() {
    clicks.push(1);
    console.log(clicks)
})

// FILL CELLS START

var i = 5
var j = 5
var k = 5
var l = 5
var m = 5
var n = 5
var o = 5

$(".colOne").eq(0).click(function() {

        if (i >= 0) {
            if ((clicks.length) % 2 == 0) {
                color = chipColors[0]
                value = 0;
            }
            else {
                color = chipColors[1]
                value = 1;
            }    
            
            $(".colOne").eq(i).css("background-color", color);
            $(".colOne").eq(i).text(value);
            winCheck()
        
            i = i - 1
        }
        else {
            alert(columnFull())
        }
    }
)

$(".colTwo").eq(0).click(function() {

    if (j >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        } 
    
        $(".colTwo").eq(j).css("background-color", color);
        $(".colTwo").eq(j).text(value);
        winCheck()
    
        j = j - 1
    }
    else {
        alert(columnFull())
    }    
    }
)

$(".colThree").eq(0).click(function() {

    if (k >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        }
    
        $(".colThree").eq(k).css("background-color", color);
        $(".colThree").eq(k).text(value);
        winCheck()
    
        k = k - 1
    }
    else {
        alert(columnFull())
    }  
    }
)

$(".colFour").eq(0).click(function() {

    if (l >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        } 
    
        $(".colFour").eq(l).css("background-color", color);
        $(".colFour").eq(l).text(value);
        winCheck()
    
        l = l - 1
    }
    else {
        alert(columnFull())
    }   
    }
)


$(".colFive").eq(0).click(function() {

    if (m >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        } 
    
        $(".colFive").eq(m).css("background-color", color);
        $(".colFive").eq(m).text(value);
        winCheck()
    
        m = m - 1
    }
    else {
        alert(columnFull())
    }
    }
)

$(".colSix").eq(0).click(function() {

    if (n >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        } 
    
        $(".colSix").eq(n).css("background-color", color);
        $(".colSix").eq(n).text(value);
        winCheck()
    
        n = n - 1
    }
    else {
        alert(columnFull())
    }    
    }
)

$(".colSeven").eq(0).click(function() {

    if (o >= 0) {
        if ((clicks.length) % 2 == 0) {
            color = chipColors[0]
            value = 0;
        }
        else {
            color = chipColors[1]
            value = 1;
        } 
    
        $(".colSeven").eq(o).css("background-color", color);
        $(".colSeven").eq(o).text(value);
        winCheck()
    
        o = o - 1
    }
    else {
        alert(columnFull())
    }    
    }
)

function columnFull() {
    clicks.pop()
    return "column is full, please choose another"    
}

// FILL CELLS END

cellValue = ""
function winCheck() {

// WIN CHECK IN ROWS

    for (td = 0; td < 36; td = td + 7) {

        for (row = td; row < td + 4; row++){
            if($("td").eq(row).text() === $("td").eq(row + 1).text() && $("td").eq(row).text() === $("td").eq(row + 2).text() && $("td").eq(row).text() === $("td").eq(row + 3).text() && $("td").eq(row).text() != "")
            { 
                $("td").eq(row).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(row + 1).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(row + 2).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(row + 3).css("border-color", "rgb(255, 197, 71)")
                $("#buttonThree").text("Won")
                $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
            }
        }
    }

// WIN CHECK IN COLUMNS

    for (td = 0; td < 7; td++) {

        for (col = td; col < td + 36; col = col + 7) {
            if($("td").eq(col).text() === $("td").eq(col + 7).text() && $("td").eq(col).text() === $("td").eq(col + 14).text() && $("td").eq(col).text() === $("td").eq(col + 21).text() && $("td").eq(col).text() != "")
            {
                $("td").eq(col).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(col + 7).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(col + 14).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(col + 21).css("border-color", "rgb(255, 197, 71)")
                $("#buttonThree").text("Won")
                $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
            }            
        }
    }

//  WIN CHECK IN CROSS DIRECTION - TOP RIGHT TO BOTTOM LEFT

    for (td = 3; td < 7; td++) {
        var limCheck = {3: 3, 4: 10, 5: 17, 6: 18}

        for (cr = td; cr <= limCheck[td]; cr = cr + 6) {
            
            if($("td").eq(cr).text() === $("td").eq(cr + 6).text() && $("td").eq(cr).text() === $("td").eq(cr + 12).text() && $("td").eq(cr).text() === $("td").eq(cr + 18).text() && $("td").eq(cr).text() != "")
            {
                $("td").eq(cr).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 6).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 12).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 18).css("border-color", "rgb(255, 197, 71)")
                $("#buttonThree").text("Won")
                $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
            }
        }
    }
    
    for (td = 13; td < 21; td = td + 7) {
        var limCheck = {13: 19, 20: 20}

        for (cr = td; cr <= limCheck[td]; cr = cr + 6) {
            
            if($("td").eq(cr).text() === $("td").eq(cr + 6).text() && $("td").eq(cr).text() === $("td").eq(cr + 12).text() && $("td").eq(cr).text() === $("td").eq(cr + 18).text() && $("td").eq(cr).text() != "")
            {
                $("td").eq(cr).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 6).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 12).css("border-color", "rgb(255, 197, 71)")
                $("td").eq(cr + 18).css("border-color", "rgb(255, 197, 71)")
                $("#buttonThree").text("Won")
                $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
            }
        }
    }

//  WIN CHECK IN CROSS DIRECTION - TOP LEFT TO BOTTOM RIGHT

for (td = 3; td > -1; td--) {
    var limCheck = {3: 3, 2: 10, 1: 17, 0: 16}

    for (cr = td; cr <= limCheck[td]; cr = cr + 8) {
        
        if($("td").eq(cr).text() === $("td").eq(cr + 8).text() && $("td").eq(cr).text() === $("td").eq(cr + 16).text() && $("td").eq(cr).text() === $("td").eq(cr + 24).text() && $("td").eq(cr).text() != "")
        {
            $("td").eq(cr).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 8).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 16).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 24).css("border-color", "rgb(255, 197, 71)")
            $("#buttonThree").text("Won")
            $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
        }
    }
}

for (td = 7; td < 15; td = td + 7) {
    var limCheck = {7: 15, 14: 14}

    for (cr = td; cr <= limCheck[td]; cr = cr + 8) {
        
        if($("td").eq(cr).text() === $("td").eq(cr + 8).text() && $("td").eq(cr).text() === $("td").eq(cr + 16).text() && $("td").eq(cr).text() === $("td").eq(cr + 24).text() && $("td").eq(cr).text() != "")
        {
            $("td").eq(cr).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 8).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 16).css("border-color", "rgb(255, 197, 71)")
            $("td").eq(cr + 24).css("border-color", "rgb(255, 197, 71)")
            $("#buttonThree").text("Won")
            $("#buttonThree").css("background-color", "rgb(0, 245, 90)")
        }
    }
}
 
}
