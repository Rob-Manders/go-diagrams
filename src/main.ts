import './assets/style.css'

import { readSgf } from './modules/sgf'
import { Goban } from './modules/goban'
import { createCanvas } from './util/createCanvas'
import { Stone, Symbol } from './types'

const canvasDimensions = 700
const canvas = (createCanvas('canvas', canvasDimensions))

const goban = new Goban(canvas, 9)

const sgfMultilineInput = `
(;FF[4]
CA[UTF-8]
GM[1]
DT[2024-04-22]
PC[OGS: https://online-go.com/game/63622896]
GN[Friendly Match]
PB[Rob Manders]
PW[千盛云汉]
BR[17k]
WR[12k]
TM[600]OT[5x30 byo-yomi]
RE[W+60.5]
SZ[19]
KM[0.5]
RU[Japanese]
HA[5]
AB[jj][dd][pp][pd][dp]
;W[cn]
(;B[fq]
(;W[dj]
(;B[cf]
(;W[nq]
)))))
`

readSgf(sgfMultilineInput)

const b = {
  stone: Stone.BLACK,
  ghost: false
}

const w = {
  stone: Stone.WHITE,
  ghost: false
}

const x = {
  stone: Stone.NONE,
  ghost: false
}

const c = {
  stone: Stone.NONE,
  ghost: false,
  symbol: Symbol.CIRCLE
}

const s = {
  stone: Stone.NONE,
  ghost: false,
  symbol: Symbol.SQUARE
}

const t = {
  stone: Stone.BLACK,
  ghost: false,
  symbol: Symbol.TRIANGLE
}

const l = {
  stone: Stone.BLACK,
  ghost: false,
  label: 'abcde'
}

const diagram = {
  name: 'Test Diagram',
  position: [
    [x, x, x, x, x, x, x, x, x],
    [x, b, x, x, x, x, x, x, x],
    [x, x, b, b, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, c, s, t, x, x],
    [x, x, x, x, x, x, w, x, x],
    [x, x, l, x, w, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x, x],
  ]
}

goban.refresh(diagram)

const mousePositionDisplay = document.createElement('p')
document.body.appendChild(mousePositionDisplay)

canvas.addEventListener('mousemove', event => {
  const position = goban.mousePosition(event)

  mousePositionDisplay.innerText = `${position.mouseX} x ${position.mouseY}`
})
