
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value == null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var svelteRouter = {exports: {}};

    (function (module, exports) {
    	!function(t,n){n(exports);}(commonjsGlobal,function(t){function s(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function u(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),t}function f(t){return (f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){}function p(t,n){for(var e in n)t[e]=n[e];return t}function h(t){return t()}function d(){return Object.create(null)}function y(t){t.forEach(h);}function v(t){return "function"==typeof t}function m(t,n){return t!=t?n==n:t!==n||t&&"object"===f(t)||"function"==typeof t}function g(t,n,e){return t[1]?p({},p(n.$$scope.ctx,t[1](e?e(n):{}))):n.$$scope.ctx}function b(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e);}var w;function $(t){w=t;}function x(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t);}var O=[],E=[],S=[],P=[],k=Promise.resolve(),_=!1;function A(t){S.push(t);}function j(){var t=new Set;do{for(;O.length;){var n=O.shift();$(n),T(n.$$);}for(;E.length;)E.pop()();for(var e=0;e<S.length;e+=1){var r=S[e];t.has(r)||(r(),t.add(r));}S.length=0;}while(O.length);for(;P.length;)P.pop()();_=!1;}function T(t){t.fragment&&(t.update(t.dirty),y(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(A));}var C,R=new Set;function N(t,n){t&&t.i&&(R.delete(t),t.i(n));}function L(t,n){t.$$.fragment&&(y(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={});}function I(t,n){t.$$.dirty||(O.push(t),_||(_=!0,k.then(j)),t.$$.dirty=d()),t.$$.dirty[n]=!0;}function U(e,t,n,r,o,i){var a=w;$(e);var c=t.props||{},u=e.$$={fragment:null,ctx:null,props:i,update:l,not_equal:o,bound:d(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:d(),dirty:null},f=!1;u.ctx=n?n(e,c,function(t,n){u.ctx&&o(u.ctx[t],u.ctx[t]=n)&&(u.bound[t]&&u.bound[t](n),f&&I(e,t));}):c,u.update(),f=!0,y(u.before_update),u.fragment=r(u.ctx),t.target&&(t.hydrate?u.fragment.l(function(t){return Array.from(t.childNodes)}(t.target)):u.fragment.c(),t.intro&&N(e.$$.fragment),function(n,t,e){var r=n.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,c=r.after_update;o.m(t,e),A(function(){var t=i.map(h).filter(v);a?a.push.apply(a,s(t)):y(t),n.$$.on_mount=[];}),c.forEach(A);}(e,t.target,t.anchor),j()),$(a);}var F=function(){function t(){e(this,t);}return u(t,[{key:"$destroy",value:function(){L(this,1),this.$destroy=l;}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1);}}},{key:"$set",value:function(){}}]),t}();function H(){return (H=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);}return t}).apply(this,arguments)}function M(t){return "/"===t.charAt(0)}function B(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop();}function D(t){return (D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var q="function"==typeof Symbol&&"symbol"===D(Symbol.iterator)?function(t){return D(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":D(t)};var W="Invariant failed";function z(t){if(!t)throw new Error(W)}function V(t){return "/"===t.charAt(0)?t:"/"+t}function G(t){return "/"===t.charAt(0)?t.substr(1):t}function J(t,n){return function(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)}(t,n)?t.substr(n.length):t}function K(t){return "/"===t.charAt(t.length-1)?t.slice(0,-1):t}function Q(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function X(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return -1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(o=H({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname);}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,n){var e=1<arguments.length&&void 0!==n?n:"",r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&M(t),a=e&&M(e),c=i||a;if(t&&M(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return "/";var u=void 0;if(o.length){var f=o[o.length-1];u="."===f||".."===f||""===f;}else u=!1;for(var s=0,l=o.length;0<=l;l--){var p=o[l];"."===p?B(o,l):".."===p?(B(o,l),s++):s&&(B(o,l),s--);}if(!c)for(;s--;)o.unshift("..");!c||""===o[0]||o[0]&&M(o[0])||o.unshift("");var h=o.join("/");return u&&"/"!==h.substr(-1)&&(h+="/"),h}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Y(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&function e(n,r){if(n===r)return !0;if(null==n||null==r)return !1;if(Array.isArray(n))return Array.isArray(r)&&n.length===r.length&&n.every(function(t,n){return e(t,r[n])});var t=void 0===n?"undefined":q(n);if(t!==(void 0===r?"undefined":q(r)))return !1;if("object"!==t)return !1;var o=n.valueOf(),i=r.valueOf();if(o!==n||i!==r)return e(o,i);var a=Object.keys(n),c=Object.keys(r);return a.length===c.length&&a.every(function(t){return e(n[t],r[t])})}(t.state,n.state)}function Z(){var i=null;var r=[];return {setPrompt:function(t){return i=t,function(){i===t&&(i=null);}},confirmTransitionTo:function(t,n,e,r){if(null!=i){var o="function"==typeof i?i(t,n):i;"string"==typeof o?"function"==typeof e?e(o,r):r(!0):r(!1!==o);}else r(!0);},appendListener:function(t){var n=!0;function e(){n&&t.apply(void 0,arguments);}return r.push(e),function(){n=!1,r=r.filter(function(t){return t!==e});}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];r.forEach(function(t){return t.apply(void 0,n)});}}}var tt=!("undefined"==typeof window||!window.document||!window.document.createElement);function nt(t,n){n(window.confirm(t));}var et="popstate",rt="hashchange";function ot(){try{return window.history.state||{}}catch(t){return {}}}function it(t){void 0===t&&(t={}),tt||z(!1);var c=window.history,u=function(){var t=window.navigator.userAgent;return (-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),n=!(-1===window.navigator.userAgent.indexOf("Trident")),e=t,r=e.forceRefresh,f=void 0!==r&&r,o=e.getUserConfirmation,s=void 0===o?nt:o,i=e.keyLength,a=void 0===i?6:i,l=t.basename?K(V(t.basename)):"";function p(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return l&&(i=J(i,l)),X(i,r,e)}function h(){return Math.random().toString(36).substr(2,a)}var d=Z();function y(t){H(k,t),k.length=c.length,d.notifyListeners(k.location,k.action);}function v(t){!function(t){void 0===t.state&&navigator.userAgent.indexOf("CriOS");}(t)&&b(p(t.state));}function m(){b(p(ot()));}var g=!1;function b(n){if(g)g=!1,y();else {d.confirmTransitionTo(n,"POP",s,function(t){t?y({action:"POP",location:n}):function(t){var n=k.location,e=$.indexOf(n.key);-1===e&&(e=0);var r=$.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(g=!0,O(o));}(n);});}}var w=p(ot()),$=[w.key];function x(t){return l+Q(t)}function O(t){c.go(t);}var E=0;function S(t){1===(E+=t)&&1===t?(window.addEventListener(et,v),n&&window.addEventListener(rt,m)):0===E&&(window.removeEventListener(et,v),n&&window.removeEventListener(rt,m));}var P=!1;var k={length:c.length,action:"POP",location:w,createHref:x,push:function(t,n){var a=X(t,n,h(),k.location);d.confirmTransitionTo(a,"PUSH",s,function(t){if(t){var n=x(a),e=a.key,r=a.state;if(u)if(c.pushState({key:e,state:r},null,n),f)window.location.href=n;else {var o=$.indexOf(k.location.key),i=$.slice(0,-1===o?0:o+1);i.push(a.key),$=i,y({action:"PUSH",location:a});}else window.location.href=n;}});},replace:function(t,n){var i="REPLACE",a=X(t,n,h(),k.location);d.confirmTransitionTo(a,i,s,function(t){if(t){var n=x(a),e=a.key,r=a.state;if(u)if(c.replaceState({key:e,state:r},null,n),f)window.location.replace(n);else {var o=$.indexOf(k.location.key);-1!==o&&($[o]=a.key),y({action:i,location:a});}else window.location.replace(n);}});},go:O,goBack:function(){O(-1);},goForward:function(){O(1);},block:function(t){void 0===t&&(t=!1);var n=d.setPrompt(t);return P||(S(1),P=!0),function(){return P&&(P=!1,S(-1)),n()}},listen:function(t){var n=d.appendListener(t);return S(1),function(){S(-1),n();}}};return k}var at="hashchange",ct={hashbang:{encodePath:function(t){return "!"===t.charAt(0)?t:"!/"+G(t)},decodePath:function(t){return "!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:G,decodePath:V},slash:{encodePath:V,decodePath:V}};function ut(){var t=window.location.href,n=t.indexOf("#");return -1===n?"":t.substring(n+1)}function ft(t){var n=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,0<=n?n:0)+"#"+t);}function st(t){void 0===t&&(t={}),tt||z(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,a=void 0===r?nt:r,o=e.hashType,i=void 0===o?"slash":o,c=t.basename?K(V(t.basename)):"",u=ct[i],f=u.encodePath,s=u.decodePath;function l(){var t=s(ut());return c&&(t=J(t,c)),X(t)}var p=Z();function h(t){H(S,t),S.length=n.length,p.notifyListeners(S.location,S.action);}var d=!1,y=null;function v(){var t=ut(),n=f(t);if(t!==n)ft(n);else {var e=l(),r=S.location;if(!d&&Y(r,e))return;if(y===Q(e))return;y=null,function(n){if(d)d=!1,h();else {p.confirmTransitionTo(n,"POP",a,function(t){t?h({action:"POP",location:n}):function(t){var n=S.location,e=w.lastIndexOf(Q(n));-1===e&&(e=0);var r=w.lastIndexOf(Q(t));-1===r&&(r=0);var o=e-r;o&&(d=!0,$(o));}(n);});}}(e);}}var m=ut(),g=f(m);m!==g&&ft(g);var b=l(),w=[Q(b)];function $(t){n.go(t);}var x=0;function O(t){1===(x+=t)&&1===t?window.addEventListener(at,v):0===x&&window.removeEventListener(at,v);}var E=!1;var S={length:n.length,action:"POP",location:b,createHref:function(t){return "#"+f(c+Q(t))},push:function(t,n){var i=X(t,void 0,void 0,S.location);p.confirmTransitionTo(i,"PUSH",a,function(t){if(t){var n=Q(i),e=f(c+n);if(ut()!==e){y=n,function(t){window.location.hash=t;}(e);var r=w.lastIndexOf(Q(S.location)),o=w.slice(0,-1===r?0:r+1);o.push(n),w=o,h({action:"PUSH",location:i});}else h();}});},replace:function(t,n){var o="REPLACE",i=X(t,void 0,void 0,S.location);p.confirmTransitionTo(i,o,a,function(t){if(t){var n=Q(i),e=f(c+n);ut()!==e&&(y=n,ft(e));var r=w.indexOf(Q(S.location));-1!==r&&(w[r]=n),h({action:o,location:i});}});},go:$,goBack:function(){$(-1);},goForward:function(){$(1);},block:function(t){void 0===t&&(t=!1);var n=p.setPrompt(t);return E||(O(1),E=!0),function(){return E&&(E=!1,O(-1)),n()}},listen:function(t){var n=p.appendListener(t);return O(1),function(){O(-1),n();}}};return S}function lt(t){return (lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function pt(t,n){return wt(bt(t,n))}var ht=Et,dt=bt,yt=wt,vt=Ot,mt="/",gt=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function bt(t,n){for(var e,r,o=[],i=0,a=0,c="",u=n&&n.delimiter||mt,f=n&&n.whitelist||void 0,s=!1;null!==(e=gt.exec(t));){var l=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1],s=!0;else {var d="",y=e[2],v=e[3],m=e[4],g=e[5];if(!s&&c.length){var b=c.length-1,w=c[b];(!f||-1<f.indexOf(w))&&(d=w,c=c.slice(0,b));}c&&(o.push(c),c="",s=!1);var $="+"===g||"*"===g,x="?"===g||"*"===g,O=v||m,E=d||u;o.push({name:y||i++,prefix:d,delimiter:E,optional:x,repeat:$,pattern:O?(r=O,r.replace(/([=!:$/()])/g,"\\$1")):"[^"+$t(E===u?E:E+u)+"]+?"});}}return (c||a<t.length)&&o.push(c+t.substr(a)),o}function wt(f){for(var s=new Array(f.length),t=0;t<f.length;t++)"object"===lt(f[t])&&(s[t]=new RegExp("^(?:"+f[t].pattern+")$"));return function(t,n){for(var e="",r=n&&n.encode||encodeURIComponent,o=0;o<f.length;o++){var i=f[o];if("string"!=typeof i){var a,c=t?t[i.name]:void 0;if(Array.isArray(c)){if(!i.repeat)throw new TypeError('Expected "'+i.name+'" to not repeat, but got array');if(0===c.length){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(a=r(c[u],i),!s[o].test(a))throw new TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'"');e+=(0===u?i.prefix:i.delimiter)+a;}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!i.optional)throw new TypeError('Expected "'+i.name+'" to be '+(i.repeat?"an array":"a string"))}else {if(a=r(String(c),i),!s[o].test(a))throw new TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but got "'+a+'"');e+=i.prefix+a;}}else e+=i;}return e}}function $t(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function xt(t){return t&&t.sensitive?"":"i"}function Ot(t,n,e){for(var r=(e=e||{}).strict,o=!1!==e.start,i=!1!==e.end,a=e.delimiter||mt,c=[].concat(e.endsWith||[]).map($t).concat("$").join("|"),u=o?"^":"",f=0;f<t.length;f++){var s=t[f];if("string"==typeof s)u+=$t(s);else {var l=s.repeat?"(?:"+s.pattern+")(?:"+$t(s.delimiter)+"(?:"+s.pattern+"))*":s.pattern;n&&n.push(s),s.optional?s.prefix?u+="(?:"+$t(s.prefix)+"("+l+"))?":u+="("+l+")?":u+=$t(s.prefix)+"("+l+")";}}if(i)r||(u+="(?:"+$t(a)+")?"),u+="$"===c?"$":"(?="+c+")";else {var p=t[t.length-1],h="string"==typeof p?p[p.length-1]===a:void 0===p;r||(u+="(?:"+$t(a)+"(?="+c+"))?"),h||(u+="(?="+$t(a)+"|"+c+")");}return new RegExp(u,xt(e))}function Et(t,n,e){return t instanceof RegExp?function(t,n){if(!n)return t;var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,e){for(var r=[],o=0;o<t.length;o++)r.push(Et(t[o],n,e).source);return new RegExp("(?:"+r.join("|")+")",xt(e))}(t,n,e):function(t,n,e){return Ot(bt(t,e),n,e)}(t,n,e)}function St(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}ht.parse=dt,ht.compile=pt,ht.tokensToFunction=yt,ht.tokensToRegExp=vt;var Pt=function(){function c(t){var n,e=t.target,r=t.mode,o=void 0===r?"hash":r,i=t.routes,a=void 0===i?[]:i;switch(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),o){case"hash":n=st();break;case"history":n=it();break;default:n=st();}c.__VERSION__="3.0.0-alpha.2",c.mode=o,c.history=n,c.push=function(t){return n.push(t)},c.replace=function(t){return n.replace(t)},c.go=function(t){return n.go(t)},c.goBack=function(){return n.goBack()},c.goForward=function(){return n.goForward()},c.listen=function(t){return n.listen(t)},this.$content=null,this.target="string"==typeof e?document.querySelector(e):e,this.routes=a,this.$listener=n.listen(this.handleRouteChange.bind(this)),this.handleRouteChange(n.location);}return function(t,n,e){n&&St(t.prototype,n),e&&St(t,e);}(c,[{key:"destroy",value:function(){this.$listener&&(this.$listener(),this.$listener=null);}},{key:"handleRouteChange",value:function(t){var n,e=t.pathname,r=!0,o=!1,i=void 0;try{for(var a,c=this.routes[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value;if(ht(u.path).test(e)){n=u;break}}}catch(t){o=!0,i=t;}finally{try{r||null==c.return||c.return();}finally{if(o)throw i}}if(n&&n.component){this.$content&&this.$content.$destroy();var f=n,s=f.component,l=f.props;this.$content=new s({target:this.target,props:l});}}}]),c}();function kt(t){return (kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _t(t){return (_t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function At(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function jt(t,n){return (jt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Tt(t){var e,r,n,o=t.$$slots.default,i=function(t,n,e){if(t){var r=g(t,n,e);return t[0](r)}}(o,t,null);return {c:function(){e=function(t){return document.createElement(t)}("a"),i&&i.c(),b(e,"class",t.computedClassName),b(e,"href",t.href),n=function(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}(e,"click",t.handleNavigate);},l:function(t){i&&i.l(a_nodes);},m:function(t,n){!function(t,n,e){t.insertBefore(n,e||null);}(t,e,n),i&&i.m(e,null),r=!0;},p:function(t,n){i&&i.p&&t.$$scope&&i.p(function(t,n,e,r){return t[1]?p({},p(n.$$scope.changed||{},t[1](r?r(e):{}))):n.$$scope.changed||{}}(o,n,t,null),g(o,n,null)),r&&!t.computedClassName||b(e,"class",n.computedClassName),r&&!t.href||b(e,"href",n.href);},i:function(t){r||(N(i,t),r=!0);},o:function(t){!function(t,n,e,r){if(t&&t.o){if(R.has(t))return;R.add(t),C.c.push(function(){R.delete(t),r&&(e&&t.d(1),r());}),t.o(n);}}(i,t),r=!1;},d:function(t){t&&function(t){t.parentNode.removeChild(t);}(e),i&&i.d(t),n();}}}function Ct(t,n,e){var r=n.to,o=n.replace,i=void 0!==o&&o,a=n.className,c=void 0===a?"":a,u=n.activeClassName,f=void 0===u?"router-link-active":u,s="",l=c;function p(){Pt.history.location.pathname===r?e("computedClassName",l="".concat(c," ").concat(f)):e("computedClassName",l=c);}x(function(){p(),Pt.listen(p),e("href",s="hash"===Pt.mode?"/#".concat(r):r);});var h=n.$$slots,d=void 0===h?{}:h,y=n.$$scope;return t.$set=function(t){"to"in t&&e("to",r=t.to),"replace"in t&&e("replace",i=t.replace),"className"in t&&e("className",c=t.className),"activeClassName"in t&&e("activeClassName",f=t.activeClassName),"$$scope"in t&&e("$$scope",y=t.$$scope);},{to:r,replace:i,className:c,activeClassName:f,href:s,computedClassName:l,handleNavigate:function(t){t.preventDefault(),Pt[i?"replace":"push"](r);},$$slots:d,$$scope:y}}var Rt=function(){function e(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),U(At(n=function(t,n){return !n||"object"!==kt(n)&&"function"!=typeof n?At(t):n}(this,_t(e).call(this))),t,Ct,Tt,m,["to","replace","className","activeClassName"]),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&jt(t,n);}(e,F),e}();t.Link=Rt,t.default=Pt,Object.defineProperty(t,"__esModule",{value:!0});}); 
    } (svelteRouter, svelteRouter.exports));

    var svelteRouterExports = svelteRouter.exports;

    /* src\Home\Home.svelte generated by Svelte v3.59.2 */

    const file = "src\\Home\\Home.svelte";

    // (59:7) {:else}
    function create_else_block(ctx) {
    	let li0;
    	let a0;
    	let t1;
    	let li1;
    	let a1;

    	const block = {
    		c: function create() {
    			li0 = element("li");
    			a0 = element("a");
    			a0.textContent = "로그인";
    			t1 = space();
    			li1 = element("li");
    			a1 = element("a");
    			a1.textContent = "회원가입";
    			attr_dev(a0, "href", "/login");
    			add_location(a0, file, 59, 12, 2164);
    			add_location(li0, file, 59, 8, 2160);
    			attr_dev(a1, "href", "/join");
    			add_location(a1, file, 60, 12, 2208);
    			add_location(li1, file, 60, 8, 2204);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li0, anchor);
    			append_dev(li0, a0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, li1, anchor);
    			append_dev(li1, a1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(li1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(59:7) {:else}",
    		ctx
    	});

    	return block;
    }

    // (57:7) {#if isLogin }
    function create_if_block(ctx) {
    	let li;
    	let a;

    	const block = {
    		c: function create() {
    			li = element("li");
    			a = element("a");
    			a.textContent = "대시보드";
    			attr_dev(a, "href", "/order");
    			add_location(a, file, 57, 12, 2103);
    			add_location(li, file, 57, 8, 2099);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, a);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(57:7) {#if isLogin }",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let html;
    	let head;
    	let meta0;
    	let t0;
    	let meta1;
    	let t1;
    	let meta2;
    	let t2;
    	let meta3;
    	let t3;
    	let meta4;
    	let t4;
    	let meta5;
    	let t5;
    	let title;
    	let t8;
    	let link0;
    	let t9;
    	let link1;
    	let t10;
    	let link2;
    	let t11;
    	let link3;
    	let t12;
    	let link4;
    	let t13;
    	let link5;
    	let t14;
    	let link6;
    	let t15;
    	let link7;
    	let t16;
    	let link8;
    	let t17;
    	let script0;
    	let t19;
    	let body;
    	let div3;
    	let div2;
    	let div0;
    	let t20;
    	let div1;
    	let t21;
    	let div12;
    	let div11;
    	let div10;
    	let div5;
    	let a0;
    	let img0;
    	let img0_src_value;
    	let t22;
    	let div4;
    	let t23;
    	let div9;
    	let div6;
    	let ul;
    	let t24;
    	let li;
    	let a1;
    	let t26;
    	let div8;
    	let div7;
    	let a2;
    	let i0;
    	let t27;
    	let div17;
    	let div16;
    	let div15;
    	let div14;
    	let div13;
    	let h1;
    	let span0;
    	let t29;
    	let br0;
    	let t30;
    	let span1;
    	let br1;
    	let t32_value = process.env.KR_NAME + "";
    	let t32;
    	let span2;
    	let t34;
    	let a3;
    	let t35;
    	let span3;
    	let t37;
    	let i1;
    	let t38;
    	let div35;
    	let div34;
    	let div33;
    	let div32;
    	let div31;
    	let div30;
    	let div20;
    	let img1;
    	let img1_src_value;
    	let t39;
    	let div19;
    	let div18;
    	let a4;
    	let i2;
    	let t40;
    	let h30;
    	let a5;
    	let t42;
    	let p0;
    	let t44;
    	let div23;
    	let img2;
    	let img2_src_value;
    	let t45;
    	let div22;
    	let div21;
    	let a6;
    	let i3;
    	let t46;
    	let h31;
    	let a7;
    	let t48;
    	let p1;
    	let t50;
    	let div26;
    	let img3;
    	let img3_src_value;
    	let t51;
    	let div25;
    	let div24;
    	let a8;
    	let i4;
    	let t52;
    	let h32;
    	let a9;
    	let t54;
    	let p2;
    	let t56;
    	let div29;
    	let img4;
    	let img4_src_value;
    	let t57;
    	let div28;
    	let div27;
    	let a10;
    	let i5;
    	let t58;
    	let h33;
    	let a11;
    	let t60;
    	let p3;
    	let t62;
    	let div61;
    	let div60;
    	let div38;
    	let div37;
    	let div36;
    	let span4;
    	let t64;
    	let h20;
    	let t65;
    	let span5;
    	let t67;
    	let t68;
    	let div59;
    	let div43;
    	let div42;
    	let span6;
    	let t70;
    	let div40;
    	let img5;
    	let img5_src_value;
    	let t71;
    	let div39;
    	let img6;
    	let img6_src_value;
    	let t72;
    	let div41;
    	let h40;
    	let a12;
    	let t74;
    	let p4;
    	let t75_value = process.env.KR_NAME + "";
    	let t75;
    	let t76;
    	let strong0;
    	let t78;
    	let strong1;
    	let t80;
    	let t81;
    	let div48;
    	let div47;
    	let span7;
    	let t83;
    	let div45;
    	let img7;
    	let img7_src_value;
    	let t84;
    	let div44;
    	let img8;
    	let img8_src_value;
    	let t85;
    	let div46;
    	let h41;
    	let a13;
    	let t87;
    	let p5;
    	let t89;
    	let div53;
    	let div52;
    	let span8;
    	let t91;
    	let div50;
    	let img9;
    	let img9_src_value;
    	let t92;
    	let div49;
    	let img10;
    	let img10_src_value;
    	let t93;
    	let div51;
    	let h42;
    	let a14;
    	let t95;
    	let p6;
    	let t97;
    	let div58;
    	let div57;
    	let span9;
    	let t99;
    	let div55;
    	let img11;
    	let img11_src_value;
    	let t100;
    	let div54;
    	let img12;
    	let img12_src_value;
    	let t101;
    	let div56;
    	let h43;
    	let a15;
    	let t103;
    	let p7;
    	let t105;
    	let div104;
    	let div103;
    	let div64;
    	let div63;
    	let div62;
    	let span10;
    	let t107;
    	let h21;
    	let t108;
    	let span11;
    	let t110;
    	let t111;
    	let div79;
    	let div69;
    	let div68;
    	let span12;
    	let t113;
    	let div65;
    	let img13;
    	let img13_src_value;
    	let t114;
    	let div66;
    	let h44;
    	let t116;
    	let p8;
    	let t118;
    	let div67;
    	let img14;
    	let img14_src_value;
    	let t119;
    	let div74;
    	let div73;
    	let span13;
    	let t121;
    	let div70;
    	let img15;
    	let img15_src_value;
    	let t122;
    	let div71;
    	let h45;
    	let t124;
    	let p9;
    	let t126;
    	let div72;
    	let img16;
    	let img16_src_value;
    	let t127;
    	let div78;
    	let div77;
    	let span14;
    	let t129;
    	let div75;
    	let img17;
    	let img17_src_value;
    	let t130;
    	let div76;
    	let h46;
    	let t132;
    	let p10;
    	let t134;
    	let div102;
    	let div101;
    	let div100;
    	let div83;
    	let div82;
    	let div80;
    	let h50;
    	let t135_value = process.env.KR_NAME + "";
    	let t135;
    	let t136;
    	let span15;
    	let t138;
    	let t139;
    	let i6;
    	let t140;
    	let div81;
    	let p11;
    	let t143;
    	let div87;
    	let div86;
    	let div84;
    	let h51;
    	let t144_value = process.env.KR_NAME + "";
    	let t144;
    	let t145;
    	let span16;
    	let t147;
    	let i7;
    	let t148;
    	let div85;
    	let p12;
    	let t152;
    	let div91;
    	let div90;
    	let div88;
    	let h52;
    	let t153;
    	let span17;
    	let t155;
    	let t156;
    	let i8;
    	let t157;
    	let div89;
    	let p13;
    	let t159;
    	let div95;
    	let div94;
    	let div92;
    	let h53;
    	let span18;
    	let t161;
    	let span19;
    	let t163;
    	let span20;
    	let t165;
    	let t166;
    	let i9;
    	let t167;
    	let div93;
    	let p14;
    	let t171;
    	let div99;
    	let div98;
    	let div96;
    	let h54;
    	let t172_value = process.env.KR_NAME + "";
    	let t172;
    	let t173;
    	let span21;
    	let t175;
    	let span22;
    	let t177;
    	let t178;
    	let i10;
    	let t179;
    	let div97;
    	let p15;
    	let t183;
    	let div110;
    	let div109;
    	let div108;
    	let div107;
    	let div106;
    	let div105;
    	let t184;
    	let strong2;
    	let t186;
    	let strong3;
    	let t188;
    	let strong4;
    	let t190;
    	let strong5;
    	let t192;
    	let br2;
    	let t193;
    	let strong6;
    	let t195;
    	let br3;
    	let t196;
    	let strong7;
    	let t198;
    	let strong8;
    	let t200;
    	let strong9;
    	let t202;
    	let strong10;
    	let t205;
    	let strong11;
    	let t208;
    	let div115;
    	let div114;
    	let div113;
    	let div112;
    	let div111;
    	let p16;
    	let t209;
    	let strong12;
    	let t211;
    	let t212;
    	let div116;
    	let svg;
    	let path;
    	let t213;
    	let script1;
    	let script1_src_value;
    	let t214;
    	let script2;
    	let script2_src_value;
    	let t215;
    	let script3;
    	let script3_src_value;
    	let t216;
    	let script4;
    	let script4_src_value;
    	let t217;
    	let script5;
    	let script5_src_value;
    	let t218;
    	let script6;
    	let script6_src_value;
    	let t219;
    	let script7;
    	let script7_src_value;
    	let t220;
    	let script8;
    	let script8_src_value;
    	let t221;
    	let script9;
    	let script9_src_value;
    	let t222;
    	let script10;
    	let script10_src_value;
    	let t223;
    	let script11;
    	let script11_src_value;
    	let t224;
    	let script12;
    	let script12_src_value;

    	function select_block_type(ctx, dirty) {
    		if (isLogin) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type();
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			html = element("html");
    			head = element("head");
    			meta0 = element("meta");
    			t0 = space();
    			meta1 = element("meta");
    			t1 = space();
    			meta2 = element("meta");
    			t2 = space();
    			meta3 = element("meta");
    			t3 = space();
    			meta4 = element("meta");
    			t4 = space();
    			meta5 = element("meta");
    			t5 = space();
    			title = element("title");
    			title.textContent = `${process.env.EN_NAME} | 더 효율적인 셀프 마케팅 플랫폼`;
    			t8 = space();
    			link0 = element("link");
    			t9 = space();
    			link1 = element("link");
    			t10 = space();
    			link2 = element("link");
    			t11 = space();
    			link3 = element("link");
    			t12 = space();
    			link4 = element("link");
    			t13 = space();
    			link5 = element("link");
    			t14 = space();
    			link6 = element("link");
    			t15 = space();
    			link7 = element("link");
    			t16 = space();
    			link8 = element("link");
    			t17 = space();
    			script0 = element("script");
    			script0.textContent = "export let isLogin";
    			t19 = space();
    			body = element("body");
    			div3 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			t20 = space();
    			div1 = element("div");
    			t21 = space();
    			div12 = element("div");
    			div11 = element("div");
    			div10 = element("div");
    			div5 = element("div");
    			a0 = element("a");
    			img0 = element("img");
    			t22 = space();
    			div4 = element("div");
    			t23 = space();
    			div9 = element("div");
    			div6 = element("div");
    			ul = element("ul");
    			if_block.c();
    			t24 = space();
    			li = element("li");
    			a1 = element("a");
    			a1.textContent = "둘러보기";
    			t26 = space();
    			div8 = element("div");
    			div7 = element("div");
    			a2 = element("a");
    			i0 = element("i");
    			t27 = space();
    			div17 = element("div");
    			div16 = element("div");
    			div15 = element("div");
    			div14 = element("div");
    			div13 = element("div");
    			h1 = element("h1");
    			span0 = element("span");
    			span0.textContent = "더";
    			t29 = text(" 효율적인");
    			br0 = element("br");
    			t30 = text("셀프 ");
    			span1 = element("span");
    			span1.textContent = "마케팅 플랫폼";
    			br1 = element("br");
    			t32 = text(t32_value);
    			span2 = element("span");
    			span2.textContent = "입니다.";
    			t34 = space();
    			a3 = element("a");
    			t35 = text("회원가입 없이 ");
    			span3 = element("span");
    			span3.textContent = "둘러보기";
    			t37 = space();
    			i1 = element("i");
    			t38 = space();
    			div35 = element("div");
    			div34 = element("div");
    			div33 = element("div");
    			div32 = element("div");
    			div31 = element("div");
    			div30 = element("div");
    			div20 = element("div");
    			img1 = element("img");
    			t39 = space();
    			div19 = element("div");
    			div18 = element("div");
    			a4 = element("a");
    			i2 = element("i");
    			t40 = space();
    			h30 = element("h3");
    			a5 = element("a");
    			a5.textContent = "인스타그램 서비스";
    			t42 = space();
    			p0 = element("p");
    			p0.textContent = "팔로워│좋아요│댓글│공유│조회│인기게시물";
    			t44 = space();
    			div23 = element("div");
    			img2 = element("img");
    			t45 = space();
    			div22 = element("div");
    			div21 = element("div");
    			a6 = element("a");
    			i3 = element("i");
    			t46 = space();
    			h31 = element("h3");
    			a7 = element("a");
    			a7.textContent = "페이스북 서비스";
    			t48 = space();
    			p1 = element("p");
    			p1.textContent = "팔로워│좋아요│댓글│공유│조회│저장";
    			t50 = space();
    			div26 = element("div");
    			img3 = element("img");
    			t51 = space();
    			div25 = element("div");
    			div24 = element("div");
    			a8 = element("a");
    			i4 = element("i");
    			t52 = space();
    			h32 = element("h3");
    			a9 = element("a");
    			a9.textContent = "유튜브 서비스";
    			t54 = space();
    			p2 = element("p");
    			p2.textContent = "구독자│좋아요│댓글│공유│조회│라이브";
    			t56 = space();
    			div29 = element("div");
    			img4 = element("img");
    			t57 = space();
    			div28 = element("div");
    			div27 = element("div");
    			a10 = element("a");
    			i5 = element("i");
    			t58 = space();
    			h33 = element("h3");
    			a11 = element("a");
    			a11.textContent = "틱톡 서비스";
    			t60 = space();
    			p3 = element("p");
    			p3.textContent = "팔로워│좋아요│댓글│공유│조회│라이브";
    			t62 = space();
    			div61 = element("div");
    			div60 = element("div");
    			div38 = element("div");
    			div37 = element("div");
    			div36 = element("div");
    			span4 = element("span");
    			span4.textContent = "완벽한 퀄리티와 신속한 처리 속도";
    			t64 = space();
    			h20 = element("h2");
    			t65 = text("지속적인 ");
    			span5 = element("span");
    			span5.textContent = "정기 점검";
    			t67 = text("으로 항상 안정적입니다.");
    			t68 = space();
    			div59 = element("div");
    			div43 = element("div");
    			div42 = element("div");
    			span6 = element("span");
    			span6.textContent = "01";
    			t70 = space();
    			div40 = element("div");
    			img5 = element("img");
    			t71 = space();
    			div39 = element("div");
    			img6 = element("img");
    			t72 = space();
    			div41 = element("div");
    			h40 = element("h4");
    			a12 = element("a");
    			a12.textContent = "정기적인 서비스 전수 점검";
    			t74 = space();
    			p4 = element("p");
    			t75 = text(t75_value);
    			t76 = text("의 모든 서비스는 ");
    			strong0 = element("strong");
    			strong0.textContent = "최소 1개월 이상 검증된 서비스";
    			t78 = text("로 구성하여 ");
    			strong1 = element("strong");
    			strong1.textContent = "매주 서비스 점검";
    			t80 = text("을 진행합니다.");
    			t81 = space();
    			div48 = element("div");
    			div47 = element("div");
    			span7 = element("span");
    			span7.textContent = "02";
    			t83 = space();
    			div45 = element("div");
    			img7 = element("img");
    			t84 = space();
    			div44 = element("div");
    			img8 = element("img");
    			t85 = space();
    			div46 = element("div");
    			h41 = element("h4");
    			a13 = element("a");
    			a13.textContent = "지속적인 웹사이트 유지보수";
    			t87 = space();
    			p5 = element("p");
    			p5.textContent = "서비스의 점검과 더불어 모든 웹사이트의 코드에 대해 개선을 포함해 지속적인 유지보수를 실시하고 있습니다.";
    			t89 = space();
    			div53 = element("div");
    			div52 = element("div");
    			span8 = element("span");
    			span8.textContent = "03";
    			t91 = space();
    			div50 = element("div");
    			img9 = element("img");
    			t92 = space();
    			div49 = element("div");
    			img10 = element("img");
    			t93 = space();
    			div51 = element("div");
    			h42 = element("h4");
    			a14 = element("a");
    			a14.textContent = "24시간 관리자 상주 시스템";
    			t95 = space();
    			p6 = element("p");
    			p6.textContent = "관리자가 지속적으로 교대 및 상주하여 언제나 예기치 않은 오류 등의 발생에 대응하고 있습니다.";
    			t97 = space();
    			div58 = element("div");
    			div57 = element("div");
    			span9 = element("span");
    			span9.textContent = "04";
    			t99 = space();
    			div55 = element("div");
    			img11 = element("img");
    			t100 = space();
    			div54 = element("div");
    			img12 = element("img");
    			t101 = space();
    			div56 = element("div");
    			h43 = element("h4");
    			a15 = element("a");
    			a15.textContent = "전문 서버 전문가 상주";
    			t103 = space();
    			p7 = element("p");
    			p7.textContent = "디도스 등으로 인한 서비스 종료를 방지하기 위하여 전문 서버 전문가가 지속적으로 상주 및 관리하고 있습니다.";
    			t105 = space();
    			div104 = element("div");
    			div103 = element("div");
    			div64 = element("div");
    			div63 = element("div");
    			div62 = element("div");
    			span10 = element("span");
    			span10.textContent = "편리하고 간단한 사용 방법";
    			t107 = space();
    			h21 = element("h2");
    			t108 = text("단 ");
    			span11 = element("span");
    			span11.textContent = "세 가지의 절차";
    			t110 = text("로 마케팅이 끝납니다.");
    			t111 = space();
    			div79 = element("div");
    			div69 = element("div");
    			div68 = element("div");
    			span12 = element("span");
    			span12.textContent = "01";
    			t113 = space();
    			div65 = element("div");
    			img13 = element("img");
    			t114 = space();
    			div66 = element("div");
    			h44 = element("h4");
    			h44.textContent = "서비스 선택";
    			t116 = space();
    			p8 = element("p");
    			p8.textContent = "사용하고자 하는 서비스를 선택 후 포인트를 충전해주세요.";
    			t118 = space();
    			div67 = element("div");
    			img14 = element("img");
    			t119 = space();
    			div74 = element("div");
    			div73 = element("div");
    			span13 = element("span");
    			span13.textContent = "02";
    			t121 = space();
    			div70 = element("div");
    			img15 = element("img");
    			t122 = space();
    			div71 = element("div");
    			h45 = element("h4");
    			h45.textContent = "링크 및 수량 입력";
    			t124 = space();
    			p9 = element("p");
    			p9.textContent = "해당 게시물 또는 프로필이나 영상의 링크와 수량을 입력해주세요.";
    			t126 = space();
    			div72 = element("div");
    			img16 = element("img");
    			t127 = space();
    			div78 = element("div");
    			div77 = element("div");
    			span14 = element("span");
    			span14.textContent = "03";
    			t129 = space();
    			div75 = element("div");
    			img17 = element("img");
    			t130 = space();
    			div76 = element("div");
    			h46 = element("h4");
    			h46.textContent = "결과 확인";
    			t132 = space();
    			p10 = element("p");
    			p10.textContent = "모든 절차가 종료되었습니다. 결과는 실시간으로 갱신됩니다.";
    			t134 = space();
    			div102 = element("div");
    			div101 = element("div");
    			div100 = element("div");
    			div83 = element("div");
    			div82 = element("div");
    			div80 = element("div");
    			h50 = element("h5");
    			t135 = text(t135_value);
    			t136 = text("는 ");
    			span15 = element("span");
    			span15.textContent = "합법적인 ";
    			t138 = text("플랫폼인가요?");
    			t139 = space();
    			i6 = element("i");
    			t140 = space();
    			div81 = element("div");
    			p11 = element("p");
    			p11.textContent = `${process.env.KR_NAME}는 합법 플랫폼입니다. 변호사에게 법률자문을 구하여 합법적인 사업임을 확인하였습니다, 그러므로 고객님들과 파트너분들 모두 걱정 안하셔도 됩니다!`;
    			t143 = space();
    			div87 = element("div");
    			div86 = element("div");
    			div84 = element("div");
    			h51 = element("h5");
    			t144 = text(t144_value);
    			t145 = text("의 모든 서비스는 ");
    			span16 = element("span");
    			span16.textContent = "안전한가요?";
    			t147 = space();
    			i7 = element("i");
    			t148 = space();
    			div85 = element("div");
    			p12 = element("p");
    			p12.textContent = `물론입니다. ${process.env.KR_NAME}의 모든 서비스는 로직 전문가와 마케팅 전문가의 합작으로 제작되었습니다, 고객님들의 계정에 피해가 전혀없는 서비스들입니다.`;
    			t152 = space();
    			div91 = element("div");
    			div90 = element("div");
    			div88 = element("div");
    			h52 = element("h5");
    			t153 = text("서비스 ");
    			span17 = element("span");
    			span17.textContent = "진행 속도가";
    			t155 = text(" 어떻게 되나요?");
    			t156 = space();
    			i8 = element("i");
    			t157 = space();
    			div89 = element("div");
    			p13 = element("p");
    			p13.textContent = "패널 내부의 주문하기 페이지 우측하단에 서비스 설명에 서비스 별로 평균적인 진행 속도를 기재해놨습니다.";
    			t159 = space();
    			div95 = element("div");
    			div94 = element("div");
    			div92 = element("div");
    			h53 = element("h5");
    			span18 = element("span");
    			span18.textContent = "무통장 입금";
    			t161 = text(" 또는 ");
    			span19 = element("span");
    			span19.textContent = "카드결제";
    			t163 = text(" 그리고 ");
    			span20 = element("span");
    			span20.textContent = "세금계산서";
    			t165 = text("도 가능한가요?");
    			t166 = space();
    			i9 = element("i");
    			t167 = space();
    			div93 = element("div");
    			p14 = element("p");
    			p14.textContent = `물론입니다. ${process.env.KR_NAME}는 납세의 의무를 지키는 플랫폼이며, 무통장 입금 및 카드결제 또한 가능하십니다!`;
    			t171 = space();
    			div99 = element("div");
    			div98 = element("div");
    			div96 = element("div");
    			h54 = element("h5");
    			t172 = text(t172_value);
    			t173 = text(" 파트너 패널을 ");
    			span21 = element("span");
    			span21.textContent = "분양";
    			t175 = text(" 받고 싶습니다, 또한 ");
    			span22 = element("span");
    			span22.textContent = "제휴 문의";
    			t177 = text(" 는 어디로 드려야하나요?");
    			t178 = space();
    			i10 = element("i");
    			t179 = space();
    			div97 = element("div");
    			p15 = element("p");
    			p15.textContent = `파트너 패널 분양과 제휴 문의는 패널 외부 하단에 있는 고객센터 또는 이메일 그리고 인스타그램 @${process.env.EN_NAME}official 로 DM 주시면 됩니다!`;
    			t183 = space();
    			div110 = element("div");
    			div109 = element("div");
    			div108 = element("div");
    			div107 = element("div");
    			div106 = element("div");
    			div105 = element("div");
    			t184 = text("상호명 ");
    			strong2 = element("strong");
    			strong2.textContent = "화라온 (Hwalaon)";
    			t186 = text("  │ 사업자등록번호 ");
    			strong3 = element("strong");
    			strong3.textContent = "198-27-01211";
    			t188 = text(" │ 대표자명 ");
    			strong4 = element("strong");
    			strong4.textContent = "정화랑";
    			t190 = text(" │ 통신판매업신고번호 ");
    			strong5 = element("strong");
    			strong5.textContent = "신고처리중";
    			t192 = space();
    			br2 = element("br");
    			t193 = text("사업장 주소 ");
    			strong6 = element("strong");
    			strong6.textContent = "48064 부산광역시 해운대구 해운대로469번가길 91, 상가";
    			t195 = space();
    			br3 = element("br");
    			t196 = text("개인정보관리책임자 ");
    			strong7 = element("strong");
    			strong7.textContent = "정화랑";
    			t198 = text(" │ 고객센터 ");
    			strong8 = element("strong");
    			strong8.textContent = "010-2442-5538";
    			t200 = text(" │ 이메일 ");
    			strong9 = element("strong");
    			strong9.textContent = "hwalaon@naver.com";
    			t202 = text(" │ 인스타그램 ");
    			strong10 = element("strong");
    			strong10.textContent = `@${process.env.EN_NAME}`;
    			t205 = text("\r\n\t\t\t\t\t\t\t│ 탤레그램 ");
    			strong11 = element("strong");
    			strong11.textContent = `@${process.env.EN_NAME}`;
    			t208 = space();
    			div115 = element("div");
    			div114 = element("div");
    			div113 = element("div");
    			div112 = element("div");
    			div111 = element("div");
    			p16 = element("p");
    			t209 = text("© 2022 ");
    			strong12 = element("strong");
    			strong12.textContent = `${process.env.EN_NAME}`;
    			t211 = text(" ALL RIGHTS RESERVED.");
    			t212 = space();
    			div116 = element("div");
    			svg = svg_element("svg");
    			path = svg_element("path");
    			t213 = space();
    			script1 = element("script");
    			t214 = space();
    			script2 = element("script");
    			t215 = space();
    			script3 = element("script");
    			t216 = space();
    			script4 = element("script");
    			t217 = space();
    			script5 = element("script");
    			t218 = space();
    			script6 = element("script");
    			t219 = space();
    			script7 = element("script");
    			t220 = space();
    			script8 = element("script");
    			t221 = space();
    			script9 = element("script");
    			t222 = space();
    			script10 = element("script");
    			t223 = space();
    			script11 = element("script");
    			t224 = space();
    			script12 = element("script");
    			attr_dev(meta0, "charset", "UTF-8");
    			add_location(meta0, file, 4, 1, 51);
    			attr_dev(meta1, "http-equiv", "X-UA-Compatible");
    			attr_dev(meta1, "content", "IE=edge");
    			add_location(meta1, file, 5, 1, 76);
    			attr_dev(meta2, "name", "description");
    			attr_dev(meta2, "content", "Metier  - Portfolio HTML5 Template");
    			add_location(meta2, file, 6, 1, 133);
    			attr_dev(meta3, "name", "keywords");
    			attr_dev(meta3, "content", "Creative, Digital, multipage, landing, freelancer template");
    			add_location(meta3, file, 7, 1, 207);
    			attr_dev(meta4, "name", "author");
    			attr_dev(meta4, "content", "ThemeOri");
    			add_location(meta4, file, 8, 1, 302);
    			attr_dev(meta5, "name", "viewport");
    			attr_dev(meta5, "content", "width=device-width, initial-scale=1");
    			add_location(meta5, file, 9, 1, 344);
    			add_location(title, file, 11, 1, 440);
    			attr_dev(link0, "rel", "icon");
    			attr_dev(link0, "type", "image/png");
    			attr_dev(link0, "href", "/public/assets/logo/logo_white.png");
    			add_location(link0, file, 13, 1, 519);
    			attr_dev(link1, "rel", "stylesheet");
    			attr_dev(link1, "href", "/public/assets/css/bootstrap.min.css");
    			add_location(link1, file, 15, 1, 623);
    			attr_dev(link2, "rel", "stylesheet");
    			attr_dev(link2, "href", "/public/assets/css/all.css");
    			add_location(link2, file, 17, 1, 717);
    			attr_dev(link3, "rel", "stylesheet");
    			attr_dev(link3, "href", "/public/assets/css/animate.css");
    			add_location(link3, file, 19, 1, 800);
    			attr_dev(link4, "rel", "stylesheet");
    			attr_dev(link4, "href", "/public/assets/css/nice-select.css");
    			add_location(link4, file, 21, 1, 891);
    			attr_dev(link5, "rel", "stylesheet");
    			attr_dev(link5, "href", "/public/assets/css/swiper-bundle.min.css");
    			add_location(link5, file, 23, 1, 977);
    			attr_dev(link6, "rel", "stylesheet");
    			attr_dev(link6, "href", "/public/assets/css/magnific-popup.css");
    			add_location(link6, file, 25, 1, 1071);
    			attr_dev(link7, "rel", "stylesheet");
    			attr_dev(link7, "href", "/public/assets/css/meanmenu.min.css");
    			add_location(link7, file, 27, 1, 1163);
    			attr_dev(link8, "rel", "stylesheet");
    			attr_dev(link8, "href", "/public/assets/sass/style.css");
    			add_location(link8, file, 29, 1, 1254);
    			add_location(head, file, 2, 0, 20);
    			add_location(script0, file, 32, 0, 1328);
    			attr_dev(div0, "class", "double-bounce1");
    			add_location(div0, file, 40, 3, 1462);
    			attr_dev(div1, "class", "double-bounce2");
    			add_location(div1, file, 41, 3, 1501);
    			attr_dev(div2, "class", "spinner");
    			add_location(div2, file, 39, 2, 1436);
    			attr_dev(div3, "class", "theme-loader");
    			add_location(div3, file, 38, 1, 1406);
    			if (!src_url_equal(img0.src, img0_src_value = "/public/assets/logo/logo_fit.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "");
    			add_location(img0, file, 50, 18, 1778);
    			attr_dev(a0, "href", "/");
    			add_location(a0, file, 50, 5, 1765);
    			attr_dev(div4, "class", "responsive-menu");
    			add_location(div4, file, 51, 5, 1841);
    			attr_dev(div5, "class", "header__area-box-logo");
    			add_location(div5, file, 49, 4, 1723);
    			attr_dev(a1, "href", "/demo-login");
    			add_location(a1, file, 62, 14, 2268);
    			add_location(li, file, 62, 10, 2264);
    			attr_dev(ul, "id", "mobilemenu");
    			add_location(ul, file, 55, 9, 2046);
    			attr_dev(div6, "class", "header__area-box-main-menu one meanmenu-responsive");
    			add_location(div6, file, 54, 8, 1971);
    			attr_dev(i0, "class", "fal fa-bars");
    			add_location(i0, file, 66, 75, 2488);
    			attr_dev(a2, "href", "#asdw");
    			add_location(a2, file, 66, 59, 2472);
    			attr_dev(div7, "class", "header__area-box-sidebar-popup-icon");
    			add_location(div7, file, 66, 9, 2422);
    			attr_dev(div8, "class", "header__area-box-sidebar");
    			set_style(div8, "margin-left", "50px");
    			add_location(div8, file, 65, 8, 2346);
    			attr_dev(div9, "class", "header_gp");
    			set_style(div9, "display", "flex");
    			set_style(div9, "align-items", "center");
    			add_location(div9, file, 53, 4, 1894);
    			attr_dev(div10, "class", "header__area-box");
    			add_location(div10, file, 48, 3, 1687);
    			attr_dev(div11, "class", "container custom-container");
    			add_location(div11, file, 47, 2, 1642);
    			attr_dev(div12, "class", "header__area");
    			add_location(div12, file, 46, 1, 1611);
    			add_location(span0, file, 79, 10, 2905);
    			add_location(br0, file, 79, 29, 2924);
    			add_location(span1, file, 79, 36, 2931);
    			add_location(br1, file, 79, 56, 2951);
    			add_location(span2, file, 79, 81, 2976);
    			add_location(h1, file, 79, 6, 2901);
    			set_style(span3, "font-weight", "600");
    			add_location(span3, file, 80, 192, 3192);
    			attr_dev(i1, "class", "fal fa-long-arrow-right");
    			add_location(i1, file, 80, 236, 3236);
    			attr_dev(a3, "class", "theme-btn");
    			attr_dev(a3, "href", "/demo-login");
    			set_style(a3, "background-color", "black");
    			set_style(a3, "border", "1px solid white");
    			set_style(a3, "margin-left", "10px");
    			set_style(a3, "font-size", "22px");
    			set_style(a3, "font-weight", "400");
    			set_style(a3, "padding-bottom", "4px");
    			add_location(a3, file, 80, 6, 3006);
    			attr_dev(div13, "class", "banner__area-content");
    			set_style(div13, "padding-top", "40px");
    			add_location(div13, file, 78, 5, 2832);
    			attr_dev(div14, "class", "col-xl-12");
    			add_location(div14, file, 77, 4, 2802);
    			attr_dev(div15, "class", "row");
    			add_location(div15, file, 76, 3, 2779);
    			attr_dev(div16, "class", "container");
    			add_location(div16, file, 75, 2, 2751);
    			attr_dev(div17, "class", "banner__area");
    			attr_dev(div17, "data-background", "/public/assets/img/banner.png");
    			set_style(div17, "padding-bottom", "20px");
    			add_location(div17, file, 74, 1, 2643);
    			if (!src_url_equal(img1.src, img1_src_value = "/public/assets/img/instagram.png")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "");
    			add_location(img1, file, 93, 54, 3646);
    			attr_dev(i2, "class", "fal fa-plus");
    			add_location(i2, file, 95, 82, 3832);
    			attr_dev(a4, "href", "/login?demo=yes");
    			add_location(a4, file, 95, 56, 3806);
    			attr_dev(div18, "class", "features__area-item-content-icon");
    			add_location(div18, file, 95, 9, 3759);
    			attr_dev(a5, "href", "/login?demo=yes");
    			add_location(a5, file, 96, 13, 3885);
    			add_location(h30, file, 96, 9, 3881);
    			add_location(p0, file, 97, 9, 3940);
    			attr_dev(div19, "class", "features__area-item-content");
    			add_location(div19, file, 94, 8, 3707);
    			attr_dev(div20, "class", "features__area-item swiper-slide");
    			add_location(div20, file, 93, 7, 3599);
    			if (!src_url_equal(img2.src, img2_src_value = "/public/assets/img/facebook.png")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "");
    			add_location(img2, file, 100, 80, 4082);
    			attr_dev(i3, "class", "fal fa-plus");
    			add_location(i3, file, 102, 82, 4267);
    			attr_dev(a6, "href", "/login?demo=yes");
    			add_location(a6, file, 102, 56, 4241);
    			attr_dev(div21, "class", "features__area-item-content-icon");
    			add_location(div21, file, 102, 9, 4194);
    			attr_dev(a7, "href", "/login?demo=yes");
    			add_location(a7, file, 103, 13, 4320);
    			add_location(h31, file, 103, 9, 4316);
    			add_location(p1, file, 104, 9, 4374);
    			attr_dev(div22, "class", "features__area-item-content");
    			add_location(div22, file, 101, 8, 4142);
    			attr_dev(div23, "class", "features__area-item features__area-item-hover swiper-slide");
    			add_location(div23, file, 100, 7, 4009);
    			if (!src_url_equal(img3.src, img3_src_value = "/public/assets/img/youtube.png")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "");
    			add_location(img3, file, 107, 54, 4487);
    			attr_dev(i4, "class", "fal fa-plus");
    			add_location(i4, file, 109, 82, 4671);
    			attr_dev(a8, "href", "/login?demo=yes");
    			add_location(a8, file, 109, 56, 4645);
    			attr_dev(div24, "class", "features__area-item-content-icon");
    			add_location(div24, file, 109, 9, 4598);
    			attr_dev(a9, "href", "/login?demo=yes");
    			add_location(a9, file, 110, 13, 4724);
    			add_location(h32, file, 110, 9, 4720);
    			add_location(p2, file, 111, 9, 4777);
    			attr_dev(div25, "class", "features__area-item-content");
    			add_location(div25, file, 108, 8, 4546);
    			attr_dev(div26, "class", "features__area-item swiper-slide");
    			add_location(div26, file, 107, 7, 4440);
    			if (!src_url_equal(img4.src, img4_src_value = "/public/assets/img/tiktok.png")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "");
    			add_location(img4, file, 114, 54, 4891);
    			attr_dev(i5, "class", "fal fa-plus");
    			add_location(i5, file, 116, 82, 5074);
    			attr_dev(a10, "href", "/login?demo=yes");
    			add_location(a10, file, 116, 56, 5048);
    			attr_dev(div27, "class", "features__area-item-content-icon");
    			add_location(div27, file, 116, 9, 5001);
    			attr_dev(a11, "href", "/login?demo=yes");
    			add_location(a11, file, 117, 13, 5127);
    			add_location(h33, file, 117, 9, 5123);
    			add_location(p3, file, 118, 9, 5179);
    			attr_dev(div28, "class", "features__area-item-content");
    			add_location(div28, file, 115, 8, 4949);
    			attr_dev(div29, "class", "features__area-item swiper-slide");
    			add_location(div29, file, 114, 7, 4844);
    			attr_dev(div30, "class", "swiper-wrapper");
    			add_location(div30, file, 92, 6, 3562);
    			attr_dev(div31, "class", "swiper features-slider");
    			add_location(div31, file, 91, 5, 3518);
    			attr_dev(div32, "class", "col-xl-12");
    			add_location(div32, file, 90, 4, 3488);
    			attr_dev(div33, "class", "row gx-0");
    			add_location(div33, file, 89, 3, 3460);
    			attr_dev(div34, "class", "container-fluid px-0");
    			add_location(div34, file, 88, 2, 3421);
    			attr_dev(div35, "class", "features__area");
    			add_location(div35, file, 87, 1, 3389);
    			attr_dev(span4, "class", "subtitle one");
    			add_location(span4, file, 134, 6, 5609);
    			set_style(span5, "font-weight", "900");
    			add_location(span5, file, 135, 15, 5678);
    			add_location(h20, file, 135, 6, 5669);
    			attr_dev(div36, "class", "services__area-title lg-t-center");
    			add_location(div36, file, 133, 5, 5554);
    			attr_dev(div37, "class", "col-xl-12");
    			add_location(div37, file, 132, 4, 5524);
    			attr_dev(div38, "class", "row mb-60");
    			add_location(div38, file, 131, 3, 5495);
    			add_location(span6, file, 141, 6, 5893);
    			if (!src_url_equal(img5.src, img5_src_value = "/public/assets/img/icon/services-11.png")) attr_dev(img5, "src", img5_src_value);
    			attr_dev(img5, "alt", "");
    			add_location(img5, file, 143, 7, 5963);
    			if (!src_url_equal(img6.src, img6_src_value = "/public/assets/img/icon/services-1.png")) attr_dev(img6, "src", img6_src_value);
    			attr_dev(img6, "alt", "");
    			add_location(img6, file, 145, 8, 6082);
    			attr_dev(div39, "class", "services__area-item-icon-one");
    			add_location(div39, file, 144, 7, 6030);
    			attr_dev(div40, "class", "services__area-item-icon");
    			add_location(div40, file, 142, 6, 5916);
    			attr_dev(a12, "href", "/login?demo=yes");
    			add_location(a12, file, 149, 39, 6258);
    			set_style(h40, "margin-bottom", "6px");
    			add_location(h40, file, 149, 7, 6226);
    			add_location(strong0, file, 150, 43, 6352);
    			add_location(strong1, file, 150, 84, 6393);
    			add_location(p4, file, 150, 7, 6316);
    			attr_dev(div41, "class", "services__area-item-content");
    			add_location(div41, file, 148, 6, 6176);
    			attr_dev(div42, "class", "services__area-item");
    			add_location(div42, file, 140, 5, 5851);
    			attr_dev(div43, "class", "col-xl-6 col-lg-6 col-md-6 mb-30");
    			add_location(div43, file, 139, 4, 5798);
    			add_location(span7, file, 156, 6, 6574);
    			if (!src_url_equal(img7.src, img7_src_value = "/public/assets/img/icon/services-22.png")) attr_dev(img7, "src", img7_src_value);
    			attr_dev(img7, "alt", "");
    			add_location(img7, file, 158, 7, 6644);
    			if (!src_url_equal(img8.src, img8_src_value = "/public/assets/img/icon/services-2.png")) attr_dev(img8, "src", img8_src_value);
    			attr_dev(img8, "alt", "");
    			add_location(img8, file, 160, 8, 6763);
    			attr_dev(div44, "class", "services__area-item-icon-one");
    			add_location(div44, file, 159, 7, 6711);
    			attr_dev(div45, "class", "services__area-item-icon");
    			add_location(div45, file, 157, 6, 6597);
    			attr_dev(a13, "href", "/login?demo=yes");
    			add_location(a13, file, 164, 39, 6939);
    			set_style(h41, "margin-bottom", "6px");
    			add_location(h41, file, 164, 7, 6907);
    			add_location(p5, file, 165, 7, 6997);
    			attr_dev(div46, "class", "services__area-item-content");
    			add_location(div46, file, 163, 6, 6857);
    			attr_dev(div47, "class", "services__area-item");
    			add_location(div47, file, 155, 5, 6532);
    			attr_dev(div48, "class", "col-xl-6 col-lg-6 col-md-6 md-mb-30");
    			add_location(div48, file, 154, 4, 6476);
    			add_location(span8, file, 171, 6, 7205);
    			if (!src_url_equal(img9.src, img9_src_value = "/public/assets/img/icon/services-33.png")) attr_dev(img9, "src", img9_src_value);
    			attr_dev(img9, "alt", "");
    			add_location(img9, file, 173, 7, 7275);
    			if (!src_url_equal(img10.src, img10_src_value = "/public/assets/img/icon/services-3.png")) attr_dev(img10, "src", img10_src_value);
    			attr_dev(img10, "alt", "");
    			add_location(img10, file, 175, 8, 7394);
    			attr_dev(div49, "class", "services__area-item-icon-one");
    			add_location(div49, file, 174, 7, 7342);
    			attr_dev(div50, "class", "services__area-item-icon");
    			add_location(div50, file, 172, 6, 7228);
    			attr_dev(a14, "href", "/login?demo=yes");
    			add_location(a14, file, 179, 39, 7570);
    			set_style(h42, "margin-bottom", "6px");
    			add_location(h42, file, 179, 7, 7538);
    			add_location(p6, file, 180, 7, 7629);
    			attr_dev(div51, "class", "services__area-item-content");
    			add_location(div51, file, 178, 6, 7488);
    			attr_dev(div52, "class", "services__area-item");
    			add_location(div52, file, 170, 5, 7163);
    			attr_dev(div53, "class", "col-xl-6 col-lg-6 col-md-6 md-mb-30");
    			add_location(div53, file, 169, 4, 7107);
    			add_location(span9, file, 186, 6, 7822);
    			if (!src_url_equal(img11.src, img11_src_value = "/public/assets/img/icon/services-44.png")) attr_dev(img11, "src", img11_src_value);
    			attr_dev(img11, "alt", "");
    			add_location(img11, file, 188, 7, 7892);
    			if (!src_url_equal(img12.src, img12_src_value = "/public/assets/img/icon/services-4.png")) attr_dev(img12, "src", img12_src_value);
    			attr_dev(img12, "alt", "");
    			add_location(img12, file, 190, 8, 8011);
    			attr_dev(div54, "class", "services__area-item-icon-one");
    			add_location(div54, file, 189, 7, 7959);
    			attr_dev(div55, "class", "services__area-item-icon");
    			add_location(div55, file, 187, 6, 7845);
    			attr_dev(a15, "href", "/login?demo=yes");
    			add_location(a15, file, 194, 39, 8187);
    			set_style(h43, "margin-bottom", "6px");
    			add_location(h43, file, 194, 7, 8155);
    			add_location(p7, file, 195, 7, 8243);
    			attr_dev(div56, "class", "services__area-item-content");
    			add_location(div56, file, 193, 6, 8105);
    			attr_dev(div57, "class", "services__area-item");
    			add_location(div57, file, 185, 5, 7780);
    			attr_dev(div58, "class", "col-xl-6 col-lg-6 col-md-6");
    			add_location(div58, file, 184, 4, 7733);
    			attr_dev(div59, "class", "row");
    			add_location(div59, file, 138, 3, 5775);
    			attr_dev(div60, "class", "container");
    			add_location(div60, file, 130, 2, 5467);
    			attr_dev(div61, "class", "services__area section-padding");
    			attr_dev(div61, "data-background", "/public/assets/img/services.png");
    			add_location(div61, file, 129, 1, 5369);
    			attr_dev(span10, "class", "subtitle one");
    			add_location(span10, file, 209, 6, 8620);
    			set_style(span11, "font-weight", "900");
    			add_location(span11, file, 210, 12, 8682);
    			add_location(h21, file, 210, 6, 8676);
    			attr_dev(div62, "class", "work__area-title lg-t-center");
    			add_location(div62, file, 208, 5, 8569);
    			attr_dev(div63, "class", "col-xl-12");
    			add_location(div63, file, 207, 4, 8539);
    			attr_dev(div64, "class", "row mb-60");
    			add_location(div64, file, 206, 3, 8510);
    			add_location(span12, file, 215, 35, 8904);
    			if (!src_url_equal(img13.src, img13_src_value = "/public/assets/img/icon/work-1.png")) attr_dev(img13, "src", img13_src_value);
    			attr_dev(img13, "alt", "");
    			add_location(img13, file, 216, 41, 8962);
    			attr_dev(div65, "class", "work__area-item-icon");
    			add_location(div65, file, 216, 6, 8927);
    			set_style(h44, "margin-bottom", "6px");
    			add_location(h44, file, 218, 7, 9076);
    			add_location(p8, file, 219, 7, 9128);
    			attr_dev(div66, "class", "work__area-item-content");
    			add_location(div66, file, 217, 6, 9030);
    			if (!src_url_equal(img14.src, img14_src_value = "/public/assets/img/icon/shape-1.png")) attr_dev(img14, "src", img14_src_value);
    			attr_dev(img14, "alt", "");
    			add_location(img14, file, 221, 42, 9224);
    			attr_dev(div67, "class", "work__area-item-shape");
    			add_location(div67, file, 221, 6, 9188);
    			attr_dev(div68, "class", "work__area-item");
    			add_location(div68, file, 215, 5, 8874);
    			attr_dev(div69, "class", "col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30");
    			add_location(div69, file, 214, 4, 8811);
    			add_location(span13, file, 225, 35, 9414);
    			if (!src_url_equal(img15.src, img15_src_value = "/public/assets/img/icon/work-2.png")) attr_dev(img15, "src", img15_src_value);
    			attr_dev(img15, "alt", "");
    			add_location(img15, file, 226, 41, 9472);
    			attr_dev(div70, "class", "work__area-item-icon");
    			add_location(div70, file, 226, 6, 9437);
    			set_style(h45, "margin-bottom", "6px");
    			add_location(h45, file, 228, 7, 9586);
    			add_location(p9, file, 229, 7, 9642);
    			attr_dev(div71, "class", "work__area-item-content");
    			add_location(div71, file, 227, 6, 9540);
    			if (!src_url_equal(img16.src, img16_src_value = "/public/assets/img/icon/shape-2.png")) attr_dev(img16, "src", img16_src_value);
    			attr_dev(img16, "alt", "");
    			add_location(img16, file, 231, 42, 9742);
    			attr_dev(div72, "class", "work__area-item-shape");
    			add_location(div72, file, 231, 6, 9706);
    			attr_dev(div73, "class", "work__area-item");
    			add_location(div73, file, 225, 5, 9384);
    			attr_dev(div74, "class", "col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30");
    			add_location(div74, file, 224, 4, 9316);
    			add_location(span14, file, 235, 35, 9918);
    			if (!src_url_equal(img17.src, img17_src_value = "/public/assets/img/icon/work-3.png")) attr_dev(img17, "src", img17_src_value);
    			attr_dev(img17, "alt", "");
    			add_location(img17, file, 236, 41, 9976);
    			attr_dev(div75, "class", "work__area-item-icon");
    			add_location(div75, file, 236, 6, 9941);
    			set_style(h46, "margin-bottom", "6px");
    			add_location(h46, file, 238, 7, 10090);
    			add_location(p10, file, 239, 7, 10141);
    			attr_dev(div76, "class", "work__area-item-content");
    			add_location(div76, file, 237, 6, 10044);
    			attr_dev(div77, "class", "work__area-item");
    			add_location(div77, file, 235, 5, 9888);
    			attr_dev(div78, "class", "col-xl-4 col-lg-4 col-md-6 pl-110");
    			add_location(div78, file, 234, 4, 9834);
    			attr_dev(div79, "class", "row mb-110");
    			add_location(div79, file, 213, 3, 8781);
    			set_style(span15, "font-weight", "800");
    			add_location(span15, file, 250, 38, 10455);
    			add_location(h50, file, 250, 9, 10426);
    			attr_dev(i6, "class", "fal fa-angle-up");
    			add_location(i6, file, 250, 95, 10512);
    			attr_dev(div80, "class", "faq-item-card-header");
    			add_location(div80, file, 249, 8, 10381);
    			add_location(p11, file, 252, 9, 10620);
    			attr_dev(div81, "class", "faq-item-card-header-content active");
    			add_location(div81, file, 251, 8, 10560);
    			attr_dev(div82, "class", "faq-item-card");
    			add_location(div82, file, 248, 7, 10344);
    			attr_dev(div83, "class", "faq-item");
    			add_location(div83, file, 247, 6, 10313);
    			set_style(span16, "font-weight", "800");
    			add_location(span16, file, 259, 46, 10933);
    			add_location(h51, file, 259, 9, 10896);
    			attr_dev(i7, "class", "fal fa-angle-down");
    			add_location(i7, file, 259, 97, 10984);
    			attr_dev(div84, "class", "faq-item-card-header");
    			add_location(div84, file, 258, 8, 10851);
    			add_location(p12, file, 261, 9, 11100);
    			attr_dev(div85, "class", "faq-item-card-header-content display-none");
    			add_location(div85, file, 260, 8, 11034);
    			attr_dev(div86, "class", "faq-item-card");
    			add_location(div86, file, 257, 7, 10814);
    			attr_dev(div87, "class", "faq-item");
    			add_location(div87, file, 256, 6, 10783);
    			set_style(span17, "font-weight", "800");
    			add_location(span17, file, 269, 17, 11421);
    			add_location(h52, file, 269, 9, 11413);
    			attr_dev(i8, "class", "fal fa-angle-down");
    			add_location(i8, file, 269, 77, 11481);
    			attr_dev(div88, "class", "faq-item-card-header");
    			add_location(div88, file, 268, 8, 11368);
    			add_location(p13, file, 271, 9, 11597);
    			attr_dev(div89, "class", "faq-item-card-header-content display-none");
    			add_location(div89, file, 270, 8, 11531);
    			attr_dev(div90, "class", "faq-item-card");
    			add_location(div90, file, 267, 7, 11331);
    			attr_dev(div91, "class", "faq-item");
    			add_location(div91, file, 266, 6, 11300);
    			set_style(span18, "font-weight", "800");
    			add_location(span18, file, 279, 13, 11891);
    			set_style(span19, "font-weight", "800");
    			add_location(span19, file, 279, 62, 11940);
    			set_style(span20, "font-weight", "800");
    			add_location(span20, file, 279, 110, 11988);
    			add_location(h53, file, 279, 9, 11887);
    			attr_dev(i9, "class", "fal fa-angle-down");
    			add_location(i9, file, 279, 168, 12046);
    			attr_dev(div92, "class", "faq-item-card-header");
    			add_location(div92, file, 278, 8, 11842);
    			add_location(p14, file, 281, 9, 12162);
    			attr_dev(div93, "class", "faq-item-card-header-content display-none");
    			add_location(div93, file, 280, 8, 12096);
    			attr_dev(div94, "class", "faq-item-card");
    			add_location(div94, file, 277, 7, 11805);
    			attr_dev(div95, "class", "faq-item");
    			add_location(div95, file, 276, 24, 11774);
    			set_style(span21, "font-weight", "800");
    			add_location(span21, file, 289, 45, 12488);
    			set_style(span22, "font-weight", "800");
    			add_location(span22, file, 289, 99, 12542);
    			add_location(h54, file, 289, 9, 12452);
    			attr_dev(i10, "class", "fal fa-angle-down");
    			add_location(i10, file, 289, 163, 12606);
    			attr_dev(div96, "class", "faq-item-card-header");
    			add_location(div96, file, 288, 8, 12407);
    			add_location(p15, file, 291, 9, 12722);
    			attr_dev(div97, "class", "faq-item-card-header-content display-none");
    			add_location(div97, file, 290, 8, 12656);
    			attr_dev(div98, "class", "faq-item-card");
    			add_location(div98, file, 287, 7, 12370);
    			attr_dev(div99, "class", "faq-item m-0");
    			add_location(div99, file, 286, 6, 12335);
    			attr_dev(div100, "class", "faq");
    			add_location(div100, file, 246, 5, 10288);
    			attr_dev(div101, "class", "col-xl-12");
    			add_location(div101, file, 245, 4, 10258);
    			attr_dev(div102, "class", "row");
    			add_location(div102, file, 244, 3, 10235);
    			attr_dev(div103, "class", "container");
    			add_location(div103, file, 205, 2, 8482);
    			attr_dev(div104, "class", "work__area section-padding");
    			add_location(div104, file, 204, 1, 8438);
    			add_location(strong2, file, 309, 11, 13416);
    			add_location(strong3, file, 309, 53, 13458);
    			add_location(strong4, file, 309, 90, 13495);
    			add_location(strong5, file, 309, 123, 13528);
    			add_location(br2, file, 310, 7, 13559);
    			add_location(strong6, file, 310, 18, 13570);
    			add_location(br3, file, 311, 7, 13630);
    			add_location(strong7, file, 311, 21, 13644);
    			add_location(strong8, file, 311, 49, 13672);
    			set_style(strong9, "text-transform", "lowercase");
    			add_location(strong9, file, 311, 86, 13709);
    			add_location(strong10, file, 311, 164, 13787);
    			add_location(strong11, file, 312, 14, 13844);
    			attr_dev(div105, "class", "footer__area-widget-about lg-t-center text-center text-muted");
    			set_style(div105, "font-weight", "300");
    			set_style(div105, "letter-spacing", "1.25px");
    			set_style(div105, "line-height", "2");
    			add_location(div105, file, 308, 6, 13263);
    			attr_dev(div106, "class", "footer__area-widget");
    			add_location(div106, file, 307, 5, 13222);
    			attr_dev(div107, "class", "col-xl-12 col-lg-12 text-center");
    			add_location(div107, file, 306, 4, 13170);
    			attr_dev(div108, "class", "row align-items-center");
    			add_location(div108, file, 305, 3, 13128);
    			attr_dev(div109, "class", "container");
    			add_location(div109, file, 304, 2, 13100);
    			attr_dev(div110, "class", "footer__area section-padding");
    			set_style(div110, "padding", "40px 0px");
    			add_location(div110, file, 303, 1, 13027);
    			add_location(strong12, file, 326, 16, 14270);
    			add_location(p16, file, 326, 6, 14260);
    			attr_dev(div111, "class", "copyright__area-left copyright__area-one-left");
    			add_location(div111, file, 325, 5, 14193);
    			attr_dev(div112, "class", "col-xl-12");
    			add_location(div112, file, 324, 4, 14163);
    			attr_dev(div113, "class", "row align-items-center copyright__area-border");
    			add_location(div113, file, 323, 3, 14098);
    			attr_dev(div114, "class", "container");
    			add_location(div114, file, 322, 2, 14070);
    			attr_dev(div115, "class", "copyright__area copyright__area-one");
    			add_location(div115, file, 321, 1, 14017);
    			attr_dev(path, "d", "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98");
    			add_location(path, file, 336, 3, 14584);
    			attr_dev(svg, "class", "scroll-circle svg-content");
    			attr_dev(svg, "width", "100%");
    			attr_dev(svg, "height", "100%");
    			attr_dev(svg, "viewBox", "-1 -1 102 102");
    			add_location(svg, file, 335, 2, 14489);
    			attr_dev(div116, "class", "scroll-up scroll-one");
    			add_location(div116, file, 334, 1, 14451);
    			if (!src_url_equal(script1.src, script1_src_value = "/public/assets/js/jquery-3.6.0.min.js")) attr_dev(script1, "src", script1_src_value);
    			add_location(script1, file, 340, 1, 14703);
    			if (!src_url_equal(script2.src, script2_src_value = "/public/assets/js/bootstrap.min.js")) attr_dev(script2, "src", script2_src_value);
    			add_location(script2, file, 342, 1, 14791);
    			if (!src_url_equal(script3.src, script3_src_value = "/public/assets/js/jquery.counterup.min.js")) attr_dev(script3, "src", script3_src_value);
    			add_location(script3, file, 344, 1, 14874);
    			if (!src_url_equal(script4.src, script4_src_value = "/public/assets/js/popper.min.js")) attr_dev(script4, "src", script4_src_value);
    			add_location(script4, file, 346, 1, 14963);
    			if (!src_url_equal(script5.src, script5_src_value = "/public/assets/js/progressbar.min.js")) attr_dev(script5, "src", script5_src_value);
    			add_location(script5, file, 348, 1, 15047);
    			if (!src_url_equal(script6.src, script6_src_value = "/public/assets/js/jquery.magnific-popup.min.js")) attr_dev(script6, "src", script6_src_value);
    			add_location(script6, file, 350, 1, 15133);
    			if (!src_url_equal(script7.src, script7_src_value = "/public/assets/js/jquery.nice-select.min.js")) attr_dev(script7, "src", script7_src_value);
    			add_location(script7, file, 352, 1, 15232);
    			if (!src_url_equal(script8.src, script8_src_value = "/public/assets/js/swiper-bundle.min.js")) attr_dev(script8, "src", script8_src_value);
    			add_location(script8, file, 354, 1, 15323);
    			if (!src_url_equal(script9.src, script9_src_value = "/public/assets/js/jquery.waypoints.min.js")) attr_dev(script9, "src", script9_src_value);
    			add_location(script9, file, 356, 1, 15412);
    			if (!src_url_equal(script10.src, script10_src_value = "/public/assets/js/isotope.pkgd.min.js")) attr_dev(script10, "src", script10_src_value);
    			add_location(script10, file, 358, 1, 15502);
    			if (!src_url_equal(script11.src, script11_src_value = "/public/assets/js/jquery.meanmenu.min.js")) attr_dev(script11, "src", script11_src_value);
    			add_location(script11, file, 360, 1, 15587);
    			if (!src_url_equal(script12.src, script12_src_value = "/public/assets/js/custom.js")) attr_dev(script12, "src", script12_src_value);
    			add_location(script12, file, 362, 1, 15675);
    			attr_dev(body, "class", "custom__cursor");
    			add_location(body, file, 36, 0, 1372);
    			attr_dev(html, "lang", "en");
    			add_location(html, file, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, html, anchor);
    			append_dev(html, head);
    			append_dev(head, meta0);
    			append_dev(head, t0);
    			append_dev(head, meta1);
    			append_dev(head, t1);
    			append_dev(head, meta2);
    			append_dev(head, t2);
    			append_dev(head, meta3);
    			append_dev(head, t3);
    			append_dev(head, meta4);
    			append_dev(head, t4);
    			append_dev(head, meta5);
    			append_dev(head, t5);
    			append_dev(head, title);
    			append_dev(head, t8);
    			append_dev(head, link0);
    			append_dev(head, t9);
    			append_dev(head, link1);
    			append_dev(head, t10);
    			append_dev(head, link2);
    			append_dev(head, t11);
    			append_dev(head, link3);
    			append_dev(head, t12);
    			append_dev(head, link4);
    			append_dev(head, t13);
    			append_dev(head, link5);
    			append_dev(head, t14);
    			append_dev(head, link6);
    			append_dev(head, t15);
    			append_dev(head, link7);
    			append_dev(head, t16);
    			append_dev(head, link8);
    			append_dev(html, t17);
    			append_dev(html, script0);
    			append_dev(html, t19);
    			append_dev(html, body);
    			append_dev(body, div3);
    			append_dev(div3, div2);
    			append_dev(div2, div0);
    			append_dev(div2, t20);
    			append_dev(div2, div1);
    			append_dev(body, t21);
    			append_dev(body, div12);
    			append_dev(div12, div11);
    			append_dev(div11, div10);
    			append_dev(div10, div5);
    			append_dev(div5, a0);
    			append_dev(a0, img0);
    			append_dev(div5, t22);
    			append_dev(div5, div4);
    			append_dev(div10, t23);
    			append_dev(div10, div9);
    			append_dev(div9, div6);
    			append_dev(div6, ul);
    			if_block.m(ul, null);
    			append_dev(ul, t24);
    			append_dev(ul, li);
    			append_dev(li, a1);
    			append_dev(div9, t26);
    			append_dev(div9, div8);
    			append_dev(div8, div7);
    			append_dev(div7, a2);
    			append_dev(a2, i0);
    			append_dev(body, t27);
    			append_dev(body, div17);
    			append_dev(div17, div16);
    			append_dev(div16, div15);
    			append_dev(div15, div14);
    			append_dev(div14, div13);
    			append_dev(div13, h1);
    			append_dev(h1, span0);
    			append_dev(h1, t29);
    			append_dev(h1, br0);
    			append_dev(h1, t30);
    			append_dev(h1, span1);
    			append_dev(h1, br1);
    			append_dev(h1, t32);
    			append_dev(h1, span2);
    			append_dev(div13, t34);
    			append_dev(div13, a3);
    			append_dev(a3, t35);
    			append_dev(a3, span3);
    			append_dev(a3, t37);
    			append_dev(a3, i1);
    			append_dev(body, t38);
    			append_dev(body, div35);
    			append_dev(div35, div34);
    			append_dev(div34, div33);
    			append_dev(div33, div32);
    			append_dev(div32, div31);
    			append_dev(div31, div30);
    			append_dev(div30, div20);
    			append_dev(div20, img1);
    			append_dev(div20, t39);
    			append_dev(div20, div19);
    			append_dev(div19, div18);
    			append_dev(div18, a4);
    			append_dev(a4, i2);
    			append_dev(div19, t40);
    			append_dev(div19, h30);
    			append_dev(h30, a5);
    			append_dev(div19, t42);
    			append_dev(div19, p0);
    			append_dev(div30, t44);
    			append_dev(div30, div23);
    			append_dev(div23, img2);
    			append_dev(div23, t45);
    			append_dev(div23, div22);
    			append_dev(div22, div21);
    			append_dev(div21, a6);
    			append_dev(a6, i3);
    			append_dev(div22, t46);
    			append_dev(div22, h31);
    			append_dev(h31, a7);
    			append_dev(div22, t48);
    			append_dev(div22, p1);
    			append_dev(div30, t50);
    			append_dev(div30, div26);
    			append_dev(div26, img3);
    			append_dev(div26, t51);
    			append_dev(div26, div25);
    			append_dev(div25, div24);
    			append_dev(div24, a8);
    			append_dev(a8, i4);
    			append_dev(div25, t52);
    			append_dev(div25, h32);
    			append_dev(h32, a9);
    			append_dev(div25, t54);
    			append_dev(div25, p2);
    			append_dev(div30, t56);
    			append_dev(div30, div29);
    			append_dev(div29, img4);
    			append_dev(div29, t57);
    			append_dev(div29, div28);
    			append_dev(div28, div27);
    			append_dev(div27, a10);
    			append_dev(a10, i5);
    			append_dev(div28, t58);
    			append_dev(div28, h33);
    			append_dev(h33, a11);
    			append_dev(div28, t60);
    			append_dev(div28, p3);
    			append_dev(body, t62);
    			append_dev(body, div61);
    			append_dev(div61, div60);
    			append_dev(div60, div38);
    			append_dev(div38, div37);
    			append_dev(div37, div36);
    			append_dev(div36, span4);
    			append_dev(div36, t64);
    			append_dev(div36, h20);
    			append_dev(h20, t65);
    			append_dev(h20, span5);
    			append_dev(h20, t67);
    			append_dev(div60, t68);
    			append_dev(div60, div59);
    			append_dev(div59, div43);
    			append_dev(div43, div42);
    			append_dev(div42, span6);
    			append_dev(div42, t70);
    			append_dev(div42, div40);
    			append_dev(div40, img5);
    			append_dev(div40, t71);
    			append_dev(div40, div39);
    			append_dev(div39, img6);
    			append_dev(div42, t72);
    			append_dev(div42, div41);
    			append_dev(div41, h40);
    			append_dev(h40, a12);
    			append_dev(div41, t74);
    			append_dev(div41, p4);
    			append_dev(p4, t75);
    			append_dev(p4, t76);
    			append_dev(p4, strong0);
    			append_dev(p4, t78);
    			append_dev(p4, strong1);
    			append_dev(p4, t80);
    			append_dev(div59, t81);
    			append_dev(div59, div48);
    			append_dev(div48, div47);
    			append_dev(div47, span7);
    			append_dev(div47, t83);
    			append_dev(div47, div45);
    			append_dev(div45, img7);
    			append_dev(div45, t84);
    			append_dev(div45, div44);
    			append_dev(div44, img8);
    			append_dev(div47, t85);
    			append_dev(div47, div46);
    			append_dev(div46, h41);
    			append_dev(h41, a13);
    			append_dev(div46, t87);
    			append_dev(div46, p5);
    			append_dev(div59, t89);
    			append_dev(div59, div53);
    			append_dev(div53, div52);
    			append_dev(div52, span8);
    			append_dev(div52, t91);
    			append_dev(div52, div50);
    			append_dev(div50, img9);
    			append_dev(div50, t92);
    			append_dev(div50, div49);
    			append_dev(div49, img10);
    			append_dev(div52, t93);
    			append_dev(div52, div51);
    			append_dev(div51, h42);
    			append_dev(h42, a14);
    			append_dev(div51, t95);
    			append_dev(div51, p6);
    			append_dev(div59, t97);
    			append_dev(div59, div58);
    			append_dev(div58, div57);
    			append_dev(div57, span9);
    			append_dev(div57, t99);
    			append_dev(div57, div55);
    			append_dev(div55, img11);
    			append_dev(div55, t100);
    			append_dev(div55, div54);
    			append_dev(div54, img12);
    			append_dev(div57, t101);
    			append_dev(div57, div56);
    			append_dev(div56, h43);
    			append_dev(h43, a15);
    			append_dev(div56, t103);
    			append_dev(div56, p7);
    			append_dev(body, t105);
    			append_dev(body, div104);
    			append_dev(div104, div103);
    			append_dev(div103, div64);
    			append_dev(div64, div63);
    			append_dev(div63, div62);
    			append_dev(div62, span10);
    			append_dev(div62, t107);
    			append_dev(div62, h21);
    			append_dev(h21, t108);
    			append_dev(h21, span11);
    			append_dev(h21, t110);
    			append_dev(div103, t111);
    			append_dev(div103, div79);
    			append_dev(div79, div69);
    			append_dev(div69, div68);
    			append_dev(div68, span12);
    			append_dev(div68, t113);
    			append_dev(div68, div65);
    			append_dev(div65, img13);
    			append_dev(div68, t114);
    			append_dev(div68, div66);
    			append_dev(div66, h44);
    			append_dev(div66, t116);
    			append_dev(div66, p8);
    			append_dev(div68, t118);
    			append_dev(div68, div67);
    			append_dev(div67, img14);
    			append_dev(div79, t119);
    			append_dev(div79, div74);
    			append_dev(div74, div73);
    			append_dev(div73, span13);
    			append_dev(div73, t121);
    			append_dev(div73, div70);
    			append_dev(div70, img15);
    			append_dev(div73, t122);
    			append_dev(div73, div71);
    			append_dev(div71, h45);
    			append_dev(div71, t124);
    			append_dev(div71, p9);
    			append_dev(div73, t126);
    			append_dev(div73, div72);
    			append_dev(div72, img16);
    			append_dev(div79, t127);
    			append_dev(div79, div78);
    			append_dev(div78, div77);
    			append_dev(div77, span14);
    			append_dev(div77, t129);
    			append_dev(div77, div75);
    			append_dev(div75, img17);
    			append_dev(div77, t130);
    			append_dev(div77, div76);
    			append_dev(div76, h46);
    			append_dev(div76, t132);
    			append_dev(div76, p10);
    			append_dev(div103, t134);
    			append_dev(div103, div102);
    			append_dev(div102, div101);
    			append_dev(div101, div100);
    			append_dev(div100, div83);
    			append_dev(div83, div82);
    			append_dev(div82, div80);
    			append_dev(div80, h50);
    			append_dev(h50, t135);
    			append_dev(h50, t136);
    			append_dev(h50, span15);
    			append_dev(h50, t138);
    			append_dev(div80, t139);
    			append_dev(div80, i6);
    			append_dev(div82, t140);
    			append_dev(div82, div81);
    			append_dev(div81, p11);
    			append_dev(div100, t143);
    			append_dev(div100, div87);
    			append_dev(div87, div86);
    			append_dev(div86, div84);
    			append_dev(div84, h51);
    			append_dev(h51, t144);
    			append_dev(h51, t145);
    			append_dev(h51, span16);
    			append_dev(div84, t147);
    			append_dev(div84, i7);
    			append_dev(div86, t148);
    			append_dev(div86, div85);
    			append_dev(div85, p12);
    			append_dev(div100, t152);
    			append_dev(div100, div91);
    			append_dev(div91, div90);
    			append_dev(div90, div88);
    			append_dev(div88, h52);
    			append_dev(h52, t153);
    			append_dev(h52, span17);
    			append_dev(h52, t155);
    			append_dev(div88, t156);
    			append_dev(div88, i8);
    			append_dev(div90, t157);
    			append_dev(div90, div89);
    			append_dev(div89, p13);
    			append_dev(div100, t159);
    			append_dev(div100, div95);
    			append_dev(div95, div94);
    			append_dev(div94, div92);
    			append_dev(div92, h53);
    			append_dev(h53, span18);
    			append_dev(h53, t161);
    			append_dev(h53, span19);
    			append_dev(h53, t163);
    			append_dev(h53, span20);
    			append_dev(h53, t165);
    			append_dev(div92, t166);
    			append_dev(div92, i9);
    			append_dev(div94, t167);
    			append_dev(div94, div93);
    			append_dev(div93, p14);
    			append_dev(div100, t171);
    			append_dev(div100, div99);
    			append_dev(div99, div98);
    			append_dev(div98, div96);
    			append_dev(div96, h54);
    			append_dev(h54, t172);
    			append_dev(h54, t173);
    			append_dev(h54, span21);
    			append_dev(h54, t175);
    			append_dev(h54, span22);
    			append_dev(h54, t177);
    			append_dev(div96, t178);
    			append_dev(div96, i10);
    			append_dev(div98, t179);
    			append_dev(div98, div97);
    			append_dev(div97, p15);
    			append_dev(body, t183);
    			append_dev(body, div110);
    			append_dev(div110, div109);
    			append_dev(div109, div108);
    			append_dev(div108, div107);
    			append_dev(div107, div106);
    			append_dev(div106, div105);
    			append_dev(div105, t184);
    			append_dev(div105, strong2);
    			append_dev(div105, t186);
    			append_dev(div105, strong3);
    			append_dev(div105, t188);
    			append_dev(div105, strong4);
    			append_dev(div105, t190);
    			append_dev(div105, strong5);
    			append_dev(div105, t192);
    			append_dev(div105, br2);
    			append_dev(div105, t193);
    			append_dev(div105, strong6);
    			append_dev(div105, t195);
    			append_dev(div105, br3);
    			append_dev(div105, t196);
    			append_dev(div105, strong7);
    			append_dev(div105, t198);
    			append_dev(div105, strong8);
    			append_dev(div105, t200);
    			append_dev(div105, strong9);
    			append_dev(div105, t202);
    			append_dev(div105, strong10);
    			append_dev(div105, t205);
    			append_dev(div105, strong11);
    			append_dev(body, t208);
    			append_dev(body, div115);
    			append_dev(div115, div114);
    			append_dev(div114, div113);
    			append_dev(div113, div112);
    			append_dev(div112, div111);
    			append_dev(div111, p16);
    			append_dev(p16, t209);
    			append_dev(p16, strong12);
    			append_dev(p16, t211);
    			append_dev(body, t212);
    			append_dev(body, div116);
    			append_dev(div116, svg);
    			append_dev(svg, path);
    			append_dev(body, t213);
    			append_dev(body, script1);
    			append_dev(body, t214);
    			append_dev(body, script2);
    			append_dev(body, t215);
    			append_dev(body, script3);
    			append_dev(body, t216);
    			append_dev(body, script4);
    			append_dev(body, t217);
    			append_dev(body, script5);
    			append_dev(body, t218);
    			append_dev(body, script6);
    			append_dev(body, t219);
    			append_dev(body, script7);
    			append_dev(body, t220);
    			append_dev(body, script8);
    			append_dev(body, t221);
    			append_dev(body, script9);
    			append_dev(body, t222);
    			append_dev(body, script10);
    			append_dev(body, t223);
    			append_dev(body, script11);
    			append_dev(body, t224);
    			append_dev(body, script12);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Home', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.59.2 */

    // (13:4) <Route path="/">
    function create_default_slot_1(ctx) {
    	let home;
    	let current;
    	home = new Home({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(home.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(home, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(home.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(home.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(home, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(13:4) <Route path=\\\"/\\\">",
    		ctx
    	});

    	return block;
    }

    // (12:0) <Router {url}>
    function create_default_slot(ctx) {
    	let route;
    	let current;

    	route = new svelteRouterExports.Route({
    			props: {
    				path: "/",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(route.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(route, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const route_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				route_changes.$$scope = { dirty, ctx };
    			}

    			route.$set(route_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(route.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(route.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(route, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(12:0) <Router {url}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let router;
    	let current;

    	router = new svelteRouterExports.Router({
    			props: {
    				url: /*url*/ ctx[0],
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(router.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(router, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const router_changes = {};
    			if (dirty & /*url*/ 1) router_changes.url = /*url*/ ctx[0];

    			if (dirty & /*$$scope*/ 4) {
    				router_changes.$$scope = { dirty, ctx };
    			}

    			router.$set(router_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(router.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(router.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(router, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const routes = { "/": Home };
    	let { url = "" } = $$props;
    	const writable_props = ['url'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('url' in $$props) $$invalidate(0, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({ Route: svelteRouterExports.Route, Router: svelteRouterExports.Router, Home, routes, url });

    	$$self.$inject_state = $$props => {
    		if ('url' in $$props) $$invalidate(0, url = $$props.url);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { url: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get url() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		isLogin: true
    	}
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
