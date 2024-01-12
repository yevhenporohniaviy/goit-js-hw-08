import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');

let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || {
  email: '',
  message: '',
};

emailField.value = feedbackFormState.email;
messageField.value = feedbackFormState.message;

function updateEmail(e) {
  feedbackFormState = {
    ...feedbackFormState,
    email: e.target.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function udpateMessage(e) {
  feedbackFormState = {
    ...feedbackFormState,
    message: e.target.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

emailField.addEventListener('input', throttle(updateEmail, 1000));
messageField.addEventListener('input', throttle(udpateMessage, 1000));
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(feedbackFormState);
  emailField.value = '';
  messageField.value = '';
  localStorage.clear();
});
