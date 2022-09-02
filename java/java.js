const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e){
 e.preventDefault();
 alert('Form Submitted');
 console.log('cc', creditCardInput.value);
 console.log('terms', termsCheckbox.checked);
 console.log('veggieSelect', veggieSelect.value);

})
const formData ={};
creditCardInput.addEventListener('input', (e) => {
    console.log('CC Changed', e);
    formData['cc'] =e.target.value;
});
termsCheckbox.addEventListener('input', (e) => {
    console.log('termsCheckbox', e);
    formData['terms'] = e.target.checked;
});
veggieSelect.addEventListener('input', (e) => {
    console.log('veggieSelect', e);
    formData['veggieSelect'] =e.target.value;
});

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('input', ({target}) => {
     const {name, type, value, checked} = target;   
        formData[name] = type === 'checkbox' ? checked : value;
        console.log('formData');
    
    });
}