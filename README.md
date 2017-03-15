# galen-framework-handler

Handler to work with Galen Framework adding some extra funcitonalities by decorating the *galenFrameworkForAll* function to be able to create all the possibilities for the defined devices.

The handler also provides a variable called 

[![Build Status](https://travis-ci.org/agomezmoron/angular-promise-timeout-decorator.svg?branch=master)](https://travis-ci.org/agomezmoron/angular-promise-timeout-decorator)<br />
[![NPM][angular-promise-timeout-decorator-icon]][angular-promise-timeout-decorator-url]

## Install

Installing using [Bower](http://bower.io):

`bower install angular-promise-timeout-decorator --save`

Installing using [NPM](https://www.npmjs.com):

`npm install  angular-promise-timeout-decorator  --save`

## Examples

You can use it directly adding the dependency in your current module:

 `angular.module('MyModule', ['angular-promise-timeout-decorator'])`

 Also you can parametrize the library defining:

* **timeout:** Number of seconds as maximum timeout (by default, 60 seconds).
* **timeoutFunction:** Additional function to be executed after exceeding the timeout. After executing that function, the promise will be rejected.
* **timeoutMessage:** Personalized message for the exceed timeout promise. By defaul the message is: "Promise timeout exceed!"
* **throwException:** Enables or disable throwing an Exception to the $exceptionHandler. By default the values is true.

Example:

```
/* ngInject */
function config(ngQTimeoutDecoratorConfig) {
  ngQTimeoutDecoratorConfig.timeout = 120; // 120 seconds
  ngQTimeoutDecoratorConfig.timeoutFunction = function () {
    console.log('Hello world!');
  }
  ngQTimeoutDecoratorConfig.timeoutMessage = 'This is my custom message!';
  ngQTimeoutDecoratorConfig.throwException = true;
}
```

## License

The MIT License (MIT)

Copyright (c) 2016 Alejandro Gómez Morón

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[angular-promise-timeout-decorator-icon]: https://nodei.co/npm/angular-promise-timeout-decorator.png
[angular-promise-timeout-decorator-url]: https://npmjs.org/package/angular-promise-timeout-decorator
