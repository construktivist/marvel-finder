(this["webpackJsonpmarvel-finder"]=this["webpackJsonpmarvel-finder"]||[]).push([[0],{28:function(e,t,a){},35:function(e,t,a){e.exports=a(70)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(31),c=a.n(n),l=a(18),i=a(1),o=a(2),m=a(4),u=a(3),p=a(12),h=a(10),d=a(32),f=a.n(d),b=(a(57),a(28),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.setSearchType("comic"),this.props.handleResults([]),this.props.find(this.props.searchTerm)}},{key:"render",value:function(){return s.a.createElement("div",{className:"row global-margin"},s.a.createElement("h2",null,"Comics"))}}]),a}(s.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.setSearchType("character"),this.props.handleResults([]),this.props.find(this.props.searchTerm)}},{key:"render",value:function(){return s.a.createElement("div",{className:"row global-margin"},s.a.createElement("h2",null,"Characters"))}}]),a}(s.a.Component),E=(a(58),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){r.setState({search:e.target.value})},r.handleSelect=function(e){r.setState({sort:e.target.value},(function(){r.props.find(r.state.search,r.state.sort)}))},r.handleSubmit=function(e){e.preventDefault(),r.props.find(r.state.search,r.state.sort)},r.state={search:"",sort:""},r}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"searchbox"},s.a.createElement("i",{className:"fas fa-search col-xs-2"}),s.a.createElement("input",{id:"search",className:"search col-xs-10",type:"text",value:this.state.name,onChange:this.handleChange})),"comic"===this.props.searchType?s.a.createElement("select",{onChange:this.handleSelect,className:"m-select",id:"input-sort-select"},s.a.createElement("option",{value:"-focDate"},"Most Recent"),s.a.createElement("option",{value:"focDate"},"Older"),s.a.createElement("option",{value:"-title"},"Alphabetical (A-Z)"),s.a.createElement("option",{value:"title"},"Alphabetical (Z-A)"),s.a.createElement("option",{value:"-issueNumber"},"Issue Number (Descending)"),s.a.createElement("option",{value:"issueNumber"},"Issue Number (Ascending)")):s.a.createElement("div",null))))}}]),a}(s.a.Component)),y=a(14),O=a.n(y),g=(a(59),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={link:"/comics",label:"Comics"},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){if(O()(".modal-backdrop").remove(),O()("body").removeClass("modal-open"),"comic"===this.props.searchType){this.setState({link:"/characters",label:"Character"})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"modal fade",id:this.props.id,tabIndex:"-1",role:"dialog","aria-labelledby":this.props.id},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title",id:"modalTitle"},this.props.name),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("p",null,"Marvel ID: ",this.props.marvel_id),s.a.createElement("p",null,this.props.description),this.props.creators.map((function(e,t){return s.a.createElement("div",{className:"creator",key:t+e.name.slice("")},s.a.createElement("p",{className:"role"},e.role.charAt(0).toUpperCase()+e.role.slice(1)+": "),s.a.createElement("p",{className:"name"},e.name))})),s.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},"Marvel.com"),s.a.createElement("br",null),s.a.createElement(p.b,{to:this.state.link},this.state.label)),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}}]),a}(s.a.Component)),j=(a(64),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"profile-modal-wrapper"},s.a.createElement("div",{className:"profile expand col-xs-2","data-toggle":"modal","data-target":"#"+this.props.id},s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("img",{src:this.props.thumbnail,alt:this.props.name+" Profile Image"})),s.a.createElement("div",{className:" info-wrapper"},s.a.createElement("h5",null,this.props.name))),s.a.createElement(g,{key:this.props.id,id:this.props.id,marvel_id:this.props.marvel_id,name:this.props.name,description:this.props.description,creators:this.props.creators,url:this.props.url,searchType:this.props.searchType}))}}]),a}(s.a.Component)),N=(a(65),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"cover-modal-wrapper"},s.a.createElement("div",{className:"cover expand col-xs-2","data-toggle":"modal","data-target":"#"+this.props.id},s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("img",{src:this.props.thumbnail,alt:"comic"}))),s.a.createElement(g,{key:this.props.id,id:this.props.id,marvel_id:this.props.marvel_id,name:this.props.title,creators:this.props.creators,url:this.props.url,searchType:this.props.searchType}))}}]),a}(s.a.Component)),T=(a(66),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return"character"===this.props.searchType&&"object"===typeof this.props.searchResults?s.a.createElement("div",{className:"results row"},this.props.searchResults.map((function(t){return s.a.createElement(j,{key:t.id,id:t.name.replace(/[^A-Za-z]/g,""),marvel_id:t.id,name:t.name,description:t.description,creators:[],thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,url:t.urls[1].url,searchType:e.props.searchType})}))):"comic"===this.props.searchType&&"object"===typeof this.props.searchResults?s.a.createElement("div",{className:"results row"},this.props.searchResults.map((function(t,a){return s.a.createElement(N,{key:t.title.replace(/[^A-Za-z]/g,"")+"-"+a,id:t.title.replace(/[^A-Za-z]/g,"")+"-"+a,marvel_id:t.id,title:t.title,url:t.urls[0].url,creators:t.creators.items,issueNumber:t.issueNumber,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,searchType:e.props.searchType})}))):s.a.createElement("div",{className:"results row"},s.a.createElement("h3",{className:"sorry"},this.props.searchResults))}}]),a}(s.a.Component)),S=(a(67),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"loading"},s.a.createElement("div",{className:"spinner-border",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")),s.a.createElement("p",null,"LOADING..."))}}]),a}(s.a.Component)),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).setSearchType=function(e){r.setState({searchType:e})},r.find=function(e,t){e||(e=r.state.featured),t||(t="-focDate"),r.setState({offset:0,results:[],searchTerm:e,orderBy:t},(function(){r.search()}))},r.findMore=function(e,t){e||(e=r.state.featured),t||(t="-focDate"),r.setState({searchTerm:e,orderBy:t},(function(){r.search()}))},r.search=function(){"character"===r.state.searchType?r.request("/character",{params:{characterName:r.state.searchTerm}}):"comic"===r.state.searchType?r.request("/comics",{params:{titleStartsWith:r.state.searchTerm,orderBy:r.state.orderBy,offset:r.state.offset}}):console.log("ERROR: searchType: "+r.state.searchType+" does not match comics or characters")},r.request=function(e,t){r.setState({loading:!0}),f.a.get(e,t).then((function(t){"/character"===e?r.setState({results:t.data,loading:!1}):"object"===typeof t.data?r.setState({results:[].concat(Object(l.a)(r.state.results),Object(l.a)(t.data)),loading:!1}):r.setState({results:t.data,loading:!1})})).catch((function(e){console.log("ERROR: "+e)}))},r.handleResults=function(e){r.setState({results:e})},r.updateOffset=function(e){r.setState({offset:e}),r.findMore(r.state.searchTerm,r.state.orderBy)},r.state={featured:"spider-man",loading:!1,searchTerm:"",orderBy:"",offset:0,searchType:"comic",results:"",previousY:0},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.results||this.find();this.observer=new IntersectionObserver(this.handleObserver.bind(this),{root:null,rootMargin:"0px",threshold:1}),this.observer.observe(this.loadingRef)}},{key:"handleObserver",value:function(e,t){var a=e[0].boundingClientRect.y;if(this.state.previousY>a){var r=this.state.offset;this.setState({offset:r+=24}),this.findMore(this.state.searchTerm,this.state.orderBy)}this.setState({previousY:a})}},{key:"render",value:function(){var e=this;return s.a.createElement(p.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(C,null),s.a.createElement(E,{searchType:this.state.searchType,handleResults:this.handleResults,find:this.find}),s.a.createElement(h.a,{path:"/characters",render:function(t){return s.a.createElement(v,{setSearchType:e.setSearchType,searchTerm:e.state.searchTerm,handleResults:e.handleResults,find:e.find})}}),s.a.createElement(h.a,{path:"/comics",render:function(t){return s.a.createElement(b,{setSearchType:e.setSearchType,searchTerm:e.state.searchTerm,handleResults:e.handleResults,find:e.find})}}),s.a.createElement(T,{searchType:this.state.searchType,searchResults:this.state.results}),s.a.createElement("div",{ref:function(t){return e.loadingRef=t}},this.state.loading?s.a.createElement(S,null):s.a.createElement("div",null))))}}]),a}(s.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("nav",null,s.a.createElement("h1",null,"Marvel Search"),s.a.createElement(p.b,{to:"/characters"},"Characters"),s.a.createElement(p.b,{to:"/comics"},"Comics")))}}]),a}(s.a.Component),R=k;a(68),a(69);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b766ad44.chunk.js.map