const projects = [
     {
    image: './img/Rectangle 10.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'power pulse webservice ',
    link: ''
  },
  {
    image: './img/Rectangle 7.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'mimino website',
    link: ''
    },
   {
    image: './img/Rectangle 8.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'vyshyvanka vibes Landing Page',
    link: ''
  },
  {
    image: './img/Rectangle 9.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'green harvest online store',
    link: ''
    },
   {
    image: './img/Rectangle 11.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'wallet webservice ',
    link: ''
  },
  {
    image: './img/Rectangle 6.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'chego jewelry website',
    link: ''
    },
   {
    image: './img/Rectangle 4.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'energy flow webservice ',
    link: ''
  },
  {
    image: './img/Rectangle 5.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'fruitbox online store',
    link: ''
    },
   {
    image: './img/Rectangle 12.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice ',
    link: ''
  },
  {
    image: './img/first screen 1.jpg',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'starlight studio landing page',
    link: ''
  },
]

const projectList = document.querySelector('.my_projects-list');
const loadMoreButton = document.getElementById('load-more');

let projectsLoaded = 0;
const projectsPerClick = 3;

function createMarkup(arr) {
  return arr.map(item => `
    <li class="my_projects-item">
      <img src="${item.image}" alt="${item.name}" class="my_projects-img">
      <div class="my_projects-info-container">
        <div class="my_projects-info">
          <p class="my_projects-item-stack">${item.stack}</p>
          <h3 class="my_projects-item-header">${item.name}</h3>
        </div>
        <a href="${item.link}" target="_blank">
          <button type="button" class="my_projects-button">VISIT  
            <img class="my_projects-icon"  src="./img/Vector 24.svg" width="18" height="18">
          </button>
        </a>
      </div>
    </li>
  `).join('');
}

function loadProjects() {
  const slice = projects.slice(projectsLoaded, projectsLoaded + projectsPerClick);
  projectList.insertAdjacentHTML('beforeend', createMarkup(slice));

  projectsLoaded += projectsPerClick;

  if (projectsLoaded >= projects.length) {
    loadMoreButton.style.display = 'none';
  }
}

loadProjects();

loadMoreButton.addEventListener('click', loadProjects);