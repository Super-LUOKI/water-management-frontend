import{d as k,_ as v,s as b,r as L,o as C,c as T,a as u,b as e,u as p,i as g,w as f,e as V,E as $,f as U,C as B,g as I,t as O,h as R,j as z,m as N}from"./index-e9032b8d.js";import{H as P}from"./el-table-column-950bb16d.js";/* empty css                       */import{s as j}from"./file-1faae522.js";import{f as x}from"./date-a462485d.js";function q(i,s,n,r,l,t,a,_){return P.get("/trans",{params:{page:i,page_count:s,address:n,device_code:r,user_code:l,username:t,start_time:a,end_time:_}})}const w=k("his-trans",{state:()=>({hisTransList:[],page:1,pageCount:10,address:null,deviceCode:null,userCode:null,username:null,startTimestamp:null,endTimestamp:null,total:0,selections:null}),actions:{async fetchHisTranList(){const i=await q(this.page,this.pageCount,this.address,this.deviceCode,this.userCode,this.username,this.startTimestamp,this.endTimestamp);this.hisTransList=i.data,this.total=i.total}}});const M={class:"opt-warp"},Q={class:"left-opt"},A={class:"right-opt"},F={__name:"DataOptions",setup(i){const s=w(),{address:n,deviceCode:r,userCode:l,username:t,startTimestamp:a,endTimestamp:_}=b(s),m=L([new Date(a.value),new Date(_.value)]),E=()=>{s.page=1,s.fetchHisTranList()},S=c=>{c[0]&&c[1]&&(s.startTimestamp=c[0].getTime(),s.endTimestamp=c[1].getTime())},D=()=>{j("历史抄收信息",["用户名","门牌号","设备编码","结算流量(m³)","累计流量(m³)","上月使用(m³)","水表余额(元)","电池电压(V)","设备状态","抄收时间","31日使用量"],s.selections).then(()=>{$.success("导出成功")})};return(c,o)=>{const h=U,H=B,y=I;return C(),T("div",M,[u("div",Q,[e(h,{modelValue:p(n),"onUpdate:modelValue":o[0]||(o[0]=d=>g(n)?n.value=d:null),placeholder:"地址区域"},null,8,["modelValue"]),e(h,{modelValue:p(r),"onUpdate:modelValue":o[1]||(o[1]=d=>g(r)?r.value=d:null),placeholder:"设备编码"},null,8,["modelValue"]),e(h,{modelValue:p(l),"onUpdate:modelValue":o[2]||(o[2]=d=>g(l)?l.value=d:null),placeholder:"用户名"},null,8,["modelValue"]),e(h,{modelValue:p(t),"onUpdate:modelValue":o[3]||(o[3]=d=>g(t)?t.value=d:null),placeholder:"用户编码"},null,8,["modelValue"]),e(H,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=d=>m.value=d),type:"datetimerange","range-separator":"到","start-placeholder":"开始时间","end-placeholder":"结束时间",onCalendarChange:S},null,8,["modelValue"]),e(y,{onClick:E},{default:f(()=>[V("查询")]),_:1})]),u("div",A,[e(y,{type:"primary",plain:"",onClick:D},{default:f(()=>[V("导出")]),_:1})])])}}},G=v(F,[["__scopeId","data-v-f5d64521"]]);const J={class:"table-warp"},K={__name:"ContentTable",setup(i){const s=w(),{hisTransList:n}=b(s),r=l=>{console.log("selection",l),s.selections=l.map(t=>[t.username,t.house_number,t.device_code,t.settle_flow,t.total_flow,t.last_month_flow,t.balance,t.battery_voltage,t.status,x(t.collected_at),t.latest_31_day_usage])};return(l,t)=>{const a=R,_=z;return C(),T("div",J,[e(_,{data:p(n),stripe:"",border:"","row-style":{height:"35px"},"cell-style":{padding:"5px"},style:{"font-size":"12px"},"show-overflow-tooltip":"",onSelectionChange:r},{default:f(()=>[e(a,{type:"selection",width:"50"}),e(a,{prop:"username",label:"用户名",width:"80"}),e(a,{prop:"house_number",label:"门牌号"}),e(a,{prop:"device_code",label:"设备编码"}),e(a,{prop:"settle_flow",label:"结算流量(m³)"}),e(a,{prop:"total_flow",label:"累计流量(m³)"}),e(a,{prop:"last_month_flow",label:"上月使用(m³)"}),e(a,{prop:"balance",label:"水表余额(元)"}),e(a,{prop:"battery_voltage",label:"电池电压(V)"}),e(a,{prop:"status",label:"设备状态",width:"90"}),e(a,{label:"抄收时间"},{default:f(({row:m})=>[u("span",null,O(p(x)(m.collected_at)),1)]),_:1}),e(a,{prop:"latest_31_day_usage",label:"31日使用量",width:"90"})]),_:1},8,["data"])])}}},W=v(K,[["__scopeId","data-v-5ac3192f"]]);const X={class:"base-warp content-warp his-trans"},Y={class:"content"},Z={class:"pagination-warp"},ee={__name:"index",setup(i){const s=w();s.fetchHisTranList();const{pageCount:n,total:r}=b(s),l=t=>{s.page=t,s.fetchHisTranList()};return(t,a)=>{const _=N;return C(),T("div",X,[e(G),u("div",Y,[e(W),u("div",Z,[e(_,{"page-size":p(n),"pager-count":9,layout:"prev, pager, next",total:p(r),background:"",small:"",onCurrentChange:l},null,8,["page-size","total"])])])])}}},ne=v(ee,[["__scopeId","data-v-41dd3887"]]);export{ne as default};
