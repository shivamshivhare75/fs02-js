const input = document.querySelector('.get-note');
const addNoteBtn = document.querySelector('#add-btn');
addNoteBtn.addEventListener("click", addNewNote);
const allNotes = [];

const color = document.querySelector('.get-color');
const notesList = document.querySelector('.notes-list');

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        addNewNote();
    }
})

function addNewNote() {
    if (input.value) {
        let newNote = {
            note: input.value,
            noteColor: color.value
        };
        allNotes.push(newNote);
        displayNotes(allNotes);
    } else {
        alert("A note can't be empty.");
    }

    input.value = "";
    input.focus();
}

function displayNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach((element, index) => {
        let noteHTML = `
        <div class="note" style="background-color:${element.noteColor};">
            <div class="note-view">
                ${element.note}
            </div>
            <div>
                <a class="deleteBtn" data-index="${index}">Del</a>
            </div>
        </div>`;
        notesList.insertAdjacentHTML('afterbegin', noteHTML);
    });

    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', deleteNote);
    });
}

function deleteNote(event) {
    const index = event.target.getAttribute('data-index');
    allNotes.splice(index, 1);
    displayNotes(allNotes);
}

// Initial display
displayNotes(allNotes);
