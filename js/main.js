const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete-all');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const removeNoteBtn = document.getElementsByClassName('delete-note'); // przy użyciu queryselectolAll nie wyłapywałoby nowych notatek
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedValue;
let cardId = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
	notePanel.classList.add('panel-animation');
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	category.selectedIndex = 0;
	textArea.value = '';
};

const addNote = () => {
	if (textArea.value !== '' && category.value !== '0') {
		createNote();
		closePanel();
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');

	newNote.classList.add('note');
	newNote.setAttribute('id', cardId);

	newNote.innerHTML = `<div class="note-header">
	<h3 class="note-title">${selectedValue}</h3>
	<button class="delete-note" onclick="deleteNote(${cardId})">
	<i class="fas fa-times icon"></i>
	</button>
	</div>
	<div class="note-body">${textArea.value}</div>`;

	noteArea.append(newNote);
	cardId++;
	handleColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
	console.log(selectedValue);
};

const handleColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};

const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
