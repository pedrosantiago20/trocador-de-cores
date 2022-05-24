document.body.setAttribute('data-cor', 'um')

var button = document.querySelector('.trocar')

const cores = {
  'um': 'dois',
  'tres': 'um',
  'dois': 'tres',
}

if (button) {
  button.addEventListener('click', event => {
    event.preventDefault()
    const currentcor = document.body.dataset.cor
    document.body.setAttribute('data-cor', cores[currentcor] || 'um')
  })
}