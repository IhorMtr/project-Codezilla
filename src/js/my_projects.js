const projects = [
  {
    image: './img/webp/rectangle_10',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'power pulse webservice',
    link: '',
  },
  {
    image: './img/webp/rectangle_7',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'mimino website',
    link: '',
  },
  {
    image: './img/webp/rectangle_8',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'vyshyvanka vibes Landing Page',
    link: '',
  },
  {
    image: './img/webp/rectangle_9',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'green harvest online store',
    link: '',
  },
  {
    image: './img/webp/rectangle_11',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'wallet webservice',
    link: '',
  },
  {
    image: './img/webp/rectangle_6',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'chego jewelry website',
    link: '',
  },
  {
    image: './img/webp/rectangle_4',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'energy flow webservice',
    link: '',
  },
  {
    image: './img/webp/rectangle_5',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'fruitbox online store',
    link: '',
  },
  {
    image: './img/webp/rectangle_12',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice',
    link: '',
  },
  {
    image: './img/webp/first_screen_1',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'starlight studio landing page',
    link: '',
  },
];

const projectList = document.querySelector('.my_projects-list');
const loadMoreButton = document.getElementById('load-more');

let projectsLoaded = 0;
const projectsPerClick = 3;

function createMarkup(arr) {
  return arr
    .map(
      item => `
    <li class="my_projects-item">
      <picture>
        <source
          srcset="${item.image}-1x.webp 1x, ${item.image}-2x.webp 2x"
          type="image/webp"
        />
        <img 
          src="${item.image}-1x.webp" 
          alt="${item.name}" 
          class="my_projects-img" 
          loading="lazy" 
          width="320" 
          height="184"
        />
      </picture>
      <div class="my_projects-info-container">
        <div class="my_projects-info">
          <p class="my_projects-item-stack">${item.stack}</p>
          <h3 class="my_projects-item-header">${item.name}</h3>
        </div>
        <a href="${item.link}" target="_blank" class="my_projects-button">
          VISIT
          <svg class="my_projects-icon" width="24" height="24">
            <use href="./img/icons/icons.svg#icon-diagonal-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `
    )
    .join('');
}

function loadProjects() {
  const slice = projects.slice(
    projectsLoaded,
    projectsLoaded + projectsPerClick
  );
  projectList.insertAdjacentHTML('beforeend', createMarkup(slice));
  projectsLoaded += projectsPerClick;

  if (projectsLoaded >= projects.length) {
    loadMoreButton.style.display = 'none';
  }
}

loadProjects();

loadMoreButton.addEventListener('click', loadProjects);