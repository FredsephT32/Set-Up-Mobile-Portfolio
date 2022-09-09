function toggleNav() {
  const hamburgerElement = document.getElementById('Hamburger-icon');
  const closeElement = document.getElementsByClassName('close-btn')[0];
  const mobileLinksElement = document.getElementsByClassName('mob-menu')[0];
  hamburgerElement.classList.toggle('isHidden');
  document.getElementsByClassName('Left-Logo')[0].classList.toggle('isHidden');
  closeElement.classList.toggle('isHidden');
  mobileLinksElement.classList.toggle('isHidden');
}

document.getElementById('Hamburger-icon').addEventListener('click', toggleNav);
document.getElementsByClassName('close-btn')[0].addEventListener('click', toggleNav);
document.getElementsByClassName('mob-menu')[0].addEventListener('click', toggleNav);

const projectsSection = document.querySelector('section.all-cards');

// Popup  and work section
const mobileCards = [
  {
    bigTxt: 'Tonic',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    image: 'Images/work-card-facebook.svg',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Multi-Post Stories',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    image: 'Images/work-card-uber.svg',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Tonic',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    image: 'Images/work-card-tonic.svg',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Multi-Post Stories',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    image: 'Images/work-card-art-prog.svg',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    link: 'https://www.google.com',
  },
];

const desktopCards = [
  {
    bigTxt: 'Tonic',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    image: 'Images/work-card-replace-tonic.svg',
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Multi-Post Stories',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    image: 'Images/work-card-art-prog.svg',
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Facebook 360',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    paragraph: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    image: 'Images/work-card-facebook.svg',
    link: 'https://www.google.com',
  },
  {
    bigTxt: 'Uber Navigation',
    company: 'Uber',
    companyTitle: 'Lead Developer',
    year: 2018,
    paragraph: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    image: 'Images/work-card-uber.svg',
    link: 'https://www.google.com',
  },
];

let isMobile = window.innerWidth < 768;
let projects = [];

function popUpDynamic(project) {
  document.body.style.overflow = 'hidden';
  const workCardPop = document.createElement('div');
  workCardPop.classList.add('work-card-popup');
  workCardPop.innerHTML = `  
    <div class="card-content-popup">
      <img class="close-top" src="Images/dark-x-icon.png" alt="close" />
      <h2 class="big-txt popup"></h2>
    
      <div class="tag-group popup">
        <h3 class="tag-company popup"></h3>
        <div class="dot-separator"></div>
        <h3 class="tag popup"></h3>
        <div class="dot-separator"></div>
        <h3 class="tag year popup"></h3>
      </div>
    <img src="" alt="card-popup" class="card_image-popup" />

    <div class="bottom-section-popup">
      <p class="card-txt popup"></p>
      <div class="last-part-popup">
        <div class="prog popup">
          <ul>
            <!-- Insert tags with JS -->
          </ul>
        </div>

        <div class="horizontal-separator"></div>
        <div class="buttons-popup">
          <a href="#" class="work-link">
            See Live
            <img src="Images/see-live-icon.svg" alt="arrow">
          </a>
          <a href="#" class="work-link">
            See Source
            <img src="Images/blue-github-icon.png" width="20" height="20" alt="arrow">
          </a>
        </div>
      </div>
    </div>
  </div>`;

  workCardPop.querySelector('.big-txt').innerText = project.bigTxt;
  workCardPop.querySelector('.tag-group > .tag-company').innerText = project.company;
  workCardPop.querySelector('.tag-group > .tag').innerText = project.companyTitle;
  workCardPop.querySelector('.tag-group > .tag.year').innerText = project.year;
  workCardPop.querySelector('.card_image-popup').setAttribute('src', project.image);
  workCardPop.querySelector('p.card-txt').innerText = project.paragraph;

  // Add tags
  const prog = workCardPop.querySelector('.prog ul');
  project.tags.forEach((tag) => {
    const li = document.createElement('li');
    li.innerText = tag;

    prog.appendChild(li);
  });

  // Add links to buttons
  const linkNodes = workCardPop.querySelectorAll('.buttons-popup > a');
  linkNodes.forEach((linkNode) => {
    linkNode.setAttribute('href', project.link);
  });

  const closeTop = workCardPop.querySelector('.close-top');
  closeTop.addEventListener('click', () => {
    workCardPop.style.display = 'none';
    document.body.style.overflow = '';
  });
  const parentPopup = document.querySelector('.pop-up-parent');
  parentPopup.appendChild(workCardPop);
}

function setProjectsSectionChildren() {
  if (projects.length) {
    const cards = projects.map((project, index) => {
      // Create card parent (div)
      const card = document.createElement('div');
      card.classList.add('work-card');
      card.classList.add(`card-${index + 1}`);

      // Create card image (img)
      const img = document.createElement('img');
      img.setAttribute('src', project.image);
      img.classList.add('card_image');
      card.appendChild(img);

      // Create card content (div)
      const content = document.createElement('div');
      content.classList.add('card-content');
      card.appendChild(content);

      // Create big text (h2)
      const bigTxt = document.createElement('h2');
      bigTxt.classList.add('big-txt');
      bigTxt.innerText = project.bigTxt;
      content.appendChild(bigTxt);

      // Create tag group (div)
      const tagGroup = document.createElement('div');
      tagGroup.classList.add('tag-group');
      content.appendChild(tagGroup);

      // Create company tag (h3)
      const companyTag = document.createElement('h3');
      companyTag.classList.add('tag-company');
      companyTag.innerText = project.company;
      tagGroup.appendChild(companyTag);

      // Create tag separator (div)
      const dotSeparator = document.createElement('div');
      dotSeparator.classList.add('dot-separator');

      // Add tag separator to tag group
      tagGroup.appendChild(dotSeparator);

      // Create company title tag (h3)
      const companyTitleTag = document.createElement('h3');
      companyTitleTag.classList.add('tag');
      companyTitleTag.innerText = project.companyTitle;
      tagGroup.appendChild(companyTitleTag);

      // Add tag separator to tag group
      tagGroup.appendChild(dotSeparator.cloneNode());

      // Create year tag (h3)
      const yearTag = document.createElement('h3');
      yearTag.classList.add('tag');
      yearTag.innerText = project.year;
      tagGroup.appendChild(yearTag);

      // Create card description (p)
      const cardTxt = document.createElement('p');
      cardTxt.classList.add('card-txt');
      cardTxt.innerText = project.paragraph;
      content.appendChild(cardTxt);

      // Create prog element (div)
      const prog = document.createElement('div');
      prog.classList.add('prog');
      content.appendChild(prog);

      // Create prog list (ul)
      const progList = document.createElement('ul');
      prog.appendChild(progList);

      // Append tags to prog list (li)
      project.tags.forEach((tag) => {
        const li = document.createElement('li');
        li.innerText = tag;

        progList.appendChild(li);
      });

      // Create project check (div)
      const projectCheck = document.createElement('div');
      projectCheck.classList.add('project-check');
      content.appendChild(projectCheck);

      // Create project button (button)
      const projectButton = document.createElement('button');
      projectButton.innerText = 'See Project';
      projectButton.addEventListener('click', () => {
        popUpDynamic(project);
      });
      projectCheck.appendChild(projectButton);

      return card;
    });

    projectsSection.replaceChildren(...cards);
  }
}

function setProjects() {
  if (isMobile) {
    projects = mobileCards;
  } else {
    projects = desktopCards;
  }
  setProjectsSectionChildren();
}

function handleResize() {
  isMobile = window.innerWidth < 768;
  setProjects();
}

setProjects();

window.addEventListener('resize', handleResize);

const errorMessage = document.querySelector('.error');
const form = document.querySelector('.boxels');
const nameInput = document.querySelector('input#name');
const emailInput = document.querySelector('input#mail');
const messageInput = document.querySelector('textarea#contact-msg');

const formDefaultValues = JSON.parse(localStorage.getItem('Contact'));
if (formDefaultValues != null) {
  nameInput.value = formDefaultValues.name;
  emailInput.value = formDefaultValues.mail;
  messageInput.value = formDefaultValues.message;
}

form.addEventListener('submit', (e) => {
  const email = emailInput.value;

  if (email !== email.toLowerCase()) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'The email should only contain lowercase letters';
    setTimeout(() => { errorMessage.style.display = 'none'; }, 3000);
    e.preventDefault();
    return false;
  }
  form.submit();
  return false;
});

form.addEventListener('input', () => {
  const name = nameInput.value;
  const mail = emailInput.value;
  const message = messageInput.value;
  localStorage.setItem('Contact', JSON.stringify({ name, mail, message }));
});
