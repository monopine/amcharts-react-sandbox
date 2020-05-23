(this["webpackJsonpamcharts-demo"]=this["webpackJsonpamcharts-demo"]||[]).push([[0],{127:function(e,t,a){e.exports=a(137)},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);for(var r=a(17),n=a.n(r),i=a(96),c=a.n(i),o=a(118),s=a(114),l=[{label:"Bar Graph",value:"bar-graph"},{label:"Line Graph",value:"line-graph"},{label:"Pie Chart",value:"pie-chart"}],u=function(e){return Math.floor(Math.random()*Math.floor(e))},p=[],d=1;d<31;d++)p.push({date:new Date(2020,0,d),name:"dollars, day "+d,value:u(10)});for(var h=[],v=1;v<31;v++)h.push({date:new Date(2020,0,v),name:"minutes, day "+v,value:u(180)});var m=[{label:"Daily Money Spent on Coffee, 30 day period",value:"money-on-coffee-30day",data:p},{label:"Daily Excercise Minutes, 30 day period",value:"excercise-minutes-30day",data:h}],y={chartType:l[0].value,activeDataSource:m[0].value,chartTypeOptions:l,dataSourceOptions:m},f=function(e,t){return Object.assign({},e,{chartType:t.payload})},b=function(e,t){return Object.assign({},e,{activeDataSource:t.payload})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVE_CHART_TYPE":return f(e,t);case"ACTIVE_DATA_SOURCE":return b(e,t);default:return e}},S=Object(s.b)(O),g=a(58),E=a(59),j=a(62),w=a(60),k=a(63);var T=a(64),D=a(39),A=(a(119),function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=T.c("chartdiv",D.g);e.paddingRight=20,e.data=this.props.dataSource.data,e.xAxes.push(new D.a).renderer.grid.template.location=0;var t=e.yAxes.push(new D.f);t.tooltip.disabled=!0,t.renderer.minWidth=35;var a=e.series.push(new D.c);a.dataFields.dateX="date",a.dataFields.valueY="value",a.tooltipText="{valueY.value}",e.cursor=new D.i;var r=new D.h;r.series.push(a),e.scrollbarX=r,this.chart=e}},{key:"componentDidUpdate",value:function(){this.chart.data=this.props.dataSource.data}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return n.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"500px"}})}}]),t}(r.Component)),C=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=T.c("chartdiv",D.g);e.paddingRight=20,e.data=this.props.dataSource.data;var t=e.xAxes.push(new D.a);t.baseInterval={timeUnit:"day",count:1},t.tooltipDateFormat="HH:mm, d MMMM";var a=e.yAxes.push(new D.f);a.tooltip.disabled=!0,a.title.text="Unique visitors";var r=e.series.push(new D.c);r.dataFields.dateX="date",r.dataFields.valueY="value",e.cursor=new D.i,e.cursor.lineY.opacity=0,e.scrollbarX=new D.h,e.scrollbarX.series.push(r),t.start=.8,t.keepSelection=!0}},{key:"componentDidUpdate",value:function(){this.chart.data=this.props.dataSource.data}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return n.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"500px"}})}}]),t}(r.Component),x=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=T.c("chartdiv",D.d),t=e.series.push(new D.e);t.dataFields.value="litres",t.dataFields.category="country",e.innerRadius=T.d(30),t.slices.template.stroke=T.b("#fff"),t.slices.template.strokeWidth=2,t.slices.template.strokeOpacity=1,t.slices.template.cursorOverStyle=[{property:"cursor",value:"pointer"}],t.alignLabels=!1,t.labels.template.bent=!0,t.labels.template.radius=3,t.labels.template.padding(0,0,0,0),t.ticks.template.disabled=!0,t.slices.template.filters.push(new T.a).opacity=0;var a=t.slices.template.states.getKey("hover").filters.push(new T.a);a.opacity=.7,a.blur=5,e.legend=new D.b,e.data=[{country:"Lithuania",litres:501.9},{country:"Germany",litres:165.8},{country:"Australia",litres:139.9},{country:"Austria",litres:128.3},{country:"UK",litres:99},{country:"Belgium",litres:60}]}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return n.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"500px"}})}}]),t}(r.Component),M=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"returnSelectedChart",value:function(){switch(this.props.chartType){case"bar-graph":return n.a.createElement(A,{dataSource:this.props.dataSource});case"line-graph":return n.a.createElement(C,{dataSource:this.props.dataSource});case"pie-chart":return n.a.createElement(x,{dataSource:this.props.dataSource});default:return null}}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.returnSelectedChart())}}]),t}(r.Component),U=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"renderSelectOptions",value:function(){return this.props.chartTypeOptions.map((function(e,t){return n.a.createElement("option",{key:t,value:e.value},e.label)}))}},{key:"renderDataOptions",value:function(){return this.props.dataSourceOptions.map((function(e,t){return n.a.createElement("option",{key:t,value:e.value},e.label)}))}},{key:"returnSelectedData",value:function(){var e=this,t=this.props.dataSourceOptions.find((function(t){return t.value===e.props.activeDataSource}));return t||null}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"toolbar-wrap"},this.renderSelectOptions()&&n.a.createElement("select",{id:"chart-type",onChange:this.props.handleActiveChartType,value:this.props.chartType},this.renderSelectOptions()),this.renderDataOptions()&&n.a.createElement("select",{id:"data-source",onChange:this.props.handleActiveDataSource,value:this.props.activeDataSource},this.renderDataOptions())),n.a.createElement(M,{chartType:this.props.chartType,dataSource:this.returnSelectedData()}))}}]),t}(r.Component),F=Object(o.b)((function(e){return{chartType:e.chartType,activeDataSource:e.activeDataSource,chartTypeOptions:e.chartTypeOptions,dataSourceOptions:e.dataSourceOptions}}),(function(e){return{handleActiveChartType:function(t){e({type:"ACTIVE_CHART_TYPE",payload:t.target.value})},handleActiveDataSource:function(t){e({type:"ACTIVE_DATA_SOURCE",payload:t.target.value})}}}))(U);a(136);c.a.render(n.a.createElement((function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,{store:S},n.a.createElement("div",{className:"section-wrap"},n.a.createElement("h1",null,"AMCharts Sandbox")),n.a.createElement("div",{className:"section-wrap"},n.a.createElement("p",null,"Toggle the data source and the chart type. React will load a new AMChart instance/component, and use data from Redux.")),n.a.createElement("div",{className:"section-wrap"},n.a.createElement(F,null))))}),null),document.getElementById("root"))}},[[127,1,3]]]);
//# sourceMappingURL=main.f5c04ece.chunk.js.map