(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df459a4"],{3472:function(t,e,a){},"4ad1":function(t,e,a){"use strict";a("3472")},5178:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title-one"},[t._v("PARAMETERS")]),a("a-divider"),a("div",{staticClass:"basic"},[a("div",{staticClass:"basic-header"},[t._v("BASIC")]),a("a-form-model",{staticStyle:{width:"800px",margin:"20px auto"},attrs:{model:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"Task"}},[a("a-select",{staticStyle:{width:"280px"},attrs:{"default-value":t.taskData[0]},on:{change:t.handleTaskChange},model:{value:t.form.task,callback:function(e){t.$set(t.form,"task",e)},expression:"form.task"}},t._l(t.taskData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"Dataset"}},[a("a-select",{staticStyle:{width:"150px"},model:{value:t.form.dataset,callback:function(e){t.$set(t.form,"dataset",e)},expression:"form.dataset"}},t._l(t.datasetData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"Model"}},[a("a-select",{staticStyle:{width:"150px"},model:{value:t.form.model,callback:function(e){t.$set(t.form,"model",e)},expression:"form.model"}},t._l(t.modelData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1),a("div",{staticClass:"middle"},[a("div",{staticClass:"data"},[a("div",{staticClass:"data-header"},[t._v("DATA")]),a("a-form-model",{staticStyle:{width:"750px",margin:"20px auto"},attrs:{model:t.dataform,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"batch_size"}},[a("a-select",{staticStyle:{width:"70px"},model:{value:t.dataform.batch_size,callback:function(e){t.$set(t.dataform,"batch_size",e)},expression:"dataform.batch_size"}},t._l(t.batch_sizeData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"inout_window"}},[a("a-select",{staticStyle:{width:"70px"},model:{value:t.dataform.input_window,callback:function(e){t.$set(t.dataform,"input_window",e)},expression:"dataform.input_window"}},t._l(t.input_windowData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"output_window"}},[a("a-select",{staticStyle:{width:"70px"},model:{value:t.dataform.output_window,callback:function(e){t.$set(t.dataform,"output_window",e)},expression:"dataform.output_window"}},t._l(t.output_windowData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"train_rate"}},[a("a-select",{staticStyle:{width:"70px"},model:{value:t.dataform.train_rate,callback:function(e){t.$set(t.dataform,"train_rate",e)},expression:"dataform.train_rate"}},t._l(t.train_rateData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"eval_rate"}},[a("a-select",{staticStyle:{width:"70px"},model:{value:t.dataform.eval_rate,callback:function(e){t.$set(t.dataform,"eval_rate",e)},expression:"dataform.eval_rate"}},t._l(t.eval_rateData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1),a("div",{staticClass:"executor"},[a("div",{staticClass:"executor-header"},[t._v("EXECUTOR")]),a("a-form-model",{staticStyle:{width:"720px",margin:"20px auto"},attrs:{model:t.executorform,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"max_epoch"}},[a("a-select",{staticStyle:{width:"80px"},model:{value:t.executorform.max_epoch,callback:function(e){t.$set(t.executorform,"max_epoch",e)},expression:"executorform.max_epoch"}},t._l(t.max_epochData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"learner"}},[a("a-select",{staticStyle:{width:"110px"},model:{value:t.executorform.learner,callback:function(e){t.$set(t.executorform,"learner",e)},expression:"executorform.learner"}},t._l(t.learnerData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"learning_rate"}},[a("a-select",{staticStyle:{width:"80px"},model:{value:t.executorform.learning_rate,callback:function(e){t.$set(t.executorform,"learning_rate",e)},expression:"executorform.learning_rate"}},t._l(t.learning_rateData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"lr_scheduler"}},[a("a-select",{staticStyle:{width:"110px"},model:{value:t.executorform.lr_scheduler,callback:function(e){t.$set(t.executorform,"lr_scheduler",e)},expression:"executorform.lr_scheduler"}},t._l(t.lr_schedulerData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"step_size"}},[a("a-select",{staticStyle:{width:"80px"},model:{value:t.executorform.step_size,callback:function(e){t.$set(t.executorform,"step_size",e)},expression:"executorform.step_size"}},t._l(t.step_sizeData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"lr_decay_ratio"}},[a("a-select",{staticStyle:{width:"80px"},model:{value:t.executorform.lr_decay_ratio,callback:function(e){t.$set(t.executorform,"lr_decay_ratio",e)},expression:"executorform.lr_decay_ratio"}},t._l(t.lr_decay_ratioData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)]),a("div",{staticClass:"evaluator"},[a("div",{staticClass:"basic-header"},[t._v("EVALUATOR")]),a("a-form-model",{staticStyle:{width:"800px",margin:"20px auto"},attrs:{model:t.evaluatorform,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"metrics"}},[a("a-select",{staticStyle:{width:"150px"},model:{value:t.evaluatorform.metrics,callback:function(e){t.$set(t.evaluatorform,"metrics",e)},expression:"evaluatorform.metrics"}},t._l(t.metricsData,(function(e){return a("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)],1),a("div",{staticClass:"right"},[a("div",{staticClass:"title-one"},[t._v("RESULTS")]),a("a-divider"),a("a-button",{staticClass:"redo-btn",attrs:{type:"primary"}},[a("a-icon",{style:{fontSize:"20px"},attrs:{type:"reload"}})],1),a("div",{staticClass:"chart-one",attrs:{id:"chart"}}),a("div",{staticClass:"chart-two",attrs:{id:"histogram"}})],1)])},o=[],l={basic:{task:["Trajectory Next-Location Prediction","Traffic State Prediction"],dataset:[["foursquare_tky","gowalla"],["METR_LA","PEMS_BAY"]],model:[["DeepMove"],["DCRNN","AGCRN"]]},data:{batch_size:["64","128"],input_window:["12"],output_window:["12","1"],train_rate:["0.6","0.7"],eval_rate:["0.1","0.2"]},executor:{max_epoch:["80","100","120"],learner:["Adam","RMSprop"],learning_rate:["1e-2","1e-3","1e-4","1e-5"],lr_scheduler:["none","multisteplr","steplr"],step_size:["20"],lr_decay_ratio:["0.1","0.7"]},evaluator:{metrics:["MAE","MAPE","MSE","RMSE","masked_MAE","masked_MSE","masked_RMSE","masked_MAPE","R2","EVAR"]}},i=l,s={data:function(){return{customStyle:"background-color: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden",labelCol:{span:4},wrapperCol:{span:14},taskData:i.basic.task,datasetAllData:i.basic.dataset,datasetData:i.basic.dataset[0],modelAllData:i.basic.model,modelData:i.basic.model[0],batch_sizeData:i.data.batch_size,input_windowData:i.data.input_window,output_windowData:i.data.output_window,train_rateData:i.data.train_rate,eval_rateData:i.data.eval_rate,max_epochData:i.executor.max_epoch,learnerData:i.executor.learner,learning_rateData:i.executor.learning_rate,lr_schedulerData:i.executor.lr_scheduler,step_sizeData:i.executor.step_size,lr_decay_ratioData:i.executor.lr_decay_ratio,max_epoch:i.executor.max_epoch,learner:i.executor.learner,learning_rate:i.executor.learning_rate,lr_scheduler:i.executor.lr_scheduler,step_size:i.executor.step_size,lr_decay_ratio:i.executor.lr_decay_ratio,metricsData:i.evaluator.metrics,form:{task:i.basic.task[0],dataset:i.basic.dataset[0][0],model:i.basic.model[0][0]},dataform:{batch_size:i.data.batch_size[0],input_window:i.data.input_window[0],output_window:i.data.output_window[0],train_rate:i.data.train_rate[0],eval_rate:i.data.eval_rate[0]},executorform:{max_epoch:i.executor.max_epoch[0],learner:i.executor.learner[0],learning_rate:i.executor.learning_rate[0],lr_scheduler:i.executor.lr_scheduler[0],step_size:i.executor.step_size[0],lr_decay_ratio:i.executor.lr_decay_ratio[0]},evaluatorform:{metrics:i.evaluator.metrics[0]},option:{tooltip:{trigger:"axis"},legend:{data:["train_loss","val_loss"]},grid:{left:"3%",right:"10%",bottom:"1%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{name:"epoch",type:"category",boundaryGap:!1,data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]},yAxis:{type:"value"},series:[{name:"train_loss",type:"line",stack:"总量",data:[3.3774,2.4176,2.3156,2.2701,2.2835,2.1878,2.1711,2.1584,2.1468,2.1358,2.1272,2.1181,2.1104,2.1039,2.0958,2.0908,2.0864,2.0802,2.0775,2.0717,2.0633,2.0633,2.066,2.068,2.0687,2.0703,2.0741,2.0794,2.083,2.09,2.0937,2.1046,2.1165,2.1276,2.1422,2.1496,2.1621,2.1952,2.207,2.2362,2.2548,2.2816,2.3167,2.3501,2.3824,2.4414,2.4544,2.5075,2.5376,2.5775,2.5981,2.642,2.6583,2.6752,2.7168,2.7312,2.738,2.7472,2.7632,2.7736,2.7872,2.7862,2.7866,2.7916,2.7989,2.797,2.8,2.8032,2.8048,2.8082,2.8077,2.8077,2.8061,2.8068,2.8063,2.8072,2.8091,2.8096,2.8089,2.8094,2.8063,2.8094,2.8083,2.8092,2.8087,2.8088,2.8079,2.809,2.8086,2.808,2.8081,2.8082,2.8081,2.8078,2.8079,2.8078,2.8083,2.8081,2.8077,2.8075]},{name:"val_loss",type:"line",stack:"总量",data:[4.3733,3.6081,3.6812,3.5217,3.4736,3.1115,3.0969,3.0714,3.0755,3.036,3.0494,3.0125,2.9988,3.0089,3.0382,2.9857,3.01,2.9784,2.9566,2.9489,2.9406,2.9432,2.945,2.9358,2.9313,2.9278,2.9371,2.9283,2.9305,2.9361,2.9472,2.9264,2.9265,2.9071,2.9433,2.933,2.8941,2.9127,2.8873,2.8804,2.8759,2.8752,2.8702,2.8729,2.8685,2.8592,2.8612,2.8605,2.86,2.8618,2.8588,2.8568,2.853,2.855,2.854,2.8516,2.8528,2.8532,2.851,2.8526,2.8516,2.8495,2.8494,2.8546,2.8523,2.8477,2.8464,2.8535,2.8492,2.8525,2.8511,2.8492,2.8506,2.8489,2.8509,2.8485,2.8499,2.8495,2.8499,2.8497,2.8484,2.8485,2.8493,2.8505,2.8487,2.849,2.8491,2.849,2.8504,2.8506,2.8478,2.8495,2.8501,2.8487,2.8498,2.8484,2.8497,2.8499,2.8515,2.8501]}]},optionH:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},xAxis:[{name:"step",type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"test_loss",type:"bar",barWidth:"60%",data:[2.2572438716888428,2.3957266807556152,2.505777359008789,2.6010701656341553,2.6851282119750977,2.7633702754974365,2.832709312438965,2.8964741230010986,2.955946207046509,3.0112195014953613,3.063225269317627,3.11252760887146]}]}}},methods:{handleTaskChange:function(t){console.log(t),"Trajectory Next-Location Prediction"==t?t=0:"Traffic State Prediction"==t&&(t=1),this.form.task=this.taskData[t],this.datasetData=this.datasetAllData[t],this.form.dataset=this.datasetData[0],this.modelData=this.modelAllData[t],this.form.model=this.modelData[0]},draw:function(){var t=this.$echarts.init(document.getElementById("chart"));t.setOption(this.option)},drawH:function(){var t=this.$echarts.init(document.getElementById("histogram"));t.setOption(this.optionH)}},mounted:function(){this.draw(),this.drawH(),console.log("wrong here")}},c=s,n=(a("4ad1"),a("2877")),d=Object(n["a"])(c,r,o,!1,null,"56e295cf",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5df459a4.d1bd9782.js.map