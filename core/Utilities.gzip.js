gzip=function(){var r=function(){var r=[],t=3988292384;function n(r){var n,e,o,f,i=-1;for(n=0,o=r.length;n<o;n+=1){for(f=255&(i^r[n]),e=0;e<8;e++)1==(1&f)?f=f>>>1^t:f>>>=1;i=i>>>8^f}return-1^i}function e(t,n){var o,f,i;if(void 0!==e.crc&&n&&t||(e.crc=-1,t)){for(o=e.crc,f=0,i=t.length;f<i;f+=1)o=o>>>8^r[255&(o^t[f])];return e.crc=o,-1^o}}return function(){var n,e,o;for(e=0;e<256;e++){for(n=e,o=0;o<8;o++)1&n?n=t^n>>>1:n>>>=1;r[e]=n>>>0}}(),{execute:function(r,t){var o,f="string"==typeof r?(o=r,Array.prototype.map.call(o,function(r){return r.charCodeAt(0)})):r;return((t?n(f):e(f))>>>0).toString(16)},direct:n,table:e}}();console.log(r);var t=function(){var r,t,n,e,o,f,i,u,l,a,s,c,h,d,v,m,_,w,x,p,b,g,A,y,M,E,C,F,X,k,B,I,T,N,z,L,S,O,j,H,R,U,D,Z,V,q,G,P,W,J,K,Q,Y,$,rr,tr,nr=32768,er=0,or=1,fr=2,ir=6,ur=!1,lr=8192,ar=2*nr,sr=3,cr=258,hr=8192,dr=hr,vr=32768,mr=vr-1,_r=nr-1,wr=0,xr=4096,pr=cr+sr+1,br=nr-pr,gr=1,Ar=15,yr=7,Mr=29,Er=256,Cr=256,Fr=Er+1+Mr,Xr=30,kr=19,Br=16,Ir=17,Tr=18,Nr=2*Fr+1,zr=parseInt((15+sr-1)/sr,10),Lr=null;function Sr(){this.fc=0,this.dl=0}function Or(){this.dyn_tree=null,this.static_tree=null,this.extra_bits=null,this.extra_base=0,this.elems=0,this.max_length=0,this.max_code=0}function jr(r,t,n,e){this.good_length=r,this.max_lazy=t,this.nice_length=n,this.max_chain=e}function Hr(){this.next=null,this.len=0,this.ptr=[],this.off=0}hr>32768&&console.error("error: INBUFSIZ is too small"),nr<<1>65536&&console.error("error: WSIZE is too large"),258!==cr&&console.error("error: Code too clever");var Rr=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ur=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Dr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Zr=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Vr=[new jr(0,0,0,0),new jr(4,4,8,4),new jr(4,5,16,8),new jr(4,6,32,32),new jr(4,4,16,16),new jr(8,16,32,32),new jr(8,16,128,128),new jr(8,32,128,256),new jr(32,128,258,1024),new jr(32,258,258,4096)];function qr(t){t.next=r,r=t}function Gr(r){return s[nr+r]}function Pr(r,t){return s[nr+r]=t}function Wr(e){Lr[f+o++]=e,f+o===lr&&function(){var e,i;if(0!==o){for(null!==r?(u=r,r=r.next):u=new Hr,u.next=null,u.len=u.off=0,e=u,null===t?t=n=e:n=n.next=e,e.len=o-f,i=0;i<e.len;i++)e.ptr[i]=Lr[f+i];o=f=0}var u}()}function Jr(r){r&=65535,f+o<lr-2?(Lr[f+o++]=255&r,Lr[f+o++]=r>>>8):(Wr(255&r),Wr(r>>>8))}function Kr(){v=(v<<zr^255&u[b+sr-1])&mr,m=Gr(v),s[b&_r]=m,Pr(v,b)}function Qr(r,t){_t(t[r].fc,t[r].dl)}function Yr(r){return 255&(r<256?Z[r]:Z[256+(r>>7)])}function $r(r,t,n){return r[t].fc<r[n].fc||r[t].fc===r[n].fc&&U[t]<=U[n]}function rt(r,t,n){var e;for(e=0;e<n&&tr<rr.length;e++)r[t+e]=255&rr[tr++];return e}function tt(r){var t,n,e,o,f=M,i=b,l=p,a=b>br?b-br:wr,c=b+cr,h=u[i+l-1],d=u[i+l];p>=F&&(f>>=2);do{if(u[(t=r)+l]===d&&u[t+l-1]===h&&u[t]===u[i]&&u[++t]===u[i+1]){for(i+=2,t++;i<c;){for(o=!1,e=0;e<8;e+=1)if(t+=1,u[i+=1]!==u[t]){o=!0;break}if(o)break}if(n=cr-(c-i),i=c-cr,n>l){if(g=r,l=n,ur){if(n>=cr)break}else if(n>=X)break;h=u[i+l-1],d=u[i+l]}}}while((r=s[r&_r])>a&&0!=--f);return l}function nt(){var r,t,n=ar-y-b;if(-1===n)n--;else if(b>=nr+br){for(r=0;r<nr;r++)u[r]=u[r+nr];for(g-=nr,b-=nr,d-=nr,r=0;r<vr;r++)Pr(r,(t=Gr(r))>=nr?t-nr:wr);for(r=0;r<nr;r++)t=s[r],s[r]=t>=nr?t-nr:wr;n+=nr}A||((r=rt(u,b+y,n))<=0?A=!0:y+=r)}function et(){A||(c=0,h=0,function(){var r,t,n,e,o;if(0!==T[0].dl)return;for(z.dyn_tree=k,z.static_tree=I,z.extra_bits=Rr,z.extra_base=Er+1,z.elems=Fr,z.max_length=Ar,z.max_code=0,L.dyn_tree=B,L.static_tree=T,L.extra_bits=Ur,L.extra_base=0,L.elems=Xr,L.max_length=Ar,L.max_code=0,S.dyn_tree=N,S.static_tree=null,S.extra_bits=Dr,S.extra_base=0,S.elems=kr,S.max_length=yr,S.max_code=0,n=0,e=0;e<Mr-1;e++)for(V[e]=n,r=0;r<1<<Rr[e];r++)D[n++]=e;for(D[n-1]=e,o=0,e=0;e<16;e++)for(q[e]=o,r=0;r<1<<Ur[e];r++)Z[o++]=e;for(o>>=7;e<Xr;e++)for(q[e]=o<<7,r=0;r<1<<Ur[e]-7;r++)Z[256+o++]=e;for(t=0;t<=Ar;t++)O[t]=0;r=0;for(;r<=143;)I[r++].dl=8,O[8]++;for(;r<=255;)I[r++].dl=9,O[9]++;for(;r<=279;)I[r++].dl=7,O[7]++;for(;r<=287;)I[r++].dl=8,O[8]++;for(lt(I,Fr+1),r=0;r<Xr;r++)T[r].dl=5,T[r].fc=wt(r,5);it()}(),function(){var r;for(r=0;r<vr;r++)s[nr+r]=0;if(E=Vr[C].max_lazy,F=Vr[C].good_length,ur||(X=Vr[C].nice_length),M=Vr[C].max_chain,b=0,d=0,(y=rt(u,0,2*nr))<=0)return A=!0,void(y=0);for(A=!1;y<pr&&!A;)nt();for(v=0,r=0;r<sr-1;r++)v=(v<<zr^255&u[r])&mr}(),t=null,o=0,f=0,C<=3?(p=sr-1,x=0):(x=sr-1,w=!1),i=!1)}function ot(r,n,o){var f;return e||(et(),e=!0,0!==y)?(f=ft(r,n,o))===o?o:i?f:(C<=3?function(){for(;0!==y&&null===t;){var r;if(Kr(),m!==wr&&b-m<=br&&(x=tt(m))>y&&(x=y),x>=sr)if(r=dt(b-g,x-sr),y-=x,x<=E){x--;do{b++,Kr()}while(0!=--x);b++}else b+=x,x=0,v=((v=255&u[b])<<zr^255&u[b+1])&mr;else r=dt(0,255&u[b]),y--,b++;for(r&&(ht(0),d=b);y<pr&&!A;)nt()}}():function(){for(;0!==y&&null===t;){if(Kr(),p=x,_=g,x=sr-1,m!==wr&&p<E&&b-m<=br&&((x=tt(m))>y&&(x=y),x===sr&&b-g>xr&&x--),p>=sr&&x<=p){var r;r=dt(b-1-_,p-sr),y-=p-1,p-=2;do{b++,Kr()}while(0!=--p);w=!1,x=sr-1,b++,r&&(ht(0),d=b)}else w?(dt(0,255&u[b-1])&&(ht(0),d=b),b++,y--):(w=!0,b++,y--);for(;y<pr&&!A;)nt()}}(),0===y&&(w&&dt(0,255&u[b-1]),ht(1),i=!0),f+ft(r,f+n,o-f)):(i=!0,0)}function ft(r,n,e){var i,u,l;for(i=0;null!==t&&i<e;){for((u=e-i)>t.len&&(u=t.len),l=0;l<u;l++)r[n+i+l]=t.ptr[t.off+l];var a;if(t.off+=u,t.len-=u,i+=u,0===t.len)a=t,t=t.next,qr(a)}if(i===e)return i;if(f<o){for((u=e-i)>o-f&&(u=o-f),l=0;l<u;l++)r[n+i+l]=Lr[f+l];i+=u,o===(f+=u)&&(o=f=0)}return i}function it(){var r;for(r=0;r<Fr;r++)k[r].fc=0;for(r=0;r<Xr;r++)B[r].fc=0;for(r=0;r<kr;r++)N[r].fc=0;k[Cr].fc=1,Y=$=0,P=W=J=0,K=0,Q=1}function ut(r,t){for(var n=j[t],e=t<<1;e<=H&&(e<H&&$r(r,j[e+1],j[e])&&e++,!$r(r,n,j[e]));)j[t]=j[e],t=e,e<<=1;j[t]=n}function lt(r,t){var n,e,o=[],f=0;for(n=1;n<=Ar;n++)f=f+O[n-1]<<1,o[n]=f;for(e=0;e<=t;e++){var i=r[e].dl;0!==i&&(r[e].fc=wt(o[i]++,i))}}function at(r){var t,n,e=r.dyn_tree,o=r.static_tree,f=r.elems,i=-1,u=f;for(H=0,R=Nr,t=0;t<f;t++)0!==e[t].fc?(j[++H]=i=t,U[t]=0):e[t].dl=0;for(;H<2;){var l=j[++H]=i<2?++i:0;e[l].fc=1,U[l]=0,Y--,null!==o&&($-=o[l].dl)}for(r.max_code=i,t=H>>1;t>=1;t--)ut(e,t);do{t=j[gr],j[gr]=j[H--],ut(e,gr),n=j[gr],j[--R]=t,j[--R]=n,e[u].fc=e[t].fc+e[n].fc,U[t]>U[n]+1?U[u]=U[t]:U[u]=U[n]+1,e[t].dl=e[n].dl=u,j[gr]=u++,ut(e,gr)}while(H>=2);j[--R]=j[gr],function(r){var t,n,e,o,f,i,u=r.dyn_tree,l=r.extra_bits,a=r.extra_base,s=r.max_code,c=r.max_length,h=r.static_tree,d=0;for(o=0;o<=Ar;o++)O[o]=0;for(u[j[R]].dl=0,t=R+1;t<Nr;t++)(o=u[u[n=j[t]].dl].dl+1)>c&&(o=c,d++),u[n].dl=o,n>s||(O[o]++,f=0,n>=a&&(f=l[n-a]),i=u[n].fc,Y+=i*(o+f),null!==h&&($+=i*(h[n].dl+f)));if(0!==d){do{for(o=c-1;0===O[o];)o--;O[o]--,O[o+1]+=2,O[c]--,d-=2}while(d>0);for(o=c;0!==o;o--)for(n=O[o];0!==n;)(e=j[--t])>s||(u[e].dl!==o&&(Y+=(o-u[e].dl)*u[e].fc,u[e].fc=o),n--)}}(r),lt(e,i)}function st(r,t){var n,e,o=-1,f=r[0].dl,i=0,u=7,l=4;for(0===f&&(u=138,l=3),r[t+1].dl=65535,n=0;n<=t;n++)e=f,f=r[n+1].dl,++i<u&&e===f||(i<l?N[e].fc+=i:0!==e?(e!==o&&N[e].fc++,N[Br].fc++):i<=10?N[Ir].fc++:N[Tr].fc++,i=0,o=e,0===f?(u=138,l=3):e===f?(u=6,l=3):(u=7,l=4))}function ct(r,t){var n,e,o=-1,f=r[0].dl,i=0,u=7,l=4;for(0===f&&(u=138,l=3),n=0;n<=t;n++)if(e=f,f=r[n+1].dl,!(++i<u&&e===f)){if(i<l)do{Qr(e,N)}while(0!=--i);else 0!==e?(e!==o&&(Qr(e,N),i--),Qr(Br,N),_t(i-3,2)):i<=10?(Qr(Ir,N),_t(i-3,3)):(Qr(Tr,N),_t(i-11,7));i=0,o=e,0===f?(u=138,l=3):e===f?(u=6,l=3):(u=7,l=4)}}function ht(r){var t,n,e,o,f;if(o=b-d,G[J]=K,at(z),at(L),e=function(){var r;for(st(k,z.max_code),st(B,L.max_code),at(S),r=kr-1;r>=3&&0===N[Zr[r]].dl;r--);return Y+=3*(r+1)+5+5+4,r}(),(n=$+3+7>>3)<=(t=Y+3+7>>3)&&(t=n),o+4<=t&&d>=0)for(_t((er<<1)+r,3),xt(),Jr(o),Jr(~o),f=0;f<o;f++)Wr(u[d+f]);else n===t?(_t((or<<1)+r,3),vt(I,T)):(_t((fr<<1)+r,3),function(r,t,n){var e;for(_t(r-257,5),_t(t-1,5),_t(n-4,4),e=0;e<n;e++)_t(N[Zr[e]].dl,3);ct(k,r-1),ct(B,t-1)}(z.max_code+1,L.max_code+1,e+1),vt(k,B));it(),0!==r&&xt()}function dt(r,t){if(a[P++]=t,0===r?k[t].fc++:(r--,k[D[t]+Er+1].fc++,B[Yr(r)].fc++,l[W++]=r,K|=Q),Q<<=1,0==(7&P)&&(G[J++]=K,K=0,Q=1),C>2&&0==(4095&P)){var n,e=8*P,o=b-d;for(n=0;n<Xr;n++)e+=B[n].fc*(5+Ur[n]);if(e>>=3,W<parseInt(P/2,10)&&e<parseInt(o/2,10))return!0}return P===hr-1||W===dr}function vt(r,t){var n,e,o,f,i=0,u=0,s=0,c=0;if(0!==P)do{0==(7&i)&&(c=G[s++]),e=255&a[i++],0==(1&c)?Qr(e,r):(Qr((o=D[e])+Er+1,r),0!==(f=Rr[o])&&_t(e-=V[o],f),Qr(o=Yr(n=l[u++]),t),0!==(f=Ur[o])&&_t(n-=q[o],f)),c>>=1}while(i<P);Qr(Cr,r)}var mt=16;function _t(r,t){h>mt-t?(Jr(c|=r<<h),c=r>>mt-h,h+=t-mt):(c|=r<<h,h+=t)}function wt(r,t){var n=0;do{n|=1&r,r>>=1,n<<=1}while(--t>0);return n>>1}function xt(){h>8?Jr(c):h>0&&Wr(c),c=0,h=0}return{deflate:function(o,f){var i,c;rr=o,tr=0,void 0===f&&(f=ir),function(o){var f;if(o?o<1?o=1:o>9&&(o=9):o=ir,C=o,e=!1,A=!1,null===Lr){for(r=t=n=null,Lr=[],u=[],l=[],a=[],s=[],k=[],f=0;f<Nr;f++)k[f]=new Sr;for(B=[],f=0;f<2*Xr+1;f++)B[f]=new Sr;for(I=[],f=0;f<Fr+2;f++)I[f]=new Sr;for(T=[],f=0;f<Xr;f++)T[f]=new Sr;for(N=[],f=0;f<2*kr+1;f++)N[f]=new Sr;z=new Or,L=new Or,S=new Or,O=[],j=[],U=[],D=[],Z=[],V=[],q=[],G=[]}}(f),c=[];do{i=ot(c,c.length,1024)}while(i>0);return rr=null,c},get DEFAULT_LEVEL(){return ir}}}();console.log(t);var n=function(){var r,t,n,e,o,f,i,u,l,a,s,c,h,d,v,m,_,w=32768,x=0,p=1,b=2,g=9,A=6,y=null,M=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],E=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],F=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],X=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function B(){this.next=null,this.list=null}function I(){this.e=0,this.b=0,this.n=0,this.t=null}function T(r,t,n,e,o,f){var i;this.BMAX=16,this.N_MAX=288,this.status=0,this.root=null,this.m=0;var u,l,a,s,c,h,d,v,m,_,w,x,p,b,g,A,y=[],M=[],E=new I,C=[],F=[],X=[];for(A=this.root=null,c=0;c<this.BMAX+1;c++)y[c]=0;for(c=0;c<this.BMAX+1;c++)M[c]=0;for(c=0;c<this.BMAX;c++)C[c]=null;for(c=0;c<this.N_MAX;c++)F[c]=0;for(c=0;c<this.BMAX+1;c++)X[c]=0;u=t>256?r[256]:this.BMAX,v=r,m=0,c=t;do{y[v[m]]++,m++}while(--c>0);if(y[0]===t)return this.root=null,this.m=0,void(this.status=0);for(h=1;h<=this.BMAX&&0===y[h];h++);for(d=h,f<h&&(f=h),c=this.BMAX;0!==c&&0===y[c];c--);for(a=c,f>c&&(f=c),p=1<<h;h<c;h++,p<<=1)if((p-=y[h])<0)return this.status=2,void(this.m=f);if((p-=y[c])<0)return this.status=2,void(this.m=f);for(y[c]+=p,X[1]=h=0,v=y,m=1,x=2;--c>0;)X[x++]=h+=v[m++];v=r,m=0,c=0;do{0!==(h=v[m++])&&(F[X[h]++]=c)}while(++c<t);for(t=X[a],X[0]=c=0,v=F,m=0,s=-1,w=M[0]=0,_=null,b=0;d<=a;d++)for(i=y[d];i-- >0;){for(;d>w+M[1+s];){if(w+=M[1+s],s++,b=(b=a-w)>f?f:b,(l=1<<(h=d-w))>i+1)for(l-=i+1,x=d;++h<b&&!((l<<=1)<=y[++x]);)l-=y[x];for(w+h>u&&w<u&&(h=u-w),b=1<<h,M[1+s]=h,_=[],g=0;g<b;g++)_[g]=new I;(A=A?A.next=new B:this.root=new B).next=null,A.list=_,C[s]=_,s>0&&(X[s]=c,E.b=M[s],E.e=16+h,E.t=_,h=(c&(1<<w)-1)>>w-M[s],C[s-1][h].e=E.e,C[s-1][h].b=E.b,C[s-1][h].n=E.n,C[s-1][h].t=E.t)}for(E.b=d-w,m>=t?E.e=99:v[m]<n?(E.e=v[m]<256?16:15,E.n=v[m++]):(E.e=o[v[m]-n],E.n=e[v[m++]-n]),l=1<<d-w,h=c>>w;h<b;h+=l)_[h].e=E.e,_[h].b=E.b,_[h].n=E.n,_[h].t=E.t;for(h=1<<d-1;0!=(c&h);h>>=1)c^=h;for(c^=h;(c&(1<<w)-1)!==X[s];)w-=M[s],s--}this.m=M[1],this.status=0!==p&&1!==a?1:0}function N(r){for(;i<r;)f|=(m.length===_?-1:255&m[_++])<<i,i+=8}function z(r){return f&M[r]}function L(r){f>>=r,i-=r}function S(n,e,o){var f,i,l;if(0===o)return 0;for(l=0;;){for(N(d),f=(i=c.list[z(d)]).e;f>16;){if(99===f)return-1;L(i.b),N(f-=16),f=(i=i.t[z(f)]).e}if(L(i.b),16!==f){if(15===f)break;for(N(f),a=i.n+z(f),L(f),N(v),f=(i=h.list[z(v)]).e;f>16;){if(99===f)return-1;L(i.b),N(f-=16),f=(i=i.t[z(f)]).e}for(L(i.b),N(f),s=t-i.n-z(f),L(f);a>0&&l<o;)a--,s&=w-1,t&=w-1,n[e+l++]=r[t++]=r[s++];if(l===o)return o}else if(t&=w-1,n[e+l++]=r[t++]=i.n,l===o)return o}return u=-1,l}function O(n,e,o){var l;if(L(l=7&i),N(16),l=z(16),L(16),N(16),l!==(65535&~f))return-1;for(L(16),a=l,l=0;a>0&&l<o;)a--,t&=w-1,N(8),n[e+l++]=r[t++]=z(8),L(8);return 0===a&&(u=-1),l}function j(r,t,f){if(!y){var i,u,l=[];for(i=0;i<144;i++)l[i]=8;for(;i<256;i++)l[i]=9;for(;i<280;i++)l[i]=7;for(;i<288;i++)l[i]=8;if(0!==(u=new T(l,288,257,E,C,e=7)).status)return console.error("HufBuild error: "+u.status),-1;for(y=u.root,e=u.m,i=0;i<30;i++)l[i]=5;if((u=new T(l,30,0,F,X,o=5)).status>1)return y=null,console.error("HufBuild error: "+u.status),-1;n=u.root,o=u.m}return c=y,h=n,d=e,v=o,S(r,t,f)}function H(r,t,n){var e,o,f,i,u,l,a,s,m,_=[];for(e=0;e<316;e++)_[e]=0;if(N(5),a=257+z(5),L(5),N(5),s=1+z(5),L(5),N(4),l=4+z(4),L(4),a>286||s>30)return-1;for(o=0;o<l;o++)N(3),_[k[o]]=z(3),L(3);for(;o<19;o++)_[k[o]]=0;if(0!==(m=new T(_,19,19,null,null,d=7)).status)return-1;for(c=m.root,d=m.m,i=a+s,e=f=0;e<i;)if(N(d),L(o=(u=c.list[z(d)]).b),(o=u.n)<16)_[e++]=f=o;else if(16===o){if(N(2),o=3+z(2),L(2),e+o>i)return-1;for(;o-- >0;)_[e++]=f}else if(17===o){if(N(3),o=3+z(3),L(3),e+o>i)return-1;for(;o-- >0;)_[e++]=0;f=0}else{if(N(7),o=11+z(7),L(7),e+o>i)return-1;for(;o-- >0;)_[e++]=0;f=0}if(m=new T(_,a,257,E,C,d=g),0===d&&(m.status=1),0!==m.status&&1!==m.status)return-1;for(c=m.root,d=m.m,e=0;e<s;e++)_[e]=_[e+a];return m=new T(_,s,0,F,X,v=A),h=m.root,0===(v=m.m)&&a>257?-1:0!==m.status?-1:S(r,t,n)}function R(n,e,o){var f,i;for(f=0;f<o;){if(l&&-1===u)return f;if(a>0){if(u!==x)for(;a>0&&f<o;)a--,s&=w-1,t&=w-1,n[e+f++]=r[t++]=r[s++];else{for(;a>0&&f<o;)a--,t&=w-1,N(8),n[e+f++]=r[t++]=z(8),L(8);0===a&&(u=-1)}if(f===o)return f}if(-1===u){if(l)break;N(1),0!==z(1)&&(l=!0),L(1),N(2),u=z(2),L(2),c=null,a=0}switch(u){case x:i=O(n,e+f,o-f);break;case p:i=c?S(n,e+f,o-f):j(n,e+f,o-f);break;case b:i=c?S(n,e+f,o-f):H(n,e+f,o-f);break;default:i=-1}if(-1===i)return l?0:-1;f+=i}return f}return function(n){var e,o=[];r||(r=[]),t=0,f=0,i=0,u=-1,l=!1,a=s=0,c=null,m=n,_=0;do{e=R(o,o.length,1024)}while(e>0);return m=null,o}}(),e=31,o=139,f={deflate:8},i={FTEXT:1,FHCRC:2,FEXTRA:4,FNAME:8,FCOMMENT:16},u={fat:0,amiga:1,vmz:2,unix:3,"vm/cms":4,atari:5,hpfs:6,macintosh:7,"z-system":8,cplm:9,"tops-20":10,ntfs:11,qdos:12,acorn:13,vfat:14,vms:15,beos:16,tandem:17,theos:18},l="unix",a=6;function s(r,t){t.push(255&r)}function c(r,t){t.push(255&r),t.push(r>>>8)}function h(r,t){c(65535&r,t),c(r>>>16,t)}function d(r){return r.shift()}function v(r){return r.shift()|r.shift()<<8}function m(r){var t=v(r),n=v(r);return n>32768?((n-=32768)<<16|t)+32768*Math.pow(2,16):n<<16|t}function _(r){for(var t=[];0!==r[0];)t.push(String.fromCharCode(r.shift()));return r.shift(),t.join("")}return{zip:function(n,c){var d,v=0,m=[];return c||(c={}),d=c.level||a,"string"==typeof n&&(n=Array.prototype.map.call(n,function(r){return r.charCodeAt(0)})),s(e,m),s(o,m),s(f.deflate,m),c.name&&(v|=i.FNAME),s(v,m),h(c.timestamp||parseInt(Date.now()/1e3,10),m),s(1===d?4:9===d?2:0,m),s(u[l],m),c.name&&(function(r,t){var n,e=r.length;for(n=0;n<e;n+=1)s(r.charCodeAt(n),t)}(c.name.substring(c.name.lastIndexOf("/")+1),m),s(0,m)),t.deflate(n,d).forEach(function(r){s(r,m)}),h(parseInt(r.execute(n),16),m),h(n.length,m),m},unzip:function(t,l){var a,s,c,h,w=Array.prototype.slice.call(t,0);if(d(w)!==e||d(w)!==o)throw"Not a GZIP file";if(a=d(w),!(a=Object.keys(f).some(function(r){return s=r,f[r]===a})))throw"Unsupported compression method";if(c=d(w),m(w),d(w),a=d(w),Object.keys(u).some(function(r){if(u[r]===a)return!0}),c&i.FEXTRA&&function(r,t){var n,e=[];for(n=0;n<t;n+=1)e.push(r.shift())}(w,a=v(w)),c&i.FNAME&&_(w),c&i.FCOMMENT&&_(w),c&i.FHCRC&&v(w),"deflate"===s&&(h=n(w.splice(0,w.length-8))),c&i.FTEXT&&(h=Array.prototype.map.call(h,function(r){return String.fromCharCode(r)}).join("")),m(w)!==parseInt(r.execute(h),16))throw"Checksum does not match";if(m(w)!==h.length)throw"Size of decompressed file not correct";return h},get DEFAULT_LEVEL(){return a}}}();
