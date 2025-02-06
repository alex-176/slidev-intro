import{p as w}from"./chunk-K2ZEYYM2-CIbRg3sX.js";import{p as B}from"./gitGraph-YCYPL57B-5MQDGNWY-D7KYHtWE.js";import{_ as l,s as S,g as F,n as z,o as P,a as T,b as W,as as x,aT as D,e as _,x as A,at as E,au as N,l as v}from"./md-CZaS2cBp.js";import"./chunk-TGZYFRKZ-AK5dj4Lp.js";import"../index-BbqXlESc.js";import"../modules/vue-BfnZp6gX.js";import"../modules/shiki-CMLc9Buq.js";import"./lz-string-DHa7ly0R.js";import"../modules/file-saver-C8BEGaqa.js";import"./two-cols-header-DzvLfF0w.js";import"./context-BAAhCQgK.js";var C={packet:[]},h=structuredClone(C),L=N.packet,Y=l(()=>{const t=x({...L,...E().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=l(()=>h.packet,"getPacket"),M=l(t=>{t.length>0&&h.packet.push(t)},"pushWord"),O=l(()=>{A(),h=structuredClone(C)},"clear"),m={pushWord:M,getPacket:I,getConfig:Y,clear:O,setAccTitle:W,getAccTitle:T,setDiagramTitle:P,getDiagramTitle:z,getAccDescription:F,setAccDescription:S},G=1e4,H=l(t=>{w(t,m);let e=-1,o=[],s=1;const{bitsPerRow:i}=m.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,v.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=i+1&&m.getPacket().length<G;){const[b,c]=K({start:a,end:r,label:p},s,i);if(o.push(b),b.end+1===s*i&&(m.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}m.pushWord(o)},"populate"),K=l((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),R={parse:l(async t=>{const e=await B("packet",t);v.debug(e),H(e)},"parse")},U=l((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=a,u=i.getPacket(),n=i.getDiagramTitle(),g=r+p,d=g*(u.length+1)-(n?0:r),k=b*c+2,f=D(e);f.attr("viewbox",`0 0 ${k} ${d}`),_(f,d,k,a.useMaxWidth);for(const[$,y]of u.entries())X(f,y,$,a);f.append("text").text(n).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=l((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),u=o*(s+a)+a;for(const n of e){const g=n.start%p*r+1,d=(n.end-n.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",u).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",u+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(n.label),!b)continue;const k=n.end===n.start,f=u-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(n.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(n.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=x(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),it={parser:R,db:m,renderer:j,styles:J};export{it as diagram};
