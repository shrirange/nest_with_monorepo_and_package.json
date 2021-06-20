import { Injectable } from '@nestjs/common';
import prettyprint from 'prettyprint';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!' + prettyprint({
      foo: 'FOO',
      bar: 'BAR',
      emptyArray: [],
      emptyObject: {},
      arrayWithLiteralValues: [
          1,
          2,
          3
      ],
      objectWithLiteralValues: {
          1: 'foo',
          2: 'bar',
          3: 'baz',
      },
      types: [  undefined,  null,  function (a, b) {},  (a, b) => {},   NaN, Infinity,  10.2, true
      ]
  });
  }
}
