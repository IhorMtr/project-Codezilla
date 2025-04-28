document.addEventListener('DOMContentLoaded', function () {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'React Native',
    'TypeScript',
  ];

  const lists = [
    document.getElementById('techSkillsList1'),
    document.getElementById('techSkillsList2'),
    document.getElementById('techSkillsList3'),
    document.getElementById('techSkillsList4'),
  ];

  function generateSkillsList(container, skills) {
    const skillsRepeated = [...skills, ...skills];
    container.innerHTML = '';
    skillsRepeated.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.className = 'tech-skills-item';
      container.appendChild(li);
    });
  }

  lists.forEach(list => generateSkillsList(list, skills));

  lists.forEach(list => {
    list.style.animation = 'none';
    void list.offsetWidth;
  });

  lists.forEach((list, index) => {
    const animationName = index < 2 ? 'scroll' : 'scrollReverse';
    list.style.animation = `${animationName} 20s linear infinite`;
  });
});
