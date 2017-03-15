/**
 * @license
 * Copyright (c) 2017 Alejandro Gomez Moron
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * It returns an array with all the possibilities for a device.
 * For example, mobile and tablets can be tested in landscape or portrait view.
 * @param device
 * @return JSON with all the possible devices.
 */
function getDevicePossibilities(device) {
    var possibleDevices = {};
    if (!isNull(device) && !isNull(device.tags)) {
        var clonedDevice = JSON.clone(device);
        // if it's a mobile or a tablet, we must add both options
        if (clonedDevice.tags.contains(deviceTypes.mobile) || clonedDevice.tags.contains(deviceTypes.tablet) || clonedDevice.tags.contains(deviceTypes.phablet)) {
            // creating landscape and portrait
            var currentSize = clonedDevice.size;
            var sizes = currentSize.split('x');
            sizes[0] = parseInt(sizes[0]);
            sizes[1] = parseInt(sizes[1]);
            var newDevice = JSON.clone(device);
            // swapping the sizes
            newDevice.size = sizes[1] + 'x' + sizes[0];
            // if it's landscape
            if (sizes[0] > sizes [1]) {
                clonedDevice.deviceName += ' - landscape';
                newDevice.deviceName += ' - portrait';
                clonedDevice.tags = getTags(clonedDevice);
                newDevice.tags = getTags(newDevice);
            } else {
                clonedDevice.deviceName += ' - portrait';
                newDevice.deviceName += ' - landscape';
                clonedDevice.tags = getTags(clonedDevice);
                newDevice.tags = getTags(newDevice);
            }
            possibleDevices[clonedDevice.deviceName] = clonedDevice;;
            possibleDevices[newDevice.deviceName] = newDevice;
        } else {
            // we just the current device
            possibleDevices[clonedDevice.deviceName] = clonedDevice;
        }
    }
    return possibleDevices;
}

/**
 * Function to know if it's null.
 * @param element to bhe checked.
 * @returns {boolean} true if null and false otherwise.
 */
function isNull(element) {
    var isNull = true;
    if (typeof element != 'undefied' && element !== undefined && element != null) {
        isNull = false;
    }
    return isNull;
}

/**************************************/
/******** Prototype overriding ********/
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

/**************************************/
/*********** Clone function ***********/
if (typeof JSON.clone !== "function") {
    JSON.clone = function(obj) {
        return JSON.parse(JSON.stringify(obj));
    };
}

/**
 * It returns the correct tags for a given device depending on its size.
 */
function getTags(device) {
    var tags = new Array();
    var currentSize = device.size;
    var sizes = currentSize.split('x');
    sizes[0] = parseInt(sizes[0]);
    sizes[1] = parseInt(sizes[1]);
    var width = sizes[0];
    // correcting the tag depending on the width
    if (device.tags.contains(deviceTypes.mobile)) {
        if (width <= deviceMaxWidths.mobile) {
            tags.push(deviceTypes.mobile);
        } else if (width <= deviceMaxWidths.phablet) {
            tags.push(deviceTypes.phablet);
        } else if (width <= deviceMaxWidths.tablet) {
            tags.push(deviceTypes.tablet);
        } else {
            tags.push(deviceTypes.desktop);
        }
    } else if (device.tags.contains(deviceTypes.phablet)) {
        if (width <= deviceMaxWidths.phablet) {
            tags.push(deviceTypes.phablet);
        } else if (width <= deviceMaxWidths.tablet) {
            tags.push(deviceTypes.tablet);
        } else {
            tags.push(deviceTypes.desktop);
        }
    } else if (device.tags.contains(deviceTypes.tablet)) {
        if (width <= deviceMaxWidths.tablet) {
            tags.push(deviceTypes.tablet);
        } else {
            tags.push(deviceTypes.desktop);
        }
    } else {
        tags.push(deviceTypes.desktop);
    }

    // adding portrait/landscape if needed
    if (tags.contains(deviceTypes.mobile) || tags.contains(deviceTypes.tablet) || tags.contains(deviceTypes.phablet)) {
        if (sizes[0] < sizes[1]) {
            tags.push(tags[0] + '-portrait');
        } else {
            tags.push(tags[0] + '-landscape');
        }
    }
    return tags;
}
/**
 * @license
 * Copyright (c) 2017 Alejandro Gomez Moron
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var config = {
    baseURL: ""
};

/**
 * Devices to test. Use the defined browsers defined in utils/browsers.js
 */
var devicesToTest = devices; // here we define to test in all the defined devices
/**
 * @license
 * Copyright (c) 2017 Alejandro Gomez Moron
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*** Overriding Galen Framework forAll function ***/
var galenFrameworkForAll = forAll;
forAll = function(devices, fn) {
    var devicesToTest = {};
    for (var currentDeviceName in devices) {
        // getting all possibilities for the devices
        var possibleDevices = getDevicePossibilities(devices[currentDeviceName]);
        for (var possibleDeviceName in possibleDevices) {
            devicesToTest[possibleDeviceName] = possibleDevices[possibleDeviceName];
        }
    }
    galenFrameworkForAll(devicesToTest, fn);
}