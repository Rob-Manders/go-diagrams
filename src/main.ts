import './assets/style.css'

import { readSgf } from './modules/sgf'
import { Goban } from './modules/goban'
import { createCanvas } from './util/createCanvas'

const board =  {
    size: 13
  }

const canvasDimensions = 700
const canvas = (createCanvas('canvas', canvasDimensions))

const goban = new Goban(canvas, board)

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
