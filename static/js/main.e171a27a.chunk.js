(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},138:function(e,t,a){},141:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),o=a.n(l),c=(a(61),a(11)),i=a(12),s=a(14),m=a(13),u=a(15),p=a(22),d=a(10),b=a(4),h=a(35),g=a.n(h),E=(a(122),a(16)),f=a.n(E),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({modal:!a.state.modal})},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.restorepassword=a.restorepassword.bind(Object(d.a)(Object(d.a)(a))),a.state={modal:!1,emailRestor:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a)),console.log(a),console.log(n)}},{key:"restorepassword",value:function(){f.a.auth().sendPasswordResetEmail(this.state.emailRestor).then(function(){document.getElementById("restor").value="",console.log("Se envia email")}).catch(function(e){console.log("Error")})}},{key:"render",value:function(){return r.a.createElement(b.Container,null,r.a.createElement("a",{href:"/#",className:"brown-text",onClick:this.toggle},"\xbfOlvidaste tu Contrase\xf1a?"),r.a.createElement(b.Modal,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(b.ModalHeader,{toggle:this.toggle},r.a.createElement("img",{width:"60px",src:g.a,alt:"logo"})),r.a.createElement(b.ModalBody,null,r.a.createElement("div",{className:"grey-text"},"Se enviara un correo para el cambio de contrase\xf1a",r.a.createElement(b.Input,{value:this.state.emailRestor,onChange:this.handleChange,name:"emailRestor",label:"Correo",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",id:"restor"}))),r.a.createElement(b.ModalFooter,null,r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(b.Button,{color:"light-blue accent-2",onClick:this.restorepassword,type:"submit"},"Enviar",r.a.createElement("i",{className:"fa fa-paper-plane-o ml-2"}))))))}}]),t}(r.a.Component),y=(a(138),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).login=e.login.bind(Object(d.a)(Object(d.a)(e))),e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.state={email:"",password:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"login",value:function(e){var t=this.state,a=t.email,n=t.password;e.preventDefault(),f.a.auth().signInWithEmailAndPassword(a,n).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement("div",{id:"background"},r.a.createElement(b.Container,{className:"pt-3"},r.a.createElement(b.Row,null,r.a.createElement(b.Col,{md:"3"}),r.a.createElement(b.Col,{md:"6",className:"pt-5"},r.a.createElement(b.Card,null,r.a.createElement(b.CardBody,null,r.a.createElement("form",null,r.a.createElement("center",null,r.a.createElement("img",{width:"120px",src:g.a,alt:"logo"}),r.a.createElement("p",{id:"titule",className:"h4 text-center py-2 titule secondary-text"},"Burger Queen")),r.a.createElement("div",{className:"grey-text"},r.a.createElement(b.Input,{value:this.state.email,onChange:this.handleChange,name:"email",label:"Correo",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),r.a.createElement(b.Input,{value:this.state.password,onChange:this.handleChange,name:"password",label:"Contrase\xf1a",icon:"lock",group:!0,type:"password",validate:!0})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(b.Button,{onClick:this.login,color:"light-blue accent-2",type:"submit"},"Entrar"),r.a.createElement(v,null)))))),r.a.createElement(b.Col,{md:"3"}))))}}]),t}(r.a.Component)),k=f.a.initializeApp({apiKey:"AIzaSyCnjRYtIHlb8hvQmM2WWW7VkJPzqyK52jc",authDomain:"burger-queen-75467.firebaseapp.com",databaseURL:"https://burger-queen-75467.firebaseio.com",projectId:"burger-queen-75467",storageBucket:"burger-queen-75467.appspot.com",messagingSenderId:"550959473561"}),w=a(55),C=a.n(w),O=(a(141),a(48)),j=a(31),N=a(32),S=(a(51),a(18)),I=a(17),q=a(19),x=f.a.firestore();S.b.add(q.a);var B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleViewOrder=function(){x.collection("order").onSnapshot(function(t){var a=[];t.forEach(function(e){console.log("".concat(e.id," => ").concat(e.data()));var t=e.data(),n=t.user,r=t.operations;a.push({user:n,operations:r})}),console.log(e.state.postOrder),e.setState({postOrder:a})})},e.state={postOrder:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.postOrder.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(b.Table,null,r.a.createElement(b.TableBody,null,r.a.createElement("tr",null,r.a.createElement("td",{width:"200","pr-1":!0},e.user)))))});return r.a.createElement("div",null,e,r.a.createElement("button",{type:"button",onClick:this.handleViewOrder,className:"btn btn-primary "},"Pedidos  ",r.a.createElement(I.a,{icon:"clipboard-list"})))}}]),t}(n.Component),D=a(36);a(147);f.a.firestore().settings({timestampsInSnapshots:!0});var T=f.a.firestore();S.b.add(q.c,q.d,q.b);var A=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){var a=t.target,n=a.value,r=a.name,l=e.state.operations;console.log(e.state.operations),l.push({type:r,price:n}),e.state.operations.forEach(function(t){e.setState({total:e.state.total+parseInt(t.price)})})},e.handleDelete=function(t){e.setState({operations:e.state.operations.filter(function(e,a){return a!==t})}),e.state.operations.forEach(function(a,n){n===t&&e.setState({total:e.state.total-parseInt(a.price)})})},e.handleOrder=function(){T.collection("order").add({user:e.state.user,operations:e.state.operations}).then(function(e){console.log("Document written with ID: ",e.id),console.log("created order")}).catch(function(e){console.error("Error adding document: ",e)})},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(p.a)({},r,n))},e.state={operations:[],total:0,user:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-sm-6 col-md-6"},D.Desayuno.map(function(t,a){return r.a.createElement("div",{id:"card",key:a},r.a.createElement(b.Card,null,r.a.createElement("center",null,r.a.createElement("img",{src:t.url,alt:t.type,height:"100",width:"140"})),r.a.createElement("p",null,t.type),"$",t.price,r.a.createElement("button",{id:a,onClick:e.handleClick,name:t.type,value:t.price,type:"button",className:"btn btn-primary "},r.a.createElement(I.a,{icon:"plus-square"}))))})),r.a.createElement("div",{id:"card2",className:"col-6 col-sm-6 col-md-6"},r.a.createElement("div",{id:"input"},r.a.createElement("label",{for:"exampleForm2"},"Nombre cliente"),r.a.createElement("input",{name:"user",value:this.state.user,type:"user",onChange:this.handleChange,id:"exampleForm2",className:"form-control"})),this.state.operations.map(function(t,a){return r.a.createElement("div",{id:"card3",key:a},r.a.createElement(b.Table,null,r.a.createElement(b.TableBody,null,r.a.createElement("tr",null,r.a.createElement("td",{width:"200","pr-1":!0},t.type),r.a.createElement("td",{width:"200"},t.price),r.a.createElement("td",{width:"200"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm ",onClick:function(){return e.handleDelete(a)}},r.a.createElement(I.a,{icon:"trash-alt"})))))))}),r.a.createElement("div",{id:"card4"},r.a.createElement(b.Table,null,r.a.createElement(b.TableBody,null,r.a.createElement("tr",null,r.a.createElement("td",{width:"200"},"Total"),r.a.createElement("td",{width:"200"},r.a.createElement("b",null,this.state.total)),r.a.createElement("td",{width:"200"})),r.a.createElement("tr",null,r.a.createElement("td",{width:"200"}),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:this.handleOrder,className:"btn btn-primary "},"Enviar a cocina  ",r.a.createElement(I.a,{icon:"paper-plane"}))),r.a.createElement("td",{width:"200"})))))))}}]),t}(n.Component);S.b.add(q.c);var M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){var a=t.target,n=a.value,r=a.name,l=e.state.operations;console.log(e.state.operations),l.push({type:r,price:n}),e.state.operations.forEach(function(t){e.setState({total:e.state.total+parseInt(t.price)})})},e.handleDelete=function(t){e.setState({operations:e.state.operations.filter(function(e,a){return a!==t})}),e.state.operations.forEach(function(a,n){n===t&&e.setState({total:e.state.total-parseInt(a.price)})})},e.state={operations:[],total:0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-sm-12 col-md-8"},D.Almuerzo.map(function(t,a){return r.a.createElement("div",{id:"card",key:a},r.a.createElement(b.Card,null,r.a.createElement("center",null,r.a.createElement("img",{src:t.url,alt:t.type,height:"100",width:"140"})),r.a.createElement("p",null,t.type),"$",t.price,r.a.createElement("button",{id:a,onClick:e.handleClick,name:t.type,value:t.price,type:"button",className:"btn btn-primary "},r.a.createElement(I.a,{icon:"plus-square"}))))})),r.a.createElement("div",{id:"card2",className:"col-6 col-sm-6 col-md-4"},r.a.createElement("div",{id:"input"},r.a.createElement("label",{for:"exampleForm2"},"Nombre cliente"),r.a.createElement("input",{type:"text",id:"exampleForm2",className:"form-control"})),this.state.operations.map(function(t,a){return r.a.createElement("div",{id:"card5",key:a},r.a.createElement(b.Table,null,r.a.createElement(b.TableBody,null,r.a.createElement("tr",null,r.a.createElement("td",{width:"200","pr-1":!0},t.type),r.a.createElement("td",{width:"200"},t.price),r.a.createElement("td",{width:"200"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm ",onClick:function(){return e.handleDelete(a)}},r.a.createElement(I.a,{icon:"trash-alt"})))))))}),r.a.createElement("div",{id:"card6"},r.a.createElement(b.Table,null,r.a.createElement(b.TableBody,null,r.a.createElement("tr",null,r.a.createElement("td",{width:"200"},"Total"),r.a.createElement("td",{width:"200"},r.a.createElement("b",null,this.state.total)),r.a.createElement("td",{width:"200"})),r.a.createElement("tr",null,r.a.createElement("td",{width:"200"}),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-primary "},"Enviar a cocina ",r.a.createElement(I.a,{icon:"paper-plane"}))),r.a.createElement("td",{width:"200"})))))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={collapse:!1},a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"logout",value:function(){k.auth().signOut().then(function(){console.log("Saliendo...")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(b.Navbar,{id:"nav",dark:!0,expand:"md",scrolling:!0},r.a.createElement(b.NavbarBrand,{href:"/"},r.a.createElement("img",{width:"60px",src:C.a,alt:"logo"}),"  ",r.a.createElement("span",{id:"titule2"},"Burger Queen")),r.a.createElement(b.NavbarToggler,{onClick:this.onClick}),r.a.createElement(b.Collapse,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(b.NavbarNav,{left:!0,id:"tituleNav"},r.a.createElement(b.NavItem,{active:!0}),r.a.createElement(b.NavItem,null,r.a.createElement(b.Dropdown,null,r.a.createElement(b.DropdownToggle,{nav:!0,caret:!0},"Men\xfa"),r.a.createElement(b.DropdownMenu,null,r.a.createElement(b.DropdownItem,{href:"#"},r.a.createElement(j.a,{to:"/Breakfast"},"Desayunos"),"\u200b"),r.a.createElement(b.DropdownItem,{href:"#"},r.a.createElement(j.a,{to:"/Dinner"},"Almuerzos y Cenas"))))),r.a.createElement(b.NavItem,null,r.a.createElement(b.NavLink,{to:"#"},r.a.createElement(j.a,{id:"titule3",to:"/Pedido"},"Pedidos")))),r.a.createElement(b.NavbarNav,{right:!0,id:"tituleNav2"},r.a.createElement(b.NavItem,null,r.a.createElement(b.NavLink,{onClick:this.logout,to:"#"},"Cerrar Sesi\xf3n "))))),r.a.createElement(N.a,{path:"/Breakfast",component:A}),r.a.createElement(N.a,{path:"/Dinner",component:M}),r.a.createElement(N.a,{exact:!0,path:"/Pedido",component:B}),"\u200b \u200b"))}}]),t}(r.a.Component),R=(a(149),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={user:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;k.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.user?r.a.createElement(P,{user:this.state.user}):r.a.createElement(y,null))}}]),t}(n.Component));a(151),a(153),a(155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){e.exports=a.p+"static/media/bq.16b84d37.jpg"},36:function(e){e.exports={Almuerzo:[{price:10,type:"Burger simple",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/hamburguesasimple.png?alt=media&token=1626c4cc-1890-4b8d-b030-c87bdce805a0"},{price:15,type:"Burger doble",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/hamburguesadoble.png?alt=media&token=ad396a69-937f-4bd6-b621-76454970de74"},{price:5,type:"Papas fritas",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/papasfritas.png?alt=media&token=da64f885-3822-4b42-9421-fa36e2154ac3"},{price:5,type:"Onion rings",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/onionring.png?alt=media&token=355a283d-b02a-411e-99e1-a3c7509a8762"},{price:5,type:"Agua 500ml",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/500mlagua.jpg?alt=media&token=4855f1bb-a050-4f67-94e3-f8c8163a8ece"},{price:7,type:"Agua 750ml",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/500mlagua.jpg?alt=media&token=4855f1bb-a050-4f67-94e3-f8c8163a8ece"},{price:5,type:"Gaseosa 500ml",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/gaseosa500ml.jpg?alt=media&token=fda1be96-8e20-45c0-8156-0b618ef1ea56"},{price:10,type:"Gaseosa 750ml",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/gaseosa750ml.jpg?alt=media&token=de221932-39db-4a86-8a5a-6a99b9cbea2b"}],Desayuno:[{price:5,type:"Caf\xe9 americano",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/Coffeeamericano.png?alt=media&token=26bb700e-80be-4f85-82ab-484a6870761d"},{price:7,type:"Caf\xe9 con leche",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/cafeleche.png?alt=media&token=3be9ff9e-67d1-4fe4-ab8d-b9659729794c"},{price:10,type:"Sandwich",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/sandwich.jpg?alt=media&token=b04dcd53-95b5-454d-99e4-65ec66569d00"},{price:7,type:"Jugo natural",url:"https://firebasestorage.googleapis.com/v0/b/burger-queen-75467.appspot.com/o/jugo.jpg?alt=media&token=1549a3e8-f2dc-4742-bc22-dcc602a8a536"}]}},51:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/bqueen.d777ea1c.png"},56:function(e,t,a){e.exports=a(157)},61:function(e,t,a){}},[[56,2,1]]]);
//# sourceMappingURL=main.e171a27a.chunk.js.map