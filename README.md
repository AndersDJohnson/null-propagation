# null-propagation
> Emulate null propagation operator.

Like [Facebook's `idx`][idx] and [Lodash's `get`][get],
but even more terse than the former, and real syntax unlike the latter.

The use of real syntax enables static analysis tools.


```js
import np from 'null-propagation'

const obj = {
  a: {
    b: 'B2'
  },
  z: []
}
````

For undefined values, returns undefined:
```js
const c = np(() => obj.a.c)
```

With a default as a 2nd argument, returns that value:
```js
const c2 = np(() => obj.a.c, 'C2')
```

For defined values, returns that value:
```js
const b = np(() => obj.a.b)
```

Works with arrays, returns undefined:
```js
const z = np(() => obj.z[0].y)
```

Throws other errors:
```js
np(() => { throw new Error('some error') })
```

[idx]: https://github.com/facebookincubator/idx
[get]: https://lodash.com/docs/4.17.4#get
