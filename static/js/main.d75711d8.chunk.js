(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),l=(a(25),a(5)),r=a(3),o=(a(17),a(26),a(2)),j=a.p+"static/media/bd.2ad184c2.jpg",d=a(0),m=function(){var e=Object(c.useContext)(E),t=e.state,a=e.dispatch;console.log("the navbar user ".concat(t," and ").concat(a));var s=function(){return t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/",children:"Home "})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/about",children:"AboutMe"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/contact",children:"Contact"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/logout",children:"logout"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/",children:"Home "})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/about",children:"AboutMe"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/contact",children:"Contact"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/login",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/signup",children:"Register"})})]})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"#",children:Object(d.jsx)("img",{src:j,alt:"logo"})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(d.jsx)(s,{})})})]})})},b=a(4),h=a.n(b),x=a(8),O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],j=function(){var e=Object(x.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.name),o(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"home-page",children:Object(d.jsxs)("div",{className:"home-div",children:[Object(d.jsx)("h1",{className:"pt-5",children:"I AM BHAVIK DOSHI WELCOME TO MY PAGE"}),Object(d.jsx)("h1",{children:a}),Object(d.jsxs)("h2",{children:[" ",r?"Happy, to see you back":" I AM MERN Developer"]})]})})})},u=a.p+"static/media/bhavik.e664ec57.jpg",p=function(){var e=Object(r.f)(),t=Object(c.useState)({}),a=Object(l.a)(t,2),s=a[0],n=a[1],i=function(){var t=Object(x.a)(h.a.mark((function t(){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/about",{method:"GET",headers:{Accept:"appllication/json","Content-Type":"application/json"},credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:if(c=t.sent,console.log(c),n(c),200!==!a.status){t.next=12;break}throw new Error(a.error);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.push("/login");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container emp-profile",children:Object(d.jsxs)("form",{method:"GET",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("div",{className:"profile-img",children:Object(d.jsx)("img",{src:(s.name,u),alt:"doshi"})})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"profile-head",children:[Object(d.jsx)("h5",{children:s.name}),Object(d.jsx)("h6",{children:s.work}),Object(d.jsxs)("p",{className:"profile-rating mt-3 mb-5",children:["RANKINGS: ",Object(d.jsx)("span",{children:" 1/10 "})]}),Object(d.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false",children:"Timeline"})})]})]})}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("input",{type:"submit",className:"profile-edit-btn",name:"btnAddMore",value:"Edit Profile"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"profile-work",children:[Object(d.jsx)("p",{children:" WORK LINK"}),Object(d.jsx)("a",{href:"https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA",target:"_doshi",children:"Instagram"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA",target:"_doshi",children:"Web Developer"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA",target:"_doshi",children:"Software Engeeneer"})," ",Object(d.jsx)("br",{})]})}),Object(d.jsx)("div",{className:"col-md-8 pl-5 about-info",children:Object(d.jsxs)("div",{className:"tab-content profile-tab",id:"myTabContent",children:[Object(d.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"User Id"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"787865454546"})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Name"})}),Object(d.jsx)("div",{className:"col-md-6 ",children:Object(d.jsx)("p",{children:s.name})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Email"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:s.email})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Phone"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:s.phone})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Profession"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"Web Devloper"})})]})]}),Object(d.jsxs)("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Experience"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"Expert"})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Hourly Rate"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"10$/hr"})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Total Projects"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"230"})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"English Level"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"Expert"})})]}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("label",{children:"Availability"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("p",{children:"6 months"})})]})]})]})})]})]})})})},v=a(10),f=a(9),g=function(){var e=Object(c.useState)({name:"",email:"",phone:"",message:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(x.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(c=e.sent,console.log(c),s(Object(f.a)(Object(f.a)({},a),{},{name:c.name,email:c.email,phone:c.phone})),200!==!t.status){e.next=12;break}throw new Error(t.error);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){n()}),[]);var i=function(e){var t=e.target.name,c=e.target.value;s(Object(f.a)(Object(f.a)({},a),{},Object(v.a)({},t,c)))},r=function(){var e=Object(x.a)(h.a.mark((function e(t){var c,n,i,l,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=a.name,n=a.email,i=a.phone,l=a.message,e.next=4,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:n,phone:i,message:l})});case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent?(alert("Message Send"),s(Object(f.a)(Object(f.a)({},a),{},{message:""}))):console.log("message not send ");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"contact_info",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-10 offset-lg-1",children:Object(d.jsxs)("div",{className:"contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between",children:[Object(d.jsxs)("div",{className:"contact_info_item d-flex flex-row align-items-center justify-content-start",children:[Object(d.jsx)("div",{className:"contact_info_image",children:Object(d.jsx)("img",{src:"https://img.icons8.com/office/24/000000/iphone.png",alt:""})}),Object(d.jsxs)("div",{className:"contact_info_content",children:[Object(d.jsx)("div",{className:"contact_info_title",children:"Phone"}),Object(d.jsx)("div",{className:"contact_info_text",children:"+91 9167254066"})]})]}),Object(d.jsxs)("div",{className:"contact_info_item d-flex flex-row align-items-center justify-content-start",children:[Object(d.jsx)("div",{className:"contact_info_image",children:Object(d.jsx)("img",{src:"https://img.icons8.com/ultraviolet/24/000000/filled-message.png",alt:""})}),Object(d.jsxs)("div",{className:"contact_info_content",children:[Object(d.jsx)("div",{className:"contact_info_title",children:"Email"}),Object(d.jsx)("div",{className:"contact_info_text",children:"bhavikdoshi25@gmail.com"})]})]}),Object(d.jsxs)("div",{className:"contact_info_item d-flex flex-row align-items-center justify-content-start",children:[Object(d.jsx)("div",{className:"contact_info_image",children:Object(d.jsx)("img",{src:"https://img.icons8.com/ultraviolet/24/000000/map-marker.png",alt:""})}),Object(d.jsxs)("div",{className:"contact_info_content",children:[Object(d.jsx)("div",{className:"contact_info_title",children:"Address"}),Object(d.jsx)("div",{className:"contact_info_text",children:"Mumbai, India"})]})]})]})})})})}),Object(d.jsx)("div",{className:"contact_form",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-10 offset-lg-1",children:Object(d.jsxs)("div",{className:"contact_form_container py-5",children:[Object(d.jsx)("div",{className:"contact_form_title",children:"Get in Touch "}),Object(d.jsxs)("form",{method:"POST",id:"contact_form",children:[Object(d.jsxs)("div",{className:"contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between",children:[Object(d.jsx)("input",{type:"text",id:"contact_form_name",className:"contact_form_name input_field",name:"name",value:a.name,onChange:i,placeholder:"Your name",required:!0}),Object(d.jsx)("input",{type:"email",id:"contact_form_email",className:"contact_form_email input_field",name:"email",value:a.email,onChange:i,placeholder:"Your Email",required:!0}),Object(d.jsx)("input",{type:"number",id:"contact_form_phone",className:"contact_form_phone input_field",name:"phone",value:a.phone,onChange:i,placeholder:"Your Phone Number",required:!0})]}),Object(d.jsx)("div",{className:"contact_form_text mt-5",children:Object(d.jsx)("textarea",{className:"text_field contact_form_message",name:"message",value:a.message,onChange:i,placeholder:"Message",cols:"30",rows:"10"})}),Object(d.jsx)("div",{className:"contact_form_button",children:Object(d.jsx)("button",{type:"submit",className:"button contact_submit_button",onClick:r,children:"Send Message"})})]})]})})})})})]})},N=a.p+"static/media/login.24119542.svg",w=function(){var e=Object(c.useContext)(E),t=(e.state,e.dispatch),a=Object(r.f)(),s=Object(c.useState)(""),n=Object(l.a)(s,2),i=n[0],j=n[1],m=Object(c.useState)(""),b=Object(l.a)(m,2),O=b[0],u=b[1],p=function(){var e=Object(x.a)(h.a.mark((function e(c){var s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:O})});case 3:s=e.sent,n=s.json(),400!==s.status&&n?(t({type:"USER",payload:!0}),window.alert("Login Successfull"),a.push("/")):window.alert("Invalid Credentials");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:"sign-in",children:Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("div",{className:"signin-content",children:[Object(d.jsxs)("div",{className:"signin-image",children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:N,alt:"Login pic"})}),Object(d.jsx)(o.b,{to:"/signup",className:"signup-image-link",children:"Create an Account"})]}),Object(d.jsxs)("div",{className:"signin-form",children:[Object(d.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(d.jsxs)("form",{method:"POST",className:"register-form",id:"register-form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("i",{className:"zmdi zmdi-email material-icons-name"})}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"off",value:i,onChange:function(e){return j(e.target.value)},placeholder:"Your Email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:Object(d.jsx)("i",{className:"zmdi zmdi-lock material-icons-name"})}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",autoComplete:"off",value:O,onChange:function(e){return u(e.target.value)},placeholder:"Your Password"})]}),Object(d.jsx)("div",{className:"form-group form-button",children:Object(d.jsx)("input",{type:"submit",name:"signin",id:"signin",className:"form-submit",value:"Log In",onClick:p})})]})]})]})})})})},_=a.p+"static/media/signup.49e79a86.svg",y=function(){var e,t,a=Object(r.f)(),s=Object(c.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),n=Object(l.a)(s,2),i=n[0],j=n[1],m=function(a){console.log(a),e=a.target.name,t=a.target.value,j(Object(f.a)(Object(f.a)({},i),{},Object(v.a)({},e,t)))},b=function(){var e=Object(x.a)(h.a.mark((function e(t){var c,s,n,l,r,o,j,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=i.name,s=i.email,n=i.phone,l=i.work,r=i.password,o=i.cpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:s,phone:n,work:l,password:r,cpassword:o})});case 4:return j=e.sent,e.next=7,j.json();case 7:422!==(d=e.sent).status&&d?(window.alert(" Registration Successfull"),console.log("Successfull Registration"),a.push("/login")):(window.alert("INvalid Registration"),console.log("INvalid Registration"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:"signup",children:Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("div",{className:"signup-content",children:[Object(d.jsxs)("div",{className:"signup-form",children:[Object(d.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(d.jsxs)("form",{method:"POST",className:"register-form",id:"register-form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:Object(d.jsx)("i",{className:"zmdi zmdi-account material-icons-name"})}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",autocomplete:"off",value:i.name,onChange:m,placeholder:"Your Name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("i",{className:"zmdi zmdi-email material-icons-name"})}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"off",value:i.email,onChange:m,placeholder:"Your Email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"phone",children:Object(d.jsx)("i",{className:"zmdi zmdi-phone-in-talk material-icons-name"})}),Object(d.jsx)("input",{type:"number",name:"phone",id:"phone",autoComplete:"off",value:i.phone,onChange:m,placeholder:"Your Phone"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"work",children:Object(d.jsx)("i",{className:"zmdi zmdi-slideshow material-icons-name"})}),Object(d.jsx)("input",{type:"text",name:"work",id:"work",autoComplete:"off",value:i.work,onChange:m,placeholder:"Your Profession"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:Object(d.jsx)("i",{className:"zmdi zmdi-lock material-icons-name"})}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",autoComplete:"off",value:i.password,onChange:m,placeholder:"Your Password"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"cpassword",children:Object(d.jsx)("i",{className:"zmdi zmdi-lock material-icons-name"})}),Object(d.jsx)("input",{type:"password",name:"cpassword",id:"cpassword",autoComplete:"off",value:i.cpassword,onChange:m,placeholder:"Confirm Your Password"})]}),Object(d.jsx)("div",{className:"form-group form-button",children:Object(d.jsx)("input",{type:"submit",name:"signup",id:"signup",className:"form-submit",value:"register",onClick:b})})]})]}),Object(d.jsxs)("div",{className:"signup-image",children:[Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:_,alt:"registration pic"})}),Object(d.jsx)(o.b,{to:"/login",className:"signup-image-link",children:"I am already register"})]})]})})})})},C=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"notfound",children:Object(d.jsxs)("div",{className:"notfound",children:[Object(d.jsx)("div",{className:"notfound-404",children:Object(d.jsx)("h1",{children:"404"})}),Object(d.jsx)("h2",{children:"we are sorry, page not found!"}),Object(d.jsx)("p",{className:"mb-5",children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(d.jsx)(o.b,{to:"/",children:" Back To Homepage "})]})})})},k=function(){var e=Object(c.useContext)(E),t=(e.state,e.dispatch),a=Object(r.f)();return Object(c.useEffect)((function(){fetch("/logout",{method:"GET",headers:{Accept:"appllication/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){if(t({type:"USER",payload:!1}),a.push("/login",{replace:!0}),200!==e.status)throw new Error(e.error)})).catch((function(e){console.log(e)}))})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"Logout ka page"})})},S=function(e,t){return console.log("reducer ka state "+e),"USER"===t.type?(console.log("action payload"+t),t.payload):e},E=Object(c.createContext)(),T=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/about",children:Object(d.jsx)(p,{})}),Object(d.jsx)(r.a,{path:"/contact",children:Object(d.jsx)(g,{})}),Object(d.jsx)(r.a,{path:"/login",children:Object(d.jsx)(w,{})}),Object(d.jsx)(r.a,{path:"/signup",children:Object(d.jsx)(y,{})}),Object(d.jsx)(r.a,{path:"/logout",children:Object(d.jsx)(k,{})}),Object(d.jsx)(r.a,{children:Object(d.jsx)(C,{})})]})})},P=function(){var e=Object(c.useReducer)(S,null),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)(E.Provider,{value:{state:a,dispatch:s},children:[Object(d.jsx)(m,{}),Object(d.jsx)(T,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(P,{})})}),document.getElementById("root")),A()}},[[34,1,2]]]);
//# sourceMappingURL=main.d75711d8.chunk.js.map