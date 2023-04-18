// CYCLE TEXT ON MISSION SECTION
var textCycle = document.querySelector('.text-cycle');
var textArray = textCycle.querySelectorAll('.text');
var index = 0;

function cycleText() {
  // Hide the current text element
  textArray[index].classList.remove('active');

  // Update the index and show the next text element
  index = (index + 1) % textArray.length;
  textArray[index].classList.add('active');
}

// Start the cycle after a delay
setTimeout(function() {
  textArray[0].classList.add('active');
  setInterval(cycleText, 3000);
}, 10);

// SMOOTH SCROLL AND SCROLL OFFSET
// get the height of the sticky nav bar
const navbarHeight = document.querySelector('header').offsetHeight;

// add an event listener to all nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    // prevent the default behavior of the link
    event.preventDefault();

    // get the href attribute of the link
    const href = link.getAttribute('href');

    // get the section element that corresponds to the link
    const section = document.querySelector(href);

    // calculate the offset of the section element
    const sectionOffset = section.offsetTop - navbarHeight;

    // scroll to the section element with a smooth animation
    window.scrollTo({
      top: sectionOffset,
      behavior: 'smooth'
    });
  });
});