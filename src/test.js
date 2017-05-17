import assert from 'assert'
import np from '.'

const obj = {
  a: {
    a2: 'A2'
  },
  z: [{_:'Z0'}, {_:'Z1'}]
}

assert.strictEqual(np(() => globsssal), undefined,
  'swallows undefined at top-level')

assert.strictEqual(np(() => obj.a.b.c.d), undefined,
  'undefined if no default value provided')

assert.strictEqual(np(() => obj.a.b.c.d, 'D'), 'D',
  'default value if provided')

assert.strictEqual(np(() => obj.a.a2), 'A2',
  'normal deep access')

assert.strictEqual(np(() => obj.z[1]._), 'Z1',
  'array access')

assert.strictEqual(np(() => obj.z[2]._), undefined,
  'undefined on non-existent after array access')

assert.throws(() => np(() => { throw new Error() }),
  'throws non-TypeErrors')
