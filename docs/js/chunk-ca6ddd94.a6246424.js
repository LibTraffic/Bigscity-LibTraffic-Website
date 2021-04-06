(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca6ddd94"],{"5d98":function(t,e,a){},"8dff":function(t,e,a){"use strict";a("5d98")},b216:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v("Quick Start From Source")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("With the source code of LibTraffic, you can run the provided script for initial usage of our library:")]),t._m(1),a("p",[t._v("This script will run the DeepMove model on the Foursquare-TKY dataset for trajectory next-location prediction task. Furthermore, the script supports the input of command line parameters to adjust the parameter settings of the pipeline.Here are some simple examples for reference.")]),a("p",[t._v("If you want to run the DCRNN model on the METR_LA dataset for traffic state prediction task, just run the script by setting relevant command parameters:")]),t._m(2),a("p",[t._v("You will obtain some output like:")]),t._m(3),a("p",[t._v("As you can be see, the atomic files of original dataset METR_LA will be loaded and divided into training set, validation set and test set by default. We will optimize model parameters on the training set, do parameter selection according to the results on the validation set, and finally report the results on the test set.")]),a("p",[t._v("Begin training:")]),t._m(4),a("br"),t._m(5),t._m(6),t._m(7),a("p",{staticClass:"title"},[t._v("Quick Start From API")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticStyle:{"padding-top":"20px",color:"white"}},[a("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("Quick Start")]),a("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" This page will help you quickly know the basic usages of LibTraffic. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"bash"}},[t._v("python run_model.py")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"bash"}},[t._v("python run_model.py --task traffic_state_pred --model DCRNN --METR_LA")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{"font-size":"16px"}},[a("code",{attrs:{"data-lang":"bash"}},[t._v(" - INFO - Log directory: ./trafficdl/log"),a("br"),t._v(" - INFO - Begin pipeline, task=traffic_state_pred, model_name=DCRNN, dataset_name=METR_LA"),a("br"),t._v(" - INFO - Loaded file METR_LA.geo, num_nodes=207"),a("br"),t._v(" - INFO - Loaded file METR_LA.rel, shape=(207, 207)"),a("br"),t._v(" - INFO - Start Calculate the weight by Gauss kernel!"),a("br"),t._v(" - INFO - Loading ./trafficdl/cache/dataset_cache/point_based_METR_LA_12_12_0.7_0.1_standard_64_True_False_True.npz"),a("br"),t._v(" - INFO - train x: (23974, 12, 207, 2)y: (23974, 12, 207, 2)"),a("br"),t._v(" - INFO - eval x: (3425, 12, 207, 2)y: (3425, 12, 207, 2)"),a("br"),t._v(" - INFO - test x: (6850, 12, 207, 2)y: (6850, 12, 207, 2)"),a("br"),t._v(" - INFO - StandardScaler mean: 54.40592829587626, std: 19.493739270573098"),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{"font-size":"16px"}},[a("code",{attrs:{"data-lang":"bash"}},[t._v(" - INFO - Start training ..."),a("br"),t._v(" - INFO - num_batches:375"),a("br"),t._v(" - INFO - Total trainable parameters 372353"),a("br"),t._v(" - INFO - epoch complete!"),a("br"),t._v(" - INFO - evaluating now!"),a("br"),t._v(" - INFO - Epoch [0/100] (375) train_mae: 3.3774, val_mae: 4.3733, lr: 0.010000, 403.5s"),a("br"),t._v(" - INFO - Saved model at 0"),a("br"),t._v(" - INFO - Val loss decrease from inf to 4.3733, saving to ./trafficdl/cache/model_cache/DCRNN_METR_LA_epoch0.tar"),a("br"),t._v(" ..."),a("br"),t._v(" - INFO - epoch complete!"),a("br"),t._v(" - INFO - evaluating now!"),a("br"),t._v(" - INFO - Epoch [99/100] (37500) train_mae: 2.8075, val_mae: 2.8501, lr: 0.000001, 401.7s"),a("br"),t._v(" - INFO - Loaded model at 66"),a("br"),t._v(" - INFO - Saved model at ./trafficdl/cache/model_cache/DCRNN_METR_LA.m"),a("br"),t._v(" - INFO - Start evaluating ..."),a("br"),t._v(" - INFO - Evaluate result is ..."),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If you want to change the parameters, such as "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("learning_rate")]),t._v(", just set the additional command parameters as you need:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"bash"}},[t._v("python run_model.py --learning_rate 0.001")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("All supporting parameters and more details can be found in "),a("a",{attrs:{href:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/get_started/quick_start.html"}},[t._v("Document")]),t._v(".")])}],n={data:function(){return{}},components:{}},s=n,o=(a("8dff"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"8cb19856",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-ca6ddd94.a6246424.js.map