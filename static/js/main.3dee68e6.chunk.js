(this.webpackJsonpweather_forecast=this.webpackJsonpweather_forecast||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),i=n(5),s=n.n(i),o=(n(15),n(16),n(17),n(18),n(19),n(0)),l=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("h1",{className:"header__title",children:[Object(o.jsx)("span",{className:"header__title-top",children:"Weather"}),Object(o.jsx)("span",{className:"header__title-bottom",children:"forecast"})]})})},u=(n(21),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"footer__content",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})}),d=(n(22),function(e){var t=e.children;return Object(o.jsx)("main",{className:"main",children:Object(o.jsx)("div",{className:"main__content",children:t})})}),_=function(e){var t=e.children;return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsxs)("div",{className:"page__inside",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{children:t}),Object(o.jsx)(u,{})]}),Object(o.jsx)("div",{className:"page__background page__background_top"}),Object(o.jsx)("div",{className:"page__background page__background_bottom"})]})},j=(n(23),n(24),function(e){var t=e.title,n=e.children;return Object(o.jsxs)("article",{className:"block",children:[Object(o.jsx)("header",{className:"block__header",children:Object(o.jsx)("h1",{className:"block__title",children:t})}),Object(o.jsx)("div",{className:"block__body",children:n})]})}),O=function(e){var t=e.children;return Object(o.jsx)("div",{className:"block__filters",children:t})},E=function(e){var t=e.children;return Object(o.jsx)("div",{className:"block__result",children:t})},h=function(e){var t=e.text;return Object(o.jsx)("div",{className:"block__error",children:t})},b=function(){return Object(o.jsxs)("div",{className:"placeholder",children:[Object(o.jsx)("div",{className:"placeholder__image"}),Object(o.jsx)("div",{className:"placeholder__text",children:"Fill in all the fields and the weather will be displayed"})]})},f=n(10),m=(n(25),n(26),function(e){var t=e.name,n=e.className,c=e.value,a=e.placeholder,r=e.children,i=e.error,s=e.onClick,l="field_".concat(t," ")+(n||"");return l+=i?" field_error":"",l+=c?" field_not-empty":" field_is-empty",Object(o.jsxs)("div",{className:"field "+l,children:[Object(o.jsxs)("div",{className:"field__input",onClick:function(){s&&s()},children:[r,Object(o.jsx)("div",{className:"field__placeholder",children:a})]}),i&&Object(o.jsx)("div",{className:"field__error",children:i})]})}),p=[{name:"\u0421\u0430\u043c\u0430\u0440\u0430",coordinates:[53.195873,50.100193],timezoneOffset:14400},{name:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",coordinates:[53.507836,49.420393],timezoneOffset:14400},{name:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",coordinates:[51.533557,46.034257],timezoneOffset:14400},{name:"\u041a\u0430\u0437\u0430\u043d\u044c",coordinates:[55.796127,49.106405],timezoneOffset:10800},{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",coordinates:[45.03547,38.975313],timezoneOffset:10800}],R=function(e){var t=e.handleChange,n=e.city,c=Object(a.useState)(!1),r=Object(f.a)(c,2),i=r[0],s=r[1],l=n?n.name:null,u=function(){s(!i)},d=i?"field_is-open":"";return Object(o.jsxs)(m,{className:d,name:"select",placeholder:"Select city",value:l,onClick:u,children:[Object(o.jsx)("div",{className:"input input_select",children:l}),i&&Object(o.jsx)(T,{onClick:function(e){s(!1),t&&t(e)},closeModal:u})]})},T=function(e){var t=e.onClick,n=e.closeModal,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&n()};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[n]),Object(o.jsx)("div",{className:"select-modal",ref:c,children:Object(o.jsx)("ul",{className:"select-modal__list",children:p.map((function(e){return Object(o.jsx)("li",{className:"select-modal__option",onClick:function(){return t(e)},children:e.name},e.name)}))})})},A=n(3);!function(e){e.GET_7_DAYS_FORECAST_REQUEST="GET_7_DAYS_FORECAST_REQUEST",e.GET_7_DAYS_FORECAST_SUCCESS="GET_7_DAYS_FORECAST_SUCCESS",e.GET_7_DAYS_FORECAST_ERROR="GET_7_DAYS_FORECAST_ERROR",e.CHANGE_CITY_FOR_FUTURE="CHANGE_CITY_FOR_FUTURE",e.CHANGE_PAGE="CHANGE_PAGE"}(c||(c={}));var S,C="3c237680bd869ff1f9b731f466278d6b",g=function(e){return e.json().then((function(e){throw new Error(e.message)}))},x=function(e){return function(t){t({type:c.CHANGE_CITY_FOR_FUTURE,payload:e}),t({type:c.GET_7_DAYS_FORECAST_REQUEST}),function(e){var t="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.coordinates[0],"&lon=").concat(e.coordinates[1],"&units=metric&exclude=hourly,minutely,alerts&appid=").concat(C);return fetch(t).then((function(e){return e.ok?e.json():g(e)})).then((function(e){return e.daily.map((function(e){return{date:new Date(1e3*e.dt).toLocaleString("en-GB",{year:"numeric",month:"short",day:"numeric"}),temperature:Math.round(e.temp.day),image:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}}))}))}(e).then((function(e){t({type:c.GET_7_DAYS_FORECAST_SUCCESS,payload:e})})).catch((function(e){t({type:c.GET_7_DAYS_FORECAST_ERROR,payload:e.message})}))}},v=(n(31),n(32),function(e){var t=e.weather,n=e.className,c={background:"url(".concat(t.image,") 50% 50% no-repeat")},a=t.temperature>0?"+":"";return Object(o.jsx)("div",{className:"weather-card "+(n||""),children:Object(o.jsxs)("div",{className:"weather-card__inside",children:[Object(o.jsx)("div",{className:"weather-card__date",children:t.date}),Object(o.jsx)("div",{className:"weather-card__image",style:c}),Object(o.jsxs)("div",{className:"weather-card__temperature",children:[a,t.temperature,"\xb0"]})]})})}),y=function(e){var t=e.items,n=e.changePage,c=e.page,a=e.countOnPage,r=t.length-a;return Object(o.jsxs)("div",{className:"slider",children:[Object(o.jsx)("div",{className:"slider__inside",children:t.map((function(e,t){var n=t>=c&&t<c+3?"":"weather-card_hidden";return Object(o.jsx)(v,{weather:e,className:n},e.date)}))}),Object(o.jsx)("div",{className:"slider__btn slider__btn_left "+(0===c?"slider__btn_disable":""),onClick:function(){return n(c-1)}}),Object(o.jsx)("div",{className:"slider__btn slider__btn_right "+(c===r?"slider__btn_disable":""),onClick:function(){return n(c+1)}})]})},N=function(){var e=Object(A.b)(),t=Object(A.c)((function(e){return e.futureWeather}));return Object(o.jsxs)(j,{title:"7 Days Forecast",children:[Object(o.jsx)(O,{children:Object(o.jsx)(R,{handleChange:function(t){return e(x(t))},city:t.city})}),t.result.length?Object(o.jsx)(E,{children:Object(o.jsx)(y,{items:t.result,page:t.page,countOnPage:t.countOnPage,changePage:function(t){return e(function(e){return{type:c.CHANGE_PAGE,payload:e}}(t))}})}):Object(o.jsx)(b,{}),t.errorRequest&&Object(o.jsx)(h,{text:t.errorRequest})]})},D=n(4),G=n(9),F=n(2),w={isLoading:!1,result:[],city:null,page:0,countOnPage:3,errorRequest:null},k=function(e,t){var n=t.result.length-t.countOnPage;return e>=0&&e<=n?Object(F.a)(Object(F.a)({},t),{},{page:e}):t};!function(e){e.GET_DATE_FORECAST_REQUEST="GET_DATE_FORECAST_REQUEST",e.GET_DATE_FORECAST_SUCCESS="GET_DATE_FORECAST_SUCCESS",e.GET_DATE_FORECAST_ERROR="GET_DATE_FORECAST_ERROR",e.CHANGE_DATE="CHANGE_DATE",e.CHANGE_CITY_FOR_PAST="CHANGE_CITY_FOR_PAST",e.ADD_DATE_ERROR="ADD_DATE_ERROR",e.REMOVE_DATE_ERROR="REMOVE_DATE_ERROR"}(S||(S={}));var U={isLoading:!1,result:null,date:null,city:null,errorDate:null,errorRequest:null},Y=Object(D.b)({pastWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.GET_DATE_FORECAST_REQUEST:return Object(F.a)(Object(F.a)({},e),{},{result:null,errorRequest:null,isLoading:!0});case S.GET_DATE_FORECAST_SUCCESS:return Object(F.a)(Object(F.a)({},e),{},{result:t.payload,isLoading:!1});case S.GET_DATE_FORECAST_ERROR:return Object(F.a)(Object(F.a)({},e),{},{result:null,errorRequest:t.payload,isLoading:!1});case S.ADD_DATE_ERROR:return Object(F.a)(Object(F.a)({},e),{},{result:null,errorDate:t.payload,isLoading:!1});case S.REMOVE_DATE_ERROR:return Object(F.a)(Object(F.a)({},e),{},{errorDate:null});case S.CHANGE_DATE:return Object(F.a)(Object(F.a)({},e),{},{date:t.payload});case S.CHANGE_CITY_FOR_PAST:return Object(F.a)(Object(F.a)({},e),{},{city:t.payload});default:return e}},futureWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.GET_7_DAYS_FORECAST_REQUEST:return Object(F.a)(Object(F.a)({},e),{},{result:[],page:0,isLoading:!0,errorRequest:null});case c.GET_7_DAYS_FORECAST_SUCCESS:return Object(F.a)(Object(F.a)({},e),{},{result:t.payload,isLoading:!1});case c.GET_7_DAYS_FORECAST_ERROR:return Object(F.a)(Object(F.a)({},e),{},{result:[],errorRequest:t.payload,isLoading:!1});case c.CHANGE_CITY_FOR_FUTURE:return Object(F.a)(Object(F.a)({},e),{},{city:t.payload});case c.CHANGE_PAGE:return k(t.payload,e);default:return e}}}),H=Object(D.c)(Y,Object(D.a)(G.a)),P=(n(33),function(){return L()-432e3}),L=function(){var e=new Date;return e.setHours(0,0,0,0),q(e.getTime()-6e4*e.getTimezoneOffset())},M=function(e,t){var n=L(),c=new Date(e),a=q(c.getTime());return n===a?q((new Date).getTime()):a-t+50400},q=function(e){return Math.floor(e/1e3)},I=function(e){return new Date(1e3*e).toISOString().split("T")[0]},Q=function(){return I(P())},z=function(){return I(L())},W=function(e){var t=e.handleChange,n=e.date,c=e.error;return console.log(Q()),console.log(z()),Object(o.jsx)(m,{name:"date",placeholder:"Select date",value:n,error:c,children:Object(o.jsx)("input",{type:"date",className:"input input_date",placeholder:"Select date",onChange:function(e){t(e.target.value)},min:Q(),max:z(),required:!0})})},V=function(){return function(e,t){var n=t().pastWeather;!n.errorDate&&n.date&&n.city&&(e({type:S.GET_DATE_FORECAST_REQUEST}),function(e){var t="http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(e.city.coordinates[0],"&lon=").concat(e.city.coordinates[1],"&dt=").concat(e.date,"&units=metric&appid=").concat(C);return fetch(t).then((function(e){return e.ok?e.json():g(e)})).then((function(e){return{date:new Date(1e3*e.current.dt).toLocaleString("en-GB",{year:"numeric",month:"short",day:"numeric"}),temperature:Math.round(e.current.temp),image:"https://openweathermap.org/img/wn/".concat(e.current.weather[0].icon,"@2x.png")}}))}({city:n.city,date:M(n.date,n.city.timezoneOffset)}).then((function(t){e({type:S.GET_DATE_FORECAST_SUCCESS,payload:t})})).catch((function(t){e({type:S.GET_DATE_FORECAST_ERROR,payload:t.message})})))}},B=function(e){return function(t){t(function(e){return{type:S.CHANGE_DATE,payload:e}}(e)),!function(e){var t=new Date,n=new Date(e),c=q(n.getTime());return c>=P()&&c<=q(t.getTime())}(e)?t({type:S.ADD_DATE_ERROR,payload:"Not valid date."}):(t({type:S.REMOVE_DATE_ERROR}),t(V()))}},J=function(e){return function(t){t(function(e){return{type:S.CHANGE_CITY_FOR_PAST,payload:e}}(e)),t(V())}},K=function(){var e=Object(A.b)(),t=Object(A.c)((function(e){return e.pastWeather}));return Object(o.jsxs)(j,{title:"Forecast for a Date in the Past",children:[Object(o.jsxs)(O,{children:[Object(o.jsx)(R,{handleChange:function(t){return e(J(t))},city:t.city}),Object(o.jsx)(W,{handleChange:function(t){return e(B(t))},date:t.date,error:t.errorDate})]}),t.result?Object(o.jsx)(E,{children:Object(o.jsx)(v,{weather:t.result,className:"weather-card_full"})}):Object(o.jsx)(b,{}),t.errorRequest&&Object(o.jsx)(h,{text:t.errorRequest})]})};var X=function(){return Object(o.jsx)(A.a,{store:H,children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(_,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(K,{})]})})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.3dee68e6.chunk.js.map