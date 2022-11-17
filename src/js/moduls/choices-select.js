import Choices from "choices.js";

export default function choicesSelector(){
    const forms = document.querySelectorAll('.filter form');

    forms.forEach(form => {
        const elements = form.querySelectorAll('.js-choice-select');
        const btnReset = form.querySelector('.filter__footer-reset');

        elements.forEach(elem => {
            const choices = new Choices(elem, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false
            });

            if(btnReset){
                btnReset.addEventListener('click', function(){
                    choices.destroy();
                    choices.init();
                })
            }
        })
    });
}