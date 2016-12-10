/*
Author : Ravy Thok
Email : ravy_thok@student.uml.edu
School : UMass Lowell,
Course : COMP 4610 - GUI Programming I
Assignment :  No. 6: Creating an Interactive Dynamic Table      

Filename: myjavascript.js
*/

//Function validateNUM checks each of the inputs 
//that it is (1) a number, (2) that it is a two digit
//(between 9-100), (3) that it isn't empty
function validateNUM(){
    console.log("validateNUM function is running");
    var h1,h2,v1,v2;
    var htext1,htext2,vtext1,vtext2;
    
    //getting the first input
    h1 = document.getElementById("hNUM1").value;
    //checking the first input to see if it is valid
    if(isNaN(h1)|| h1 < 9 || h1 > 100 ||h1.length !== 2){
        htext1 = "Invalid Input";
        document.getElementById("hMSG1").style.textAlign = "center";
        document.getElementById("hMSG1").style.color = "white";
        document.getElementById("hMSG1").style.backgroundColor = "red";
        document.getElementById("hNUM1").style.color = "red";
        document.getElementById("hNUM1").style.borderColor = "red";
    }else {
        htext1 = "Input Accepted";
        document.getElementById("hMSG1").style.textAlign = "center";
        document.getElementById("hMSG1").style.color = "white";
        document.getElementById("hMSG1").style.backgroundColor = "green";
        document.getElementById("hNUM1").style.color = "green";
        document.getElementById("hNUM1").style.borderColor = "green";
    }
    //display error or success message
    document.getElementById("hMSG1").innerHTML = htext1.bold(); 
    
    //getting the second input
    h2 = document.getElementById("hNUM2").value;
    //checking the second input to see if it is valid
    if(isNaN(h2)|| h2 < 9 || h2 > 100 ||h2.length !== 2){
        htext2 = "Invalid Input";
        document.getElementById("hMSG2").style.textAlign = "center";
        document.getElementById("hMSG2").style.color = "white";
        document.getElementById("hMSG2").style.backgroundColor = "red";
        document.getElementById("hNUM2").style.color = "red";
        document.getElementById("hNUM2").style.borderColor = "red";
    }else {
        htext2 = "Input Accepted";
        document.getElementById("hMSG2").style.textAlign = "center";
        document.getElementById("hMSG2").style.color = "white";
        document.getElementById("hMSG2").style.backgroundColor = "green";
        document.getElementById("hNUM2").style.color = "green";
        document.getElementById("hNUM2").style.borderColor = "green";
    }
    //display error or success message
    document.getElementById("hMSG2").innerHTML = htext2.bold(); 
    
    //getting the third input
    v1 = document.getElementById("vNUM1").value;
    //checking the third input to see if it is valid
    if(isNaN(v1)|| v1 < 9 || v1 > 100 ||v1.length !== 2){
        vtext1 = "Invalid Input";
        document.getElementById("vMSG1").style.textAlign = "center";
        document.getElementById("vMSG1").style.color = "white";
        document.getElementById("vMSG1").style.backgroundColor = "red";
        document.getElementById("vNUM1").style.color = "red";
        document.getElementById("vNUM1").style.borderColor = "red";
    }else {
        vtext1 = "Input Accepted";
        document.getElementById("vMSG1").style.textAlign = "center";
        document.getElementById("vMSG1").style.color = "white";
        document.getElementById("vMSG1").style.backgroundColor = "green";
        document.getElementById("vNUM1").style.color = "green";
        document.getElementById("vNUM1").style.borderColor = "green";
    }
    //display error or success message
    document.getElementById("vMSG1").innerHTML = vtext1.bold();
    
    //getting the last input
    v2 = document.getElementById("vNUM2").value;
    //checking the last input to see if it is valid
    if(isNaN(v2)|| v2 < 9 || v2 > 100 ||v2.length !== 2){
        vtext2 = "Invalid Input";
        document.getElementById("vMSG2").style.textAlign = "center";
        document.getElementById("vMSG2").style.color = "white";
        document.getElementById("vMSG2").style.backgroundColor = "red";
        document.getElementById("vNUM2").style.color = "red";
        document.getElementById("vNUM2").style.borderColor = "red";
    }else {
        vtext2 = "Input Accepted";
        document.getElementById("vMSG2").style.textAlign = "center";
        document.getElementById("vMSG2").style.color = "white";
        document.getElementById("vMSG2").style.backgroundColor = "green";
        document.getElementById("vNUM2").style.color = "green";
        document.getElementById("vNUM2").style.borderColor = "green";
    }
    //display error or success message
    document.getElementById("vMSG2").innerHTML = vtext2.bold();
    
    //if all input is valid
    if(htext1 === "Input Accepted" && 
            htext2 === "Input Accepted" &&
            vtext1 === "Input Accepted" &&
            vtext2 === "Input Accepted"){
        
        //appending the first two numbers
        var h1 = h1.concat(h2);
        //appending the last two numbers
        var v1 = v1.concat(v2);
       
        //creating the table and passing inputs
        createTABLE(h1,v1);
    }
    return false;
};

//this function creates a 5 by 5 table
//it takes two numbers as a parameter
function createTABLE(h,v){
    var mytable = '';
    
    //setting rows and column length to 5
    var row = 5;
    var col = 5;
    
    //creating each row
    for(var i = 0; i < row; i++){
        mytable += '<tr>';
        //creating each column
        for(var j = 0; j < col; j++){
            if( i === 0 && j !== 0){ //the first row of the table
                //displays the horizontal numbers in each cells
                mytable += '<th style="background-color:lightsteelblue; text-align: center ; height: 50px; width:50px;">' + h[j-1] + '</th>';
            }else if(j === 0 && i !== 0){ //the first column of the table
                //displays the vertical numbers in each cells
                mytable += '<th style="background-color:thistle; text-align: center ; height: 50px; width:50px;"">' + v[i-1] + '</th>';
            }else if(j !== 0 && i !== 0){ //the rest of the table
                //displays the multiplication of the row and column value
                mytable += '<td style="background-color:lightcoral;  text-align: center ; height: 50px; width:50px;"">' +  mult(h[j-1], v[i-1]) + '</td>';
            }else{ //first cell of the table
                mytable += '<th style="background-color:beige; text-align: center ; height: 50px; width:50px;"">X</th>';
            }
        }
        mytable += '<tr>';
    }
    //displays the table
    //document.write('<table id="mytab" border="3px" >' + table + '</table>');
    
    document.getElementById("mytable").innerHTML = '<table id="mytab" border="3px solid black" > ' + mytable + ' </table>';
    return false;
};

function mult(a,b){
  return (a * b) ;  
};


    
    