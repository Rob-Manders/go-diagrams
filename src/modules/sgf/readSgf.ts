export function readSgf(sgf: string) {
  const str = sgf.replace('\n', '').replace('(;', '')
  const arr = str.split(']')

  let game = parseData(arr)

  return game
}

function parseData(properties: string[]) {
  let game = {}

  properties.forEach(property => {
    const code = property.slice(0, 1)
    const content = property.slice(3)

    switch (code) {
      case 'BR':
        game = { blackRank: content, ...game }
        break
      case 'DT':
        game = { date: content, ...game }
        break
      case 'GN':
        game = { name: content, ...game }
        break
      case 'HA':
        game = { handicap: Number(content), ...game }
        break
      case 'KM':
        game = { komi: Number(content), ...game }
        break
      case 'PB':
        game = { playerBlack: content, ...game }
        break
      case 'PW':
        game = { playerWhite: content, ...game }
        break
      case 'RE':
        game = { result: parseResult(content), ...game }
        break
      case 'RU':
        game = { rules: content, ...game }
        break
      case 'SZ':
        game = { size: Number(content), ...game }
        break
      case 'TM':
        game = { timeLimit: Number(content), ...game }
        break
      case 'WR':
        game = { whiteRank: content, ...game }
        break
      default:
        break
    }
  })

  return game
}

function parseResult(content: string): { winner: string; points: number } {
  const data = content.split('+')
  const winner = data[0] === 'B' ? 'Black' : 'White'
  const points = Number(data[1])

  return { winner, points }
}