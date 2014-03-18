module('ajax-gist', {
});

// create .json version of .js url:
//      input:  'https://gist.github.com/mstapp/9577835.js?file=1.js'
//      output: 'https://gist.github.com/mstapp/9577835.json?file=1.js'
function jsonUrl(url) {
    var segs = url.split('?'),
        newUrl;

    segs[0] = segs[0] + 'on';  // .js -> .json
    newUrl = (segs.length === 1) ? segs[0] : segs.join('?');
    return newUrl;
}

test("simple gist URL", function () {
    // Stub out ajax call
    var jqueryStub = sinon.stub(jQuery, "ajax"),
        baseUrl = 'https://gist.github.com/mstapp/9577835.js',
        newUrl = jsonUrl(baseUrl);

    var $el = $('<div></div>').append('<div data-gist="' + baseUrl + '"></div>');
    $el.find('div[data-gist]').ajaxgist();

    ok(jqueryStub.calledOnce, "calls jquery");
    var args = jqueryStub.getCall(0).args[0];
    ok(args.type === 'get', "makes GET request");
    ok(args.url.indexOf(newUrl) === 0, "Calls URL w/ .json suffix");

    jqueryStub.restore(); // clean up: un-stub ajax
});

test("gist URL with 'file=' query param", function () {
    // Stub out ajax call
    var jqueryStub = sinon.stub(jQuery, "ajax"),
        baseUrl = 'https://gist.github.com/mstapp/9577835.js?file=1.js',
        newUrl = jsonUrl(baseUrl);

    var $el = $('<div></div>').append('<div data-gist="' + baseUrl + '"></div>');
    $el.find('div[data-gist]').ajaxgist();

    ok(jqueryStub.calledOnce, "calls jquery");
    var args = jqueryStub.getCall(0).args[0];
    ok(args.type === 'get', "makes GET request");
    ok(args.url.indexOf(newUrl) === 0, "Calls URL w/ .json suffix");

    jqueryStub.restore(); // clean up: un-stub ajax
});

