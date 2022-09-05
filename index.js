function toggleNav() {
  const hamburgerElement = document.getElementById('Hamburger-logo');
  const closeElement = document.getElementsByClassName('close-btn')[0];
  const mobileLinksElement = document.getElementsByClassName('mob-menu')[0];
  hamburgerElement.classList.toggle('isHidden');
  document.getElementsByClassName('Left-Logo')[0].classList.toggle('isHidden');
  closeElement.classList.toggle('isHidden');
  mobileLinksElement.classList.toggle('isHidden');
}

document.getElementById('Hamburger-logo').addEventListener('click', toggleNav);
document.getElementsByClassName('close-btn')[0].addEventListener('click', toggleNav);
document.getElementsByClassName('mob-menu')[0].addEventListener('click', toggleNav);