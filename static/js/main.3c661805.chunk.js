(this.webpackJsonpsortingvisualizer=this.webpackJsonpsortingvisualizer||[]).push([[0],{32:function(e,t,a){e.exports=a(55)},41:function(e,t,a){},42:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(33),a(34);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),l=a(15),s=a(3),c=a(5),u=a(14),m=a(13),d=a(8),p=(a(41),a(58)),h=a(17),v=a(56),f=a(57),g=a(59),y=a(60),b=a(61),S=(a(42),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(h.a)(n)),n.state={collapsed:!0},n}return Object(c.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"renderItems",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(l.c,{tag:l.b,isActive:function(e,t){return["/","/index","/index.html"].includes(t.pathname)},activeClassName:"active-nav-link",className:"nav-link text-dark",to:"/"},r.a.createElement("p",{style:{display:"inline"}},"Home"))),r.a.createElement(v.a,null,r.a.createElement(l.c,{tag:l.b,exact:!0,activeClassName:"active-nav-link",className:"nav-link text-dark",to:"/about"},r.a.createElement("p",{style:{display:"inline"}},"About"))))}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(f.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-black border-bottom box-shadow mb-3",light:!0},r.a.createElement(p.a,null,r.a.createElement(g.a,{tag:l.b,to:"/"},"Sorting Visualizer"),r.a.createElement(y.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(b.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},this.renderItems())))))}}]),a}(n.Component));S.displayName=S.name;var E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(p.a,null,this.props.children))}}]),a}(n.Component);E.displayName=E.name;var A=a(7),k=(a(54),function e(){Object(s.a)(this,e)}),w=function e(t,a){Object(s.a)(this,e),this.i=t,this.j=a},j=function e(t,a){Object(s.a)(this,e),this.i=t,this.j=a},O=function e(t,a,n){Object(s.a)(this,e),this.i=t,this.j=a,this.subArrayToReplace=n},N=function(){function e(){Object(s.a)(this,e),this.sortedArray=[],this.animations=[]}return Object(c.a)(e,[{key:"addAnimationObject",value:function(e){this.animations.push(e)}},{key:"addEmptyAnimation",value:function(e){for(var t=0;t<e;t++){var a=new k;this.animations.push(a)}}},{key:"addCompareAnimation",value:function(e,t){var a=new w(e,t);this.animations.push(a)}},{key:"addSwapAnimation",value:function(e,t){var a=new j(e,t);this.animations.push(a)}},{key:"addReplaceAnimation",value:function(e,t,a){var n=new O(e,t,a);this.animations.push(n)}}],[{key:"isEmptyAnimation",value:function(e){return e instanceof k}},{key:"isCompareAnimation",value:function(e){return e instanceof w}},{key:"isSwapAnimation",value:function(e){return e instanceof j}},{key:"isReplaceAnimation",value:function(e){return e instanceof O}}]),e}(),C=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(e,t){for(var a=t?e:Object(A.a)(e),n=new N,r=!1,i=0;i<a.length&&!r;i++){r=!0;for(var o=0;o<a.length-i-1;o++)if(n.addCompareAnimation(o,o+1),a[o]>a[o+1]){r=!1;var l=a[o];a[o]=a[o+1],a[o+1]=l,n.addSwapAnimation(o,o+1)}}return n.addReplaceAnimation(0,a.length,a),n.sortedArray=a,n}}]),e}(),x=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(e,t){for(var a=t?e:Object(A.a)(e),n=new N,r=1;r<a.length;r++){var i=a[r];n.addCompareAnimation(r,r);for(var o=r-1;o>=0&&i<a[o];)a[o+1]=a[o],n.addCompareAnimation(o,o+1),n.addSwapAnimation(o,o+1),o--;a[o+1]=i}return n.addReplaceAnimation(0,a.length,a),n.sortedArray=a,n}}]),e}(),I=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(e,t){for(var a=t?e:Object(A.a)(e),n=new N,r=0;r<a.length-1;r++){for(var i=r,o=r+1;o<a.length;o++)n.addCompareAnimation(i,o),a[o]<a[i]&&(i=o);var l=a[i];a[i]=a[r],a[r]=l,n.addSwapAnimation(i,r)}return n.addReplaceAnimation(0,a.length,a),n.sortedArray=a,n}}]),e}(),R=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(t,a){var n=a?t:Object(A.a)(t),r=new N;return e.mergeSortRec(n,0,n.length-1,r),r.addReplaceAnimation(0,n.length,n),r.sortedArray=n,r}},{key:"mergeSortRec",value:function(t,a,n,r){if(a<n){var i=~~((n-a)/2+a);e.mergeSortRec(t,a,i,r),e.mergeSortRec(t,i+1,n,r),e.merge(t,a,i,n,r)}}},{key:"merge",value:function(e,t,a,n,r){var i=t,o=a+1;if(!(e[a]<=e[o]))for(;i<=a&&o<=n;)if(r.addCompareAnimation(i,o),e[i]>e[o]){for(var l=e[o],s=o;s!==i;)e[s]=e[s-1],s--;e[s]=l,r.addReplaceAnimation(i,o,e.slice(i,o+1)),i++,a++,o++}else i++}}]),e}(),z=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(t,a){var n=a?t:Object(A.a)(t),r=new N;return e.mergeSortIter(n,r),r.addReplaceAnimation(0,n.length,n),r.sortedArray=n,r}},{key:"mergeSortIter",value:function(t,a){for(var n=t.length,r=1;r<n;r*=2)for(var i=0;i<n-1;i+=2*r){var o=Math.min(i+r-1,n-1),l=Math.min(i+2*r-1,n-1);e.merge(t,i,o,l,a)}}},{key:"merge",value:function(e,t,a,n,r){var i=t,o=a+1;if(!(e[a]<=e[o]))for(;i<=a&&o<=n;)if(r.addCompareAnimation(i,o),e[i]>e[o]){for(var l=e[o],s=o;s!==i;)e[s]=e[s-1],s--;e[s]=l,r.addReplaceAnimation(i,o,e.slice(i,o+1)),i++,a++,o++}else i++}}]),e}(),U=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(e,t){for(var a=t?e:Object(A.a)(e),n=new N,r=0,i=a.length-1,o=!1;!o;){o=!0;for(var l=r;l<i;l++)if(n.addCompareAnimation(l,l+1),a[l]>a[l+1]){o=!1;var s=a[l];a[l]=a[l+1],a[l+1]=s,n.addSwapAnimation(l,l+1)}if(o)break;o=!0;for(var c=--i;c>r;c--)if(n.addCompareAnimation(c,c-1),a[c]<a[c-1]){o=!1;var u=a[c];a[c]=a[c-1],a[c-1]=u,n.addSwapAnimation(c,c-1)}r++}return n.addReplaceAnimation(0,a.length,a),n.sortedArray=a,n}}]),e}(),F=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"sort",value:function(t,a){var n=a?t:Object(A.a)(t),r=new N;return e.quickSort(n,0,n.length-1,r),r.addReplaceAnimation(0,n.length,n),r.sortedArray=n,r}},{key:"quickSort",value:function(t,a,n,r){if(a<n){var i=e.partition(t,a,n,r);e.quickSort(t,a,i-1,r),e.quickSort(t,i,n,r)}}},{key:"partition",value:function(e,t,a,n){for(var r=e[~~((t+a)/2)];t<=a;){for(;e[t]<r;)n.addCompareAnimation(t,a),t++;for(;e[a]>r;)n.addCompareAnimation(t,a),a--;if(t<=a){var i=[e[a],e[t]];e[t]=i[0],e[a]=i[1],n.addCompareAnimation(t,a),n.addSwapAnimation(t,a),t++,a--}}return t}}]),e}(),M=[1e3,300,100,40,10,1],W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onAlgorithmChange=function(e){var t=parseInt(e.target.value);n.setState({algorithmId:t})},n.onSpeedChange=function(e){n.pauseSortAnimation();var t=parseInt(e.target.value);n.setState({delay:M[t-1]})},n.onArraySizeChange=function(e){var t=parseInt(e.target.value);n.config.arraySize=t,n.setState({update:!0})},n.state={algorithmId:7,array:[],playing:!1,delay:1,update:!0},n.animState={loop:null,loopFunction:null,currentStep:0,numberOfSteps:0,toUncolor:[]},n.config={arraySize:100},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generateNewArray()}},{key:"componentWillUnmount",value:function(){this.stopSortAnimation()}},{key:"generateNewArray",value:function(){this.stopSortAnimation();for(var e,t,a=[],n=0;n<this.config.arraySize;n++)a.push((e=1,t=300,Math.floor(Math.random()*(t-e)+e)));this.setState({array:a}),this.paintArray("darkgray")}},{key:"paintArray",value:function(e){for(var t=0;t<this.state.array.length;t++){document.getElementById("vertical-bar-"+t).style.backgroundColor=e}}},{key:"paintArrayIndex",value:function(e,t){t<this.state.array.length&&t>=0&&(document.getElementById("vertical-bar-"+t).style.backgroundColor=e)}},{key:"playAnimations",value:function(e){var t=this;0!==e.length?(this.animState.currentStep=0,this.animState.numberOfSteps=e.length,this.animState.toUncolor=[],this.paintArray("darkgray"),this.animState.loopFunction=function(){var a=t.animState.currentStep;if(a>=t.animState.numberOfSteps)return clearInterval(t.animState.loop),t.paintArray("green"),t.animState.currentStep=0,void t.setState({playing:!1});if(N.isEmptyAnimation(e[a]))for(;t.animState.toUncolor.length>0;)t.paintArrayIndex("darkgray",t.animState.toUncolor.pop());else if(N.isCompareAnimation(e[a])){for(;t.animState.toUncolor.length>0;)t.paintArrayIndex("darkgray",t.animState.toUncolor.pop());t.paintArrayIndex("red",e[a].i),t.paintArrayIndex("red",e[a].j),t.animState.toUncolor.push(e[a].i,e[a].j)}else if(N.isSwapAnimation(e[a])){var n=e[a].i,r=e[a].j,i=t.state.array[n];t.state.array[n]=t.state.array[r],t.state.array[r]=i,t.setState({update:!0})}else if(N.isReplaceAnimation(e[a])){for(;t.animState.toUncolor.length>0;)t.paintArrayIndex("darkgray",t.animState.toUncolor.pop());for(var o=e[a].i;o<=e[a].j;o++)t.paintArrayIndex("violet",o),t.animState.toUncolor.push(o),t.state.array[o]=e[a].subArrayToReplace[o-e[a].i];t.setState({update:!0})}t.animState.currentStep++},this.animState.loop=setInterval(this.animState.loopFunction,this.state.delay)):this.instantSort()}},{key:"getSortResult",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(this.state.algorithmId){case 1:e=C.sort(this.state.array,t);break;case 2:e=x.sort(this.state.array,t);break;case 3:e=I.sort(this.state.array,t);break;case 4:e=R.sort(this.state.array,t);break;case 5:e=z.sort(this.state.array,t);break;case 6:e=U.sort(this.state.array,t);break;case 7:e=F.sort(this.state.array,t)}return console.log(e),e}},{key:"instantSort",value:function(){console.log("Instant sort ..."),this.stopSortAnimation(),this.getSortResult(!0),this.setState({update:!0});for(var e=0;e<this.state.array.length;e++){document.getElementById("vertical-bar-"+e).style.backgroundColor="green"}}},{key:"startSortAnimation",value:function(){if(0===this.animState.currentStep){this.stopSortAnimation(),this.setState({playing:!0});var e=this.getSortResult();"undefined"!==typeof e?this.playAnimations(e.animations):this.setState({playing:!1})}}},{key:"resumeSortAnimation",value:function(){this.setState({playing:!0}),this.animState.loop=setInterval(this.animState.loopFunction,this.state.delay)}},{key:"pauseSortAnimation",value:function(){clearInterval(this.animState.loop),this.setState({playing:!1})}},{key:"stopSortAnimation",value:function(){clearInterval(this.animState.loop),this.animState.currentStep=0,this.paintArray("darkgray"),this.setState({playing:!1})}},{key:"playNext",value:function(){this.animState.loopFunction()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"form-inline"},r.a.createElement("label",{htmlFor:"selectAlgoDropDown"},r.a.createElement("h6",null,"Algorithm")),r.a.createElement("select",{className:"btn btn-sm combo-box",id:"selectAlgoDropDown",onChange:this.onAlgorithmChange,value:this.state.algorithmId},r.a.createElement("option",{value:1},"Bubble sort"),r.a.createElement("option",{value:2},"Insertion sort"),r.a.createElement("option",{value:3},"Selection sort"),r.a.createElement("option",{value:4},"Merge sort (recursive)"),r.a.createElement("option",{value:5},"Merge sort (iterative)"),r.a.createElement("option",{value:6},"Cocktail sort"),r.a.createElement("option",{value:7},"Quick sort")))),r.a.createElement("div",{className:"card-header"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return e.generateNewArray()}},"New array"),r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(){return e.instantSort()}},"Instant sort"),r.a.createElement("div",{className:"range-input form-inline"},r.a.createElement("label",{htmlFor:"sizeRangeSlider"},"Array's size: ",this.config.arraySize),r.a.createElement("input",{type:"range",className:"slider",id:"sizeRangeSlider",min:"10",max:"500",value:this.config.arraySize,onChange:this.onArraySizeChange}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{onClick:this.state.playing||0!==this.animState.currentStep?this.state.playing?function(){return e.pauseSortAnimation()}:function(){return e.resumeSortAnimation()}:function(){return e.startSortAnimation()},className:"btn btn-sm "+(this.state.playing||0!==this.animState.currentStep?"btn-warning":"btn-success")},this.state.playing||0!==this.animState.currentStep?this.state.playing?" | | Pause":" > Resume":" > Play"),r.a.createElement("button",{onClick:function(){return e.stopSortAnimation()},className:"btn btn-danger btn-sm"},"Stop"),r.a.createElement("button",{onClick:this.state.playing||0===this.animState.currentStep?function(){return null}:function(){return e.playNext()},disabled:this.state.playing||0===this.animState.currentStep,className:"btn btn-sm btn-warning"}," > Next"),r.a.createElement("div",{className:"range-input form-inline"},r.a.createElement("label",{htmlFor:"speedRangeSlider"},"Speed: ",M.indexOf(this.state.delay)+1,"x"),r.a.createElement("input",{type:"range",className:"slider",id:"speedRangeSlider",min:"1",max:M.length,value:M.indexOf(this.state.delay)+1,onChange:this.onSpeedChange})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",null,"View")),r.a.createElement("div",{className:"card-body render-zone"},this.state.array.map((function(t,a){return r.a.createElement("div",{key:a,id:"vertical-bar-"+a,style:{height:t,marginTop:Math.max.apply(Math,Object(A.a)(e.state.array))-t},className:"vertical-bar"})})))))}}]),a}(n.Component);W.displayName=W.name;var T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"About")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"This is a web application used to visualize different sorting algorithm on a random set of data represented by vertical bars."),r.a.createElement("p",null,"I made this project to enter into the front-end web development by learning javascript+react and to recap and learn different sorting algorithms."),r.a.createElement("p",null,"It is built with Javascript, React.JS and it's also a ",r.a.createElement("a",{href:"https://developers.google.com/web/progressive-web-apps"},"progressive web application"),"."),r.a.createElement("p",null,"You can access a deployed version at ",r.a.createElement("a",{href:"https://ciucacosmin109.github.io/SortingVisualizer"},"Github pages"),"."))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Download a local version")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Clone the repository:"),r.a.createElement("code",null,"> git clone https://github.com/ciucacosmin109/SortingVisualizer.git"),r.a.createElement("br",null),r.a.createElement("code",null,"> cd SortingVisualizer"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Install the dependencies:"),r.a.createElement("code",null,"> npm install"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Runs the app in the development mode:"),r.a.createElement("code",null,"> npm start"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"The default web browser should open automatically and redirect you to ",r.a.createElement("a",{href:"http://localhost:3000"},"http://localhost:3000")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"License")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/ciucacosmin109/SortingVisualizer/blob/master/LICENSE"},"GPL v3")))))}}]),a}(n.Component);T.displayName=T.name;var V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(d.a,{exact:!0,path:"/",component:W}),r.a.createElement(d.a,{exact:!0,path:"/index",component:W}),r.a.createElement(d.a,{exact:!0,path:"/index.html",component:W}),r.a.createElement(d.a,{exact:!0,path:"/about",component:T}))}}]),a}(n.Component);V.displayName=V.name;var B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=document.getElementsByTagName("base")[0].getAttribute("href"),P=document.getElementById("root");o.a.render(r.a.createElement(l.a,{basename:L},r.a.createElement(V,null)),P),function(e){if("serviceWorker"in navigator){if(new URL("/SortingVisualizer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/SortingVisualizer","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.3c661805.chunk.js.map