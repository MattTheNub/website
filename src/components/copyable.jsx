import React from 'react'
import '../styles/copyable.scss'

const Copyable = ({ children }) => (
	<div className="copyable">
		<span className="copyable-text">{children}</span>
		<button className="copyable-button" onClick={copy}>
			Copy
		</button>
	</div>
)

function copy(event) {
	const text = event.target.parentElement.children[0].textContent
	const element = document.createElement('input')
	element.type = 'text'
	element.value = text
	element.style.opacity = 0
	document.body.appendChild(element)

	element.select()
	document.execCommand('copy')

	element.remove()
}

export default Copyable
