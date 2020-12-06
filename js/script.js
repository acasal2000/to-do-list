/*
An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements.

tr> element defines a table row, 
<th> element defines a table header,
<td> element defines a table cell.

*/

/*
    <div id="table-buttons-action-container">
        <button>asd</button>
    </div>
 */

let h3 = document.createElement("h5");
h3.setAttribute("id", "empty-completed-txt");
h3.innerHTML = "You don't have any completed notes."

let container = document.getElementById("table-completed-container");
container.appendChild(h3);

let h32 = document.createElement("h5");
h32.setAttribute("id", "empty-notes");
h32.innerHTML = "You don't have any notes."

let containerNotes = document.getElementById("table-container");
containerNotes.appendChild(h32);


function addNotes(){
    
    let container = document.getElementById("table-container");
    let textInput = document.getElementById("textarea-box").value;

    let table = document.getElementById("table-notes");

    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "table-row");

    let h5Text = document.createElement("h5");
    h5Text.setAttribute("id", "note-text");
    h5Text.innerHTML = textInput;


    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "buttons-row-div");

    let btnCompletedDiv = document.createElement("div");
    btnCompletedDiv.setAttribute("id", "btnCompletedDiv");

    let btnDeleteDiv = document.createElement("div");
    btnDeleteDiv.setAttribute("id", "btnDeleteDiv");

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "button-delete");


    let completedButton = document.createElement("button");
    completedButton.setAttribute("id", "button-completed");

    let completedImg = document.createElement("img");
    completedImg.src = "./img/add.png";
    completedImg.width= 30;

    let deleteImg = document.createElement("img");
    deleteImg.src = "./img/remove.png";
    deleteImg.width= 30;

    //completedButton.textContent = "+";
    //deleteButton.textContent = "-";

    completedButton.appendChild(completedImg);
    deleteButton.appendChild(deleteImg);
    btnCompletedDiv.appendChild(completedButton);
    btnDeleteDiv.appendChild(deleteButton);
  

    for(let index = 1; index < 2; index++ ){

        tableRow.appendChild(document.createElement("td"));
        tableRow.appendChild(document.createElement("td"));
        tableRow.appendChild(document.createElement("td"));        
        tableRow.cells[0].appendChild(h5Text);
        tableRow.cells[1].appendChild(btnCompletedDiv);
        tableRow.cells[2].appendChild(btnDeleteDiv);  
    }

    table.appendChild(tableRow);
    container.appendChild(table);

    deleteButton.addEventListener("click", removeNote);  
        
    var rows = document.getElementById('table-notes').getElementsByTagName('tr');
    
     let txtCompletedNote = tableRow.cells[0].textContent;

    completedButton.addEventListener("click", function(){
        isClicked=true
        if(isClicked == true){
            for (let i = 0; i < rows.length; i++) {
                rows[i].onclick = function() {
                   //alert(this.rowIndex);
                   console.log("Linha da Coluna: ", this.rowIndex);
                   console.log(txtCompletedNote);
                   table.deleteRow(this.rowIndex);
                   completedNotes(txtCompletedNote);
                  
               }                   
           }
        }
    });

    checkNotesIsEmpty();
}



function completedNotes(noteText){
    
    let deleteImg = document.createElement("img");
    deleteImg.src = "./img/remove.png";
    deleteImg.width= 30;

    let completedNoteText= document.createElement("p");
    completedNoteText.setAttribute("id", "text");

    
    let btnDeleteDiv = document.createElement("div");
    btnDeleteDiv.setAttribute("id", "btnDeleteCompletedDiv");

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "button-delete-completed");
    //deleteButton.textContent = "-";

    completedNoteText.innerHTML = noteText;
    let tableContainer = document.getElementById("table-completed-container");

    let completedH2 = document.createElement("h2");
    completedH2.setAttribute("id", "completedH2");

    let table = document.getElementById("table-completed");

    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "table-completed-row");

    completedH2.innerHTML = "Completed Notes";

    btnDeleteDiv.appendChild(deleteButton);

    for(let index = 1; index < 2; index++ ){

        tableRow.appendChild(document.createElement("td"));  
        tableRow.appendChild(document.createElement("td"));   
        tableRow.cells[0].appendChild(completedNoteText);
        tableRow.cells[1].appendChild(deleteButton);
        
    }

    table.appendChild(tableRow);

    tableContainer.appendChild(table);

    deleteButton.appendChild(deleteImg);

    deleteButton.addEventListener("click", removeNoteCompleted);

    checkIsEmpty();
}

function removeNote(){
    var table = document.getElementById("table-notes");
    var rows = document.getElementById('table-notes').getElementsByTagName('tr');
    
     for (i = 0; i < rows.length; i++) {
          rows[i].onclick = function() {
             //alert(this.rowIndex);
             table.deleteRow(this.rowIndex);

             if(rows.length == 0){
                containerNotes.appendChild(h32);
             }
             
         }                   
     }
}

function removeNoteCompleted(){
    var table = document.getElementById("table-completed");
    var rows = document.getElementById('table-completed').getElementsByTagName('tr');
    
     for (i = 0; i < rows.length; i++) {
          rows[i].onclick = function() {
             //alert(this.rowIndex);
             table.deleteRow(this.rowIndex);
             if(rows.length == 0){
                container.appendChild(h3);
             }
         }                   
     }

     
}


function buttonPressed(){
    let btnAddCompleted = document.getElementById("button-completed");
    let isClicked = false;
    let text = "o";

    btnAddCompleted.addEventListener("click", function(){
        isClicked=true
        if(isClicked == true){
            teste(text);
        }
    });
}


function checkIsEmpty(){
    var rows = document.getElementById('table-completed').getElementsByTagName('tr');
    var empltyCompletedTxt = document.getElementById("empty-completed-txt");  
   
    let i = 0;

    while(i<rows.length){        
        try{
            container.removeChild(empltyCompletedTxt);
        }catch{}

        i++;
    }
}

function checkNotesIsEmpty(){
    var rows = document.getElementById('table-notes').getElementsByTagName('tr');
    var emptyNotes = document.getElementById("empty-notes");  
   
    let i = 0;

    while(i<rows.length){        
        try{
            containerNotes.removeChild(emptyNotes);
        }catch{}

        i++;
    }
}

