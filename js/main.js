const diceBtn = document.querySelector('.advice-box__dice')

async function getAdvice() {
	const response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
		.then(response => response.json())
		.then(data => {
			document.querySelector('.advice-box__heading').innerText = 'advice #' + data.slip.id
			document.querySelector('.advice-box__text').innerText = data.slip.advice
		})
		.catch(error => {
			console.log('ERROR', error)
		})
}

function animateDice() {
	document.querySelector('.advice-box__dice--icon').classList.add('animate')

	setTimeout(function () {
		document.querySelector('.advice-box__dice--icon').classList.remove('animate')
	}, 2000)
}

diceBtn.addEventListener('click', e => {
	setTimeout(function () {
		getAdvice()
	}, 1500)
	animateDice()
})

window.onload = getAdvice()
