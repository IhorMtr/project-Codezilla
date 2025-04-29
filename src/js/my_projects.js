const projects = [
  {
    image: './img/rectangle_10.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'power pulse webservice',
    link: ''
  },
  {
    image: './img/rectangle_7.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'mimino website',
    link: ''
  },
  {
    image: './img/rectangle_8.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'vyshyvanka vibes Landing Page',
    link: ''
  },
  {
    image: './img/rectangle_9.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'green harvest online store',
    link: ''
  },
  {
    image: './img/rectangle_11.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'wallet webservice',
    link: ''
  },
  {
    image: './img/rectangle_6.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'chego jewelry website',
    link: ''
  },
  {
    image: './img/rectangle_4.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'energy flow webservice',
    link: ''
  },
  {
    image: './img/rectangle_5.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'fruitbox online store',
    link: ''
  },
  {
    image: './img/rectangle_12.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice',
    link: ''
  },
  {
    image: './img/first_screen_1.webp',
    stack: 'React, JavaScript, Node JS, Git',
    name: 'starlight studio landing page',
    link: ''
  }
];
const projectList = document.querySelector('.my_projects-list');
const loadMoreButton = document.getElementById('load-more');

let projectsLoaded = 0;
const projectsPerClick = 3;

function createMarkup(arr) {
  return arr.map(item => `
    <li class="my_projects-item">
      <picture>
        <source
          srcset="${item.image.replace('.webp', '-1x.webp')} 1x, ${item.image.replace('.webp', '-2x.webp')} 2x"
          type="image/webp"
        />
        <img 
          src="${item.image.replace('.webp', '-1x.webp')}" 
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