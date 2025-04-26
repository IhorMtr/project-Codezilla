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

  function generateSkillsList(container) {
    const skillsRepeated = [...skills, ...skills];
    container.innerHTML = '';
    skillsRepeated.forEach(skill => {
      const li = document.createElement('li');
      li.className = 'tech-skills-item';
      li.textContent = skill;
      container.appendChild(li);
    });
  }

  function restartAnimation() {
    generateSkillsList(list1);
    generateSkillsList(list2);

    list1.style.animation = 'none';
    list2.style.animation = 'none';

    void list1.offsetWidth;
    void list2.offsetWidth;

    list1.style.animation = 'marqueeLine 20s linear infinite';
    list2.style.animation = 'marqueeLineReverse 20s linear infinite';
  }

  restartAnimation();
});
