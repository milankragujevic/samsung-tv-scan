# samsung-tv-scan
Scans your local network for Samsung 2015 model TVs

## Installation

`npm install --save samsung-tv-scan`

## Usage

See test.js in the source package.

First parameter is the callback function, which receives two arguments (`callback(err, devices)`), second argument is a boolean that specifies whether to stop when one device is found or to iterate over the whole network.

The closer your device is to the beginning of the IP list, the faster it will be found.

*Note: This doesn't use SSDP, this is specific to Samsung TVs. *

## Sample output


    { 
      id: 'uuid:9c80a056-2cc9-42df-ac32-98efcba5e56e',
      model: 'UE32J5500',
      network_type: 'wired',
      wifi_ssid: '',
      ip: '10.0.0.15',
      name: '[TV] UE32J5502',
      display_resolution: '1920x1080'
    }


The UUID has been replaced with a dummy one in the example.