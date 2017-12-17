!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ProcessingSk={})}(this,function(e){"use strict";function t(e,t,n){var o=n||[];return new le(function(){var n=null;if("function"!=typeof e?e[t]&&(n=e[t]):n=e,null==n)throw new Error("Couldn't infer function to wrap");var i=Se(arguments).filter(function(e){return void 0!==e}),r=i.filter(function(e,t){return void 0===o[t].ignored||!o[t].ignored}).map(function(e,t){var n=o[t];return n===Te?e:n.converter?n.converter(de(e)):de(e)});se(t,i,function(e){return void 0===e?0:e.filter(function(e){return!e.optional}).length}(o),o.length,!1),function(e,t){t.forEach(function(t){var n=ie(t,2),o=n[0],i=n[1],r=Object.keys(i)[0];if(Array.isArray(i[r])||(i[r]=[i[r]]),!i[r].some(function(e){return!0===e||("string"==typeof e?o.tp$name===e:o instanceof e&&(!e.allowed||o in e.allowed))}))throw new pe(e+": "+r+" (value: "+de(o)+") not of type "+i[r].map(function(e){return e.tp$name}))})}(t,function(e,t,n){return i.map(function(t,o){return e(t,n[o])})}(function(e,t){return[e,t]},0,o));var a=n.apply(null,r);return fe(a)})}function n(e){if("string"==typeof e){var t=/#([A-F0-9]{6})/g.exec(e);if(2!==t.length)throw new ce(e+' not in the correct format for a color expecting "#AB12F4"');return parseInt(t[1],16)+4278190080}return e}function o(e){xe=function(t,n){return me(e,function(e){return function(t,n){he(n,e)}}(t),"OptionalContextManager_"+n,[])}}function i(e,t){var n=Ee(e);if(!n.includes("__call__")||!n.includes("__enter__")||!n.includes("__exit__"))throw new Error("The optional context manager needs a __call__, __enter__ and __exit__ function.");return ge(xe(e,t))}function r(e,t,n){return function(){if(Pe.has(n))return Pe.get(n);var o=e.apply(null,t);return Pe.set(n,o),o}}function a(e,t,n,o,i){e.v=Re.color(t,n,o,i)}function l(e,o){o.__init__=t(a,"__init__",[Te,{gray:[Mt,Nt,Gt],converter:n},{aplha:[Mt,Nt],optional:ye},{value3:[Mt,Nt],optional:ye},{alpha:[Mt,Nt],optional:ye}])}function u(e,t){t.__getattr__=new Qt(function(e,t){switch(qt(t)){case"frameCount":return Jt(Re.frameCount);case"frameRate":return Jt(Re.frameRate);case"height":return Jt(Re.height);case"width":return Jt(Re.width);case"online":return Jt(Re.online);case"focused":return Jt(Re.focused);default:return}})}function s(e,n){n.__init__=t(function(e){e.v=Re.__frameRate},"__init__",[Te]),n.__call__=t(function(e,t){Re.frameRate(t),e.v=t},"__call__",[Te,{rate:$t}])}function c(e,n){n.__init__=t(function(e,t){t&&(e.v=new Re.PFont(t))},"__init__",[Te,{"input ":Gn,optional:ye}]);var o=Un("staticmethod",e),i=new Cn(function(){return new Mn(Re.PFont.list())});n.list=Hn(o,i)}function p(e,t,n,o){e.v=Re.createGraphics(t,n,o),void 0!==o&&o!==Jn&&o!==qn||(e.v.toImageData=function(t,n,o,i){t=void 0!==t?t:0,n=void 0!==n?n:0,o=void 0!==o?o:Re.width,i=void 0!==i?i:Re.height;for(var r=void 0;void 0===r;)r=e.v.externals.context.getImageData(t,n,o,i);return r})}function _(e,n){n.__init__=t(p,"__init__",[Te,{width:oo},{height:oo},{renderer:oo,allowed:[Jn,qn,Kn,Qn,$n,eo,to],optional:ye}]),n.beginDraw=new io(function(e){e.v.beginDraw()}),n.endDraw=new io(function(e){e.v.endDraw()}),n.__getattr__=new io(function(e,t){var n=e.v[co(t)];if(void 0!==n)return"function"==typeof n?new io(function(e){var t=Array.from(arguments).map(co);return so(n.apply(e.v,t))}):so(n)})}function d(e,t,n,o){e.v=new Re.PImage(t,n,o),xo(e,"pixels",Ao(ri,e))}function f(t,n,o,i,r){var a=[n,o,i,r].filter(function(e){return void 0!==e});if(2==a.length)return t.v.get.apply(t.v,a);var l=Ao(e.PImage);return l.v=t.v.get.apply(t.v,a),xo(l,"pixels",Ao(ri,l)),l}function v(e,t,n,o){e.v.set(t,n,o)}function m(e,t,n,o,i,r,a,l,u,s){return e.v.copy(t,n,o,i,r,a,l,u,s)}function g(e,t){e.v.mask(t)}function h(e,t,n,o,i,r,a,l,u,s){e.v.blend(t,n,o,i,r,a,l,u,s)}function E(e,t,n){e.v.filter(t,n)}function S(e,t){e.v.save(t)}function P(e,t,n){e.v.save(t,n)}function x(e){e.v.loadPixels()}function y(e,t,n,o,i){e.v.updatePixels(t,n,o,i)}function T(e,n){n.__init__=t(function(e,t){e.image=t},"__init__",[Te,{image:"PImage",optional:ye}]),n.__getitem__=t(function(e,t){return e.image.pixels[t]},"__getitem__",[Te,{index:go}]),n.__setitem__=t(function(e,t,n){return e.image.pixels[t]=n},"__setitem__",[Te,{index:go},{color:"color"}]),n.__len__=t(function(e){return e.image.width*e.image.height},"__len__",[Te])}function A(e,n){n.__init__=t(d,"__init__",[Te,{width:[go,Eo],optional:ye},{height:go,optional:ye},{format:go,allowed:[1,2,4],optional:ye}]),n.__getattr__=new mo(function(e,t){return"width"===(t=bo(t))?wo(e.v.width):"height"===t?wo(e.v.height):void 0}),n.get=t(f,"get",[Te,{x:go},{y:go},{width:go,optional:ye},{height:go,optional:ye}]),n.set=t(v,"set",[Te,{x:go},{y:go},{color:"color"}]),n.copy=t(m,"copy",[Te,{srcImg:[go,"PImage"]},{sx:go},{sy:go},{swidth:go},{sheight:go},{dx:go},{dy:go},{dwidth:go},{dheight:go,optional:ye}]),n.mask=t(g,"mask",[Te,{maskImg:["PImage",ho]}]),n.blend=t(h,"blend",[Te,{srcImg:[go,"PImage"]},{x:go},{y:go},{width:go},{height:go},{dx:go},{dy:go},{dwidth:go},{dheight:go},{MODE:go,optional:ye,allowed:[Oo,ko,Lo,Do,Co,No,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo]}]),n.filter=t(E,"filter",[Te,{MODE:go,allowed:[Yo,jo,Zo,Wo,Jo,qo,Ko,Qo]},{srcImg:"PImage",optional:ye}]),n.save=t(S,"save",[Te,{filename:Eo}]),n.resize=t(P,"resize",[Te,{wide:go},{high:go}]),n.loadPixels=t(x,"loadPixels"),n.updatePixels=t(y,"updatePixels",[Te,{x:go,optional:ye},{y:go,optional:ye},{w:go,optional:ye},{h:go,optional:ye}])}function R(){var e=Ao(ri);return e.image={pixels:Re.pixels},e}function I(e,t){t.__getattr__=new Ti(function(e,t){return"key"===(t=yi(t))?xi(Re.key.toString()):"keyCode"===t?xi(Re.keyCode):"keyPressed"===t?xi(Re.__keyPressed):void 0})}function b(e,t){t.__getattr__=new Vi(function(e,t){switch(zi(t)){case"x":return Bi(Re.mouseX);case"y":return Bi(Re.mouseY);case"px":return Bi(Re.pmouseX);case"py":return Bi(Re.pmouseY);case"pressed":return Bi(Re.__mousePressed);case"button":return Bi(Re.mouseButton);default:return}})}function w(e,t){t.__init__=new _r(function(e){e.pixels=null}),t.__getattr__=new _r(function(e,t){switch(t=lr(t)){case"height":return ur(La.height);case"width":return ur(La.width);case"pixels":return null==e.pixels&&(e.pixels=new pr(La.pixels.toArray())),e.pixels}})}function O(e){return e.v.isVisible()}function k(e,t){e.v.setVisible(t)}function L(e){e.v.disableStyle()}function D(e){e.v.enableStyle()}function C(t,n){var o=t.v.getChild(n);if(null!=o){var i=Sk.misceval.callsim(e.PShape);return i.v=o,i}return null}function N(e,t,n,o){e.v.translate(t.v,n.v,o.v)}function M(e,t){e.v.rotate(t)}function G(e,t){e.v.rotateX(t)}function F(e,t){e.v.rotateY(t)}function B(e,t){e.v.rotateZ(t)}function z(e,t,n,o){e.v.scale(t,n,o)}function V(n,o){o.__getattr__=new Sk.builtin.func(function(e,t){switch(t=yr(t)){case"width":return Tr(e.v.width);case"height":return Tr(e.v.height)}}),o.isVisible=t(O,"isVisible",[Te]),o.setVisible=t(k,"setVisible"[{value:Pr}]),o.disableStyle=t(L,"disableStyle",[Te]),o.enableStyle=t(D,"enableStyle",[Te]),o.getChild=t(C,"getChild",[Te,{shape:e.PShape}]),o.translate=t(N,"translate",[Te,{x:[Er,Sr]},{y:[Er,Sr]},{z:[Er,Sr],optional:ye}]),o.rotate=t(M,"rotate",[Te,{angle:[Er,Sr]}]),o.rotateX=t(G,"rotateX",[Te,{angle:[Er,Sr]}]),o.rotateY=t(F,"rotateY",[Te,{angle:[Er,Sr]}]),o.rotateZ=t(B,"rotateZ",[Te,{angle:[Er,Sr]}]),o.scale=t(z,"scale"[{z:[Er,Sr],optional:ye}])}function H(e,t,n,o){e.v=new La.PVector(t,n,o)}function U(e,t,n,o){e.v.set(t,n,o)}function X(t){var n=ra(e.PVector);return n.v=t.v.get(),n}function Y(t,n){var o=ra(e.PVector);return o.v=t.v.add(n),o}function j(t,n){var o=ra(e.PVector);return o.v=t.v.sub(n),o}function Z(t,n){var o=ra(e.PVector);return o.v=t.v.mult(n),o}function W(t,n){var o=ra(e.PVector);return o.v=t.v.div(n),o}function J(t,n){var o=ra(e.PVector);return o.v=t.v.dot(n),o}function q(t,n){var o=ra(e.PVector);return o.v=t.v.cross(n),o}function K(t,n){var o=ra(e.PVector);return o.v=t.v.dist(n),o}function Q(t,n){var o=ra(e.PVector);return o.v=t.v.angleBetween(n),o}function $(e,t){e.v.limit(t)}function ee(e,n){n.__init__=t(H,"__init__",[Te,{x:na,optional:ye},{y:na,optional:ye},{z:na,optional:ye}]),n.__getattr__=new Sk.builtin.func(function(e,t){return"x"===(t=Sk.ffi.remapToJs(t))?la(e.v.x):"y"===t?la(e.v.y):"z"===t?Sk.builtin.assk$(e.v.z):void 0}),n.get=t(X,"get",[Te]),n.set=t(U,"set",[Te,{x:na},{x:na,optional:ye},{x:na,optional:ye}]),n.mag=t(function(e){return e.v.mag()},"mag",[Te]),n.add=t(Y,"add",[Te,{vector:"PVector"}]),n.sub=t(j,"sub",[Te,{vector:"PVector"}]),n.mult=t(Z,"mult",[Te,{vector:"PVector"}]),n.div=t(W,"div",[Te,{vector:"PVector"}]),n.dist=t(K,"dist",[Te,{vector:"PVector"}]),n.dot=t(J,"dot",[Te,{x:[na,oa]},{y:[na,oa],optional:ye},{z:[na,oa],optional:ye}]),n.cross=t(q,"cross",[Te,{vector:"PVector"}]),n.normalize=t(function(e){return e.normalize()},"normalize",[Te]),n.limit=t($,"limit",[Te,{value:[na,oa]}]),n.angleBetween=t(Q,"angleBetween",[Te,{vector:"PVector"}]),n.array=t(function(e){return e.v.array()},"array",[Te]),n.__repr__=t(function(e){return e.v.toString()},"repr",[Te])}function te(){return null==La}function ne(){ka=!0}if("function"==typeof require){var oe=require("fs").readFileSync("bower_components/skulpt/skulpt.min.js").toString();(0,eval)(oe)}var ie=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),re=Sk.builtin,ae=re.str,le=re.func,ue=re.NotImplementedError,se=re.pyCheckArgs,ce=re.ValueError,pe=re.TypeError,_e=Sk.ffi,de=_e.remapToJs,fe=_e.remapToPy,ve=Sk.misceval,me=ve.buildClass,ge=ve.callsim,he=Object.assign,Ee=Object.keys,Se=Array.from,Pe=new Map,xe=void 0,ye=!0,Te={self:!0},Ae=new le(function(){throw new ue}),Re=(new ae("processing"),new Proxy({},{get:function(t,n){return e.processingInstance[n]}})),Ie=Sk.builtin,be=Ie.float_,we=Ie.int_,Oe={arc:t(Re,"arc",[{x:[we,be]},{y:[we,be]},{width:[we,be]},{height:[we,be]},{start:[we,be]},{stop:[we,be]}]),ellipse:t(Re,"ellipse",[{x:[we,be]},{y:[we,be]},{width:[we,be]},{height:[we,be]}]),line:t(Re,"line",[{x1:[we,be]},{y1:[we,be]},{z1:[we,be]},{x2:[we,be]},{y2:[we,be],optional:ye},{z2:[we,be],optional:ye}]),point:t(Re,"point",[{x:[we,be]},{y:[we,be]},{z:[we,be],optional:ye}]),quad:t(Re,"quad",[{x1:[we,be]},{y1:[we,be]},{x2:[we,be]},{y2:[we,be]},{x3:[we,be]},{y3:[we,be]},{x4:[we,be]},{y4:[we,be]}]),rect:t(Re,"rect",[{x:[we,be]},{y:[we,be]},{width:[we,be]},{height:[we,be]},{tlradius:[we,be],optional:ye},{trradius:[we,be],optional:ye},{brradius:[we,be],optional:ye},{blradius:[we,be],optional:ye}]),triangle:t(Re,"triangle",[{x1:[we,be]},{y1:[we,be]},{x2:[we,be]},{y2:[we,be]},{x3:[we,be]},{y3:[we,be]}])},ke=Sk.builtin,Le=ke.float_,De=ke.int_,Ce={box:t(Re,"box",[{width:[De,Le]},{height:[De,Le],optional:ye},{depth:[De,Le],optional:ye}]),sphere:t(Re,"sphere",[{radius:[De,Le]}]),sphereDetail:t(Re,"sphereDetail",[{ures:De},{vres:De,optional:ye}])},Ne=Sk.ffi.remapToPy,Me={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8},Ge=Object.keys(Me).reduce(function(e,t){return e[t]=Ne(Me[t]),e},{}),Fe=Sk.builtin,Be=Fe.int_,ze=Fe.str,Ve=Fe.float_,He=Ge.ROUND,Ue=Ge.SQUARE,Xe=Ge.BUTT,Ye=Ge.MITTER,je=Ge.BEVEL,Ze=Ge.CENTER,We=Ge.RADIUS,Je=Ge.CORNER,qe=Ge.CORNERS,Ke={ellipseMode:t(Re,"ellipseMode",[{mode:Be,allowed:[Ze,We,Je,qe]}]),noSmooth:t(Re,"noSmooth"),smooth:t(Re,"smooth",[{level:Be,allows:[2,4,8],ignored:!0,optional:ye}]),rectMode:t(Re,"rectMode",[{mode:Be,allowed:[Ze,We,Je,qe]}]),strokeCap:t(Re,"strokeCap",[{mode:ze,allowed:[He,Ue,Xe]}]),strokeJoin:t(Re,"strokeJoin",[{mode:ze,allowed:[Ye,je,He]}]),strokeWeight:t(Re,"strokeWeight",[{width:[Be,Ve]}])},Qe=Sk.builtin,$e=Qe.int_,et=Qe.float_,tt=Qe.list,nt={abs:t(Re,"abs",[{value:[$e,et]}]),ceil:t(Re,"ceil",[{value:[$e,et]}]),constrain:t(Re,"constrain",[{value:[$e,et]},{min:[$e,et]},{max:[$e,et]}]),dist:t(Re,"dist",[{x1:[$e,et]},{y1:[$e,et]},{z1:[$e,et]},{x2:[$e,et]},{y2:[$e,et],optional:ye},{z2:[$e,et],optional:ye}]),exp:t(Re,"exp",[{value:[$e,et]}]),floor:t(Re,"floor",[{value:[$e,et]}]),lerp:t(Re,"lerp",[{value1:[$e,et]},{value2:[$e,et]},{amt:[$e,et]}]),mag:t(Re,"mag",[{a:[$e,et]},{a:[$e,et]},{a:[$e,et],optional:ye}]),map:t(Re,"map",[{value:[$e,et]},{low1:[$e,et]},{high1:[$e,et]},{low2:[$e,et]},{high2:[$e,et]}]),max:t(Re,"max",[{values:[tt,$e,et]},{b:[$e,et],optional:ye},{c:[$e,et],optional:ye}]),min:t(Re,"min",[{values:[tt,$e,et]},{b:[$e,et],optional:ye},{c:[$e,et],optional:ye}]),norm:t(Re,"norm",[{value:[$e,et]},{low:[$e,et]},{high:[$e,et]}]),pow:t(Re,"pow",[{n:[$e,et]},{e:[$e,et]}]),round:t(Re,"round",[{value:[$e,et]}]),sq:t(Re,"sq",[{value:[$e,et]}]),sqrt:t(Re,"sq",[{value:[$e,et]}])},ot=Sk.builtin,it=ot.float_,rt=ot.int_,at=ot.object,lt={beginCamera:r(i,[{__call__:t(function(e){return Re.beginCamera(),e},"__call__",[Te]),__enter__:t(function(e){return e},"__enter__",[Te]),__exit__:t(function(){return Re.endCamera()},"__exit__",[Te,{exc_type:at,ignored:!0},{exc_value:at,ignored:!0},{traceback:at,ignored:!0}])},"beginCamera"],"beginCamera"),endCamera:t(Re,"endCamera"),camera:t(Re,"camera",[{eyeX:[rt,it],optional:ye},{eyeY:[rt,it],optional:ye},{eyeZ:[rt,it],optional:ye},{centerX:[rt,it],optional:ye},{centerY:[rt,it],optional:ye},{centerZ:[rt,it],optional:ye},{upX:[rt,it],optional:ye},{upY:[rt,it],optional:ye},{upZ:[rt,it],optional:ye}]),frustum:t(Re,"frustum",[{left:[rt,it]},{right:[rt,it]},{bottom:[rt,it]},{top:[rt,it]},{near:[rt,it]},{far:[rt,it]}]),ortho:t(Re,"ortho",[{left:[rt,it],optional:ye},{right:[rt,it],optional:ye},{bottom:[rt,it],optional:ye},{top:[rt,it],optional:ye},{near:[rt,it],optional:ye},{far:[rt,it],optional:ye}]),perspective:t(Re,"perspective",[{fov:[rt,it],optional:ye},{aspect:[rt,it],optional:ye},{zNear:[rt,it],optional:ye},{zFar:[rt,it],optional:ye}]),printCamera:t(Re,"printCamera"),printProjection:t(Re,"printProjection")},ut=Ge.BLEND,st=Ge.ADD,ct=Ge.SUBTRACT,pt=Ge.DARKEST,_t=Ge.LIGHTEST,dt=Ge.DIFFERENCE,ft=Ge.EXLUSION,vt=Ge.MULTIPLY,mt=Ge.SCREEN,gt=Ge.OVERLAY,ht=Ge.HARD_LIGHT,Et=Ge.SOFT_LIGHT,St=Ge.DODGE,Pt=Ge.BURN,xt=Sk.builtin,yt=xt.int_,Tt=xt.float_,At=Sk.misceval.callsim,Rt={alpha:t(Re,"alpha",[{color:"color"}]),blendColor:t(function(t,n,o){var i=At(e.color,new yt(0),new yt(0),new yt(0));return i.v=Re.blendColor(t,n,o),i},"blendColor",[{c1:"color"},{c2:"color"},{mode:yt,allowed:[ut,st,ct,pt,_t,dt,ft,vt,mt,gt,ht,Et,St,Pt]}]),blue:t(Re,"blue",[{color:"color"}]),brightness:t(Re,"brightness",[{color:"color"}]),green:t(Re,"green",[{color:"color"}]),hue:t(Re,"hue",[{color:"color"}]),lerpColor:t(function(t,n,o){var i=At(e.color,new yt(0),new yt(0),new yt(0));return i.v=Re.lerpColor(t,n,o),i},"lerpColor",[{c1:"color"},{c2:"color"},{amt:[yt,Tt]}]),red:t(Re,"red",[{color:"color"}]),saturation:t(Re,"saturation",[{color:"color"}])},It=Ge.RGB,bt=Ge.HSB,wt=Sk.builtin,Ot=wt.int_,kt=wt.float_,Lt=wt.str,Dt={background:t(Re,"background",[{value1:[Ot,kt,Lt,"color"],converter:n},{value2:[Ot,kt],optional:ye},{value2:[Ot,kt],optional:ye},{alpha:[Ot,kt],optional:ye}]),colorMode:t(Re,"colorMode",[{mode:Ot,allowed:[It,bt]},{range1:[Ot,kt],optional:ye},{range2:[Ot,kt],optional:ye},{range3:[Ot,kt],optional:ye},{range4:[Ot,kt],optional:ye}]),fill:t(Re,"fill",[{value1:[Ot,kt,"color",Lt],converter:n},{value2:[Ot,kt],optional:ye},{value2:[Ot,kt],optional:ye},{alpha:[Ot,kt],optional:ye}]),noFill:t(Re,"noFill"),noStroke:t(Re,"noStroke"),stroke:t(Re,"stroke",[{value1:[Ot,kt,"color",Lt],converter:n},{value2:[Ot,kt],optional:ye},{value2:[Ot,kt],optional:ye},{alpha:[Ot,kt],optional:ye}])},Ct=Sk.builtin,Nt=Ct.float_,Mt=Ct.int_,Gt=Ct.str,Ft=Sk.misceval.buildClass,Bt=function(e){return Ft(e,l,"color",[Mt])},zt=Sk.builtin,Vt=zt.int_,Ht=zt.float_,Ut={modelX:t(Re,"modelX",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),modelY:t(Re,"modelY",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),modelZ:t(Re,"modelZ",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenX:t(Re,"screenX",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenY:t(Re,"screenY",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenZ:t(Re,"screenZ",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}])},Xt=Sk.builtin,Yt=Xt.int_,jt=Xt.float_,Zt={bezier:t(Re,"bezier",[{x1:[Yt,jt]},{y1:[Yt,jt]},{z1:[Yt,jt]},{cx1:[Yt,jt]},{cy1:[Yt,jt]},{cz1:[Yt,jt]},{cx2:[Yt,jt]},{cy2:[Yt,jt]},{cz2:[Yt,jt],optional:ye},{x2:[Yt,jt],optional:ye},{y2:[Yt,jt],optional:ye},{z2:[Yt,jt],optional:ye}]),bezierDetail:t(Re,"bezierDetail",[{detail:Yt}]),bezierPoint:t(Re,"bezierPoint",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),bezierTangent:t(Re,"bezierTangent",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),curve:t(Re,"curve",[{x1:[Yt,jt]},{y1:[Yt,jt]},{z1:[Yt,jt]},{x2:[Yt,jt]},{y2:[Yt,jt]},{z2:[Yt,jt]},{x3:[Yt,jt]},{y3:[Yt,jt]},{z3:[Yt,jt],optional:ye},{x4:[Yt,jt],optional:ye},{y4:[Yt,jt],optional:ye},{z4:[Yt,jt],optional:ye}]),curveDetail:t(Re,"curveDetail",[{detail:Yt}]),curvePoint:t(Re,"curvePoint",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),curveTangent:t(Re,"curveTangent"[{t:[Yt,jt]}]),curveTightness:t(Re,"curveTightness",[{squishy:[Yt,jt]}])},Wt=Sk.ffi,Jt=Wt.remapToPy,qt=Wt.remapToJs,Kt=Sk.builtin,Qt=Kt.func,$t=Kt.int_,en=Sk.misceval.buildClass,tn=Ge.ARROW,nn=Ge.CROSS,on=Ge.HAND,rn=Ge.MOVE,an=Ge.TEXT,ln=Ge.WAIT,un=function(e){return en(e,u,"Environment",[])},sn=function(e){return en(e,s,"FrameRate",[$t])},cn=t(Re,"cursor",[{image:["PImage",$t],allowed:[tn,nn,on,rn,an,ln],optional:ye},{x:$t,optional:ye},{y:$t,optional:ye}]),pn=t(Re,"noCursor"),_n=function(){return Jt(Re.height)},dn=function(){return Jt(Re.width)},fn=function(){return Jt(Re.frameCount)},vn=function(){return Jt(Re.focused)},mn=Sk.builtin.str,gn={loadBytes:t(Re,"loadBytes",[{filename:mn}]),loadStrings:t(Re,"loadStrings"[{filename:mn}]),createInput:Ae,selectFolder:Ae,selectInput:Ae},hn=Ge.LEFT,En=Ge.CENTER,Sn=Ge.RIGHT,Pn=Ge.TOP,xn=Ge.BOTTOM,yn=Ge.BASELINE,Tn=Ge.MODEL,An=Ge.SCREEN,Rn=Ge.SHAPE,In=Sk.builtin,bn=In.int_,wn=In.float_,On=In.str,kn={textAlign:t(Re,"textAlign",[{ALIGN:bn,allowed:[hn,En,Sn]},{YALIGN:bn,allowed:[Pn,xn,yn,En]}]),textLeading:t(Re,"textLeading",[{dist:[bn,wn]}]),textMode:t(Re,"textMode",[{MODE:bn,allowed:[Tn,An,Rn]}]),textSize:t(Re,"textSize",[{size:[bn,wn]}]),textWidth:t(Re,"textWidth",[{width:On}])},Ln={textAscent:t(Re,"textAscent"),textDescent:t(Re,"textDescent")},Dn=Sk.builtin,Cn=Dn.func,Nn=Dn.float_,Mn=Dn.list,Gn=Dn.str,Fn=Dn.bool,Bn=Dn.int_,zn=Sk.misceval,Vn=zn.buildClass,Hn=zn.callsim,Un=zn.loadname,Xn=function(e){return Vn(e,c,"PFont",[])},Yn=t(function(t,n,o,i){var r=Re.createFont(t,n,o,i),a=Hn(e.PFont);return a.v=r,a},"createFont",[{name:Gn},{size:[Bn,Nn]},{smooth:Fn,optional:ye},{charset:Gn,optional:ye}]),jn=t(Re,"loadFont",[{fontname:Gn}]),Zn=t(Re,"text",[{data:[Gn,Bn,Nn]},{x:[Bn,Nn]},{y:[Bn,Nn]},{z:[Bn,Nn],optional:ye},{height:[Bn,Nn],optional:ye},{z:[Bn,Nn],optional:ye}]),Wn=t(Re,"textFont",[{font:"PFont"},{size:[Bn,Nn],optional:ye}]),Jn=Me.P2D,qn=Me.JAVA2D,Kn=Me.WEBGL,Qn=Me.P3D,$n=Me.OPENGL,eo=Me.PDF,to=Me.DXF,no=Sk.builtin,oo=no.int_,io=no.func,ro=Sk.misceval,ao=ro.buildClass,lo=ro.callsim,uo=Sk.ffi,so=uo.remapToPy,co=uo.remapToJs,po=function(e){return ao(e,_,"PGraphics",[])},_o=new io(function(t,n,o){return lo(e.PGraphics,t,n,o)}),fo=new io(function(e){Re.hint(e)}),vo=Sk.builtin,mo=vo.func,go=vo.int_,ho=vo.list,Eo=vo.str,So=vo.float_,Po=vo.IOError,xo=Sk.abstr.sattr,yo=Sk.misceval,To=yo.buildClass,Ao=yo.callsim,Ro=yo.Suspension,Io=Sk.ffi,bo=Io.remapToJs,wo=Io.remapToPy,Oo=Ge.BLEND,ko=Ge.ADD,Lo=Ge.SUBTRACT,Do=Ge.LIGHTEST,Co=Ge.DARKEST,No=Ge.DIFFERENCE,Mo=Ge.EXCLUSION,Go=Ge.MULTIPLY,Fo=Ge.SCREEN,Bo=Ge.OVERLAY,zo=Ge.HARD,Vo=Ge.LIGHT,Ho=Ge.SOFT_LIGHT,Uo=Ge.DODGE,Xo=Ge.BURN,Yo=Ge.THRESHOLD,jo=Ge.GRAY,Zo=Ge.INVERT,Wo=Ge.POSTERIZE,Jo=Ge.BLUR,qo=Ge.OPAQUE,Ko=Ge.ERODE,Qo=Ge.DILATE,$o=Ge.CORNER,ei=Ge.CORNERS,ti=Ge.CENTER,ni=Ge.RGB,oi=Ge.ARGB,ii=Ge.ALPHA,ri=null,ai=function(e){return ri=To(e,T,"ImageProxy",[]),To(e,A,"PImage",[])},li=t(function(t,n,o){var i=Sk.misceval.callsim(e.PImage);return i.v=Re.createImage(t,n,o),xo(i,"pixels",Ao(ri,i)),i},"createFunc",[{width:go},{height:go},{format:go,allowed:[ni,oi,ii]}]),ui=t(Re,"image",[{img:["PImage","PGraphics"]},{x:[go,So]},{y:[go,So]},{width:[go,So],optional:ye},{height:[go,So],optional:ye}]),si=t(Re,"imageMode",[{mode:go,allowed:[$o,ei,ti]}]),ci=t(function(t){var n=t;"function"==typeof Sk.imageProxy&&(n=Sk.imageProxy(t));var o=new Ro;return o.resume=function(){if(o.data.error)throw o.data.error;return o.data.result},o.data={type:"Sk.promise",promise:Promise.race([new Promise(function(e){return setTimeout(e,3e3)}),new Promise(function(t){var o=Ao(e.PImage),i=Re.loadImage(n,{},function(){o.v=i,t(o)})})]).then(function(e){if(e)return e;throw new Po("[Errno 2] No such file or directory: '"+t+"'")})},o},"loadImage",[{image:Eo}]),pi=t(Re,"noTint"),_i=t(function(t,n){var o=Sk.misceval.callsim(e.PImage);return o.v=Re.requestImage(t,n),o},"requestImage",[{filename:Eo},{extension:Eo,optional:ye}]),di=t(Re,"tint",[{value1:["color",go,So]},{value2:[go,So],optional:ye},{value3:[go,So],optional:ye},{alpha:[go,So],optional:ye}]),fi=t(Re,"blend",[{srcImg:[go,"PImage"]},{x:go},{y:go},{width:go},{height:go},{dx:go},{dy:go},{dwidth:go},{dheight:go},{MODE:go,optional:ye,allowed:[Oo,ko,Lo,Do,Co,No,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo]}]),vi=t(Re,"copy",[{srcImg:[go,"PImage"]},{sx:go},{sy:go},{swidth:go},{sheight:go},{dx:go},{dy:go},{dwidth:go},{dheight:go,optional:ye}]),mi=t(Re,"filter",[{MODE:go,allowed:[Yo,jo,Zo,Wo,Jo,qo,Ko,Qo]},{srcImg:"PImage",optional:ye}]),gi=t(Re,"get",[{x:go,optional:ye},{y:go,optional:ye},{width:go,optional:ye},{height:go,optional:ye}]),hi=t(Re,"loadPixels"),Ei=t(Re,"set",[{x:go},{y:go},{image:["color","PImage"]}]),Si=t(Re,"updatePixels"),Pi=Sk.ffi,xi=Pi.remapToPy,yi=Pi.remapToJs,Ti=Sk.builtin.func,Ai=Sk.misceval.buildClass,Ri=function(e){return Ai(e,I,"Keyboard",[])},Ii=function(){return xi(Re.key.toString())},bi=function(){return xi(Re.keyCode)},wi=function(){return xi(Re.__keyPressed)},Oi=Sk.builtin,ki=Oi.int_,Li=Oi.float_,Di={ambientLight:t(Re,"ambientLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{x:[ki,Li],optional:ye},{y:[ki,Li],optional:ye},{z:[ki,Li],optional:ye}]),directionalLight:t(Re,"directionalLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{nx:[ki,Li],optional:ye},{ny:[ki,Li],optional:ye},{nz:[ki,Li],optional:ye}]),lightFalloff:t(Re,"lightFalloff",[{constant:[ki,Li]},{linear:[ki,Li]},{quardatic:[ki,Li]}]),lightSpecular:t(Re,"lightSpecular",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]}]),lights:t(Re,"lights"),noLights:t(Re,"noLights"),normal:t(Re,"normal",[{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]}]),pointLight:t(Re,"pointLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]}]),spotLight:t(Re,"spotLight",[{v1:[ki,Li]},{v2:[ki,Li]},{v3:[ki,Li]},{x:[ki,Li]},{y:[ki,Li]},{z:[ki,Li]},{nx:[ki,Li]},{ny:[ki,Li]},{nz:[ki,Li]},{angle:[ki,Li]},{concentration:[ki,Li]}])},Ci=Sk.builtin,Ni=Ci.int_,Mi=Ci.float_,Gi={ambient:t(Re,"ambient",[{gray:[Ni,Mi,"color"]},{v1:[Ni,Mi],optional:ye},{v2:[Ni,Mi],optional:ye},{v3:[Ni,Mi],optional:ye}]),emissive:t(Re,"emissive",[{gray:[Ni,Mi,"color"]},{v1:[Ni,Mi],optional:ye},{v2:[Ni,Mi],optional:ye},{v3:[Ni,Mi],optional:ye}]),shininess:t(Re,"shininess",[{shine:[Ni,Mi]}]),specular:t(Re,"specular",[{gray:[Ni,Mi,"color"]},{v1:[Ni,Mi],optional:ye},{v2:[Ni,Mi],optional:ye},{v3:[Ni,Mi],optional:ye}])},Fi=Sk.ffi,Bi=Fi.remapToPy,zi=Fi.remapToJs,Vi=Sk.builtin.func,Hi=Sk.misceval.buildClass,Ui=function(e){return Hi(e,b,"Mouse",[])},Xi=function(){return Bi(Re.mouseX)},Yi=function(){return Bi(Re.mouseY)},ji=function(){return Bi(Re.pmouseX)},Zi=function(){return Bi(Re.pmouseY)},Wi=function(){return Bi(Re.__mousePressed)},Ji=function(){return Bi(Re.mouseButton)},qi=Sk.builtin,Ki=qi.object,Qi=qi.str,$i=qi.list,er=Sk.misceval.print_,tr={println:t(function(e){er(e),er("\n")},"println",[{data:Ki}]),save:t(Re,"save",[{filename:Qi}]),saveFrame:t(Re,"saveFrame",[{filename:Qi},{ext:Qi,allowed:["tif","tga","jpg","png"]}]),saveStrings:t(Re,"saveStrings",[{filename:Qi},{strings:$i}]),PrintWriter:Ae,beginRaw:Ae,beginRecord:Ae,createOutput:Ae,createReader:Ae,createWriter:Ae,endRaw:Ae,endRecord:Ae,saveBytes:Ae,saveStream:Ae,selectOuput:Ae},nr=Sk.builtin,or=nr.float_,ir=nr.int_,rr={noise:t(Re,"noise",[{x:[ir,or]},{y:[ir,or],optional:ye},{z:[ir,or],optional:ye}]),noiseDetail:t(Re,"noiseDetail",[{octave:ir},{falloff:[ir,or],optional:ye}]),noiseSeed:t(Re,"noiseSeed",[{value:ir}]),randomSeed:t(Re,"randomSeed",[{value:ir}]),random:t(Re,"random",[{low:[ir,or]},{high:[ir,or],optional:ye}]),randomGaussian:t(Re,"randomGaussian")},ar=Sk.ffi,lr=ar.remapToJs,ur=ar.remapToPy,sr=Sk.misceval.buildClass,cr=Sk.builtin,pr=cr.list,_r=cr.func,dr=function(e){return sr(e,w,"Screen",[])},fr=Ge.CORNER,vr=Ge.CORNERS,mr=Ge.CENTER,gr=Sk.builtin,hr=gr.str,Er=gr.int_,Sr=gr.float_,Pr=gr.bool,xr=Sk.ffi,yr=xr.remapToJs,Tr=xr.remapToPy,Ar=Sk.misceval.buildClass,Rr=function(e){return Ar(e,V,"PShape",[])},Ir={loadShape:t(Re,"loadShape",[{filename:hr}]),shape:t(Re,"shape",[{sh:"PShape"},{x:[Er,Sr]},{y:[Er,Sr]},{width:[Er,Sr],optional:ye},{height:[Er,Sr],optional:ye}]),shapeMode:t(Re,"shapeMode",[{img:Er,allowed:[fr,vr,mr]}])},br=Sk.builtin,wr=br.int_,Or=br.float_,kr=br.str,Lr=br.list,Dr={join:t(Re,"join",[{stringArray:Lr},{separator:kr}]),match:t(Re,"match",[{str:kr},{regexp:kr}]),matchAll:t(Re,"matchAll",[{str:kr},{regexp:kr}]),nf:t(Re,"nf",[{value:[wr,Or,Lr]},{digits:wr},{right:wr,optional:ye}]),nfc:t(Re,"nfc",[{value:[wr,Or,Lr]},{right:wr,optional:ye}]),nfp:t(Re,"nfp",[{value:[wr,Or,Lr]},{digits:wr},{right:wr,optional:ye}]),nfs:t(Re,"nfs",[{value:[wr,Or,Lr]},{digits:wr},{right:wr,optional:ye}]),split:t(Re,"split",[{string:kr},{delimiter:kr}]),splitTokens:t(Re,"splitTokens",[{string:kr},{delimiter:kr,optional:ye}]),trim:t(Re,"trim",[{strOrArray:[kr,Lr]}])},Cr=Sk.builtin,Nr=Cr.int_,Mr=Cr.object,Gr=Ge.P2D,Fr=Ge.JAVA2D,Br=Ge.WEBGL,zr=Ge.P3D,Vr=Ge.OPENGL,Hr=Ge.PDF,Ur=Ge.DXF,Xr={loop:t(function(){if(te())throw new Sk.builtin.Exception("loop() should be called after run()");La.loop()},"loop"),noLoop:t(function(){if(te())throw new Sk.builtin.Exception("noLoop() should be called after run()");ne()},"noLoop"),size:t(function(e,t,n){void 0!==n&&n!==Gr&&n!==Fr||(La.toImageData=function(e,t,n,o){e=void 0!==e?e:0,t=void 0!==t?t:0,n=void 0!==n?n:La.width,o=void 0!==o?o:La.height;for(var i=void 0;void 0===i;)i=La.externals.context.getImageData(e,t,n,o);return i}),La.size(e,t,n)},"size",[{width:Nr},{height:Nr},{renderer:Nr,allowed:[Gr,Fr,Br,zr,Vr,Hr,Ur],optional:ye}]),exit:t(Re,"exit"),redraw:t(Re,"redraw"),pushStyle:r(i,[{__call__:t(function(e){return Re.pushStyle(),e},"__call__",[Te]),__enter__:t(function(e){return e},"__enter__",[Te]),__exit__:t(function(){return Re.popStyle()},"__exit__",[Te,{exc_type:Mr,ignored:!0},{exc_value:Mr,ignored:!0},{traceback:Mr,ignored:!0}])},"pushStyle"],"pushStyle"),popStyle:t(Re,"popStyle")},Yr={day:t(Re,"day"),hour:t(Re,"hour"),millis:t(Re,"millis"),minute:t(Re,"minute"),month:t(Re,"month"),second:t(Re,"second"),year:t(Re,"year")},jr=Sk.builtin,Zr=jr.float_,Wr=jr.int_,Jr=jr.object,qr={applyMatrix:t(Re,"applyMatrix",[{n00:[Wr,Zr]},{n01:[Wr,Zr]},{n02:[Wr,Zr]},{n03:[Wr,Zr]},{n04:[Wr,Zr]},{n05:[Wr,Zr]},{n06:[Wr,Zr]},{n07:[Wr,Zr]},{n08:[Wr,Zr]},{n09:[Wr,Zr]},{n10:[Wr,Zr]},{n11:[Wr,Zr]},{n12:[Wr,Zr]},{n13:[Wr,Zr]},{n14:[Wr,Zr]},{n15:[Wr,Zr]}]),popMatrix:t(Re,"popMatrix"),printMatrix:t(Re,"printMatrix"),pushMatrix:r(i,[{__call__:t(function(e){return Re.pushMatrix(),e},"__call__",[Te]),__enter__:t(function(e){return e},"__enter__",[Te]),__exit__:t(function(){return Re.popMatrix()},"__exit__",[Te,{exc_type:Jr,ignored:!0},{exc_value:Jr,ignored:!0},{traceback:Jr,ignored:!0}])},"pushMatrix"],"pushMatrix"),resetMatrix:t(Re,"resetMatrix"),rotate:t(Re,"rotate",[{angle:[Wr,Zr]}]),rotateX:t(Re,"rotateX",[{angle:[Wr,Zr]}]),rotateY:t(Re,"rotateY",[{angle:[Wr,Zr]}]),rotateZ:t(Re,"rotateZ",[{angle:[Wr,Zr]}]),scale:t(Re,"scale",[{size:[Wr,Zr]},{y:[Wr,Zr],optional:ye},{z:[Wr,Zr],optional:ye}]),translate:t(Re,"translate",[{x:[Wr,Zr]},{y:[Wr,Zr]},{z:[Wr,Zr],optional:ye}])},Kr=Sk.builtin,Qr=Kr.int_,$r=Kr.float_,ea={degrees:t(Re,"degrees",[{angle:[Qr,$r]}]),radians:t(Re,"radians",[{angle:[Qr,$r]}]),cos:t(Re,"cos",[{angle:[Qr,$r]}]),sin:t(Re,"sin",[{angle:[Qr,$r]}]),tan:t(Re,"tan",[{angle:[Qr,$r]}]),acos:t(Re,"acos",[{value:[Qr,$r]}]),asin:t(Re,"asin",[{value:[Qr,$r]}]),atan:t(Re,"tan",[{angle:[Qr,$r]}]),atan2:t(Re,"atan2",[{x:[Qr,$r]},{y:[Qr,$r]}])},ta=Sk.builtin,na=ta.int_,oa=ta.float_,ia=Sk.misceval,ra=ia.callsim,aa=ia.buildClass,la=Sk.ffi.remapToPy,ua=function(e){return aa(e,ee,"PVector",[])},sa=Sk.builtin,ca=sa.float_,pa=sa.int_,_a=sa.object,da=Ge.IMAGE,fa=Ge.NORMALIZED,va=Ge.POINTS,ma=Ge.LINES,ga=Ge.TRIANGLES,ha=Ge.TRIANGLE_FAN,Ea=Ge.TRIANGLE_STRIP,Sa=Ge.QUADS,Pa=Ge.QUAD_STRIP,xa=Ge.CLOSE,ya={beginShape:r(i,[{__call__:t(function(e,t){return Re.beginShape(t),e},"__call__",[Te,{MODE:pa,allowed:[va,ma,ga,ha,Ea,Sa,Pa],optional:ye}]),__enter__:t(function(e){return e},"__enter__",[Te]),__exit__:t(function(){return Re.endShape},"__exit__",[Te,{exc_type:_a,ignored:!0},{exc_value:_a,ignored:!0},{traceback:_a,ignored:!0}])},"beginShape"],"beginShape"),beginClosedShape:r(i,[{__call__:t(function(e,t){return Re.beginShape(t),e},"__call__",[Te,{MODE:pa,allowed:[va,ma,ga,ha,Ea,Sa,Pa],optional:ye}]),__enter__:t(function(e){return e},"__enter__"[Te]),__exit__:t(function(){return Re.endShape(Me.CLOSE)},"__exit__",[Te,{exc_type:_a,ignored:!0},{exc_value:_a,ignored:!0},{traceback:_a,ignored:!0}])},"beginClosedShape"],"beginClosedShape"),endShape:t(Re,"endShape",[{MODE:pa,allowed:[xa],optional:ye}]),vertex:t(Re,"vertex",[{x:[pa,ca]},{y:[pa,ca]},{z:[pa,ca],optional:ye},{u:[pa,ca],optional:ye},{v:[pa,ca],optional:ye}]),bezierVertex:t(Re,"bezierVertex",[{cx1:[pa,ca]},{cy1:[pa,ca]},{cz1:[pa,ca]},{cx2:[pa,ca]},{cy2:[pa,ca]},{cz2:[pa,ca]},{x:[pa,ca],optional:ye},{y:[pa,ca],optional:ye},{z:[pa,ca],optional:ye}]),curveVertex:t(Re,"curveVertex",[{x:[pa,ca]},{y:[pa,ca]},{z:[pa,ca],optional:ye}]),texture:t(Re,"texture",[{img:"PImage"}]),textureMode:t(Re,"textureMode",[{img:pa,allowed:[da,fa]}])},Ta=Sk.builtin.str,Aa={link:t(Re,"link"[{target:Ta,optional:ye}]),status:t(Re,"status",[{text:Ta}])},Ra=Sk.misceval,Ia=Ra.callsim,ba=Ra.asyncToPromise,wa=Ra.callsimOrSuspend,Oa={},ka=!1;e.processingInstance={},e.color=void 0,e.PImage=void 0,e.PShape=void 0,e.PGraphics=void 0,e.PVector=void 0,e.PFont=void 0;var La=Re,Da=void 0,Ca=void 0;e.isInitialised=te,e.processing=La,e.init=function(e,t,n){if(Da=t,void 0!==n&&"function"!=typeof n)throw new Error("breakHandler must be a function if anything");Ca=n,Sk.externalLibraries=Sk.externalLibraries||{},Object.assign(Sk.externalLibraries,{processing:{path:e+"/__init__.js"}})},e.requestNoLoop=ne,e.main=function(){e.color=Bt(Oa),e.PImage=ai(Oa),e.PShape=Rr(Oa),e.PGraphics=po(Oa),e.PVector=ua(Oa),e.PFont=Xn(Oa);var t=un(Oa),n=sn(Oa),i=Ia(n),r=Ia(t),a=Ui(Oa),l=Ia(a),u=Ri(Oa),s=Ia(u),c=dr(Oa),p=Ia(c);return o(Oa),Object.assign(Oa,Oe,Ce,Ke,nt,lt,Rt,Dt,{color:e.color},Ge,Ut,Zt,{Environment:t,environment:r,cursor:cn,noCursor:pn,height:_n,width:dn,frameCount:fn,frameRate:i,focused:vn},gn,kn,Ln,{PFont:e.PFont,createFont:Yn,loadFont:jn,text:Zn,textFont:Wn},{PGraphics:e.PGraphics,createGraphics:_o,hint:fo},{PImage:e.PImage},{image:ui,createImage:li,imageMode:si,loadImage:ci,noTint:pi,requestImage:_i,tint:di,blend:fi,copy:vi,filter:mi,get:gi,loadPixels:hi,set:Ei,updatePixels:Si,pixels:R},{keyboard:s,Keyboard:u,keyCode:bi,key:Ii,keyPressed:wi},Di,Gi,{Mouse:a,mouse:l,mouseX:Xi,mouseY:Yi,pmouseX:ji,pmouseY:Zi,mousePressed:Wi,mouseButton:Ji},tr,rr,{Screen:c,screen:p},{PShape:e.PShape},Xr,Yr,qr,ea,{PVector:e.PVector},ya,Aa,Ir,Dr),Oa.run=new Sk.builtin.func(function(){function t(t){function n(e){o(e),t.exit()}var r=[],a=!0;e.processingInstance=t,t.externals.sketch.onExit=i,Sk.globals.setup?r.push(ba(function(){return wa(Sk.globals.setup)},Da)):r.push(Promise.resolve()),Sk.globals.draw?t.draw=function(){if(0!==r.length&&(Promise.all(r).then(function(){return a=!1}).catch(n),!a)){if(ka&&r.length>1)return t.noLoop(),void Promise.all(r).then(i).catch(n);if(Ca)try{Ca()}catch(e){n(e)}r.push(ba(function(){return wa(Sk.globals.draw)},Da))}}:(La.noLoop(),Promise.all(r).then(i).catch(n));var l=["mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var u in l)Sk.globals[l[u]]&&function(){var e=l[u];t[e]=function(){try{Sk.misceval.callsim(Sk.globals[e])}catch(e){n(e)}}}()}ka=!1;var n=new Sk.misceval.Suspension,o=null,i=null;n.resume=function(){if(n.data.error)throw n.data.error;return Sk.builtin.none.none$},n.data={type:"Sk.promise",promise:new Promise(function(e,t){o=t,i=e})};var r=document.getElementById(Sk.canvas);if("CANVAS"!==r.tagName){var a=r;for(r=document.createElement("canvas");a.firstChild;)a.removeChild(a.firstChild);a.appendChild(r)}r.style.display="block";var l=window.Processing.getInstanceById(Sk.canvas);return l&&l.exit(),setTimeout(function(){Oa.p=new window.Processing(r,t)},300),n}),Oa},Object.defineProperty(e,"__esModule",{value:!0})});