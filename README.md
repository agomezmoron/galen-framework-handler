# galen-framework-handler

Handler to work with Galen Framework adding some extra funcitonalities by decorating the *galenFrameworkForAll* function to be able to create all the possibilities for the defined devices.

The handler also provides a variable called 

[![NPM][galen-framework-handler-icon]][galen-framework-handler-url]

## Install

First of all you need to install Galen Framework globally:

`sudo npm install -g galenframework-cli`

Then, install the handler using [NPM](https://www.npmjs.com):

`npm install  galen-framework-handler  --save`

## Why this Galen Framework Handler

This handler provides a decoration of some Galen Framework functions like *forAll* one.
 
It also provides a set of pre-configured devices with the breakpoints based on [Bootstrap's](http://getbootstrap.com/) breakpoints.

* **mobile:** 768px
* **phablet:** 959px
* **tablet:** 959px
* **desktop:** 1200px

Based on those types, we have a set of defined devices in the [browsers.js file](src/browsers.js), declared in a variable called *devices*.

Also two more global variables are defined:

* **config**: JSON with all the configuration needed for your tests. (ex: config.baseURL = "http://google.com").
* **devicesToTest:** Here we define all the devices to be tested. By default, *devicesToTest = devices*.

## Example

If in your project you have the library loaded, using it it's very easy:


## License

The MIT License (MIT)

Copyright (c) 2017 Alejandro Gómez Morón

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

[galen-framework-handler-icon]: https://nodei.co/npm/galen-framework-handler.png
[galen-framework-handler-url]: https://npmjs.org/package/galen-framework-handler
