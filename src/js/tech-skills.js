document.addEventListener('DOMContentLoaded', function () {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'React Native',
    'TypeScript',
  ];

  const list1 = document.getElementById('techSkillsList1');
  const list2 = document.getElementById('techSkillsList2');
  const list3 = document.getElementById('techSkillsList3');
  const list4 = document.getElementById('techSkillsList4');

  function generateSkillsList(container) {
    const skillsRepeated = [...skills, ...skills];
    container.innerHTML = '';
    skillsRepeated.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.className = 'tech-skills-item';
      container.appendChild(li);
    });
  }

  generateSkillsList(list1);
  generateSkillsList(list2);
  generateSkillsList(list3);
  generateSkillsList(list4);

  list1.style.animation = 'none';
  list2.style.animation = 'none';

  void list1.offsetWidth;
  void list2.offsetWidth;
  void list3.offsetWidth;
  void list4.offsetWidth;

  list1.style.animation = 'scroll 20s linear infinite';
  list2.style.animation = 'scroll 20s linear infinite';
  list3.style.animation = 'scrollReverse 20s linear infinite';
  list4.style.animation = 'scrollReverse 20s linear infinite';
});
