const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const loadForm = () => JSON.parse(localStorage.getItem(storageKey)) || {};
const saveForm = () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const populateForm = () => {
  const { email = '', message = '' } = loadForm();
  form.email.value = email;
  form.message.value = message;
};

populateForm();

form.addEventListener('input', () => {
  saveForm();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const { email, message } = loadForm();

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    form.reset();
  }
});
