(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return u})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return c}));var n=t(3),r=t(7),o=(t(0),t(91)),i={id:"setSagaRunner",title:"setSagaRunner",sidebar_label:"setSagaRunner"},u={unversionedId:"api/setSagaRunner",id:"api/setSagaRunner",isDocsHomePage:!1,title:"setSagaRunner",description:"setSagaRunner is only needed when not using configureSagaStore.",source:"@site/docs/api/setSagaRunner.md",sourceDirName:"api",slug:"/api/setSagaRunner",permalink:"/queue-for-redux-saga/docs/api/setSagaRunner",version:"current",sidebar_label:"setSagaRunner",frontMatter:{id:"setSagaRunner",title:"setSagaRunner",sidebar_label:"setSagaRunner"},sidebar:"docs",previous:{title:"runSaga",permalink:"/queue-for-redux-saga/docs/api/runSaga"},next:{title:"getQueuedSagas",permalink:"/queue-for-redux-saga/docs/api/getQueuedSagas"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Usage",id:"usage",children:[{value:"Example without Redux Toolkit",id:"example-without-redux-toolkit",children:[]},{value:"Example with Redux Toolkit",id:"example-with-redux-toolkit",children:[]}]}],d={toc:s};function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"setSagaRunner")," is only needed when not using ",Object(o.b)("a",{parentName:"strong",href:"/queue-for-redux-saga/docs/api/configureSagaStore"},Object(o.b)("inlineCode",{parentName:"a"},"configureSagaStore")),".")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If not using ",Object(o.b)("a",{parentName:"strong",href:"/queue-for-redux-saga/docs/api/configureSagaStore"},Object(o.b)("inlineCode",{parentName:"a"},"configureSagaStore"))),", ",Object(o.b)("inlineCode",{parentName:"p"},"setSagaRunner")," must be called after configuring the Redux Store, in order to pass the sagaMiddleware instance to ",Object(o.b)("strong",{parentName:"p"},"Queue for Redux-Saga"),".\nThis will run any queued Sagas, and clears the queue."),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sagaRunner")," - The sagaMiddleware instance used to configure the Redux Store."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"example-without-redux-toolkit"},"Example without Redux Toolkit"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { createStore, applyMiddleware } from 'redux';\nimport createSagaMiddleware from 'redux-saga';\nimport { setSagaRunner } from '@vmw/queue-for-redux-saga';\n\nconst sagaMiddleware = createSagaMiddleware();\n\nconst store = createStore(\n  rootReducer,\n  initialState,\n  applyMiddleware(sagaMiddleware)\n);\n\nsetSagaRunner(sagaMiddleware);\n")),Object(o.b)("h3",{id:"example-with-redux-toolkit"},"Example with Redux Toolkit"),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"/queue-for-redux-saga/docs/api/configureSagaStore"},Object(o.b)("inlineCode",{parentName:"a"},"configureSagaStore"))))}c.isMDXComponent=!0}}]);