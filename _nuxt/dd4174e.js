(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("35b11384",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r(248)},258:function(t,e,r){var n=r(61)(!1);n.push([t.i,".back{all:unset;text-align:center;display:block;margin:1rem auto;padding:10px;cursor:pointer;font-weight:500;letter-spacing:1px;border-radius:5px;background-color:transparent;border:2px solid red;transition:.3s;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.currentJoke{font-size:clamp(.95rem,.8vw + .8rem,1.4rem);text-align:center}hr{margin-top:1rem;margin-bottom:1rem}small{text-align:right;display:block}@media screen and (max-width:500px){small{text-align:center}}",""]),t.exports=n},267:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(49),r(39),r(60)),c=r.n(o),l={head:function(){return{title:this.start+"..."}},data:function(){return{joke:{},start:""}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Accept:"application/json"}},e.prev=1,e.next=4,c.a.get("https://icanhazdadjoke.com/j/".concat(t.$route.params.id),r);case 4:n=e.sent,t.joke=n.data.joke,t.start=t.joke.slice(0,25),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},d=(r(257),r(30)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticClass:"back",attrs:{to:"/jokes"}},[t._v("Back to Jokes")]),t._v(" "),r("p",{staticClass:"currentJoke"},[t._v(t._s(t.joke))]),t._v(" "),r("hr"),t._v(" "),r("small",[t._v("Joke ID : "+t._s(t.$route.params.id))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);