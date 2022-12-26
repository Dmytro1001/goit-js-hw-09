import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('click', onStart)


function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    let timeId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    res({ position, delay });
  } else {
    // Reject
    rej({ position, delay });
  }
    }, delay)
  }) 
  return promise;
}

function onStart(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  
  const formData = {
    delay: formEl.delay.value,
    step: formEl.step.value,
    amount: formEl.amount.value,
  };

  for (let i = 0; i < formData.amount; i += 1) {
    createPromise(i + 1, Number(formData.delay) + i * Number(formData.step))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}