import { Coord } from "../../interfaces"

type Data = { [key: string]: string }

const COLOUR_LABELS: Data = {
  B: 'black',
  W: 'white'
}

const DATA_LABELS: Data = {
  PB: 'playerBlack',
  PW: 'playerWhite',
  BT: 'blackTeam',
  WT: 'whiteTeam',
  BR: 'blackRank',
  WR: 'whiteRank',
  EV: 'event',
  RO: 'game',
  DT: 'date',
  PC: 'location',
  SZ: 'boardSize',
  TM: 'time',
  OT: 'overtime',
  RE: 'result'
}

export function readSgf(sgf: string) {
  const parts = sgf.replace(/(\r\n|\n|\r)/gm, '')
                   .split(';')
                   .map(part => part.trim())

  console.log('Parts:', parts)  // TODO: Remove console log.

  let data = {}

  parts.forEach(part => {
    const chunks = getChunks(part)

    data = {
      ...getData(chunks),
      ...data
    }

    if (chunks.includes('AB')) {
      data = {
        addBlack: getAddStones(chunks, 'AB'),
        ...data
      }
    }

    if (chunks.includes('AW')) {
      data = {
        addWhite: getAddStones(chunks, 'AW'),
        ...data
      }
    }
  })

  data = {
    moves: extractMoveTree(sgf),
    ...data
  }

  console.log(data) // TODO: Remove console log.

  return data
}

function extractMoveTree(sgf: string) {

}

function getChunks(part: string): string[] {
  const substrings = part.split(/\[|\]/gm)
  const chunks: string[] = []

  substrings.forEach(substring => {
    if (substring) {
      chunks.push(substring)
    }
  })

  return chunks
}

function getData(chunks: string[]): Data {
  let data = {}

  let i = 0
  const length = chunks.length
  while (i < length) {
    if (i >= length - 1) break

    const property = chunks[i]
    const value = chunks[i + 1]

    if (property in DATA_LABELS) {
      data = {
        [DATA_LABELS[property]]: value,
        ...data
      }
    }

    i += 2
  }

  return data
}

function getAddStones(chunks: string[], property: string): Coord[] {
  let coords: Coord[] = []

  const index = chunks.indexOf(property)

  let i = index + 1
  while (i < chunks.length) {
    const value = chunks[i]

    if (!isPoint(value)) break

    coords.push(getCoord(value))

    i += 1
  }

  return coords
}

function getCoord(value: string): Coord {
  const x = value.charCodeAt(0) - 97
  const y = value.charCodeAt(1) - 97

  return { x, y }
}

function isPoint(item: string): Boolean {
  if (item.length != 2) return false

  const code = item.charCodeAt(0)

  if (code >= 97 && code <= 122) return true

  return false
}
