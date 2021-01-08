//console.log("Notes Website");

//if user add a note add it to the localstorage .And we choose local storage bcz at this tym we don't have any database
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')//notes ek array hai
    if(notes == null){
        notesObj = [];
    }else{
notesObj = JSON.parse(notes)//yaha pr string to array convert ho rha hai
    }


    notesObj.push(addTxt.value)
    localStorage.setItem('notes',JSON.stringify(notesObj))//local storage mai string mai hee daalna padta hai
    addTxt.value = "";
    //console.log(notesObj)
    showNotes();
});



//function to show notes from localstorage to client display
function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }else{
notesObj = JSON.parse(notes)//yaha pr string to array convert ho rha hai
    }

    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        
        <div class="card notecard"  style="width: 18rem;">
                    <img class="card-img-top" src="notes.png" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Note ${index + 1}</h5>
                      <p class="card-text">${element}.</p>
                      <button id='${index}' onclick='deleteNote(this.id)' href="#" class="btn btn-primary">Delete Note</button>
                    </div>
                  </div>
        
        
        
        `;

        
        
    });

    let notesElem = document.getElementById('notes');
        if(notesObj.length != 0){
            notesElem.innerHTML = html;
        }else{
            notesElem.innerHTML = '<b>Nothing to show!</b> ';
        }
}



//function to deletenote
function deleteNote(index){
//console.log('note deleted',index)

let notes = localStorage.getItem('notes')
if(notes == null){
    notesObj = [];
}else{
notesObj = JSON.parse(notes)//yaha pr string to array convert ho rha hai
}

notesObj.splice(index,1);
localStorage.setItem('notes',JSON.stringify(notesObj))
showNotes();

}


let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputval = search.value;
    // console.log('hey',inputval);

    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element,index){
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if(cardTxt.includes(inputval)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    })
});