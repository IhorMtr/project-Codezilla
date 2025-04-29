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

  const darkClassGroup1 = 'dark-theme-before-green-bg';
  const darkClassGroup2 = 'dark-theme-white-before-bg dark-theme-green-color';

  function generateSkillsList(container, skills, darkClassValue) {
    const skillsRepeated = [...skills, ...skills];
    container.innerHTML = '';

    skillsRepeated.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.className = 'tech-skills-item';
      li.dataset.darkClass = darkClassValue;
      container.appendChild(li);
    });
  }

  lists.forEach((list, index) => {
    const darkClassValue = index < 2 ? darkClassGroup1 : darkClassGroup2;
    generateSkillsList(list, skills, darkClassValue);
  });

  lists.forEach(list => {
    list.style.animation = 'none';
    void list.offsetWidth;
  });

  lists.forEach((list, index) => {
    const animationName = index < 2 ? 'scroll' : 'scrollReverse';
    list.style.animation = `${animationName} 20s linear infinite`;
  });

  if (window.applyCurrentTheme) {
    window.applyCurrentTheme();
  }
});
