(this["webpackJsonpcoursera-task"]=this["webpackJsonpcoursera-task"]||[]).push([[0],{102:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(102),t(20)),c=t(21),m=t(22),i=t(23),u=(t(72),t(103),t(104),t(154)),d=t(155),E=t(156),h=t(157),f=t(158),p=t(159),g=t(9),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},v="http://localhost:3001/";function N(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name))))}var y=function(e){var a=e.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-l mt-3"},r.a.createElement(N,{dish:e}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"row mt-3"},e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):void 0),r.a.createElement("div",{className:"row mt-3"},a)))},w=t(24),M=t(160),O=t(181),L=t(161),k=t(162),S=t(163),j=t(164),D=t(165),C=t(166),F=t(167),x=t(8),A=t(27),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={toggleModel:!1,isModelOpen:!1},n.toggleModel=n.toggleModel.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleModel",value:function(){this.setState({toggleModel:!this.state.toggleModel}),this.setState({isModelOpen:!this.state.isModelOpen}),console.log(this.state.toggleModel)}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"mb-3 ml-3"},r.a.createElement(M.a,{onClick:this.toggleModel,outline:!0,color:"white",style:{border:"2px solid black"}},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-pencil"}," ")," Submit Comment"))),r.a.createElement("div",null,r.a.createElement(O.a,{isOpen:this.state.isModelOpen,toggle:this.toggleModel},r.a.createElement(L.a,{toggle:this.toggleModel},"Submit Comment"),r.a.createElement(k.a,null,r.a.createElement(x.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(D.a,{htmlFor:"rating"},"Rating"))),r.a.createElement(S.a,{className:"mb-2"},r.a.createElement(j.a,null,r.a.createElement(x.Control.select,{model:".rating",name:"rating",className:"form-control",id:".rating"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(D.a,{htmlFor:"author"}," Your Name "))),r.a.createElement(S.a,{className:"mb-2"},r.a.createElement(j.a,null,r.a.createElement(x.Control.text,{model:".author",name:"author",className:"form-control",placeholder:"Your Name",validators:{required:I,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:T(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"mb-2"},r.a.createElement(j.a,null,r.a.createElement(D.a,{htmlFor:"comment"}," Comment "),r.a.createElement(x.Control.textarea,{model:".comment",name:"comment",className:"form-control",rows:"6"}))),r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(M.a,{color:"primary"}," Submit "))))))))}}]),t}(n.Component);function _(e){var a=e.dish;return r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(h.a,null," ",r.a.createElement("h2",null,a.name)),r.a.createElement(C.a,null,a.description)))}function q(e){var a=e.comments,t=e.postComment,n=e.dishId,l=a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(A.Stagger,{in:!0},r.a.createElement(F.a,null,r.a.createElement(A.Fade,{in:!0},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," ,"," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))))}));return r.a.createElement("div",null,r.a.createElement("div",null,l),r.a.createElement(R,{dishId:n,postComment:t}))}var P=function(e){if(e.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null)));if(e.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess)));return r.a.createElement("div",{className:"container"},function(){var a=e.dish,t=e.comments;return a?r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-2 mt-3"},r.a.createElement(_,{dish:a})),r.a.createElement(u.a,{className:"col-6 col-md-5 m-2 mt-3"},r.a.createElement(q,{comments:t,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)}())};var H=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},W=t(168),G=t(169),U=t(170),Y=t(171),B=t(172),K=t(173),z=t(174),J=t(175),Z=t(176),$=t(177),Q=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(W.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(G.a,{onClick:this.toggleNav}),r.a.createElement(U.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(Y.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(B.a,{navbar:!0},r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(K.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))))),r.a.createElement(B.a,{className:"ml-auto",navbar:!0},r.a.createElement(K.a,null,r.a.createElement(M.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))),r.a.createElement(z.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(O.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(L.a,{toggle:this.toggleModal},"Login"),r.a.createElement(k.a,null,r.a.createElement(J.a,{onSubmit:this.handleLogin},r.a.createElement(Z.a,null,r.a.createElement(D.a,{htmlFor:"username"},"Username"),r.a.createElement($.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(Z.a,null,r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement($.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(Z.a,{check:!0},r.a.createElement(D.a,{check:!0},r.a.createElement($.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(M.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component),V=t(178);function X(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:v+a.image,alt:a.name}),r.a.createElement(F.a,null,r.a.createElement(h.a,null,a.name),a.designation?r.a.createElement(V.a,null,a.designation):null,r.a.createElement(C.a,null,a.description))))}var ee=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},ae=t(10),te=function(e){return e&&e.length},ne=function(e){return function(a){return!a||a.length<=e}},re=function(e){return function(a){return a&&a.length>=e}},le=function(e){return!isNaN(Number(e))},se=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},oe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(j.a,{md:10},r.a.createElement(x.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{md:2,htmlFor:"lastname"},"Last Name"),r.a.createElement(j.a,{md:10},r.a.createElement(x.Control.text,{model:".lastname",id:"lastname",placeholder:"Last Name",name:"lastname",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{md:2,htmlFor:"telnum"},"Contact Tel."),r.a.createElement(j.a,{md:10},r.a.createElement(x.Control.text,{model:".telnum",id:"telnum",placeholder:"Tel. number",name:"telnum",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15),isNumber:le}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{md:2,htmlFor:"email"},"Email"),r.a.createElement(j.a,{md:10},r.a.createElement(x.Control.text,{model:".email",id:"email",placeholder:"Email",name:"email",className:"form-control",validators:{required:te,validEmail:se}}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(j.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(D.a,{check:!0},r.a.createElement(x.Control.checkbox,{model:".agree",name:"agree"}),r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(j.a,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(j.a,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(j.a,{md:{size:10,offset:2}},r.a.createElement(M.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ce=t(179),me=t(180);function ie(e){var a=e.leader;return r.a.createElement(A.Stagger,{in:!0},r.a.createElement("div",{key:a.id,className:"col-12 mt-5"},r.a.createElement(A.Fade,{in:!0},r.a.createElement(ce.a,{tag:"li"},r.a.createElement(ce.a,{left:!0,middle:!0},r.a.createElement(ce.a,{object:!0,src:v+a.image,alt:a.name})),r.a.createElement(ce.a,{body:!0,className:"ml-5"},r.a.createElement(ce.a,{heading:!0},a.name),r.a.createElement(ce.a,null," ",a.designation," "),r.a.createElement("br",null),r.a.createElement("p",null,a.description))))))}var ue=function(e){var a=e.leaders.map((function(e){return r.a.createElement(ie,{leader:e})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(me.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(F.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(F.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ce.a,{list:!0},a))))},de=t(26),Ee=t(33),he=t.n(Ee),fe=function(){return{type:"DISHES_LOADING"}},pe=function(e){return{type:"DISHES_FAILED",payload:e}},ge=function(e){return{type:"ADD_DISHES",payload:e}},be=function(e){return{type:"COMMENTS_FAILED",payload:e}},ve=function(e){return{type:"ADD_COMMENTS",payload:e}},Ne=function(){return{type:"PROMOS_LOADING"}},ye=function(e){return{type:"PROMOS_FAILED",payload:e}},we=function(e){return{type:"ADD_PROMOS",payload:e}},Me=function(){return{type:"LEADERS_LOADING"}},Oe=function(e){return{type:"ADD_LEADERS",payload:e}},Le=function(e){return{type:"LEADERS_FAILED",payload:e}},ke=t(57),Se=t(90),je=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement(ke.a,null,r.a.createElement(Se.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ae.d,null,r.a.createElement(ae.b,{path:"/home",component:function(){return r.a.createElement(ee,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ae.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes.dishes,isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess})}}),r.a.createElement(ae.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(oe,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ae.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ae.b,{path:"/aboutus",component:function(){return r.a.createElement(ue,{leaders:e.props.leaders.leaders})}}),r.a.createElement(ae.a,{to:"/home"})))),r.a.createElement(H,null))}}]),t}(n.Component),De=Object(ae.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),he()(v+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(fe(!0)),he()(v+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return he()(v+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(be(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(Ne()),he()(v+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(ye(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Me(!0)),he()(v+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Oe(a))})).catch((function(a){return e(Le(a.message))}))}))},postFeedback:function(e){return function(e){var a={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};return a.date=(new Date).toISOString(),he()(v+"feedback",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return console.log(e),alert("Thank you for your feedback\n"+JSON.stringify(a)),e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}(e)}}}))(je)),Ce=(t(152),t(12)),Fe=t(19),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Ce.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Ce.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Ce.a)({},e,{comments:e.comments.concat(t)});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Re=t(93),_e=t(94),qe=t.n(_e),Pe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},He=t(95),We=Object(Fe.createStore)(Object(Fe.combineReducers)(Object(Ce.a)({dishes:xe,comments:Ae,promotions:Ie,leaders:Te},Object(x.createForms)({feedback:Pe}))),Object(He.composeWithDevTools)(Object(Fe.applyMiddleware)(Re.a,qe.a))),Ge=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:We},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(De,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(153)}},[[97,1,2]]]);
//# sourceMappingURL=main.79ca1329.chunk.js.map