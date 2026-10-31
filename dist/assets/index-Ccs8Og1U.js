(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="170",hc=0,no=1,uc=2,wl=1,Al=2,gn=3,yn=0,Pe=1,Be=2,In=0,Jn=1,de=2,io=3,so=4,dc=5,Yn=100,fc=101,pc=102,mc=103,gc=104,_c=200,xc=201,vc=202,Mc=203,Hr=204,Vr=205,yc=206,Sc=207,Ec=208,Tc=209,bc=210,wc=211,Ac=212,Rc=213,Cc=214,Gr=0,Wr=1,Xr=2,Ci=3,qr=4,Yr=5,Kr=6,$r=7,Rl=0,Pc=1,Lc=2,Un=0,Dc=1,Ic=2,Uc=3,Cl=4,Nc=5,Fc=6,Oc=7,Pl=300,Pi=301,Li=302,jr=303,Zr=304,nr=306,Di=1e3,jn=1001,Jr=1002,ze=1003,Bc=1004,ps=1005,Xe=1006,or=1007,Zn=1008,Sn=1009,Ll=1010,Dl=1011,ls=1012,Ia=1013,Qn=1014,sn=1015,cs=1016,Ua=1017,Na=1018,Ii=1020,Il=35902,Ul=1021,Nl=1022,tn=1023,Fl=1024,Ol=1025,wi=1026,Ui=1027,Fa=1028,Oa=1029,Bl=1030,Ba=1031,za=1033,Ys=33776,Ks=33777,$s=33778,js=33779,Qr=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,va=37821,Zs=36492,Ma=36494,ya=36495,zl=36283,Sa=36284,Ea=36285,Ta=36286,zc=3200,kc=3201,kl=0,Hc=1,Dn="",me="srgb",Bi="srgb-linear",ir="linear",Qt="srgb",ai=7680,ro=519,Vc=512,Gc=513,Wc=514,Hl=515,Xc=516,qc=517,Yc=518,Kc=519,ba=35044,ns=35048,ao="300 es",xn=2e3,Qs=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oo=1234567;const as=Math.PI/180,Ni=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function ka(s,t){return(s%t+t)%t}function $c(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function jc(s,t,e){return s!==t?(e-s)/(t-s):0}function os(s,t,e){return(1-e)*s+e*t}function Zc(s,t,e,n){return os(s,t,1-Math.exp(-e*n))}function Jc(s,t=1){return t-Math.abs(ka(s,t*2)-t)}function Qc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function th(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function eh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nh(s,t){return s+Math.random()*(t-s)}function ih(s){return s*(.5-Math.random())}function sh(s){s!==void 0&&(oo=s);let t=oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rh(s){return s*as}function ah(s){return s*Ni}function oh(s){return(s&s-1)===0&&s!==0}function lh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ch(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oe={DEG2RAD:as,RAD2DEG:Ni,generateUUID:vn,clamp:Ce,euclideanModulo:ka,mapLinear:$c,inverseLerp:jc,lerp:os,damp:Zc,pingpong:Jc,smoothstep:Qc,smootherstep:th,randInt:eh,randFloat:nh,randFloatSpread:ih,seededRandom:sh,degToRad:rh,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:lh,floorPowerOfTwo:ch,setQuaternionFromProperEuler:hh,normalize:Jt,denormalize:Qe};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],E=i[1],T=i[4],v=i[7],L=i[2],w=i[5],A=i[8];return r[0]=a*x+o*E+l*L,r[3]=a*m+o*T+l*w,r[6]=a*d+o*v+l*A,r[1]=c*x+h*E+f*L,r[4]=c*m+h*T+f*w,r[7]=c*d+h*v+f*A,r[2]=u*x+p*E+g*L,r[5]=u*m+p*T+g*w,r[8]=u*d+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*f+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lr.makeScale(t,e)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lr=new Ut;function Vl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uh(){const s=tr("canvas");return s.style.display="block",s}const lo={};function is(s){s in lo||(lo[s]=!0,console.warn(s))}function dh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ph(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ai(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const co=[.64,.33,.3,.6,.15,.06],ho=[.2126,.7152,.0722],uo=[.3127,.329],fo=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),po=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Bi]:{primaries:co,whitePoint:uo,transfer:ir,toXYZ:fo,fromXYZ:po,luminanceCoefficients:ho,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:co,whitePoint:uo,transfer:Qt,toXYZ:fo,fromXYZ:po,luminanceCoefficients:ho,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});let oi;class mh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=tr("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gh=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(cr(i[a].image)):r.push(cr(i[a]))}else r=cr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _h=0;class we extends zi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=jn,i=jn,r=Xe,a=Zn,o=tn,l=Sn,c=we.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=vn(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Pl;we.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,v=(p+1)/2,L=(d+1)/2,w=(h+u)/4,A=(f+x)/4,P=(g+m)/4;return T>v&&T>L?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=A/n):v>L?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=P/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-x)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==u||c!==p||h!==g){let m=1-o;const d=l*u+c*p+h*g+f*x,E=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const L=Math.sqrt(T),w=Math.atan2(L,d*E);m=Math.sin(m*w)/L,o=Math.sin(o*w)/L}const v=o*E;if(l=l*m+u*v,c=c*m+p*v,h=h*m+g*v,f=f*m+x*v,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*p-c*u,t[e+1]=l*g+h*u+c*f-o*p,t[e+2]=c*g+h*p+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new R,mo=new ei;class ni{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),gs.subVectors(this.max,Wi),li.subVectors(t.a,Wi),ci.subVectors(t.b,Wi),hi.subVectors(t.c,Wi),bn.subVectors(ci,li),wn.subVectors(hi,ci),Fn.subVectors(li,hi);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!ur(e,li,ci,hi,gs)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,li,ci,hi,gs))?!1:(_s.crossVectors(bn,wn),e=[_s.x,_s.y,_s.z],ur(e,li,ci,hi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new R,new R,new R,new R,new R,new R,new R,new R],$e=new R,ms=new ni,li=new R,ci=new R,hi=new R,bn=new R,wn=new R,Fn=new R,Wi=new R,gs=new R,_s=new R,On=new R;function ur(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){On.fromArray(s,r);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mh=new ni,Xi=new R,dr=new R;class ki{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(dr)),this.expandByPoint(Xi.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new R,fr=new R,xs=new R,An=new R,pr=new R,vs=new R,mr=new R;class Ha{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(fr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xs),o=An.dot(this.direction),l=-An.dot(xs),c=An.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(fr).addScaledVector(xs,u),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,i,r){pr.subVectors(e,t),vs.subVectors(n,t),mr.crossVectors(pr,vs);let a=this.direction.dot(mr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);const l=o*this.direction.dot(vs.crossVectors(An,vs));if(l<0)return null;const c=o*this.direction.dot(pr.cross(An));if(c<0||l+c>a)return null;const h=-o*An.dot(mr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,i,r,a,o,l,c,h,f,u,p,g,x,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,f,u,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*f,g=c*h,x=c*f;e[0]=u+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*f,g=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yh,t,Sh)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Rn.crossVectors(n,Ne),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Rn.crossVectors(n,Ne)),Rn.normalize(),Ms.crossVectors(Ne,Rn),i[0]=Rn.x,i[4]=Ms.x,i[8]=Ne.x,i[1]=Rn.y,i[5]=Ms.y,i[9]=Ne.y,i[2]=Rn.z,i[6]=Ms.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],E=n[3],T=n[7],v=n[11],L=n[15],w=i[0],A=i[4],P=i[8],y=i[12],_=i[1],C=i[5],F=i[9],O=i[13],H=i[2],X=i[6],W=i[10],Z=i[14],G=i[3],st=i[7],ut=i[11],yt=i[15];return r[0]=a*w+o*_+l*H+c*G,r[4]=a*A+o*C+l*X+c*st,r[8]=a*P+o*F+l*W+c*ut,r[12]=a*y+o*O+l*Z+c*yt,r[1]=h*w+f*_+u*H+p*G,r[5]=h*A+f*C+u*X+p*st,r[9]=h*P+f*F+u*W+p*ut,r[13]=h*y+f*O+u*Z+p*yt,r[2]=g*w+x*_+m*H+d*G,r[6]=g*A+x*C+m*X+d*st,r[10]=g*P+x*F+m*W+d*ut,r[14]=g*y+x*O+m*Z+d*yt,r[3]=E*w+T*_+v*H+L*G,r[7]=E*A+T*C+v*X+L*st,r[11]=E*P+T*F+v*W+L*ut,r[15]=E*y+T*O+v*Z+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*f-i*c*f-r*o*u+n*c*u+i*o*p-n*l*p)+x*(+e*l*p-e*c*u+r*a*u-i*a*p+i*c*h-r*l*h)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*f+e*o*u+i*a*f-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],E=f*m*c-x*u*c+x*l*p-o*m*p-f*l*d+o*u*d,T=g*u*c-h*m*c-g*l*p+a*m*p+h*l*d-a*u*d,v=h*x*c-g*f*c+g*o*p-a*x*p-h*o*d+a*f*d,L=g*f*l-h*x*l-g*o*u+a*x*u+h*o*m-a*f*m,w=e*E+n*T+i*v+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(x*u*r-f*m*r-x*i*p+n*m*p+f*i*d-n*u*d)*A,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*A,t[3]=(f*l*r-o*u*r-f*i*c+n*u*c+o*i*p-n*l*p)*A,t[4]=T*A,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*d+e*u*d)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*d-e*l*d)*A,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*p+e*l*p)*A,t[8]=v*A,t[9]=(g*f*r-h*x*r-g*n*p+e*x*p+h*n*d-e*f*d)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*p-e*o*p)*A,t[12]=L*A,t[13]=(h*x*i-g*f*i+g*n*u-e*x*u-h*n*m+e*f*m)*A,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,g=r*f,x=a*h,m=a*f,d=o*f,E=l*c,T=l*h,v=l*f,L=n.x,w=n.y,A=n.z;return i[0]=(1-(x+d))*L,i[1]=(p+v)*L,i[2]=(g-T)*L,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(u+d))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+T)*A,i[9]=(m-E)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const c=1/r,h=1/a,f=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=f,je.elements[9]*=f,je.elements[10]*=f,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===xn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=xn){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-r),u=(e+t)*c,p=(n+i)*h;let g,x;if(o===xn)g=(a+r)*f,x=-2*f;else if(o===Qs)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new R,je=new Yt,yh=new R(0,0,0),Sh=new R(1,1,1),Rn=new R,Ms=new R,Ne=new R,go=new Yt,_o=new ei;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _o.setFromEuler(this),this.setFromQuaternion(_o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eh=0;const xo=new R,di=new ei,dn=new Yt,ys=new R,qi=new R,Th=new R,bh=new ei,vo=new R(1,0,0),Mo=new R(0,1,0),yo=new R(0,0,1),So={type:"added"},wh={type:"removed"},fi={type:"childadded",child:null},gr={type:"childremoved",child:null};class fe extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new qe,n=new ei,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ut}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(vo,t)}rotateY(t){return this.rotateOnAxis(Mo,t)}rotateZ(t){return this.rotateOnAxis(yo,t)}translateOnAxis(t,e){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vo,t)}translateY(t){return this.translateOnAxis(Mo,t)}translateZ(t){return this.translateOnAxis(yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(qi,ys,this.up):dn.lookAt(ys,qi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(dn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(So),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wh),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(So),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new R,fn=new R,_r=new R,pn=new R,pi=new R,mi=new R,Eo=new R,xr=new R,vr=new R,Mr=new R,yr=new te,Sr=new te,Er=new te;class We{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),fn.subVectors(n,e),_r.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(fn),l=Ze.dot(_r),c=fn.dot(fn),h=fn.dot(_r),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return yr.setScalar(0),Sr.setScalar(0),Er.setScalar(0),yr.fromBufferAttribute(t,e),Sr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(yr,r.x),a.addScaledVector(Sr,r.y),a.addScaledVector(Er,r.z),a}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),fn.subVectors(t,e),Ze.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ze.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),xr.subVectors(t,n);const l=pi.dot(xr),c=mi.dot(xr);if(l<=0&&c<=0)return e.copy(n);vr.subVectors(t,i);const h=pi.dot(vr),f=mi.dot(vr);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(pi,a);Mr.subVectors(t,r);const p=pi.dot(Mr),g=mi.dot(Mr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(mi,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Eo.subVectors(r,i),o=(f-h)/(f-h+(p-g)),e.copy(i).addScaledVector(Eo,o);const d=1/(m+x+u);return a=x*d,o=u*d,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Tr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=ka(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Tr(a,r,t+1/3),this.g=Tr(a,r,t),this.b=Tr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Xt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ce(be.r*255,0,255))*65536+Math.round(Ce(be.g*255,0,255))*256+Math.round(Ce(be.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=me){Xt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Ss);const n=os(Cn.h,Ss.h,e),i=os(Cn.s,Ss.s,e),r=os(Cn.l,Ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new ct;ct.NAMES=Xl;let Ah=0;class ii extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=vn(),this.name="",this.blending=Jn,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Vr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class le extends ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new R,Es=new Ct;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}}class ql extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yl extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rh=0;const Ve=new Yt,br=new fe,gi=new R,Fe=new ni,Yi=new ni,Me=new R;class Se extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vl(t)?Yl:ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return br.lookAt(t),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Fe.min,Yi.min),Fe.expandByPoint(Me),Me.addVectors(Fe.max,Yi.max),Fe.expandByPoint(Me)):(Fe.expandByPoint(Yi.min),Fe.expandByPoint(Yi.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),Me.add(gi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,f=new R,u=new Ct,p=new Ct,g=new Ct,x=new R,m=new R;function d(P,y,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,_),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(x),o[y].add(x),o[_].add(x),l[P].add(m),l[y].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,y=E.length;P<y;++P){const _=E[P],C=_.start,F=_.count;for(let O=C,H=C+F;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new R,v=new R,L=new R,w=new R;function A(P){L.fromBufferAttribute(i,P),w.copy(L);const y=o[P];T.copy(y),T.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(w,y);const C=v.dot(l[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,C)}for(let P=0,y=E.length;P<y;++P){const _=E[P],C=_.start,F=_.count;for(let O=C,H=C+F;O<H;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new ye(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new Yt,Bn=new Ha,Ts=new ki,bo=new R,bs=new R,ws=new R,As=new R,wr=new R,Rs=new R,wo=new R,Cs=new R;class wt extends fe{constructor(t=new Se,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(wr.fromBufferAttribute(f,t),a?Rs.addScaledVector(wr,h):Rs.addScaledVector(wr.sub(e),h))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ts,bo)===null||Bn.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(To.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(To),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,L=T;v<L;v+=3){const w=o.getX(v),A=o.getX(v+1),P=o.getX(v+2);i=Ps(this,d,t,n,c,h,f,w,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=Ps(this,a,t,n,c,h,f,E,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,L=T;v<L;v+=3){const w=v,A=v+1,P=v+2;i=Ps(this,d,t,n,c,h,f,w,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const E=m,T=m+1,v=m+2;i=Ps(this,a,t,n,c,h,f,E,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ch(s,t,e,n,i,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===yn,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:s}}function Ps(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,bs),s.getVertexPosition(l,ws),s.getVertexPosition(c,As);const h=Ch(s,t,e,n,bs,ws,As,wo);if(h){const f=new R;We.getBarycoord(wo,bs,ws,As,f),i&&(h.uv=We.getInterpolatedAttribute(i,o,l,c,f,new Ct)),r&&(h.uv1=We.getInterpolatedAttribute(r,o,l,c,f,new Ct)),a&&(h.normal=We.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};We.getNormal(bs,ws,As,u.normal),h.face=u,h.barycoord=f}return h}class Lt extends Se{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function g(x,m,d,E,T,v,L,w,A,P,y){const _=v/A,C=L/P,F=v/2,O=L/2,H=w/2,X=A+1,W=P+1;let Z=0,G=0;const st=new R;for(let ut=0;ut<W;ut++){const yt=ut*C-O;for(let Ot=0;Ot<X;Ot++){const ee=Ot*_-F;st[x]=ee*E,st[m]=yt*T,st[d]=H,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[d]=w>0?1:-1,h.push(st.x,st.y,st.z),f.push(Ot/A),f.push(1-ut/P),Z+=1}}for(let ut=0;ut<P;ut++)for(let yt=0;yt<A;yt++){const Ot=u+yt+X*ut,ee=u+yt+X*(ut+1),Y=u+(yt+1)+X*(ut+1),tt=u+(yt+1)+X*ut;l.push(Ot,ee,tt),l.push(ee,Y,tt),G+=6}o.addGroup(p,G,y),p+=G,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function Ph(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Lh={clone:Fi,merge:Re};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $l extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,Ao=new Ct,Ro=new Ct;class Ie extends $l{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Ao,Ro),e.subVectors(Ro,Ao)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,xi=1;class Uh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(_i,xi,t,e);i.layers=this.layers,this.add(i);const r=new Ie(_i,xi,t,e);r.layers=this.layers,this.add(r);const a=new Ie(_i,xi,t,e);a.layers=this.layers,this.add(a);const o=new Ie(_i,xi,t,e);o.layers=this.layers,this.add(o);const l=new Ie(_i,xi,t,e);l.layers=this.layers,this.add(l);const c=new Ie(_i,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends we{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nh extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Lt(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:In});r.uniforms.tEquirect.value=e;const a=new wt(i,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Xe),new Uh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ar=new R,Fh=new R,Oh=new Ut;class Xn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ar.subVectors(n,e).cross(Fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Oh.getNormalMatrix(t),i=this.coplanarPoint(Ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new ki,Ls=new R;class Ga{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],p=i[8],g=i[9],x=i[10],m=i[11],d=i[12],E=i[13],T=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,m-p,v-d).normalize(),n[1].setComponents(l+r,u+c,m+p,v+d).normalize(),n[2].setComponents(l+a,u+h,m+g,v+E).normalize(),n[3].setComponents(l-a,u-h,m-g,v-E).normalize(),n[4].setComponents(l-o,u-f,m-x,v-T).normalize(),e===xn)n[5].setComponents(l+o,u+f,m+x,v+T).normalize();else if(e===Qs)n[5].setComponents(o,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ls.x=i.normal.x>0?t.max.x:t.min.x,Ls.y=i.normal.y>0?t.max.y:t.min.y,Ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Bh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class rn extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const E=d*u-a;for(let T=0;T<c;T++){const v=T*f-r;g.push(v,-E,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const T=E+c*d,v=E+c*(d+1),L=E+1+c*(d+1),w=E+1+c*d;p.push(T,v,w),p.push(v,L,w)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,af=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:zh,alphahash_pars_fragment:kh,alphamap_fragment:Hh,alphamap_pars_fragment:Vh,alphatest_fragment:Gh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:qh,batching_pars_vertex:Yh,batching_vertex:Kh,begin_vertex:$h,beginnormal_vertex:jh,bsdfs:Zh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:au,color_vertex:ou,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:xu,envmap_pars_fragment:vu,envmap_pars_vertex:Mu,envmap_physical_pars_fragment:Lu,envmap_vertex:yu,fog_vertex:Su,fog_pars_vertex:Eu,fog_fragment:Tu,fog_pars_fragment:bu,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Au,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Du,lights_toon_pars_fragment:Iu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:ku,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:Ku,metalnessmap_fragment:$u,metalnessmap_pars_fragment:ju,morphinstance_vertex:Zu,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:td,morphtarget_vertex:ed,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,opaque_fragment:dd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:xd,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:yd,shadowmap_vertex:Sd,shadowmask_pars_fragment:Ed,skinbase_vertex:Td,skinning_pars_vertex:bd,skinning_vertex:wd,skinnormal_vertex:Ad,specularmap_fragment:Rd,specularmap_pars_fragment:Cd,tonemapping_fragment:Pd,tonemapping_pars_fragment:Ld,transmission_fragment:Dd,transmission_pars_fragment:Id,uv_pars_fragment:Ud,uv_pars_vertex:Nd,uv_vertex:Fd,worldpos_vertex:Od,background_vert:Bd,background_frag:zd,backgroundCube_vert:kd,backgroundCube_frag:Hd,cube_vert:Vd,cube_frag:Gd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:Kd,equirect_frag:$d,linedashed_vert:jd,linedashed_frag:Zd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:tf,meshlambert_frag:ef,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:af,meshphong_vert:of,meshphong_frag:lf,meshphysical_vert:cf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:ff,points_frag:pf,shadow_vert:mf,shadow_frag:gf,sprite_vert:_f,sprite_frag:xf},et={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},nn={basic:{uniforms:Re([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Re([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Re([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Re([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Re([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Re([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Re([et.points,et.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Re([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Re([et.common,et.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Re([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Re([et.sprite,et.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Re([et.common,et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Re([et.lights,et.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};nn.physical={uniforms:Re([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ds={r:0,b:0,g:0},kn=new qe,vf=new Yt;function Mf(s,t,e,n,i,r,a){const o=new ct(0);let l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function x(E){let T=!1;const v=g(E);v===null?d(o,l):v&&v.isColor&&(d(v,1),T=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,T){const v=g(T);v&&(v.isCubeTexture||v.mapping===nr)?(h===void 0&&(h=new wt(new Lt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Fi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),kn.copy(T.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(kn)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(f!==v||u!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wt(new rn(2,2),new an({name:"BackgroundMaterial",uniforms:Fi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,T){E.getRGB(Ds,Kl(s)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m}}function yf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,C,F,O,H){let X=!1;const W=f(O,F,C);r!==W&&(r=W,c(r.object)),X=p(_,O,F,H),X&&g(_,O,F,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(_,C,F,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function f(_,C,F){const O=F.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let X=H[C.id];X===void 0&&(X={},H[C.id]=X);let W=X[O];return W===void 0&&(W=u(l()),X[O]=W),W}function u(_){const C=[],F=[],O=[];for(let H=0;H<e;H++)C[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,C,F,O){const H=r.attributes,X=C.attributes;let W=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){const ut=H[G];let yt=X[G];if(yt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(_,C,F,O){const H={},X=C.attributes;let W=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){let ut=X[G];ut===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),H[G]=yt,W++}r.attributes=H,r.attributesNum=W,r.index=O}function x(){const _=r.newAttributes;for(let C=0,F=_.length;C<F;C++)_[C]=0}function m(_){d(_,0)}function d(_,C){const F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[_]=1,O[_]===0&&(s.enableVertexAttribArray(_),O[_]=1),H[_]!==C&&(s.vertexAttribDivisor(_,C),H[_]=C)}function E(){const _=r.newAttributes,C=r.enabledAttributes;for(let F=0,O=C.length;F<O;F++)C[F]!==_[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function T(_,C,F,O,H,X,W){W===!0?s.vertexAttribIPointer(_,C,F,H,X):s.vertexAttribPointer(_,C,F,O,H,X)}function v(_,C,F,O){x();const H=O.attributes,X=F.getAttributes(),W=C.defaultAttributeValues;for(const Z in X){const G=X[Z];if(G.location>=0){let st=H[Z];if(st===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){const ut=st.normalized,yt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const ee=Ot.buffer,Y=Ot.type,tt=Ot.bytesPerElement,xt=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===Ia;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)d(G.location+Bt,rt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Bt=0;Bt<G.locationSize;Bt++)T(G.location+Bt,yt/G.locationSize,Y,ut,bt*tt,(Pt+yt/G.locationSize*Bt)*tt,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,st.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let rt=0;rt<G.locationSize;rt++)T(G.location+rt,yt/G.locationSize,Y,ut,yt*tt,yt/G.locationSize*rt*tt,xt)}}else if(W!==void 0){const ut=W[Z];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(G.location,ut);break;case 3:s.vertexAttrib3fv(G.location,ut);break;case 4:s.vertexAttrib4fv(G.location,ut);break;default:s.vertexAttrib1fv(G.location,ut)}}}}E()}function L(){P();for(const _ in n){const C=n[_];for(const F in C){const O=C[F];for(const H in O)h(O[H].object),delete O[H];delete C[F]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const F in C){const O=C[F];for(const H in O)h(O[H].object),delete O[H];delete C[F]}delete n[_.id]}function A(_){for(const C in n){const F=n[C];if(F[_.id]===void 0)continue;const O=F[_.id];for(const H in O)h(O[H].object),delete O[H];delete F[_.id]}}function P(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Sf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ef(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==tn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Sn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:L,maxSamples:w}}function Tf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Xn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||i;return i=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,T=E*4;let v=d.clippingState||null;l.value=v,v=h(g,u,T,p);for(let L=0;L!==T;++L)v[L]=e[L];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,v=p;T!==x;++T,v+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function bf(s){let t=new WeakMap;function e(a,o){return o===jr?a.mapping=Pi:o===Zr&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jr||o===Zr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jl extends $l{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,Co=[.125,.215,.35,.446,.526,.582],Kn=20,Rr=new Jl,Po=new ct;let Cr=null,Pr=0,Lr=0,Dr=!1;const qn=(1+Math.sqrt(5))/2,vi=1/qn,Lo=[new R(-qn,vi,0),new R(qn,vi,0),new R(-vi,0,qn),new R(vi,0,qn),new R(0,qn,-vi),new R(0,qn,vi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Do{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Lr),this._renderer.xr.enabled=Dr,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:cs,format:tn,colorSpace:Bi,depthBuffer:!1},i=Io(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Af(r,t,e)}return i}_compileMaterial(t){const e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,i){const o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Po),h.toneMapping=Un,h.autoClear=!1;const p=new le({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new wt(new Lt,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Po),x=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const T=this._cubeSize;Is(i,E*T,d>2?T:0,T,T),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lo[(i-r-1)%Lo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new wt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const d=[];let E=0;for(let A=0;A<Kn;++A){const P=A/x,y=Math.exp(-P*P/2);d.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const v=this._sizeLods[i],L=3*v*(i>T-bi?i-T+bi:0),w=4*(this._cubeSize-v);Is(e,L,w,3*v,2*v),l.setRenderTarget(e),l.render(f,Rr)}}function wf(s){const t=[],e=[],n=[];let i=s;const r=s-bi+1+Co.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-bi?l=Co[a-s+bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,d=1,E=new Float32Array(x*g*p),T=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(y,x*g*w),T.set(u,m*g*w);const _=[w,w,w,w,w,w];v.set(_,d*g*w)}const L=new Se;L.setAttribute("position",new ye(E,x)),L.setAttribute("uv",new ye(T,m)),L.setAttribute("faceIndex",new ye(v,d)),t.push(L),i>bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Io(s,t,e){const n=new ti(s,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Af(s,t,e){const n=new Float32Array(Kn),i=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Uo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function No(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===jr||l===Zr,h=l===Pi||l===Li;if(c||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Do(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Do(s)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Cf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pf(s,t,e,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let T=0,v=E.length;T<v;T+=3){const L=E[T+0],w=E[T+1],A=E[T+2];u.push(L,w,w,A,A,L)}}else if(g!==void 0){const E=g.array;x=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){const L=T+0,w=T+1,A=T+2;u.push(L,w,w,A,A,L)}}else return;const m=new(Vl(u)?Yl:ql)(u,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Lf(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Df(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function If(s,t,e){const n=new WeakMap,i=new te;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let L=o.attributes.position.count*v,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*w*4*f),P=new Wl(A,L,w,f);P.type=sn,P.needsUpdate=!0;const y=v*4;for(let C=0;C<f;C++){const F=d[C],O=E[C],H=T[C],X=L*w*4*C;for(let W=0;W<F.count;W++){const Z=W*y;g===!0&&(i.fromBufferAttribute(F,W),A[X+Z+0]=i.x,A[X+Z+1]=i.y,A[X+Z+2]=i.z,A[X+Z+3]=0),x===!0&&(i.fromBufferAttribute(O,W),A[X+Z+4]=i.x,A[X+Z+5]=i.y,A[X+Z+6]=i.z,A[X+Z+7]=0),m===!0&&(i.fromBufferAttribute(H,W),A[X+Z+8]=i.x,A[X+Z+9]=i.y,A[X+Z+10]=i.z,A[X+Z+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:P,size:new Ct(L,w)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Uf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ql extends we{constructor(t,e,n,i,r,a,o,l,c,h=wi){if(h!==wi&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Qn),n===void 0&&h===Ui&&(n=Ii),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tc=new we,Fo=new Ql(1,1),ec=new Wl,nc=new vh,ic=new jl,Oo=[],Bo=[],zo=new Float32Array(16),ko=new Float32Array(9),Ho=new Float32Array(4);function Hi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Oo[i];if(r===void 0&&(r=new Float32Array(i),Oo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sr(s,t){let e=Bo[t];e===void 0&&(e=new Int32Array(t),Bo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Nf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function Of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function zf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Ho.set(n),s.uniformMatrix2fv(this.addr,!1,Ho),ve(e,n)}}function kf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ko.set(n),s.uniformMatrix3fv(this.addr,!1,ko),ve(e,n)}}function Hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;zo.set(n),s.uniformMatrix4fv(this.addr,!1,zo),ve(e,n)}}function Vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Fo.compareFunction=Hl,r=Fo):r=tc,e.setTexture2D(t||r,i)}function Zf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nc,i)}function Jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ic,i)}function Qf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ec,i)}function tp(s){switch(s){case 5126:return Nf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return qf;case 36294:return Yf;case 36295:return Kf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function ep(s,t){s.uniform1fv(this.addr,t)}function np(s,t){const e=Hi(t,this.size,2);s.uniform2fv(this.addr,e)}function ip(s,t){const e=Hi(t,this.size,3);s.uniform3fv(this.addr,e)}function sp(s,t){const e=Hi(t,this.size,4);s.uniform4fv(this.addr,e)}function rp(s,t){const e=Hi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ap(s,t){const e=Hi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function op(s,t){const e=Hi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function lp(s,t){s.uniform1iv(this.addr,t)}function cp(s,t){s.uniform2iv(this.addr,t)}function hp(s,t){s.uniform3iv(this.addr,t)}function up(s,t){s.uniform4iv(this.addr,t)}function dp(s,t){s.uniform1uiv(this.addr,t)}function fp(s,t){s.uniform2uiv(this.addr,t)}function pp(s,t){s.uniform3uiv(this.addr,t)}function mp(s,t){s.uniform4uiv(this.addr,t)}function gp(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||tc,r[a])}function _p(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||nc,r[a])}function xp(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ic,r[a])}function vp(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ec,r[a])}function Mp(s){switch(s){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return vp}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tp(e.type)}}class Sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mp(e.type)}}class Ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Vo(s,t){s.seq.push(t),s.map[t.id]=t}function Tp(s,t,e){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vo(e,c===void 0?new yp(o,s,t):new Sp(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Ep(o),Vo(e,f)),e=f}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Tp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Go(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const bp=37297;let wp=0;function Ap(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Wo=new Ut;function Rp(s){Xt._getMatrix(Wo,Xt.workingColorSpace,s);const t=`mat3( ${Wo.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case ir:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ap(s.getShaderSource(t),a)}else return i}function Cp(s,t){const e=Rp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pp(s,t){let e;switch(t){case Dc:e="Linear";break;case Ic:e="Reinhard";break;case Uc:e="Cineon";break;case Cl:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new R;function Lp(){Xt.getLuminanceCoefficients(Us);const s=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Ip(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Up(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ss(s){return s!==""}function qo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(s){return s.replace(Np,Op)}const Fp=new Map;function Op(s,t){let e=Ft[t];if(e===void 0){const n=Fp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wa(e)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(s){return s.replace(Bp,zp)}function zp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $o(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Gp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Pc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function Wp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=kp(e),c=Hp(e),h=Vp(e),f=Gp(e),u=Wp(e),p=Dp(e),g=Ip(r),x=i.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),d.length>0&&(d+=`
`)):(m=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),d=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Un?Pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Cp("linearToOutputTexel",e.outputColorSpace),Lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=wa(a),a=qo(a,e),a=Yo(a,e),o=wa(o),o=qo(o,e),o=Yo(o,e),a=Ko(a),o=Ko(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=E+m+a,v=E+d+o,L=Go(i,i.VERTEX_SHADER,T),w=Go(i,i.FRAGMENT_SHADER,v);i.attachShader(x,L),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(L).trim(),H=i.getShaderInfoLog(w).trim();let X=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,w);else{const Z=Xo(i,L,"vertex"),G=Xo(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Z+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:d}})}i.deleteShader(L),i.deleteShader(w),P=new Js(i,x),y=Up(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,bp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}let qp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kp(t),e.set(t,n)),n}}class Kp{constructor(t){this.id=qp++,this.code=t,this.usedTimes=0}}function $p(s,t,e,n,i,r,a){const o=new Va,l=new Yp,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,_,C,F,O){const H=F.fog,X=O.geometry,W=y.isMeshStandardMaterial?F.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=Z&&Z.mapping===nr?Z.image.height:null,st=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=ut!==void 0?ut.length:0;let Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let ee,Y,tt,xt;if(st){const jt=nn[st];ee=jt.vertexShader,Y=jt.fragmentShader}else ee=y.vertexShader,Y=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);const rt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,oe=!!y.map,Gt=!!y.matcap,ue=!!Z,N=!!y.aoMap,ke=!!y.lightMap,kt=!!y.bumpMap,Ht=!!y.normalMap,Et=!!y.displacementMap,se=!!y.emissiveMap,St=!!y.metalnessMap,b=!!y.roughnessMap,M=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,vt=y.transmission>0,at=M&&!!y.anisotropyMap,dt=B&&!!y.clearcoatMap,Wt=B&&!!y.clearcoatNormalMap,J=B&&!!y.clearcoatRoughnessMap,ft=j&&!!y.iridescenceMap,Tt=j&&!!y.iridescenceThicknessMap,At=q&&!!y.sheenColorMap,pt=q&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,Nt=!!y.specularColorMap,ne=!!y.specularIntensityMap,D=vt&&!!y.transmissionMap,nt=vt&&!!y.thicknessMap,V=!!y.gradientMap,$=!!y.alphaMap,ht=y.alphaTest>0,ot=!!y.alphaHash,Dt=!!y.extensions;let ce=Un;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Ee={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Y,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:Gt,envMap:ue,envMapMode:ue&&Z.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:ke,bumpMap:kt,normalMap:Ht,displacementMap:u&&Et,emissiveMap:se,normalMapObjectSpace:Ht&&y.normalMapType===Hc,normalMapTangentSpace:Ht&&y.normalMapType===kl,metalnessMap:St,roughnessMap:b,anisotropy:M,anisotropyMap:at,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:K,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:D,thicknessMap:nt,gradientMap:V,opaque:y.transparent===!1&&y.blending===Jn&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ot,combine:y.combine,mapUv:oe&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:ke&&x(y.lightMap.channel),bumpMapUv:kt&&x(y.bumpMap.channel),normalMapUv:Ht&&x(y.normalMap.channel),displacementMapUv:Et&&x(y.displacementMap.channel),emissiveMapUv:se&&x(y.emissiveMap.channel),metalnessMapUv:St&&x(y.metalnessMap.channel),roughnessMapUv:b&&x(y.roughnessMap.channel),anisotropyMapUv:at&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(y.sheenRoughnessMap.channel),specularMapUv:Vt&&x(y.specularMap.channel),specularColorMapUv:Nt&&x(y.specularColorMap.channel),specularIntensityMapUv:ne&&x(y.specularIntensityMap.channel),transmissionMapUv:D&&x(y.transmissionMap.channel),thicknessMapUv:nt&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(oe||$),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Be,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function d(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)_.push(C),_.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(_,y),T(_,y),_.push(s.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function E(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function T(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const _=g[y.type];let C;if(_){const F=nn[_];C=Lh.clone(F.uniforms)}else C=y.uniforms;return C}function L(y,_){let C;for(let F=0,O=h.length;F<O;F++){const H=h[F];if(H.cacheKey===_){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Xp(s,_,y,r),h.push(C)),C}function w(y){if(--y.usedTimes===0){const _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function jp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Zp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,p,g,x,m){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function o(f,u,p,g,x,m){const d=a(f,u,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(f,u,p,g,x,m){const d=a(f,u,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||Zp),n.length>1&&n.sort(u||jo),i.length>1&&i.sort(u||jo)}function h(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Jp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Zo,s.set(n,[a])):i>=r.length?(a=new Zo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ct};break;case"SpotLight":e={position:new R,direction:new R,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function tm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let em=0;function nm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function im(s){const t=new Qp,e=tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Yt,a=new Yt;function o(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,E=0,T=0,v=0,L=0,w=0,A=0;c.sort(nm);for(let y=0,_=c.length;y<_;y++){const C=c[y],F=C.color,O=C.intensity,H=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*O,f+=F.g*O,u+=F.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],O);A++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=W,p++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(F).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;const Z=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,Z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=Z.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=X,v++}x++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(F).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=A,n.version=em++)}function l(c,h){let f=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const T=c[d];if(T.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(T.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Jo(s){const t=new im(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Jo(s),t.set(i,[o])):r>=a.length?(o=new Jo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class rm extends ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class am extends ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(s,t,e){let n=new Ga;const i=new Ct,r=new Ct,a=new te,o=new rm({depthPacking:kc}),l=new am,c={},h=e.maxTextureSize,f={[yn]:Pe,[Pe]:yn,[Be]:Be},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:om,fragmentShader:lm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let d=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(In),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=d!==gn&&this.type===gn,H=d===gn&&this.type!==gn;for(let X=0,W=w.length;X<W;X++){const Z=w[X],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){const yt=this.type!==gn?{minFilter:ze,magFilter:ze}:{};G.map!==null&&G.map.dispose(),G.map=new ti(i.x,i.y,yt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ut=G.getViewportCount();for(let yt=0;yt<ut;yt++){const Ot=G.getViewport(yt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),F.viewport(a),G.updateMatrices(Z,yt),n=G.getFrustum(),v(A,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&E(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,_,C)};function E(w,A){const P=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ti(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,P,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,P,p,x,null)}function T(w,A,P,y){let _=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)_=C;else if(_=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=_.uuid,O=A.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let X=H[O];X===void 0&&(X=_.clone(),H[O]=X,A.addEventListener("dispose",L)),_=X}if(_.visible=A.visible,_.wireframe=A.wireframe,y===gn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=s.properties.get(_);F.light=P}return _}function v(w,A,P,y,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=t.update(w),H=w.material;if(Array.isArray(H)){const X=O.groups;for(let W=0,Z=X.length;W<Z;W++){const G=X[W],st=H[G.materialIndex];if(st&&st.visible){const ut=T(w,st,y,_);w.onBeforeShadow(s,w,A,P,O,ut,G),s.renderBufferDirect(P,null,O,ut,w,G),w.onAfterShadow(s,w,A,P,O,ut,G)}}}else if(H.visible){const X=T(w,H,y,_);w.onBeforeShadow(s,w,A,P,O,X,null),s.renderBufferDirect(P,null,O,X,w,null),w.onAfterShadow(s,w,A,P,O,X,null)}}const F=w.children;for(let O=0,H=F.length;O<H;O++)v(F[O],A,P,y,_)}function L(w){w.target.removeEventListener("dispose",L);for(const P in c){const y=c[P],_=w.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const hm={[Gr]:Wr,[Xr]:Kr,[qr]:$r,[Ci]:Yr,[Wr]:Gr,[Kr]:Xr,[$r]:qr,[Yr]:Ci};function um(s,t){function e(){let D=!1;const nt=new te;let V=null;const $=new te(0,0,0,0);return{setMask:function(ht){V!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ot,Dt,ce,Ee){Ee===!0&&(ht*=ce,ot*=ce,Dt*=ce),nt.set(ht,ot,Dt,ce),$.equals(nt)===!1&&(s.clearColor(ht,ot,Dt,ce),$.copy(nt))},reset:function(){D=!1,V=null,$.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,V=null,$=null,ht=null;return{setReversed:function(ot){if(nt!==ot){const Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ht;ht=null,this.setClear(ce)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?rt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(ot){V!==ot&&!D&&(s.depthMask(ot),V=ot)},setFunc:function(ot){if(nt&&(ot=hm[ot]),$!==ot){switch(ot){case Gr:s.depthFunc(s.NEVER);break;case Wr:s.depthFunc(s.ALWAYS);break;case Xr:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case qr:s.depthFunc(s.EQUAL);break;case Yr:s.depthFunc(s.GEQUAL);break;case Kr:s.depthFunc(s.GREATER);break;case $r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ht!==ot&&(nt&&(ot=1-ot),s.clearDepth(ot),ht=ot)},reset:function(){D=!1,V=null,$=null,ht=null,nt=!1}}}function i(){let D=!1,nt=null,V=null,$=null,ht=null,ot=null,Dt=null,ce=null,Ee=null;return{setTest:function(jt){D||(jt?rt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(jt){nt!==jt&&!D&&(s.stencilMask(jt),nt=jt)},setFunc:function(jt,Ye,ln){(V!==jt||$!==Ye||ht!==ln)&&(s.stencilFunc(jt,Ye,ln),V=jt,$=Ye,ht=ln)},setOp:function(jt,Ye,ln){(ot!==jt||Dt!==Ye||ce!==ln)&&(s.stencilOp(jt,Ye,ln),ot=jt,Dt=Ye,ce=ln)},setLocked:function(jt){D=jt},setClear:function(jt){Ee!==jt&&(s.clearStencil(jt),Ee=jt)},reset:function(){D=!1,nt=null,V=null,$=null,ht=null,ot=null,Dt=null,ce=null,Ee=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,T=null,v=null,L=null,w=null,A=new ct(0,0,0),P=0,y=!1,_=null,C=null,F=null,O=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Z>=2);let st=null,ut={};const yt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),ee=new te().fromArray(yt),Y=new te().fromArray(Ot);function tt(D,nt,V,$){const ht=new Uint8Array(4),ot=s.createTexture();s.bindTexture(D,ot),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<V;Dt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(nt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ot}const xt={};xt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(Ci),kt(!1),Ht(no),rt(s.CULL_FACE),N(In);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,nt){return f[D]!==nt?(s.bindFramebuffer(D,nt),f[D]=nt,D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=nt),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Bt(D,nt){let V=p,$=!1;if(D){V=u.get(nt),V===void 0&&(V=[],u.set(nt,V));const ht=D.textures;if(V.length!==ht.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Dt=ht.length;ot<Dt;ot++)V[ot]=s.COLOR_ATTACHMENT0+ot;V.length=ht.length,$=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,$=!0);$&&s.drawBuffers(V)}function oe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Gt={[Yn]:s.FUNC_ADD,[fc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};Gt[mc]=s.MIN,Gt[gc]=s.MAX;const ue={[_c]:s.ZERO,[xc]:s.ONE,[vc]:s.SRC_COLOR,[Hr]:s.SRC_ALPHA,[bc]:s.SRC_ALPHA_SATURATE,[Ec]:s.DST_COLOR,[yc]:s.DST_ALPHA,[Mc]:s.ONE_MINUS_SRC_COLOR,[Vr]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[Sc]:s.ONE_MINUS_DST_ALPHA,[wc]:s.CONSTANT_COLOR,[Ac]:s.ONE_MINUS_CONSTANT_COLOR,[Rc]:s.CONSTANT_ALPHA,[Cc]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,nt,V,$,ht,ot,Dt,ce,Ee,jt){if(D===In){x===!0&&(bt(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),D!==dc){if(D!==m||jt!==y){if((d!==Yn||v!==Yn)&&(s.blendEquation(s.FUNC_ADD),d=Yn,v=Yn),jt)switch(D){case Jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case de:s.blendFunc(s.ONE,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case de:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case so:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,T=null,L=null,w=null,A.set(0,0,0),P=0,m=D,y=jt}return}ht=ht||nt,ot=ot||V,Dt=Dt||$,(nt!==d||ht!==v)&&(s.blendEquationSeparate(Gt[nt],Gt[ht]),d=nt,v=ht),(V!==E||$!==T||ot!==L||Dt!==w)&&(s.blendFuncSeparate(ue[V],ue[$],ue[ot],ue[Dt]),E=V,T=$,L=ot,w=Dt),(ce.equals(A)===!1||Ee!==P)&&(s.blendColor(ce.r,ce.g,ce.b,Ee),A.copy(ce),P=Ee),m=D,y=!1}function ke(D,nt){D.side===Be?bt(s.CULL_FACE):rt(s.CULL_FACE);let V=D.side===Pe;nt&&(V=!V),kt(V),D.blending===Jn&&D.transparent===!1?N(In):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){_!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),_=D)}function Ht(D){D!==hc?(rt(s.CULL_FACE),D!==C&&(D===no?s.cullFace(s.BACK):D===uc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),C=D}function Et(D){D!==F&&(W&&s.lineWidth(D),F=D)}function se(D,nt,V){D?(rt(s.POLYGON_OFFSET_FILL),(O!==nt||H!==V)&&(s.polygonOffset(nt,V),O=nt,H=V)):bt(s.POLYGON_OFFSET_FILL)}function St(D){D?rt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+X-1),st!==D&&(s.activeTexture(D),st=D)}function M(D,nt,V){V===void 0&&(st===null?V=s.TEXTURE0+X-1:V=st);let $=ut[V];$===void 0&&($={type:void 0,texture:void 0},ut[V]=$),($.type!==D||$.texture!==nt)&&(st!==V&&(s.activeTexture(V),st=V),s.bindTexture(D,nt||xt[D]),$.type=D,$.texture=nt)}function B(){const D=ut[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function pt(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Vt(D,nt){let V=c.get(nt);V===void 0&&(V=new WeakMap,c.set(nt,V));let $=V.get(D);$===void 0&&($=s.getUniformBlockIndex(nt,D.name),V.set(D,$))}function Nt(D,nt){const $=c.get(nt).get(D);l.get(nt)!==$&&(s.uniformBlockBinding(nt,$,D.__bindingPointIndex),l.set(nt,$))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,T=null,v=null,L=null,w=null,A=new ct(0,0,0),P=0,y=!1,_=null,C=null,F=null,O=null,H=null,ee.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:oe,setBlending:N,setMaterial:ke,setFlipSided:kt,setCullFace:Ht,setLineWidth:Et,setPolygonOffset:se,setScissorTest:St,activeTexture:b,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:J,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:At,viewport:pt,reset:ne}}function Qo(s,t,e,n){const i=dm(n);switch(e){case Ul:return s*t;case Fl:return s*t;case Ol:return s*t*2;case Fa:return s*t/i.components*i.byteLength;case Oa:return s*t/i.components*i.byteLength;case Bl:return s*t*2/i.components*i.byteLength;case Ba:return s*t*2/i.components*i.byteLength;case Nl:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case za:return s*t*4/i.components*i.byteLength;case Ys:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $s:case js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(s,16)*Math.max(t,8)/4;case Qr:case ea:return Math.max(s,8)*Math.max(t,8)/2;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _a:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case va:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zs:case Ma:case ya:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zl:case Sa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ea:case Ta:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(s){switch(s){case Sn:case Ll:return{byteLength:1,components:1};case ls:case Dl:case cs:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case Qn:case Ia:case sn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function fm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):tr("canvas")}function x(b,M,B){let K=1;const j=St(b);if((j.width>B||j.height>B)&&(K=B/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(K*j.width),vt=Math.floor(K*j.height);f===void 0&&(f=g(q,vt));const at=M?g(q,vt):f;return at.width=q,at.height=vt,at.getContext("2d").drawImage(b,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+vt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(b,M,B,K,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=M;if(M===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),M===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),M===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),M===s.RGBA){const vt=j?ir:Xt.getTransfer(K);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=vt===Qt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(b,M){let B;return b?M===null||M===Qn||M===Ii?B=s.DEPTH24_STENCIL8:M===sn?B=s.DEPTH32F_STENCIL8:M===ls&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qn||M===Ii?B=s.DEPTH_COMPONENT24:M===sn?B=s.DEPTH_COMPONENT32F:M===ls&&(B=s.DEPTH_COMPONENT16),B}function L(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ze&&b.minFilter!==Xe?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){const M=b.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&h.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),_(M)}function P(b){const M=n.get(b);if(M.__webglInit===void 0)return;const B=b.source,K=u.get(B);if(K){const j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(b),Object.keys(K).length===0&&u.delete(B)}n.remove(b)}function y(b){const M=n.get(b);s.deleteTexture(M.__webglTexture);const B=b.source,K=u.get(B);delete K[M.__cacheKey],a.memory.textures--}function _(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(M.__webglFramebuffer[K][j]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,j=B.length;K<j;K++){const q=n.get(B[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(b)}let C=0;function F(){C=0}function O(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function X(b,M){const B=n.get(b);if(b.isVideoTexture&&Et(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,b,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function W(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function Z(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function G(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){tt(B,b,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const st={[Di]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},ut={[ze]:s.NEAREST,[Bc]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},yt={[Vc]:s.NEVER,[Kc]:s.ALWAYS,[Gc]:s.LESS,[Hl]:s.LEQUAL,[Wc]:s.EQUAL,[Yc]:s.GEQUAL,[Xc]:s.GREATER,[qc]:s.NOTEQUAL};function Ot(b,M){if(M.type===sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xe||M.magFilter===or||M.magFilter===ps||M.magFilter===Zn||M.minFilter===Xe||M.minFilter===or||M.minFilter===ps||M.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,st[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,st[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,st[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ut[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==ps&&M.minFilter!==Zn||M.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const K=M.source;let j=u.get(K);j===void 0&&(j={},u.set(K,j));const q=H(M);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[q].usedTimes++;const vt=j[b.__cacheKey];vt!==void 0&&(j[b.__cacheKey].usedTimes--,vt.usedTimes===0&&y(M)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return B}function Y(b,M,B){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);const j=ee(b,M),q=M.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+B);const vt=n.get(q);if(q.version!==vt.__version||j===!0){e.activeTexture(s.TEXTURE0+B);const at=Xt.getPrimaries(Xt.workingColorSpace),dt=M.colorSpace===Dn?null:Xt.getPrimaries(M.colorSpace),Wt=M.colorSpace===Dn||at===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=x(M.image,!1,i.maxTextureSize);J=se(M,J);const ft=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type);let At=T(M.internalFormat,ft,Tt,M.colorSpace,M.isVideoTexture);Ot(K,M);let pt;const Vt=M.mipmaps,Nt=M.isVideoTexture!==!0,ne=vt.__version===void 0||j===!0,D=q.dataReady,nt=L(M,J);if(M.isDepthTexture)At=v(M.format===Ui,M.type),ne&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,At,J.width,J.height,0,ft,Tt,null));else if(M.isDataTexture)if(Vt.length>0){Nt&&ne&&e.texStorage2D(s.TEXTURE_2D,nt,At,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,V,At,pt.width,pt.height,0,ft,Tt,pt.data);M.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(s.TEXTURE_2D,nt,At,J.width,J.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,ft,Tt,J.data)):e.texImage2D(s.TEXTURE_2D,0,At,J.width,J.height,0,ft,Tt,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,At,Vt[0].width,Vt[0].height,J.depth);for(let V=0,$=Vt.length;V<$;V++)if(pt=Vt[V],M.format!==tn)if(ft!==null)if(Nt){if(D)if(M.layerUpdates.size>0){const ht=Qo(pt.width,pt.height,M.format,M.type);for(const ot of M.layerUpdates){const Dt=pt.data.subarray(ot*ht/pt.data.BYTES_PER_ELEMENT,(ot+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ot,pt.width,pt.height,1,ft,Dt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,J.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,J.depth,ft,Tt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,At,pt.width,pt.height,J.depth,0,ft,Tt,pt.data)}else{Nt&&ne&&e.texStorage2D(s.TEXTURE_2D,nt,At,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],M.format!==tn?ft!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,V,At,pt.width,pt.height,0,ft,Tt,pt.data)}else if(M.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,At,J.width,J.height,J.depth),D)if(M.layerUpdates.size>0){const V=Qo(J.width,J.height,M.format,M.type);for(const $ of M.layerUpdates){const ht=J.data.subarray($*V/J.data.BYTES_PER_ELEMENT,($+1)*V/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ft,Tt,ht)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Tt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,ft,Tt,J.data);else if(M.isData3DTexture)Nt?(ne&&e.texStorage3D(s.TEXTURE_3D,nt,At,J.width,J.height,J.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Tt,J.data)):e.texImage3D(s.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,ft,Tt,J.data);else if(M.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(s.TEXTURE_2D,nt,At,J.width,J.height);else{let V=J.width,$=J.height;for(let ht=0;ht<nt;ht++)e.texImage2D(s.TEXTURE_2D,ht,At,V,$,0,ft,Tt,null),V>>=1,$>>=1}}else if(Vt.length>0){if(Nt&&ne){const V=St(Vt[0]);e.texStorage2D(s.TEXTURE_2D,nt,At,V.width,V.height)}for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft,Tt,pt):e.texImage2D(s.TEXTURE_2D,V,At,ft,Tt,pt);M.generateMipmaps=!1}else if(Nt){if(ne){const V=St(J);e.texStorage2D(s.TEXTURE_2D,nt,At,V.width,V.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Tt,J)}else e.texImage2D(s.TEXTURE_2D,0,At,ft,Tt,J);m(M)&&d(K),vt.__version=q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function tt(b,M,B){if(M.image.length!==6)return;const K=ee(b,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+B);const q=n.get(j);if(j.version!==q.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const vt=Xt.getPrimaries(Xt.workingColorSpace),at=M.colorSpace===Dn?null:Xt.getPrimaries(M.colorSpace),dt=M.colorSpace===Dn||vt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!J?ft[$]=x(M.image[$],!0,i.maxCubemapSize):ft[$]=J?M.image[$].image:M.image[$],ft[$]=se(M,ft[$]);const Tt=ft[0],At=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),Vt=T(M.internalFormat,At,pt,M.colorSpace),Nt=M.isVideoTexture!==!0,ne=q.__version===void 0||K===!0,D=j.dataReady;let nt=L(M,Tt);Ot(s.TEXTURE_CUBE_MAP,M);let V;if(Wt){Nt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Vt,Tt.width,Tt.height);for(let $=0;$<6;$++){V=ft[$].mipmaps;for(let ht=0;ht<V.length;ht++){const ot=V[ht];M.format!==tn?At!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ot.width,ot.height,At,pt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ot.width,ot.height,0,At,pt,ot.data)}}}else{if(V=M.mipmaps,Nt&&ne){V.length>0&&nt++;const $=St(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(J){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,At,pt,ft[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,ft[$].width,ft[$].height,0,At,pt,ft[$].data);for(let ht=0;ht<V.length;ht++){const Dt=V[ht].image[$].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Dt.width,Dt.height,At,pt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Dt.width,Dt.height,0,At,pt,Dt.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,pt,ft[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,At,pt,ft[$]);for(let ht=0;ht<V.length;ht++){const ot=V[ht];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,At,pt,ot.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,At,pt,ot.image[$])}}}m(M)&&d(s.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function xt(b,M,B,K,j,q){const vt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),dt=T(B.internalFormat,vt,at,B.colorSpace),Wt=n.get(M),J=n.get(B);if(J.__renderTarget=M,!Wt.__hasExternalTextures){const ft=Math.max(1,M.width>>q),Tt=Math.max(1,M.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,q,dt,ft,Tt,M.depth,0,vt,at,null):e.texImage2D(j,q,dt,ft,Tt,0,vt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Ht(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,J.__webglTexture,0,kt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,J.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(b,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,q=v(M.stencilBuffer,j),vt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=kt(M);Ht(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,b)}else{const K=M.textures;for(let j=0;j<K.length;j++){const q=K[j],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),dt=T(q.internalFormat,vt,at,q.colorSpace),Wt=kt(M);B&&Ht(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,dt,M.width,M.height):Ht(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const j=K.__webglTexture,q=kt(M);if(M.depthTexture.format===wi)Ht(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ui)Ht(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const M=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=K}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=s.createRenderbuffer(),rt(M.__webglDepthbuffer[K],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),rt(M.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(b,M,B){const K=n.get(b);M!==void 0&&xt(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Pt(b)}function oe(b){const M=b.texture,B=n.get(b),K=n.get(M);b.addEventListener("dispose",A);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let dt=0;dt<M.mipmaps.length;dt++)B.__webglFramebuffer[at][dt]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(vt)for(let at=0,dt=j.length;at<dt;at++){const Wt=n.get(j[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const dt=j[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Wt=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),ft=T(dt.internalFormat,Wt,J,dt.colorSpace,b.isXRRenderTarget===!0),Tt=kt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)xt(B.__webglFramebuffer[at][dt],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else xt(B.__webglFramebuffer[at],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(M)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,dt=j.length;at<dt;at++){const Wt=j[at],J=n.get(Wt);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),Ot(s.TEXTURE_2D,Wt),xt(B.__webglFramebuffer,b,Wt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Wt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Ot(at,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)xt(B.__webglFramebuffer[dt],b,M,s.COLOR_ATTACHMENT0,at,dt);else xt(B.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,at,0);m(M)&&d(at),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Gt(b){const M=b.textures;for(let B=0,K=M.length;B<K;B++){const j=M[B];if(m(j)){const q=E(b),vt=n.get(j).__webglTexture;e.bindTexture(q,vt),d(q),e.unbindTexture()}}}const ue=[],N=[];function ke(b){if(b.samples>0){if(Ht(b)===!1){const M=b.textures,B=b.width,K=b.height;let j=s.COLOR_BUFFER_BIT;const q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(b),at=M.length>1;if(at)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,j,s.NEAREST),l===!0&&(ue.length=0,N.length=0,ue.push(s.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ue.push(q),N.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function kt(b){return Math.min(i.maxSamples,b.samples)}function Ht(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Et(b){const M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function se(b,M){const B=b.colorSpace,K=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Bi&&B!==Dn&&(Xt.getTransfer(B)===Qt?(K!==tn||j!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function St(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function pm(s,t){function e(n,i=Dn){let r;const a=Xt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===Ua)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return s.BYTE;if(n===Dl)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===Ia)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===cs)return s.HALF_FLOAT;if(n===Ul)return s.ALPHA;if(n===Nl)return s.RGB;if(n===tn)return s.RGBA;if(n===Fl)return s.LUMINANCE;if(n===Ol)return s.LUMINANCE_ALPHA;if(n===wi)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===Fa)return s.RED;if(n===Oa)return s.RED_INTEGER;if(n===Bl)return s.RG;if(n===Ba)return s.RG_INTEGER;if(n===za)return s.RGBA_INTEGER;if(n===Ys||n===Ks||n===$s||n===js)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Sa||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class mm extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:_m,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends zi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const x=new vm,m=e.getContextAttributes();let d=null,E=null;const T=[],v=[],L=new Ct;let w=null;const A=new Ie;A.viewport=new te;const P=new Ie;P.viewport=new te;const y=[A,P],_=new mm;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Ur,T[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Ur,T[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Ur,T[Y]=tt),tt.getHandSpace()};function O(Y){const tt=v.indexOf(Y.inputSource);if(tt===-1)return;const xt=T[tt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<T.length;Y++){const tt=v[Y];tt!==null&&(v[Y]=null,T[Y].disconnect(tt))}C=null,F=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,i=null,E=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ti(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,xt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Ui:wi,xt=m.stencil?Ii:Qn);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ti(u.textureWidth,u.textureHeight,{format:tn,type:Sn,depthTexture:new Ql(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let tt=0;tt<Y.removed.length;tt++){const xt=Y.removed[tt],rt=v.indexOf(xt);rt>=0&&(v[rt]=null,T[rt].disconnect(xt))}for(let tt=0;tt<Y.added.length;tt++){const xt=Y.added[tt];let rt=v.indexOf(xt);if(rt===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=v.length){v.push(xt),rt=Pt;break}else if(v[Pt]===null){v[Pt]=xt,rt=Pt;break}if(rt===-1)break}const bt=T[rt];bt&&bt.connect(xt)}}const W=new R,Z=new R;function G(Y,tt,xt){W.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const rt=W.distanceTo(Z),bt=tt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Bt=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],ke=(Pt[8]+1)/Pt[0],kt=Bt*N,Ht=Bt*ke,Et=rt/(-N+ke),se=Et*-N;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(se),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=Bt+Et,b=oe+Et,M=kt-se,B=Ht+(rt-se),K=Gt*oe/b*St,j=ue*oe/b*St;Y.projectionMatrix.makePerspective(M,B,K,j,St,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,xt=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),_.near=P.near=A.near=tt,_.far=P.far=A.far=xt,(C!==_.near||F!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,F=_.far),A.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,_.layers.mask=A.layers.mask|P.layers.mask;const rt=Y.parent,bt=_.cameras;st(_,rt);for(let Pt=0;Pt<bt.length;Pt++)st(bt[Pt],rt);bt.length===2?G(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),ut(Y,_,rt)};function ut(Y,tt,xt){xt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ni*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let yt=null;function Ot(Y,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Pt=0;Pt<xt.length;Pt++){const Bt=xt[Pt];let oe=null;if(p!==null)oe=p.getViewport(Bt);else{const ue=f.getViewSubImage(u,Bt);oe=ue.viewport,Pt===0&&(t.setRenderTargetTextures(E,ue.colorTexture,u.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(E))}let Gt=y[Pt];Gt===void 0&&(Gt=new Ie,Gt.layers.enable(Pt),Gt.viewport=new te,y[Pt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),Pt===0&&(_.matrix.copy(Gt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Gt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Pt=f.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,i.renderState)}}for(let xt=0;xt<T.length;xt++){const rt=v[xt],bt=T[xt];rt!==null&&bt!==void 0&&bt.update(rt,tt,c||a)}yt&&yt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ee=new Zl;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}}const Hn=new qe,ym=new Yt;function Sm(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,E,T,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Hn.copy(v),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(Hn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Em(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const v=T.program;n.uniformBlockBinding(E,v)}function c(E,T){let v=i[E.id];v===void 0&&(g(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",m));const L=T.program;n.updateUBOMapping(E,L);const w=t.render.frame;r[E.id]!==w&&(u(E),r[E.id]=w)}function h(E){const T=f();E.__bindingPointIndex=T;const v=s.createBuffer(),L=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,L,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,v),v}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const T=i[E.id],v=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,A=v.length;w<A;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,_=P.length;y<_;y++){const C=P[y];if(p(C,w,y,L)===!0){const F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let X=0;X<O.length;X++){const W=O[X],Z=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,T,v,L){const w=E.value,A=T+"_"+v;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const P=L[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return L[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const T=E.uniforms;let v=0;const L=16;for(let A=0,P=T.length;A<P;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let _=0,C=y.length;_<C;_++){const F=y[_],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=O.length;H<X;H++){const W=O[H],Z=x(W),G=v%L,st=G%Z.boundary,ut=G+st;v+=st,ut!==0&&L-ut<Z.storage&&(v+=L-ut),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Z.storage}}}const w=v%L;return w>0&&(v+=L-w),E.__size=v,E.__cache={},this}function x(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Tm{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let L=!1,w=0,A=0,P=null,y=-1,_=null;const C=new te,F=new te;let O=null;const H=new ct(0);let X=0,W=e.width,Z=e.height,G=1,st=null,ut=null;const yt=new te(0,0,W,Z),Ot=new te(0,0,W,Z);let ee=!1;const Y=new Ga;let tt=!1,xt=!1;const rt=new Yt,bt=new Yt,Pt=new R,Bt=new te,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ue(){return P===null?G:1}let N=n;function ke(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I="webgl2";if(N=ke(I,S),N===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Ht,Et,se,St,b,M,B,K,j,q,vt,at,dt,Wt,J,ft,Tt,At,pt,Vt,Nt,ne,D;function nt(){kt=new Cf(N),kt.init(),Nt=new pm(N,kt),Ht=new Ef(N,kt,t,Nt),Et=new um(N,kt),Ht.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),se=new Df(N),St=new jp,b=new fm(N,kt,Et,St,Ht,Nt,se),M=new bf(v),B=new Rf(v),K=new Bh(N),ne=new yf(N,K),j=new Pf(N,K,se,ne),q=new Uf(N,j,K,se),At=new If(N,Ht,b),J=new Tf(St),vt=new $p(v,M,B,kt,Ht,ne,J),at=new Sm(v,St),dt=new Jp,Wt=new sm(kt),Tt=new Mf(v,M,B,Et,q,p,l),ft=new cm(v,q,Ht),D=new Em(N,se,Ht,Et),pt=new Sf(N,kt,se),Vt=new Lf(N,kt,se),se.programs=vt.programs,v.capabilities=Ht,v.extensions=kt,v.properties=St,v.renderLists=dt,v.shadowMap=ft,v.state=Et,v.info=se}nt();const V=new Mm(v,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(W,Z,!1))},this.getSize=function(S){return S.set(W,Z)},this.setSize=function(S,I,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Z=I,e.width=Math.floor(S*G),e.height=Math.floor(I*G),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(W*G,Z*G).floor()},this.setDrawingBufferSize=function(S,I,z){W=S,Z=I,G=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,I,z,k){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,I,z,k),Et.viewport(C.copy(yt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,I,z,k){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,I,z,k),Et.scissor(F.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){Et.setScissorTest(ee=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(S=!0,I=!0,z=!0){let k=0;if(S){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===za||Q===Ba||Q===Oa}if(U){const Q=P.texture.type,lt=Q===Sn||Q===Qn||Q===ls||Q===Ii||Q===Ua||Q===Na,mt=Tt.getClearColor(),gt=Tt.getClearAlpha(),Rt=mt.r,It=mt.g,_t=mt.b;lt?(g[0]=Rt,g[1]=It,g[2]=_t,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Rt,x[1]=It,x[2]=_t,x[3]=gt,N.clearBufferiv(N.COLOR,0,x))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Wt.dispose(),St.dispose(),M.dispose(),B.dispose(),q.dispose(),ne.dispose(),D.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ka),V.removeEventListener("sessionend",$a),Nn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=se.autoReset,I=ft.enabled,z=ft.autoUpdate,k=ft.needsUpdate,U=ft.type;nt(),se.autoReset=S,ft.enabled=I,ft.autoUpdate=z,ft.needsUpdate=k,ft.type=U}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Dt(S){const I=S.target;I.removeEventListener("dispose",Dt),ce(I)}function ce(S){Ee(S),St.remove(S)}function Ee(S){const I=St.get(S).programs;I!==void 0&&(I.forEach(function(z){vt.releaseProgram(z)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,k,U,Q){I===null&&(I=oe);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=oc(S,I,z,k,U);Et.setMaterial(k,lt);let gt=z.index,Rt=1;if(k.wireframe===!0){if(gt=j.getWireframeAttribute(z),gt===void 0)return;Rt=2}const It=z.drawRange,_t=z.attributes.position;let qt=It.start*Rt,ie=(It.start+It.count)*Rt;Q!==null&&(qt=Math.max(qt,Q.start*Rt),ie=Math.min(ie,(Q.start+Q.count)*Rt)),gt!==null?(qt=Math.max(qt,0),ie=Math.min(ie,gt.count)):_t!=null&&(qt=Math.max(qt,0),ie=Math.min(ie,_t.count));const re=ie-qt;if(re<0||re===1/0)return;ne.setup(U,k,mt,z,gt);let Le,Kt=pt;if(gt!==null&&(Le=K.get(gt),Kt=Vt,Kt.setIndex(Le)),U.isMesh)k.wireframe===!0?(Et.setLineWidth(k.wireframeLinewidth*ue()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*ue()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,cn=U._multiDrawCounts,$t=U._multiDrawCount,Ke=gt?K.get(gt).bytesPerElement:1,ri=St.get(k).currentProgram.getUniforms();for(let Ue=0;Ue<$t;Ue++)ri.setValue(N,"_gl_DrawID",Ue),Kt.render(Mt[Ue]/Ke,cn[Ue])}else if(U.isInstancedMesh)Kt.renderInstances(qt,re,U.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,cn=Math.min(z.instanceCount,Mt);Kt.renderInstances(qt,re,cn)}else Kt.render(qt,re)};function jt(S,I,z){S.transparent===!0&&S.side===Be&&S.forceSinglePass===!1?(S.side=Pe,S.needsUpdate=!0,fs(S,I,z),S.side=yn,S.needsUpdate=!0,fs(S,I,z),S.side=Be):fs(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),d=Wt.get(z),d.init(I),T.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),S!==z&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const mt=Q[lt];jt(mt,z,U),k.add(mt)}else jt(Q,z,U),k.add(Q)}),T.pop(),d=null,k},this.compileAsync=function(S,I,z=null){const k=this.compile(S,I,z);return new Promise(U=>{function Q(){if(k.forEach(function(lt){St.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(S);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ye=null;function ln(S){Ye&&Ye(S)}function Ka(){Nn.stop()}function $a(){Nn.start()}const Nn=new Zl;Nn.setAnimationLoop(ln),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(S){Ye=S,V.setAnimationLoop(S),S===null?Nn.stop():Nn.start()},V.addEventListener("sessionstart",Ka),V.addEventListener("sessionend",$a),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,P),d=Wt.get(S,T.length),d.init(I),T.push(d),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,xt),m=dt.get(S,E.length),m.init(),E.push(m),V.enabled===!0&&V.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&ar(Q,I,-1/0,v.sortObjects)}ar(S,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ut),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&Tt.addToRenderList(m,S),this.info.render.frame++,tt===!0&&J.beginShadows();const z=d.state.shadowsArray;ft.render(z,S,I),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let lt=0,mt=Q.length;lt<mt;lt++){const gt=Q[lt];Za(k,U,S,gt)}Gt&&Tt.render(S);for(let lt=0,mt=Q.length;lt<mt;lt++){const gt=Q[lt];ja(m,S,gt,gt.viewport)}}else U.length>0&&Za(k,U,S,I),Gt&&Tt.render(S),ja(m,S,I);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,I),ne.resetDefaultState(),y=-1,_=null,T.pop(),T.length>0?(d=T[T.length-1],tt===!0&&J.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ar(S,I,z,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){k&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const lt=q.update(S),mt=S.material;mt.visible&&m.push(S,lt,mt,z,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const lt=q.update(S),mt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,It=gt.length;Rt<It;Rt++){const _t=gt[Rt],qt=mt[_t.materialIndex];qt&&qt.visible&&m.push(S,lt,qt,z,Bt.z,_t)}}else mt.visible&&m.push(S,lt,mt,z,Bt.z,null)}}const Q=S.children;for(let lt=0,mt=Q.length;lt<mt;lt++)ar(Q[lt],I,z,k)}function ja(S,I,z,k){const U=S.opaque,Q=S.transmissive,lt=S.transparent;d.setupLightsView(z),tt===!0&&J.setGlobalState(v.clippingPlanes,z),k&&Et.viewport(C.copy(k)),U.length>0&&ds(U,I,z),Q.length>0&&ds(Q,I,z),lt.length>0&&ds(lt,I,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Za(S,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new ti(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?cs:Sn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[k.id],lt=k.viewport||C;Q.setSize(lt.z,lt.w);const mt=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&Tt.render(z);const gt=v.toneMapping;v.toneMapping=Un;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),tt===!0&&J.setGlobalState(v.clippingPlanes,k),ds(S,z,k),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _t=0,qt=I.length;_t<qt;_t++){const ie=I[_t],re=ie.object,Le=ie.geometry,Kt=ie.material,Mt=ie.group;if(Kt.side===Be&&re.layers.test(k.layers)){const cn=Kt.side;Kt.side=Pe,Kt.needsUpdate=!0,Ja(re,z,k,Le,Kt,Mt),Kt.side=cn,Kt.needsUpdate=!0,It=!0}}It===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}v.setRenderTarget(mt),v.setClearColor(H,X),Rt!==void 0&&(k.viewport=Rt),v.toneMapping=gt}function ds(S,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){const lt=S[U],mt=lt.object,gt=lt.geometry,Rt=k===null?lt.material:k,It=lt.group;mt.layers.test(z.layers)&&Ja(mt,I,z,gt,Rt,It)}}function Ja(S,I,z,k,U,Q){S.onBeforeRender(v,I,z,k,U,Q),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,I,z,k,S,Q),U.transparent===!0&&U.side===Be&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,v.renderBufferDirect(z,I,k,U,S,Q),U.side=yn,U.needsUpdate=!0,v.renderBufferDirect(z,I,k,U,S,Q),U.side=Be):v.renderBufferDirect(z,I,k,U,S,Q),S.onAfterRender(v,I,z,k,U,Q)}function fs(S,I,z){I.isScene!==!0&&(I=oe);const k=St.get(S),U=d.state.lights,Q=d.state.shadowsArray,lt=U.state.version,mt=vt.getParameters(S,U.state,Q,I,z),gt=vt.getProgramCacheKey(mt);let Rt=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?B:M).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",Dt),Rt=new Map,k.programs=Rt);let It=Rt.get(gt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===lt)return to(S,mt),It}else mt.uniforms=vt.getUniforms(S),S.onBeforeCompile(mt,v),It=vt.acquireProgram(mt,gt),Rt.set(gt,It),k.uniforms=mt.uniforms;const _t=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_t.clippingPlanes=J.uniform),to(S,mt),k.needsLights=cc(S),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Qa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function to(S,I){const z=St.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function oc(S,I,z,k,U){I.isScene!==!0&&(I=oe),b.resetTextureUnits();const Q=I.fog,lt=k.isMeshStandardMaterial?I.environment:null,mt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bi,gt=(k.isMeshStandardMaterial?B:M).get(k.envMap||lt),Rt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let re=Un;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=v.toneMapping);const Le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=Le!==void 0?Le.length:0,Mt=St.get(k),cn=d.state.lights;if(tt===!0&&(xt===!0||S!==_)){const He=S===_&&k.id===y;J.setState(k,S,He)}let $t=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==cn.state.version||Mt.outputColorSpace!==mt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==gt||k.fog===!0&&Mt.fog!==Q||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Rt||Mt.vertexTangents!==It||Mt.morphTargets!==_t||Mt.morphNormals!==qt||Mt.morphColors!==ie||Mt.toneMapping!==re||Mt.morphTargetsCount!==Kt)&&($t=!0):($t=!0,Mt.__version=k.version);let Ke=Mt.currentProgram;$t===!0&&(Ke=fs(k,I,U));let ri=!1,Ue=!1,Vi=!1;const ae=Ke.getUniforms(),en=Mt.uniforms;if(Et.useProgram(Ke.program)&&(ri=!0,Ue=!0,Vi=!0),k.id!==y&&(y=k.id,Ue=!0),ri||_!==S){Et.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),fh(rt),ph(rt),ae.setValue(N,"projectionMatrix",rt)):ae.setValue(N,"projectionMatrix",S.projectionMatrix),ae.setValue(N,"viewMatrix",S.matrixWorldInverse);const En=ae.map.cameraPosition;En!==void 0&&En.setValue(N,Pt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&ae.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Ue=!0,Vi=!0)}if(U.isSkinnedMesh){ae.setOptional(N,U,"bindMatrix"),ae.setOptional(N,U,"bindMatrixInverse");const He=U.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ae.setValue(N,"boneTexture",He.boneTexture,b))}U.isBatchedMesh&&(ae.setOptional(N,U,"batchingTexture"),ae.setValue(N,"batchingTexture",U._matricesTexture,b),ae.setOptional(N,U,"batchingIdTexture"),ae.setValue(N,"batchingIdTexture",U._indirectTexture,b),ae.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ae.setValue(N,"batchingColorTexture",U._colorsTexture,b));const Gi=z.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&At.update(U,z,Ke),(Ue||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,ae.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(en.envMap.value=gt,en.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(en.envMapIntensity.value=I.environmentIntensity),Ue&&(ae.setValue(N,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&lc(en,Vi),Q&&k.fog===!0&&at.refreshFogUniforms(en,Q),at.refreshMaterialUniforms(en,k,G,Z,d.state.transmissionRenderTarget[S.id]),Js.upload(N,Qa(Mt),en,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Js.upload(N,Qa(Mt),en,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(N,"center",U.center),ae.setValue(N,"modelViewMatrix",U.modelViewMatrix),ae.setValue(N,"normalMatrix",U.normalMatrix),ae.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const He=k.uniformsGroups;for(let En=0,Tn=He.length;En<Tn;En++){const eo=He[En];D.update(eo,Ke),D.bind(eo,Ke)}}return Ke}function lc(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function cc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,I,z){St.get(S.texture).__webglTexture=I,St.get(S.depthTexture).__webglTexture=z;const k=St.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const z=St.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){P=S,w=I,A=z;let k=!0,U=null,Q=!1,lt=!1;if(S){const gt=St.get(S);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(gt.__hasExternalTextures)b.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const _t=S.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&St.has(_t)&&(S.width!==_t.image.width||S.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const It=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][z]:U=It[I],Q=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?U=St.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[z]:U=It,C.copy(S.viewport),F.copy(S.scissor),O=S.scissorTest}else C.copy(yt).multiplyScalar(G).floor(),F.copy(Ot).multiplyScalar(G).floor(),O=ee;if(Et.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Et.drawBuffers(S,U),Et.viewport(C),Et.scissor(F),Et.setScissorTest(O),Q){const gt=St.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,z)}else if(lt){const gt=St.get(S.texture),Rt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Rt)}y=-1},this.readRenderTargetPixels=function(S,I,z,k,U,Q,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Et.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=S.texture,Rt=gt.format,It=gt.type;if(!Ht.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&z>=0&&z<=S.height-U&&N.readPixels(I,z,k,U,Nt.convert(Rt),Nt.convert(It),Q)}finally{const gt=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,I,z,k,U,Q,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=S.texture,Rt=gt.format,It=gt.type;if(!Ht.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-k&&z>=0&&z<=S.height-U){Et.bindFramebuffer(N.FRAMEBUFFER,mt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(I,z,k,U,Nt.convert(Rt),Nt.convert(It),0);const qt=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,qt);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dh(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(_t),N.deleteSync(ie),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,z=0){S.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(S.image.width*k),Q=Math.floor(S.image.height*k),lt=I!==null?I.x:0,mt=I!==null?I.y:0;b.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,lt,mt,U,Q),Et.unbindTexture()},this.copyTextureToTexture=function(S,I,z=null,k=null,U=0){S.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let Q,lt,mt,gt,Rt,It,_t,qt,ie;const re=S.isCompressedTexture?S.mipmaps[U]:S.image;z!==null?(Q=z.max.x-z.min.x,lt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Rt=z.min.y,It=z.isBox3?z.min.z:0):(Q=re.width,lt=re.height,mt=re.depth||1,gt=0,Rt=0,It=0),k!==null?(_t=k.x,qt=k.y,ie=k.z):(_t=0,qt=0,ie=0);const Le=Nt.convert(I.format),Kt=Nt.convert(I.type);let Mt;I.isData3DTexture?(b.setTexture3D(I,0),Mt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Mt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const cn=N.getParameter(N.UNPACK_ROW_LENGTH),$t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ke=N.getParameter(N.UNPACK_SKIP_PIXELS),ri=N.getParameter(N.UNPACK_SKIP_ROWS),Ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It);const Vi=S.isDataArrayTexture||S.isData3DTexture,ae=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const en=St.get(S),Gi=St.get(I),He=St.get(en.__renderTarget),En=St.get(Gi.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,He.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Tn=0;Tn<mt;Tn++)Vi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(S).__webglTexture,U,It+Tn),S.isDepthTexture?(ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(I).__webglTexture,U,ie+Tn),N.blitFramebuffer(gt,Rt,Q,lt,_t,qt,Q,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ae?N.copyTexSubImage3D(Mt,U,_t,qt,ie+Tn,gt,Rt,Q,lt):N.copyTexSubImage2D(Mt,U,_t,qt,ie+Tn,gt,Rt,Q,lt);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ae?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Mt,U,_t,qt,ie,Q,lt,mt,Le,Kt,re.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,_t,qt,ie,Q,lt,mt,Le,re.data):N.texSubImage3D(Mt,U,_t,qt,ie,Q,lt,mt,Le,Kt,re):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,qt,Q,lt,Le,Kt,re.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,qt,re.width,re.height,Le,re.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,qt,Q,lt,Le,Kt,re);N.pixelStorei(N.UNPACK_ROW_LENGTH,cn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),U===0&&I.generateMipmaps&&N.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z=null,k=null,U=0){return S.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,z,k,U)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,Et.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Xa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new Xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bm extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new R;class er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ge extends ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mi;const Ki=new R,yi=new R,Si=new R,Ei=new Ct,$i=new Ct,sc=new Yt,Ns=new R,ji=new R,Fs=new R,tl=new Ct,Nr=new Ct,el=new Ct;class Je extends fe{constructor(t=new Ge){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wm(e,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new er(n,3,0,!1)),Mi.setAttribute("uv",new er(n,2,3,!1))}this.geometry=Mi,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),sc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Os(Ns.set(-.5,-.5,0),Si,a,yi,i,r),Os(ji.set(.5,-.5,0),Si,a,yi,i,r),Os(Fs.set(.5,.5,0),Si,a,yi,i,r),tl.set(0,0),Nr.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(Ns,ji,Fs,!1,Ki);if(o===null&&(Os(ji.set(-.5,.5,0),Si,a,yi,i,r),Nr.set(0,1),o=t.ray.intersectTriangle(Ns,Fs,ji,!1,Ki),o===null))return;const l=t.ray.origin.distanceTo(Ki);l<t.near||l>t.far||e.push({distance:l,point:Ki.clone(),uv:We.getInterpolation(Ki,Ns,ji,Fs,tl,Nr,el,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Os(s,t,e,n,i,r){Ei.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?($i.x=r*Ei.x-i*Ei.y,$i.y=i*Ei.x+r*Ei.y):$i.copy(Ei),s.copy(t),s.x+=$i.x,s.y+=$i.y,s.applyMatrix4(sc)}class Am extends we{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ze,h=ze,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl extends ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new Yt,il=new Yt,Bs=[],sl=new ni,Rm=new Yt,Zi=new wt,Ji=new ki;class Aa extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),sl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),Ji.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),t.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ti),il.multiplyMatrices(n,Ti),Zi.matrixWorld=il,Zi.raycast(t,Bs);for(let a=0,o=Bs.length;a<o;a++){const l=Bs[a];l.instanceId=r,l.object=this,e.push(l)}Bs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Am(new Float32Array(i*this.count),i,this.count,Fa,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ra extends ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new Yt,Ca=new Ha,zs=new ki,ks=new R;class Pa extends fe{constructor(t=new Se,e=new Ra){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;rl.copy(i).invert(),Ca.copy(t.ray).applyMatrix4(rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);ks.fromBufferAttribute(f,m),al(ks,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,x=p;g<x;g++)ks.fromBufferAttribute(f,g),al(ks,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(s,t,e,n,i,r,a){const o=Ca.distanceSqToPoint(s);if(o<e){const l=new R;Ca.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class si extends we{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ge extends Se{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const x=[],m=n/2;let d=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(p,2));function E(){const v=new R,L=new R;let w=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const y=[],_=P/r,C=_*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,H=O*l+o,X=Math.sin(H),W=Math.cos(H);L.x=C*X,L.y=-_*n+m,L.z=C*W,f.push(L.x,L.y,L.z),v.set(X,A,W).normalize(),u.push(v.x,v.y,v.z),p.push(O,1-_),y.push(g++)}x.push(y)}for(let P=0;P<i;P++)for(let y=0;y<r;y++){const _=x[y][P],C=x[y+1][P],F=x[y+1][P+1],O=x[y][P+1];(t>0||y!==0)&&(h.push(_,C,O),w+=3),(e>0||y!==r-1)&&(h.push(C,F,O),w+=3)}c.addGroup(d,w,0),d+=w}function T(v){const L=g,w=new Ct,A=new R;let P=0;const y=v===!0?t:e,_=v===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const C=g;for(let F=0;F<=i;F++){const H=F/i*l+o,X=Math.cos(H),W=Math.sin(H);A.x=y*W,A.y=m*_,A.z=y*X,f.push(A.x,A.y,A.z),u.push(0,_,0),w.x=X*.5+.5,w.y=W*.5*_+.5,p.push(w.x,w.y),g++}for(let F=0;F<i;F++){const O=L+F,H=C+F;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(d,P,v===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class De extends ge{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new De(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hs extends Se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const T=new R,v=new R,L=new R;for(let w=0;w<e.length;w+=3)p(e[w+0],T),p(e[w+1],v),p(e[w+2],L),l(T,v,L,E)}function l(E,T,v,L){const w=L+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const y=E.clone().lerp(v,P/w),_=T.clone().lerp(v,P/w),C=w-P;for(let F=0;F<=C;F++)F===0&&P===w?A[P][F]=y:A[P][F]=y.clone().lerp(_,F/C)}for(let P=0;P<w;P++)for(let y=0;y<2*(w-P)-1;y++){const _=Math.floor(y/2);y%2===0?(u(A[P][_+1]),u(A[P+1][_]),u(A[P][_])):(u(A[P][_+1]),u(A[P+1][_+1]),u(A[P+1][_]))}}function c(E){const T=new R;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(E),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){const E=new R;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];const v=m(E)/2/Math.PI+.5,L=d(E)/Math.PI+.5;a.push(v,1-L)}g(),f()}function f(){for(let E=0;E<a.length;E+=6){const T=a[E+0],v=a[E+2],L=a[E+4],w=Math.max(T,v,L),A=Math.min(T,v,L);w>.9&&A<.1&&(T<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function p(E,T){const v=E*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function g(){const E=new R,T=new R,v=new R,L=new R,w=new Ct,A=new Ct,P=new Ct;for(let y=0,_=0;y<r.length;y+=9,_+=6){E.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),w.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),L.copy(E).add(T).add(v).divideScalar(3);const C=m(L);x(w,_+0,E,C),x(A,_+2,T,C),x(P,_+4,v,C)}}function x(E,T,v,L){L<0&&E.x===1&&(a[T]=E.x-1),v.x===0&&v.z===0&&(a[T]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.vertices,t.indices,t.radius,t.details)}}class Ri extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ri(t.radius,t.detail)}}class Oi extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oi(t.radius,t.detail)}}class rr extends hs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rr(t.radius,t.detail)}}class qa extends Se{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/i,p=new R,g=new Ct;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let d=0;d<n;d++){const E=d+m,T=E,v=E+n+1,L=E+n+2,w=E+1;o.push(T,v,w),o.push(v,L,w)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class on extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new R,u=new R,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const E=[],T=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const w=L/e;f.x=-t*Math.cos(i+w*r)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(i+w*r)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(w+v,1-T),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const T=h[d][E+1],v=h[d][E],L=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&p.push(T,v,w),(d!==n-1||l<Math.PI)&&p.push(v,L,w)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zt extends ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class us extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cm extends us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fr=new Yt,ol=new R,ll=new R;class Ya{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pm extends Ya{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ni*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Lm extends us{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const cl=new Yt,Qi=new R,Or=new R;class Dm extends Ya{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qi),Or.copy(n.position),Or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Or),n.updateMatrixWorld(),i.makeTranslation(-Qi.x,-Qi.y,-Qi.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl)}}class rs extends us{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Im extends Ya{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Br extends us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Um extends us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hl(){return performance.now()}const ul=new Yt;class Fm{constructor(t,e,n=0,i=1/0){this.ray=new Ha(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ul.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ul),this}intersectObject(t,e=!0,n=[]){return La(t,this,n,e),n.sort(dl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)La(t[i],this,n,e);return n.sort(dl),n}}function dl(s,t){return s.distance-t.distance}function La(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)La(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);new R;const Ln=new Yt,fl=new ei;new R;const pl=new qe;function $n(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Om(s=0,t=1){const e=$n(t*73+s*977),n=document.createElement("canvas");n.width=128,n.height=256;const i=n.getContext("2d");i.fillStyle="#0d1116",i.fillRect(0,0,128,256);const r=18,a=7,o=256/r,l=128/a;for(let f=0;f<r;f++){const u=.25+.5*(f/r);for(let p=0;p<a;p++){const g=e()<.36*u,x=l*(.46+e()*.22),m=o*(.36+e()*.2),d=p*l+(l-x)/2,E=f*o+(o-m)/2;if(g){const T=e()<.67,v=.52+e()*.48,L=T?`rgba(${Math.round(255*v)}, ${Math.round(198*v)}, ${Math.round(110*v)}, 1)`:`rgba(${Math.round(135*v)}, ${Math.round(220*v)}, ${Math.round(255*v)}, 1)`;i.fillStyle=L,i.fillRect(d,E,x,m),e()<.25&&(i.fillStyle="rgba(255,255,255,0.4)",i.fillRect(d,E,x,Math.max(1,m*.16)))}else i.fillStyle=`rgba(42, 54, 64, ${.24+e()*.25})`,i.fillRect(d,E,x,m)}i.fillStyle="rgba(0,0,0,0.16)",i.fillRect(0,f*o+o-1,128,1)}const c=i.createLinearGradient(0,0,0,256);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.7,"rgba(0,0,0,0.12)"),c.addColorStop(1,"rgba(0,0,0,0.44)"),i.fillStyle=c,i.fillRect(0,0,128,256);const h=new si(n);return h.colorSpace=me,h.wrapS=Di,h.wrapT=Di,h.anisotropy=8,h}function zr(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.16,"rgba(255,255,255,0.9)"),e.addColorStop(.42,"rgba(255,255,255,0.26)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new si(s);return n.colorSpace=me,n}function Bm(){const s=document.createElement("canvas");s.width=512,s.height=192;const t=s.getContext("2d"),e=$n(944);t.clearRect(0,0,s.width,s.height);for(let i=0;i<58;i++){const r=30+e()*450,a=60+e()*80,o=22+e()*55,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,`rgba(255,255,255,${.05+e()*.09})`),l.addColorStop(.6,`rgba(255,255,255,${.02+e()*.04})`),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(r-o,a-o,o*2,o*2)}const n=new si(s);return n.colorSpace=me,n}function zm(s,t,e=""){const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.fillStyle="rgba(3,6,9,0.4)",i.fillRect(28,38,200,428),i.strokeStyle=t,i.lineWidth=3,i.strokeRect(34,44,188,416),i.fillStyle=t,i.shadowColor=t,i.shadowBlur=24,i.font="700 45px 'Arial Narrow', sans-serif",i.textAlign="center",s.split("").forEach((o,l)=>{i.fillText(o,128,112+l*51)}),i.shadowBlur=10,i.font="400 12px monospace",i.fillText(e,128,448);const a=new si(n);return a.colorSpace=me,a}class km{constructor(t,e={}){this.scene=t,this.buildings=[],this.cars=[],this.callbacks=e,this.lowPower=!!e.lowPower,this.rand=$n(177013),this.time=0,this.trafficEnabled=!0,this.beaconMaterial=null,this.clouds=[],this.sun=null,this._createSky(),this._createLights(),this._createGround(),this._createCity(),this._createRuins(),this._createTraffic(),this._createAtmosphere(),this._createDistantSkyline()}_createSky(){const t=new on(780,48,32),e=new an({side:Pe,depthWrite:!1,uniforms:{uTop:{value:new ct("#02040a")},uMid:{value:new ct("#101a2c")},uHorizon:{value:new ct("#8a3d37")},uLow:{value:new ct("#d1663f")},uSun:{value:new ct("#ffb36b")},uSunDir:{value:new R(-.42,.09,-.9).normalize()}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTop;
        uniform vec3 uMid;
        uniform vec3 uHorizon;
        uniform vec3 uLow;
        uniform vec3 uSun;
        uniform vec3 uSunDir;
        varying vec3 vWorld;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        void main() {
          vec3 dir = normalize(vWorld);
          float h = dir.y;
          float skyMix = smoothstep(-0.015, 0.62, h);
          vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, h));
          col = mix(col, uTop, smoothstep(0.24, 0.86, h));
          col = mix(col, uLow, smoothstep(-0.03, -0.2, h) * 0.55);

          float sunDot = max(dot(dir, uSunDir), 0.0);
          float disc = pow(sunDot, 720.0);
          float halo = pow(sunDot, 14.0);
          float bloom = pow(sunDot, 3.2);
          col += uSun * disc * 2.2;
          col += uSun * halo * 0.3;
          col += uSun * bloom * 0.08;

          float band = smoothstep(0.0, 0.018, abs(h - 0.012));
          col += vec3(0.18, 0.05, 0.025) * (1.0 - band) * 0.4;

          vec2 starUV = floor(dir.xz * 440.0 / max(0.35, dir.y + 0.2));
          float star = step(0.9986, hash(starUV)) * smoothstep(0.2, 0.8, h);
          col += vec3(0.9, 0.94, 1.0) * star * 0.65;

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new wt(t,e),this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),r=i.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,238,204,1)"),r.addColorStop(.15,"rgba(255,183,107,0.88)"),r.addColorStop(.45,"rgba(255,110,58,0.18)"),r.addColorStop(1,"rgba(255,90,40,0)"),i.fillStyle=r,i.fillRect(0,0,128,128);const a=new si(n);a.colorSpace=me,this.sun=new Je(new Ge({map:a,color:"#ffd3a0",transparent:!0,blending:de,depthWrite:!1,fog:!1})),this.sun.scale.set(170,170,1),this.sun.position.set(-300,80,-600),this.scene.add(this.sun)}_createLights(){this.scene.fog=new Xa(1383206,.00195);const t=new Cm(7309485,3349779,2.15);this.scene.add(t);const e=new Br(16757626,2.4);e.position.set(-180,140,-180),e.castShadow=!0,e.shadow.mapSize.set(this.lowPower?1024:2048,this.lowPower?1024:2048),e.shadow.camera.left=-250,e.shadow.camera.right=250,e.shadow.camera.top=250,e.shadow.camera.bottom=-250,e.shadow.camera.near=20,e.shadow.camera.far=600,e.shadow.bias=-35e-5,e.shadow.normalBias=.45,this.scene.add(e),this.keyLight=e;const n=new Br(6074111,1.6);n.position.set(120,80,200),this.scene.add(n);const i=new Br(12175583,1.05);i.position.set(60,55,260),this.scene.add(i);const r=new Um(16739133,.24);this.scene.add(r),this.flashLight=new rs(16742965,0,90,2),this.flashLight.position.set(0,25,0),this.scene.add(this.flashLight)}_createGround(){const t=new wt(new rn(1300,1300),new Zt({color:527118,roughness:.93,metalness:.08}));t.rotation.x=-Math.PI/2,t.position.y=-.02,t.receiveShadow=!0,this.scene.add(t);const e=new wt(new rn(25,500),new Zt({color:790549,roughness:.88,metalness:.1}));e.rotation.x=-Math.PI/2,e.position.y=.005,e.receiveShadow=!0,this.scene.add(e);const n=new wt(new rn(500,25),new Zt({color:724756,roughness:.88,metalness:.1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.receiveShadow=!0,this.scene.add(n),this._createRoadMarkings();const i=[0,1,2,3,4,5,6,7].map(r=>Om(r,r+2));this.windowTextures=i,this.blockMaterial=new Zt({color:1383201,roughness:.94,metalness:.03}),this.sidewalkMaterial=new Zt({color:1712166,roughness:.92,metalness:.06}),this.wallMaterials=[new Zt({color:8160654,roughness:.72,metalness:.12}),new Zt({color:7173760,roughness:.78,metalness:.08}),new Zt({color:5332070,roughness:.68,metalness:.18}),new Zt({color:9076595,roughness:.8,metalness:.06})],this.roofMaterial=new Zt({color:1185564,roughness:.88}),this.metalMaterial=new Zt({color:3291714,roughness:.52,metalness:.65})}_createRoadMarkings(){const t=new Lt(.24,.03,3.2),e=new le({color:11969920}),n=new le({color:16742973}),i=900,r=new Aa(t,e,i);let a=0;const o=[-246,-198,-150,-102,-54,0,54,102,150,198,246];for(const f of o){const u=f===0;for(let p=-246;p<=246&&!(a>=i);p+=13)!u&&Math.abs(p%54)<15||(Ln.makeTranslation(f+(u?0:4.2),.03,p),r.setMatrixAt(a++,Ln))}for(const f of o){const u=f===0;for(let p=-246;p<=246&&!(a>=i);p+=13)!u&&Math.abs(p%54)<15||(pl.set(0,Math.PI/2,0),fl.setFromEuler(pl),Ln.compose(new R(p,.031,f+(u?0:4.2)),fl,new R(1,1,1)),r.setMatrixAt(a++,Ln))}r.count=a,r.instanceMatrix.needsUpdate=!0,this.scene.add(r);const l=new Lt(.08,.05,3),c=new Aa(l,n,300);let h=0;for(let f=-238;f<=238&&!(h>=300);f+=9)Ln.makeTranslation(-11.4,.04,f),c.setMatrixAt(h++,Ln),h<300&&(Ln.makeTranslation(11.4,.04,f),c.setMatrixAt(h++,Ln));c.count=h,c.instanceMatrix.needsUpdate=!0,this.scene.add(c)}_createCity(){const t=[];for(let l=-5;l<=5;l++)for(let c=-5;c<=5;c++){if(l===0||c===0)continue;const h=Math.sign(l)*(30+(Math.abs(l)-1)*48),f=Math.sign(c)*(30+(Math.abs(c)-1)*48);t.push({cx:h,cz:f,ix:l,iz:c})}for(let l=0;l<44;l++){const c=Math.floor(this.rand()*4),h=(this.rand()-.5)*520,f=270+this.rand()*60,u=c<2?h:(c===2?-1:1)*f,p=c<2?(c===0?-1:1)*f:h;t.push({cx:u,cz:p,ix:99,iz:99,outer:!0})}const e=new Lt(36,1.2,36),n=new Lt(37.4,.24,37.4),i=new Lt(1,1,1),r=new ge(.12,.22,1,5),a=[];for(const l of t){if(l.outer){const g=new wt(e,this.blockMaterial);g.position.set(l.cx,.6,l.cz),g.receiveShadow=!0,this.scene.add(g);const x=new wt(n,this.sidewalkMaterial);x.position.set(l.cx,1.16,l.cz),x.receiveShadow=!0,this.scene.add(x),this.rand()<.7&&this._addBuilding(l.cx,l.cz,this.rand()*8+4,10+this.rand()*30,i,r,a,!0);continue}const c=new wt(e,this.blockMaterial);c.position.set(l.cx,.6,l.cz),c.receiveShadow=!0,this.scene.add(c);const h=new wt(n,this.sidewalkMaterial);h.position.set(l.cx,1.17,l.cz),h.receiveShadow=!0,this.scene.add(h);const f=Math.hypot(l.cx,l.cz),u=f<110?1.35:f>185?.66:1,p=this.rand();if(p<.17)this.rand()<.55&&this._addBuilding(l.cx+(this.rand()-.5)*7,l.cz+(this.rand()-.5)*7,8+this.rand()*7,7+this.rand()*12*u,i,r,a),this._addPlazaProp(l.cx,l.cz);else if(p<.55)this._addBuilding(l.cx+(this.rand()-.5)*5,l.cz+(this.rand()-.5)*5,20+this.rand()*8,(22+this.rand()*35)*u,i,r,a);else{const g=this.rand()<.5,x=7.6,m=g?15.5:23.5;this._addBuilding(l.cx+(g?-x:0),l.cz+(g?0:-x),m,(16+this.rand()*28)*u,i,r,a),this._addBuilding(l.cx+(g?x:0),l.cz+(g?0:x),14+this.rand()*6,(10+this.rand()*23)*u,i,r,a)}this.rand()<.3&&this._addNeon(l)}const o=new Se;o.setAttribute("position",new _e(a.flat(),3)),this.beaconMaterial=new Ra({color:16726570,size:1.65,sizeAttenuation:!0,transparent:!0,opacity:.8,blending:de,depthWrite:!1,map:zr(),alphaTest:.04}),this.beacons=new Pa(o,this.beaconMaterial),this.scene.add(this.beacons),this._createStreetLights(),this._createSearchlight()}_createRuins(){this.fires=[];const t=this.buildings.filter(r=>Math.abs(r.x)>18&&Math.abs(r.x)<95&&r.z>-165&&r.z<150&&r.height>16);if(!t.length)return;const e=zr(),n=5;for(let r=0;r<n&&t.length;r++){const a=Math.floor(this.rand()*t.length),o=t.splice(a,1)[0];o.hp=0,this._destroyBuilding(o);const l=7+this.rand()*7,c=new Je(new Ge({map:e,color:r%3===0?16765066:16738860,transparent:!0,opacity:.72,blending:de,depthWrite:!1,fog:!1}));c.position.set(o.x+(this.rand()-.5)*5,4.5+this.rand()*3.5,o.z+(this.rand()-.5)*5),c.scale.set(l,l*.82,1),this.scene.add(c);const h=new Je(new Ge({map:e,color:16769446,transparent:!0,opacity:.6,blending:de,depthWrite:!1,fog:!1}));if(h.position.copy(c.position).add(new R(0,1.2,.2)),h.scale.set(l*.36,l*.46,1),this.scene.add(h),r<2&&!this.lowPower){const f=new rs(16741432,18,55,2);f.position.copy(c.position).add(new R(0,4,0)),this.scene.add(f)}this.fires.push({sprite:c,core:h,x:c.position.x,y:c.position.y,z:c.position.z,base:l,phase:this.rand()*Math.PI*2})}const i=[[-8,5.5,58,13],[8,6.5,-14,11],[-7,5.5,-96,14],[9,7,-152,10]];for(let r=0;r<i.length;r++){const[a,o,l,c]=i[r],h=new Je(new Ge({map:e,color:r%2===0?16741424:16752718,transparent:!0,opacity:.78,blending:de,depthWrite:!1,fog:!1}));h.position.set(a,o,l),h.scale.set(c,c*.85,1),this.scene.add(h);const f=new Je(new Ge({map:e,color:16771512,transparent:!0,opacity:.65,blending:de,depthWrite:!1,fog:!1}));f.position.set(a,o+1,l+.3),f.scale.set(c*.34,c*.44,1),this.scene.add(f),this.fires.push({sprite:h,core:f,x:a,y:o,z:l,base:c,phase:this.rand()*Math.PI*2})}for(let r=0;r<3&&t.length;r++){let a=0;for(let x=1;x<t.length;x++)t[x].height>t[a].height&&(a=x);const o=t.splice(a,1)[0];if(o.height<26)break;const l=7+this.rand()*6,c=new Je(new Ge({map:e,color:16743476,transparent:!0,opacity:.62,blending:de,depthWrite:!1,fog:!1})),h=o.x+(this.rand()-.5)*o.width*.55,f=1.28+o.height*(.52+this.rand()*.2),u=o.z+o.depth/2+.45;c.position.set(h,f,u),c.scale.set(l,l*.8,1),this.scene.add(c);const p=new Je(new Ge({map:e,color:16768162,transparent:!0,opacity:.55,blending:de,depthWrite:!1,fog:!1}));p.position.set(h,f+.8,u+.2),p.scale.set(l*.32,l*.4,1),this.scene.add(p);const g=new rs(16738864,26,70,2);g.position.set(h,f+5,u+2),this.lowPower||this.scene.add(g),this.fires.push({sprite:c,core:p,x:h,y:f,z:u,base:l,phase:this.rand()*Math.PI*2})}}_addBuilding(t,e,n,i,r,a,o,l=!1){n=Math.max(6,Math.min(27,n)),i=Math.max(6,i);const c=n*(.68+this.rand()*.5),h=Math.floor(this.rand()*this.windowTextures.length),f=this.windowTextures[h].clone();f.needsUpdate=!0,f.wrapS=f.wrapT=Di,f.repeat.set(Math.max(1,Math.round(n/6.5)),Math.max(2,Math.round(i/7.5))),f.anisotropy=8;const u=this.wallMaterials[Math.floor(this.rand()*this.wallMaterials.length)],p=new Zt({color:u.color.clone().multiplyScalar(.82+this.rand()*.3),map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:l?.5:.9,roughness:.7,metalness:.1}),g=new wt(new Lt(n,i,c),p),x=1.28+i/2;g.position.set(t,x,e),g.castShadow=!l&&i>12,g.receiveShadow=!0,this.scene.add(g);const m=new wt(r,this.roofMaterial);if(m.position.set(t,1.28+i+.35,e),m.scale.set(n+.5,.7,c+.5),m.castShadow=!0,this.scene.add(m),!l&&this.rand()<.75){const d=1+Math.floor(this.rand()*3);for(let E=0;E<d;E++){const T=new wt(new Lt(1.1+this.rand()*2.5,.8+this.rand()*1.8,1.1+this.rand()*2.4),this.metalMaterial);T.position.set(t+(this.rand()-.5)*(n-4),1.28+i+.8,e+(this.rand()-.5)*(c-4)),T.castShadow=!0,this.scene.add(T)}}if(!l&&this.rand()<.36){const d=4+this.rand()*12,E=new wt(a,this.metalMaterial);E.scale.y=d,E.position.set(t+(this.rand()-.5)*n*.5,1.28+i+d/2,e+(this.rand()-.5)*c*.5),E.castShadow=!0,this.scene.add(E),o.push(E.position.x,E.position.y+d/2+.25,E.position.z)}if(!l&&this.rand()<.25){const d=new le({color:this.rand()<.5?6219775:16734765,transparent:!0,opacity:.72}),E=new wt(new Lt(n+.14,.12,.12),d);E.position.set(t,1.28+i-1.2,e+c/2+.07),this.scene.add(E)}l||this.buildings.push({mesh:g,roof:m,x:t,z:e,width:n,depth:c,height:i,y:x,hp:3,destroyed:!1,rubble:null})}_addPlazaProp(t,e){const n=new Zt({color:2304560,roughness:.82}),i=2+Math.floor(this.rand()*3);for(let r=0;r<i;r++){const a=new wt(new Lt(1.4+this.rand()*2.5,.7+this.rand()*1.6,1.4+this.rand()*2.5),n);a.position.set(t+(this.rand()-.5)*22,1.9,e+(this.rand()-.5)*22),a.rotation.y=this.rand()*Math.PI,this.scene.add(a)}}_addNeon(t){const e=this.rand()<.5?-1:1,n=this.rand()<.5?"#5ee7ff":"#ff6338",i=["SHELTER","SECTOR 7","NEO-K","DANGER","EVAC"][Math.floor(this.rand()*5)],r=zm(i,n,"CIVIL DEFENSE"),a=new le({map:r,transparent:!0,side:Be,depthWrite:!1,blending:de,opacity:.67}),o=new wt(new rn(3.5,7),a);o.position.set(t.cx+e*18.9,6.5,t.cz+(this.rand()-.5)*13),o.rotation.y=e<0?Math.PI/2:-Math.PI/2,this.scene.add(o)}_createStreetLights(){const t=new ge(.12,.18,7,4),e=new Lt(2.1,.12,.12),n=new on(.22,5,4),i=new Zt({color:2436147,roughness:.7,metalness:.5}),r=new le({color:16761722});for(let a=0;a<26;a++){const o=a/26*Math.PI*2,l=58+this.rand()*166,c=Math.cos(o)*l,h=Math.sin(o)*l,f=new he,u=new wt(t,i);u.position.y=3.5,f.add(u);const p=new wt(e,i);p.position.set(1,6.9,0),f.add(p);const g=new wt(n,r);if(g.position.set(1.9,6.75,0),f.add(g),f.position.set(c,1.28,h),f.rotation.y=o+Math.PI,this.scene.add(f),a%7===0){const x=new rs(16753499,4.5,23,2);x.position.set(c,7.6,h),this.scene.add(x)}}}_createSearchlight(){const t=new le({color:10403071,transparent:!0,opacity:.035,side:Be,blending:de,depthWrite:!1});this.searchlights=[];for(let e=0;e<3;e++){const n=new wt(new De(19,115,22,1,!0),t.clone());n.geometry.translate(0,-57.5,0),n.position.set(-110+e*110,25,-130+e*70),n.material.opacity=.026+e*.006,this.scene.add(n),this.searchlights.push(n)}}_createTraffic(){const t=[new Zt({color:2304561,roughness:.55,metalness:.5}),new Zt({color:4859173,roughness:.5,metalness:.5}),new Zt({color:1912896,roughness:.5,metalness:.55}),new Zt({color:4866616,roughness:.65,metalness:.3})],e=new le({color:16769968}),n=new le({color:16723749}),i=new Lt(2.8,.62,1.25),r=new Lt(1.4,.42,1.05),a=new Lt(.35,.16,.11),o=$n(4901),l=[-198,-150,-102,-54,0,54,102,150,198];for(let c=0;c<34;c++){const h=o()<.5?"x":"z",f=l[Math.floor(o()*l.length)],u=o()<.5?1:-1,p=new wt(i,t[Math.floor(o()*t.length)]),g=new wt(r,t[Math.floor(o()*t.length)]);g.position.y=.45,p.add(g);const x=new wt(a,e),m=new wt(a,n);x.position.set(1.39,.06,0),m.position.set(-1.39,.06,0),p.add(x,m),p.position.y=1.78;const d=(o()<.5?-1:1)*2.5,E=7+o()*10;h==="x"?(p.position.set(-250+o()*500,1.78,f+d),p.rotation.y=u>0?0:Math.PI):(p.position.set(f+d,1.78,-250+o()*500),p.rotation.y=u>0?-Math.PI/2:Math.PI/2),this.scene.add(p),this.cars.push({mesh:p,axis:h,dir:u,speed:E,road:f,lane:d})}}_createAtmosphere(){const t=Bm(),e=$n(5882);for(let o=0;o<17;o++){const l=new Ge({map:t,color:o%3===0?6044493:o%3===1?4341071:8014396,transparent:!0,opacity:.1+e()*.13,depthWrite:!1,fog:!1}),c=new Je(l),h=e()*Math.PI*2,f=300+e()*230;c.position.set(Math.cos(h)*f,55+e()*125,Math.sin(h)*f);const u=120+e()*170;c.scale.set(u,u*(.24+e()*.2),1),c.material.rotation=(e()-.5)*.35,this.scene.add(c),this.clouds.push({sprite:c,drift:.16+e()*.2,angle:h,radius:f})}const n=this.lowPower?260:680,i=new Float32Array(n*3);for(let o=0;o<n;o++)i[o*3]=(e()-.5)*430,i[o*3+1]=2+e()*80,i[o*3+2]=(e()-.5)*430;const r=new Se;r.setAttribute("position",new ye(i,3));const a=new Ra({color:16747853,size:.42,map:zr(),transparent:!0,opacity:.55,depthWrite:!1,blending:de,sizeAttenuation:!0});this.embers=new Pa(r,a),this.scene.add(this.embers)}_createDistantSkyline(){const t=$n(88734),e=new Zt({color:790807,roughness:.93,metalness:.1,emissive:1055526,emissiveIntensity:.4}),n=new Lt(1,1,1);for(let a=0;a<(this.lowPower?58:95);a++){const o=t()*Math.PI*2,l=290+t()*280,c=12+t()*32,h=22+t()*78,f=new wt(n,e);f.position.set(Math.cos(o)*l,h/2,Math.sin(o)*l),f.scale.set(c,h,c*(.6+t()*.7)),f.rotation.y=t()*Math.PI,this.scene.add(f)}const i=new Zt({color:527119,roughness:1}),r=new wt(new ge(360,360,16,64,1,!0),i);r.position.y=8,this.scene.add(r)}damageBuilding(t,e=1){return!t||t.destroyed?!1:(t.hp-=e,t.hp>0?(t.mesh.material.emissiveIntensity=.3,!1):(this._destroyBuilding(t),!0))}_destroyBuilding(t){t.destroyed=!0,t.mesh.visible=!1,t.roof.visible=!1;const e=$n(Math.floor(t.x*37+t.z*73)+99),n=new Zt({color:1514271,roughness:.98}),i=new he;i.position.set(t.x,1.34,t.z);for(let r=0;r<12;r++){const a=new wt(new Lt(1.3+e()*Math.max(2,t.width*.3),.7+e()*3.5,1.3+e()*Math.max(2,t.depth*.3)),n);a.position.set((e()-.5)*t.width*.7,e()*3.2,(e()-.5)*t.depth*.7),a.rotation.set(e()*2,e()*3,e()*2),a.castShadow=!0,i.add(a)}this.scene.add(i),t.rubble=i,this.callbacks.onBuildingDestroyed&&this.callbacks.onBuildingDestroyed(t)}getNearbyBuildings(t,e=80){const n=[],i=e*e;for(const r of this.buildings){if(r.destroyed)continue;const a=r.x-t.x,o=r.z-t.z;a*a+o*o<i&&n.push(r)}return n}getBuildingAt(t,e,n=0){for(const i of this.buildings)if(!i.destroyed&&Math.abs(t-i.x)<i.width/2+n&&Math.abs(e-i.z)<i.depth/2+n)return i;return null}flash(t,e=5){this.flashLight.position.copy(t),this.flashLight.intensity=e}update(t,e){this.time=e,this.beaconMaterial&&(this.beaconMaterial.opacity=.42+Math.sin(e*3.2)*.32,this.beaconMaterial.size=1.45+Math.sin(e*4.5)*.25);for(const n of this.cars){const i=n.mesh.position;n.axis==="x"?(i.x+=n.dir*n.speed*t,i.x>255&&(i.x=-255),i.x<-255&&(i.x=255)):(i.z+=n.dir*n.speed*t,i.z>255&&(i.z=-255),i.z<-255&&(i.z=255))}for(let n=0;n<this.searchlights.length;n++){const i=this.searchlights[n];i.rotation.z=Math.sin(e*.15+n*2.2)*.16,i.rotation.x=Math.cos(e*.11+n*1.3)*.19}if(this.fires)for(const n of this.fires){const i=.82+Math.sin(e*7.4+n.phase)*.11+Math.sin(e*13.1+n.phase*2)*.07;n.sprite.scale.set(n.base*i,n.base*.82*i,1),n.sprite.material.opacity=.56+i*.2,n.core.scale.set(n.base*.34*i,n.base*.46*i,1)}for(const n of this.clouds)n.angle+=t*.0018*n.drift,n.sprite.position.x=Math.cos(n.angle)*n.radius,n.sprite.position.z=Math.sin(n.angle)*n.radius;if(this.embers){this.embers.rotation.y+=t*.006;const n=this.embers.geometry.attributes.position;for(let i=0;i<n.count;i+=4){let r=n.getY(i)+t*(.5+i%7*.1);r>92&&(r=3),n.setY(i,r)}n.needsUpdate=!0}this.flashLight.intensity>0&&(this.flashLight.intensity=Math.max(0,this.flashLight.intensity-t*32))}}const ml=new R,Hs=new R,gl=new R,Vs=new R,rc={behemoth:{name:"BEHEMOTH",classLabel:"CLASS V",color:4609095,color2:2831918,plate:1844256,accent:16733221,scale:1.9,speed:5.4,hp:1850},ravager:{name:"RAVAGER",classLabel:"CLASS IV",color:5982289,color2:3484209,plate:2169632,accent:16722800,scale:1.7,speed:7.4,hp:1420},colossus:{name:"COLOSSUS",classLabel:"CLASS VI",color:4609372,color2:2766396,plate:1515814,accent:5826047,scale:2.1,speed:4.4,hp:3600},ashwing:{name:"ASHWING",classLabel:"AIRBORNE",color:2895677,color2:1579813,plate:1184796,accent:16730660,scale:1,speed:29,hp:260},nightwing:{name:"NIGHTWING",classLabel:"AIRBORNE",color:3551559,color2:1907241,plate:1380896,accent:6219775,scale:1.08,speed:34,hp:340}};function _n(s,t={}){return new Zt({color:s,roughness:t.roughness??.82,metalness:t.metalness??.08,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,flatShading:t.flatShading??!0,side:t.side??yn})}function zt(s,t,e,n=0,i=0,r=0){const a=new wt(t,e);return a.position.set(n,i,r),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function ac(s,t,e="body"){for(const n of s)n.userData.entity=t,n.userData.part=e}class _l{constructor(t,e,n,i,r=1){this.scene=t,this.world=e,this.type=n,this.cfg={...rc[n]},this.isKaiju=!0,this.isFlyer=!1,this.maxHp=Math.round(this.cfg.hp*(1+(r-1)*.13)),this.hp=this.maxHp,this.dead=!1,this.deathT=0,this.remove=!1,this.flash=0,this.phase=Math.random()*10,this.attackCooldown=1.8+Math.random()*1.8,this.attackT=-1,this.attackDidHit=!1,this.targetBuilding=null,this.targetRetry=0,this.stepT=0,this.hitMeshes=[],this.flashMats=[],this.active=!0,this.speed=this.cfg.speed,this.anchor=new R(0,21,0),this.root=new he,this.root.position.copy(i),this.root.scale.setScalar(this.cfg.scale),t.add(this.root),this._build(),ac(this.hitMeshes,this),this.head.traverse(a=>{a.isMesh&&(a.userData.part="head")})}_build(){const t=this.cfg,e=_n(t.color,{roughness:.87}),n=_n(t.color2,{roughness:.9}),i=_n(t.plate,{roughness:.65,metalness:.25}),r=new Zt({color:t.accent,emissive:t.accent,emissiveIntensity:2.4,roughness:.35,flatShading:!0}),a=new le({color:16742963}),o=_n(13222312,{roughness:.7}),l=_n(1579803,{roughness:.55,metalness:.3});this.flashMats.push(e,n,i);const c=new he;c.position.y=13.7,this.root.add(c),this.body=c;const h=zt(c,new Ri(1,0),e,0,.5,0);h.scale.set(3.9,2.4,2.8),this.hitMeshes.push(h);const f=zt(c,new Oi(1,1),e,0,6.5,.2);f.scale.set(4.55,5.6,3.45),this.hitMeshes.push(f);const u=zt(c,new Oi(1,1),n,0,4.7,1.4);u.scale.set(3.5,3.8,2.4),this.hitMeshes.push(u);for(let y=0;y<3;y++){const _=zt(c,new Lt(6.9-y*.75,.72,.55),i,0,8.4-y*1.65,3.02-y*.16);_.rotation.x=-.08,this.hitMeshes.push(_)}const p=zt(c,new rr(.7,0),r,0,7.15,3.23);this.hitMeshes.push(p),this.spines=[];for(let y=0;y<6;y++){const _=zt(c,new De(.85-y*.06,3.8+y*.25,4),i,0,7.6+y*.55,-2.9-Math.sin(y*.8)*.35);_.rotation.x=-.56,this.spines.push(_),this.hitMeshes.push(_);const C=zt(c,new De(.23,1.5,4),r,0,8.5+y*.55,-3.55);C.rotation.x=-.56,this.hitMeshes.push(C)}const g=zt(c,new ge(1.6,2.3,3.1,7),n,0,12.4,2.1);g.rotation.x=.34,this.hitMeshes.push(g);const x=new he;x.position.set(0,14.55,2.45),c.add(x),this.head=x;const m=zt(x,new Ri(1,0),e,0,.4,.35);m.scale.set(2.55,2,2.75),this.hitMeshes.push(m);const d=zt(x,new Lt(3.35,1.6,2.7),n,0,-.28,2.25);d.rotation.x=.08,this.hitMeshes.push(d);const E=zt(x,new Lt(4.4,.6,1.4),i,0,1.42,1.1);E.rotation.x=-.16,this.hitMeshes.push(E);const T=zt(x,new Lt(3.2,.72,2.9),n,0,-1.25,2.35);T.rotation.x=-.08,this.hitMeshes.push(T);for(let y=0;y<5;y++){const _=zt(x,new De(.13,.75,4),o,-1.2+y*.6,-.95,3.5);_.rotation.x=Math.PI,this.hitMeshes.push(_)}const v=zt(x,new on(.33,7,5),a,-1.35,.78,2.62),L=zt(x,new on(.33,7,5),a,1.35,.78,2.62);v.scale.set(1.2,.5,.72),L.scale.set(1.2,.5,.72),this.hitMeshes.push(v,L);for(const y of[-1,1]){const _=zt(x,new De(.42,3.6,5),i,y*1.72,1.95,.1);_.rotation.z=y*.48,_.rotation.x=-.18,this.hitMeshes.push(_)}this.arms=[];for(const y of[-1,1]){const _=new he;_.position.set(y*4.75,10,.5),c.add(_);const C=zt(_,new ge(.95,1.45,6.2,6),n,0,-2.8,0);this.hitMeshes.push(C);const F=new he;F.position.y=-5.9,_.add(F);const O=zt(F,new ge(.72,1.2,5.5,6),e,0,-2.6,.12);O.rotation.x=.12,this.hitMeshes.push(O);const H=zt(F,new Ri(1,0),n,0,-5.35,.45);H.scale.set(1.15,.95,1.35),this.hitMeshes.push(H);for(let X=0;X<3;X++){const W=zt(F,new De(.21,1.8,4),l,(X-1)*.55,-6.25,1.16);W.rotation.x=2.75,this.hitMeshes.push(W)}_.rotation.z=y*.09,this.arms.push({shoulder:_,elbow:F,side:y})}this.legs=[];for(const y of[-1,1]){const _=new he;_.position.set(y*2.55,.65,0),c.add(_);const C=zt(_,new ge(1.35,1.85,6.5,6),n,0,-3.15,0);this.hitMeshes.push(C);const F=new he;F.position.y=-6.25,_.add(F);const O=zt(F,new ge(.9,1.4,6.5,6),e,0,-3.15,.08);this.hitMeshes.push(O);const H=zt(F,new Lt(3.15,1.12,5.1),n,0,-6.6,1.5);this.hitMeshes.push(H);for(let X=0;X<3;X++){const W=zt(F,new De(.3,1.3,4),l,(X-1)*.95,-6.84,4.12);W.rotation.x=Math.PI/2,this.hitMeshes.push(W)}this.legs.push({hip:_,knee:F,side:y})}this.tail=[];const w=new he;w.position.set(0,4.2,-2.65),c.add(w);let A=w;for(let y=0;y<6;y++){const _=new he;_.position.z=y===0?0:-2.1,A.add(_);const C=1.15-y*.14,F=zt(_,new ge(Math.max(.16,C*.7),C,2.45,6),y%2===0?n:e,0,0,-1.1);if(F.rotation.x=Math.PI/2,this.hitMeshes.push(F),y===5){const O=zt(_,new De(.55,3.1,5),i,0,0,-3.4);O.rotation.x=-Math.PI/2,this.hitMeshes.push(O)}this.tail.push(_),A=_}this.body=c,this.accent=r,this.skin=e,this.skin2=n,this.plate=i;const P=new rs(t.accent,11,32,2);P.position.set(0,20,5),this.root.add(P),this.glowLight=P}get center(){return this.root.updateMatrixWorld(),this.anchor.set(0,21,0),this.root.localToWorld(this.anchor)}get headWorld(){return this.root.updateMatrixWorld(),this.head.localToWorld(new R(0,2,1))}get radius(){return 10*this.cfg.scale}takeDamage(t,e=!1){return this.dead?null:(this.hp-=t,this.flash=.09,this.hp<=0?(this.hp=0,this.die(),{killed:!0,crit:e}):{killed:!1,crit:e})}die(){this.dead||(this.dead=!0,this.deathT=0,this.active=!1,this.onDeath&&this.onDeath(this))}_chooseTarget(){if(!this.world)return null;const t=this.world.getNearbyBuildings(this.root.position,95);if(!t.length)return null;let e=null,n=1/0;for(const i of t){const r=(i.x-this.root.position.x)**2+(i.z-this.root.position.z)**2;r<n&&(n=r,e=i)}return e}update(t,e,n){var f;if(this.dead){this.deathT+=t;const u=this.deathT;u>.55&&(this.root.rotation.z=Math.min(1.35,(u-.55)*.55),this.root.position.y-=t*Math.min(2.2,(u-.55)*1.3)),this.body.position.y=13.7-Math.max(0,u-1.4)*1.3,this.body.rotation.x=Math.min(.32,u*.1),u>4.8&&(this.remove=!0);return}if(this.flash>0){this.flash-=t;const u=Math.max(0,this.flash/.09);for(const p of this.flashMats)p.emissive.setRGB(u*.9,u*.14,u*.03)}else for(const u of this.flashMats)u.emissive.setRGB(0,0,0);this.attackCooldown-=t;let i=!1;if(this.attackT>=0){this.attackT+=t;const u=Math.min(1,this.attackT/1.15),p=Math.sin(u*Math.PI),g=this.arms[1];if(g.shoulder.rotation.x=-2.1*p,g.shoulder.rotation.z=.09+Math.sin(u*Math.PI)*.45,g.elbow.rotation.x=-.5*p,this.body.rotation.x=.06*p,!this.attackDidHit&&this.attackT>.56&&(this.attackDidHit=!0,this.targetBuilding&&!this.targetBuilding.destroyed)){const x=this.world.damageBuilding(this.targetBuilding,1),m=new R(this.targetBuilding.x,6+Math.random()*Math.min(25,this.targetBuilding.height),this.targetBuilding.z);this.onBuildingHit&&this.onBuildingHit(this.targetBuilding,x,m),x&&(this.targetBuilding=null,this.targetRetry=.6)}this.attackT>1.35&&(this.attackT=-1,this.attackCooldown=Math.max(.7,2.5-(((f=this.world)==null?void 0:f.difficulty)||0)*.12))}else if((!this.targetBuilding||this.targetBuilding.destroyed)&&(this.targetBuilding=this._chooseTarget(),this.targetRetry=0),this.targetBuilding){const u=this.targetBuilding.x,p=this.targetBuilding.z,g=u-this.root.position.x,x=p-this.root.position.z,m=Math.hypot(g,x),d=Math.max(this.targetBuilding.width,this.targetBuilding.depth)/2+7.4*this.cfg.scale;if(m>d){const E=g/Math.max(.001,m),T=x/Math.max(.001,m);this.root.position.x+=E*this.speed*t,this.root.position.z+=T*this.speed*t,this.root.rotation.y=Math.atan2(E,T),i=!0}else this.attackCooldown<=0&&(this.attackT=0,this.attackDidHit=!1,this.root.rotation.y=Math.atan2(g,x))}this.root.position.x=Oe.clamp(this.root.position.x,-238,238),this.root.position.z=Oe.clamp(this.root.position.z,-238,238),this.phase+=t*(i?this.speed*.47:.5);const r=Math.sin(this.phase),a=Math.cos(this.phase),o=i?.53:.09,l=i?Math.abs(Math.sin(this.phase))*.24:Math.sin(e*1.4)*.08;this.body.position.y=13.7+l,this.body.rotation.z=i?r*.035:Math.sin(e*.8)*.01,this.body.rotation.y=i?a*.025:0;const c=this.legs[0],h=this.legs[1];if(c.hip.rotation.x=r*o,h.hip.rotation.x=-r*o,c.knee.rotation.x=Math.max(0,-r)*.65,h.knee.rotation.x=Math.max(0,r)*.65,this.attackT<0){const u=i?.24:.05;this.arms[0].shoulder.rotation.x=-r*u,this.arms[1].shoulder.rotation.x=r*u,this.arms[0].shoulder.rotation.z=-.09,this.arms[1].shoulder.rotation.z=.09,this.arms[0].elbow.rotation.x=.08+Math.max(0,r)*.12,this.arms[1].elbow.rotation.x=.08+Math.max(0,-r)*.12,this.body.rotation.x*=.9}for(let u=0;u<this.tail.length;u++)this.tail[u].rotation.y=Math.sin(e*1.4+u*.62+this.phase*.1)*.105,this.tail[u].rotation.x=u===0?-.12:.025;this.head.rotation.y=Math.sin(e*.65+this.phase*.03)*.11,this.head.rotation.x=Math.sin(e*.9+1)*.025;for(let u=0;u<this.spines.length;u++)this.spines[u].material.emissiveIntensity=.04}}class Hm{constructor(t,e,n,i=1){this.scene=t,this.type=e,this.cfg={...rc[e]},this.isKaiju=!1,this.isFlyer=!0,this.maxHp=Math.round(this.cfg.hp*(1+(i-1)*.15)),this.hp=this.maxHp,this.dead=!1,this.deathT=0,this.remove=!1,this.flash=0,this.phase=Math.random()*10,this.orbitAngle=Math.random()*Math.PI*2,this.orbitDir=Math.random()<.5?1:-1,this.orbitRadius=42+Math.random()*35,this.attackTimer=2+Math.random()*3,this.hoverOffset=Math.random()*22,this.hitMeshes=[],this.flashMats=[],this.velocity=new R,this.active=!0,this.speed=this.cfg.speed,this.anchor=new R(0,0,0),this.fireCallback=null,this.root=new he,this.root.position.copy(n),t.add(this.root),this._build(),ac(this.hitMeshes,this),this.head.traverse(r=>{r.isMesh&&(r.userData.part="head")})}_build(){const t=this.cfg,e=_n(t.color,{roughness:.82}),n=_n(t.color2,{roughness:.88}),i=_n(t.plate,{roughness:.68,metalness:.18}),r=new Zt({color:t.color2,emissive:t.accent,emissiveIntensity:.12,roughness:.9,metalness:.03,side:Be,transparent:!0,opacity:.94,flatShading:!0}),a=new Zt({color:t.accent,emissive:t.accent,emissiveIntensity:3,roughness:.4}),o=new le({color:16765856}),l=_n(1447963,{roughness:.5,metalness:.3});this.flashMats.push(e,n,i);const c=zt(this.root,new Oi(1,1),e,0,0,0);c.scale.set(2.3,1.85,3.9),this.hitMeshes.push(c);const h=zt(this.root,new rr(.62,0),a,0,-.2,2.1);this.hitMeshes.push(h);const f=zt(this.root,new ge(.75,1.15,2.35,6),n,0,.55,3.25);f.rotation.x=.9,this.hitMeshes.push(f);const u=new he;u.position.set(0,1.45,4.45),this.root.add(u),this.head=u;const p=zt(u,new Ri(1,0),e,0,0,0);p.scale.set(1.35,1.15,1.8),this.hitMeshes.push(p);const g=zt(u,new De(.62,2.2,5),i,0,-.16,1.9);g.rotation.x=Math.PI/2,this.hitMeshes.push(g);const x=zt(u,new on(.2,6,4),o,-.55,.38,.95),m=zt(u,new on(.2,6,4),o,.55,.38,.95);this.hitMeshes.push(x,m);for(const L of[-1,1]){const w=zt(u,new De(.24,1.7,4),i,L*.7,.9,-.15);w.rotation.z=L*.55,this.hitMeshes.push(w)}const d=new Float32Array([0,0,1.4,8.5,0,2.4,12,0,-1.6,0,0,1.4,12,0,-1.6,7,0,-3.9,0,0,1.4,7,0,-3.9,2.2,0,-2.9]),E=new Se;E.setAttribute("position",new ye(d,3)),E.computeVertexNormals(),this.wings=[];for(const L of[-1,1]){const w=new he;w.position.set(L*1.65,.3,.2),w.scale.x=L,this.root.add(w);const A=new wt(E,r);A.castShadow=!0,w.add(A),this.hitMeshes.push(A);const P=zt(w,new ge(.1,.15,11.5,4),i,5.4,0,.1);P.rotation.z=Math.PI/2,P.rotation.y=-.08,this.hitMeshes.push(P),this.wings.push({pivot:w,side:L,base:L*.16})}this.tail=[];let T=this.root;for(let L=0;L<5;L++){const w=new he;w.position.z=L===0?-3.2:-1.55,T.add(w);const A=zt(w,new ge(Math.max(.08,.58-L*.09),.62-L*.09,1.8,5),L%2?n:e,0,0,-.75);A.rotation.x=Math.PI/2,this.hitMeshes.push(A),this.tail.push(w),T=w}const v=zt(T,new De(.35,2.4,4),a,0,0,-2.8);v.rotation.x=-Math.PI/2,this.hitMeshes.push(v),this.bodyMat=e,this.membrane=r,this.accent=a,this.skin=e,this.skin2=n,this.plate=i,this.claw=l}get center(){return this.root.updateMatrixWorld(),this.anchor.set(0,.7,0),this.root.localToWorld(this.anchor)}get radius(){return 7.4}takeDamage(t,e=!1){return this.dead?null:(this.hp-=t,this.flash=.08,this.hp<=0?(this.hp=0,this.dead=!0,this.deathT=0,this.active=!1,{killed:!0,crit:e}):{killed:!1,crit:e})}update(t,e,n){if(this.dead){this.deathT+=t,this.velocity.y-=24*t,this.root.position.addScaledVector(this.velocity,t),this.root.rotation.z+=t*2.4,this.root.rotation.x+=t*.7,this.root.rotation.y+=t*1.1,this.root.position.addScaledVector(this.velocity,t),this.deathT>4.2&&(this.remove=!0);return}if(this.flash>0){this.flash-=t;const h=Math.max(0,this.flash/.08);for(const f of this.flashMats)f.emissive.setRGB(h*.9,h*.12,h*.05)}else for(const h of this.flashMats)h.emissive.setRGB(0,0,0);this.phase+=t*6.5,this.orbitAngle+=t*.48*this.orbitDir;const i=Oe.clamp(n.y+8+Math.sin(e*.4+this.hoverOffset)*12,22,92),r=this.orbitRadius+Math.sin(e*.27+this.hoverOffset)*8;gl.set(n.x+Math.cos(this.orbitAngle)*r,i,n.z+Math.sin(this.orbitAngle)*r),Vs.subVectors(gl,this.root.position);const a=Vs.length(),o=this.speed*(a>80?1.45:1);if(a>.01&&Vs.multiplyScalar(1/a),ml.copy(Vs).multiplyScalar(o),this.velocity.lerp(ml,1-Math.exp(-t*1.3)),this.root.position.addScaledVector(this.velocity,t),this.root.position.y=Math.max(9,this.root.position.y),this.velocity.lengthSq()>1){Hs.copy(this.velocity).normalize();let f=(Math.atan2(Hs.x,Hs.z)-this.root.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.root.rotation.y+=f*Math.min(1,t*4.2);const u=-Math.asin(Oe.clamp(Hs.y,-.8,.8));this.root.rotation.x+=(u-this.root.rotation.x)*Math.min(1,t*3.5),this.root.rotation.z=-this.velocity.x*.004*this.orbitDir}const l=Math.sin(this.phase)*.52+.08;this.wings[0].pivot.rotation.z=l,this.wings[1].pivot.rotation.z=-l,this.root.position.y+=Math.sin(this.phase)*.005,this.bodyMat.emissiveIntensity=0,this.membrane.emissiveIntensity=.12+Math.sin(e*2+this.hoverOffset)*.04;for(let h=0;h<this.tail.length;h++)this.tail[h].rotation.y=Math.sin(e*2.8-h*.7)*.14;this.attackTimer-=t;const c=Math.hypot(this.root.position.x-n.x,this.root.position.z-n.z);if(this.attackTimer<=0&&a<115&&c>14&&(this.attackTimer=3.6+Math.random()*2.6,this.fireCallback)){this.root.updateMatrixWorld();const h=this.head.localToWorld(new R(0,-.3,2.8));this.fireCallback(this,h,n.clone(),this.cfg.accent)}}explode(){this.remove=!0}}const Vn=new R;new R;const Gs=new ei,Ws=new Yt,Xs=new R,Vm=new R(0,0,1);function Gm(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,31);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.28,"rgba(255,255,255,0.82)"),e.addColorStop(.62,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new si(s);return n.colorSpace=me,n}class xl{constructor(t,{capacity:e=900,blending:n=de,texture:i}){this.capacity=e,this.particles=[],this.geometry=new Se,this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),this.geometry.setAttribute("position",new ye(this.positions,3).setUsage(ns)),this.geometry.setAttribute("aColor",new ye(this.colors,3).setUsage(ns)),this.geometry.setAttribute("aSize",new ye(this.sizes,1).setUsage(ns)),this.geometry.setAttribute("aAlpha",new ye(this.alphas,1).setUsage(ns)),this.geometry.setDrawRange(0,0),this.material=new an({uniforms:{uMap:{value:i},uScale:{value:900}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 1.0, 110.0);
          vColor = aColor;
          vAlpha = aAlpha;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          float a = tex.a * vAlpha;
          if (a < 0.008) discard;
          gl_FragColor = vec4(vColor, a);
        }
      `,transparent:!0,depthWrite:!1,blending:n}),this.points=new Pa(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=6,t.add(this.points)}add(t){this.particles.length>=this.capacity&&this.particles.shift(),this.particles.push(t)}update(t,e){let n=0;for(let i=0;i<this.particles.length;i++){const r=this.particles[i];if(r.life-=t,r.life<=0)continue;r.vel.y-=(r.gravity||0)*t;const a=Math.exp(-(r.drag||0)*t);r.vel.multiplyScalar(a),r.pos.addScaledVector(r.vel,t),r.size+=(r.grow||0)*t;const o=r.life/r.maxLife,l=r.fade==="in"?(1-o)*r.alpha:o*r.alpha;this.positions[n*3]=r.pos.x,this.positions[n*3+1]=r.pos.y,this.positions[n*3+2]=r.pos.z,this.colors[n*3]=r.color.r,this.colors[n*3+1]=r.color.g,this.colors[n*3+2]=r.color.b,this.sizes[n]=Math.max(.01,r.size),this.alphas[n]=Math.max(0,l),n++}this.particles.length=n,this.geometry.setDrawRange(0,n),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0}}class Wm{constructor(t,e){this.scene=t,this.camera=e,this.texture=Gm(),this.sparks=new xl(t,{capacity:1400,blending:de,texture:this.texture}),this.smoke=new xl(t,{capacity:650,blending:Jn,texture:this.texture}),this.tracers=[],this.tracerGeo=new Lt(1,1,1);for(let i=0;i<46;i++){const r=new le({color:16768426,transparent:!0,opacity:0,blending:de,depthWrite:!1}),a=new wt(this.tracerGeo,r);a.visible=!1,a.frustumCulled=!1,a.renderOrder=7,t.add(a),this.tracers.push({mesh:a,life:0,maxLife:.2})}this.flashes=[];for(let i=0;i<14;i++){const r=new Ge({map:this.texture,color:16756832,transparent:!0,opacity:0,blending:de,depthWrite:!1}),a=new Je(r);a.visible=!1,a.renderOrder=8,t.add(a),this.flashes.push({sprite:a,life:0,maxLife:.3,target:10})}this.rings=[];const n=new qa(.86,1,48);for(let i=0;i<10;i++){const r=new le({color:16747078,transparent:!0,opacity:0,side:Be,blending:de,depthWrite:!1}),a=new wt(n,r);a.visible=!1,a.renderOrder=7,t.add(a),this.rings.push({mesh:a,life:0,maxLife:.5,target:16})}this.debris=[],this.debrisMesh=new Aa(new Lt(1,1,1),new Zt({color:2106923,roughness:.92,metalness:.08}),190),this.debrisMesh.instanceMatrix.setUsage(ns),this.debrisMesh.frustumCulled=!1,this.debrisMesh.castShadow=!1,t.add(this.debrisMesh);for(let i=0;i<190;i++)this.debris.push(null),this._hideDebris(i);this.debrisCursor=0,this._tracerCursor=0,this._flashCursor=0,this._ringCursor=0,this._debrisActive=!1}_hideDebris(t){Xs.set(1e-4,1e-4,1e-4),Vn.set(0,-500,0),Gs.identity(),Ws.compose(Vn,Gs,Xs),this.debrisMesh.setMatrixAt(t,Ws),t===0&&(this.debrisMesh.instanceMatrix.needsUpdate=!0)}setScale(t){const e=Math.min(2.2,Math.max(.8,t/900));this.sparks.material.uniforms.uScale.value=900*e,this.smoke.material.uniforms.uScale.value=900*e}spark(t,e,n={}){const{speed:i=18,spread:r=1,color:a=new ct("#ff9a4f"),life:o=.65,size:l=.55,gravity:c=18,drag:h=1.2,directional:f=null}=n;for(let u=0;u<e;u++){const p=a.clone();Math.random()<.35&&p.lerp(new ct("#fff3cb"),.7);const g=new R((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize();f&&g.lerp(f,.45).normalize(),g.multiplyScalar(i*(.3+Math.random()*.85)*r),this.sparks.add({pos:t.clone(),vel:g,life:o*(.5+Math.random()*.8),maxLife:o,size:l*(.5+Math.random()*.85),color:p,alpha:.92,gravity:c,drag:h,grow:-.15})}}smokePuff(t,e=10,n={}){const{speed:i=4,life:r=2.8,size:a=1.9,color:o=new ct("#57616a"),alpha:l=.32,gravity:c=-.6,rise:h=0}=n;for(let f=0;f<e;f++){const u=o.clone().offsetHSL(0,0,(Math.random()-.5)*.08),p=new R((Math.random()-.5)*2,h+Math.random()*1.6,(Math.random()-.5)*2).multiplyScalar(i*(.4+Math.random()*.7));this.smoke.add({pos:t.clone().add(new R((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2)),vel:p,life:r*(.65+Math.random()*.65),maxLife:r,size:a*(.65+Math.random()*.9),color:u,alpha:l,gravity:c,drag:.7,grow:1.9,fade:"out"})}}explosion(t,e=1,n=16742972){const i=new ct(n);this.spark(t,Math.round(30+28*e),{speed:24*e,color:i,life:.85,size:.9*e,gravity:17,drag:1.5}),this.spark(t,Math.round(10+10*e),{speed:50*e,color:new ct("#ffe6ad"),life:.4,size:.42,gravity:4,drag:.4}),this.smokePuff(t,Math.round(12+8*e),{speed:4.5*e,life:2.6,size:2.2*e,color:new ct("#3a4148"),alpha:.42,gravity:-.3,rise:1}),this.flashAt(t,i,20*e,.38),this.ringAt(t,i,16*e,.5)}hit(t,e=16756838,n=!1){this.spark(t,n?16:9,{speed:n?20:12,color:new ct(e),life:.42,size:.35,gravity:10,drag:1.3}),this.flashAt(t,new ct(e),3.8,.14)}buildingCollapse(t,e=30){const n=t.clone();n.y=Math.min(e*.45,18),this.smokePuff(n,30,{speed:7,life:4.2,size:3.4,color:new ct("#4b4d4d"),alpha:.48,gravity:-.7,rise:2.2}),this.spark(n,45,{speed:20,color:new ct("#ff8f45"),life:1.2,size:.8,gravity:12,drag:1.1}),this.debrisBurst(n,32,1.5),this.flashAt(n,new ct("#ff8b48"),30,.6),this.ringAt(n,new ct("#ff7b3a"),32,.9)}muzzle(t,e,n=16765066){this.flashAt(t,new ct(n),2.4,.06),this.spark(t,3,{speed:8,color:new ct(n),life:.12,size:.2,gravity:0,drag:0,directional:e})}tracer(t,e,n=16765587){const i=this.tracers[this._tracerCursor];this._tracerCursor=(this._tracerCursor+1)%this.tracers.length,Vn.subVectors(e,t);const r=Vn.length();r<.01||(Vn.multiplyScalar(1/r),i.mesh.position.copy(t).addScaledVector(Vn,r/2),i.mesh.quaternion.setFromUnitVectors(Vm,Vn),i.mesh.scale.set(.045,.045,r),i.mesh.material.color.set(n),i.mesh.material.opacity=.95,i.mesh.visible=!0,i.life=.14,i.maxLife=.14)}missileTrail(t){Math.random()<.75&&this.smokePuff(t,1,{speed:1.2,life:1.1,size:.45,color:new ct("#7f858a"),alpha:.26,gravity:-.1,rise:.2}),this.spark(t,1,{speed:5,color:new ct("#ffc16d"),life:.22,size:.32,gravity:0,drag:2})}flashAt(t,e,n=8,i=.2){const r=this.flashes[this._flashCursor];this._flashCursor=(this._flashCursor+1)%this.flashes.length,r.sprite.position.copy(t),r.sprite.material.color.copy(e),r.sprite.material.opacity=1,r.sprite.scale.setScalar(.1),r.sprite.visible=!0,r.life=i,r.maxLife=i,r.target=n}ringAt(t,e,n=12,i=.4){const r=this.rings[this._ringCursor];this._ringCursor=(this._ringCursor+1)%this.rings.length,r.mesh.position.copy(t),r.mesh.material.color.copy(e),r.mesh.material.opacity=.5,r.mesh.scale.setScalar(.4),r.mesh.visible=!0,r.mesh.quaternion.copy(this.camera.quaternion),r.life=i,r.maxLife=i,r.target=n}debrisBurst(t,e=24,n=1){for(let i=0;i<e;i++){const r=this.debrisCursor;this.debrisCursor=(this.debrisCursor+1)%this.debris.length;let a=this.debris[r];a||(a={pos:new R,vel:new R,rot:new qe,spin:new R,scale:new R,life:0,maxLife:0},this.debris[r]=a),a.pos.copy(t).add(new R((Math.random()-.5)*4,(Math.random()-.4)*3,(Math.random()-.5)*4)),a.vel.set((Math.random()-.5)*18,6+Math.random()*15,(Math.random()-.5)*18),a.rot.set(Math.random()*6,Math.random()*6,Math.random()*6),a.spin.set((Math.random()-.5)*7,(Math.random()-.5)*7,(Math.random()-.5)*7);const o=(.5+Math.random()*2.6)*n;a.scale.set(o,o*(.35+Math.random()*1.5),o),a.life=2.3+Math.random()*2.2,a.maxLife=a.life,this.debrisMesh.setColorAt(r,new ct().setHSL(.09,.03,.09+Math.random()*.13))}this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0),this._debrisActive=!0}update(t,e){this.sparks.update(t,this.camera),this.smoke.update(t,this.camera);for(const n of this.tracers){if(n.life<=0)continue;n.life-=t;const i=Math.max(0,n.life/n.maxLife);n.mesh.material.opacity=i*.95,n.life<=0&&(n.mesh.visible=!1)}for(const n of this.flashes){if(n.life<=0)continue;n.life-=t;const i=1-Math.max(0,n.life/n.maxLife);n.sprite.scale.setScalar(.1+n.target*Math.min(1,i*1.8)),n.sprite.material.opacity=Math.max(0,1-i)*(1-i),n.life<=0&&(n.sprite.visible=!1)}for(const n of this.rings){if(n.life<=0)continue;n.life-=t;const i=1-Math.max(0,n.life/n.maxLife);n.mesh.scale.setScalar(.4+n.target*Math.sqrt(i)),n.mesh.material.opacity=Math.max(0,1-i)*.55,n.mesh.quaternion.copy(this.camera.quaternion),n.life<=0&&(n.mesh.visible=!1)}if(this._debrisActive){let n=!1;for(let i=0;i<this.debris.length;i++){const r=this.debris[i];if(!r||r.life<=0){r&&r.life>-1&&(this._hideDebris(i),r.life=-2);continue}n=!0,r.life-=t,r.vel.y-=24*t,r.pos.addScaledVector(r.vel,t),r.pos.y<1.2&&(r.pos.y=1.2,r.vel.y*=-.22,r.vel.x*=.72,r.vel.z*=.72,r.spin.multiplyScalar(.7)),r.rot.x+=r.spin.x*t,r.rot.y+=r.spin.y*t,r.rot.z+=r.spin.z*t,Gs.setFromEuler(r.rot);const a=Math.min(1,r.life/.4);Xs.copy(r.scale).multiplyScalar(a),Ws.compose(r.pos,Gs,Xs),this.debrisMesh.setMatrixAt(i,Ws),r.life<=0&&(r.life=-2,this._hideDebris(i))}this.debrisMesh.instanceMatrix.needsUpdate=!0,n||(this._debrisActive=!1)}}}class Xm{constructor(){this.ctx=null,this.master=null,this.engine=null,this.muted=!1,this.started=!1,this.lastShot=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.5;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=18,e.ratio.value=5,e.attack.value=.003,e.release.value=.22,this.master.connect(e),e.connect(this.ctx.destination),this.noiseBuffer=this._makeNoise(2.2),this._startEngine(),this._startAmbience(),this.started=!0}_makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}_noiseSource(t=.2){const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const n=Math.random()*Math.max(0,this.noiseBuffer.duration-t-.05);return e.start(this.ctx.currentTime,n,t+.03),e}_startEngine(){const t=this.ctx,e=t.createGain();e.gain.value=.016,e.connect(this.master);const n=t.createOscillator();n.type="sawtooth",n.frequency.value=48;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=240,i.Q.value=4,n.connect(i),i.connect(e);const r=t.createOscillator();r.type="triangle",r.frequency.value=96;const a=t.createGain();a.gain.value=.26,r.connect(a),a.connect(e);const o=t.createOscillator();o.type="sine",o.frequency.value=11.2;const l=t.createGain();l.gain.value=.0065,o.connect(l),l.connect(e.gain);const c=t.createOscillator();c.type="sine",c.frequency.value=630;const h=t.createGain();h.gain.value=.0032,c.connect(h),h.connect(this.master);const f=this._noiseSource(2),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=480,u.Q.value=.3;const p=t.createGain();p.gain.value=.018,f.connect(u),u.connect(p),p.connect(this.master),n.start(),r.start(),o.start(),c.start(),this.engine={gain:e,low:n,high:r,turbine:c,wind:p,windFilter:u}}_startAmbience(){const t=this.ctx,e=t.createGain();e.gain.value=.011,e.connect(this.master);const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=460,n.connect(e);const i=[55,82.41,110,164.81];for(let r=0;r<i.length;r++){const a=t.createOscillator();a.type=r%2?"triangle":"sine",a.frequency.value=i[r],a.detune.value=(r-1.5)*3;const o=t.createGain();o.gain.value=r===0?.65:.18,a.connect(o),o.connect(n),a.start()}this.ambience={pad:e,filter:n}}updateEngine(t,e,n=!0){if(!this.engine||!this.ctx)return;const i=this.ctx.currentTime,r=n?1:0,a=48+t*.9+(e?16:0);this.engine.low.frequency.setTargetAtTime(a,i,.08),this.engine.high.frequency.setTargetAtTime(a*2.02,i,.08),this.engine.turbine.frequency.setTargetAtTime(560+t*6+(e?160:0),i,.1),this.engine.gain.gain.setTargetAtTime((.012+t*14e-5)*r,i,.08),this.engine.wind.gain.setTargetAtTime((.013+t*24e-5+(e?.017:0))*r,i,.08),this.engine.windFilter.frequency.setTargetAtTime(330+t*8+(e?420:0),i,.1)}setMuted(t){this.muted=t,!(!this.master||!this.ctx)&&this.master.gain.setTargetAtTime(t?0:.5,this.ctx.currentTime,.06)}toggleMute(){return this.setMuted(!this.muted),this.muted}gun(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime;if(t-this.lastShot<.018)return;this.lastShot=t;const e=this._noiseSource(.08),n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(950+Math.random()*500,t),n.Q.value=.7;const i=this.ctx.createGain();i.gain.setValueAtTime(.17,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.075),e.connect(n),n.connect(i),i.connect(this.master);const r=this.ctx.createOscillator();r.type="square",r.frequency.setValueAtTime(88,t),r.frequency.exponentialRampToValueAtTime(32,t+.06);const a=this.ctx.createGain();a.gain.setValueAtTime(.075,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.07),r.connect(a),a.connect(this.master),r.start(t),r.stop(t+.08)}overheat(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(230,t),e.frequency.setValueAtTime(170,t+.07);const n=this.ctx.createGain();n.gain.setValueAtTime(.04,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.25),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.26)}hit(t=!1){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t?1600:1150,e),n.frequency.exponentialRampToValueAtTime(t?2400:1650,e+.04);const i=this.ctx.createGain();i.gain.setValueAtTime(t?.065:.033,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.08),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.09)}missile(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this._noiseSource(.65),n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(280,t),n.frequency.exponentialRampToValueAtTime(2200,t+.5),n.Q.value=.8;const i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.18,t+.06),i.gain.exponentialRampToValueAtTime(1e-4,t+.62),e.connect(n),n.connect(i),i.connect(this.master);const r=this.ctx.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(60,t+.4);const a=this.ctx.createGain();a.gain.setValueAtTime(.045,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.4),r.connect(a),a.connect(this.master),r.start(t),r.stop(t+.42)}explosion(t=1){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this._noiseSource(1.2),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1900*t,e),i.frequency.exponentialRampToValueAtTime(100,e+.8),i.Q.value=.6;const r=this.ctx.createGain();r.gain.setValueAtTime(.31*Math.min(1.3,t),e),r.gain.exponentialRampToValueAtTime(1e-4,e+1.05),n.connect(i),i.connect(r),r.connect(this.master);const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(75*Math.max(.7,t),e),a.frequency.exponentialRampToValueAtTime(26,e+.75);const o=this.ctx.createGain();o.gain.setValueAtTime(.23*Math.min(1.4,t),e),o.gain.exponentialRampToValueAtTime(1e-4,e+.9),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.92)}enemyShot(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(920,t),e.frequency.exponentialRampToValueAtTime(260,t+.22);const n=this.ctx.createGain();n.gain.setValueAtTime(.034,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.24),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.25)}playerHit(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this._noiseSource(.3),n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(500,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.28),e.connect(n),n.connect(i),i.connect(this.master);const r=this.ctx.createOscillator();r.type="square",r.frequency.setValueAtTime(320,t),r.frequency.setValueAtTime(250,t+.1);const a=this.ctx.createGain();a.gain.setValueAtTime(.04,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),r.connect(a),a.connect(this.master),r.start(t),r.stop(t+.31)}roar(t=!1){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this._noiseSource(1.6),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(420,e),i.frequency.exponentialRampToValueAtTime(160,e+1.2),i.Q.value=2;const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(t?.18:.1,e+.18),r.gain.exponentialRampToValueAtTime(1e-4,e+1.35),n.connect(i),i.connect(r),r.connect(this.master);const a=this.ctx.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(t?68:96,e),a.frequency.exponentialRampToValueAtTime(t?32:48,e+1.05);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.07,e+.2),o.gain.exponentialRampToValueAtTime(1e-4,e+1.3),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+1.35)}alarm(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime;for(let e=0;e<2;e++){const n=this.ctx.createOscillator();n.type="square",n.frequency.value=660;const i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t+e*.17),i.gain.exponentialRampToValueAtTime(.035,t+e*.17+.02),i.gain.exponentialRampToValueAtTime(1e-4,t+e*.17+.12),n.connect(i),i.connect(this.master),n.start(t+e*.17),n.stop(t+e*.17+.13)}}upgrade(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime;[392,523.25,659.25,783.99].forEach((n,i)=>{const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=n;const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t+i*.065),a.gain.exponentialRampToValueAtTime(.035,t+i*.065+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.065+.35),r.connect(a),a.connect(this.master),r.start(t+i*.065),r.stop(t+i*.065+.36)})}uiClick(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(720,t),e.frequency.exponentialRampToValueAtTime(980,t+.04);const n=this.ctx.createGain();n.gain.setValueAtTime(.018,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.07)}}function qm(s,t){return new le({map:t,transparent:!1,toneMapped:!1})}function Ym(s,t){const e=new he;e.visible=!1,s.add(e),t.add(s);const n=new le({color:724755}),i=new le({color:1383459}),r=new le({color:3490124}),a=new le({color:16734765}),o=new le({color:6219775}),l=new le({color:1929086}),c=(d,E,T,v,L,w=0,A=0,P=0)=>{const y=new wt(d,E);return y.position.set(T,v,L),y.rotation.set(w,A,P),e.add(y),y};c(new Lt(1.42,.24,.46),n,0,-.39,-.56,.16),c(new Lt(1.32,.025,.42),i,0,-.288,-.548,.16),c(new Lt(1.35,.018,.02),r,0,-.268,-.768,.16),c(new Lt(.25,.028,.02),a,0,-.265,-.79,.16);for(const d of[-1,1])c(new Lt(.05,.44,.22),n,d*.775,-.23,-.5,.14,d*.2),c(new Lt(.01,.3,.01),r,d*.74,-.18,-.63,.14),c(new Lt(.014,.09,.014),a,d*.74,-.15,-.64,.14),c(new ge(.016,.016,.3,5),i,d*.55,-.28,-.38,.22,0,d*.24),c(new on(.041,7,5),n,d*.5,-.17,-.42);for(const d of[-1,1])c(new Lt(.032,.83,.065),n,d*.7,-.02,-.54,-.05,d*-.08,d*.09),c(new Lt(.011,.78,.011),r,d*.686,-.02,-.577,-.05,d*-.08,d*.09);c(new Lt(1.28,.04,.05),n,0,.35,-.57),c(new Lt(.95,.012,.012),r,0,.329,-.598);for(const d of[-1,1])c(new ge(.018,.024,.46,6),i,d*.27,-.44,-.92,Math.PI/2),c(new ge(.01,.014,.08,5),r,d*.27,-.44,-1.18,Math.PI/2);const h=new ge(.006,.006,.004,5);for(let d=0;d<12;d++)c(h,r,-.55+d%6*.22,-.255,-.797,Math.PI/2);const f=new on(.008,4,3);c(f,a,.36,-.27,-.78),c(f,o,.39,-.27,-.78),c(f,l,.42,-.27,-.78);const u=[];for(let d=0;d<2;d++){const E=document.createElement("canvas");E.width=256,E.height=128;const T=E.getContext("2d");T.fillStyle="#040b0d",T.fillRect(0,0,256,128);const v=new si(E);v.colorSpace=me,v.minFilter=Xe,v.magFilter=Xe;const L=qm(E,v),w=d===0?-.32:.32;c(new Lt(.32,.176,.01),r,w,-.285,-.755,.16);const A=c(new rn(.285,.142),L,w,-.285,-.747,.16);A.renderOrder=5;const P=c(new rn(.285,.142),new le({color:d===0?6219775:16743746,transparent:!0,opacity:.035,blending:de,depthWrite:!1}),w,-.285,-.744,.16);u.push({canvas:E,ctx:T,tex:v,screen:A,glow:P,side:d})}c(new Lt(.31,.05,.012),i,0,-.245,-.78,.16),c(new Lt(.25,.008,.006),l,0,-.245,-.788,.16);let p=0,g=0;function x(d){const{speed:E,altitude:T,heat:v,overheat:L,missiles:w,target:A,hull:P}=d;for(const y of u){const{ctx:_,canvas:C}=y,F=C.width,O=C.height;_.clearRect(0,0,F,O),_.fillStyle="#031014",_.fillRect(0,0,F,O),_.strokeStyle="rgba(94,231,255,0.14)",_.lineWidth=1;for(let H=0;H<F;H+=16)_.beginPath(),_.moveTo(H,0),_.lineTo(H,O),_.stroke();for(let H=0;H<O;H+=16)_.beginPath(),_.moveTo(0,H),_.lineTo(F,H),_.stroke();_.font="10px monospace",_.fillStyle="rgba(94,231,255,0.68)",_.fillText("AH-79 // SYS",10,16),y.side===0?(_.fillStyle="rgba(255,255,255,0.55)",_.font="9px monospace",_.fillText("AIR DATA",10,34),_.fillStyle="#9df2ff",_.font="30px monospace",_.fillText(String(Math.round(E)).padStart(3,"0"),10,67),_.font="9px monospace",_.fillStyle="rgba(94,231,255,0.7)",_.fillText("KTS",78,66),_.fillStyle="#ffce9a",_.font="20px monospace",_.fillText(String(Math.round(T)).padStart(3,"0"),132,67),_.fillStyle="rgba(255,206,154,0.65)",_.font="8px monospace",_.fillText("ALT M",182,66),_.strokeStyle="rgba(94,231,255,0.32)",_.strokeRect(10,79,F-20,7),_.fillStyle=P>50?"#5ee7ff":P>25?"#ff8a45":"#ff304c",_.fillRect(10,79,(F-20)*(P/100),7),_.fillStyle="rgba(255,255,255,0.38)",_.font="8px monospace",_.fillText("HULL INTEGRITY",10,102)):(_.fillStyle="rgba(255,255,255,0.55)",_.font="9px monospace",_.fillText("FIRE CONTROL",10,34),_.fillStyle=L?"#ff304c":"#ffbd87",_.font="12px monospace",_.fillText(L?"OVERHEAT":"VULCAN RDY",10,54),_.fillStyle="rgba(255,255,255,0.32)",_.font="8px monospace",_.fillText("HEAT",10,73),_.fillStyle=L?"#ff304c":v>.65?"#ff8a45":"#5ee7ff",_.fillRect(10,79,(F-20)*Math.min(1,v),7),_.fillStyle="rgba(255,255,255,0.55)",_.font="9px monospace",_.fillText(`MSL ${String(w).padStart(2,"0")}`,10,106),_.fillStyle=A?"#ff8a45":"rgba(255,255,255,0.3)",_.font="8px monospace",_.fillText(A?"THREAT LOCKED":"NO THREAT LOCK",94,106)),_.strokeStyle="rgba(94,231,255,0.22)",_.strokeRect(1,1,F-2,O-2),y.tex.needsUpdate=!0}}function m(d,E){g+=d,e.position.x=Math.sin(g*.9)*.0016,e.position.y=Math.sin(g*1.4)*.0012,p-=d,p<=0&&(p=.08,x(E));const T=.5+Math.sin(g*4.2)*.5;u[0].glow.material.opacity=.025+T*.02,u[1].glow.material.opacity=.025+(1-T)*.02}return{group:e,update:m,show(){e.visible=!0},hide(){e.visible=!1}}}const vl=new R,Ml=new R,ts=new R,yl=new R,Gn=new R,mn=new R,Sl={speed:46,damage:22,fireInterval:.095,heatPerShot:.05,coolRate:.38,missileCap:2,missileDamage:470,missileTurn:2.8,critChance:.04,maxHull:100,repairPerKill:0,regen:0,spread:.0032};class Km{constructor({camera:t,canvas:e,world:n,effects:i,audio:r,isTouch:a}){this.camera=t,this.canvas=e,this.world=n,this.effects=i,this.audio=r,this.isTouch=a,this.showCockpit=!a,this.cockpit=Ym(t,t.parent||t),this.searchlight=new Lm(13623551,90,230,.24,.8,1),this.searchlight.position.set(0,-.12,.1),this.searchlight.target.position.set(0,-2.6,-24),this.searchlight.castShadow=!1,t.add(this.searchlight),t.add(this.searchlight.target),this.pos=new R(5,46,200),this.vel=new R,this.yaw=0,this.pitch=-.04,this.roll=0,this.shake=0,this.recoil=0,this.yawKick=0,this.bobT=0,this.altitudeInput=0,this.keys=new Set,this.enabled=!1,this.firing=!1,this.locked=!1,this.target=null,this.callbacks={},this.lastCollision=0,this.boundaryWarn=0,this.overheatWarned=!1,this.muzzleSide=1,this.touchDrag=null,this.touchMove={x:0,y:0},this.touchAlt=0,this.stats={...Sl},this.maxHull=this.stats.maxHull,this.hull=this.maxHull,this.heat=0,this.overheat=!1,this.fireTimer=0,this.missiles=this.stats.missileCap,this.missileTimer=0,this.missileLaunchCd=0,this.shots=0,this.hits=0,this.scanActive=!1,this.lastDamageAt=-100,this.statsDirty=!0,this._bindInput()}setCallbacks(t){this.callbacks=t}resetRun(){this.stats={...Sl},this.maxHull=this.stats.maxHull,this.hull=this.maxHull,this.heat=0,this.overheat=!1,this.fireTimer=0,this.missiles=this.stats.missileCap,this.missileTimer=0,this.missileLaunchCd=0,this.shots=0,this.hits=0,this.pos.set(5,46,200),this.vel.set(0,0,0),this.yaw=0,this.pitch=-.04,this.roll=0,this.shake=0,this.recoil=0,this.lastDamageAt=-100,this.enabled=!1,this.firing=!1,this.target=null,this.statsDirty=!0}applyStats(){this.maxHull=this.stats.maxHull,this.hull=Math.min(this.hull,this.maxHull),this.missiles=Math.min(this.missiles,this.stats.missileCap),this.statsDirty=!1}start(){this.enabled=!0,this.showCockpit?this.cockpit.show():this.cockpit.hide(),this.firing=!1}stop(){this.enabled=!1,this.firing=!1,this.keys.clear(),this.touchMove.x=this.touchMove.y=0,this.touchAlt=0,this.resetJoystick()}requestPointerLock(){var t,e;if(!this.isTouch)try{const n=(e=(t=this.canvas).requestPointerLock)==null?void 0:e.call(t);n!=null&&n.catch&&n.catch(()=>{})}catch{}}_bindInput(){const t=this.canvas;window.addEventListener("keydown",n=>{if(!this.enabled)return;const i=n.code;["KeyW","KeyA","KeyS","KeyD","KeyR","KeyF","ShiftLeft","ShiftRight","Space"].includes(i)&&n.preventDefault(),this.keys.add(i)}),window.addEventListener("keyup",n=>{this.keys.delete(n.code)}),t.addEventListener("mousedown",n=>{this.enabled&&(n.button===0?(this.firing=!0,!this.isTouch&&document.pointerLockElement!==t&&this.requestPointerLock()):n.button===2&&this.launchMissile())}),window.addEventListener("mouseup",n=>{n.button===0&&(this.firing=!1)}),window.addEventListener("blur",()=>{this.firing=!1,this.keys.clear(),this.touchMove.x=this.touchMove.y=0,this.touchAlt=0,this.resetJoystick()}),window.addEventListener("contextmenu",n=>{this.enabled&&n.preventDefault()}),window.addEventListener("mousemove",n=>{if(!this.enabled||!(document.pointerLockElement===t)&&n.buttons!==1&&n.buttons!==2)return;const r=n.movementX||0,a=n.movementY||0;this.yaw-=r*.00215,this.pitch-=a*.00215,this.pitch=Oe.clamp(this.pitch,-1.25,1.25),this.yawKick=Oe.clamp(this.yawKick-r*5e-5,-.015,.015)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.callbacks.onPointerLockChange&&this.callbacks.onPointerLockChange(this.locked)}),t.addEventListener("pointerdown",n=>{var r;if(n.pointerType!=="touch"||!this.enabled)return;this.touchDrag={id:n.pointerId,x:n.clientX,y:n.clientY},(r=t.setPointerCapture)==null||r.call(t,n.pointerId);const i=document.getElementById("look-hint");i&&i.classList.remove("show")},{passive:!0}),t.addEventListener("pointermove",n=>{if(!this.touchDrag||n.pointerId!==this.touchDrag.id||!this.enabled)return;const i=n.clientX-this.touchDrag.x,r=n.clientY-this.touchDrag.y;this.touchDrag.x=n.clientX,this.touchDrag.y=n.clientY,this.yaw-=i*.0041,this.pitch-=r*.0041,this.pitch=Oe.clamp(this.pitch,-1.25,1.25)},{passive:!0});const e=n=>{this.touchDrag&&n.pointerId===this.touchDrag.id&&(this.touchDrag=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),this._bindTouchControls()}_bindTouchControls(){const t=document.getElementById("joystick-zone"),e=document.getElementById("joystick-knob"),n=document.getElementById("touch-fire"),i=document.getElementById("touch-missile"),r=document.getElementById("touch-up"),a=document.getElementById("touch-down");if(t){let o=null,l=0,c=0,h=42;const f=p=>{let g=p.clientX-l,x=p.clientY-c;const m=Math.hypot(g,x);m>h&&(g=g/m*h,x=x/m*h),this.touchMove.x=g/h,this.touchMove.y=-x/h,e&&(e.style.transform=`translate(${g}px, ${x}px)`)};t.addEventListener("pointerdown",p=>{var m;if(!this.enabled)return;p.preventDefault();const g=t.querySelector(".joystick-ring").getBoundingClientRect();l=g.left+g.width/2,c=g.top+g.height/2,h=g.width*.36,o=p.pointerId,(m=t.setPointerCapture)==null||m.call(t,p.pointerId),f(p);const x=document.getElementById("look-hint");x&&x.classList.remove("show")}),t.addEventListener("pointermove",p=>{p.pointerId===o&&(p.preventDefault(),f(p))});const u=p=>{p.pointerId===o&&(o=null,this.touchMove.x=this.touchMove.y=0,this.resetJoystick())};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}if(n){n.addEventListener("pointerdown",l=>{var c;this.enabled&&(l.preventDefault(),(c=n.setPointerCapture)==null||c.call(n,l.pointerId),this.firing=!0,n.classList.add("pressed"))});const o=()=>{this.firing=!1,n.classList.remove("pressed")};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",l=>{l.buttons===0&&o()})}i&&i.addEventListener("pointerdown",o=>{this.enabled&&(o.preventDefault(),this.launchMissile())});for(const[o,l]of[[r,1],[a,-1]]){if(!o)continue;o.addEventListener("pointerdown",h=>{var f;this.enabled&&(h.preventDefault(),this.touchAlt=l,(f=o.setPointerCapture)==null||f.call(o,h.pointerId),o.classList.add("pressed"))});const c=()=>{this.touchAlt===l&&(this.touchAlt=0),o.classList.remove("pressed")};o.addEventListener("pointerup",c),o.addEventListener("pointercancel",c),o.addEventListener("pointerleave",c)}}resetJoystick(){const t=document.getElementById("joystick-knob");t&&(t.style.transform="translate(0px, 0px)")}addShake(t){this.shake=Math.min(.065,this.shake+t)}damage(t,e="hit"){this.hull<=0||(this.hull=Math.max(0,this.hull-t),this.addShake(.018),this.callbacks.onDamage&&this.callbacks.onDamage(t,this.hull,e),this.hull<=0&&this.callbacks.onDeath&&this.callbacks.onDeath())}heal(t){if(t<=0)return 0;const e=this.hull;return this.hull=Math.min(this.maxHull,this.hull+t),this.hull-e}update(t,e){if(!this.enabled){this.audio.updateEngine(0,!1,!1);return}this.bobT+=t,this.fireTimer-=t,this.missileLaunchCd-=t;const n=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight");let i=0,r=0;this.keys.has("KeyW")&&(i+=1),this.keys.has("KeyS")&&(i-=.65),this.keys.has("KeyA")&&(r-=1),this.keys.has("KeyD")&&(r+=1),this.isTouch&&(i+=this.touchMove.y,r+=this.touchMove.x),i=Oe.clamp(i,-1,1),r=Oe.clamp(r,-1,1),this.altitudeInput=0,(this.keys.has("KeyR")||this.keys.has("Space"))&&(this.altitudeInput+=1),this.keys.has("KeyF")&&(this.altitudeInput-=1),this.isTouch&&(this.altitudeInput+=this.touchAlt),this.altitudeInput=Oe.clamp(this.altitudeInput,-1,1);const a=this.stats.speed*(n?1.58:1),o=Math.cos(this.pitch*.58);vl.set(-Math.sin(this.yaw)*o,Math.sin(this.pitch*.58)*.85,-Math.cos(this.yaw)*o),Ml.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),ts.set(0,0,0),ts.addScaledVector(vl,i*a),ts.addScaledVector(Ml,r*a*.74),ts.y+=this.altitudeInput*a*.64;const l=i!==0||r!==0||this.altitudeInput!==0?n?2.7:3.6:2.1;this.vel.lerp(ts,1-Math.exp(-t*l)),Math.abs(i)<.01&&Math.abs(r)<.01&&Math.abs(this.altitudeInput)<.01&&this.vel.multiplyScalar(Math.exp(-t*.72)),yl.copy(this.pos),this.pos.addScaledVector(this.vel,t);const c=246,h=246,f=this.pos.x,u=this.pos.z;this.pos.x=Oe.clamp(this.pos.x,-c,c),this.pos.z=Oe.clamp(this.pos.z,-h,h),this.pos.y=Oe.clamp(this.pos.y,6.5,105);const p=f!==this.pos.x||u!==this.pos.z||this.pos.y===105||this.pos.y===6.5;this.boundaryWarn=p?.45:Math.max(0,this.boundaryWarn-t);const g=this.world.getBuildingAt(this.pos.x,this.pos.z,1.35);g&&this.pos.y<1.28+g.height+1.6&&(this.pos.copy(yl),this.vel.multiplyScalar(-.12),e-this.lastCollision>.9&&(this.lastCollision=e,this.damage(8,"collision"),this.addShake(.035)));const x=-r*.12-this.yawKick*2.2;this.roll+=(x-this.roll)*Math.min(1,t*4.6),this.yawKick*=Math.exp(-t*3.8),this.shake*=Math.exp(-t*5.4),this.recoil*=Math.exp(-t*11),this.heat=Math.max(0,this.heat-this.stats.coolRate*t),this.overheat&&this.heat<=.24&&(this.overheat=!1,this.overheatWarned=!1,this.callbacks.onHeatReady&&this.callbacks.onHeatReady()),this.missiles<this.stats.missileCap?(this.missileTimer<=0&&(this.missileTimer=5.1),this.missileTimer-=t,this.missileTimer<=0&&(this.missiles++,this.missiles<this.stats.missileCap?this.missileTimer=5.1:this.missileTimer=0,this.callbacks.onMissileReload&&this.callbacks.onMissileReload(this.missiles))):this.missileTimer=0,this._updateCamera(t,e),this.showCockpit&&this._updateCockpit(t),e-this.lastDamageAt>7.5&&this.stats.regen>0&&this.heal(this.stats.regen*t),this.firing&&this._tryFire(e),this.audio.updateEngine(this.vel.length(),n,!0)}_updateCamera(t,e){const n=this.shake*(Math.sin(e*61.3)*.6+Math.sin(e*37.7)*.4),i=this.shake*(Math.sin(e*53.1)*.55+Math.sin(e*29.2)*.45),r=this.shake*Math.sin(e*43.5)*.9,a=Math.sin(this.bobT*1.25)*.06;this.camera.position.set(this.pos.x+n*.16,this.pos.y+a+i*.16,this.pos.z),this.camera.rotation.set(this.pitch+this.recoil+i*.45,this.yaw+n*.45,this.roll+r,"YXZ"),this.camera.updateMatrixWorld(!0)}_updateCockpit(t){this.cockpit.update(t,{speed:this.vel.length()*1.95,altitude:this.pos.y,heat:this.heat,overheat:this.overheat,missiles:this.missiles,target:this.target,hull:this.hull/this.maxHull*100})}_tryFire(t){if(this.overheat||this.fireTimer>0||!this.enabled)return;this.fireTimer=this.stats.fireInterval,this.heat=Math.min(1,this.heat+this.stats.heatPerShot),this.heat>=1&&(this.heat=1,this.overheat=!0,this.audio.overheat(),this.callbacks.onOverheat&&this.callbacks.onOverheat()),this.muzzleSide*=-1,Gn.set(this.muzzleSide*.27,-.4,-1.1),this.camera.localToWorld(Gn),this.camera.getWorldDirection(mn);const e=this.stats.spread+this.heat*.0035+this.vel.length()*2e-5;mn.x+=(Math.random()-.5)*e*2,mn.y+=(Math.random()-.5)*e*2,mn.z+=(Math.random()-.5)*e*2,mn.normalize(),this.shots++,this.recoil+=.0018+Math.random()*.0012,this.addShake(.0018),this.effects.muzzle(Gn,mn),this.audio.gun(),this.callbacks.onShot&&this.callbacks.onShot(Gn.clone(),mn.clone(),this.stats)}launchMissile(){return!this.enabled||this.missileLaunchCd>0?!1:this.missiles<=0?(this.callbacks.onNoMissiles&&this.callbacks.onNoMissiles(),!1):(this.missiles--,this.missileLaunchCd=.38,this.missiles<this.stats.missileCap&&this.missileTimer<=0&&(this.missileTimer=5.1),this.addShake(.014),this.audio.missile(),Gn.set(.34,-.31,-.95),this.camera.localToWorld(Gn),this.camera.getWorldDirection(mn),this.callbacks.onMissile&&this.callbacks.onMissile(Gn.clone(),mn.clone(),this.target,this.stats.missileDamage,this.stats.missileTurn),!0)}registerHit(){this.hits++}addUpgradeStats(t){t(this.stats,this),this.applyStats()}get isMoving(){return this.vel.lengthSq()>4}}const es=new R;function it(s){return document.getElementById(s)}function $m(s){return Math.max(0,Math.floor(s)).toString().padStart(6,"0")}function jm(s){const t=Math.max(0,Math.floor(s));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}class Zm{constructor(){this.menu=it("menu"),this.hud=it("hud"),this.upgrade=it("upgrade"),this.pause=it("pause"),this.gameover=it("gameover"),this.briefing=it("briefing"),this.transition=it("transition"),this.healthFlash=it("damage-vignette"),this.hitmarker=it("hitmarker"),this.reticle=it("reticle"),this.targetPanel=it("target-panel"),this.lockbox=it("lockbox"),this.killFeed=it("kill-feed"),this.warningBanner=it("warning-banner"),this.warningText=it("warning-text"),this.banner=it("wave-banner"),this.combo=it("combo"),this.radar=it("radar"),this.radarCtx=this.radar.getContext("2d"),this.perksLine=it("perks-line"),this.deployNextBtn=it("deploy-next-btn"),this.upgradeCards=it("upgrade-cards"),this.upgradeTip=it("upgrade-tip"),this.selectedUpgrade=null,this._warningToken=0,this._bannerTimer=0,this._feedTimers=[],this._radarTimer=0,this._damageTimer=0,this._hitTimer=0,this._targetName="",this._lastHull=100,this._lastCity=100,this._lastScore=-1,this._lastTime="",this._lastMissiles=-1,this._lastHeatState="",this._lastTargetHp=-1,this._best=this.loadBest(),this.updateMenuBest()}loadBest(){try{const t=localStorage.getItem("rotor-titan-best");if(!t)return{score:0,wave:0};const e=JSON.parse(t);return{score:Number(e.score)||0,wave:Number(e.wave)||0}}catch{return{score:0,wave:0}}}saveBest(t,e){if(t>this._best.score){this._best={score:t,wave:e};try{localStorage.setItem("rotor-titan-best",JSON.stringify(this._best))}catch{}return this.updateMenuBest(),!0}return!1}updateMenuBest(){const t=it("menu-best"),e=it("menu-best-wave");t&&(t.textContent=this._best.score>0?this._best.score.toLocaleString("en-US"):"0"),e&&(e.textContent=this._best.wave>0?`WAVE ${String(this._best.wave).padStart(2,"0")} CLEARED`:"NO RECORD")}showMenu(){this.menu.classList.remove("hidden"),this.hud.classList.add("hidden"),this.upgrade.classList.add("hidden"),this.pause.classList.add("hidden"),this.gameover.classList.add("hidden"),this.menu.setAttribute("aria-hidden","false"),this.hud.setAttribute("aria-hidden","true"),this.clearFeed()}hideMenu(){this.menu.classList.add("hidden"),this.menu.setAttribute("aria-hidden","true")}showHud(){this.hud.classList.remove("hidden"),this.hud.setAttribute("aria-hidden","false")}hideHud(){this.hud.classList.add("hidden"),this.hud.setAttribute("aria-hidden","true")}showBriefing(){this.briefing.classList.remove("hidden"),this.briefing.setAttribute("aria-hidden","false")}hideBriefing(){this.briefing.classList.add("hidden"),this.briefing.setAttribute("aria-hidden","true")}showPause(){this.pause.classList.remove("hidden"),this.pause.setAttribute("aria-hidden","false")}hidePause(){this.pause.classList.add("hidden"),this.pause.setAttribute("aria-hidden","true")}showGameOver(t,e,n,i){const r=it("gameover-title"),a=it("gameover-kicker"),o=it("gameover-text");t==="city"?(a.textContent="SECTOR 07 OVERRUN",r.innerHTML="CITY<br><span>LOST</span>",o.textContent="The kaiju have flattened the evacuation corridor. All rotor units are ordered to withdraw."):(a.textContent="SIGNAL LOST",r.innerHTML="AIRFRAME<br><span>LOST</span>",o.textContent="The AH-79 is down. Sector 07 remains under kaiju control. Sky Control is scrambling another crew."),it("final-score").textContent=Math.floor(e.score).toLocaleString("en-US"),it("final-wave").textContent=Math.max(0,e.wave-1),it("final-kills").textContent=e.kills,it("final-accuracy").textContent=`${n.shots>0?Math.round(n.hits/n.shots*100):0}%`,it("gameover-best").textContent=i?"NEW PERSONAL BEST":`PERSONAL BEST ${this._best.score.toLocaleString("en-US")}`,this.gameover.classList.remove("hidden"),this.gameover.setAttribute("aria-hidden","false"),this.lockbox.classList.remove("active"),this.targetPanel.classList.remove("active"),this.reticle.classList.remove("target")}setTransition(t){this.transition.classList.toggle("active",t)}resetHud(){this.clearFeed(),this.hideWarning(),this.combo.classList.remove("active"),this.targetPanel.classList.remove("active"),this.lockbox.classList.remove("active"),this.banner.classList.remove("show"),this._lastScore=-1,this._lastHull=-1,this._lastCity=-1,this._lastMissiles=-1,this._targetName=""}updatePlayHud(t,e){var T;const n=Math.floor(t.score);n!==this._lastScore&&(this._lastScore=n,it("score").textContent=$m(n)),it("wave").textContent!==String(t.wave).padStart(2,"0")&&(it("wave").textContent=String(t.wave).padStart(2,"0"));const i=Math.max(0,Math.min(100,Math.round(t.cityIntegrity)));if(i!==this._lastCity){this._lastCity=i,it("city-pct").textContent=`${i}%`;const v=it("city-bar-fill");v.style.width=`${i}%`,v.classList.toggle("warn",i<=55&&i>28),v.classList.toggle("critical",i<=28);const L=it("city-state");L.textContent=i>70?"STABLE":i>35?"DAMAGED":"CRITICAL",L.classList.toggle("warn",i<=70&&i>35),L.classList.toggle("critical",i<=35)}const r=Math.round(e.pos.y),a=Math.round(e.vel.length()*1.95);it("alt").textContent=String(r).padStart(3,"0"),it("spd").textContent=String(a).padStart(3,"0");const o=Math.max(0,Math.round(e.hull/e.maxHull*100));if(o!==this._lastHull){this._lastHull=o,it("hull-pct").textContent=String(o).padStart(3,"0");const v=it("hull-fill");v.style.width=`${o}%`,v.classList.toggle("warn",o<=55&&o>25),v.classList.toggle("critical",o<=25)}const l=(e.yaw*180/Math.PI+360)%360;it("heading").textContent=`HDG ${String(Math.round(l)).padStart(3,"0")}`;const c=Math.round(e.heat*100),h=it("heat-fill");h.style.width=`${c}%`,h.classList.toggle("hot",c>55&&c<100),h.classList.toggle("over",e.overheat);let f="NOMINAL";e.overheat?f="OVERHEAT":c>70?f="CRITICAL":c>40&&(f="WARM"),f!==this._lastHeatState&&(this._lastHeatState=f,it("heat-state").textContent=f);const u=e.missiles;if(u!==this._lastMissiles){this._lastMissiles=u,it("missile-count").textContent=String(u).padStart(2,"0");const v=it("touch-missile-count");v&&(v.textContent=String(u).padStart(2,"0")),(T=document.querySelector(".missile-line"))==null||T.classList.toggle("empty",u<=0)}const p=it("missile-state");p.textContent=u>0?e.missileTimer>0&&u<e.stats.missileCap?"RELOAD":"READY":"EMPTY";const g=t.entities.filter(v=>!v.dead).length;it("hostiles").textContent=`${String(g).padStart(2,"0")} HOSTILE${g===1?"":"S"}`;const x=jm(t.waveElapsed);x!==this._lastTime&&(this._lastTime=x,it("objective-time").textContent=x);const m=it("objective-main");t.state==="clearing"?m.textContent="SECTOR CLEAR":(t.entities.some(v=>!v.dead&&v.isFlyer),m.textContent="NEUTRALIZE ALL KAIJU");const d=it("boundary-warning");d&&d.classList.toggle("show",e.boundaryWarn>0);const E=e.overheat;this.reticle.classList.toggle("overheat",E),it("reticle-label").textContent=E?"BARREL OVERHEAT":e.target?"TARGET LOCKED":"30MM VULCAN",this.updateCombo(t),this.updateRadar(t,e)}updateCombo(t){t.combo>1?(this.combo.classList.add("active"),it("combo-value").textContent=`x${t.combo}`,it("combo-fill").style.width=`${Math.max(0,Math.min(1,t.comboTimer/2.6))*100}%`):this.combo.classList.remove("active")}updateTarget(t,e){if(!t||t.dead){this.targetPanel.classList.remove("active"),this.lockbox.classList.remove("active"),this.reticle.classList.remove("target"),this._targetName="";return}const n=t.center;this.targetPanel.classList.add("active"),this.reticle.classList.add("target"),t.name!==this._targetName&&(this._targetName=t.name,it("target-name").textContent=t.cfg.name,it("target-class").textContent=t.cfg.classLabel);const i=Math.max(0,Math.round(t.hp/t.maxHp*100));i!==this._lastTargetHp&&(this._lastTargetHp=i,it("target-hp-fill").style.width=`${i}%`,it("target-hp-text").textContent=`${i}%`);const r=e.camera.position.distanceTo(n);if(it("target-range").textContent=`${Math.round(r).toString().padStart(3,"0")} M`,es.copy(n).project(e.camera),!(es.z>-1&&es.z<1)){this.lockbox.classList.remove("active");return}const o=(es.x*.5+.5)*window.innerWidth,l=(-es.y*.5+.5)*window.innerHeight;if(o<-120||l<-120||o>window.innerWidth+120||l>window.innerHeight+120){this.lockbox.classList.remove("active");return}const c=window.innerHeight/(2*Math.tan(e.camera.fov*Math.PI/360)),h=Math.max(42,Math.min(300,t.radius*2*c/Math.max(1,r)*1.15));this.lockbox.style.left=`${o}px`,this.lockbox.style.top=`${l}px`,this.lockbox.style.width=`${h}px`,this.lockbox.style.height=`${h}px`,this.lockbox.classList.add("active"),this.lockbox.classList.toggle("ready",e.missiles>0),it("lock-tag").textContent=e.missiles>0?"LOCK":"TRACK"}updateRadar(t,e){if(this._radarTimer-=1/60,this._radarTimer>0)return;this._radarTimer=.075;const n=this.radarCtx,i=220,r=220,a=i/2,o=r/2,l=99,h=l/230,f=e.yaw,u=Math.cos(f),p=Math.sin(f);n.clearRect(0,0,i,r),n.save(),n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.clip();const g=n.createRadialGradient(a,o,3,a,o,l);if(g.addColorStop(0,"rgba(10,25,30,0.52)"),g.addColorStop(.7,"rgba(4,11,15,0.52)"),g.addColorStop(1,"rgba(2,6,8,0.7)"),n.fillStyle=g,n.fillRect(0,0,i,r),t.world)for(const x of t.world.buildings){if(x.destroyed)continue;const m=x.x-e.pos.x,d=x.z-e.pos.z,E=a+(m*u-d*p)*h,T=o+(m*p+d*u)*h;if((E-a)**2+(T-o)**2>l*l)continue;n.fillStyle="rgba(105,132,144,0.13)";const v=Math.max(1.1,x.width*h*.55),L=Math.max(1.1,x.depth*h*.55);n.fillRect(E-v/2,T-L/2,v,L)}n.strokeStyle="rgba(94,231,255,0.14)",n.lineWidth=1;for(let x=1;x<=3;x++)n.beginPath(),n.arc(a,o,l/3*x,0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(a-l,o),n.lineTo(a+l,o),n.moveTo(a,o-l),n.lineTo(a,o+l),n.stroke(),n.strokeStyle="rgba(94,231,255,0.3)",n.beginPath(),n.arc(a,o,l-1,0,Math.PI*2),n.stroke();for(const x of t.entities){if(x.dead)continue;const m=x.center,d=m.x-e.pos.x,E=m.z-e.pos.z;let T=a+(d*u-E*p)*h,v=o+(d*p+E*u)*h,L=!1;const w=Math.hypot(T-a,v-o);if(w>l-5){const P=(l-5)/w;T=a+(T-a)*P,v=o+(v-o)*P,L=!0}const A=x.isFlyer?"#5ee7ff":"#ff5a2d";n.fillStyle=L?`${A}99`:A,n.beginPath(),n.arc(T,v,x.isFlyer?2.4:3.8,0,Math.PI*2),n.fill(),!L&&x===e.target&&(n.strokeStyle=A,n.lineWidth=1,n.beginPath(),n.arc(T,v,7+Math.sin(performance.now()/180)*1.4,0,Math.PI*2),n.stroke())}n.save(),n.translate(a,o),n.fillStyle="#f3f7fa",n.shadowColor="#5ee7ff",n.shadowBlur=7,n.beginPath(),n.moveTo(0,-6),n.lineTo(4.5,5),n.lineTo(0,2.6),n.lineTo(-4.5,5),n.closePath(),n.fill(),n.restore(),n.restore(),n.fillStyle="rgba(255,255,255,0.32)",n.font="7px monospace",n.textAlign="center",n.fillText("N",a,9),n.fillText("E",i-8,o+3),n.fillText("S",a,r-3),n.fillText("W",8,o+3)}hitMarker(t=!1){const e=this.hitmarker;e.classList.remove("show","crit"),e.offsetWidth,e.classList.add("show"),t&&e.classList.add("crit"),clearTimeout(this._hitTimer),this._hitTimer=setTimeout(()=>e.classList.remove("show","crit"),300)}damageFlash(t=!1){performance.now()-this._damageTimer<140||(this._damageTimer=performance.now(),this.healthFlash.classList.remove("flash"),this.healthFlash.offsetWidth,this.healthFlash.style.opacity=t?"1":"0.65",this.healthFlash.classList.add("flash"))}feed(t,e="kill"){const n=document.createElement("div");for(n.className="feed-item",n.innerHTML=t,e==="danger"&&(n.style.borderColor="#ff304c"),this.killFeed.prepend(n);this.killFeed.children.length>5;)this.killFeed.lastElementChild.remove();const i=setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),620)},3400);this._feedTimers.push(i)}clearFeed(){this.killFeed.innerHTML="";for(const t of this._feedTimers)clearTimeout(t);this._feedTimers=[]}showBanner(t,e,n,i=3e3){const r=this.banner;it("banner-kicker").textContent=t,it("banner-main").textContent=e,it("banner-sub").textContent=n,r.classList.remove("show"),r.offsetWidth,r.classList.add("show"),clearTimeout(this._bannerTimer),this._bannerTimer=setTimeout(()=>r.classList.remove("show"),i)}showWarning(t,e=1800){this._warningToken++;const n=this._warningToken;this.warningText.textContent=t,this.warningBanner.classList.add("show"),setTimeout(()=>{n===this._warningToken&&this.warningBanner.classList.remove("show")},e)}hideWarning(){this._warningToken++,this.warningBanner.classList.remove("show")}showUpgrade(t,e,n,i){this.upgrade.classList.remove("hidden"),this.upgrade.setAttribute("aria-hidden","false"),it("upgrade-wave-cleared").textContent=String(t.wave).padStart(2,"0"),it("upgrade-next-label").textContent=`NEXT: WAVE ${String(t.wave+1).padStart(2,"0")}`,this.setUpgradeStats(t,e),this.selectedUpgrade=null,this.upgradeTip.textContent="SELECT ONE UPGRADE",this.deployNextBtn.disabled=!0,this.deployNextBtn.querySelector(".btn-label").textContent=`DEPLOY WAVE ${String(t.wave+1).padStart(2,"0")}`,this.upgradeCards.innerHTML="",n.forEach((r,a)=>{const o=document.createElement("button");o.type="button",o.className="upgrade-card",o.dataset.cat=r.cat,o.innerHTML=`
        <div class="upgrade-card-top">
          <span class="upgrade-cat">${r.cat}</span>
          <span class="upgrade-index">0${a+1}</span>
        </div>
        <div class="upgrade-icon">${r.icon}</div>
        <div class="upgrade-name">${r.name}</div>
        <div class="upgrade-desc">${r.desc}</div>
        <div class="upgrade-delta">${r.delta}</div>
      `,o.addEventListener("click",()=>{this.selectedUpgrade||t.state!=="upgrade"||(this.selectedUpgrade=r,this.upgradeCards.querySelectorAll(".upgrade-card").forEach(l=>l.classList.add("taken")),o.classList.remove("taken"),o.classList.add("selected"),this.upgradeTip.textContent=`${r.name} INSTALLED — READY TO DEPLOY`,this.deployNextBtn.disabled=!1,i(r),this.setUpgradeStats(t,e))}),this.upgradeCards.appendChild(o)})}setUpgradeStats(t,e){it("upgrade-city").textContent=`${Math.round(t.cityIntegrity)}%`,it("upgrade-hull").textContent=`${Math.round(e.hull/e.maxHull*100)}%`,it("upgrade-kills").textContent=t.kills,it("upgrade-score").textContent=Math.floor(t.score).toLocaleString("en-US")}hideUpgrade(){this.upgrade.classList.add("hidden"),this.upgrade.setAttribute("aria-hidden","true")}updatePerks(t){if(this.perksLine.innerHTML="",!t.length){const e=document.createElement("span");e.className="perk-chip",e.textContent="STOCK AIRFRAME",this.perksLine.appendChild(e);return}for(const e of t.slice(-3)){const n=document.createElement("span");n.className="perk-chip",n.textContent=e.name,this.perksLine.appendChild(n)}}updateMute(t){const e=it("mute-btn");e&&(e.textContent=t?"SOUND OFF":"SOUND ON")}updateClock(){const t=it("menu-clock");if(!t)return;const e=new Date;t.textContent=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`}}const kr=[{id:"ap",cat:"WEAPON",name:"AP ROUNDS",icon:"30",desc:"Dense tungsten penetrators punch clean through kaiju hide.",delta:"+30% VULCAN DAMAGE",apply(s){s.stats.damage*=1.3}},{id:"feed",cat:"WEAPON",name:"DUAL FEED",icon:"II",desc:"Twin-linked ammunition feeds double the cannon's appetite.",delta:"+22% FIRE RATE",apply(s){s.stats.fireInterval*=.82}},{id:"hellfire",cat:"WEAPON",name:"HELLFIRE POD",icon:"M",desc:"A third launch rail and a heavier anti-titan warhead.",delta:"+1 MISSILE · +25% WARHEAD",apply(s){s.stats.missileCap+=1,s.stats.missileDamage*=1.25,s.missiles+=1}},{id:"seek",cat:"WEAPON",name:"SMART SEEK",icon:"⌁",desc:"Upgraded guidance logic snaps missiles onto evasive air targets.",delta:"+70% MISSILE TURN RATE",apply(s){s.stats.missileTurn*=1.7}},{id:"plating",cat:"AIRFRAME",name:"REACTIVE PLATING",icon:"◇",desc:"Layered ceramic tiles shrug off plasma impacts and debris.",delta:"+30 MAX HULL · REPAIR 30",apply(s){s.stats.maxHull+=30,s.maxHull=s.stats.maxHull,s.heal(30)}},{id:"nano",cat:"AIRFRAME",name:"NANO-FORGE",icon:"✚",desc:"Combat nanites cannibalize kaiju tissue to patch the airframe.",delta:"+4 HULL PER KILL",apply(s){s.stats.repairPerKill+=4,s.heal(35)}},{id:"turbine",cat:"AIRFRAME",name:"TURBINE OVERDRIVE",icon:"⟳",desc:"The rotor gearbox is retuned far past its civilian redline.",delta:"+17% ROTOR SPEED",apply(s){s.stats.speed*=1.17}},{id:"repair",cat:"AIRFRAME",name:"FIELD REFIT",icon:"＋",desc:"Sky Control drops a full repair pallet and spare armor sections.",delta:"REPAIR 55 · +10 MAX HULL",apply(s){s.stats.maxHull+=10,s.maxHull=s.stats.maxHull,s.heal(55)}},{id:"coolant",cat:"SYSTEM",name:"CRYO LOOP",icon:"❄",desc:"Sub-zero coolant races through the barrel shroud.",delta:"+55% COOLING · -10% HEAT",apply(s){s.stats.coolRate*=1.55,s.stats.heatPerShot*=.9}},{id:"targeting",cat:"SYSTEM",name:"TARGETING AI",icon:"◎",desc:"Predictive optics find fractures in armor before you do.",delta:"+13% CRITICAL CHANCE",apply(s){s.stats.critChance+=.13}},{id:"autorepair",cat:"SYSTEM",name:"AUTO-REPAIR",icon:"↻",desc:"Damage-control routines seal micro-fractures during lulls.",delta:"+1.6 HULL / SEC OUT OF COMBAT",apply(s){s.stats.regen+=1.6,s.heal(10)}},{id:"heat",cat:"SYSTEM",name:"HEAT SINKS",icon:"≋",desc:"Vented barrel shrouds dump waste heat into the rotor wash.",delta:"-18% HEAT BUILD-UP",apply(s){s.stats.heatPerShot*=.82}}],Jm={WEAPON:kr.filter(s=>s.cat==="WEAPON"),AIRFRAME:kr.filter(s=>s.cat==="AIRFRAME"),SYSTEM:kr.filter(s=>s.cat==="SYSTEM")};function Qm(){return["WEAPON","AIRFRAME","SYSTEM"].map(t=>{const e=Jm[t];return e[Math.floor(Math.random()*e.length)]})}const El=new R(0,0,1),qs=new R;new R;const Tl=new R;class t0{constructor(t,e,n,i,r,a,o){this.scene=t,this.effects=e,this.damage=a,this.turnRate=o,this.target=r,this.vel=i.clone().normalize(),this.speed=95,this.life=6,this.dead=!1,this.trailTimer=0;const l=new he,c=new Zt({color:6713466,roughness:.42,metalness:.65}),h=new wt(new ge(.11,.14,1.5,7),c);h.rotation.x=Math.PI/2,l.add(h);const f=new wt(new De(.14,.55,7),new Zt({color:3094076,roughness:.4,metalness:.75}));f.rotation.x=Math.PI/2,f.position.z=1,l.add(f);for(let p=0;p<4;p++){const g=new wt(new Lt(.03,.42,.4),new Zt({color:2435889,roughness:.55,metalness:.4}));g.position.z=-.55,g.rotation.z=p*Math.PI/2,g.position.x=Math.cos(p*Math.PI/2)*.18,g.position.y=Math.sin(p*Math.PI/2)*.18,l.add(g)}const u=new Je(new Ge({map:e.texture,color:16757342,transparent:!0,blending:de,depthWrite:!1}));u.position.z=-1.1,u.scale.setScalar(1.9),l.add(u),this.flame=u,l.position.copy(n),l.quaternion.setFromUnitVectors(El,this.vel),t.add(l),this.mesh=l,this.origin=n}update(t,e){if(this.dead)return null;if(this.life-=t,this.life<=0)return"expire";if(this.target&&!this.target.dead){Tl.copy(this.target.center),qs.subVectors(Tl,this.mesh.position);const n=qs.length();if(n<Math.max(7,this.target.radius*.55))return"hit";qs.multiplyScalar(1/Math.max(.001,n));const i=this.vel.clone();this.vel.lerp(qs,Math.min(1,t*this.turnRate)).normalize(),i.angleTo(this.vel)>.28&&this.vel.lerpVectors(i,this.vel,.4).normalize()}if(this.mesh.position.addScaledVector(this.vel,this.speed*t),this.mesh.quaternion.setFromUnitVectors(El,this.vel),this.flame.material.opacity=.72+Math.random()*.28,this.flame.scale.setScalar(1.55+Math.random()*.7),this.trailTimer-=t,this.trailTimer<=0&&(this.trailTimer=.024,this.effects.missileTrail(this.mesh.position)),this.mesh.position.y<2.2)return"ground";if(Math.abs(this.mesh.position.x)>300||Math.abs(this.mesh.position.z)>300)return"expire";for(const n of e){if(n.dead)continue;if(this.mesh.position.distanceTo(n.center)<Math.min(n.radius*.72,11))return"hit"}return null}dispose(){this.dead=!0,this.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material!==this.effects.texture&&!Array.isArray(t.material)&&(!t.material.map||t.material.map!==this.effects.texture)&&t.material.dispose()})}}class e0{constructor(t,e,n,i,r=16734765,a=52){this.scene=t,this.effects=e,this.vel=i.clone().normalize(),this.speed=a,this.life=5.5,this.dead=!1,this.trailTimer=0,this.color=new ct(r);const o=new he,l=new wt(new Oi(.52,1),new le({color:new ct(r).lerp(new ct("#ffffff"),.35)}));o.add(l);const c=new Je(new Ge({map:e.texture,color:r,transparent:!0,blending:de,depthWrite:!1,opacity:.95}));c.scale.setScalar(4.6),o.add(c),this.core=l,this.glow=c,o.position.copy(n),t.add(o),this.mesh=o}update(t,e){if(this.dead)return null;if(this.life-=t,this.life<=0)return"expire";this.mesh.position.addScaledVector(this.vel,this.speed*t),this.core.rotation.x+=t*4,this.core.rotation.y+=t*3;const n=.9+Math.sin(performance.now()/90)*.12;return this.glow.scale.setScalar(4.5*n),this.trailTimer-=t,this.trailTimer<=0&&(this.trailTimer=.038,this.effects.spark(this.mesh.position,1,{speed:1.6,color:this.color.clone().lerp(new ct("#ffffff"),.3),life:.35,size:.42,gravity:0,drag:2.2})),this.mesh.position.distanceTo(e)<3.1?"player":this.mesh.position.y<1.6?"ground":Math.abs(this.mesh.position.x)>300||Math.abs(this.mesh.position.z)>300?"expire":null}dispose(){this.dead=!0,this.scene.remove(this.mesh),this.core.geometry.dispose(),this.core.material.dispose(),this.glow.material.dispose()}}const Wn=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;window.matchMedia("(prefers-reduced-motion: reduce)").matches;class n0{constructor(){this.canvas=document.getElementById("game-canvas"),this.renderer=new Tm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,Wn?1.35:1.6)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=me,this.renderer.toneMapping=Cl,this.renderer.toneMappingExposure=1.26,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Al,this.scene=new bm,this.camera=new Ie(58,window.innerWidth/window.innerHeight,.09,1400),this.camera.rotation.order="YXZ",this.camera.position.set(16,40,112),this.camera.lookAt(-12,18,7),this.scene.add(this.camera),this.audio=new Xm,this.effects=new Wm(this.scene,this.camera),this.world=new km(this.scene,{lowPower:Wn});for(const t of this.world.buildings)t.mesh.userData.building=t;this.player=new Km({camera:this.camera,canvas:this.canvas,world:this.world,effects:this.effects,audio:this.audio,isTouch:Wn}),this.ui=new Zm,this.entities=[],this.missiles=[],this.orbs=[],this.target=null,this.state="menu",this.time=0,this.lastFrame=performance.now(),this.clock=new Nm,this.pauseState="playing",this.menuMouse={x:0,y:0},this.menuTargetMouse={x:0,y:0},this.menuFxTimer=0,this.incomingWarned=!1,this.menuKaiju=null,this.initialized=!1,this.autoStart=sessionStorage.getItem("rotor-auto-deploy")==="1";try{sessionStorage.removeItem("rotor-auto-deploy")}catch{}this.game={state:"menu",wave:0,waveElapsed:0,clearTimer:0,score:0,kills:0,cityIntegrity:100,combo:1,comboTimer:0,upgrades:[],entities:this.entities,world:this.world},this._bindCallbacks(),this._bindUI(),this._bindGlobalEvents(),this._resize(),this._createMenuActors(),this._prewarmFires(),this.ui.showMenu(),this.camera.fov=58,this.camera.updateProjectionMatrix(),this._loop=this._loop.bind(this),requestAnimationFrame(t=>{this.lastFrame=t,requestAnimationFrame(this._loop)}),setTimeout(()=>{document.body.classList.remove("is-loading")},120),this._clockTimer=setInterval(()=>this.ui.updateClock(),1e3),this.ui.updateClock(),this.ui.updateMute(this.audio.muted),this.autoStart&&setTimeout(()=>this.startMission(!0),750)}_bindCallbacks(){this.player.setCallbacks({onShot:(t,e,n)=>this._handleShot(t,e,n),onMissile:(t,e,n,i,r)=>this._spawnMissile(t,e,n,i,r),onOverheat:()=>{this.ui.showWarning("VULCAN OVERHEAT",1700),this.ui.feed("<b>WARNING</b> BARREL OVERHEAT","danger")},onHeatReady:()=>this.ui.feed("VULCAN <b>READY</b>","ok"),onMissileReload:t=>{t===this.player.stats.missileCap&&this.ui.feed("HELLFIRE <b>RELOADED</b>","ok")},onNoMissiles:()=>this.ui.showWarning("MISSILE RACK EMPTY",1300),onDamage:(t,e)=>{this.ui.damageFlash(t>16),this.audio.playerHit(),this.player.addShake(.018),this.player.lastDamageAt=this.time,e>0&&e/this.player.maxHull<.25&&!this._hullWarningShown&&(this._hullWarningShown=!0,this.ui.showWarning("HULL CRITICAL",2500),this.audio.alarm())},onDeath:()=>this.gameOver("airframe"),onPointerLockChange:t=>{!t&&this.state==="playing"&&this.time>2.2&&this.pauseGame()}}),this.player.cockpit.hide()}_bindUI(){document.getElementById("start-btn").addEventListener("click",()=>{this.audio.uiClick(),this.player.requestPointerLock(),this.startMission()}),document.getElementById("briefing-btn").addEventListener("click",()=>{this.audio.uiClick(),this.ui.showBriefing()}),document.getElementById("brief-close").addEventListener("click",()=>{this.audio.uiClick(),this.ui.hideBriefing()}),this.ui.briefing.addEventListener("click",t=>{t.target===this.ui.briefing&&this.ui.hideBriefing()}),document.getElementById("mute-btn").addEventListener("click",()=>{this.audio.init();const t=this.audio.toggleMute();this.ui.updateMute(t)}),document.getElementById("deploy-next-btn").addEventListener("click",()=>{this.state==="upgrade"&&(this.audio.uiClick(),this.audio.init(),this.ui.hideUpgrade(),this.state="playing",this.game.state="playing",this.player.start(),this.player.requestPointerLock(),this.spawnWave(this.game.wave+1))}),document.getElementById("resume-btn").addEventListener("click",()=>this.resumeGame()),document.getElementById("quit-btn").addEventListener("click",()=>{this.audio.uiClick(),this._reloadToMenu()}),document.getElementById("retry-btn").addEventListener("click",()=>{this.audio.uiClick();try{sessionStorage.setItem("rotor-auto-deploy","1")}catch{}this.ui.setTransition(!0),this.state="transition",setTimeout(()=>window.location.reload(),420)}),document.getElementById("menu-btn").addEventListener("click",()=>{this.audio.uiClick(),this._reloadToMenu()}),window.addEventListener("pointerdown",()=>{this.audio.ctx&&this.audio.ctx.state==="suspended"&&this.audio.ctx.resume()},{passive:!0})}_bindGlobalEvents(){window.addEventListener("resize",()=>this._resize()),window.addEventListener("keydown",t=>{t.code==="KeyM"&&!t.repeat&&(this.audio.init(),this.ui.updateMute(this.audio.toggleMute())),t.code==="Escape"&&(this.state==="playing"||this.state==="clearing"?(t.preventDefault(),this.pauseGame()):this.state==="paused"?(t.preventDefault(),this.resumeGame()):this.ui.briefing.classList.contains("hidden")===!1&&this.ui.hideBriefing())}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="playing"||this.state==="clearing")&&this.pauseGame()}),window.addEventListener("pointermove",t=>{this.state==="menu"&&(this.menuTargetMouse.x=t.clientX/window.innerWidth*2-1,this.menuTargetMouse.y=t.clientY/window.innerHeight*2-1)}),this.canvas.addEventListener("click",()=>{this.state==="playing"&&!Wn&&document.pointerLockElement!==this.canvas&&this.player.requestPointerLock()})}_resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,Wn?1.35:1.6)),this.effects.setScale(e)}_createMenuActors(){this._removeMenuActors(),this.menuKaiju=new _l(this.scene,null,"behemoth",new R(8,0,36),1),this.menuKaiju.root.rotation.y=0,this.menuKaiju.attackCooldown=9999,this.menuKaiju.speed=0,this.menuDummyPlayer=new R(20,28,15),this.menuFxTimer=.2}_removeMenuActors(){this.menuKaiju&&(this.scene.remove(this.menuKaiju.root),this.menuKaiju=null)}_prewarmFires(){var t;if(this.fireTimer=0,!!((t=this.world.fires)!=null&&t.length))for(const e of this.world.fires)this.effects.smokePuff(new R(e.x,e.y+2,e.z),7,{speed:2.4,life:6.5,size:3.1,color:new ct("#3c3531"),alpha:.26,gravity:-.55,rise:2.1}),this.effects.spark(new R(e.x,e.y+1,e.z),5,{speed:7,color:new ct("#ff9d4f"),life:1.4,size:.4,gravity:1.2,drag:.8})}_updateAmbientFires(t){const e=this.world.fires;if(!e||!e.length||(this.fireTimer-=t,this.fireTimer>0))return;this.fireTimer=.2+Math.random()*.14;const n=e[Math.floor(Math.random()*e.length)],i=new R(n.x+(Math.random()-.5)*4,n.y+2+Math.random()*2,n.z+(Math.random()-.5)*4);this.effects.smokePuff(i,1,{speed:1.3,life:5.6,size:2.8+Math.random()*1.5,color:new ct("#38322f"),alpha:.25,gravity:-.7,rise:2.4}),Math.random()<.34&&this.effects.spark(i,1+Math.floor(Math.random()*2),{speed:6,color:new ct("#ff9a4c"),life:1.2,size:.36,gravity:1.4,drag:.7})}startMission(t=!1){this.state==="menu"&&(this.audio.init(),!t&&!Wn&&this.player.requestPointerLock(),this.ui.hideBriefing(),this.state="transition",this.game.state="transition",this.ui.setTransition(!0),setTimeout(()=>{if(this.ui.hideMenu(),this.ui.showHud(),this._removeMenuActors(),this.camera.fov=70,this.camera.updateProjectionMatrix(),this.resetRun(),this.player.start(),this.state="playing",this.game.state="playing",this.spawnWave(1),this.ui.setTransition(!1),Wn){const e=document.getElementById("look-hint");e&&(e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),5200))}},460))}resetRun(){for(const t of this.entities)this.scene.remove(t.root);this.entities.length=0;for(const t of this.missiles)t.dispose();this.missiles.length=0;for(const t of this.orbs)t.dispose();this.orbs.length=0,this.target=null,this.player.resetRun(),this.player.target=null,this.player.cockpit.hide(),this.game.wave=0,this.game.score=0,this.game.kills=0,this.game.cityIntegrity=100,this.game.waveElapsed=0,this.game.clearTimer=0,this.game.combo=1,this.game.comboTimer=0,this.game.upgrades=[],this.game.entities=this.entities,this.game.world=this.world,this.game.state="playing",this._hullWarningShown=!1,this.ui.resetHud(),this.ui.updatePerks([]),this.ui.updateMute(this.audio.muted)}spawnWave(t){for(const l of this.entities)this.scene.remove(l.root);this.entities.length=0;for(const l of this.missiles)l.dispose();this.missiles.length=0;for(const l of this.orbs)l.dispose();this.orbs.length=0,this.target=null,this.player.target=null,this.game.wave=t,this.game.waveElapsed=0,this.game.clearTimer=0,this.game.combo=1,this.game.comboTimer=0,this.game.state="playing",this.state="playing",this._hullWarningShown=!1,t>1&&(this.game.cityIntegrity=Math.min(100,this.game.cityIntegrity+3),this.player.heal(9));const e=Math.min(4,1+Math.floor((t-1)/2)+(t>=6?1:0)),n=Math.min(5,t===1?1:1+Math.floor(t/2)),i=[new R(0,0,82),new R(-48,0,0),new R(52,0,-90),new R(0,0,-164)];for(let l=0;l<e;l++){let c=l%2===0?"behemoth":"ravager";t%4===0&&l===0&&(c="colossus");const h=i[l].clone();h.z+=t%3*4;const f=new _l(this.scene,this.world,c,h,t);f.speed=f.cfg.speed*(1+Math.min(.35,t*.022)),f.onBuildingHit=(u,p,g)=>this._handleBuildingHit(u,p,g),this.entities.push(f)}const r=["ashwing","nightwing"];for(let l=0;l<n;l++){const c=Math.random()*Math.PI*2,h=90+Math.random()*65,f=new R(this.player.pos.x+Math.cos(c)*h,48+Math.random()*30,this.player.pos.z+Math.sin(c)*h),u=r[t>=3?l%2:0],p=new Hm(this.scene,u,f,t);p.orbitRadius=38+Math.random()*38,p.fireCallback=(g,x,m,d)=>this._spawnEnemyOrb(g,x,m,d),this.entities.push(p)}const a=this.entities.length,o=t%4===0;this.ui.showBanner(`WAVE ${String(t).padStart(2,"0")}`,o?"OMEGA BREACH":"BREACH DETECTED",`${String(a).padStart(2,"0")} HOSTILES // SECTOR 07`,3200),this.ui.feed(`<b>WAVE ${String(t).padStart(2,"0")}</b> CONTACT IN SECTOR 07`),this.ui.showWarning(o?"CLASS VI KAIJU DETECTED":"KAIJU SIGNATURES DETECTED",2500),this.audio.roar(o),this.audio.updateEngine(0,!1,!0),this.ui.updatePerks(this.game.upgrades)}_handleShot(t,e,n){if(this.state!=="playing")return;const i=new Fm(t,e,.5,700),r=[];for(const l of this.entities)if(!l.dead)for(const c of l.hitMeshes)r.push(c);for(const l of this.world.buildings)l.destroyed||r.push(l.mesh);const a=i.intersectObjects(r,!0);let o=t.clone().addScaledVector(e,420);for(const l of a){const c=l.object.userData.entity;if(c){if(c.dead)continue;const u=(l.object.userData.part||"body")==="head"||Math.random()<n.critChance,p=n.damage*(u?2.15:1)*(.9+Math.random()*.2),g=c.takeDamage(p,u);this.player.registerHit(),this.ui.hitMarker(u),this.audio.hit(u),this.effects.hit(l.point,c.cfg.accent,u),this.game.score+=Math.round(p*.13*this.game.combo),this.game.combo=Math.min(9,this.game.combo+1),this.game.comboTimer=2.6,o=l.point.clone(),g!=null&&g.killed&&this._handleKill(c),this.effects.tracer(t,o);return}if(l.object.userData.building){this.effects.spark(l.point,5,{speed:7,color:new ct(13357782),life:.3,size:.18,gravity:9,drag:1.4}),this.effects.tracer(t,l.point);return}}this.effects.tracer(t,o)}_handleKill(t){if(t._killedHandled)return;t._killedHandled=!0,t.dead=!0,this.game.kills++;const e=t.isKaiju,n=e?900+this.game.wave*130:260+this.game.wave*30,i=Math.round(n*Math.max(1,this.game.combo*.75));this.game.score+=i;const r=t.center.clone(),a=t.cfg.accent,o=t.cfg.name;if(e){this.effects.explosion(r,t.type==="colossus"?3.2:2.1,a),this.effects.buildingCollapse(r.clone().setY(8),t.type==="colossus"?45:30),this.audio.explosion(t.type==="colossus"?1.8:1.15),this.player.addShake(t.type==="colossus"?.065:.032),this.world.flash(r,18),this.ui.showWarning(`${o} DOWN`,1900);const l=t.type==="colossus"?3:1;for(let c=0;c<l;c++)setTimeout(()=>{if(!t.root.parent)return;const h=t.center.clone();h.x+=(Math.random()-.5)*8,h.z+=(Math.random()-.5)*8,h.y=6+Math.random()*13,this.effects.explosion(h,1.5,a),this.audio.explosion(1),this.world.flash(h,10)},420+c*430);this.ui.feed(`<b>+${i}</b> KAIJU NEUTRALIZED // ${o}`)}else this.effects.explosion(r,1.25,a),this.audio.explosion(.8),this.player.addShake(.008),this.ui.feed(`<b>+${i}</b> AIRBORNE KILL // ${o}`);if(this.player.stats.repairPerKill>0){const l=this.player.heal(this.player.stats.repairPerKill);l>0&&this.ui.feed(`NANO-FORGE <b>+${Math.round(l)} HULL</b>`,"ok")}this.game.combo>=4&&this.ui.feed(`<b>x${this.game.combo}</b> KILL CHAIN`,"ok"),this.ui.updatePlayHud(this.game,this.player)}_handleBuildingHit(t,e,n){this.game.cityIntegrity=Math.max(0,this.game.cityIntegrity-(e?5.5:1.7)),this.player.addShake(e?.032:.011),this.effects.smokePuff(n,e?36:10,{speed:e?6:3,life:e?4:2.2,size:e?2.8:1.5,color:new ct("#5c5b59"),alpha:.42}),this.effects.spark(n,e?24:8,{speed:e?18:8,color:new ct("#ff9b52"),life:.8,size:.55,gravity:13}),e?(this.effects.buildingCollapse(new R(t.x,0,t.z),t.height),this.audio.explosion(1.2),this.world.flash(new R(t.x,18,t.z),15),this.ui.feed("<b>CIVILIAN BLOCK LOST</b> CITY INTEGRITY -5%","danger"),this.ui.damageFlash(!0)):this.audio.explosion(.36),this.game.cityIntegrity<=0&&this.state==="playing"&&this.gameOver("city")}_spawnMissile(t,e,n,i,r){const a=new t0(this.scene,this.effects,t,e,n,i,r);this.missiles.push(a),this.ui.feed("<b>HELLFIRE</b> AWAY","ok")}_spawnEnemyOrb(t,e,n,i){const r=Math.min(.8,e.distanceTo(n)/80),a=n.clone().addScaledVector(this.player.vel,r*.35);a.x+=(Math.random()-.5)*3.5,a.y+=(Math.random()-.5)*2.5,a.z+=(Math.random()-.5)*3.5;const o=a.sub(e).normalize(),l=new e0(this.scene,this.effects,e,o,i,52+this.game.wave*2.4);this.orbs.push(l),this.audio.enemyShot()}_updateMissiles(t){for(let e=this.missiles.length-1;e>=0;e--){const n=this.missiles[e],i=n.update(t,this.entities);i&&(this._explodeMissile(n,i),n.dispose(),this.missiles.splice(e,1))}}_explodeMissile(t,e){const n=t.mesh.position.clone();this.effects.explosion(n,2.2,16747077),this.effects.debrisBurst(n,12,.8),this.audio.explosion(1.25),this.world.flash(n,13);const i=this.player.pos.distanceTo(n);i<110&&this.player.addShake(.035*(1-i/110));let r=t.target;if(!r||r.dead){let a=null,o=30;for(const l of this.entities){if(l.dead)continue;const c=l.center.distanceTo(n);c<o&&(o=c,a=l)}r=a}if(r&&!r.dead&&r.center.distanceTo(n)<30){const a=r.takeDamage(t.damage,!0);this.player.registerHit(),this.ui.hitMarker(!0),this.game.score+=Math.round(t.damage*.16*this.game.combo),a!=null&&a.killed&&this._handleKill(r)}for(const a of this.entities)if(!(a.dead||a===r)&&a.center.distanceTo(n)<22){const o=a.takeDamage(t.damage*.32,!1);o!=null&&o.killed&&this._handleKill(a)}e==="expire"&&this.effects.smokePuff(n,5,{speed:1.6,life:1.2,size:1.1,alpha:.2})}_updateOrbs(t){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n],r=i.update(t,this.player.pos);if(!r)continue;const a=i.mesh.position.clone();r==="player"?(this.effects.explosion(a,.8,i.color.getHex()),this.player.damage(8+this.game.wave*1.1,"plasma"),this.ui.damageFlash(!1)):r==="ground"&&(this.effects.explosion(a,.55,i.color.getHex()),a.distanceTo(this.player.pos)<35&&this.player.addShake(.004)),i.dispose(),this.orbs.splice(n,1)}const e=this.orbs.some(n=>n.mesh.position.distanceTo(this.player.pos)<48);e&&!this.incomingWarned?(this.incomingWarned=!0,this.ui.showWarning("PLASMA INBOUND",1200)):e||(this.incomingWarned=!1)}_updateTarget(){if(this.state!=="playing"&&this.state!=="clearing"){this.target=null,this.player.target=null;return}const t=new R;this.camera.getWorldDirection(t);let e=null,n=1/0;const i=new R;for(const r of this.entities){if(r.dead||(i.copy(r.center),this.camera.position.distanceTo(i)>520)||i.clone().sub(this.camera.position).normalize().dot(t)<.55)continue;const c=i.clone().project(this.camera);if(c.z<-1||c.z>1)continue;const h=Math.hypot(c.x,c.y),f=r.isFlyer?.16:.28;h<f&&h<n&&(n=h,e=r)}this.target=e,this.player.target=e}_updateEntities(t){for(let e=this.entities.length-1;e>=0;e--){const n=this.entities[e];n.update(t,this.time,this.player.pos),n.remove&&(this.scene.remove(n.root),this.entities.splice(e,1))}}_beginWaveClear(){this.state==="playing"&&(this.state="clearing",this.game.state="clearing",this.game.clearTimer=2.7,this.game.score+=500+this.game.wave*210,this.player.firing=!1,this.player.heal(8),this.game.cityIntegrity=Math.min(100,this.game.cityIntegrity+2.5),this.target=null,this.player.target=null,this.ui.showBanner("SECTOR 07","AREA SECURED","CIVIL DEFENSE CREWS MOVING IN",2600),this.ui.feed("<b>SECTOR CLEAR</b> SALVAGE SECURED","ok"),this.audio.upgrade())}_openUpgrade(){var e;if(this.state!=="clearing")return;this.state="upgrade",this.game.state="upgrade",this.player.stop(),this.audio.updateEngine(0,!1,!1);try{(e=document.exitPointerLock)==null||e.call(document)}catch{}const t=Qm();this.ui.showUpgrade(this.game,this.player,t,n=>{n.apply(this.player),this.player.applyStats(),this.game.upgrades.push(n),this.ui.updatePerks(this.game.upgrades),this.audio.upgrade()})}_updatePlaying(t){this.player.update(t,this.time),this._updateTarget(),this._updateEntities(t),this._updateMissiles(t),this._updateOrbs(t),this.state==="playing"?(this.game.waveElapsed+=t,this.game.comboTimer-=t,this.game.comboTimer<=0&&this.game.combo>1&&(this.game.combo=1),this.entities.length>0&&this.entities.every(n=>n.dead)&&this._beginWaveClear(),this.entities.length===0&&this._beginWaveClear()):this.state==="clearing"&&(this.game.comboTimer-=t,this.game.clearTimer-=t,this.player.firing=!1,this.game.clearTimer<=0&&this._openUpgrade()),this.ui.updatePlayHud(this.game,this.player),this.ui.updateTarget(this.target,this.player)}_updateMenu(t){this.menuMouse.x+=(this.menuTargetMouse.x-this.menuMouse.x)*Math.min(1,t*2.2),this.menuMouse.y+=(this.menuTargetMouse.y-this.menuMouse.y)*Math.min(1,t*2.2);const e=this.time,n=this.menuMouse.x*3.2,i=this.menuMouse.y*1.8;if(this.camera.position.x=16+Math.sin(e*.08)*1.1+n,this.camera.position.y=40+Math.sin(e*.17)*.55-i*.5,this.camera.position.z=112+Math.cos(e*.06)*1.2,this.camera.lookAt(-12+this.menuMouse.x*2.2,18-this.menuMouse.y*1.2,7),this.camera.updateMatrixWorld(),this.menuKaiju&&(this.menuKaiju.update(t,e,this.menuDummyPlayer||this.player.pos),this.menuKaiju.root.rotation.y=Math.sin(e*.12)*.06),this.menuFxTimer-=t,this.menuFxTimer<=0){this.menuFxTimer=1.6+Math.random()*1.8;const r=new R((Math.random()-.5)*65,3+Math.random()*11,5+(Math.random()-.5)*68);this.effects.smokePuff(r,5,{speed:2.2,life:4.5,size:2.5,color:new ct("#4b4a48"),alpha:.27,gravity:-.4,rise:1.2}),this.effects.spark(r,4,{speed:4,color:new ct("#ff7e3d"),life:1.2,size:.5,gravity:1}),this.world.flash(r,5),Math.random()<.35&&this.effects.explosion(r,.5,16738862)}}pauseGame(){var t;if(!(this.state!=="playing"&&this.state!=="clearing")){this.pauseState=this.state,this.state="paused",this.game.state="paused",this.player.stop(),this.audio.updateEngine(0,!1,!1),this.ui.hideWarning(),this.ui.showPause();try{(t=document.exitPointerLock)==null||t.call(document)}catch{}}}resumeGame(){this.state==="paused"&&(this.audio.init(),this.audio.uiClick(),this.state=this.pauseState,this.game.state=this.pauseState,this.ui.hidePause(),this.player.start(),this.player.requestPointerLock(),this.audio.updateEngine(this.player.vel.length(),!1,!0))}gameOver(t){var i;if(this.state==="gameover"||this.state==="transition")return;this.state="gameover",this.game.state="gameover",this.player.stop(),this.audio.updateEngine(0,!1,!1),this.audio.explosion(t==="city"?1.5:2);try{(i=document.exitPointerLock)==null||i.call(document)}catch{}const e=Math.max(0,this.game.wave-1),n=this.ui.saveBest(Math.floor(this.game.score),e);this.ui.showGameOver(t,this.game,this.player,n),this.ui.hideWarning(),this.target=null,this.player.target=null}_reloadToMenu(){this.ui.setTransition(!0),this.state="transition",setTimeout(()=>window.location.reload(),420)}_loop(t){const e=Math.min(.05,Math.max(0,(t-this.lastFrame)/1e3));this.lastFrame=t,this.time+=e,this.world.update(e,this.time),this.effects.update(e,this.time),this._updateAmbientFires(e),this.state==="menu"?this._updateMenu(e):(this.state==="playing"||this.state==="clearing")&&this._updatePlaying(e),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this._loop)}}window.addEventListener("error",s=>{console.error("ROTOR//TITAN runtime error",s.error||s.message)});const bl=()=>{try{window.__rotorGame=new n0}catch(s){console.error(s),document.body.classList.remove("is-loading")}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bl):bl();
