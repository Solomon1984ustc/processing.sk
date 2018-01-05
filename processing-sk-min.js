!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ProcessingSk={})}(this,function(e){"use strict";function t(e,t,n){var o=n||[];return new ie(function(){var n=null;if("function"!=typeof e?e[t]&&(n=e[t]):n=e,null==n)throw new Error("Couldn't infer function to wrap");var i=ge(arguments).filter(function(e){return void 0!==e});ae(t,i,function(e){return void 0===e?0:e.filter(function(e){return!e.optional}).length}(o),o.length,!1),function(e,t){t.forEach(function(t){var n=te(t,2),o=n[0],i=n[1],r=Object.keys(i)[0];if(Array.isArray(i[r])||(i[r]=[i[r]]),!i[r].some(function(e){return!0===e||("string"==typeof e?o.tp$name===e:o instanceof e&&(!e.allowed||o in e.allowed))}))throw new ue(e+": "+r+" (value: "+ce(o)+") not of type "+i[r].map(function(e){return e.tp$name}))})}(t,function(e,t,n){return i.map(function(t,o){return e(t,n[o])})}(function(e,t){return[e,t]},0,o));var r=i.filter(function(e,t){return void 0===o[t].ignored||!o[t].ignored}).map(function(e,t){var n=o[t];return n===Pe?e:n.converter?n.converter(ce(e)):ce(e)}),a=n.apply(null,r);return pe(a)})}function n(e){if("string"==typeof e){var t=/#([A-F0-9]{6})/g.exec(e);if(2!==t.length)throw new le(e+' not in the correct format for a color expecting "#AB12F4"');return parseInt(t[1],16)+4278190080}return e}function o(e){Ee=function(t,n){return de(e,function(e){return function(t,n){ve(n,e)}}(t),"OptionalContextManager_"+n,[])}}function i(e,t){var n=me(e);if(!n.includes("__call__")||!n.includes("__enter__")||!n.includes("__exit__"))throw new Error("The optional context manager needs a __call__, __enter__ and __exit__ function.");return fe(Ee(e,t))}function r(e,t,n){return function(){if(he.has(n))return he.get(n);var o=e.apply(null,t);return he.set(n,o),o}}function a(e,t){t.__getattr__=new Kt(function(e,t){switch(Jt(t)){case"frameCount":return Wt(ye.frameCount);case"frameRate":return Wt(ye.frameRate);case"height":return Wt(ye.height);case"width":return Wt(ye.width);case"online":return Wt(ye.online);case"focused":return Wt(ye.focused);default:return}})}function l(e,n){n.__init__=t(function(e){e.v=ye.__frameRate},"__init__",[Pe]),n.__call__=t(function(e,t){ye.frameRate(t),e.v=t},"__call__",[Pe,{rate:Qt}])}function u(e,n){n.__init__=t(function(e,t){t&&(e.v=new ye.PFont(t))},"__init__",[Pe,{"input ":Mn,optional:Se}]);var o=Hn("staticmethod",e),i=new Dn(function(){return new Cn(ye.PFont.list())});n.list=Vn(o,i)}function s(e,t,n,o){e.v=ye.createGraphics(t,n,o),void 0!==o&&o!==Wn&&o!==Jn||(e.v.toImageData=function(t,n,o,i){t=void 0!==t?t:0,n=void 0!==n?n:0,o=void 0!==o?o:ye.width,i=void 0!==i?i:ye.height;for(var r=void 0;void 0===r;)r=e.v.externals.context.getImageData(t,n,o,i);return r})}function c(e,n){n.__init__=t(s,"__init__",[Pe,{width:no},{height:no},{renderer:no,allowed:[Wn,Jn,qn,Kn,Qn,$n,eo],optional:Se}]),n.beginDraw=new oo(function(e){e.v.beginDraw()}),n.endDraw=new oo(function(e){e.v.endDraw()}),n.__getattr__=new oo(function(e,t){var n=e.v[so(t)];if(void 0!==n)return"function"==typeof n?new oo(function(e){var t=Array.from(arguments).map(so);return uo(n.apply(e.v,t))}):uo(n)})}function p(e,t,n,o){e.v=new ye.PImage(t,n,o),xo(e,"pixels",Ao(ri,e))}function _(t,n,o,i,r){var a=[n,o,i,r].filter(function(e){return void 0!==e});if(2==a.length)return t.v.get.apply(t.v,a);var l=Ao(e.PImage);return l.v=t.v.get.apply(t.v,a),xo(l,"pixels",Ao(ri,l)),l}function d(e,t,n,o){e.v.set(t,n,o)}function f(e,t,n,o,i,r,a,l,u,s){return e.v.copy(t,n,o,i,r,a,l,u,s)}function v(e,t){e.v.mask(t)}function m(e,t,n,o,i,r,a,l,u,s){e.v.blend(t,n,o,i,r,a,l,u,s)}function g(e,t,n){e.v.filter(t,n)}function h(e,t){e.v.save(t)}function E(e,t,n){e.v.save(t,n)}function S(e){e.v.loadPixels()}function P(e,t,n,o,i){e.v.updatePixels(t,n,o,i)}function x(e,o){o.__init__=t(function(e,t){e.image=t},"__init__",[Pe,{image:"PImage",optional:Se}]),o.__getitem__=t(function(e,t){return e.image.pixels[t]},"__getitem__",[Pe,{index:mo}]),o.__setitem__=t(function(e,t,n){return e.image.pixels[t]=n},"__setitem__",[Pe,{index:mo},{color:[mo,So,Eo,ho],converter:n}]),o.__len__=t(function(e){return e.image.width*e.image.height},"__len__",[Pe])}function y(e,o){o.__init__=t(p,"__init__",[Pe,{width:[mo,ho],optional:Se},{height:mo,optional:Se},{format:mo,allowed:[1,2,4],optional:Se}]),o.__getattr__=new vo(function(e,t){return"width"===(t=bo(t))?wo(e.v.width):"height"===t?wo(e.v.height):void 0}),o.get=t(_,"get",[Pe,{x:mo},{y:mo},{width:mo,optional:Se},{height:mo,optional:Se}]),o.set=t(d,"set",[Pe,{x:mo},{y:mo},{color:[mo,So,Eo,ho],converter:n}]),o.copy=t(f,"copy",[Pe,{srcImg:[mo,"PImage"]},{sx:mo},{sy:mo},{swidth:mo},{sheight:mo},{dx:mo},{dy:mo},{dwidth:mo},{dheight:mo,optional:Se}]),o.mask=t(v,"mask",[Pe,{maskImg:["PImage",go]}]),o.blend=t(m,"blend",[Pe,{srcImg:[mo,"PImage"]},{x:mo},{y:mo},{width:mo},{height:mo},{dx:mo},{dy:mo},{dwidth:mo},{dheight:mo},{MODE:mo,optional:Se,allowed:[Oo,ko,Lo,Do,No,Co,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo]}]),o.filter=t(g,"filter",[Pe,{MODE:mo,allowed:[Yo,jo,Zo,Wo,Jo,qo,Ko,Qo]},{srcImg:"PImage",optional:Se}]),o.save=t(h,"save",[Pe,{filename:ho}]),o.resize=t(E,"resize",[Pe,{wide:mo},{high:mo}]),o.loadPixels=t(S,"loadPixels"),o.updatePixels=t(P,"updatePixels",[Pe,{x:mo,optional:Se},{y:mo,optional:Se},{w:mo,optional:Se},{h:mo,optional:Se}])}function T(){var e=Ao(ri);return e.image={pixels:ye.pixels},e}function A(e,t){t.__getattr__=new Ti(function(e,t){return"key"===(t=yi(t))?xi(ye.key.toString()):"keyCode"===t?xi(ye.keyCode):"keyPressed"===t?xi(ye.__keyPressed):void 0})}function R(e,t){t.__getattr__=new Ui(function(e,t){switch(Hi(t)){case"x":return Vi(ye.mouseX);case"y":return Vi(ye.mouseY);case"px":return Vi(ye.pmouseX);case"py":return Vi(ye.pmouseY);case"pressed":return Vi(ye.__mousePressed);case"button":return Vi(ye.mouseButton);default:return}})}function I(e,t){t.__init__=new fr(function(e){e.pixels=null}),t.__getattr__=new fr(function(e,t){switch(t=sr(t)){case"height":return cr(Da.height);case"width":return cr(Da.width);case"pixels":return null==e.pixels&&(e.pixels=new dr(Da.pixels.toArray())),e.pixels}})}function b(e){return e.v.isVisible()}function w(e,t){e.v.setVisible(t)}function O(e){e.v.disableStyle()}function k(e){e.v.enableStyle()}function L(t,n){var o=t.v.getChild(n);if(null!=o){var i=Sk.misceval.callsim(e.PShape);return i.v=o,i}return null}function D(e,t,n,o){e.v.translate(t.v,n.v,o.v)}function N(e,t){e.v.rotate(t)}function C(e,t){e.v.rotateX(t)}function M(e,t){e.v.rotateY(t)}function G(e,t){e.v.rotateZ(t)}function F(e,t,n,o){e.v.scale(t,n,o)}function B(n,o){o.__getattr__=new Sk.builtin.func(function(e,t){switch(t=Ar(t)){case"width":return Rr(e.v.width);case"height":return Rr(e.v.height)}}),o.isVisible=t(b,"isVisible",[Pe]),o.setVisible=t(w,"setVisible"[{value:yr}]),o.disableStyle=t(O,"disableStyle",[Pe]),o.enableStyle=t(k,"enableStyle",[Pe]),o.getChild=t(L,"getChild",[Pe,{shape:e.PShape}]),o.translate=t(D,"translate",[Pe,{x:[Pr,xr]},{y:[Pr,xr]},{z:[Pr,xr],optional:Se}]),o.rotate=t(N,"rotate",[Pe,{angle:[Pr,xr]}]),o.rotateX=t(C,"rotateX",[Pe,{angle:[Pr,xr]}]),o.rotateY=t(M,"rotateY",[Pe,{angle:[Pr,xr]}]),o.rotateZ=t(G,"rotateZ",[Pe,{angle:[Pr,xr]}]),o.scale=t(F,"scale"[{z:[Pr,xr],optional:Se}])}function z(e,t,n,o){e.v=new Da.PVector(t,n,o)}function V(e,t,n,o){e.v.set(t,n,o)}function H(t){var n=la(e.PVector);return n.v=t.v.get(),n}function U(t,n){var o=la(e.PVector);return o.v=t.v.add(n),o}function X(t,n){var o=la(e.PVector);return o.v=t.v.sub(n),o}function Y(t,n){var o=la(e.PVector);return o.v=t.v.mult(n),o}function j(t,n){var o=la(e.PVector);return o.v=t.v.div(n),o}function Z(t,n){var o=la(e.PVector);return o.v=t.v.dot(n),o}function W(t,n){var o=la(e.PVector);return o.v=t.v.cross(n),o}function J(t,n){var o=la(e.PVector);return o.v=t.v.dist(n),o}function q(t,n){var o=la(e.PVector);return o.v=t.v.angleBetween(n),o}function K(e,t){e.v.limit(t)}function Q(e,n){n.__init__=t(z,"__init__",[Pe,{x:ia,optional:Se},{y:ia,optional:Se},{z:ia,optional:Se}]),n.__getattr__=new Sk.builtin.func(function(e,t){return"x"===(t=Sk.ffi.remapToJs(t))?sa(e.v.x):"y"===t?sa(e.v.y):"z"===t?Sk.builtin.assk$(e.v.z):void 0}),n.get=t(H,"get",[Pe]),n.set=t(V,"set",[Pe,{x:ia},{x:ia,optional:Se},{x:ia,optional:Se}]),n.mag=t(function(e){return e.v.mag()},"mag",[Pe]),n.add=t(U,"add",[Pe,{vector:"PVector"}]),n.sub=t(X,"sub",[Pe,{vector:"PVector"}]),n.mult=t(Y,"mult",[Pe,{vector:"PVector"}]),n.div=t(j,"div",[Pe,{vector:"PVector"}]),n.dist=t(J,"dist",[Pe,{vector:"PVector"}]),n.dot=t(Z,"dot",[Pe,{x:[ia,ra]},{y:[ia,ra],optional:Se},{z:[ia,ra],optional:Se}]),n.cross=t(W,"cross",[Pe,{vector:"PVector"}]),n.normalize=t(function(e){return e.normalize()},"normalize",[Pe]),n.limit=t(K,"limit",[Pe,{value:[ia,ra]}]),n.angleBetween=t(q,"angleBetween",[Pe,{vector:"PVector"}]),n.array=t(function(e){return e.v.array()},"array",[Pe]),n.__repr__=t(function(e){return e.v.toString()},"repr",[Pe])}function $(){return null==Da}if("function"==typeof require){var ee=require("fs").readFileSync("bower_components/skulpt/skulpt.min.js").toString();(0,eval)(ee)}var te=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ne=Sk.builtin,oe=ne.str,ie=ne.func,re=ne.NotImplementedError,ae=ne.pyCheckArgs,le=ne.ValueError,ue=ne.TypeError,se=Sk.ffi,ce=se.remapToJs,pe=se.remapToPy,_e=Sk.misceval,de=_e.buildClass,fe=_e.callsim,ve=Object.assign,me=Object.keys,ge=Array.from,he=new Map,Ee=void 0,Se=!0,Pe={self:!0},xe=new ie(function(){throw new re}),ye=(new oe("processing"),new Proxy({},{get:function(t,n){return e.processingInstance[n]}})),Te=Sk.builtin,Ae=Te.float_,Re=Te.int_,Ie={arc:t(ye,"arc",[{x:[Re,Ae]},{y:[Re,Ae]},{width:[Re,Ae]},{height:[Re,Ae]},{start:[Re,Ae]},{stop:[Re,Ae]}]),ellipse:t(ye,"ellipse",[{x:[Re,Ae]},{y:[Re,Ae]},{width:[Re,Ae]},{height:[Re,Ae]}]),line:t(ye,"line",[{x1:[Re,Ae]},{y1:[Re,Ae]},{z1:[Re,Ae]},{x2:[Re,Ae]},{y2:[Re,Ae],optional:Se},{z2:[Re,Ae],optional:Se}]),point:t(ye,"point",[{x:[Re,Ae]},{y:[Re,Ae]},{z:[Re,Ae],optional:Se}]),quad:t(ye,"quad",[{x1:[Re,Ae]},{y1:[Re,Ae]},{x2:[Re,Ae]},{y2:[Re,Ae]},{x3:[Re,Ae]},{y3:[Re,Ae]},{x4:[Re,Ae]},{y4:[Re,Ae]}]),rect:t(ye,"rect",[{x:[Re,Ae]},{y:[Re,Ae]},{width:[Re,Ae]},{height:[Re,Ae]},{tlradius:[Re,Ae],optional:Se},{trradius:[Re,Ae],optional:Se},{brradius:[Re,Ae],optional:Se},{blradius:[Re,Ae],optional:Se}]),triangle:t(ye,"triangle",[{x1:[Re,Ae]},{y1:[Re,Ae]},{x2:[Re,Ae]},{y2:[Re,Ae]},{x3:[Re,Ae]},{y3:[Re,Ae]}])},be=Sk.builtin,we=be.float_,Oe=be.int_,ke={box:t(ye,"box",[{width:[Oe,we]},{height:[Oe,we],optional:Se},{depth:[Oe,we],optional:Se}]),sphere:t(ye,"sphere",[{radius:[Oe,we]}]),sphereDetail:t(ye,"sphereDetail",[{ures:Oe},{vres:Oe,optional:Se}])},Le=Sk.ffi.remapToPy,De={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8},Ne=Object.keys(De).reduce(function(e,t){return e[t]=Le(De[t]),e},{}),Ce=Sk.builtin,Me=Ce.int_,Ge=Ce.str,Fe=Ce.float_,Be=Ne.ROUND,ze=Ne.SQUARE,Ve=Ne.BUTT,He=Ne.MITTER,Ue=Ne.BEVEL,Xe=Ne.CENTER,Ye=Ne.RADIUS,je=Ne.CORNER,Ze=Ne.CORNERS,We={ellipseMode:t(ye,"ellipseMode",[{mode:Me,allowed:[Xe,Ye,je,Ze]}]),noSmooth:t(ye,"noSmooth"),smooth:t(ye,"smooth",[{level:Me,allows:[2,4,8],ignored:!0,optional:Se}]),rectMode:t(ye,"rectMode",[{mode:Me,allowed:[Xe,Ye,je,Ze]}]),strokeCap:t(ye,"strokeCap",[{mode:Ge,allowed:[Be,ze,Ve]}]),strokeJoin:t(ye,"strokeJoin",[{mode:Ge,allowed:[He,Ue,Be]}]),strokeWeight:t(ye,"strokeWeight",[{width:[Me,Fe]}])},Je=Sk.builtin,qe=Je.int_,Ke=Je.float_,Qe=Je.list,$e={abs:t(ye,"abs",[{value:[qe,Ke]}]),ceil:t(ye,"ceil",[{value:[qe,Ke]}]),constrain:t(ye,"constrain",[{value:[qe,Ke]},{min:[qe,Ke]},{max:[qe,Ke]}]),dist:t(ye,"dist",[{x1:[qe,Ke]},{y1:[qe,Ke]},{z1:[qe,Ke]},{x2:[qe,Ke]},{y2:[qe,Ke],optional:Se},{z2:[qe,Ke],optional:Se}]),exp:t(ye,"exp",[{value:[qe,Ke]}]),floor:t(ye,"floor",[{value:[qe,Ke]}]),lerp:t(ye,"lerp",[{value1:[qe,Ke]},{value2:[qe,Ke]},{amt:[qe,Ke]}]),mag:t(ye,"mag",[{a:[qe,Ke]},{a:[qe,Ke]},{a:[qe,Ke],optional:Se}]),map:t(ye,"map",[{value:[qe,Ke]},{low1:[qe,Ke]},{high1:[qe,Ke]},{low2:[qe,Ke]},{high2:[qe,Ke]}]),max:t(ye,"max",[{values:[Qe,qe,Ke]},{b:[qe,Ke],optional:Se},{c:[qe,Ke],optional:Se}]),min:t(ye,"min",[{values:[Qe,qe,Ke]},{b:[qe,Ke],optional:Se},{c:[qe,Ke],optional:Se}]),norm:t(ye,"norm",[{value:[qe,Ke]},{low:[qe,Ke]},{high:[qe,Ke]}]),pow:t(ye,"pow",[{n:[qe,Ke]},{e:[qe,Ke]}]),round:t(ye,"round",[{value:[qe,Ke]}]),sq:t(ye,"sq",[{value:[qe,Ke]}]),sqrt:t(ye,"sq",[{value:[qe,Ke]}])},et=Sk.builtin,tt=et.float_,nt=et.int_,ot=et.object,it={beginCamera:r(i,[{__call__:t(function(e){return ye.beginCamera(),e},"__call__",[Pe]),__enter__:t(function(e){return e},"__enter__",[Pe]),__exit__:t(function(){return ye.endCamera()},"__exit__",[Pe,{exc_type:ot,ignored:!0},{exc_value:ot,ignored:!0},{traceback:ot,ignored:!0}])},"beginCamera"],"beginCamera"),endCamera:t(ye,"endCamera"),camera:t(ye,"camera",[{eyeX:[nt,tt],optional:Se},{eyeY:[nt,tt],optional:Se},{eyeZ:[nt,tt],optional:Se},{centerX:[nt,tt],optional:Se},{centerY:[nt,tt],optional:Se},{centerZ:[nt,tt],optional:Se},{upX:[nt,tt],optional:Se},{upY:[nt,tt],optional:Se},{upZ:[nt,tt],optional:Se}]),frustum:t(ye,"frustum",[{left:[nt,tt]},{right:[nt,tt]},{bottom:[nt,tt]},{top:[nt,tt]},{near:[nt,tt]},{far:[nt,tt]}]),ortho:t(ye,"ortho",[{left:[nt,tt],optional:Se},{right:[nt,tt],optional:Se},{bottom:[nt,tt],optional:Se},{top:[nt,tt],optional:Se},{near:[nt,tt],optional:Se},{far:[nt,tt],optional:Se}]),perspective:t(ye,"perspective",[{fov:[nt,tt],optional:Se},{aspect:[nt,tt],optional:Se},{zNear:[nt,tt],optional:Se},{zFar:[nt,tt],optional:Se}]),printCamera:t(ye,"printCamera"),printProjection:t(ye,"printProjection")},rt=Ne.BLEND,at=Ne.ADD,lt=Ne.SUBTRACT,ut=Ne.DARKEST,st=Ne.LIGHTEST,ct=Ne.DIFFERENCE,pt=Ne.EXLUSION,_t=Ne.MULTIPLY,dt=Ne.SCREEN,ft=Ne.OVERLAY,vt=Ne.HARD_LIGHT,mt=Ne.SOFT_LIGHT,gt=Ne.DODGE,ht=Ne.BURN,Et=Sk.builtin,St=Et.int_,Pt=Et.float_,xt=Et.lng,yt=Et.str,Tt={alpha:t(ye,"alpha",[{color:[St,xt,Pt,yt],converter:n}]),blendColor:t(ye,"blendColor",[{c1:[St,xt,Pt,yt],converter:n},{c2:[St,xt,Pt,yt],converter:n},{mode:St,allowed:[rt,at,lt,ut,st,ct,pt,_t,dt,ft,vt,mt,gt,ht]}]),blue:t(ye,"blue",[{color:[St,xt,Pt,yt],converter:n}]),brightness:t(ye,"brightness",[{color:[St,xt,Pt,yt],converter:n}]),green:t(ye,"green",[{color:[St,xt,Pt,yt],converter:n}]),hue:t(ye,"hue",[{color:[St,xt,Pt,yt],converter:n}]),lerpColor:t(ye,"lerpColor",[{c1:[St,xt,Pt,yt],converter:n},{c2:[St,xt,Pt,yt],converter:n},{amt:[St,Pt]}]),red:t(ye,"red",[{color:[St,xt,Pt,yt],converter:n}]),saturation:t(ye,"saturation",[{color:[St,xt,Pt,yt],converter:n}])},At=Ne.RGB,Rt=Ne.HSB,It=Sk.builtin,bt=It.int_,wt=It.float_,Ot=It.str,kt=It.lng,Lt={background:t(ye,"background",[{value1:[bt,kt,wt,Ot],converter:n},{value2:[bt,wt],optional:Se},{value2:[bt,wt],optional:Se},{alpha:[bt,wt],optional:Se}]),colorMode:t(ye,"colorMode",[{mode:bt,allowed:[At,Rt]},{range1:[bt,wt],optional:Se},{range2:[bt,wt],optional:Se},{range3:[bt,wt],optional:Se},{range4:[bt,wt],optional:Se}]),fill:t(ye,"fill",[{value1:[bt,kt,wt,Ot],converter:n},{value2:[bt,wt],optional:Se},{value2:[bt,wt],optional:Se},{alpha:[bt,wt],optional:Se}]),noFill:t(ye,"noFill"),noStroke:t(ye,"noStroke"),stroke:t(ye,"stroke",[{value1:[bt,kt,wt,Ot],converter:n},{value2:[bt,wt],optional:Se},{value2:[bt,wt],optional:Se},{alpha:[bt,wt],optional:Se}])},Dt=Sk.builtin,Nt=Dt.float_,Ct=Dt.int_,Mt=Dt.str,Gt=Dt.lng,Ft=t(ye,"color",[{value1:[Ct,Nt,Mt,Gt],converter:n},{value2:[Ct,Nt],optional:Se},{value3:[Ct,Nt],optional:Se},{alpha:[Ct,Nt],optional:Se}]),Bt=Sk.builtin,zt=Bt.int_,Vt=Bt.float_,Ht={modelX:t(ye,"modelX",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}]),modelY:t(ye,"modelY",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}]),modelZ:t(ye,"modelZ",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}]),screenX:t(ye,"screenX",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}]),screenY:t(ye,"screenY",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}]),screenZ:t(ye,"screenZ",[{x:[zt,Vt]},{y:[zt,Vt]},{z:[zt,Vt]}])},Ut=Sk.builtin,Xt=Ut.int_,Yt=Ut.float_,jt={bezier:t(ye,"bezier",[{x1:[Xt,Yt]},{y1:[Xt,Yt]},{z1:[Xt,Yt]},{cx1:[Xt,Yt]},{cy1:[Xt,Yt]},{cz1:[Xt,Yt]},{cx2:[Xt,Yt]},{cy2:[Xt,Yt]},{cz2:[Xt,Yt],optional:Se},{x2:[Xt,Yt],optional:Se},{y2:[Xt,Yt],optional:Se},{z2:[Xt,Yt],optional:Se}]),bezierDetail:t(ye,"bezierDetail",[{detail:Xt}]),bezierPoint:t(ye,"bezierPoint",[{a:[Xt,Yt]},{b:[Xt,Yt]},{c:[Xt,Yt]},{d:[Xt,Yt]},{t:[Xt,Yt]}]),bezierTangent:t(ye,"bezierTangent",[{a:[Xt,Yt]},{b:[Xt,Yt]},{c:[Xt,Yt]},{d:[Xt,Yt]},{t:[Xt,Yt]}]),curve:t(ye,"curve",[{x1:[Xt,Yt]},{y1:[Xt,Yt]},{z1:[Xt,Yt]},{x2:[Xt,Yt]},{y2:[Xt,Yt]},{z2:[Xt,Yt]},{x3:[Xt,Yt]},{y3:[Xt,Yt]},{z3:[Xt,Yt],optional:Se},{x4:[Xt,Yt],optional:Se},{y4:[Xt,Yt],optional:Se},{z4:[Xt,Yt],optional:Se}]),curveDetail:t(ye,"curveDetail",[{detail:Xt}]),curvePoint:t(ye,"curvePoint",[{a:[Xt,Yt]},{b:[Xt,Yt]},{c:[Xt,Yt]},{d:[Xt,Yt]},{t:[Xt,Yt]}]),curveTangent:t(ye,"curveTangent"[{t:[Xt,Yt]}]),curveTightness:t(ye,"curveTightness",[{squishy:[Xt,Yt]}])},Zt=Sk.ffi,Wt=Zt.remapToPy,Jt=Zt.remapToJs,qt=Sk.builtin,Kt=qt.func,Qt=qt.int_,$t=Sk.misceval.buildClass,en=Ne.ARROW,tn=Ne.CROSS,nn=Ne.HAND,on=Ne.MOVE,rn=Ne.TEXT,an=Ne.WAIT,ln=function(e){return $t(e,a,"Environment",[])},un=function(e){return $t(e,l,"FrameRate",[Qt])},sn=t(ye,"cursor",[{image:["PImage",Qt],allowed:[en,tn,nn,on,rn,an],optional:Se},{x:Qt,optional:Se},{y:Qt,optional:Se}]),cn=t(ye,"noCursor"),pn=function(){return Wt(ye.height)},_n=function(){return Wt(ye.width)},dn=function(){return Wt(ye.frameCount)},fn=function(){return Wt(ye.focused)},vn=Sk.builtin.str,mn={loadBytes:t(ye,"loadBytes",[{filename:vn}]),loadStrings:t(ye,"loadStrings"[{filename:vn}]),createInput:xe,selectFolder:xe,selectInput:xe},gn=Ne.LEFT,hn=Ne.CENTER,En=Ne.RIGHT,Sn=Ne.TOP,Pn=Ne.BOTTOM,xn=Ne.BASELINE,yn=Ne.MODEL,Tn=Ne.SCREEN,An=Ne.SHAPE,Rn=Sk.builtin,In=Rn.int_,bn=Rn.float_,wn=Rn.str,On={textAlign:t(ye,"textAlign",[{ALIGN:In,allowed:[gn,hn,En]},{YALIGN:In,allowed:[Sn,Pn,xn,hn]}]),textLeading:t(ye,"textLeading",[{dist:[In,bn]}]),textMode:t(ye,"textMode",[{MODE:In,allowed:[yn,Tn,An]}]),textSize:t(ye,"textSize",[{size:[In,bn]}]),textWidth:t(ye,"textWidth",[{width:wn}])},kn={textAscent:t(ye,"textAscent"),textDescent:t(ye,"textDescent")},Ln=Sk.builtin,Dn=Ln.func,Nn=Ln.float_,Cn=Ln.list,Mn=Ln.str,Gn=Ln.bool,Fn=Ln.int_,Bn=Sk.misceval,zn=Bn.buildClass,Vn=Bn.callsim,Hn=Bn.loadname,Un=function(e){return zn(e,u,"PFont",[])},Xn=t(function(t,n,o,i){var r=ye.createFont(t,n,o,i),a=Vn(e.PFont);return a.v=r,a},"createFont",[{name:Mn},{size:[Fn,Nn]},{smooth:Gn,optional:Se},{charset:Mn,optional:Se}]),Yn=t(ye,"loadFont",[{fontname:Mn}]),jn=t(ye,"text",[{data:[Mn,Fn,Nn]},{x:[Fn,Nn]},{y:[Fn,Nn]},{z:[Fn,Nn],optional:Se},{height:[Fn,Nn],optional:Se},{z:[Fn,Nn],optional:Se}]),Zn=t(ye,"textFont",[{font:"PFont"},{size:[Fn,Nn],optional:Se}]),Wn=De.P2D,Jn=De.JAVA2D,qn=De.WEBGL,Kn=De.P3D,Qn=De.OPENGL,$n=De.PDF,eo=De.DXF,to=Sk.builtin,no=to.int_,oo=to.func,io=Sk.misceval,ro=io.buildClass,ao=io.callsim,lo=Sk.ffi,uo=lo.remapToPy,so=lo.remapToJs,co=function(e){return ro(e,c,"PGraphics",[])},po=new oo(function(t,n,o){return ao(e.PGraphics,t,n,o)}),_o=new oo(function(e){ye.hint(e)}),fo=Sk.builtin,vo=fo.func,mo=fo.int_,go=fo.list,ho=fo.str,Eo=fo.float_,So=fo.lng,Po=fo.IOError,xo=Sk.abstr.sattr,yo=Sk.misceval,To=yo.buildClass,Ao=yo.callsim,Ro=yo.Suspension,Io=Sk.ffi,bo=Io.remapToJs,wo=Io.remapToPy,Oo=Ne.BLEND,ko=Ne.ADD,Lo=Ne.SUBTRACT,Do=Ne.LIGHTEST,No=Ne.DARKEST,Co=Ne.DIFFERENCE,Mo=Ne.EXCLUSION,Go=Ne.MULTIPLY,Fo=Ne.SCREEN,Bo=Ne.OVERLAY,zo=Ne.HARD,Vo=Ne.LIGHT,Ho=Ne.SOFT_LIGHT,Uo=Ne.DODGE,Xo=Ne.BURN,Yo=Ne.THRESHOLD,jo=Ne.GRAY,Zo=Ne.INVERT,Wo=Ne.POSTERIZE,Jo=Ne.BLUR,qo=Ne.OPAQUE,Ko=Ne.ERODE,Qo=Ne.DILATE,$o=Ne.CORNER,ei=Ne.CORNERS,ti=Ne.CENTER,ni=Ne.RGB,oi=Ne.ARGB,ii=Ne.ALPHA,ri=null,ai=function(e){return ri=To(e,x,"ImageProxy",[]),To(e,y,"PImage",[])},li=t(function(t,n,o){var i=Sk.misceval.callsim(e.PImage);return i.v=ye.createImage(t,n,o),xo(i,"pixels",Ao(ri,i)),i},"createFunc",[{width:mo},{height:mo},{format:mo,allowed:[ni,oi,ii]}]),ui=t(ye,"image",[{img:["PImage","PGraphics"]},{x:[mo,Eo]},{y:[mo,Eo]},{width:[mo,Eo],optional:Se},{height:[mo,Eo],optional:Se}]),si=t(ye,"imageMode",[{mode:mo,allowed:[$o,ei,ti]}]),ci=t(function(t){var n=t;"function"==typeof Sk.imageProxy&&(n=Sk.imageProxy(t));var o=new Ro;return o.resume=function(){if(o.data.error)throw o.data.error;return o.data.result},o.data={type:"Sk.promise",promise:Promise.race([new Promise(function(e){return setTimeout(e,3e3)}),new Promise(function(t){var o=Ao(e.PImage),i=ye.loadImage(n,{},function(){o.v=i,t(o)})})]).then(function(e){if(e)return e;throw new Po("[Errno 2] No such file or directory: '"+t+"'")})},o},"loadImage",[{image:ho},{extension:ho,optional:Se,ignored:!0}]),pi=t(ye,"noTint"),_i=t(function(t,n){var o=Sk.misceval.callsim(e.PImage);return o.v=ye.requestImage(t,n),o},"requestImage",[{filename:ho},{extension:ho,optional:Se}]),di=t(ye,"tint",[{value1:[mo,So,Eo,ho],converter:n},{value2:[mo,Eo],optional:Se},{value3:[mo,Eo],optional:Se},{alpha:[mo,Eo],optional:Se}]),fi=t(ye,"blend",[{srcImg:[mo,"PImage"]},{x:mo},{y:mo},{width:mo},{height:mo},{dx:mo},{dy:mo},{dwidth:mo},{dheight:mo},{MODE:mo,optional:Se,allowed:[Oo,ko,Lo,Do,No,Co,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo]}]),vi=t(ye,"copy",[{srcImg:[mo,"PImage"]},{sx:mo},{sy:mo},{swidth:mo},{sheight:mo},{dx:mo},{dy:mo},{dwidth:mo},{dheight:mo,optional:Se}]),mi=t(ye,"filter",[{MODE:mo,allowed:[Yo,jo,Zo,Wo,Jo,qo,Ko,Qo]},{srcImg:"PImage",optional:Se}]),gi=t(ye,"get",[{x:mo,optional:Se},{y:mo,optional:Se},{width:mo,optional:Se},{height:mo,optional:Se}]),hi=t(ye,"loadPixels"),Ei=t(ye,"set",[{x:mo},{y:mo},{image:["PImage",mo,So,Eo,ho],converter:n}]),Si=t(ye,"updatePixels"),Pi=Sk.ffi,xi=Pi.remapToPy,yi=Pi.remapToJs,Ti=Sk.builtin.func,Ai=Sk.misceval.buildClass,Ri=function(e){return Ai(e,A,"Keyboard",[])},Ii=function(){return xi(ye.key.toString())},bi=function(){return xi(ye.keyCode)},wi=function(){return xi(ye.__keyPressed)},Oi=Sk.builtin,ki=Oi.int_,Li=Oi.float_,Di={ambientLight:t(ye,"ambientLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{x:[ki,Li],optional:Se},{y:[ki,Li],optional:Se},{z:[ki,Li],optional:Se}]),directionalLight:t(ye,"directionalLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{nx:[ki,Li],optional:Se},{ny:[ki,Li],optional:Se},{nz:[ki,Li],optional:Se}]),lightFalloff:t(ye,"lightFalloff",[{constant:[ki,Li]},{linear:[ki,Li]},{quardatic:[ki,Li]}]),lightSpecular:t(ye,"lightSpecular",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]}]),lights:t(ye,"lights"),noLights:t(ye,"noLights"),normal:t(ye,"normal",[{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]}]),pointLight:t(ye,"pointLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]}]),spotLight:t(ye,"spotLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{x:[ki,Li]},{y:[ki,Li]},{z:[ki,Li]},{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]},{angle:[ki,Li]},{concentration:[ki,Li]}])},Ni=Sk.builtin,Ci=Ni.int_,Mi=Ni.float_,Gi=Ni.str,Fi=Ni.lng,Bi={ambient:t(ye,"ambient",[{gray:[Ci,Fi,Mi,Gi],converter:n},{v1:[Ci,Mi],optional:Se},{v2:[Ci,Mi],optional:Se},{v3:[Ci,Mi],optional:Se}]),emissive:t(ye,"emissive",[{gray:[Ci,Fi,Mi,Gi],converter:n},{v1:[Ci,Mi],optional:Se},{v2:[Ci,Mi],optional:Se},{v3:[Ci,Mi],optional:Se}]),shininess:t(ye,"shininess",[{shine:[Ci,Mi]}]),specular:t(ye,"specular",[{gray:[Ci,Fi,Mi,Gi],converter:n},{v1:[Ci,Mi],optional:Se},{v2:[Ci,Mi],optional:Se},{v3:[Ci,Mi],optional:Se}])},zi=Sk.ffi,Vi=zi.remapToPy,Hi=zi.remapToJs,Ui=Sk.builtin.func,Xi=Sk.misceval.buildClass,Yi=function(e){return Xi(e,R,"Mouse",[])},ji=function(){return Vi(ye.mouseX)},Zi=function(){return Vi(ye.mouseY)},Wi=function(){return Vi(ye.pmouseX)},Ji=function(){return Vi(ye.pmouseY)},qi=function(){return Vi(ye.__mousePressed)},Ki=function(){return Vi(ye.mouseButton)},Qi=Sk.builtin,$i=Qi.object,er=Qi.str,tr=Qi.list,nr=Sk.misceval.print_,or={println:t(function(e){nr(e),nr("\n")},"println",[{data:$i}]),save:t(ye,"save",[{filename:er}]),saveFrame:t(ye,"saveFrame",[{filename:er},{ext:er,allowed:["tif","tga","jpg","png"]}]),saveStrings:t(ye,"saveStrings",[{filename:er},{strings:tr}]),PrintWriter:xe,beginRaw:xe,beginRecord:xe,createOutput:xe,createReader:xe,createWriter:xe,endRaw:xe,endRecord:xe,saveBytes:xe,saveStream:xe,selectOuput:xe},ir=Sk.builtin,rr=ir.float_,ar=ir.int_,lr={noise:t(ye,"noise",[{x:[ar,rr]},{y:[ar,rr],optional:Se},{z:[ar,rr],optional:Se}]),noiseDetail:t(ye,"noiseDetail",[{octave:ar},{falloff:[ar,rr],optional:Se}]),noiseSeed:t(ye,"noiseSeed",[{value:ar}]),randomSeed:t(ye,"randomSeed",[{value:ar}]),random:t(ye,"random",[{low:[ar,rr]},{high:[ar,rr],optional:Se}]),randomGaussian:t(ye,"randomGaussian")},ur=Sk.ffi,sr=ur.remapToJs,cr=ur.remapToPy,pr=Sk.misceval.buildClass,_r=Sk.builtin,dr=_r.list,fr=_r.func,vr=function(e){return pr(e,I,"Screen",[])},mr=Ne.CORNER,gr=Ne.CORNERS,hr=Ne.CENTER,Er=Sk.builtin,Sr=Er.str,Pr=Er.int_,xr=Er.float_,yr=Er.bool,Tr=Sk.ffi,Ar=Tr.remapToJs,Rr=Tr.remapToPy,Ir=Sk.misceval.buildClass,br=function(e){return Ir(e,B,"PShape",[])},wr={loadShape:t(ye,"loadShape",[{filename:Sr}]),shape:t(ye,"shape",[{sh:"PShape"},{x:[Pr,xr]},{y:[Pr,xr]},{width:[Pr,xr],optional:Se},{height:[Pr,xr],optional:Se}]),shapeMode:t(ye,"shapeMode",[{img:Pr,allowed:[mr,gr,hr]}])},Or=Sk.builtin,kr=Or.int_,Lr=Or.float_,Dr=Or.str,Nr=Or.list,Cr={join:t(ye,"join",[{stringArray:Nr},{separator:Dr}]),match:t(ye,"match",[{str:Dr},{regexp:Dr}]),matchAll:t(ye,"matchAll",[{str:Dr},{regexp:Dr}]),nf:t(ye,"nf",[{value:[kr,Lr,Nr]},{digits:kr},{right:kr,optional:Se}]),nfc:t(ye,"nfc",[{value:[kr,Lr,Nr]},{right:kr,optional:Se}]),nfp:t(ye,"nfp",[{value:[kr,Lr,Nr]},{digits:kr},{right:kr,optional:Se}]),nfs:t(ye,"nfs",[{value:[kr,Lr,Nr]},{digits:kr},{right:kr,optional:Se}]),split:t(ye,"split",[{string:Dr},{delimiter:Dr}]),splitTokens:t(ye,"splitTokens",[{string:Dr},{delimiter:Dr,optional:Se}]),trim:t(ye,"trim",[{strOrArray:[Dr,Nr]}])},Mr=Sk.builtin,Gr=Mr.int_,Fr=Mr.object,Br=Ne.P2D,zr=Ne.JAVA2D,Vr=Ne.WEBGL,Hr=Ne.P3D,Ur=Ne.OPENGL,Xr=Ne.PDF,Yr=Ne.DXF,jr={loop:t(function(){if($())throw new Sk.builtin.Exception("loop() should be called after run()");Da.loop()},"loop"),noLoop:t(function(){if($())throw new Sk.builtin.Exception("noLoop() should be called after run()");ye.noLoop()},"noLoop"),size:t(function(e,t,n){void 0!==n&&n!==Br&&n!==zr||(Da.toImageData=function(e,t,n,o){e=void 0!==e?e:0,t=void 0!==t?t:0,n=void 0!==n?n:Da.width,o=void 0!==o?o:Da.height;for(var i=void 0;void 0===i;)i=Da.externals.context.getImageData(e,t,n,o);return i}),Da.size(e,t,n)},"size",[{width:Gr},{height:Gr},{renderer:Gr,allowed:[Br,zr,Vr,Hr,Ur,Xr,Yr],optional:Se}]),exit:t(ye,"exit"),redraw:t(ye,"redraw"),pushStyle:r(i,[{__call__:t(function(e){return ye.pushStyle(),e},"__call__",[Pe]),__enter__:t(function(e){return e},"__enter__",[Pe]),__exit__:t(function(){return ye.popStyle()},"__exit__",[Pe,{exc_type:Fr,ignored:!0},{exc_value:Fr,ignored:!0},{traceback:Fr,ignored:!0}])},"pushStyle"],"pushStyle"),popStyle:t(ye,"popStyle")},Zr={day:t(ye,"day"),hour:t(ye,"hour"),millis:t(ye,"millis"),minute:t(ye,"minute"),month:t(ye,"month"),second:t(ye,"second"),year:t(ye,"year")},Wr=Sk.builtin,Jr=Wr.float_,qr=Wr.int_,Kr=Wr.object,Qr={applyMatrix:t(ye,"applyMatrix",[{n00:[qr,Jr]},{n01:[qr,Jr]},{n02:[qr,Jr]},{n03:[qr,Jr]},{n04:[qr,Jr]},{n05:[qr,Jr]},{n06:[qr,Jr]},{n07:[qr,Jr]},{n08:[qr,Jr]},{n09:[qr,Jr]},{n10:[qr,Jr]},{n11:[qr,Jr]},{n12:[qr,Jr]},{n13:[qr,Jr]},{n14:[qr,Jr]},{n15:[qr,Jr]}]),popMatrix:t(ye,"popMatrix"),printMatrix:t(ye,"printMatrix"),pushMatrix:r(i,[{__call__:t(function(e){return ye.pushMatrix(),e},"__call__",[Pe]),__enter__:t(function(e){return e},"__enter__",[Pe]),__exit__:t(function(){return ye.popMatrix()},"__exit__",[Pe,{exc_type:Kr,ignored:!0},{exc_value:Kr,ignored:!0},{traceback:Kr,ignored:!0}])},"pushMatrix"],"pushMatrix"),resetMatrix:t(ye,"resetMatrix"),rotate:t(ye,"rotate",[{angle:[qr,Jr]}]),rotateX:t(ye,"rotateX",[{angle:[qr,Jr]}]),rotateY:t(ye,"rotateY",[{angle:[qr,Jr]}]),rotateZ:t(ye,"rotateZ",[{angle:[qr,Jr]}]),scale:t(ye,"scale",[{size:[qr,Jr]},{y:[qr,Jr],optional:Se},{z:[qr,Jr],optional:Se}]),translate:t(ye,"translate",[{x:[qr,Jr]},{y:[qr,Jr]},{z:[qr,Jr],optional:Se}])},$r=Sk.builtin,ea=$r.int_,ta=$r.float_,na={degrees:t(ye,"degrees",[{angle:[ea,ta]}]),radians:t(ye,"radians",[{angle:[ea,ta]}]),cos:t(ye,"cos",[{angle:[ea,ta]}]),sin:t(ye,"sin",[{angle:[ea,ta]}]),tan:t(ye,"tan",[{angle:[ea,ta]}]),acos:t(ye,"acos",[{value:[ea,ta]}]),asin:t(ye,"asin",[{value:[ea,ta]}]),atan:t(ye,"tan",[{angle:[ea,ta]}]),atan2:t(ye,"atan2",[{x:[ea,ta]},{y:[ea,ta]}])},oa=Sk.builtin,ia=oa.int_,ra=oa.float_,aa=Sk.misceval,la=aa.callsim,ua=aa.buildClass,sa=Sk.ffi.remapToPy,ca=function(e){return ua(e,Q,"PVector",[])},pa=Sk.builtin,_a=pa.float_,da=pa.int_,fa=pa.object,va=Ne.IMAGE,ma=Ne.NORMALIZED,ga=Ne.POINTS,ha=Ne.LINES,Ea=Ne.TRIANGLES,Sa=Ne.TRIANGLE_FAN,Pa=Ne.TRIANGLE_STRIP,xa=Ne.QUADS,ya=Ne.QUAD_STRIP,Ta=Ne.CLOSE,Aa={beginShape:r(i,[{__call__:t(function(e,t){return ye.beginShape(t),e},"__call__",[Pe,{MODE:da,allowed:[ga,ha,Ea,Sa,Pa,xa,ya],optional:Se}]),__enter__:t(function(e){return e},"__enter__",[Pe]),__exit__:t(function(){return ye.endShape},"__exit__",[Pe,{exc_type:fa,ignored:!0},{exc_value:fa,ignored:!0},{traceback:fa,ignored:!0}])},"beginShape"],"beginShape"),beginClosedShape:r(i,[{__call__:t(function(e,t){return ye.beginShape(t),e},"__call__",[Pe,{MODE:da,allowed:[ga,ha,Ea,Sa,Pa,xa,ya],optional:Se}]),__enter__:t(function(e){return e},"__enter__"[Pe]),__exit__:t(function(){return ye.endShape(De.CLOSE)},"__exit__",[Pe,{exc_type:fa,ignored:!0},{exc_value:fa,ignored:!0},{traceback:fa,ignored:!0}])},"beginClosedShape"],"beginClosedShape"),endShape:t(ye,"endShape",[{MODE:da,allowed:[Ta],optional:Se}]),vertex:t(ye,"vertex",[{x:[da,_a]},{y:[da,_a]},{z:[da,_a],optional:Se},{u:[da,_a],optional:Se},{v:[da,_a],optional:Se}]),bezierVertex:t(ye,"bezierVertex",[{cx1:[da,_a]},{cy1:[da,_a]},{cz1:[da,_a]},{cx2:[da,_a]},{cy2:[da,_a]},{cz2:[da,_a]},{x:[da,_a],optional:Se},{y:[da,_a],optional:Se},{z:[da,_a],optional:Se}]),curveVertex:t(ye,"curveVertex",[{x:[da,_a]},{y:[da,_a]},{z:[da,_a],optional:Se}]),texture:t(ye,"texture",[{img:"PImage"}]),textureMode:t(ye,"textureMode",[{img:da,allowed:[va,ma]}])},Ra=Sk.builtin.str,Ia={link:t(ye,"link"[{target:Ra,optional:Se}]),status:t(ye,"status",[{text:Ra}])},ba=Sk.misceval,wa=ba.callsim,Oa=ba.asyncToPromise,ka=ba.callsimOrSuspend,La={};e.processingInstance={},e.PImage=void 0,e.PShape=void 0,e.PGraphics=void 0,e.PVector=void 0,e.PFont=void 0;var Da=ye,Na=void 0,Ca=void 0;e.isInitialised=$,e.processing=Da,e.init=function(e,t,n){if(Na=t,void 0!==n&&"function"!=typeof n)throw new Error("breakHandler must be a function if anything");Ca=n,Sk.externalLibraries=Sk.externalLibraries||{},Object.assign(Sk.externalLibraries,{processing:{path:e+"/__init__.js"}})},e.main=function(){e.PImage=ai(La),e.PShape=br(La),e.PGraphics=co(La),e.PVector=ca(La),e.PFont=Un(La);var t=ln(La),n=un(La),i=wa(n),r=wa(t),a=Yi(La),l=wa(a),u=Ri(La),s=wa(u),c=vr(La),p=wa(c);return o(La),Object.assign(La,Ie,ke,We,$e,it,Tt,Lt,{color:Ft},Ne,Ht,jt,{Environment:t,environment:r,cursor:sn,noCursor:cn,height:pn,width:_n,frameCount:dn,frameRate:i,focused:fn},mn,On,kn,{PFont:e.PFont,createFont:Xn,loadFont:Yn,text:jn,textFont:Zn},{PGraphics:e.PGraphics,createGraphics:po,hint:_o},{PImage:e.PImage},{image:ui,createImage:li,imageMode:si,loadImage:ci,noTint:pi,requestImage:_i,tint:di,blend:fi,copy:vi,filter:mi,get:gi,loadPixels:hi,set:Ei,updatePixels:Si,pixels:T},{keyboard:s,Keyboard:u,keyCode:bi,key:Ii,keyPressed:wi},Di,Bi,{Mouse:a,mouse:l,mouseX:ji,mouseY:Zi,pmouseX:Wi,pmouseY:Ji,mousePressed:qi,mouseButton:Ki},or,lr,{Screen:c,screen:p},{PShape:e.PShape},jr,Zr,Qr,na,{PVector:e.PVector},Aa,Ia,wr,Cr),La.run=new Sk.builtin.func(function(){function t(t){function n(e){o(e),t.exit()}e.processingInstance=t,t.externals.sketch.onExit=i,Sk.globals.setup&&(t.setup=function(){return Oa(function(){return ka(Sk.globals.setup)},Na)}),Sk.globals.draw&&(t.draw=function(){if(Ca)try{Ca()}catch(e){n(e)}return Oa(function(){return ka(Sk.globals.draw)},Na)});var r=["mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var a in r)Sk.globals[r[a]]&&function(){var e=r[a];t[e]=function(){try{Sk.misceval.callsim(Sk.globals[e])}catch(e){n(e)}}}()}var n=new Sk.misceval.Suspension,o=null,i=null;n.resume=function(){if(n.data.error)throw n.data.error;return Sk.builtin.none.none$},n.data={type:"Sk.promise",promise:new Promise(function(e,t){o=t,i=e})};var r=document.getElementById(Sk.canvas);if("CANVAS"!==r.tagName){var a=r;for(r=document.createElement("canvas");a.firstChild;)a.removeChild(a.firstChild);a.appendChild(r)}r.style.display="block";var l=window.Processing.getInstanceById(Sk.canvas);return l&&l.exit(),setTimeout(function(){La.p=new window.Processing(r,t)},300),n}),La},Object.defineProperty(e,"__esModule",{value:!0})});