import Choices from "choices.js";

export default function choicesSelector(){
    const forms = document.querySelectorAll('.filter form');

    forms.forEach(form => {
        const elements = form.querySelectorAll('.js-choice-select');
        const btnReset = form.querySelector('.filter__footer-reset');

        elements.forEach(elem => {
            const select = new Choices(elem, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false,
                placeholder: true,
                placeholderValue: "jghreguri"
            });

            select.passedElement.element.addEventListener(
                'change',
                function(event) {
                    elem.closest(".filter__from-select-box").classList.add("is-active");
                },
                false,
            );

            if(btnReset){
                btnReset.addEventListener('click', function(){
                    select.destroy();
                    select.init();
                })
            }
        })
    });

    // const choicesItems = elem.querySelectorAll('.choices__item');

    // choicesItems.forEach(item => {
    //     console.log(item);
    // })
}