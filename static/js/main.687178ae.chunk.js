(this.webpackJsonptime_web_test_task=this.webpackJsonptime_web_test_task||[]).push([[0],{19:function(e,r,t){},25:function(e,r,t){},26:function(e,r,t){},27:function(e,r,t){},29:function(e,r,t){},30:function(e,r,t){"use strict";t.r(r);var s=t(0),n=t(7),c=t.n(n),a=(t(19),t(3)),u=t(1),i=function(e){var r=e.labelText,t=e.className;return Object(u.jsx)("h3",{className:t,children:r})},l=Object(s.memo)(i),o=Object(s.memo)(Object(a.b)((function(e){return{selectedServer:e.serverListReducers.selectedServer}}),null)((function(e){var r=e.selectedServer;return Object(u.jsxs)("div",{className:"selected-server__user-name",children:[Object(u.jsx)(l,{className:"selected-server__user-label",labelText:"User: "}),Object(u.jsx)(l,{className:"selected-server__user-label",labelText:r[0].customer_id})]})}))),d="REQUEST_TO_SERVER_FOR_SERVER_LIST",v="ERROR_TO_SERVER_FOR_SERVER_LIST",j="SUCCESS_TO_SERVER_FOR_SERVER_LIST",b="SELECTION_SERVER_FOR_VIEW",O="OPEN_INPUT_FOR_CHANGE_VALUE_SERVER",h="CLOSE_INPUT_FOR_CHANGE_VALUE_SERVER",_="REQUEST_TO_SERVER_FOR_CHANGE_VALUE_SERVER",g="SUCCESS_TO_SERVER_FOR_CHANGE_VALUE_SERVER",m="ERROR_TO_SERVER_FOR_CHANGE_VALUE_SERVER",p="CHANGE_NAME_SERVER",S="CHANGE_NAME_SERVER_ERROR",f="CHANGE_TYPE_SERVER",R={server_name:"server Name",server_type:"server Type"},E=["vds","dedicated","hosting","idle"],x=["open","close","save"],N=t(4),V=function(e,r,t,s,n){return function(c){s===x[2]?(c({type:_}),function(e,r,t){return new Promise((function(s,n){setTimeout((function(){var c=Object(N.a)(JSON.parse(localStorage.getItem("data")));c[e][r]=t;try{localStorage.setItem("data",JSON.stringify(c)),s(c)}catch(a){n("Error with record")}}),1500)})).then((function(e){return e}),(function(e){throw e}))}(e,t,n).then((function(s){c({type:g,serverList:s,updateValuesServer:s[e],idSelectedInputWhichChangeValue:e}),c({type:h,idSelectedInputWhichChangeValue:r,typeSelectedInputWhichChangeValue:t})})).catch((function(e){c({type:m})}))):s===x[1]?c({type:h,idSelectedInputWhichChangeValue:r,typeSelectedInputWhichChangeValue:t}):s===x[0]&&c({type:O,idSelectedInputWhichChangeValue:r,typeSelectedInputWhichChangeValue:t})}},L=Object(s.memo)(Object(a.b)((function(e){return{isLoading:e.serverListReducers.isLoadingRequestToChangeValueServer}}),(function(e){return{updateValueOfServer:function(r,t,s,n){return e(V(r,t,s,n))}}}))((function(e){var r=e.index,t=e.value,s=e.updateValueOfServer,n=e.isLoading,c=e.className;return Object(u.jsx)("button",{className:c,disabled:n?"disabled":"",onClick:function(){s(null,r,t[0],x[1])},children:"X"})}))),T=Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers,t=e.userActionWithInputsReducer;return{selectedServer:r.selectedServer,isLoading:r.isLoadingRequestToChangeValueServer,serverName:t.server_name,serverType:t.server_type,error:t.error}}),(function(e){return{updateValueOfServer:function(r,t,s,n,c){return e(V(r,t,s,n,c))}}}))((function(e){var r=e.isLoading,t=e.value,s=e.index,n=e.selectedServer,c=e.updateValueOfServer,a=e.serverName,i=e.serverType,l=e.error,o=e.className;return Object(u.jsx)("button",{className:o,disabled:r?"disabled":a||t[0]!==Object.keys(R)[0]?a.length>16||l&&t[0]===Object.keys(R)[0]?"disabled":"":"disabled",onClick:function(){if(l&&t[0]===Object.keys(R)[0])return-1;c(n[1],s,t[0],x[2],t[0]===Object.keys(R)[0]?a:i)},children:"ok"})}))),y=t(14),C=function(e,r){return function(t){r===Object.keys(R)[0]?!e||e.length>16?t({type:S}):t({type:p,userFromInputNameForServerName:e}):r===Object.keys(R)[1]&&t({type:f,userFromInputTypeForServerType:e||"vds"})}},I=Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers,t=e.userActionWithInputsReducer;return{selectedServer:r.selectedServer,isLoading:r.isLoadingRequestToChangeValueServer,error:t.error}}),(function(e){return{recordUserTextToReducer:function(r,t){return e(C(r,t))}}}))((function(e){var r=e.selectedServer,t=e.isLoading,n=e.recordUserTextToReducer,c=e.error,a=Object(s.useState)(r[0].server_name),i=Object(y.a)(a,2),l=i[0],o=i[1];return Object(u.jsx)("input",{className:"change-container__change-input-input"+(c?"--error":""),maxLength:"16",disabled:t?"disabled":"",value:l,onChange:function(e){o(e.currentTarget.value),n(e.currentTarget.value,Object.keys(R)[0])}})}))),W=Object(s.memo)(Object(a.b)((function(e){return{isLoading:e.serverListReducers.isLoadingRequestToChangeValueServer}}),(function(e){return{recordUserTextToReducer:function(r,t){return e(C(r,t))}}}))((function(e){var r=e.isLoading,t=e.recordUserTextToReducer,s=E.map((function(e,r){return Object(u.jsx)("option",{className:"change-container__change-input--option",value:e,children:e},r)}));return Object(u.jsx)("select",{className:"change-container__change-input-select",onChange:function(e){t(e.currentTarget.value?e.currentTarget.value:E[1],Object.keys(R)[1])},disabled:r?"disabled":"",children:s})}))),k=function(e){var r=e.value,t=e.index;return Object(u.jsx)(u.Fragment,{children:r[0]===Object.keys(R)[1]?Object(u.jsxs)("div",{className:"selected-server__change-container change-container",children:[Object(u.jsx)(W,{}),Object(u.jsx)(T,{className:"change-container__btn-close--save",value:r,index:t}),Object(u.jsx)(L,{className:"change-container__btn-close--without-save",value:r,index:t})]}):Object(u.jsxs)("div",{className:"selected-server__change-container change-container",children:[Object(u.jsx)(I,{value:r[0]}),Object(u.jsx)(T,{className:"change-container__btn-close--save",value:r,index:t}),Object(u.jsx)(L,{className:"change-container__btn-close--without-save",value:r,index:t})]})})},A=Object(s.memo)(k),F=Object(s.memo)(Object(a.b)(null,(function(e){return{updateValueOfServer:function(r,t,s,n){return e(V(r,t,s,n))}}}))((function(e){var r=e.index,t=e.value,s=e.updateValueOfServer,n=e.className;return Object(u.jsx)("button",{className:n,onClick:function(){s(null,r,t[0],x[0])},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}))),U=Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers;return{selectedServer:r.selectedServer,selectedInputWhichChangeValues:r.selectedInputWhichChangeValues}}))((function(e){var r=e.selectedServer,t=e.selectedInputWhichChangeValues,s=function(e,s){return t[0]===e[0]||t[1]===e[0]?Object(u.jsx)(A,{value:e,index:s}):Object(u.jsxs)("div",{className:"value-server__btn-change",children:[Object(u.jsx)(l,{className:"value-server__value-which-change",labelText:r[0][e[0]]}),Object(u.jsx)(F,{className:"value-server__btn-for-change",value:e,index:s})]})},n=Object.entries(R).map((function(e,r){return Object(u.jsxs)("div",{className:"selected-server__value-server value-server",children:[Object(u.jsx)(l,{className:"value-server__value-denotes",labelText:e[1]+":"}),s(e,r)]},r)}));return Object(u.jsx)("div",{className:"selected-server__inputs-for-change",children:n})}))),q=(t(25),Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers;return{pageOpenSelectedServer:r.pageOpenSelectedServer,isLoading:r.isLoading,isError:r.isError}}),null)((function(e){var r=e.pageOpenSelectedServer,t=e.isError,s=e.isLoading;return r?Object(u.jsxs)("div",{className:"selected-server",children:[Object(u.jsx)(o,{}),Object(u.jsx)(U,{})]}):s||t?Object(u.jsx)(u.Fragment,{}):Object(u.jsx)("div",{className:"servers-page__select-server",children:Object(u.jsx)(l,{className:"servers-page__text-to-choice-server",labelText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440"})})})))),w=function(){return function(e){e({type:d}),setTimeout((function(){try{var r=function(){var e;try{(e=JSON.parse(localStorage.getItem("data")))||(e=[{customer_id:"user1",server_name:"server7",server_type:"vds"},{customer_id:"user5",server_name:"server2",server_type:"dedicated"},{customer_id:"user3",server_name:"server4",server_type:"hosting"}],localStorage.setItem("data",JSON.stringify(e)))}catch(r){e=[{customer_id:"user1",server_name:"server7",server_type:"vds"},{customer_id:"user5",server_name:"server2",server_type:"dedicated"},{customer_id:"user3",server_name:"server4",server_type:"hosting"}],localStorage.setItem("data",JSON.stringify(e))}return e}();e({type:j,serverList:r})}catch(r){e({type:v})}}),1500)}},G=(t(26),Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers;return{serverList:r.serverList,selectedServer:r.selectedServer}}),(function(e){return{selectServer:function(r){return e((t=r,function(e){e({type:b,selectedServerId:t})}));var t}}}))((function(e){var r=e.serverList,t=e.selectServer,s=e.selectedServer,n=r.map((function(e,r){return Object(u.jsx)("div",{className:"servers-list__servers-container"+(s&&e===s[0]?"--selected":""),onClick:function(){t(r)},children:Object(u.jsx)(l,{className:"servers-list__name-server",labelText:e.server_name})},r)}));return Object(u.jsx)("div",{className:"servers-list",children:n})})))),H=Object(s.memo)(Object(a.b)((function(e){var r=e.serverListReducers;return{isLoading:r.isLoading,isError:r.isError}}),(function(e){return{requestServerList:function(){return e(w())}}}))((function(e){var r=e.requestServerList,t=e.isError,n=e.isLoading;return Object(s.useLayoutEffect)((function(){r()}),[r]),n?Object(u.jsx)("div",{className:"servers-page__loading-block",children:Object(u.jsx)(l,{className:"servers-page__text",labelText:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}):t?Object(u.jsx)("div",{className:"servers-page__error",children:Object(u.jsx)(l,{className:"servers-page__text",labelText:"\u041e\u0448\u0438\u0431\u043a\u0430"})}):Object(u.jsx)(G,{})}))),J=(t(27),function(){return Object(u.jsxs)("div",{className:"servers-page",children:[Object(u.jsx)(H,{}),Object(u.jsx)(q,{})]})});var P=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(J,{})})},B=t(6),M=t(12),Q=t(13),X=t.n(Q),Y=t(2),z={isLoading:!1,isLoadingRequestToChangeValueServer:!1,isErrorRequestToChangeValueServer:!1,isError:!1,serverList:[],selectedServer:[],pageOpenSelectedServer:!1,BoolenValueInputChangeNameServer:!1,selectedInputWhichChangeValues:["",""]},D={server_name:"",server_type:E[0],error:!1},K=Object(B.b)({serverListReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,r=arguments.length>1?arguments[1]:void 0,t=r.type,s=r.serverList,n=r.selectedServerId,c=r.updateValuesServer,a=r.idSelectedInputWhichChangeValue,u=r.typeSelectedInputWhichChangeValue;r.idServer;switch(t){case _:return Object(Y.a)(Object(Y.a)({},e),{},{isLoadingRequestToChangeValueServer:!0});case g:return Object(Y.a)(Object(Y.a)({},e),{},{serverList:Object(N.a)(s),selectedServer:[c,a],isErrorRequestToChangeValueServer:!1,isLoadingRequestToChangeValueServer:!1});case m:return Object(Y.a)(Object(Y.a)({},e),{},{isErrorRequestToChangeValueServer:!0,isLoadingRequestToChangeValueServer:!1});case O:return e.selectedInputWhichChangeValues[a]=u,Object(Y.a)(Object(Y.a)({},e),{},{selectedInputWhichChangeValues:Object(N.a)(e.selectedInputWhichChangeValues)});case h:return e.selectedInputWhichChangeValues[a]="",Object(Y.a)(Object(Y.a)({},e),{},{selectedInputWhichChangeValues:Object(N.a)(e.selectedInputWhichChangeValues)});case b:return Object(Y.a)(Object(Y.a)({},e),{},{selectedServer:[e.serverList[n],+n],pageOpenSelectedServer:!0,selectedInputWhichChangeValues:["",""]});case d:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0});case j:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,serverList:s});case v:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,isError:!0});default:return e}},userActionWithInputsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0,t=r.type,s=r.userFromInputNameForServerName,n=r.userFromInputTypeForServerType;switch(t){case S:return Object(Y.a)(Object(Y.a)({},e),{},{error:!0});case p:return Object(Y.a)(Object(Y.a)({},e),{},{server_name:s,error:!1});case f:return Object(Y.a)(Object(Y.a)({},e),{},{server_type:n,error:!1});default:return Object(Y.a)({},e)}}}),Z=Object(B.c)(K,Object(B.a)(M.a,X.a));t(29);c.a.render(Object(u.jsx)(a.a,{store:Z,children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.687178ae.chunk.js.map