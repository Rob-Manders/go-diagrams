import './assets/style.css'

import { readSgf } from './modules/sgf'
import { createCanvas, drawLines, drawStarPoints } from './modules/canvas'

const board =  {
    size: 13
  }

const canvasDimensions = 700
const canvas = createCanvas('canvas', canvasDimensions)
const canvasContext = canvas.getContext('2d')!

canvasContext.clearRect(0, 0, canvasDimensions, canvasDimensions)

drawLines(canvasContext, canvasDimensions, board)
drawStarPoints(canvasContext, canvasDimensions, board)

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
