// 根据传入参数拼装url，并跳转到该url
exports.goTo = function(params) {
    var oldParams = getUrlParameter();
    var newParams = _.extend({}, oldParams, params);

    location.href = '/search?' + $.param(newParams);
}

exports.assert = function(value, msg) {
    if (!value) {
        exports.warn(msg);
    }
}

exports.assertEquals = function(value, anotherValue, msg) {
    if (value !== anotherValue) {
        exports.warn(msg);   
    }
}

exports.warn = function(msg) {
    window.alert(msg);
}

exports.compileTpl = function(tpl, data) {
    return tpl.replace(/\{(\w+)\}/g, function(all, param) {
        return data[param] || '';
    })
}

function getUrlParameter() {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var pairs;
    var ret = {};
    for (var i = 0; i < sURLVariables.length; i++) {
        var pairs = sURLVariables[i].split('=');
        if (pairs[0]) {
            ret[pairs[0]] = decodeURIComponent(pairs[1]);
        }
    }
    return ret;
}