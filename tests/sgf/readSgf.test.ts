import { assert, expect, test } from 'vitest'
import { readSgf } from '../../src/modules/sgf'
import { Game } from '../../src/interfaces'

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

const sgfSingleLineInput = '(;FF[4]CA[UTF-8]GM[1]DT[2024-04-22]PC[OGS: https://online-go.com/game/63622896]GN[Friendly Match]PB[Rob Manders]PW[千盛云汉]BR[17k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+60.5]SZ[19]KM[0.5]RU[Japanese]HA[5]AB[jj][dd][pp][pd][dp];W[cn](;B[fq](;W[dj](;B[cf](;W[nq])))))'

const gameOutput: Game = {
  date: '2024-04-22',
  place: 'OGS: https://online-go.com/game/63622896',
  name: 'Friendly Match',
  playerBlack: 'Rob Manders',
  playerWhite: '千盛云汉',
  blackRank: '17k',
  whiteRank: '12k',
  timeLimit: 600,
  overtime: 'TM[600]OT[',
  result: { winner: 'White', points: 60.5 },
  boardSize: 19,
  komi: 0.5,
  rules: 'Japanese',
  handicap: 5,
  addBlack: [
    { x: 9, y: 9 },
    { x: 3, y: 3 },
    { x: 15, y: 15 },
    { x: 15, y: 3 },
    { x: 3, y: 15 }
  ],
  moves: [
    { colour: 'black', x: 2, y: 13 },
    { colour: 'black', x: 5, y: 16 },
    { colour: 'black', x: 4, y: 9 },
    { colour: 'black', x: 2, y: 5 },
    { colour: 'black', x: 13, y: 16 },
  ]
}

test('Outputs game from SGF multiline string', () => {
  const actualGame = readSgf(sgfMultilineInput)
  const expectedGame = gameOutput

  expect(actualGame).toStrictEqual(expectedGame)
})

test('Outputs game from SGF single line string', () => {
  const actualGame = readSgf(sgfSingleLineInput)
  const expectedGame = gameOutput

  expect(actualGame).toStrictEqual(expectedGame)
})