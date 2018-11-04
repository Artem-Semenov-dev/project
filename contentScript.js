function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_eq(a, b) {
    var ՐՏitr2, ՐՏidx2;
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < a.length; i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            ՐՏitr2 = ՐՏ_Iterable(a);
            for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
                i = ՐՏitr2[ՐՏidx2];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}

var __name__ = "__main__";
function updateLinks() {
    var ՐՏitr1, ՐՏidx1;
    var links, link;
    links = document.getElementsByTagName("a");
    ՐՏitr1 = ՐՏ_Iterable(links);
    for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
        link = ՐՏitr1[ՐՏidx1];
        if (link.getAttribute("href") === "" || link.getAttribute("href") === "#") {
            link.setAttribute("role", "button");
        }
    }
}
updateLinks();
