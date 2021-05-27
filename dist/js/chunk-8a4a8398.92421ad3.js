(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a4a8398"],{"5db7":function(t,e,a){"use strict";a("b26c")},7718:function(t,e,a){t.exports=a.p+"img/data_flow.4565f1b5.png"},"8ae8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"content"},[a("div",[a("p",{staticClass:"title"},[t._v("Data Flow")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("In consideration of extensibiliy, flexibility and reusability, the data module designs an elegant data flow that transforms raw data into the unified input of model module. The overall data flow can be described as follows:")]),t._m(1),t._m(2),a("br"),a("p",{staticClass:"title"},[t._v("Atomic Files")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("LibTraffic introduces and implements 5 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their suffixes:")]),t._m(3),a("br"),t._m(4),a("p",[t._v("Here is an example of formatted METR-LA dataset below.")]),a("br"),a("p",{staticClass:"title"},[t._v("Dataset List")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),t._m(5),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Trajectory Dataset")]),a("data-table",{attrs:{content:t.location}}),a("br"),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Traffic Speed Dataset")]),a("data-table",{attrs:{content:t.speed}}),a("br"),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Traffic Flow Dataset")]),a("data-table",{attrs:{content:t.flow}}),a("br")],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticStyle:{"padding-top":"20px",color:"white"}},[a("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("Data")]),a("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" LibTraffic provides more than 40 spatio-temporal datasets and introduces unified "),a("br"),t._v(" data structures to format representations of datas and the input of algorithms. ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"10px auto 10px auto","text-align":"center"}},[i("img",{attrs:{src:a("7718"),alt:"Data Flow",height:"120"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Raw Data")]),t._v(": Unprocessed open source traffic datasets.")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Atomic Files")]),t._v(": Basic components for characterizing the input of various traffic prediction tasks.")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Dataset")]),t._v(": Dataset objects for various traffic prediction tasks, which is responsible for reading atomic files. ... also provides a series of functions for data preprocessing. Detailed in "),a("a",{attrs:{href:"#"}},[t._v("Document")]),t._v(".")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("DataLoader")]),t._v(": Mainly based on the "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("torch.utils.data.DataLoader")]),t._v(" in the library of "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("PyTorch")]),t._v(". Responsible for feeding data into models by an internal data structure "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Batch")]),t._v(". "),a("span",{staticStyle:{"font-weight":"700"}},[t._v("Batch")]),t._v(" is implemented as a abstract data type based on "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("python.dict")]),t._v(", which is a key-value indexed data structure. "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Key")]),t._v(" corresponds to the feature name of the model input. "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Value")]),t._v(" corresponds to the tensor (implemented by "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("torch.Tensor")]),t._v(") and the value entry for a specific key stores all the corresponding tensor data in a "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("batch")]),t._v(" or "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("mini-batch")]),t._v(". Detailed in "),a("a",{attrs:{href:"#"}},[t._v("Document")]),t._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticStyle:{width:"900px"}},[a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("SUFFIX")]),a("th",{attrs:{width:"50%"}},[t._v("CONTENT")]),a("th",{attrs:{width:"35%"}},[t._v("EXAMPLE FORMAT")])])]),a("tbody",[a("tr",[a("td",[t._v(".geo")]),a("td",[t._v("Geographical entity feature")]),a("td",[t._v("geo_id, type, coordinates")])]),a("tr",[a("td",[t._v(".usr")]),a("td",[t._v("User entity feature")]),a("td",[t._v("usr_id, gender, birth_date")])]),a("tr",[a("td",[t._v(".rel")]),a("td",[t._v("Relational information of entities, such as road network")]),a("td",[t._v("rel_id, origin_id, destination_id")])]),a("tr",[a("td",[t._v(".dyna")]),a("td",[t._v("Dynamic time-varient information of entities")]),a("td",[t._v("dyna_id, type, entity_id, location_id")])]),a("tr",[a("td",[t._v(".ext")]),a("td",[t._v("External features, such as weather and temperature")]),a("td",[t._v("ext_id, time, properties")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The essence of the atomic files is feature-based data frames corresponding to different parts of the task input. And atomic files are combined to support the input of different spatio-temporal data mining tasks. Detailed in "),a("a",{attrs:{href:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/atmoic_files.html"}},[t._v("Document")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("In order to transform the raw data file into our atomic files, we have collected more than 40 datasets, and released the scripts for formatting these datasets into atomic files. Meanwhile, we have uploaded the processed atomic files in network disks with the links "),a("a",{attrs:{href:"#"}},[t._v("Google Drive")]),t._v(" and "),a("a",{attrs:{href:"#"}},[t._v("Baidu NetDisk")]),t._v(" (Password: ).")])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),a("tbody",t._l(t.content,(function(e){return a("tr",[a("td",{attrs:{width:"35%"}},[a("a",{attrs:{href:e.plink}},[t._v(t._s(e.dataset))])]),a("td",{attrs:{width:"25%"}},[t._v(t._s(e.place))]),a("td",{attrs:{width:"30%"}},[t._v(t._s(e.duration))]),a("td",{attrs:{width:"10%"}},[a("a-button",{attrs:{type:"primary",shape:"round"}},[a("a",{attrs:{href:e.source}},[t._v("Source")])])],1)])})),0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",[t._v("DATASET")]),a("th",[t._v("PLACE")]),a("th",[t._v("DURATION")]),a("th",[t._v("LINK")])])])}],n=["DATASET","BEST METHOD","PAPER","COMPARE"],c={name:"table",props:{content:{type:Array,required:!0}},data:function(){return{columns:n}}},d=c,l=(a("be2e"),a("2877")),u=Object(l["a"])(d,s,o,!1,null,null,null),p=u.exports,h=[{dataset:"AustinRide",place:"Austin, USA",duration:"Jun. 4, 2016 ~ Apr. 13, 2017",source:"https://data.world/ride-austin/ride-austin-june-6-april-13",plink:"#AustinRide"},{dataset:"NYC-Bus",place:"New York, USA",duration:"Aug. 1, 2014 ~ Oct. 31, 2014",source:"http://web.mta.info/developers/MTA-Bus-Time-historical-data.html",plink:"#NYC-Bus"},{dataset:"Porto",place:"Porto, Portugal",duration:"Jul. 1, 2013 ~ Jun. 30, 2014",source:"https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015",plink:"#Porto"},{dataset:"BikeCHI",place:"Chicago, USA",duration:"Jun. 27, 2013 ~ 2018",source:"https://www.divvybikes.com/system-data",plink:"#BikeCHI"},{dataset:"NYC-Bike",place:"New York, USA",duration:"Jun. 2013 ~ present",source:"https://www.citibikenyc.com/system-data",plink:"#NYC-Bike"},{dataset:"Foursquare: Global-scale Check-in Dataset",place:"415 cities",duration:"Apr. 2012 ~ Sept. 2013",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"#Foursquare: Global-scale Check-in Dataset"},{dataset:"Foursquare: User Profile Dataset",place:"New York, USA; Tokyo, Japan",duration:"Apr. 2012 ~ Sept. 2013",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"#Foursquare: User Profile Dataset"},{dataset:"Foursquare: Global-scale Check-in Dataset with User Social Networks",place:"415 cities",duration:"Apr. 2012 ~ Sept. 2013",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"#Foursquare: Global-scale Check-in Dataset with User Social Networks"},{dataset:"Foursquare: NYC Restaurant Rich Dataset",place:"New York, USA",duration:"Oct. 24, 2011 ~ Feb. 20, 2012",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"#Foursquare: NYC Restaurant Rich Dataset"},{dataset:"BikeDC",place:"Washington, USA",duration:"Sept. 20, 2010 ~ Oct. 2020",source:"https://www.capitalbikeshare.com/system-data",plink:"#BikeDC"},{dataset:"Gowalla",place:"-",duration:"Feb. 2009 ~ Oct. 2010",source:"https://snap.stanford.edu/data/loc-gowalla.html",plink:"#Gowalla"},{dataset:"NYC-Taxi",place:"New York, USA",duration:"2009 ~ present",source:"https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page",plink:"#NYC-Taxi"},{dataset:"Brightkite",place:"-",duration:"Apr. 2008 ~ Oct. 2010",source:"http://snap.stanford.edu/data/loc-brightkite.html",plink:"#Brightkite"},{dataset:"T-Drive",place:"Beijing, China",duration:"Feb. 2, 2008 ~ Feb. 8, 2008",source:"https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/",plink:"#T-Drive"},{dataset:"GeoLife-GPS",place:"Beijing, China (majority)",duration:"Aug. 2007 ~ Aug. 2012",source:"https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/",plink:"#GeoLife-GPS"},{dataset:"I-80",place:"San Francisco Bay, USA",duration:"Apr. 13, 2005",source:"https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm",plink:"#I-80"}],f=[{dataset:"Rotterdam",place:"Rotterdam, Holland",duration:"135 days of 2018",source:"https://github.com/RomainLITUD/DGCN_traffic_forecasting",plink:"#"},{dataset:"PeMSD4",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2018 ~ Feb. 28, 2018",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04",plink:"#PeMSD4-Speed"},{dataset:"Q-Traffic",place:"Beijing, China",duration:"Apr. 1, 2017 ~ May 31, 2017",source:"https://github.com/JingqingZ/BaiduTraffic",plink:"#Q-Traffic"},{dataset:"PEMS-BAY",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2017 ~ Jun. 30, 2017",source:"https://github.com/liyaguang/DCRNN",plink:"#PEMS-BAY"},{dataset:"PEMSD8",place:"San Bernardino Area, USA",duration:"Jul. 1, 2016 ~ Aug. 31, 2016",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08",plink:"#PEMSD8-Speed"},{dataset:"HK",place:"Hong Kong, China",duration:"Dec. 28, 2015 ~ present",source:"https://data.gov.hk/en-data/dataset/hk-td-sm_1-traffic-speed-map",plink:"#HK"},{dataset:"NYC Speed data",place:"New York, USA",duration:"Apr. 1, 2015 ~ present",source:"http://data.beta.nyc/dataset/nyc-real-time-traffic-speed-data-feed-archived",plink:"#NYC Speed data"},{dataset:"Loop Seattle",place:"Greater Seattle Area, USA",duration:"over the entirely of 2015",source:"https://github.com/zhiyongc/Seattle-Loop-Data",plink:"#Loop Seattle"},{dataset:"SZ-Taxi",place:"Shenzhen, China",duration:"Jan. 1, 2015 ~ Jan. 31, 2015",source:"https://github.com/lehaifeng/T-GCN/tree/master/data",plink:"#SZ-Taxi"},{dataset:"PEMSD7(M)",place:"District 7 of California, USA",duration:"the weekdays of May and June of 2012",source:"https://github.com/Davidham3/STGCN/tree/master/datasets",plink:"#PEMSD7(M)"},{dataset:"METR-LA",place:"Los Angeles County, USA",duration:"Mar. 1, 2012 ~ Jun. 27, 2012",source:"https://github.com/liyaguang/DCRNN",plink:"#METR-LA"},{dataset:"PEMS",place:"California, USA",duration:"2001 ~ present",source:"http://pems.dot.ca.gov",plink:"#PEMS"}],m=[{dataset:"HZMetro",place:"Hangzhou, China",duration:"Jan. 1, 2019 ~ Jan. 25, 2019",source:"https://github.com/ivechan/PVCGN",plink:"#"},{dataset:"PeMSD3",place:"District 3 of California, USA",duration:"Sept. 1, 2018 ~ Nov. 30, 2018",source:"https://github.com/Davidham3/STSGCN",plink:"#PeMS03"},{dataset:"M_dense",place:"Madrid, Spain",duration:"Jan. 1, 2018 ~ Dec. 21, 2019",source:"https://github.com/Davidham3/STSGCN",plink:"#PeMS03"},{dataset:"PeMSD4",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2018 ~ Feb. 28, 2018",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04",plink:"#PeMSD4-Flow"},{dataset:"SHMetro",place:"Shanghai, China",duration:"Jul. 1, 2016 ~ Sept. 30, 2016",source:"https://github.com/ivechan/PVCGN",plink:"#"},{dataset:"PEMSD7",place:"District 7 of California, USA",duration:"Jul. 1, 2016 ~ Aug. 31, 2016",source:"https://github.com/Davidham3/STSGCN",plink:"#PEMSD7"},{dataset:"PEMSD8",place:"San Bernardino Area, USA",duration:"Jul. 1, 2016 ~ Aug. 31, 2016",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08",plink:"#PEMSD8-Flow"},{dataset:"Beijing subway",place:"Beijing, China",duration:"Feb. 29, 2016 ~ Apr. 3, 2016",source:"https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN",plink:"#"},{dataset:"TaxiBJ",place:"Beijing, China",duration:"Jul. 1, 2013 ~ Oct. 30, 2013; Mar. 1, 2014 ~ Jun. 30, 2014; Mar. 1, 2015 ~ Jun. 30, 2015; Nov. 1, 2015 ~ Apr. 10, 2016",source:"https://github.com/TolicWang/DeepST/issues/3",plink:"#TaxiBJ"},{dataset:"ENG-HW",place:"Great Britain",duration:"2006 ~ 2014",source:"http://tris.highwaysengland.co.uk/detail/trafficflowdata",plink:"#ENG-HW"}],v={data:function(){return{location:h,speed:f,flow:m}},components:{dataTable:p}},g=v,_=(a("5db7"),Object(l["a"])(g,i,r,!1,null,"421cf6f8",null));e["default"]=_.exports},b26c:function(t,e,a){},be2e:function(t,e,a){"use strict";a("f5aa")},f5aa:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8a4a8398.92421ad3.js.map