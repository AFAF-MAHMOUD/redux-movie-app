(this["webpackJsonpredux-movie-app"]=this["webpackJsonpredux-movie-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=(n(22),n(5)),s=n(6),u=n(9),l=n(7),p=n(10),m=n(8),d=(n(28),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.props.movies&&this.props.movies.filter((function(t){return t.name.toLowerCase().includes(e.props.filtername.toLowerCase().trim())&&t.rating>=e.props.filterstar})).map((function(e){return r.a.createElement("div",{className:"movie-card"},r.a.createElement("p",{className:"movie-name"},e.name),r.a.createElement("p",{className:"movie-rating"},"".padEnd(e.rating,"\u2b50")),r.a.createElement("img",{className:"movie-img",src:e.img}))})))}}]),t}(a.Component)),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).add=function(){var e=n.props.nameReducers,t=n.props.imgReducers,a=n.props.ratingReducers;n.props.ADD_MOVIE(a,e,t)},n.star=function(e){n.props.FILTER_STAR(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-app"},r.a.createElement("header",{className:"header"},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return e.props.FILTER_NAME(t)}}),r.a.createElement("span",{onClick:function(){return e.star(1)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(2)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(3)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(4)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(5)}},"\u2b50")),r.a.createElement("p",{className:"plus",onClick:function(){return e.setState({display:!e.state.display})}},"+"),r.a.createElement("div",{className:this.props.DisplayReducers},r.a.createElement("input",{type:"text",placeholder:"name",name:"name",onChange:function(t){return e.props.CHANGE_NAME(t)}}),r.a.createElement("input",{type:"text",placeholder:"Img",name:"img",onChange:function(t){return e.props.CHANGE_IMG(t)}}),r.a.createElement("input",{type:"text",placeholder:"rating",name:"rating",onChange:function(t){return e.props.CHANGE_Rating(t)}}),r.a.createElement("button",{onClick:this.add},"Add")),r.a.createElement(d,{movies:this.props.ListMoviesReducers,filtername:this.props.filterName,filterstar:this.props.filterStar}))}}]),t}(a.Component),g=Object(m.b)((function(e){return{ListMoviesReducers:e.ListMoviesReducers,DisplayReducers:e.DisplayReducers,nameReducers:e.nameReducers,imgReducers:e.imgReducers,ratingReducers:e.ratingReducers,filterName:e.filterName,filterStar:e.filterStar}}),(function(e){return{ADD_MOVIE:function(t,n,a){e({type:"add-Movie",ratingAdd:t,nameAdd:n,img:a})},CHANGE_NAME:function(t){e({type:"CHANGE_NAME",value:t.target.value})},CHANGE_IMG:function(t){e({type:"CHANGE_IMG",value:t.target.value})},CHANGE_Rating:function(t){e({type:"CHANGE_Rating",value:t.target.value})},FILTER_NAME:function(t){e({type:"FILTER_NAME",value:t.target.value})},FILTER_STAR:function(t){e({type:"FILTER_STAR",value:t})}}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(3),h=n(16),E=[{rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"},{rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"}],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return"add-Movie"===t.type?[].concat(Object(h.a)(e),[{rating:t.ratingAdd,name:t.nameAdd,img:t.img}]):e},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"display";arguments.length>1&&arguments[1];return e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_NAME"===t.type?t.value:e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_IMG"===t.type?t.value:e},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_Rating"===t.type?t.value:e},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"FILTER_NAME"===t.type?t.value:e},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return"FILTER_STAR"===t.type?t.value:e},M=Object(f.c)(Object(f.b)({ListMoviesReducers:_,DisplayReducers:A,nameReducers:R,imgReducers:b,ratingReducers:N,filterName:y,filterStar:C}));c.a.render(r.a.createElement(m.a,{store:M}," ",r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e65c543e.chunk.js.map