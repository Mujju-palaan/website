import { useState } from 'react'
import CardThanks from './CardThanks'
import CardForm from './CardForm'
import CardCredit from './CardCredit'
import './styles/App.css'

function CC () {
	const [formData, setFormData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null })
	const [validate, setValidate] = useState(false)

	const animateSlider = (validate) => {
		const axis = window.matchMedia('(max-width: 750px)').matches ? 'Y' : 'X'
		document.querySelector('.cardOverflow > div').style.transform = `translate${axis}(50${axis === 'Y' ? 'vh' : 'vw'})`

		document.body.classList.add('body-slider')

		setTimeout(() => {
			setValidate(validate)
			document.body.classList.remove('body-slider')
			document.querySelector('.cardOverflow > div').style.transform = 'translate(0)'
		}, 500)
	}

	return (
		<>
		<div className='page'>
			<CardCredit formData={formData} />
			<main className='cardOverflow' >
				<div>
					{validate
						? <CardThanks setFormData={setFormData} animateSlider={animateSlider} />
						: <CardForm setFormData={setFormData} animateSlider={animateSlider} formData={formData} />
					}
				</div>
			</main>
			
		</div>
		</>
	)
}
export default CC
