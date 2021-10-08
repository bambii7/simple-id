
const byteHexTable = () => {
  const table = new Array(256).fill(0)
  return table.map((_, i) => (i + 0x100).toString(16).substring(1))
}

const singleton = (fn, ...args) => {
  let tmp
  return () => {
    if (tmp) {
      return tmp
    }
    tmp = fn.apply(...args)
    return tmp
  }
}

const getByteHexTable = singleton(byteHexTable)

const whatwgRNG = (length = 16) => {
  const rnds8 = new Uint8Array(length)
  crypto.getRandomValues(rnds8)
  return rnds8
}

const plainId = (len = 16): string => {
  const table = getByteHexTable()
  return whatwgRNG(len)
    .reduce((str, n) => str + table[n], '')
    .slice(0, len)
}

export default plainId
