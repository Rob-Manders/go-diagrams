import { Mode, StoneColour } from './types'

export function createToolbar(stoneColour: StoneColour, mode: Mode) {
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button-container')
  document.body.appendChild(buttonContainer)

  const toggleColourButton = document.createElement('button')
  toggleColourButton.setAttribute('id', 'toggleColourButton')
  toggleColourButton.innerText = stoneColour.toUpperCase()
  buttonContainer.appendChild(toggleColourButton)

  const toggleModeButton = document.createElement('button')
  toggleModeButton.setAttribute('id', 'toggleModeButton')
  toggleModeButton.innerText = mode.toUpperCase()
  buttonContainer.appendChild(toggleModeButton)

  return { toggleColourButton, toggleModeButton }
}
