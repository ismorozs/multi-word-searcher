# Multi word searcher
This repository contains source code for [Firefox browser extension](https://addons.mozilla.org/en-US/firefox/addon/multi-word-searcher/).

For Chromium-based browsers (Chromium, Chrome, Opera, etc)  installation can be done manually with such steps:
1. Download the repository
2. Navigate to ``chrome://extensions`` in your browser
3. Click ``Load unpacked`` button and select ``./extension`` folder of the downloaded repository in the opened window

## Developing and reviewing
To start developing or recreate the current extension build run
```sh
npm install
```
and then
```sh
npm start
```
This will create background and content scripts in the ``./extension`` folder, which contains actual files of the extension.
