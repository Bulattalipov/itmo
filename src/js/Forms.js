import Inputmask from 'inputmask';
import './utils/validation.js';

export default class Forms {
    constructor(props) {
        const defaultConfig = {
            formSelector: '.js-form',
            submitSelector: '.js-form-submit',
            inputClass: 'input',
            phoneMask: '+7 (999) 999-99-99',
            inputNamePattern: '^[а-яА-ЯA-Za-z ]+$',
            validation: {
                errorClass: 'error',
                successClass: 'success'
            },
            onSuccess: (form, response) => {
                alert('Success');
            },
            onError: (form, response) => {
                alert('Error');
            }
        };
        this.config = Object.assign(defaultConfig, props);

        this.forms = [...document.querySelectorAll(this.config.formSelector)];

        this.forms.forEach(form => {
            this.initPhoneMask(form);
            this.initValidation(form);
            this.initTextAreaAutoSize(form);
            this.setEventListeners(form);
        });
    }

    initPhoneMask(form) {
        const phoneInputs = [...form.querySelectorAll('input[type="tel"]')];

        phoneInputs.forEach(input => {
            const inputMask = new Inputmask({
                mask: this.config.phoneMask,
                showMaskOnHover: false,
                showMaskOnFocus: false
            });
            inputMask.mask(input);
        });
    }

    initValidation(form) {
        $(form).parsley({
            focus: 'none',
            trigger: 'change',
            errorClass: this.config.validation.errorClass,
            successClass: this.config.validation.successClass,
            classHandler: field => {
                return field.$element.closest(`.${this.config.inputClass}`);
            },
            errorsWrapper: `<ul class="${this.config.inputClass}__validation-messages"></ul>`,
            errorTemplate: `<li class="${this.config.inputClass}__validation-message"></li>`
        });

        $(`${this.config.formSelector} input[name="name"]`).attr('data-parsley-pattern', this.config.inputNamePattern);
        $(`${this.config.formSelector} input[type="tel"]`).attr('data-parsley-phone', '');
    }

    initTextAreaAutoSize(form) {
        const textareas = [...form.querySelectorAll(`${this.config.formSelector} textarea`)];
        textareas.forEach(textarea => {
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = 'hidden';
            textarea.addEventListener('input', () => {
                textarea.style.height = 0;
                textarea.style.height = `${textarea.scrollHeight}px`;
            });
        });
    }

    setEventListeners(form) {
        const submitButtons = [...form.querySelectorAll(this.config.submitSelector)];

        form.addEventListener('submit', e => {
            e.preventDefault();
            this._disableSubmitButtons(submitButtons);
            const formData = new FormData(form);
            const url = form.action;

            fetch(url, {
                body: formData,
                method: 'POST'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.config.onSuccess(form, data);
                        this._reset(form);
                    } else {
                        this.config.onError(form, data);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => {
                    this._enableSubmitButtons(submitButtons);
                });
        });
    }

    _disableSubmitButtons(buttons) {
        buttons.forEach(button => {
            button.setAttribute('disabled', true);
        });
    }

    _enableSubmitButtons(buttons) {
        buttons.forEach(button => {
            button.removeAttribute('disabled');
        });
    }

    _reset(form) {
        form.reset();
    }
}