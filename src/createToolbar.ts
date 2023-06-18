import { Mode, StoneColour } from './types'

export function createToolbar(stoneColour: StoneColour, mode: Mode) {
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button-container')
  document.body.appendChild(buttonContainer)

  const toggleColourButton = document.createElement('button')
  toggleColourButton.setAttribute('id', 'toggleColourButton')
  toggleColourButton.classList.add('button')
  toggleColourButton.innerText = stoneColour.toUpperCase()
  buttonContainer.appendChild(toggleColourButton)

  const toggleModeButton = document.createElement('button')
  toggleModeButton.setAttribute('id', 'toggleModeButton')
  toggleModeButton.classList.add('button')
  toggleModeButton.innerText = mode.toUpperCase()
  buttonContainer.appendChild(toggleModeButton)

  const addPositionButton = document.createElement('button')
  addPositionButton.setAttribute('id', 'addPositionButton')
  addPositionButton.classList.add('button')
  addPositionButton.innerText = 'ADD POSITION'
  buttonContainer.appendChild(addPositionButton)

  const deletePositionButton = document.createElement('button')
  deletePositionButton.setAttribute('id', 'deletePositionButton')
  deletePositionButton.classList.add('button')
  deletePositionButton.innerText = 'DELETE POSITION'
  buttonContainer.appendChild(deletePositionButton)

  const previousPositionButton = document.createElement('button')
  previousPositionButton.setAttribute('id', 'previousPositionButton')
  previousPositionButton.classList.add('button')
  previousPositionButton.innerText = '<< POSITION'
  buttonContainer.appendChild(previousPositionButton)

  const nextPositionButton = document.createElement('button')
  nextPositionButton.setAttribute('id', 'nextPositionButton')
  nextPositionButton.classList.add('button')
  nextPositionButton.innerText = 'POSITION >>'
  buttonContainer.appendChild(nextPositionButton)

  return {
    toggleColourButton,
    toggleModeButton,
    addPositionButton,
    deletePositionButton,
    previousPositionButton,
    nextPositionButton
  }
}
