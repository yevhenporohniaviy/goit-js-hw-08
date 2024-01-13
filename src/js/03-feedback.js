import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const { email: emailField, message: messageField } = form
const defaultData = {
  email: '',
  message: ''
}
let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || defaultData;

emailField.value = feedbackFormState.email
messageField.value = feedbackFormState.message

function updateField(e) {
  feedbackFormState[e.target.name] = e.target.value.trim()

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

form.addEventListener('input', throttle(updateField, 1000));

form.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message} = feedbackFormState

  if (email !== '' && message !== '') {
    form.reset()
    console.log(feedbackFormState)
    feedbackFormState = defaultData
    localStorage.removeItem('feedback-form-state');
  }
});
