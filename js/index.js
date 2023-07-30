const filmNameNode = document.querySelector('#filmName');
const filmAddButton = document.querySelector('#filmAddButton');
const filmErrorNode = document.querySelector('#filmError');
const moviesOutputNode = document.querySelector('#movies');

const LIMIT_LENGHT_FILM_NAME = 130;

let filmCatalog = [];

const reg = /\s/g;


//! ФУНКЦИИ ------------------------------------------------

function Film(name) {
	//this.id = Math.random();
	this.name = name;
	this.check = 'unchecked';
};

const getFilmFromUser = () => {
	const filmFromUser = filmNameNode.value;
	
	const film = new Film(filmFromUser);
	return film;
};

const addFilmToCatalog = (film) => filmCatalog.push(film);

const getFilmCatalog = () => filmCatalog;

const renderFilmCatalog = () => {
	moviesOutputNode.innerHTML = '';

	const catalogContainer = document.createElement('ul');
	catalogContainer.className = 'movies__list';

	const catalog = getFilmCatalog();

	catalog.forEach((element, index) => {
		const catalogEl = document.createElement('li');
		const catalogElLabel = document.createElement('label');
		const catalogElCheckbox = document.createElement('input');
		const catalogElFakecheckbox = document.createElement('div');
		const catalogElTitle = document.createElement('span');
		const catalogElDeleteBtn = document.createElement('button');
		
		catalogEl.className = 'movies__list-item';
		catalogElLabel.className = 'movie';
		catalogElCheckbox.className = 'movie__checkbox';
		catalogElFakecheckbox.className = 'movie__fakecheckbox';
		catalogElTitle.className = 'movie__title';
		catalogElDeleteBtn.className = 'movie__deleteBtn';

		catalogEl.setAttribute('id', index);
		catalogElCheckbox.setAttribute('type', 'checkbox');
		catalogElCheckbox.setAttribute(element.check, '');
		catalogElDeleteBtn.setAttribute('id', index);

		catalogElTitle.innerText = element.name;

		catalogEl.appendChild(catalogElLabel);
		catalogElLabel.appendChild(catalogElCheckbox);
		catalogElLabel.appendChild(catalogElFakecheckbox);
		catalogElLabel.appendChild(catalogElTitle);
		catalogElLabel.appendChild(catalogElDeleteBtn);

		catalogContainer.appendChild(catalogEl);
	});

	moviesOutputNode.appendChild(catalogContainer);
};

const addMovieHandler = () => {
	const movie = getFilmFromUser();
	
	addFilmToCatalog(movie);
	renderFilmCatalog();
};


//! ОБРАБОТЧИКИ ------------------------------------------------

filmAddButton.addEventListener('click', addMovieHandler);













