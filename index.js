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

// Popup  and work section
const works = [
  {
    title: 'Tonic',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'Images/work-card-replace-tonic.svg',
    link: 'https://www.google.com',
  },
  {
    title: 'Mutli-Post Stories',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'Images/work-card-art-prog.svg',
    link: 'https://www.google.com',
  },
  {
    title: 'Facebook 360',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'Images/work-card-facebook.svg',
    link: 'https://www.google.com',
  },
  {
    title: 'Uber Navigation',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'Images/work-card-uber.svg',
    link: 'https://www.google.com',
  },
];

// Add work section
function addWorkSection() {
  const workSection = document.getElementsByClassName('all-cards')[0];
  works.forEach((work) => {
    const workElement = document.createElement('div');
    workElement.classList.add('work');
    workElement.innerHTML = `
    <div class="work-card card-1">
    <img src="${work.image}" alt="${work.title}" class="card_image">
      <div class="card-content">
     <h2 class="big-txt">${work.title}</h2>
     <h2 class="replace-tonic">${work.title}</h2>
     <div class="tag-group">
       <h3 class="tag-Canopy">${work.company}</h3>
       <h3 class="replace-canopy">${work.company}</h3>
       <div class="dot-separator"></div>
       <h3 class="tag">${work.companyTitle}</h3>
       <h3 class="replace-tag">${work.companyTitle}</h3>
       <div class="dot-separator"></div>
       <h3 class="tag-year">${work.year}</h3>
       <h3 class="other-year">${work.year}</h3> </div>
       <p class="card-txt">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
       <p class="replace-p">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p>
 
       <div class="prog">
         <ul>
          <li>html</li>
          <li class="add-ruby">Ruby on rails</li>
           <li>css</li> 
           <li>javaScript</li>
         </ul>
         </div>
         <div class="project-check"> <button type="button">See Project</button> </div>
       </div>
</div>
    `;
    workSection.appendChild(workElement);
  });
}

addWorkSection();