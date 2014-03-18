# jquery.ajax-gist.js

This jQuery plugin allows applications to embed Gists into those dynamically-created HTML pages, such as those created by jQuery, Backbone.js or Angular.js applications. (The usual way of embeding Gists into a static web page is to use an HTML `script` tag, which doesn't work for dynamically-created pages.)

### Usage

Load the plugin file normally via a `script` tag. To embed a gist, add a `div` with the `data-gist` attribute set to the URL used to embed the gist:

    <div data-gist="https://gist.github.com/9577835.js"></div>

Then call the plugin with the right selector for your gist-loading `div` elements:

    $('div[data-gist]').ajaxgist();

This will dynamically load the gists via ajax calls, update the DOM with the gists' markup, and add GitHub's gist stylesheet to the `head` tag. (The plugin only loads the gist stylesheet once for application session.)

You can also load just a single file from a multi-file gist by adding the `?file=` query parameter to the URL:

    <div data-gist="https://gist.github.com/9577835.js?file=1.js"></div>

### Setup for using the plugin

If you just want to use the plugin (and not develop the plugin itself), just download the latest jquery.ajax-gist.js or jquery.ajax-gist.min.js file and include it in your HTML file via a `script` tag.

### Setup for developing the plugin

To develop this plugin:

Clone or fork & clone this project, install [node.js](http://nodejs.org/) for the build utilities, then run these commands for **one-time setup:**

    npm install -g grunt-cli
    npm install

Then run `grunt` on the command line to create the plugin's `.min.js` file and run the unit tests.

### License

MIT License. See the [license file](LICENSE.txt) for details.
