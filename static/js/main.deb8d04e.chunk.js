(this.webpackJsonpvongcinema=this.webpackJsonpvongcinema||[]).push([[0],{46:function(e,t,a){e.exports=a(96)},51:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},52:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),i=(a(51),a(52),a(7)),m=a(97),o=a(98),s=a(99),u=a(100),d=a(107),g=a(101),v=a(102),E=a(103),p=a(104),h=a(11),f=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement(m.a,{expand:"md"},c.a.createElement(o.a,null,c.a.createElement(s.a,{href:"/"},c.a.createElement("img",{src:"/vongcinema/assets/images/logo.svg",alt:"logo"})),c.a.createElement(u.a,{onClick:function(){return l(!a)}}),c.a.createElement(d.a,{isOpen:a,navbar:!0},c.a.createElement(g.a,{className:"mr-auto",navbar:!0},c.a.createElement(v.a,null,c.a.createElement(E.a,{tag:h.b,exact:!0,to:"/"},"home")),c.a.createElement(v.a,null,c.a.createElement(E.a,{tag:h.b,exact:!0,to:"/movie?page=1"},"movie")),c.a.createElement(v.a,null,c.a.createElement(E.a,{tag:h.b,exact:!0,to:"/news"},"news")),c.a.createElement(v.a,null,c.a.createElement(E.a,{tag:h.b,exact:!0,to:"/contact"},"contact"))),c.a.createElement(p.a,{className:"ml-sm-auto mr-2",type:"text",placeholder:"Search keywords..."})))))},N=a(15),b=a(105),_=a(106),y=a(14),O=a.n(y),w=function(e){var t=e.id,a=e.title,n=e.poster_path,l=e.release_date,r=e.vote_average,i=e.original_language,m=e.adult;return c.a.createElement("div",{className:"movie-slider-item"},c.a.createElement("img",{src:"http://image.tmdb.org/t/p/w154/"+n}),c.a.createElement("div",{className:"movie-slider-item-header"},c.a.createElement(h.b,{className:"hero-title",to:"/m/".concat(t)},a)),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/calendar.svg",alt:"calendar"}),c.a.createElement("p",{className:"movie-slider-item-releaseDate my-0 mt-1 pl-2"},l)),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/Star.svg",alt:"rating"}),c.a.createElement("p",{className:"my-0 mt-1 pl-2 movie-slider-item-rating"},r)),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/Tag.svg",alt:"tag"}),c.a.createElement("p",{className:"movie-slider-item-description my-0 mt-1 pl-2"},m?"Adult, ":null," ",i)))},j=function(e){var t=e.movielist,a=e.type,n=function(e,t){var a=document.querySelector(".".concat(e));switch(t){case"left":var n=0,c=setInterval((function(){a.scrollLeft-=10,(n+=10)>=a.clientWidth&&window.clearInterval(c)}),3);break;case"right":n=0,c=setInterval((function(){a.scrollLeft+=10,(n+=10)>=a.clientWidth&&window.clearInterval(c)}),3)}};return c.a.createElement(c.a.Fragment,null,t.results.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"movie-slider-innercontainer ".concat(a)},c.a.createElement("button",{className:"btn-left",onClick:function(e){return n(a,"left")}}),c.a.createElement("button",{className:"btn-right",onClick:function(e){return n(a,"right")}}),t.results.map((function(e,t){return c.a.createElement(w,{key:e.id,id:e.id,title:e.title,poster_path:e.poster_path,release_date:e.release_date,vote_average:e.vote_average,adult:e.adult,original_language:e.original_language})})))):c.a.createElement("p",{className:"text-white-50"},"No results"))},x=a(44),k=a.n(x),S="".concat("26b58a5dfb2cc4733f2edd50edd8a201"),A=function(e){var t,a,n,c=arguments;return k.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:"en-US",n=c.length>3&&void 0!==c[3]?c[3]:"",console.log("fetch "+t),l.abrupt("return",O.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(S,"&page=").concat(t,"&language=").concat(a,"&region=").concat(n)).then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 5:case"end":return l.stop()}}))},F=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),m=Object(i.a)(r,2),o=m[0],s=m[1],u=Object(n.useState)(),d=Object(i.a)(u,2),g=d[0],v=d[1],E=Object(n.useState)(),p=Object(i.a)(E,2),h=p[0],f=p[1];Object(n.useEffect)((function(){return N(),y(),O(),w(),function(){console.log("closed home")}}),[]);var N=function(){A("now_playing").then((function(e){return l(e)})).catch((function(e){return console.log(e)}))},y=function(){A("popular").then((function(e){return s(e)})).catch((function(e){return console.log(e)}))},O=function(){A("top_rated").then((function(e){return v(e)})).catch((function(e){return console.log(e)}))},w=function(){A("upcoming").then((function(e){return f(e)})).catch((function(e){return console.log(e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"hero-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hero-content"},c.a.createElement("strong",{className:"hero-subdescription"},"the world need a hero, ",c.a.createElement("br",null),"they got a guy"),c.a.createElement("h3",{className:"hero-title"},"Free guy"),c.a.createElement("h6",{className:"hero-subtitle"},"july 3"),c.a.createElement(b.a,{className:"primaryBtn-bg"},c.a.createElement("img",{style:{width:"20px",height:"20px"},alt:"hero",src:"/vongcinema/assets/images/play.svg"}),c.a.createElement("div",{style:{marginTop:"5px"}},"watch trailer"))))),c.a.createElement("section",{className:"category-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Now Playing"),a?c.a.createElement(j,{type:"nowplaying",movielist:a}):c.a.createElement(_.a,null)),c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Popular"),c.a.createElement("div",{className:"movie-slider-innercontainer"},o?c.a.createElement(j,{type:"popular",movielist:o}):c.a.createElement(_.a,null))),c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Top Rated"),c.a.createElement("div",{className:"movie-slider-innercontainer"},g?c.a.createElement(j,{type:"toprated",movielist:g}):c.a.createElement(_.a,null))),c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Upcoming"),c.a.createElement("div",{className:"movie-slider-innercontainer"},h?c.a.createElement(j,{type:"upcoming",movielist:h}):c.a.createElement(_.a,null))))))},P=a(22),R=function(e,t){switch(t.type){case"NOW_PLAYING":return{tag_name:"now_playing",tag_index:0};case"POPULAR":return{tag_name:"popular",tag_index:1};case"UPCOMING":return{tag_name:"upcoming",tag_index:2};default:return e}},C=Object(n.createContext)(),I=function(e){var t=Object(n.useReducer)(R,{tag_name:"now_playing",tag_index:0},(function(){var e=localStorage.getItem("tag");return e?JSON.parse(e):{tag_name:"now_playing",tag_index:0}})),a=Object(i.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){console.log(l.tag_name),localStorage.setItem("tag",JSON.stringify(l))}),[l]),c.a.createElement(C.Provider,{value:{tag:l,dispatch:r}},e.children)},D=function(e){var t=e.history,a=(e.key,e.number),n=e.currentPage;return c.a.createElement("span",{onClick:function(e){return t.push("/movie?page=".concat(a))},id:"".concat(a==n&&"pagination--active")},a)},G=function(e){var t=a(83).parse(e.location.search).page,l=Object(n.useState)([]),r=Object(i.a)(l,2),m=(r[0],r[1]),o=Object(n.useState)(0),s=Object(i.a)(o,2),u=s[0],d=s[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),E=v[0],p=v[1],h=Object(n.useContext)(C),f=h.dispatch,N=h.tag,b=Object(P.b)((function(e){return e.defaultState.keywords}));Object(n.useEffect)((function(){m(document.querySelectorAll(".tag"))}),[]),Object(n.useEffect)((function(){}),[b]),Object(n.useEffect)((function(){u>0&&O()}),[u]),Object(n.useEffect)((function(){y(N.tag_name)}),[N]),Object(n.useEffect)((function(){y(N.tag_name,t)}),[t]);var y=function(e,t){E&&p([]),A(e,t).then((function(e){return p(e.results),e})).then((function(e){return d(e.total_pages)})).catch((function(e){return console.log(e)}))},O=function(){for(var a=[],n=0;n<u;n++)a.push(c.a.createElement(D,{history:e.history,key:n+1,number:n+1,currentPage:t}));return a};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movie-list"},c.a.createElement("h5",null,"Sort by:"),c.a.createElement("div",{className:"d-flex mb-4 flex-sm-row flex-column"},c.a.createElement("span",{className:"tag ".concat(0===N.tag_index&&"tag--active"),onClick:function(){return f({type:"NOW_PLAYING"})}},"Now playing"),c.a.createElement("span",{className:"tag ".concat(1===N.tag_index&&"tag--active"),onClick:function(){return f({type:"POPULAR"})}},"Popular"),c.a.createElement("span",{className:"tag ".concat(2===N.tag_index&&"tag--active"),onClick:function(){return f({type:"UPCOMING"})}},"Upcoming")),E.length>0?E.map((function(t,a){return c.a.createElement("div",{className:"movie-list__column",onClick:function(a){return e.history.push("/m/".concat(t.id))}},c.a.createElement("div",{className:"movie-list__column-container",key:a},c.a.createElement("img",{alt:t.title,className:"movie-list__column-poster",src:"http://image.tmdb.org/t/p/w300/"+t.poster_path}),c.a.createElement("div",{className:"movie-list__column-info"},c.a.createElement("h5",{className:"movie-list__column-title"},t.title),c.a.createElement("p",{className:"movie-list__column-description"},t.overview),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/calendar.svg",alt:"calendar"}),c.a.createElement("p",{className:"movie-slider-item-releaseDate my-0 mt-1 pl-2"},t.release_date)),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/Star.svg",alt:"rating"}),c.a.createElement("p",{className:"my-0 mt-1 pl-2 movie-slider-item-rating"},t.vote_average)),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("img",{className:"icon",src:"/vongcinema/assets/images/Tag.svg",alt:"tag"}),c.a.createElement("p",{className:"movie-slider-item-description my-0 mt-1 pl-2"},t.adult?"Adult, ":null," ",t.original_language)))))})):c.a.createElement(_.a,null),c.a.createElement("div",{className:"movie-list-pagination"},u>0&&O()))))},U=function(){return c.a.createElement("div",null,"News")},W=function(){return c.a.createElement("div",null,"Contact")},L="".concat("26b58a5dfb2cc4733f2edd50edd8a201"),M=function(e){var t=e.match.params.movieid,a=Object(n.useState)(),l=Object(i.a)(a,2),r=l[0],m=l[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],d=s[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),E=v[0],p=v[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),N=f[0],b=f[1];Object(n.useEffect)((function(){y(),w(),k(),x()}),[e.location.pathname]),Object(n.useEffect)((function(){console.log(E)}),[E]);var y=function(){O.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(L)).then((function(e){return m(e.data)})).catch((function(e){return console.log(e)}))},w=function(){O.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(L)).then((function(e){return d(e.data.results)})).catch((function(e){return console.log(e)}))},x=function(){O.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=").concat(L)).then((function(e){return p(e.data)})).catch((function(e){return console.log(e)}))},k=function(){O.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=").concat(L)).then((function(e){return b(e.data)})).catch((function(e){return console.log(e)}))},S=function(){return c.a.createElement(c.a.Fragment,null,u.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("iframe",{className:"video",src:"https://www.youtube.com/embed/".concat(e.key)}))})))};return c.a.createElement(c.a.Fragment,null,r?c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"movie-detail-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movie-detail-innercontainer"},c.a.createElement("div",{className:"movie-detail-poster"},c.a.createElement("img",{style:{maxWidth:"500px",width:"100%"},src:"http://image.tmdb.org/t/p/w500/"+r.poster_path})),c.a.createElement("div",{className:"movie-detail-content"},c.a.createElement("strong",{className:"hero-subtitle mt-0"},"Released on ",r.release_date),c.a.createElement("div",{className:"movie-detail-header"},c.a.createElement("h5",{className:"hero-title"},r.title)),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Rating"),c.a.createElement("div",null,c.a.createElement("span",{className:"movie-rating"},r.vote_average))),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Status"),c.a.createElement("div",null,c.a.createElement("span",{className:"movie-status"},r.status))),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Duration"),c.a.createElement("div",null,c.a.createElement("p",{className:"movie-runtime my-0"},r.runtime," hours"))),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Genres"),c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex flex-wrap"},r.genres.map((function(e,t){return c.a.createElement("span",null,e.name,t===r.genres.length-1?null:", "," ")}))))),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Overview"),c.a.createElement("div",null,c.a.createElement("strong",{className:"movie-tagline"},r.tagline?'"'+r.tagline+'"':null),c.a.createElement("p",{className:"movie-overview"},r.overview))),c.a.createElement("div",{className:"movie-detail-column"},c.a.createElement("b",{className:"mr-auto"},"Made from"),c.a.createElement("div",{className:"d-flex"},r.production_countries.map((function(e){return e&&c.a.createElement("span",null,e.name," ")})))),c.a.createElement("div",{className:"d-flex"},r.production_companies.map((function(e){return e.logo_path&&c.a.createElement("img",{alt:"logo",className:"company-logo",src:"https://image.tmdb.org/t/p/w45/"+e.logo_path})})))))))),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"video-section"},c.a.createElement("div",{className:"container"},c.a.createElement("h6",{className:"hero-title"},"Video"),u.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"video-list"},S())):c.a.createElement("p",{className:"text-white-50"},"No video is found.")))),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"similar-movie-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Similar Movie"),N.results?c.a.createElement(j,{type:"similar",movielist:N}):c.a.createElement(_.a,null))))),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"recommended-movie-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movie-slider-container"},c.a.createElement("h6",{className:"hero-title"},"Recommended Movie"),E.results?c.a.createElement(j,{type:"recommended",movielist:E}):c.a.createElement(_.a,null)))))):c.a.createElement(_.a,null))};var J=function(){return c.a.createElement(I,null,c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(f,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",exact:!0,component:F}),c.a.createElement(N.a,{path:"/news",exact:!0,component:U}),c.a.createElement(N.a,{path:"/contact",exact:!0,component:W}),c.a.createElement(N.a,{path:"/movie",exact:!0,component:G}),c.a.createElement(N.a,{path:"/m/:movieid",component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(95);var T=a(16),V={keywords:"",language:"",region:""},Y=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_KEYWORD":return Object(T.a)({},V,{keywords:e.payload});case"REMOVE_KEYWORD":return Object(T.a)({},V,{keywords:""});case"ADD_LANGUAGE":return Object(T.a)({},V,{language:e.payload});case"REMOVE_LANGUAGE":return Object(T.a)({},V,{language:""});case"ADD_REGION":return Object(T.a)({},V,{region:e.payload});case"REMOVE_REGION":return Object(T.a)({},V,{region:""});default:return{defaultState:V}}},B=a(21),q=Object(B.b)(Y);r.a.render(c.a.createElement(P.a,{store:q},c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.deb8d04e.chunk.js.map