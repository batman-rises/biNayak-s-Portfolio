const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

///ayoooo working??
function pageTransitions() {
    /*BUTTON CLICK ACTIVE CLASS...also add className to ur notes*/
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            /*next condition important*/
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }
    //sections active class aaSSS
    /*this code snippet is likely used to handle clicks on a set of buttons (secBtns) and mark the clicked button as active while deselecting any previously selected buttons.*/
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the bts
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hiding other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');


        }
    })



    //TOGGLE THEME
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}
/* correct :This code will first check if there's any element with the class .active-btn. If there is, it will remove the class from that element. Then, it adds the class active-btn to the clicked button (this).
not correct: currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');: Removes the class .active-btn from the first element in the currentBtn collection by replacing it with an empty string. This effectively removes the "active" state from the previously active button.

this.className += 'active-btn';: Adds the class .active-btn to the button that was clicked (this). This sets the "active" state to the clicked button.*/
pageTransitions();