(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{23:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),l=a(12),i=a(11),o=a(7),c=a(13),s=a(2),u=a(19),h=a(15),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.startTime,a=e.endTime,n=e.onChangeDay,r=e.allDay,l=e.onChangeAllDay,i=e.selectedTime,o=Math.round((a-t)/864e5);return s.createElement("div",{className:"control-panel"},s.createElement("h3",null,"Heatmap"),s.createElement("p",null,"Mock data. Dont freak out",s.createElement("br",null)),s.createElement("hr",null),s.createElement("div",{className:"input"},s.createElement("label",null,"All Days"),s.createElement("input",{type:"checkbox",name:"allday",checked:r,onChange:function(e){return l(e.target.checked)}})),s.createElement("div",{className:"input ".concat(r?"disabled":"")},s.createElement("label",null,"Each Day: ",function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())}(i)),s.createElement("input",{type:"range",disabled:r,min:1,max:o,step:1,onChange:function(e){var a=e.target.value;n(t+864e5*a)}})),s.createElement("hr",null))}}]),t}(s.PureComponent),p=a(21),d={maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};a.d(t,"default",(function(){return b})),a.d(t,"renderToDom",(function(){return y}));function g(e,t){var a=new Date(t),n=a.getFullYear(),r=a.getMonth(),l=a.getDate();return{type:"FeatureCollection",features:e.features.filter((function(e){var t=new Date(e.properties.time);return t.getFullYear()===n&&t.getMonth()===r&&t.getDate()===l}))}}var b=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e)))._onViewportChange=function(e){return a.setState({viewport:e})},a._handleChangeDay=function(e){a.setState({selectedTime:e}),a.state.earthquakes&&a.setState({data:g(a.state.earthquakes,e)})},a._handleChangeAllDay=function(e){a.setState({allDay:e}),a.state.earthquakes&&a.setState({data:e?a.state.earthquakes:g(a.state.earthquakes,a.state.selectedTime)})};var r=(new Date).getTime();return a.state={viewport:{latitude:40,longitude:-100,zoom:3,bearing:0,pitch:0},allDay:!0,startTime:r,endTime:r,selectedTime:r,earthquakes:null},a._handleChangeDay=a._handleChangeDay.bind(Object(o.a)(a)),a._handleChangeAllDay=a._handleChangeAllDay.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.a)("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",(function(t,a){if(!t){var n=a.features,r=n[0].properties.time,l=n[n.length-1].properties.time;e.setState({data:a,earthquakes:a,endTime:r,startTime:l,selectedTime:r})}}))}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.data,n=e.allDay,r=e.selectedTime,l=e.startTime,i=e.endTime;return s.createElement("div",{style:{height:"100%",position:"relative"}},s.createElement(h.c,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1IjoiY292aXZpIiwiYSI6ImNrN3ozbzkzNTAwcWozZWxsNmZ4Zm01b2sifQ.Q1j83pq8CZGqDr8jiXSPLw"}),a&&s.createElement(h.b,{type:"geojson",data:a},s.createElement(h.a,d))),s.createElement(m,{containerComponent:this.props.containerComponent,startTime:l,endTime:i,selectedTime:r,allDay:n,onChangeDay:this._handleChangeDay,onChangeAllDay:this._handleChangeAllDay}))}}]),t}(s.Component);function y(e){Object(u.render)(s.createElement(b,null),e)}}},[[23,1,2]]]);
//# sourceMappingURL=main.55acbee8.chunk.js.map