/*! For license information please see bundle-airdrop.js.LICENSE.txt */
(()=>{var e,t,r,n,i={8099:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7117);function i(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function c(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function l(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function p(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),d(e>>>0,t,r),d(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=c,t.readUint32LE=l,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),n=a(e,t+4);return 4294967296*r+n-4294967296*(n>>31)},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r-4294967296*(r>>31)},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=p,t.writeInt64LE=p,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw new Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,o=e/8+r-1;o>=r;o--)n+=t[o]*i,i*=256;return n},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw new Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,o=r;o<r+e/8;o++)n+=t[o]*i,i*=256;return n},t.writeUintBE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var o=1,a=e/8+i-1;a>=i;a--)r[a]=t/o&255,o*=256;return r},t.writeUintLE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var o=1,a=i;a<i+e/8;a++)r[a]=t/o&255,o*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},5439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8099),i=r(7309),o=20;function a(e,t,r){for(var i=1634760805,a=857760878,s=2036477234,c=1797285236,l=r[3]<<24|r[2]<<16|r[1]<<8|r[0],u=r[7]<<24|r[6]<<16|r[5]<<8|r[4],d=r[11]<<24|r[10]<<16|r[9]<<8|r[8],h=r[15]<<24|r[14]<<16|r[13]<<8|r[12],p=r[19]<<24|r[18]<<16|r[17]<<8|r[16],f=r[23]<<24|r[22]<<16|r[21]<<8|r[20],g=r[27]<<24|r[26]<<16|r[25]<<8|r[24],m=r[31]<<24|r[30]<<16|r[29]<<8|r[28],w=t[3]<<24|t[2]<<16|t[1]<<8|t[0],b=t[7]<<24|t[6]<<16|t[5]<<8|t[4],y=t[11]<<24|t[10]<<16|t[9]<<8|t[8],v=t[15]<<24|t[14]<<16|t[13]<<8|t[12],x=i,C=a,E=s,_=c,k=l,S=u,A=d,I=h,$=p,P=f,T=g,O=m,N=w,R=b,M=y,j=v,U=0;U<o;U+=2)k=(k^=$=$+(N=(N^=x=x+k|0)>>>16|N<<16)|0)>>>20|k<<12,S=(S^=P=P+(R=(R^=C=C+S|0)>>>16|R<<16)|0)>>>20|S<<12,A=(A^=T=T+(M=(M^=E=E+A|0)>>>16|M<<16)|0)>>>20|A<<12,I=(I^=O=O+(j=(j^=_=_+I|0)>>>16|j<<16)|0)>>>20|I<<12,A=(A^=T=T+(M=(M^=E=E+A|0)>>>24|M<<8)|0)>>>25|A<<7,I=(I^=O=O+(j=(j^=_=_+I|0)>>>24|j<<8)|0)>>>25|I<<7,S=(S^=P=P+(R=(R^=C=C+S|0)>>>24|R<<8)|0)>>>25|S<<7,k=(k^=$=$+(N=(N^=x=x+k|0)>>>24|N<<8)|0)>>>25|k<<7,S=(S^=T=T+(j=(j^=x=x+S|0)>>>16|j<<16)|0)>>>20|S<<12,A=(A^=O=O+(N=(N^=C=C+A|0)>>>16|N<<16)|0)>>>20|A<<12,I=(I^=$=$+(R=(R^=E=E+I|0)>>>16|R<<16)|0)>>>20|I<<12,k=(k^=P=P+(M=(M^=_=_+k|0)>>>16|M<<16)|0)>>>20|k<<12,I=(I^=$=$+(R=(R^=E=E+I|0)>>>24|R<<8)|0)>>>25|I<<7,k=(k^=P=P+(M=(M^=_=_+k|0)>>>24|M<<8)|0)>>>25|k<<7,A=(A^=O=O+(N=(N^=C=C+A|0)>>>24|N<<8)|0)>>>25|A<<7,S=(S^=T=T+(j=(j^=x=x+S|0)>>>24|j<<8)|0)>>>25|S<<7;n.writeUint32LE(x+i|0,e,0),n.writeUint32LE(C+a|0,e,4),n.writeUint32LE(E+s|0,e,8),n.writeUint32LE(_+c|0,e,12),n.writeUint32LE(k+l|0,e,16),n.writeUint32LE(S+u|0,e,20),n.writeUint32LE(A+d|0,e,24),n.writeUint32LE(I+h|0,e,28),n.writeUint32LE($+p|0,e,32),n.writeUint32LE(P+f|0,e,36),n.writeUint32LE(T+g|0,e,40),n.writeUint32LE(O+m|0,e,44),n.writeUint32LE(N+w|0,e,48),n.writeUint32LE(R+b|0,e,52),n.writeUint32LE(M+y|0,e,56),n.writeUint32LE(j+v|0,e,60)}function s(e,t,r,n,o){if(void 0===o&&(o=0),32!==e.length)throw new Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw new Error("ChaCha: destination is shorter than source");var s,l;if(0===o){if(8!==t.length&&12!==t.length)throw new Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw new Error("ChaCha nonce with counter must be 16 bytes");s=t,l=o}for(var u=new Uint8Array(64),d=0;d<r.length;d+=64){a(u,s,e);for(var h=d;h<d+64&&h<r.length;h++)n[h]=r[h]^u[h-d];c(s,0,l)}return i.wipe(u),0===o&&i.wipe(s),n}function c(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw new Error("ChaCha: counter overflow")}t.streamXOR=s,t.stream=function(e,t,r,n){return void 0===n&&(n=0),i.wipe(r),s(e,t,r,r,n)}},5501:(e,t,r)=>{"use strict";var n=r(5439),i=r(3027),o=r(7309),a=r(8099),s=r(4153);t.Cv=32,t.WH=12,t.pg=16;var c=new Uint8Array(16),l=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var a=new Uint8Array(16);a.set(e,a.length-e.length);var s=new Uint8Array(32);n.stream(this._key,a,s,4);var c,l=t.length+this.tagLength;if(i){if(i.length!==l)throw new Error("ChaCha20Poly1305: incorrect destination length");c=i}else c=new Uint8Array(l);return n.streamXOR(this._key,a,t,c,4),this._authenticate(c.subarray(c.length-this.tagLength,c.length),s,c.subarray(0,c.length-this.tagLength),r),o.wipe(a),c},e.prototype.open=function(e,t,r,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a=new Uint8Array(16);a.set(e,a.length-e.length);var c=new Uint8Array(32);n.stream(this._key,a,c,4);var l=new Uint8Array(this.tagLength);if(this._authenticate(l,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(l,t.subarray(t.length-this.tagLength,t.length)))return null;var u,d=t.length-this.tagLength;if(i){if(i.length!==d)throw new Error("ChaCha20Poly1305: incorrect destination length");u=i}else u=new Uint8Array(d);return n.streamXOR(this._key,a,t.subarray(0,t.length-this.tagLength),u,4),o.wipe(a),u},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,n){var s=new i.Poly1305(t);n&&(s.update(n),n.length%16>0&&s.update(c.subarray(n.length%16))),s.update(r),r.length%16>0&&s.update(c.subarray(r.length%16));var l=new Uint8Array(8);n&&a.writeUint64LE(n.length,l),s.update(l),a.writeUint64LE(r.length,l),s.update(l);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),o.wipe(u),o.wipe(l)},e}();t.OK=l},4153:(e,t)=>{"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},9984:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:(e,t,r)=>{"use strict";var n=r(5629),i=r(7309),o=function(){function e(e,t,r,i){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=n.hmac(this._hash,r,t);this._hmac=new n.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.t=o},5629:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9984),i=r(4153),o=r(7309),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var i=0;i<r.length;i++)r[i]^=54;for(this._inner.update(r),i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),n.isSerializableHash(this._inner)&&n.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(r)}return e.prototype.reset=function(){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){n.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),n.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!n.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!n.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var n=new a(e,t);n.update(r);var i=n.digest();return n.clean(),i},t.equal=i.equal},7117:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},3027:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4153),i=r(7309);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var n=e[2]|e[3]<<8;this._r[1]=8191&(r>>>13|n<<3);var i=e[4]|e[5]<<8;this._r[2]=7939&(n>>>10|i<<6);var o=e[6]|e[7]<<8;this._r[3]=8191&(i>>>7|o<<9);var a=e[8]|e[9]<<8;this._r[4]=255&(o>>>4|a<<12),this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=8191&(a>>>14|s<<2);var c=e[12]|e[13]<<8;this._r[7]=8065&(s>>>11|c<<5);var l=e[14]|e[15]<<8;this._r[8]=8191&(c>>>8|l<<8),this._r[9]=l>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,i=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],c=this._h[4],l=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],p=this._h[9],f=this._r[0],g=this._r[1],m=this._r[2],w=this._r[3],b=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var _=e[t+0]|e[t+1]<<8;i+=8191&_;var k=e[t+2]|e[t+3]<<8;o+=8191&(_>>>13|k<<3);var S=e[t+4]|e[t+5]<<8;a+=8191&(k>>>10|S<<6);var A=e[t+6]|e[t+7]<<8;s+=8191&(S>>>7|A<<9);var I=e[t+8]|e[t+9]<<8;c+=8191&(A>>>4|I<<12),l+=I>>>1&8191;var $=e[t+10]|e[t+11]<<8;u+=8191&(I>>>14|$<<2);var P=e[t+12]|e[t+13]<<8;d+=8191&($>>>11|P<<5);var T=e[t+14]|e[t+15]<<8,O=0,N=O;N+=i*f,N+=o*(5*E),N+=a*(5*C),N+=s*(5*x),O=(N+=c*(5*v))>>>13,N&=8191,N+=l*(5*y),N+=u*(5*b),N+=d*(5*w),N+=(h+=8191&(P>>>8|T<<8))*(5*m);var R=O+=(N+=(p+=T>>>5|n)*(5*g))>>>13;R+=i*g,R+=o*f,R+=a*(5*E),R+=s*(5*C),O=(R+=c*(5*x))>>>13,R&=8191,R+=l*(5*v),R+=u*(5*y),R+=d*(5*b),R+=h*(5*w),O+=(R+=p*(5*m))>>>13,R&=8191;var M=O;M+=i*m,M+=o*g,M+=a*f,M+=s*(5*E),O=(M+=c*(5*C))>>>13,M&=8191,M+=l*(5*x),M+=u*(5*v),M+=d*(5*y),M+=h*(5*b);var j=O+=(M+=p*(5*w))>>>13;j+=i*w,j+=o*m,j+=a*g,j+=s*f,O=(j+=c*(5*E))>>>13,j&=8191,j+=l*(5*C),j+=u*(5*x),j+=d*(5*v),j+=h*(5*y);var U=O+=(j+=p*(5*b))>>>13;U+=i*b,U+=o*w,U+=a*m,U+=s*g,O=(U+=c*f)>>>13,U&=8191,U+=l*(5*E),U+=u*(5*C),U+=d*(5*x),U+=h*(5*v);var L=O+=(U+=p*(5*y))>>>13;L+=i*y,L+=o*b,L+=a*w,L+=s*m,O=(L+=c*g)>>>13,L&=8191,L+=l*f,L+=u*(5*E),L+=d*(5*C),L+=h*(5*x);var B=O+=(L+=p*(5*v))>>>13;B+=i*v,B+=o*y,B+=a*b,B+=s*w,O=(B+=c*m)>>>13,B&=8191,B+=l*g,B+=u*f,B+=d*(5*E),B+=h*(5*C);var D=O+=(B+=p*(5*x))>>>13;D+=i*x,D+=o*v,D+=a*y,D+=s*b,O=(D+=c*w)>>>13,D&=8191,D+=l*m,D+=u*g,D+=d*f,D+=h*(5*E);var z=O+=(D+=p*(5*C))>>>13;z+=i*C,z+=o*x,z+=a*v,z+=s*y,O=(z+=c*b)>>>13,z&=8191,z+=l*w,z+=u*m,z+=d*g,z+=h*f;var F=O+=(z+=p*(5*E))>>>13;F+=i*E,F+=o*C,F+=a*x,F+=s*v,O=(F+=c*y)>>>13,F&=8191,F+=l*b,F+=u*w,F+=d*m,F+=h*g,i=N=8191&(O=(O=((O+=(F+=p*f)>>>13)<<2)+O|0)+(N&=8191)|0),o=R+=O>>>=13,a=M&=8191,s=j&=8191,c=U&=8191,l=L&=8191,u=B&=8191,d=D&=8191,h=z&=8191,p=F&=8191,t+=16,r-=16}this._h[0]=i,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=c,this._h[5]=l,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=p},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,i,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,n=(1^r)-1,o=0;o<10;o++)a[o]&=n;for(n=~n,o=0;o<10;o++)this._h[o]=this._h[o]&n|a[o];for(this._h[0]=65535&(this._h[0]|this._h[1]<<13),this._h[1]=65535&(this._h[1]>>>3|this._h[2]<<10),this._h[2]=65535&(this._h[2]>>>6|this._h[3]<<7),this._h[3]=65535&(this._h[3]>>>9|this._h[4]<<4),this._h[4]=65535&(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14),this._h[5]=65535&(this._h[6]>>>2|this._h[7]<<11),this._h[6]=65535&(this._h[7]>>>5|this._h[8]<<8),this._h[7]=65535&(this._h[8]>>>8|this._h[9]<<5),i=this._h[0]+this._pad[0],this._h[0]=65535&i,o=1;o<8;o++)i=(this._h[o]+this._pad[o]|0)+(i>>>16)|0,this._h[o]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[r+i];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(i=0;i<n;i++)this._buffer[this._leftover+i]=e[r+i];this._leftover+=n}return this},e.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var r=new o(e);r.update(t);var n=r.digest();return r.clean(),n},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&n.equal(e,r)}},1416:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const n=r(6008),i=r(8099),o=r(7309);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new n.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){const r=a(4,e),n=(0,i.readUint32LE)(r);return(0,o.wipe)(r),n};const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function c(e,r=s,n=t.defaultRandomSource){if(r.length<2)throw new Error("randomString charset is too short");if(r.length>256)throw new Error("randomString charset is too long");let i="";const c=r.length,l=256-256%c;for(;e>0;){const t=a(Math.ceil(256*e/l),n);for(let n=0;n<t.length&&e>0;n++){const o=t[n];o<l&&(i+=r.charAt(o%c),e--)}(0,o.wipe)(t)}return i}t.randomString=c,t.randomStringForEntropy=function(e,r=s,n=t.defaultRandomSource){return c(Math.ceil(e/(Math.log(r.length)/Math.LN2)),r,n)}},5455:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},8871:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;const n=r(7309);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{const e=r(5883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,n.wipe)(t),r}}},6008:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;const n=r(5455),i=r(8871);t.SystemRandomSource=class{constructor(){return this.isAvailable=!1,this.name="",this._source=new n.BrowserRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Browser")):(this._source=new i.NodeRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Node")):void 0)}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},3294:(e,t,r)=>{"use strict";var n=r(8099),i=r(7309);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,i=t/536870912|0,o=t<<3,a=t%64<56?64:128;this._buffer[r]=128;for(var c=r+1;c<a-8;c++)this._buffer[c]=0;n.writeUint32BE(i,this._buffer,a-8),n.writeUint32BE(o,this._buffer,a-4),s(this._temp,this._state,this._buffer,0,a),this._finished=!0}for(c=0;c<this.digestLength/4;c++)n.writeUint32BE(this._state[c],e,4*c);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,i,o){for(;o>=64;){for(var s=t[0],c=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],f=t[7],g=0;g<16;g++){var m=i+4*g;e[g]=n.readUint32BE(r,m)}for(g=16;g<64;g++){var w=e[g-2],b=(w>>>17|w<<15)^(w>>>19|w<<13)^w>>>10,y=((w=e[g-15])>>>7|w<<25)^(w>>>18|w<<14)^w>>>3;e[g]=(b+e[g-7]|0)+(y+e[g-16]|0)}for(g=0;g<64;g++)b=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&p)|0)+(f+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&c^s&l^c&l)|0,f=p,p=h,h=d,d=u+b|0,u=l,l=c,c=s,s=b+y|0;t[0]+=s,t[1]+=c,t[2]+=l,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=p,t[7]+=f,i+=64,o-=64}return i}t.vp=function(e){var t=new o;t.update(e);var r=t.digest();return t.clean(),r}},7309:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},7664:(e,t,r)=>{"use strict";t.gi=t.Au=t.KS=t.kz=void 0;const n=r(1416),i=r(7309);function o(e){const t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;const a=new Uint8Array(32);a[0]=9;const s=o([56129,1]);function c(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function l(e,t,r){const n=~(r-1);for(let r=0;r<16;r++){const i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function u(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function d(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function h(e,t,r){let n,i,o=0,a=0,s=0,c=0,l=0,u=0,d=0,h=0,p=0,f=0,g=0,m=0,w=0,b=0,y=0,v=0,x=0,C=0,E=0,_=0,k=0,S=0,A=0,I=0,$=0,P=0,T=0,O=0,N=0,R=0,M=0,j=r[0],U=r[1],L=r[2],B=r[3],D=r[4],z=r[5],F=r[6],W=r[7],H=r[8],G=r[9],Z=r[10],V=r[11],q=r[12],K=r[13],Y=r[14],X=r[15];n=t[0],o+=n*j,a+=n*U,s+=n*L,c+=n*B,l+=n*D,u+=n*z,d+=n*F,h+=n*W,p+=n*H,f+=n*G,g+=n*Z,m+=n*V,w+=n*q,b+=n*K,y+=n*Y,v+=n*X,n=t[1],a+=n*j,s+=n*U,c+=n*L,l+=n*B,u+=n*D,d+=n*z,h+=n*F,p+=n*W,f+=n*H,g+=n*G,m+=n*Z,w+=n*V,b+=n*q,y+=n*K,v+=n*Y,x+=n*X,n=t[2],s+=n*j,c+=n*U,l+=n*L,u+=n*B,d+=n*D,h+=n*z,p+=n*F,f+=n*W,g+=n*H,m+=n*G,w+=n*Z,b+=n*V,y+=n*q,v+=n*K,x+=n*Y,C+=n*X,n=t[3],c+=n*j,l+=n*U,u+=n*L,d+=n*B,h+=n*D,p+=n*z,f+=n*F,g+=n*W,m+=n*H,w+=n*G,b+=n*Z,y+=n*V,v+=n*q,x+=n*K,C+=n*Y,E+=n*X,n=t[4],l+=n*j,u+=n*U,d+=n*L,h+=n*B,p+=n*D,f+=n*z,g+=n*F,m+=n*W,w+=n*H,b+=n*G,y+=n*Z,v+=n*V,x+=n*q,C+=n*K,E+=n*Y,_+=n*X,n=t[5],u+=n*j,d+=n*U,h+=n*L,p+=n*B,f+=n*D,g+=n*z,m+=n*F,w+=n*W,b+=n*H,y+=n*G,v+=n*Z,x+=n*V,C+=n*q,E+=n*K,_+=n*Y,k+=n*X,n=t[6],d+=n*j,h+=n*U,p+=n*L,f+=n*B,g+=n*D,m+=n*z,w+=n*F,b+=n*W,y+=n*H,v+=n*G,x+=n*Z,C+=n*V,E+=n*q,_+=n*K,k+=n*Y,S+=n*X,n=t[7],h+=n*j,p+=n*U,f+=n*L,g+=n*B,m+=n*D,w+=n*z,b+=n*F,y+=n*W,v+=n*H,x+=n*G,C+=n*Z,E+=n*V,_+=n*q,k+=n*K,S+=n*Y,A+=n*X,n=t[8],p+=n*j,f+=n*U,g+=n*L,m+=n*B,w+=n*D,b+=n*z,y+=n*F,v+=n*W,x+=n*H,C+=n*G,E+=n*Z,_+=n*V,k+=n*q,S+=n*K,A+=n*Y,I+=n*X,n=t[9],f+=n*j,g+=n*U,m+=n*L,w+=n*B,b+=n*D,y+=n*z,v+=n*F,x+=n*W,C+=n*H,E+=n*G,_+=n*Z,k+=n*V,S+=n*q,A+=n*K,I+=n*Y,$+=n*X,n=t[10],g+=n*j,m+=n*U,w+=n*L,b+=n*B,y+=n*D,v+=n*z,x+=n*F,C+=n*W,E+=n*H,_+=n*G,k+=n*Z,S+=n*V,A+=n*q,I+=n*K,$+=n*Y,P+=n*X,n=t[11],m+=n*j,w+=n*U,b+=n*L,y+=n*B,v+=n*D,x+=n*z,C+=n*F,E+=n*W,_+=n*H,k+=n*G,S+=n*Z,A+=n*V,I+=n*q,$+=n*K,P+=n*Y,T+=n*X,n=t[12],w+=n*j,b+=n*U,y+=n*L,v+=n*B,x+=n*D,C+=n*z,E+=n*F,_+=n*W,k+=n*H,S+=n*G,A+=n*Z,I+=n*V,$+=n*q,P+=n*K,T+=n*Y,O+=n*X,n=t[13],b+=n*j,y+=n*U,v+=n*L,x+=n*B,C+=n*D,E+=n*z,_+=n*F,k+=n*W,S+=n*H,A+=n*G,I+=n*Z,$+=n*V,P+=n*q,T+=n*K,O+=n*Y,N+=n*X,n=t[14],y+=n*j,v+=n*U,x+=n*L,C+=n*B,E+=n*D,_+=n*z,k+=n*F,S+=n*W,A+=n*H,I+=n*G,$+=n*Z,P+=n*V,T+=n*q,O+=n*K,N+=n*Y,R+=n*X,n=t[15],v+=n*j,x+=n*U,C+=n*L,E+=n*B,_+=n*D,k+=n*z,S+=n*F,A+=n*W,I+=n*H,$+=n*G,P+=n*Z,T+=n*V,O+=n*q,N+=n*K,R+=n*Y,M+=n*X,o+=38*x,a+=38*C,s+=38*E,c+=38*_,l+=38*k,u+=38*S,d+=38*A,h+=38*I,p+=38*$,f+=38*P,g+=38*T,m+=38*O,w+=38*N,b+=38*R,y+=38*M,i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,o+=i-1+37*(i-1),i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=a,e[2]=s,e[3]=c,e[4]=l,e[5]=u,e[6]=d,e[7]=h,e[8]=p,e[9]=f,e[10]=g,e[11]=m,e[12]=w,e[13]=b,e[14]=y,e[15]=v}function p(e,t){h(e,t,t)}function f(e,t){const r=new Uint8Array(32),n=new Float64Array(80),i=o(),a=o(),f=o(),g=o(),m=o(),w=o();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(n,t);for(let e=0;e<16;e++)a[e]=n[e];i[0]=g[0]=1;for(let e=254;e>=0;--e){const t=r[e>>>3]>>>(7&e)&1;l(i,a,t),l(f,g,t),u(m,i,f),d(i,i,f),u(f,a,g),d(a,a,g),p(g,m),p(w,i),h(i,f,i),h(f,a,m),u(m,i,f),d(i,i,f),p(a,i),d(f,g,w),h(i,f,s),u(i,i,g),h(f,f,i),h(i,g,w),h(g,a,n),p(a,m),l(i,a,t),l(f,g,t)}for(let e=0;e<16;e++)n[e+16]=i[e],n[e+32]=f[e],n[e+48]=a[e],n[e+64]=g[e];const b=n.subarray(32),y=n.subarray(16);!function(e,t){const r=o();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)p(r,r),2!==e&&4!==e&&h(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(b,b),h(y,y,b);const v=new Uint8Array(32);return function(e,t){const r=o(),n=o();for(let e=0;e<16;e++)n[e]=t[e];c(n),c(n),c(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);const e=r[15]>>16&1;r[14]&=65535,l(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}(v,y),v}t.Au=function(e){const r=(0,n.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw new Error(`x25519: seed must be ${t.KS} bytes`);const r=new Uint8Array(e);return{publicKey:(n=r,f(n,a)),secretKey:r};var n}(r);return(0,i.wipe)(r),o},t.gi=function(e,r,n=!1){if(e.length!==t.kz)throw new Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw new Error("X25519: incorrect public key length");const i=f(e,r);if(n){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw new Error("X25519: invalid shared key")}return i}},1882:()=>{},6900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(655);n.__exportStar(r(6869),t),n.__exportStar(r(8033),t)},6869:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},8033:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},6736:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(655);n.__exportStar(r(4273),t),n.__exportStar(r(7001),t),n.__exportStar(r(2939),t),n.__exportStar(r(6900),t)},2939:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(655).__exportStar(r(8766),t)},8766:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},3207:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;const n=r(6900);t.toMiliseconds=function(e){return e*n.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/n.ONE_THOUSAND)}},3873:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))}},4273:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(655);n.__exportStar(r(3873),t),n.__exportStar(r(3207),t)},7001:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw new Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){const t=this.get(e);if(void 0!==t.elapsed)throw new Error(`Watch already stopped for label: ${e}`);const r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){const t=this.timestamps.get(e);if(void 0===t)throw new Error(`No timestamp found for label: ${e}`);return t}elapsed(e){const t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=r,t.default=r},9795:(e,t,r)=>{"use strict";r.d(t,{AW:()=>P,O6:()=>Lt,rV:()=>R,gn:()=>Ee,H1:()=>we,hF:()=>be,WG:()=>H,pe:()=>Z,m$:()=>z,vB:()=>V,HI:()=>G,E0:()=>ke,Gq:()=>xe,$0:()=>pe,Z4:()=>ve,Bv:()=>ze,Au:()=>B,jd:()=>D,gu:()=>A,D:()=>de,X_:()=>ue,bW:()=>Ie,Z7:()=>it,cO:()=>Te,_H:()=>Pe,fc:()=>Je,D6:()=>ot,Hh:()=>Ae,Ym:()=>F,rj:()=>W,jU:()=>ce,gp:()=>Qe,rF:()=>Ot,Bw:()=>_e,UG:()=>ae,Gg:()=>Mt,xW:()=>ft,b$:()=>se,Ih:()=>dt,h1:()=>gt,Q8:()=>Y,o8:()=>ct,qt:()=>at,Dd:()=>mt,$t:()=>kt,nf:()=>It,Q0:()=>Et,in:()=>vt,p8:()=>$t,sI:()=>Tt,al:()=>Pt,L5:()=>st,EJ:()=>_t,Z2:()=>xt,PM:()=>Ct,hH:()=>St,ON:()=>Rt,n:()=>yt,JT:()=>At,M_:()=>lt,jv:()=>pt,KC:()=>ge,eG:()=>Se,fK:()=>tt,IP:()=>me,DQ:()=>S,iP:()=>Ce,M:()=>et,he:()=>Be,uw:()=>jt,Ll:()=>q,EN:()=>K});var n=r(5501),i=r(512),o=r(1416),a=r(3294),s=r(7664),c=r(7466),l=function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},u=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},d=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},h=function(e,t,r,n){this.name=e,this.version=t,this.os=r,this.bot=n,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},f=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},g=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,m=3,w=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],b=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function y(e){var t=function(e){return""!==e&&w.reduce((function(t,r){var n=r[0],i=r[1];if(t)return t;var o=i.exec(e);return!!o&&[n,o]}),!1)}(e);if(!t)return null;var r=t[0],n=t[1];if("searchbot"===r)return new p;var i=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);i?i.length<m&&(i=l(l([],i,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(m-i.length),!0)):i=[];var o=i.join("."),a=function(e){for(var t=0,r=b.length;t<r;t++){var n=b[t],i=n[0];if(n[1].exec(e))return i}return null}(e),s=g.exec(e);return s&&s[1]?new h(r,o,a,s[1]):new u(r,o,a)}var v=r(6736),x=r(2873),C=r(5755),E=r(6151);r(1882);const _={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},k=":";function S(e){const[t,r]=e.split(k);return{namespace:t,reference:r}}function A(e,t=[]){const r=[];return Object.keys(e).forEach((n=>{if(t.length&&!t.includes(n))return;const i=e[n];r.push(...i.accounts)})),r}function I(e,t){return e.includes(":")?[e]:t.chains||[]}const $="base10",P="base16",T="base64pad",O="utf8",N=0,R=1,M=0,j=1,U=12,L=32;function B(){const e=s.Au();return{privateKey:(0,c.BB)(e.secretKey,P),publicKey:(0,c.BB)(e.publicKey,P)}}function D(){const e=(0,o.randomBytes)(L);return(0,c.BB)(e,P)}function z(e,t){const r=s.gi((0,c.mL)(e,P),(0,c.mL)(t,P),!0),n=new i.t(a.mE,r).expand(L);return(0,c.BB)(n,P)}function F(e){const t=(0,a.vp)((0,c.mL)(e,P));return(0,c.BB)(t,P)}function W(e){const t=(0,a.vp)((0,c.mL)(e,O));return(0,c.BB)(t,P)}function H(e){return Number((0,c.BB)(e,$))}function G(e){const t=function(e){return(0,c.mL)(`${e}`,$)}(typeof e.type<"u"?e.type:N);if(H(t)===R&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof e.senderPublicKey<"u"?(0,c.mL)(e.senderPublicKey,P):void 0,i=typeof e.iv<"u"?(0,c.mL)(e.iv,P):(0,o.randomBytes)(U);return function(e){if(H(e.type)===R){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return(0,c.BB)((0,c.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),T)}return(0,c.BB)((0,c.zo)([e.type,e.iv,e.sealed]),T)}({type:t,sealed:new n.OK((0,c.mL)(e.symKey,P)).seal(i,(0,c.mL)(e.message,O)),iv:i,senderPublicKey:r})}function Z(e){const t=new n.OK((0,c.mL)(e.symKey,P)),{sealed:r,iv:i}=V(e.encoded),o=t.open(i,r);if(null===o)throw new Error("Failed to decrypt");return(0,c.BB)(o,O)}function V(e){const t=(0,c.mL)(e,T),r=t.slice(M,j),n=j;if(H(r)===R){const e=n+L,i=e+U,o=t.slice(n,e),a=t.slice(e,i);return{type:r,sealed:t.slice(i),iv:a,senderPublicKey:o}}const i=n+U,o=t.slice(n,i);return{type:r,sealed:t.slice(i),iv:o}}function q(e,t){const r=V(e);return K({type:H(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?(0,c.BB)(r.senderPublicKey,P):void 0,receiverPublicKey:t?.receiverPublicKey})}function K(e){const t=e?.type||N;if(t===R){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Y(e){return e.type===R&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var X=Object.defineProperty,J=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&te(e,r,t[r]);if(J)for(var r of J(t))ee.call(t,r)&&te(e,r,t[r]);return e};const ne="ReactNative",ie={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},oe="js";function ae(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function se(){return!(0,x.getDocument)()&&!!(0,x.getNavigator)()&&navigator.product===ne}function ce(){return!ae()&&!!(0,x.getNavigator)()&&!!(0,x.getDocument)()}function le(){return se()?ie.reactNative:ae()?ie.node:ce()?ie.browser:ie.unknown}function ue(){var e;try{return se()&&typeof r.g<"u"&&typeof(null==r.g?void 0:r.g.Application)<"u"?null==(e=r.g.Application)?void 0:e.applicationId:void 0}catch{return}}function de(){return(0,C.D)()||{name:"",description:"",url:"",icons:[""]}}function he(e,t,n){const i=function(){if(le()===ie.reactNative&&typeof r.g<"u"&&typeof(null==r.g?void 0:r.g.Platform)<"u"){const{OS:e,Version:t}=r.g.Platform;return[e,t].join("-")}const e=t?y(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new f:"undefined"!=typeof navigator?y(navigator.userAgent):"undefined"!=typeof process&&process.version?new d(process.version.slice(1)):null;var t;if(null===e)return"unknown";const n=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[n,e.name,e.version].join("-"):[n,e.version].join("-")}(),o=function(){var e;const t=le();return t===ie.browser?[t,(null==(e=(0,x.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),[oe,n].join("-"),i,o].join("/")}function pe({protocol:e,version:t,relayUrl:r,sdkVersion:n,auth:i,projectId:o,useOnCloseEvent:a,bundleId:s}){const c=r.split("?"),l={auth:i,ua:he(e,t,n),projectId:o,useOnCloseEvent:a||void 0,origin:s||void 0},u=function(e,t){let r=E.parse(e);return r=re(re({},r),t),E.stringify(r)}(c[1]||"",l);return c[0]+"?"+u}function fe(e,t){return e.filter((e=>t.includes(e))).length===e.length}function ge(e){return Object.fromEntries(e.entries())}function me(e){return new Map(Object.entries(e))}function we(e=v.FIVE_MINUTES,t){const r=(0,v.toMiliseconds)(e||v.FIVE_MINUTES);let n,i,o;return{resolve:e=>{o&&n&&(clearTimeout(o),n(e))},reject:e=>{o&&i&&(clearTimeout(o),i(e))},done:()=>new Promise(((e,a)=>{o=setTimeout((()=>{a(new Error(t))}),r),n=e,i=a}))}}function be(e,t,r){return new Promise((async(n,i)=>{const o=setTimeout((()=>i(new Error(r))),t);try{n(await e)}catch(e){i(e)}clearTimeout(o)}))}function ye(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function ve(e){return ye("topic",e)}function xe(e){return ye("id",e)}function Ce(e){const[t,r]=e.split(":"),n={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)n.topic=r;else{if("id"!==t||!Number.isInteger(Number(r)))throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);n.id=Number(r)}return n}function Ee(e,t){return(0,v.fromMiliseconds)((t||Date.now())+(0,v.toMiliseconds)(e))}function _e(e){return Date.now()>=(0,v.toMiliseconds)(e)}function ke(e,t){return`${e}${t?`:${t}`:""}`}function Se(e=[],t=[]){return[...new Set([...e,...t])]}async function Ae({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const i="string"==typeof n?JSON.parse(n):n;let o=i?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));const a=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=le();s===ie.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===ie.reactNative&&typeof(null==r.g?void 0:r.g.Linking)<"u"&&await r.g.Linking.openURL(a)}catch(e){console.error(e)}}async function Ie(e,t){try{return await e.getItem(t)||(ce()?localStorage.getItem(t):void 0)}catch(e){console.error(e)}}const $e="irn";function Pe(e){return e?.relay||{protocol:$e}}function Te(e){const t=_[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Oe=Object.defineProperty,Ne=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,je=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ue=(e,t)=>{for(var r in t||(t={}))Re.call(t,r)&&je(e,r,t[r]);if(Ne)for(var r of Ne(t))Me.call(t,r)&&je(e,r,t[r]);return e};function Le(e,t="-"){const r={},n="relay"+t;return Object.keys(e).forEach((t=>{if(t.startsWith(n)){const i=t.replace(n,""),o=e[t];r[i]=o}})),r}function Be(e){const t=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),r=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,t),i=e.substring(t+1,r).split("@"),o=typeof r<"u"?e.substring(r):"",a=E.parse(o);return{protocol:n,topic:De(i[0]),version:parseInt(i[1],10),symKey:a.symKey,relay:Le(a)}}function De(e){return e.startsWith("//")?e.substring(2):e}function ze(e){return`${e.protocol}:${e.topic}@${e.version}?`+E.stringify(Ue({symKey:e.symKey},function(e,t="-"){const r={};return Object.keys(e).forEach((n=>{const i="relay"+t+n;e[n]&&(r[i]=e[n])})),r}(e.relay)))}var Fe=Object.defineProperty,We=Object.defineProperties,He=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,qe=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ke=(e,t)=>{for(var r in t||(t={}))Ze.call(t,r)&&qe(e,r,t[r]);if(Ge)for(var r of Ge(t))Ve.call(t,r)&&qe(e,r,t[r]);return e},Ye=(e,t)=>We(e,He(t));function Xe(e){const t=[];return e.forEach((e=>{const[r,n]=e.split(":");t.push(`${r}:${n}`)})),t}function Je(e,t){const r=vt(e,t);if(r)throw new Error(r.message);const n={};for(const[t,r]of Object.entries(e))n[t]={methods:r.methods,events:r.events,chains:r.accounts.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))};return n}function Qe(e){return e.includes(":")}function et(e){return Qe(e)?e.split(":")[0]:e}function tt(e){var t,r,n;const i={};if(!st(e))return i;for(const[o,a]of Object.entries(e)){const e=Qe(o)?[o]:a.chains,s=a.methods||[],c=a.events||[],l=et(o);i[l]=Ye(Ke({},i[l]),{chains:Se(e,null==(t=i[l])?void 0:t.chains),methods:Se(s,null==(r=i[l])?void 0:r.methods),events:Se(c,null==(n=i[l])?void 0:n.events)})}return i}const rt={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},nt={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function it(e,t){const{message:r,code:n}=nt[e];return{message:t?`${r} ${t}`:r,code:n}}function ot(e,t){const{message:r,code:n}=rt[e];return{message:t?`${r} ${t}`:r,code:n}}function at(e,t){return!!Array.isArray(e)&&(!(typeof t<"u"&&e.length)||e.every(t))}function st(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function ct(e){return typeof e>"u"}function lt(e,t){return!(!t||!ct(e))||"string"==typeof e&&!!e.trim().length}function ut(e,t){return!(!t||!ct(e))||"number"==typeof e&&!isNaN(e)}function dt(e,t){const{requiredNamespaces:r}=t,n=Object.keys(e.namespaces),i=Object.keys(r);let o=!0;return!!fe(i,n)&&(n.forEach((t=>{const{accounts:n,methods:i,events:a}=e.namespaces[t],s=Xe(n),c=r[t];fe(I(t,c),s)&&fe(c.methods,i)&&fe(c.events,a)||(o=!1)})),o)}function ht(e){return!(!lt(e,!1)||!e.includes(":"))&&2===e.split(":").length}function pt(e){if(lt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function ft(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function gt(e){return e?.topic}function mt(e,t){let r=null;return lt(e?.publicKey,!1)||(r=it("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function wt(e){let t=!0;return at(e)?e.length&&(t=e.every((e=>lt(e,!1)))):t=!1,t}function bt(e,t){let r=null;return Object.values(e).forEach((e=>{if(r)return;const n=function(e,t){let r=null;return wt(e?.methods)?wt(e?.events)||(r=ot("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):r=ot("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),r}(e,`${t}, namespace`);n&&(r=n)})),r}function yt(e,t,r){let n=null;if(e&&st(e)){const i=bt(e,t);i&&(n=i);const o=function(e,t,r){let n=null;return Object.entries(e).forEach((([e,i])=>{if(n)return;const o=function(e,t,r){let n=null;return at(t)&&t.length?t.forEach((e=>{n||ht(e)||(n=ot("UNSUPPORTED_CHAINS",`${r}, chain ${e} should be a string and conform to "namespace:chainId" format`))})):ht(e)||(n=ot("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),n}(e,I(e,i),`${t} ${r}`);o&&(n=o)})),n}(e,t,r);o&&(n=o)}else n=it("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return n}function vt(e,t){let r=null;if(e&&st(e)){const n=bt(e,t);n&&(r=n);const i=function(e,t){let r=null;return Object.values(e).forEach((e=>{if(r)return;const n=function(e,t){let r=null;return at(e)?e.forEach((e=>{r||function(e){if(lt(e,!1)&&e.includes(":")){const t=e.split(":");if(3===t.length){const e=t[0]+":"+t[1];return!!t[2]&&ht(e)}}return!1}(e)||(r=ot("UNSUPPORTED_ACCOUNTS",`${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))})):r=ot("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}(e?.accounts,`${t} namespace`);n&&(r=n)})),r}(e,t);i&&(r=i)}else r=it("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function xt(e){return lt(e.protocol,!0)}function Ct(e,t){let r=!1;return t&&!e?r=!0:e&&at(e)&&e.length&&e.forEach((e=>{r=xt(e)})),r}function Et(e){return"number"==typeof e}function _t(e){return typeof e<"u"&&null!==typeof e}function kt(e){return!!(e&&"object"==typeof e&&e.code&&ut(e.code,!1)&&e.message&&lt(e.message,!1))}function St(e){return!(ct(e)||!lt(e.method,!1))}function At(e){return!(ct(e)||ct(e.result)&&ct(e.error)||!ut(e.id,!1)||!lt(e.jsonrpc,!1))}function It(e){return!(ct(e)||!lt(e.name,!1))}function $t(e,t){return!(!ht(t)||!function(e){const t=[];return Object.values(e).forEach((e=>{t.push(...Xe(e.accounts))})),t}(e).includes(t))}function Pt(e,t,r){return!!lt(r,!1)&&function(e,t){const r=[];return Object.values(e).forEach((e=>{Xe(e.accounts).includes(t)&&r.push(...e.methods)})),r}(e,t).includes(r)}function Tt(e,t,r){return!!lt(r,!1)&&function(e,t){const r=[];return Object.values(e).forEach((e=>{Xe(e.accounts).includes(t)&&r.push(...e.events)})),r}(e,t).includes(r)}function Ot(e,t,r){let n=null;const i=function(e){const t={};return Object.keys(e).forEach((r=>{var n;r.includes(":")?t[r]=e[r]:null==(n=e[r].chains)||n.forEach((n=>{t[n]={methods:e[r].methods,events:e[r].events}}))})),t}(e),o=function(e){const t={};return Object.keys(e).forEach((r=>{if(r.includes(":"))t[r]=e[r];else{const n=Xe(e[r].accounts);n?.forEach((n=>{t[n]={accounts:e[r].accounts.filter((e=>e.includes(`${n}:`))),methods:e[r].methods,events:e[r].events}}))}})),t}(t),a=Object.keys(i),s=Object.keys(o),c=Nt(Object.keys(e)),l=Nt(Object.keys(t)),u=c.filter((e=>!l.includes(e)));return u.length&&(n=it("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),fe(a,s)||(n=it("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.\n      Required: ${a.toString()}\n      Approved: ${s.toString()}`)),Object.keys(t).forEach((e=>{if(!e.includes(":")||n)return;const i=Xe(t[e].accounts);i.includes(e)||(n=it("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))})),a.forEach((e=>{n||(fe(i[e].methods,o[e].methods)?fe(i[e].events,o[e].events)||(n=it("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):n=it("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))})),n}function Nt(e){return[...new Set(e.map((e=>e.includes(":")?e.split(":")[0]:e)))]}function Rt(e,t){return ut(e,!1)&&e<=t.max&&e>=t.min}function Mt(){const e=le();return new Promise((t=>{switch(e){case ie.browser:t(ce()&&navigator?.onLine);break;case ie.reactNative:t(async function(){if(se()&&typeof r.g<"u"&&null!=r.g&&r.g.NetInfo){const e=await(null==r.g?void 0:r.g.NetInfo.fetch());return e?.isConnected}return!0}());break;case ie.node:default:t(!0)}}))}function jt(e){switch(le()){case ie.browser:!function(e){!se()&&ce()&&(window.addEventListener("online",(()=>e(!0))),window.addEventListener("offline",(()=>e(!1))))}(e);break;case ie.reactNative:!function(e){se()&&typeof r.g<"u"&&null!=r.g&&r.g.NetInfo&&r.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))}(e);case ie.node:}}const Ut={};class Lt{static get(e){return Ut[e]}static set(e,t){Ut[e]=t}static delete(e){delete Ut[e]}}},6151:(e,t,r)=>{"use strict";const n=r(610),i=r(4020),o=r(500),a=r(2806),s=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function h(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const i="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!i&&u(r,e).includes(e.arrayFormatSeparator);r=o?u(r,e):r;const a=i||o?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=a};case"bracket-separator":return(t,r,n)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(n[t]=r?u(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const i of e.split("&")){if(""===i)continue;let[e,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:u(a,t),r(u(e,t),a,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=f(r[e],t);else n[e]=f(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=d(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",i,"]"].join("")]:[...r,[l(t,e),"[",l(i,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),":list="].join("")]:[...r,[l(t,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length?[[l(r,e),t,l(i,e)].join("")]:[[n,l(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),i={};for(const t of Object.keys(e))r(t)||(i[t]=e[t]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const i=e[r];return void 0===i?"":null===i?l(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":i.reduce(n(r),[]).join("&"):l(r,t)+"="+l(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=h(e.url).split("?")[0]||"",i=t.extract(e.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,e.query);let c=t.stringify(a,r);c&&(c=`?${c}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[s]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${c}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:i,query:o,fragmentIdentifier:c}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:a(o,r),fragmentIdentifier:c},n)},t.exclude=(e,r,n)=>{const i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,i,n)}},2873:(e,t)=>{"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function n(e){const t=r(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=n,t.getDocumentOrThrow=function(){return n("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return n("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return n("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return n("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return n("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},5755:(e,t,r)=>{"use strict";t.D=void 0;const n=r(2873);t.D=function(){let e,t;try{e=n.getDocumentOrThrow(),t=n.getLocationOrThrow()}catch(e){return null}function r(...t){const r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){const n=r[e],i=["itemprop","property","name"].map((e=>n.getAttribute(e))).filter((e=>!!e&&t.includes(e)));if(i.length&&i){const e=n.getAttribute("content");if(e)return e}}return""}const i=function(){let t=r("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}();return{description:r("description","og:description","twitter:description","keywords"),url:t.origin,icons:function(){const r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){const i=r[e],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){const e=i.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{const n=t.pathname.split("/");n.pop(),r+=n.join("/")+"/"+e}n.push(r)}else if(0===e.indexOf("//")){const r=t.protocol+e;n.push(r)}else n.push(e)}}return n}(),name:i}}},9742:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,o=s(e),a=o[0],c=o[1],l=new i(function(e,t,r){return 3*(t+r)/4-r}(0,a,c)),u=0,d=c>0?a-4:a;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===c&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===c&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],a=16383,s=0,l=n-i;s<l;s+=a)o.push(c(e,s,s+a>l?l:s+a));return 1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)r[a]=o[a],n[o.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,n){for(var i,o,a=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:(e,t,r)=>{"use strict";const n=r(9742),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return+e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return d(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|g(e,t);let n=s(r);const i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return p(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const i=function(e){if(c.isBuffer(e)){const t=0|f(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Y(e.length)?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return u(e),s(e<0?0:0|f(e))}function h(e){const t=e.length<0?0:0|f(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function f(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function g(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Z(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(e).length;default:if(i)return n?-1:Z(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return I(this,t,r);case"latin1":case"binary":return $(this,t,r);case"base64":return k(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function b(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:y(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):y(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,n,i){let o,a=1,s=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let n=-1;for(o=r;o<s;o++)if(l(e,o)===l(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===c)return n*a}else-1!==n&&(o-=o-n),n=-1}else for(r+c>s&&(r=s-c),o=r;o>=0;o--){let r=!0;for(let n=0;n<c;n++)if(l(e,o+n)!==l(t,n)){r=!1;break}if(r)return o}return-1}function v(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=t.length;let a;for(n>o/2&&(n=o/2),a=0;a<n;++a){const n=parseInt(t.substr(2*a,2),16);if(Y(n))return a;e[r+a]=n}return a}function x(e,t,r,n){return q(Z(t,e.length-r),e,r,n)}function C(e,t,r,n){return q(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function E(e,t,r,n){return q(V(t),e,r,n)}function _(e,t,r,n){return q(function(e,t){let r,n,i;const o=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function k(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=r){let r,n,s,c;switch(a){case 1:t<128&&(o=t);break;case 2:r=e[i+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(o=c));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=A));return r}(n)}t.kMaxLength=a,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return u(e),e<=0?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)}(e,t,r)},c.allocUnsafe=function(e){return d(e)},c.allocUnsafeSlow=function(e){return d(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(K(t,Uint8Array))i+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},c.byteLength=g,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):m.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(c.prototype[o]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,i){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0);const s=Math.min(o,a),l=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<s;++e)if(l[e]!==u[e]){o=l[e],a=u[e];break}return o<a?-1:a<o?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return x(this,e,t,r);case"ascii":case"latin1":case"binary":return C(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function I(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function $(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function P(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=X[e[n]];return i}function T(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function O(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function N(e,t,r,n,i,o){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n,i){F(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function M(e,t,r,n,i){F(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function j(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(e,t,r,n,o){return t=+t,r>>>=0,o||j(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function L(e,t,r,n,o){return t=+t,r>>>=0,o||j(e,0,r,8),i.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),c.prototype.readBigUInt64BE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=J((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||O(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||O(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||O(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||O(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||N(this,e,t,r,Math.pow(2,8*r)-1,0);let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||N(this,e,t,r,Math.pow(2,8*r)-1,0);let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=J((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=J((function(e,t=0){return M(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);N(this,e,t,r,n-1,-n)}let i=0,o=1,a=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);N(this,e,t,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||N(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=J((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=J((function(e,t=0){return M(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return U(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return U(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return L(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return L(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const o=c.isBuffer(e)?e:c.from(e,n),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};const B={};function D(e,t,r){B[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function z(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function F(e,t,r,n,i,o){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new B.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){W(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(n,i,o)}function W(e,t){if("number"!=typeof e)throw new B.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw W(e,r),new B.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new B.ERR_BUFFER_OUT_OF_BOUNDS;throw new B.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=z(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=z(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function Z(e,t){let r;t=t||1/0;const n=e.length;let i=null;const o=[];for(let a=0;a<n;++a){if(r=e.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const X=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function J(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},7484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,r="millisecond",n="second",i="minute",o="hour",a="day",s="week",c="month",l="quarter",u="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},m=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},w={s:m,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:a,D:d,h:o,m:i,s:n,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",y={};y[b]=g;var v="$isDayjsObject",x=function(e){return e instanceof k||!(!e||!e[v])},C=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();y[o]&&(i=o),r&&(y[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;y[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},E=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},_=w;_.l=C,_.i=x,_.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var m=g.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return _},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var r=E(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return E(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<E(e)},m.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var r=this,l=!!_.u(t)||t,h=_.p(e),p=function(e,t){var n=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return l?n:n.endOf(a)},f=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,w=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case u:return l?p(1,0):p(31,11);case c:return l?p(1,m):p(0,m+1);case s:var y=this.$locale().weekStart||0,v=(g<y?g+7:g)-y;return p(l?w-v:w+(6-v),m);case a:case d:return f(b+"Hours",0);case o:return f(b+"Minutes",1);case i:return f(b+"Seconds",2);case n:return f(b+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var s,l=_.p(e),h="set"+(this.$u?"UTC":""),p=(s={},s[a]=h+"Date",s[d]=h+"Date",s[c]=h+"Month",s[u]=h+"FullYear",s[o]=h+"Hours",s[i]=h+"Minutes",s[n]=h+"Seconds",s[r]=h+"Milliseconds",s)[l],f=l===a?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(d,1);g.$d[p](f),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[_.p(e)]()},m.add=function(r,l){var d,h=this;r=Number(r);var p=_.p(l),f=function(e){var t=E(h);return _.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===a)return f(1);if(p===s)return f(7);var g=(d={},d[i]=e,d[o]=t,d[n]=1e3,d)[p]||1,m=this.$d.getTime()+r*g;return _.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,c=r.weekdays,l=r.months,u=r.meridiem,d=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},p=function(e){return _.s(o%12||12,e,"0")},g=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return _.s(t.$y,4,"0");case"M":return s+1;case"MM":return _.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return _.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,c,2);case"ddd":return d(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(o);case"HH":return _.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return _.s(a,2,"0");case"s":return String(t.$s);case"ss":return _.s(t.$s,2,"0");case"SSS":return _.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,h){var p,f=this,g=_.p(d),m=E(r),w=(m.utcOffset()-this.utcOffset())*e,b=this-m,y=function(){return _.m(f,m)};switch(g){case u:p=y()/12;break;case c:p=y();break;case l:p=y()/3;break;case s:p=(b-w)/6048e5;break;case a:p=(b-w)/864e5;break;case o:p=b/t;break;case i:p=b/e;break;case n:p=b/1e3;break;default:p=b}return h?p:_.a(p)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},m.clone=function(){return _.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),S=k.prototype;return E.prototype=S,[["$ms",r],["$s",n],["$m",i],["$H",o],["$W",a],["$M",c],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,k,E),e.$i=!0),E},E.locale=C,E.isDayjs=x,E.unix=function(e){return E(1e3*e)},E.en=y[b],E.Ls=y,E.p={},E}()},4110:function(e){e.exports=function(){"use strict";return function(e,t,r){e=e||{};var n=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,i){return n.fromToBase(e,t,r,i)}r.en.relativeTime=i,n.fromToBase=function(t,n,o,a,s){for(var c,l,u,d=o.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(c=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var m=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,m<=g.r||!g.r){m<=1&&f>0&&(g=h[f-1]);var w=d[g.l];s&&(m=s(""+m)),l="string"==typeof w?w.replace("%d",m):w(m,n,g.l,u);break}}if(n)return l;var b=u?d.future:d.past;return"function"==typeof b?b(l):b.replace("%s",l)},n.to=function(e,t){return o(e,t,this,!0)},n.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(a(this),e)},n.fromNow=function(e){return this.from(a(this),e)}}}()},660:function(e){e.exports=function(){"use strict";return function(e,t,r){r.updateLocale=function(e,t){var n=r.Ls[e];if(n)return(t?Object.keys(t):[]).forEach((function(e){n[e]=t[e]})),n}}}()},4020:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var i=o(r[0]);i!==r[0]&&(t[r[0]]=i)}r=n.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var c=a[s];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},5987:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,n){var i={},o={};o[r]=0;var a,s,c,l,u,d,h,p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(c in s=(a=p.pop()).value,l=a.cost,u=e[s]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=o[c],(void 0===o[c]||h>d)&&(o[c]=d,p.push(c,d),i[c]=s));if(void 0!==n&&void 0===o[n]){var f=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(f)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},2378:e=>{"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,n+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},6729:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,a){if("function"!=typeof n)throw new TypeError("The listener must be a function");var s=new i(n,o||e,a),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,a=new Array(o);i<o;i++)a[i]=n[i].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,o),!0;case 6:return u.fn.call(u.context,t,n,i,o,a),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,n);break;case 4:u[l].fn.call(u[l].context,t,n,i);break;default:if(!c)for(h=1,c=new Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||i&&!s[c].once||n&&s[c].context!==n)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},2806:e=>{"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),o=0;o<n.length;o++){var a=n[o],s=e[a];(i?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},645:(e,t)=>{t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,c=(1<<s)-1,l=c>>1,u=-7,d=r?i-1:0,h=r?-1:1,p=e[t+d];for(d+=h,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-l;else{if(o===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=l}return(p?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,c,l=8*o-i-1,u=(1<<l)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,f=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+d>=1?h/c:h*Math.pow(2,1-d))*c>=2&&(a++,c/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*c-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&s,p+=f,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;e[r+p]=255&a,p+=f,a/=256,l-=8);e[r+p-f]|=128*g}},2592:(e,t,r)=>{const n=r(7138),i=r(5115),o=r(6907),a=r(3776);function s(e,t,r,o,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!n())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(r=t,t=o=void 0):2!==c||t.getContext||(o=r,r=t,t=void 0),new Promise((function(n,a){try{const a=i.create(r,o);n(e(a,t,o))}catch(e){a(e)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(a=r,r=t,t=o=void 0):3===c&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0));try{const n=i.create(r,o);a(null,e(n,t,o))}catch(e){a(e)}}t.create=i.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,(function(e,t,r){return a.render(e,r)}))},7138:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},1845:(e,t,r)=>{const n=r(242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){const r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||r.push([n[e],n[t]]);return r}},8260:(e,t,r)=>{const n=r(6910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},7245:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},3280:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){const i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},3424:(e,t,r)=>{const n=r(2378),i=r(6910);function o(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},5393:(e,t,r)=>{const n=r(4908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[4*(e-1)+0];case n.M:return i[4*(e-1)+1];case n.Q:return i[4*(e-1)+2];case n.H:return i[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[4*(e-1)+0];case n.M:return o[4*(e-1)+1];case n.Q:return o[4*(e-1)+2];case n.H:return o[4*(e-1)+3];default:return}}},4908:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},6526:(e,t,r)=>{const n=r(242).getSymbolSize;t.getPositions=function(e){const t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},1642:(e,t,r)=>{const n=r(242),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){const r=e.bit<<3|t;let o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return 21522^(r<<10|o)}},9729:(e,t)=>{const r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},5442:(e,t,r)=>{const n=r(6910),i=r(242);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}},e.exports=o},7126:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function r(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let r=0,n=0,i=0,o=null,a=null;for(let s=0;s<t;s++){n=i=0,o=a=null;for(let c=0;c<t;c++){let t=e.get(s,c);t===o?n++:(n>=5&&(r+=n-5+3),o=t,n=1),t=e.get(c,s),t===a?i++:(i>=5&&(r+=i-5+3),a=t,i=1)}n>=5&&(r+=n-5+3),i>=5&&(r+=i-5+3)}return r},t.getPenaltyN2=function(e){const t=e.size;let r=0;for(let n=0;n<t-1;n++)for(let i=0;i<t-1;i++){const t=e.get(n,i)+e.get(n,i+1)+e.get(n+1,i)+e.get(n+1,i+1);4!==t&&0!==t||r++}return 3*r},t.getPenaltyN3=function(e){const t=e.size;let r=0,n=0,i=0;for(let o=0;o<t;o++){n=i=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(o,a),a>=10&&(1488===n||93===n)&&r++,i=i<<1&2047|e.get(a,o),a>=10&&(1488===i||93===i)&&r++}return 40*r},t.getPenaltyN4=function(e){let t=0;const r=e.data.length;for(let n=0;n<r;n++)t+=e.data[n];return 10*Math.abs(Math.ceil(100*t/r/5)-10)},t.applyMask=function(e,t){const n=t.size;for(let i=0;i<n;i++)for(let o=0;o<n;o++)t.isReserved(o,i)||t.xor(o,i,r(e,o,i))},t.getBestMask=function(e,r){const n=Object.keys(t.Patterns).length;let i=0,o=1/0;for(let a=0;a<n;a++){r(a),t.applyMask(a,e);const n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),n<o&&(o=n,i=a)}return i}},6910:(e,t,r)=>{const n=r(3114),i=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!n.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},1085:(e,t,r)=>{const n=r(6910);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);const i=this.data.length-t;i>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,3*i+1))},e.exports=i},6143:(e,t,r)=>{const n=r(9729);t.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)r[i+o]^=n.mul(e[i],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},5115:(e,t,r)=>{const n=r(242),i=r(4908),o=r(7245),a=r(3280),s=r(1845),c=r(6526),l=r(7126),u=r(5393),d=r(2882),h=r(3103),p=r(1642),f=r(6910),g=r(6130);function m(e,t,r){const n=e.size,i=p.getEncodedBits(t,r);let o,a;for(o=0;o<15;o++)a=1==(i>>o&1),o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(n-15+o,8,a,!0),o<8?e.set(8,n-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(n-8,8,1,!0)}function w(e,t,r,i){let p;if(Array.isArray(e))p=g.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let n=t;if(!n){const t=g.rawSplit(e);n=h.getBestVersionForData(t,r)}p=g.fromString(e,n||40)}}const w=h.getBestVersionForData(p,r);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;const b=function(e,t,r){const i=new o;r.forEach((function(t){i.put(t.mode.bit,4),i.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(i)}));const a=8*(n.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t));for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);const s=(a-i.getLengthInBits())/8;for(let e=0;e<s;e++)i.put(e%2?17:236,8);return function(e,t,r){const i=n.getSymbolTotalCodewords(t),o=i-u.getTotalCodewordsCount(t,r),a=u.getBlocksCount(t,r),s=a-i%a,c=Math.floor(i/a),l=Math.floor(o/a),h=l+1,p=c-l,f=new d(p);let g=0;const m=new Array(a),w=new Array(a);let b=0;const y=new Uint8Array(e.buffer);for(let e=0;e<a;e++){const t=e<s?l:h;m[e]=y.slice(g,g+t),w[e]=f.encode(m[e]),g+=t,b=Math.max(b,t)}const v=new Uint8Array(i);let x,C,E=0;for(x=0;x<b;x++)for(C=0;C<a;C++)x<m[C].length&&(v[E++]=m[C][x]);for(x=0;x<p;x++)for(C=0;C<a;C++)v[E++]=w[C][x];return v}(i,e,t)}(t,r,p),y=n.getSymbolSize(t),v=new a(y);return function(e,t){const r=e.size,n=c.getPositions(t);for(let t=0;t<n.length;t++){const i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}(v,t),function(e){const t=e.size;for(let r=8;r<t-8;r++){const t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){const r=s.getPositions(t);for(let t=0;t<r.length;t++){const n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(v,t),m(v,r,0),t>=7&&function(e,t){const r=e.size,n=h.getEncodedBits(t);let i,o,a;for(let t=0;t<18;t++)i=Math.floor(t/3),o=t%3+r-8-3,a=1==(n>>t&1),e.set(i,o,a,!0),e.set(o,i,a,!0)}(v,t),function(e,t){const r=e.size;let n=-1,i=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let n=!1;a<t.length&&(n=1==(t[a]>>>o&1)),e.set(i,s-r,n),o--,-1===o&&(a++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}(v,b),isNaN(i)&&(i=l.getBestMask(v,m.bind(null,v,r))),l.applyMask(i,v),m(v,r,i),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:i,segments:p}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let r,o,a=i.M;return void 0!==t&&(a=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),o=l.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),w(e,r,a,o)}},2882:(e,t,r)=>{const n=r(6143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){const e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},7007:(e,t)=>{const r="[0-9]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=new RegExp(n,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(i,"g"),t.NUMERIC=new RegExp(r,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+n+"$"),a=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},6130:(e,t,r)=>{const n=r(6910),i=r(1085),o=r(8260),a=r(3424),s=r(5442),c=r(7007),l=r(242),u=r(5987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){const n=[];let i;for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){const t=h(c.NUMERIC,n.NUMERIC,e),r=h(c.ALPHANUMERIC,n.ALPHANUMERIC,e);let i,o;return l.isKanjiModeEnabled()?(i=h(c.BYTE,n.BYTE,e),o=h(c.KANJI,n.KANJI,e)):(i=h(c.BYTE_KANJI,n.BYTE,e),o=[]),t.concat(r,i,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function f(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;const c=n.getBestModeForData(e);if(r=n.from(t,c),r!==n.BYTE&&r.bit<c.bit)throw new Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(c));switch(r!==n.KANJI||l.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new s(e);case n.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e}),[])},t.fromString=function(e,r){const i=function(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(p(e,l.isKanjiModeEnabled())),o=function(e,t){const r={},i={start:{}};let o=["start"];for(let a=0;a<e.length;a++){const s=e[a],c=[];for(let e=0;e<s.length;e++){const l=s[e],u=""+a+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){const a=o[e];r[a]&&r[a].node.mode===l.mode?(i[a][u]=f(r[a].lastCount+l.length,l.mode)-f(r[a].lastCount,l.mode),r[a].lastCount+=l.length):(r[a]&&(r[a].lastCount=l.length),i[a][u]=f(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,t))}}o=c}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:r}}(i,r),a=u.find_path(o.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(o.table[a[e]].node);return t.fromArray(s.reduce((function(e,t){const r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[]))},t.rawSplit=function(e){return t.fromArray(p(e,l.isKanjiModeEnabled()))}},242:(e,t)=>{let r;const n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},3114:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},3103:(e,t,r)=>{const n=r(242),i=r(5393),o=r(4908),a=r(6910),s=r(3114),c=n.getBCHDigit(7973);function l(e,t){return a.getCharCountIndicator(e,t)+4}function u(e,t){let r=0;return e.forEach((function(e){const n=l(e.mode,t);r+=n+e.getBitsLength()})),r}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw new Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);const o=8*(n.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t));if(r===a.MIXED)return o;const c=o-l(r,e);switch(r){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,r){let n;const i=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(u(e,n)<=t.getCapacity(n,r,a.MIXED))return n}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-c>=0;)t^=7973<<n.getBCHDigit(t)-c;return e<<12|t}},6907:(e,t,r)=>{const n=r(9653);t.render=function(e,t,r){let i=r,o=t;void 0!==i||t&&t.getContext||(i=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),i=n.getOptions(i);const a=n.getImageWidth(e.modules.size,i),s=o.getContext("2d"),c=s.createImageData(a,a);return n.qrToImageData(c.data,e,i),function(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}(s,o,a),s.putImageData(c,0,0),o},t.renderToDataURL=function(e,r,n){let i=n;void 0!==i||r&&r.getContext||(i=r,r=void 0),i||(i={});const o=t.render(e,r,i),a=i.type||"image/png",s=i.rendererOpts||{};return o.toDataURL(a,s.quality)}},3776:(e,t,r)=>{const n=r(9653);function i(e,t){const r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){const a=n.getOptions(t),s=e.modules.size,c=e.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,a=!1,s=0;for(let c=0;c<e.length;c++){const l=Math.floor(c%t),u=Math.floor(c/t);l||a||(a=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(n+=a?o("M",l+r,.5+u+r):o("m",i,0),i=0,a=!1),l+1<t&&e[c+1]||(n+=o("h",s),s=0)):i++}return n}(c,s,a.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,p),p}},9653:(e,t)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){const n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){const i=r.modules.size,o=r.modules.data,a=t.getScale(i,n),s=Math.floor((i+2*n.margin)*a),c=n.margin*a,l=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=4*(t*s+r),d=n.color.light;t>=c&&r>=c&&t<s-c&&r<s-c&&(d=l[o[Math.floor((t-c)/a)*i+Math.floor((r-c)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},500:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__assign:()=>o,__asyncDelegator:()=>v,__asyncGenerator:()=>y,__asyncValues:()=>x,__await:()=>b,__awaiter:()=>u,__classPrivateFieldGet:()=>k,__classPrivateFieldSet:()=>S,__createBinding:()=>h,__decorate:()=>s,__exportStar:()=>p,__extends:()=>i,__generator:()=>d,__importDefault:()=>_,__importStar:()=>E,__makeTemplateObject:()=>C,__metadata:()=>l,__param:()=>c,__read:()=>g,__rest:()=>a,__spread:()=>m,__spreadArrays:()=>w,__values:()=>f});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function s(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function p(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=i[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,l):u(o[0][2],r)}catch(e){u(o[0][3],e)}var r}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=f(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,i,(t=e[r](t)).done,t.value)}))}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},5883:()=>{},248:(e,t,r)=>{"use strict";r.d(t,{E:()=>a});var n=r(7484),i=r(660),o=r(4110);n.extend(o),n.extend(i),n.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const a={getYear:(e=(new Date).toISOString())=>n(e).year(),getRelativeDateFromNow:e=>n(e).fromNow(!0)}},5909:(e,t,r)=>{"use strict";r.d(t,{AccountController:()=>l,ApiController:()=>I,fz:()=>K,Lr:()=>L,ConnectionController:()=>H,ConnectorController:()=>y,bq:()=>a,j1:()=>s,Xs:()=>O,IN:()=>j,NetworkController:()=>E,OptionsController:()=>k,Ie:()=>x,RouterController:()=>R,_4:()=>Y,yD:()=>Z,SnackController:()=>D,MO:()=>g,ThemeController:()=>q,sl:()=>F});var n=r(6828);function i(e,t,r,i){let o=e[t];return(0,n.Ld)(e,(()=>{const n=e[t];Object.is(o,n)||r(o=n)}),i)}Symbol();const o="https://secure.web3modal.com",a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=a.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=a.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+a.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout((function(){e(...n)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;return r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;return r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,r)=>{const n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e}));return Promise.race([t,s.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){const t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},c=(0,n.sj)({isConnected:!1}),l={state:c,subscribe:e=>(0,n.Ld)(c,(()=>e(c))),subscribeKey:(e,t)=>i(c,e,t),setIsConnected(e){c.isConnected=e},setCaipAddress(e){c.caipAddress=e,c.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){c.balance=e,c.balanceSymbol=t},setProfileName(e){c.profileName=e},setProfileImage(e){c.profileImage=e},setAddressExplorerUrl(e){c.addressExplorerUrl=e},resetAccount(){c.isConnected=!1,c.caipAddress=void 0,c.address=void 0,c.balance=void 0,c.balanceSymbol=void 0,c.profileName=void 0,c.profileImage=void 0,c.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&r.searchParams.append(e,t)})),r}}const d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",p="@w3m/connected_wallet_image_url",f="@w3m/connected_connector",g={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(d,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=g.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(p)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(f)}catch{console.info("Unable to get Connected Connector")}}},m=(0,n.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),w={state:m,subscribeNetworkImages:e=>(0,n.Ld)(m.networkImages,(()=>e(m.networkImages))),subscribeKey:(e,t)=>i(m,e,t),setWalletImage(e,t){m.walletImages[e]=t},setNetworkImage(e,t){m.networkImages[e]=t},setConnectorImage(e,t){m.connectorImages[e]=t},setTokenImage(e,t){m.tokenImages[e]=t}},b=(0,n.sj)({connectors:[]}),y={state:b,subscribeKey:(e,t)=>i(b,e,t),setConnectors(e){b.connectors=e.map((e=>(0,n.iH)(e)))},addConnector(e){b.connectors.push((0,n.iH)(e))},getEmailConnector:()=>b.connectors.find((e=>"EMAIL"===e.type)),getAnnouncedConnectorRdns:()=>b.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>e.info?.rdns)),getConnectors:()=>b.connectors},v=(0,n.sj)({open:!1,selectedNetworkId:void 0}),x={state:v,subscribe:e=>(0,n.Ld)(v,(()=>e(v))),set(e){Object.assign(v,{...v,...e})}},C=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),E={state:C,subscribeKey:(e,t)=>i(C,e,t),_getClient(){if(!C._client)throw new Error("NetworkController client not set");return C._client},setClient(e){C._client=(0,n.iH)(e)},setCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){C.caipNetwork=e,x.set({selectedNetworkId:e?.id}),C.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){C.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();C.supportsAllNetworks=e.supportsAllNetworks,C.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),C.caipNetwork=e},resetNetwork(){C.isDefaultCaipNetwork||(C.caipNetwork=void 0),C.approvedCaipNetworkIds=void 0,C.supportsAllNetworks=!0}},_=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),k={state:_,subscribeKey:(e,t)=>i(_,e,t),setProjectId(e){_.projectId=e},setIncludeWalletIds(e){_.includeWalletIds=e},setExcludeWalletIds(e){_.excludeWalletIds=e},setFeaturedWalletIds(e){_.featuredWalletIds=e},setTokens(e){_.tokens=e},setTermsConditionsUrl(e){_.termsConditionsUrl=e},setPrivacyPolicyUrl(e){_.privacyPolicyUrl=e},setCustomWallets(e){_.customWallets=e},setEnableAnalytics(e){_.enableAnalytics=e},setSdkVersion(e){_.sdkVersion=e},setMetadata(e){_.metadata=e}},S=new u({baseUrl:s.getApiUrl()}),A=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),I={state:A,subscribeKey:(e,t)=>i(A,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=k.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){const t=`${S.baseUrl}/getWalletImage/${e}`,r=await S.getBlob({path:t,headers:I._getApiHeaders()});w.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:I._getApiHeaders()});w.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${S.baseUrl}/public/getAssetImage/${e}`,r=await S.getBlob({path:t,headers:I._getApiHeaders()});w.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=E.state,t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>I._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=y.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>I._fetchConnectorImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=k.state;if(e?.length){const{data:t}=await S.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)));const r=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(r.map((e=>I._fetchWalletImage(e)))),A.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=k.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await S.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),a=g.getRecentWallets(),s=i.map((e=>e.image_id)).filter(Boolean),c=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s,...c].map((e=>I._fetchWalletImage(e)))),A.recommended=i,A.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=k.state,i=[...A.recommended.map((({id:e})=>e)),...r??[],...n??[]].filter(Boolean),{data:o,count:a}=await S.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),c=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c.map((e=>I._fetchWalletImage(e))),s.wait(300)]),A.wallets=[...A.wallets,...o],A.count=a>A.count?a:A.count,A.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:r}=k.state;A.search=[];const{data:n}=await S.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>I._fetchWalletImage(e))),s.wait(300)]),A.search=n},prefetch(){A.prefetchPromise=Promise.race([Promise.allSettled([I.fetchFeaturedWallets(),I.fetchRecommendedWallets(),I.fetchNetworkImages(),I.fetchConnectorImages()]),s.wait(3e3)])}},$=new u({baseUrl:s.getAnalyticsUrl()}),P=["MODAL_CREATED"],T=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),O={state:T,subscribe:e=>(0,n.Ld)(T,(()=>e(T))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=k.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(P.includes(e.data.event)||"undefined"==typeof window)return;await $.post({path:"/e",headers:O._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){T.timestamp=Date.now(),T.data=e,k.state.enableAnalytics&&O._sendAnalyticsEvent(T)}},N=(0,n.sj)({view:"Connect",history:["Connect"]}),R={state:N,subscribeKey:(e,t)=>i(N,e,t),push(e,t){e!==N.view&&(N.view=e,N.history.push(e),N.data=t)},reset(e){N.view=e,N.history=[e]},replace(e,t){N.history.length>1&&N.history.at(-1)!==e&&(N.view=e,N.history[N.history.length-1]=e,N.data=t)},goBack(){if(N.history.length>1){N.history.pop();const[e]=N.history.slice(-1);e&&(N.view=e)}},goBackToIndex(e){if(N.history.length>1){N.history=N.history.slice(0,e+1);const[t]=N.history.slice(-1);t&&(N.view=t)}}},M=(0,n.sj)({loading:!1,open:!1}),j={state:M,subscribe:e=>(0,n.Ld)(M,(()=>e(M))),subscribeKey:(e,t)=>i(M,e,t),async open(e){await I.state.prefetchPromise,e?.view?R.reset(e.view):l.state.isConnected?R.reset("Account"):R.reset("Connect"),M.open=!0,x.set({open:!0}),O.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){M.open=!1,x.set({open:!1}),O.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){M.loading=e}},U=new u({baseUrl:s.getBlockchainApiUrl()}),L={fetchIdentity:({caipChainId:e,address:t})=>U.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:k.state.projectId}}),fetchTransactions({account:e,projectId:t,cursor:r}){const n=r?{cursor:r}:{};return U.get({path:`/v1/account/${e}/history?projectId=${t}`,params:n})}},B=(0,n.sj)({message:"",variant:"success",open:!1}),D={state:B,subscribeKey:(e,t)=>i(B,e,t),showSuccess(e){B.message=e,B.variant="success",B.open=!0},showError(e){const t=s.parseError(e);B.message=t,B.variant="error",B.open=!0},hide(){B.open=!1}},z=(0,n.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),F={state:z,subscribe:e=>(0,n.Ld)(z,(()=>e(z))),async fetchTransactions(e){const{projectId:t}=k.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");z.loading=!0;try{const r=await L.fetchTransactions({account:e,projectId:t,cursor:z.next}),n=this.filterSpamTransactions(r.data),i=[...z.transactions,...n];z.loading=!1,z.transactions=i,z.transactionsByYear=this.groupTransactionsByYear(z.transactionsByYear,n),z.empty=0===i.length,z.next=r.next?r.next:void 0}catch(r){O.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:z.next}}),D.showError("Failed to fetch transactions"),z.loading=!1,z.empty=!0}},groupTransactionsByYear(e={},t=[]){const r=e;return t.forEach((e=>{const t=new Date(e.metadata.minedAt).getFullYear();r[t]||(r[t]=[]),r[t]?.push(e)})),r},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>!0===e.nft_info?.flags.is_spam)))),resetTransactions(){z.transactions=[],z.transactionsByYear={},z.loading=!1,z.empty=!1,z.next=void 0}},W=(0,n.sj)({wcError:!1,buffering:!1}),H={state:W,subscribeKey:(e,t)=>i(W,e,t),_getClient(){if(!W._client)throw new Error("ConnectionController client not set");return W._client},setClient(e){W._client=(0,n.iH)(e)},connectWalletConnect(){W.wcPromise=this._getClient().connectWalletConnect((e=>{W.wcUri=e,W.wcPairingExpiry=s.getPairingExpiry()}))},async connectExternal(e){await(this._getClient().connectExternal?.(e)),g.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){W.wcUri=void 0,W.wcPairingExpiry=void 0,W.wcPromise=void 0,W.wcLinking=void 0,W.recentWallet=void 0,F.resetTransactions(),g.deleteWalletConnectDeepLink()},setWcLinking(e){W.wcLinking=e},setWcError(e){W.wcError=e,W.buffering=!1},setRecentWallet(e){W.recentWallet=e},setBuffering(e){W.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},G=(0,n.sj)({status:"uninitialized",isSiweEnabled:!1}),Z={state:G,subscribeKey:(e,t)=>i(G,e,t),subscribe:e=>(0,n.Ld)(G,(()=>e(G))),_getClient(){if(!G._client)throw new Error("SIWEController client not set");return G._client},async getNonce(){const e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},setSIWEClient(e){G._client=(0,n.iH)(e),G.status="ready",G.isSiweEnabled=e.options.enabled},setNonce(e){G.nonce=e},setStatus(e){G.status=e},setMessage(e){G.message=e},setSession(e){G.session=e}},V=(0,n.sj)({themeMode:"dark",themeVariables:{}}),q={state:V,subscribe:e=>(0,n.Ld)(V,(()=>e(V))),setThemeMode(e){V.themeMode=e},setThemeVariables(e){V.themeVariables={...V.themeVariables,...e}},getSnapshot:()=>(0,n.CO)(V)},K={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?w.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?w.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?w.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){R.state.history.length>1?R.goBack():j.close()},navigateAfterNetworkSwitch(){const{history:e}=R.state,t=e.findIndex((e=>"Networks"===e));t>=1?R.goBackToIndex(t-1):j.close()}}},6541:(e,t,r)=>{"use strict";r.r(t),r.d(t,{W3mModal:()=>u});var n=r(5909),i=r(1123),o=r(4666),a=r(2927);const s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var c=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const l="scroll-lock";let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.AccountController.state.address,this.isSiweEnabled=n.yD.state.isSiweEnabled,this.initializeTheming(),n.ApiController.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),n.yD.subscribeKey("isSiweEnabled",(e=>{this.isSiweEnabled=e})),n.AccountController.subscribe((e=>this.onNewAccountState(e)))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==n.yD.state.status&&await n.ConnectionController.disconnect(),n.IN.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=n.ThemeController.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await n.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const e=await n.yD.getSession();e&&!t?await n.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?n.RouterController.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};u.styles=s,c([(0,a.SB)()],u.prototype,"open",void 0),c([(0,a.SB)()],u.prototype,"caipAddress",void 0),c([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=c([(0,i.customElement)("w3m-modal")],u)},8247:(e,t,r)=>{"use strict";r.d(t,{fl:()=>k,iv:()=>c,Ts:()=>C,Qu:()=>E});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new s(r,e,o)},l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,w=globalThis,b=w.trustedTypes,y=b?b.emptyScript:"",v=w.reactiveElementPolyfillSupport,x=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!d(e,t),_={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&h(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...f(e),...g(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??E)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach((e=>this._$EO(e,this[e]))),this._$Ej()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[x("elementProperties")]=new Map,k[x("finalized")]=new Map,v?.({ReactiveElement:k}),(w.reactiveElementVersions??=[]).push("2.0.3")},8382:(e,t,r)=>{"use strict";r.d(t,{Jb:()=>k,Ld:()=>S,_$LH:()=>D,dy:()=>_,sY:()=>F});const n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,l=`<${c}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,b=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),_=E(1),k=(E(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),A=new WeakMap,I=u.createTreeWalker(u,129);function $(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const P=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",c=m;for(let t=0;t<r;t++){const r=e[t];let u,d,h=-1,p=0;for(;p<r.length&&(c.lastIndex=p,d=c.exec(r),null!==d);)p=c.lastIndex,c===m?"!--"===d[1]?c=w:void 0!==d[1]?c=b:void 0!==d[2]?(C.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=y):void 0!==d[3]&&(c=y):c===y?">"===d[0]?(c=i??m,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,u=d[1],c=void 0===d[3]?y:'"'===d[3]?x:v):c===x||c===v?c=y:c===w||c===b?c=m:(c=y,i=void 0);const f=c===y&&e[t+1].startsWith("/>")?" ":"";o+=c===m?r+l:h>=0?(n.push(u),r.slice(0,h)+a+r.slice(h)+s+f):r+s+(-2===h?t:f)}return[$(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class T{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,l=0;const u=e.length-1,h=this.parts,[p,f]=P(e,t);if(this.el=T.createElement(p,r),I.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=I.nextNode())&&h.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(a)){const t=f[l++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?j:"?"===i[1]?U:"@"===i[1]?L:M}),n.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),n.removeAttribute(e));if(C.test(n.tagName)){const e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],d()),I.nextNode(),h.push({type:2,index:++o});n.append(e[t],d())}}}else if(8===n.nodeType)if(n.data===c)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}o++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function O(e,t,r=e,n){if(t===k)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=O(e,i._$AS(e,t.values),i,n)),t}class N{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);I.currentNode=n;let i=I.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new R(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new B(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=I.nextNode(),o++)}return I.currentNode=u,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),h(e)?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):f(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement($(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new N(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new T(e)),t}T(e){p(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new R(this.k(d()),this.k(d()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=O(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=O(this,n[r+a],t,a),s===k&&(s=this._$AH[a]),o||=!h(s)||s!==this._$AH[a],s===S?e=S:e!==S&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!n&&this.O(e)}O(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends M{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===S?void 0:e}}class U extends M{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class L extends M{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??S)===k)return;const r=this._$AH,n=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const D={j:a,P:s,A:c,C:1,M:P,L:N,R:f,V:O,D:R,I:M,H:U,N:L,U:j,B},z=n.litHtmlPolyfillSupport;z?.(T,R),(n.litHtmlVersions??=[]).push("3.1.1");const F=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new R(t.insertBefore(d(),e),e,void 0,r??{})}return i._$AI(e),i}},2927:(e,t,r)=>{"use strict";r.d(t,{Cb:()=>a,SB:()=>s});var n=r(8247);const i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=(e=i,t,r)=>{const{kind:n,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function s(e){return a({...e,state:!0,attribute:!1})}},4666:(e,t,r)=>{"use strict";r.d(t,{oi:()=>o,iv:()=>n.iv,dy:()=>i.dy});var n=r(8247),i=r(8382);class o extends n.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,i.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});const a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.3")},1123:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TransactionUtil:()=>Qi,UiHelperUtil:()=>wr,WuiAccountButton:()=>$r,WuiAllWalletsImage:()=>Mr,WuiAvatar:()=>Er,WuiButton:()=>Lr,WuiCard:()=>Ae,WuiCardSelect:()=>Kr,WuiCardSelectLoader:()=>Fr,WuiChip:()=>Jr,WuiConnectButton:()=>tn,WuiCtaButton:()=>on,WuiEmailInput:()=>En,WuiFlex:()=>vr,WuiGrid:()=>Zi,WuiIcon:()=>Ot,WuiIconBox:()=>Sr,WuiIconLink:()=>Sn,WuiImage:()=>Mt,WuiInputElement:()=>$n,WuiInputNumeric:()=>On,WuiInputText:()=>vn,WuiLink:()=>Mn,WuiListAccordion:()=>Ui,WuiListContent:()=>Di,WuiListItem:()=>Ln,WuiListWallet:()=>Qn,WuiListWalletTransaction:()=>Wi,WuiLoadingHexagon:()=>Ut,WuiLoadingSpinner:()=>Dt,WuiLoadingThumbnail:()=>Wt,WuiLogo:()=>ri,WuiLogoSelect:()=>oi,WuiNetworkButton:()=>ci,WuiNetworkImage:()=>Zr,WuiNoticeCard:()=>Ri,WuiOtp:()=>di,WuiQrCode:()=>wi,WuiSearchBar:()=>yi,WuiSeparator:()=>Ki,WuiShimmer:()=>Zt,WuiSnackbar:()=>Ci,WuiTabs:()=>ki,WuiTag:()=>Yn,WuiText:()=>Jt,WuiTooltip:()=>Ii,WuiTransactionListItem:()=>Gn,WuiTransactionListItemLoader:()=>Vn,WuiTransactionVisual:()=>Fn,WuiVisual:()=>gr,WuiVisualThumbnail:()=>Ti,WuiWalletImage:()=>Or,customElement:()=>ke,initializeTheming:()=>be,setColorTheme:()=>ye,setThemeVariables:()=>ve});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new s("string"==typeof e?e:e+"",void 0,o),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new s(r,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:w}=Object,b=globalThis,y=b.trustedTypes,v=y?y.emptyScript:"",x=b.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!h(e,t),k={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&p(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??_)(this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach((e=>this._$EO(e,this[e]))),this._$Ej()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,x?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.0.3");const A=globalThis,I=A.trustedTypes,$=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,O="?"+T,N=`<${O}>`,R=document,M=()=>R.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,L=e=>U(e)||"function"==typeof e?.[Symbol.iterator],B="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,G=/"/g,Z=/^(?:script|style|textarea|title)$/i,V=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),q=V(1),K=V(2),Y=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),J=new WeakMap,Q=R.createTreeWalker(R,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}const te=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",a=D;for(let t=0;t<r;t++){const r=e[t];let s,c,l=-1,u=0;for(;u<r.length&&(a.lastIndex=u,c=a.exec(r),null!==c);)u=a.lastIndex,a===D?"!--"===c[1]?a=z:void 0!==c[1]?a=F:void 0!==c[2]?(Z.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=W):void 0!==c[3]&&(a=W):a===W?">"===c[0]?(a=i??D,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?W:'"'===c[3]?G:H):a===G||a===H?a=W:a===z||a===F?a=D:(a=W,i=void 0);const d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===D?r+N:l>=0?(n.push(s),r.slice(0,l)+P+r.slice(l)+T+d):r+T+(-2===l?t:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class re{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0;const a=e.length-1,s=this.parts,[c,l]=te(e,t);if(this.el=re.createElement(c,r),Q.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Q.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(P)){const t=l[o++],r=n.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?se:"?"===a[1]?ce:"@"===a[1]?le:ae}),n.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(Z.test(n.tagName)){const e=n.textContent.split(T),t=e.length-1;if(t>0){n.textContent=I?I.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],M()),Q.nextNode(),s.push({type:2,index:++i});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===O)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(T,e+1));)s.push({type:7,index:i}),e+=T.length-1}i++}}static createElement(e,t){const r=R.createElement("template");return r.innerHTML=e,r}}function ne(e,t,r=e,n){if(t===Y)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=j(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=ne(e,i._$AS(e,t.values),i,n)),t}class ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??R).importNode(t,!0);Q.currentNode=n;let i=Q.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new oe(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new ue(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=Q.nextNode(),o++)}return Q.currentNode=R,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),j(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):L(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==X&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=re.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ie(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new re(e)),t}T(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new oe(this.k(M()),this.k(M()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=ne(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==Y,o&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=ne(this,n[r+a],t,a),s===Y&&(s=this._$AH[a]),o||=!j(s)||s!==this._$AH[a],s===X?e=X:e!==X&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!n&&this.O(e)}O(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ae{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===X?void 0:e}}class ce extends ae{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class le extends ae{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??X)===Y)return;const r=this._$AH,n=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==X&&(r===X||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const de={j:P,P:T,A:O,C:1,M:te,L:ie,R:L,V:ne,D:oe,I:ae,H:ce,N:le,U:se,B:ue},he=A.litHtmlPolyfillSupport;he?.(re,oe),(A.litHtmlVersions??=[]).push("3.1.1");class pe extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new oe(t.insertBefore(M(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}pe._$litElement$=!0,pe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pe});const fe=globalThis.litElementPolyfillSupport;let ge,me,we;function be(e,t){ge=document.createElement("style"),me=document.createElement("style"),we=document.createElement("style"),ge.textContent=xe(e).core.cssText,me.textContent=xe(e).dark.cssText,we.textContent=xe(e).light.cssText,document.head.appendChild(ge),document.head.appendChild(me),document.head.appendChild(we),ye(t)}function ye(e){me&&we&&("light"===e?(me.removeAttribute("media"),we.media="enabled"):(we.removeAttribute("media"),me.media="enabled"))}function ve(e){ge&&me&&we&&(ge.textContent=xe(e).core.cssText,me.textContent=xe(e).dark.cssText,we.textContent=xe(e).light.cssText)}function xe(e){return{core:l`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${c(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${c(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${c(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${c(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${c(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}fe?.({LitElement:pe}),(globalThis.litElementVersions??=[]).push("4.0.3");const Ce=l`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Ee=l`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,_e=l`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function ke(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const Se=l`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let Ae=class extends pe{render(){return q`<slot></slot>`}};Ae.styles=[Ce,Se],Ae=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ke("wui-card")],Ae);const Ie={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:_},$e=(e=Ie,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function Pe(e){return(t,r)=>"object"==typeof r?$e(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function Te(e){return Pe({...e,state:!0,attribute:!1})}const Oe=l`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Ne=K`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Re=K`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Me=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,je=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ue=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Le=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Be=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,De=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ze=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Fe=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,We=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,He=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ge=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ze=K`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ve=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,qe=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Ke=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Ye=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Xe=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Je=K` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Qe=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,et=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tt=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,rt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,nt=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,it=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ot=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,at=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,st=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ct=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,lt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ut=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,dt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ht=K`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,pt=K`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ft=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,gt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,mt=K` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,wt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,bt=K`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,yt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,vt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xt=K`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Ct=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Et=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,_t=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,kt=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,St=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,At=K`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,It=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,$t=K`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var Pt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Tt={allWallets:Ne,appStore:Re,chromeStore:Ze,apple:Me,arrowBottom:je,arrowLeft:Ue,arrowRight:Le,arrowTop:Be,browser:De,checkmark:ze,chevronBottom:Fe,chevronLeft:We,chevronRight:He,chevronTop:Ge,clock:Ve,close:qe,compass:Ye,coinPlaceholder:Ke,copy:Xe,cursor:Je,desktop:Qe,disconnect:et,discord:tt,etherscan:rt,extension:nt,externalLink:it,facebook:ot,filters:at,github:st,google:ct,helpCircle:lt,infoCircle:ut,mail:dt,mobile:ht,networkPlaceholder:pt,nftPlaceholder:ft,off:gt,playStore:mt,qrCode:wt,refresh:bt,search:yt,swapHorizontal:vt,swapHorizontalBold:xt,swapVertical:Ct,telegram:Et,twitch:_t,twitter:kt,twitterIcon:St,verify:At,verifyFilled:It,wallet:K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:K`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:$t,warningCircle:K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`};let Ot=class extends pe{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,q`${Tt[this.name]}`}};Ot.styles=[Ce,_e,Oe],Pt([Pe()],Ot.prototype,"size",void 0),Pt([Pe()],Ot.prototype,"name",void 0),Pt([Pe()],Ot.prototype,"color",void 0),Ot=Pt([ke("wui-icon")],Ot);const Nt=l`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Rt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Mt=class extends pe{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return q`<img src=${this.src} alt=${this.alt} />`}};Mt.styles=[Ce,_e,Nt],Rt([Pe()],Mt.prototype,"src",void 0),Rt([Pe()],Mt.prototype,"alt",void 0),Mt=Rt([ke("wui-image")],Mt);const jt=l`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Ut=class extends pe{render(){return q`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ut.styles=[Ce,jt],Ut=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ke("wui-loading-hexagon")],Ut);const Lt=l`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Bt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Dt=class extends pe{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,q`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Dt.styles=[Ce,Lt],Bt([Pe()],Dt.prototype,"color",void 0),Bt([Pe()],Dt.prototype,"size",void 0),Dt=Bt([ke("wui-loading-spinner")],Dt);const zt=l`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ft=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Wt=class extends pe{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return q`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};Wt.styles=[Ce,zt],Ft([Pe({type:Number})],Wt.prototype,"radius",void 0),Wt=Ft([ke("wui-loading-thumbnail")],Wt);const Ht=l`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Gt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zt=class extends pe{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,q`<slot></slot>`}};Zt.styles=[Ht],Gt([Pe()],Zt.prototype,"width",void 0),Gt([Pe()],Zt.prototype,"height",void 0),Gt([Pe()],Zt.prototype,"borderRadius",void 0),Zt=Gt([ke("wui-shimmer")],Zt);const Vt=e=>(...t)=>({_$litDirective$:e,values:t});class qt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Kt=Vt(class extends qt{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.it)e in t||(r.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return Y}}),Yt=l`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Xt=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Jt=class extends pe{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,q`<slot class=${Kt(e)}></slot>`}};Jt.styles=[Ce,Yt],Xt([Pe()],Jt.prototype,"variant",void 0),Xt([Pe()],Jt.prototype,"color",void 0),Xt([Pe()],Jt.prototype,"align",void 0),Jt=Xt([ke("wui-text")],Jt);const Qt=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,er=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,rr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,nr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ir=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,or=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ar=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,sr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,cr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,lr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ur=K`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,dr=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,hr=l`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var pr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const fr={browser:Qt,dao:er,defi:tr,defiAlt:rr,eth:nr,layers:ir,lock:or,login:ar,network:sr,nft:cr,noun:lr,profile:ur,system:dr};let gr=class extends pe{constructor(){super(...arguments),this.name="browser"}render(){return q`${fr[this.name]}`}};gr.styles=[Ce,hr],pr([Pe()],gr.prototype,"name",void 0),gr=pr([ke("wui-visual")],gr);const mr=e=>e??X,wr={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},br=l`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var yr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let vr=class extends pe{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&wr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&wr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&wr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&wr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&wr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&wr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&wr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&wr.getSpacingStyles(this.margin,3)};\n    `,q`<slot></slot>`}};vr.styles=[Ce,br],yr([Pe()],vr.prototype,"flexDirection",void 0),yr([Pe()],vr.prototype,"flexWrap",void 0),yr([Pe()],vr.prototype,"flexBasis",void 0),yr([Pe()],vr.prototype,"flexGrow",void 0),yr([Pe()],vr.prototype,"flexShrink",void 0),yr([Pe()],vr.prototype,"alignItems",void 0),yr([Pe()],vr.prototype,"justifyContent",void 0),yr([Pe()],vr.prototype,"columnGap",void 0),yr([Pe()],vr.prototype,"rowGap",void 0),yr([Pe()],vr.prototype,"gap",void 0),yr([Pe()],vr.prototype,"padding",void 0),yr([Pe()],vr.prototype,"margin",void 0),vr=yr([ke("wui-flex")],vr);const xr=l`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Cr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Er=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return q`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",q`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=wr.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Er.styles=[Ce,xr],Cr([Pe()],Er.prototype,"imageSrc",void 0),Cr([Pe()],Er.prototype,"alt",void 0),Cr([Pe()],Er.prototype,"address",void 0),Er=Cr([ke("wui-avatar")],Er);const _r=l`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var kr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Sr=class extends pe{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,n=t?"12%":"16%",i=t?"xxs":r?"s":"3xl",o="gray"===this.background,a="opaque"===this.background,s="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let c=`var(--wui-color-${this.backgroundColor})`;return s?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${s||o?"100%":n};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,q` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Sr.styles=[Ce,Ee,_r],kr([Pe()],Sr.prototype,"size",void 0),kr([Pe()],Sr.prototype,"backgroundColor",void 0),kr([Pe()],Sr.prototype,"iconColor",void 0),kr([Pe()],Sr.prototype,"iconSize",void 0),kr([Pe()],Sr.prototype,"background",void 0),kr([Pe({type:Boolean})],Sr.prototype,"border",void 0),kr([Pe()],Sr.prototype,"borderColor",void 0),kr([Pe()],Sr.prototype,"icon",void 0),Sr=kr([ke("wui-icon-box")],Sr);const Ar=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Ir=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let $r=class extends pe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return q`
      <button
        ?disabled=${this.disabled}
        class=${mr(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${wr.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?q`<wui-image src=${this.networkSrc}></wui-image>`:q`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return q`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};$r.styles=[Ce,Ee,Ar],Ir([Pe()],$r.prototype,"networkSrc",void 0),Ir([Pe()],$r.prototype,"avatarSrc",void 0),Ir([Pe()],$r.prototype,"balance",void 0),Ir([Pe({type:Boolean})],$r.prototype,"disabled",void 0),Ir([Pe({type:Boolean})],$r.prototype,"isProfileName",void 0),Ir([Pe()],$r.prototype,"address",void 0),Ir([Pe()],$r.prototype,"charsStart",void 0),Ir([Pe()],$r.prototype,"charsEnd",void 0),$r=Ir([ke("wui-account-button")],$r);const Pr=l`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Tr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Or=class extends pe{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),q`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?q`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:q`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Or.styles=[Ce,Pr],Tr([Pe()],Or.prototype,"size",void 0),Tr([Pe()],Or.prototype,"name",void 0),Tr([Pe()],Or.prototype,"imageSrc",void 0),Tr([Pe()],Or.prototype,"walletIcon",void 0),Tr([Pe({type:Boolean})],Or.prototype,"installed",void 0),Tr([Pe()],Or.prototype,"badgeSize",void 0),Or=Tr([ke("wui-wallet-image")],Or);const Nr=l`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Rr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Mr=class extends pe{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return q`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>q`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${mr(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>q` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Mr.styles=[Ce,Nr],Rr([Pe({type:Array})],Mr.prototype,"walletImages",void 0),Mr=Rr([ke("wui-all-wallets-image")],Mr);const jr=l`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Ur=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Lr=class extends pe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return q`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:q``}};Lr.styles=[Ce,Ee,jr],Ur([Pe()],Lr.prototype,"size",void 0),Ur([Pe({type:Boolean})],Lr.prototype,"disabled",void 0),Ur([Pe({type:Boolean})],Lr.prototype,"fullWidth",void 0),Ur([Pe({type:Boolean})],Lr.prototype,"loading",void 0),Ur([Pe()],Lr.prototype,"variant",void 0),Ur([Pe({type:Boolean})],Lr.prototype,"hasIconLeft",void 0),Ur([Pe({type:Boolean})],Lr.prototype,"hasIconRight",void 0),Lr=Ur([ke("wui-button")],Lr);const Br=K`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Dr=l`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var zr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fr=class extends pe{constructor(){super(...arguments),this.type="wallet"}render(){return q`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?q` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Br}`:q`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Fr.styles=[Ce,Ee,Dr],zr([Pe()],Fr.prototype,"type",void 0),Fr=zr([ke("wui-card-select-loader")],Fr);const Wr=K`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Hr=l`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Gr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zr=class extends pe{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,q`${this.templateVisual()} ${e?Wr:Br}`}templateVisual(){return this.imageSrc?q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Zr.styles=[Ce,Hr],Gr([Pe()],Zr.prototype,"size",void 0),Gr([Pe()],Zr.prototype,"name",void 0),Gr([Pe()],Zr.prototype,"imageSrc",void 0),Gr([Pe({type:Boolean})],Zr.prototype,"selected",void 0),Zr=Gr([ke("wui-network-image")],Zr);const Vr=l`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var qr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Kr=class extends pe{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return q`
      <button data-selected=${mr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?q`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${mr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:q`
      <wui-wallet-image
        size="md"
        imageSrc=${mr(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Kr.styles=[Ce,Ee,Vr],qr([Pe()],Kr.prototype,"name",void 0),qr([Pe()],Kr.prototype,"type",void 0),qr([Pe()],Kr.prototype,"imageSrc",void 0),qr([Pe({type:Boolean})],Kr.prototype,"disabled",void 0),qr([Pe({type:Boolean})],Kr.prototype,"selected",void 0),qr([Pe({type:Boolean})],Kr.prototype,"installed",void 0),Kr=qr([ke("wui-card-select")],Kr);const Yr=l`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var Xr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Jr=class extends pe{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return q`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:wr.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?q`<wui-image src=${this.imageSrc}></wui-image>`:null}};Jr.styles=[Ce,Ee,Yr],Xr([Pe()],Jr.prototype,"variant",void 0),Xr([Pe()],Jr.prototype,"imageSrc",void 0),Xr([Pe({type:Boolean})],Jr.prototype,"disabled",void 0),Xr([Pe()],Jr.prototype,"icon",void 0),Xr([Pe()],Jr.prototype,"href",void 0),Xr([Pe()],Jr.prototype,"text",void 0),Jr=Xr([ke("wui-chip")],Jr);const Qr=l`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var en=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tn=class extends pe{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return q`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?q`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tn.styles=[Ce,Ee,Qr],en([Pe()],tn.prototype,"size",void 0),en([Pe({type:Boolean})],tn.prototype,"loading",void 0),tn=en([ke("wui-connect-button")],tn);const rn=l`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var nn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let on=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return q`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};on.styles=[Ce,Ee,rn],nn([Pe({type:Boolean})],on.prototype,"disabled",void 0),nn([Pe()],on.prototype,"label",void 0),nn([Pe()],on.prototype,"buttonLabel",void 0),on=nn([ke("wui-cta-button")],on);const{D:an}=de,sn=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),sn(e,t);return!0},cn=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},ln=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),hn(t)}};function un(e){void 0!==this._$AN?(cn(this),this._$AM=e,ln(this)):this._$AM=e}function dn(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)sn(n[e],!1),cn(n[e]);else null!=n&&(sn(n,!1),cn(n));else sn(this,e)}const hn=e=>{2==e.type&&(e._$AP??=dn,e._$AQ??=un)};class pn extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ln(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sn(this,e),cn(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const fn=()=>new gn;class gn{}const mn=new WeakMap,wn=Vt(class extends pn{render(e){return X}update(e,[t]){const r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),X}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let r=mn.get(t);void 0===r&&(r=new WeakMap,mn.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?mn.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),bn=l`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 10.5px var(--wui-spacing-l) 10.5px 44px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var yn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let vn=class extends pe{constructor(){super(...arguments),this.inputElementRef=fn(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return q` ${this.templateIcon()}
      <input
        ${wn(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${mr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${mr(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?q`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};vn.styles=[Ce,Ee,bn],yn([Pe()],vn.prototype,"size",void 0),yn([Pe()],vn.prototype,"icon",void 0),yn([Pe({type:Boolean})],vn.prototype,"disabled",void 0),yn([Pe()],vn.prototype,"placeholder",void 0),yn([Pe()],vn.prototype,"type",void 0),yn([Pe()],vn.prototype,"keyHint",void 0),yn([Pe()],vn.prototype,"value",void 0),vn=yn([ke("wui-input-text")],vn);const xn=l`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Cn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let En=class extends pe{constructor(){super(...arguments),this.disabled=!1}render(){return q`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?q`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};En.styles=[Ce,xn],Cn([Pe()],En.prototype,"errorMessage",void 0),Cn([Pe({type:Boolean})],En.prototype,"disabled",void 0),Cn([Pe()],En.prototype,"value",void 0),En=Cn([ke("wui-email-input")],En);const _n=l`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var kn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Sn=class extends pe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Sn.styles=[Ce,Ee,_e,_n],kn([Pe()],Sn.prototype,"size",void 0),kn([Pe({type:Boolean})],Sn.prototype,"disabled",void 0),kn([Pe()],Sn.prototype,"icon",void 0),kn([Pe()],Sn.prototype,"iconColor",void 0),Sn=kn([ke("wui-icon-link")],Sn);const An=l`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var In=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let $n=class extends pe{constructor(){super(...arguments),this.icon="copy"}render(){return q`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};$n.styles=[Ce,Ee,An],In([Pe()],$n.prototype,"icon",void 0),$n=In([ke("wui-input-element")],$n);const Pn=l`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }
  }
`;var Tn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let On=class extends pe{constructor(){super(...arguments),this.disabled=!1}render(){return q`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};On.styles=[Ce,Ee,Pn],Tn([Pe({type:Boolean})],On.prototype,"disabled",void 0),On=Tn([ke("wui-input-numeric")],On);const Nn=l`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Rn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Mn=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return q`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Mn.styles=[Ce,Ee,Nn],Rn([Pe({type:Boolean})],Mn.prototype,"disabled",void 0),Rn([Pe()],Mn.prototype,"color",void 0),Mn=Rn([ke("wui-link")],Mn);const jn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Un=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ln=class extends pe{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return q`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${mr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return q`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return q`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return q`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:q``}chevronTemplate(){return this.chevron?q`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var Bn;Ln.styles=[Ce,Ee,jn],Un([Pe()],Ln.prototype,"icon",void 0),Un([Pe()],Ln.prototype,"iconSize",void 0),Un([Pe()],Ln.prototype,"variant",void 0),Un([Pe()],Ln.prototype,"iconVariant",void 0),Un([Pe({type:Boolean})],Ln.prototype,"disabled",void 0),Un([Pe()],Ln.prototype,"imageSrc",void 0),Un([Pe()],Ln.prototype,"alt",void 0),Un([Pe({type:Boolean})],Ln.prototype,"chevron",void 0),Un([Pe({type:Boolean})],Ln.prototype,"loading",void 0),Ln=Un([ke("wui-list-item")],Ln),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(Bn||(Bn={}));const Dn=l`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var zn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fn=class extends pe{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",i=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${n};\n    --local-right-border-radius: ${i};\n    `,q`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?q`<div class="swap-images-container">
        ${e?.url?q`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?q`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?q`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?q`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:q`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?q`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Fn.styles=[Dn],zn([Pe()],Fn.prototype,"type",void 0),zn([Pe()],Fn.prototype,"status",void 0),zn([Pe()],Fn.prototype,"direction",void 0),zn([Pe({type:Boolean})],Fn.prototype,"onlyDirectionIcon",void 0),zn([Pe({type:Array})],Fn.prototype,"images",void 0),zn([Pe({type:Object})],Fn.prototype,"secondImage",void 0),Fn=zn([ke("wui-transaction-visual")],Fn);const Wn=l`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Hn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Gn=class extends pe{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return q`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${mr(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${mr(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Bn[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?q`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?q`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Gn.styles=[Ce,Wn],Hn([Pe()],Gn.prototype,"type",void 0),Hn([Pe({type:Array})],Gn.prototype,"descriptions",void 0),Hn([Pe()],Gn.prototype,"date",void 0),Hn([Pe({type:Boolean})],Gn.prototype,"onlyDirectionIcon",void 0),Hn([Pe()],Gn.prototype,"status",void 0),Hn([Pe()],Gn.prototype,"direction",void 0),Hn([Pe({type:Array})],Gn.prototype,"images",void 0),Gn=Hn([ke("wui-transaction-list-item")],Gn);const Zn=l`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let Vn=class extends pe{render(){return q`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Vn.styles=[Ce,Zn],Vn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ke("wui-transaction-list-item-loader")],Vn);const qn=l`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Kn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Yn=class extends pe{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,q`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Yn.styles=[Ce,qn],Kn([Pe()],Yn.prototype,"variant",void 0),Yn=Kn([ke("wui-tag")],Yn);const Xn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Jn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Qn=class extends pe{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return q`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?q` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?q` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?q`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:q`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?q`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?q`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Qn.styles=[Ce,Ee,Xn],Jn([Pe({type:Array})],Qn.prototype,"walletImages",void 0),Jn([Pe()],Qn.prototype,"imageSrc",void 0),Jn([Pe()],Qn.prototype,"name",void 0),Jn([Pe()],Qn.prototype,"tagLabel",void 0),Jn([Pe()],Qn.prototype,"tagVariant",void 0),Jn([Pe()],Qn.prototype,"icon",void 0),Jn([Pe()],Qn.prototype,"walletIcon",void 0),Jn([Pe({type:Boolean})],Qn.prototype,"installed",void 0),Jn([Pe({type:Boolean})],Qn.prototype,"disabled",void 0),Jn([Pe({type:Boolean})],Qn.prototype,"showAllWallets",void 0),Qn=Jn([ke("wui-list-wallet")],Qn);const ei=l`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var ti=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends pe{constructor(){super(...arguments),this.logo="google"}render(){return q`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ri.styles=[Ce,ei],ti([Pe()],ri.prototype,"logo",void 0),ri=ti([ke("wui-logo")],ri);const ni=l`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ii=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oi=class extends pe{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};oi.styles=[Ce,Ee,ni],ii([Pe()],oi.prototype,"logo",void 0),ii([Pe({type:Boolean})],oi.prototype,"disabled",void 0),oi=ii([ke("wui-logo-select")],oi);const ai=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var si=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ci=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return q`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?q`<wui-image src=${this.imageSrc}></wui-image>`:q`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ci.styles=[Ce,Ee,ai],si([Pe()],ci.prototype,"imageSrc",void 0),si([Pe({type:Boolean})],ci.prototype,"disabled",void 0),ci=si([ke("wui-network-button")],ci);const li=l`
  :host {
    position: relative;
    display: block;
  }
`;var ui=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let di=class extends pe{constructor(){super(...arguments),this.length=6,this.valueArr=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.valueArr.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return q`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>q`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,r){const n=this.numerics[t],i=e||(n?this.getInputElement(n):void 0);i&&(i.value=r,this.valueArr=this.valueArr.map(((e,n)=>n===t?r:e)))}handleInput(e,t){const r=e.target,n=this.getInputElement(r);if(n){const r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):wr.isNumber(r)&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const n=t[0];if(n&&wr.isNumber(n)){this.updateInput(e,r,n);const i=t.substring(1);if(r+1<this.length&&i.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};di.styles=[Ce,li],ui([Pe({type:Number})],di.prototype,"length",void 0),ui([Te()],di.prototype,"valueArr",void 0),di=ui([ke("wui-otp")],di);var hi=r(2592);function pi(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}const fi={generate(e,t,r){const n="#141414",i=[],o=function(e,t){const r=Array.prototype.slice.call(hi.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach((({x:e,y:t})=>{const r=(o.length-7)*a*e,c=(o.length-7)*a*t,l=.45;for(let e=0;e<s.length;e+=1){const t=a*(7-2*e);i.push(K`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*l:t*l}
              ry= ${0===e?(t-5)*l:t*l}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}}));const c=Math.floor((r+25)/a),l=o.length/2-c/2,u=o.length/2+c/2-1,d=[];o.forEach(((e,t)=>{e.forEach(((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>l&&t<u&&r>l&&r<u)){const e=t*a+a/2,n=r*a+a/2;d.push([e,n])}}))}));const h={};return d.forEach((([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]})),Object.entries(h).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!pi(e,t,a)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{i.push(K`<circle cx=${e} cy=${t} fill=${n} r=${a/2.5} />`)}))})),Object.entries(h).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>pi(e,t,a)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>pi(e,t,a)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{i.push(K`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),i}},gi=l`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var mi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let wi=class extends pe{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,q`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return K`
      <svg height=${e} width=${e}>
        ${fi.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?q`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:q`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};wi.styles=[Ce,gi],mi([Pe()],wi.prototype,"uri",void 0),mi([Pe({type:Number})],wi.prototype,"size",void 0),mi([Pe()],wi.prototype,"theme",void 0),mi([Pe()],wi.prototype,"imageSrc",void 0),mi([Pe()],wi.prototype,"alt",void 0),wi=mi([ke("wui-qr-code")],wi);const bi=l`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let yi=class extends pe{constructor(){super(...arguments),this.inputComponentRef=fn()}render(){return q`
      <wui-input-text
        ${wn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};yi.styles=[Ce,bi],yi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ke("wui-search-bar")],yi);const vi=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var xi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ci=class extends pe{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return q`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Ci.styles=[Ce,vi],xi([Pe()],Ci.prototype,"backgroundColor",void 0),xi([Pe()],Ci.prototype,"iconColor",void 0),xi([Pe()],Ci.prototype,"icon",void 0),xi([Pe()],Ci.prototype,"message",void 0),Ci=xi([ke("wui-snackbar")],Ci);const Ei=l`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var _i=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ki=class extends pe{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return q`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),a=n?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,n.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};ki.styles=[Ce,Ee,Ei],_i([Pe({type:Array})],ki.prototype,"tabs",void 0),_i([Pe()],ki.prototype,"onTabChange",void 0),_i([Pe({type:Array})],ki.prototype,"buttons",void 0),_i([Pe({type:Boolean})],ki.prototype,"disabled",void 0),_i([Te()],ki.prototype,"activeTab",void 0),_i([Te()],ki.prototype,"localTabWidth",void 0),_i([Te()],ki.prototype,"isDense",void 0),ki=_i([ke("wui-tabs")],ki);const Si=l`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ai=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ii=class extends pe{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return q`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ii.styles=[Ce,Ee,Si],Ai([Pe()],Ii.prototype,"placement",void 0),Ai([Pe()],Ii.prototype,"message",void 0),Ii=Ai([ke("wui-tooltip")],Ii);const $i=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Pi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ti=class extends pe{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,q`${this.templateVisual()}`}templateVisual(){return this.imageSrc?q`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:q`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ti.styles=[Ce,$i],Pi([Pe()],Ti.prototype,"imageSrc",void 0),Pi([Pe()],Ti.prototype,"alt",void 0),Pi([Pe({type:Boolean})],Ti.prototype,"borderRadiusFull",void 0),Ti=Pi([ke("wui-visual-thumbnail")],Ti);const Oi=l`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Ni=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ri=class extends pe{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return q`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ri.styles=[Ce,Ee,Oi],Ni([Pe()],Ri.prototype,"label",void 0),Ni([Pe()],Ri.prototype,"description",void 0),Ni([Pe()],Ri.prototype,"icon",void 0),Ri=Ni([ke("wui-notice-card")],Ri);const Mi=l`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var ji=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ui=class extends pe{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout((()=>{const e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;const t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}}),0)}render(){return q`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?q` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Ui.styles=[Ce,Ee,Mi],ji([Pe()],Ui.prototype,"textTitle",void 0),ji([Pe()],Ui.prototype,"overflowedContent",void 0),Ui=ji([ke("wui-list-accordion")],Ui);const Li=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Bi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Di=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return q`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?q`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?q` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Di.styles=[Ce,Ee,Li],Bi([Pe()],Di.prototype,"imageSrc",void 0),Bi([Pe()],Di.prototype,"textTitle",void 0),Bi([Pe()],Di.prototype,"textValue",void 0),Di=Bi([ke("wui-list-content")],Di);const zi=l`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Fi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Wi=class extends pe{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return q`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?q`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Wi.styles=[Ce,Ee,zi],Fi([Pe()],Wi.prototype,"amount",void 0),Fi([Pe()],Wi.prototype,"networkCurreny",void 0),Fi([Pe()],Wi.prototype,"networkImageUrl",void 0),Fi([Pe()],Wi.prototype,"receiverAddress",void 0),Wi=Fi([ke("wui-list-wallet-transaction")],Wi);const Hi=l`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Gi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zi=class extends pe{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&wr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&wr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&wr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&wr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&wr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&wr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&wr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&wr.getSpacingStyles(this.margin,3)};\n    `,q`<slot></slot>`}};Zi.styles=[Ce,Hi],Gi([Pe()],Zi.prototype,"gridTemplateRows",void 0),Gi([Pe()],Zi.prototype,"gridTemplateColumns",void 0),Gi([Pe()],Zi.prototype,"justifyItems",void 0),Gi([Pe()],Zi.prototype,"alignItems",void 0),Gi([Pe()],Zi.prototype,"justifyContent",void 0),Gi([Pe()],Zi.prototype,"alignContent",void 0),Gi([Pe()],Zi.prototype,"columnGap",void 0),Gi([Pe()],Zi.prototype,"rowGap",void 0),Gi([Pe()],Zi.prototype,"gap",void 0),Gi([Pe()],Zi.prototype,"padding",void 0),Gi([Pe()],Zi.prototype,"margin",void 0),Zi=Gi([ke("wui-grid")],Zi);const Vi=l`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var qi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ki=class extends pe{constructor(){super(...arguments),this.text=""}render(){return q`${this.template()}`}template(){return this.text?q`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ki.styles=[Ce,Vi],qi([Pe()],Ki.prototype,"text",void 0),Ki=qi([ke("wui-separator")],Ki);var Yi=r(248);const Xi=["receive","deposit","borrow","claim"],Ji=["withdraw","repay","burn"],Qi={getTransactionGroupTitle:e=>e===Yi.E.getYear()?"This Year":e,getTransactionImages(e){const[t,r]=e,n=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),i=e?.length>1;return 2!==e?.length||n?i?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:Qi.getTransactionTransferTokenType(e),url:Qi.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null;const r=Boolean(e?.nft_info),n=Boolean(e?.fungible_info);return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){const t=e.metadata?.operationType,r=e.transfers,n=e.transfers?.length>0,i=e.transfers?.length>1,o=n&&r?.every((e=>Boolean(e.fungible_info))),[a,s]=r;let c=this.getTransferDescription(a),l=this.getTransferDescription(s);if(!n)return"send"!==t&&"receive"!==t||!o?[e.metadata.status]:(c=wr.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=wr.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]);if(i)return r.map((e=>this.getTransferDescription(e)));let u="";return Xi.includes(t)?u="+":Ji.includes(t)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},3160:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var n=r(6867);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},605:(e,t,r)=>{"use strict";r.d(t,{z:()=>o});var n=r(3160),i=r(6867);function o(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const r=(0,n.E)(t);let o=0;for(const t of e)r.set(t,o),o+=t.length;return(0,i.P)(r)}},2217:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var n=r(5114),i=r(6867);function o(e,t="utf8"){const r=n.Z[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):(0,i.P)(globalThis.Buffer.from(e,"utf-8"))}},7466:(e,t,r)=>{"use strict";r.d(t,{BB:()=>o.B,mL:()=>i.m,zo:()=>n.z});var n=r(605),i=r(2217),o=r(2263)},2263:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var n=r(5114);function i(e,t="utf8"){const r=n.Z[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}},6867:(e,t,r)=>{"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:()=>n})},5114:(e,t,r)=>{"use strict";r.d(t,{Z:()=>De});var n={};r.r(n),r.d(n,{identity:()=>A});var i={};r.r(i),r.d(i,{base2:()=>I});var o={};r.r(o),r.d(o,{base8:()=>$});var a={};r.r(a),r.d(a,{base10:()=>P});var s={};r.r(s),r.d(s,{base16:()=>T,base16upper:()=>O});var c={};r.r(c),r.d(c,{base32:()=>N,base32hex:()=>U,base32hexpad:()=>B,base32hexpadupper:()=>D,base32hexupper:()=>L,base32pad:()=>M,base32padupper:()=>j,base32upper:()=>R,base32z:()=>z});var l={};r.r(l),r.d(l,{base36:()=>F,base36upper:()=>W});var u={};r.r(u),r.d(u,{base58btc:()=>H,base58flickr:()=>G});var d={};r.r(d),r.d(d,{base64:()=>Z,base64pad:()=>V,base64url:()=>q,base64urlpad:()=>K});var h={};r.r(h),r.d(h,{base256emoji:()=>Q});var p={};r.r(p),r.d(p,{sha256:()=>xe,sha512:()=>Ce});var f={};r.r(f),r.d(f,{identity:()=>_e});var g={};r.r(g),r.d(g,{code:()=>Se,decode:()=>Ie,encode:()=>Ae,name:()=>ke});var m={};r.r(m),r.d(m,{code:()=>Oe,decode:()=>Re,encode:()=>Ne,name:()=>Te});const w=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),a=o.charCodeAt(0);if(255!==r[a])throw new TypeError(o+" is ambiguous");r[a]=i}var s=e.length,c=e.charAt(0),l=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var o=(e.length-t)*l+1>>>0,a=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=s*a[h]>>>0,a[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var p=o-i;p!==o&&0===a[p];)p++;for(var f=new Uint8Array(n+(o-p)),g=n;p!==o;)f[g++]=a[p++];return f}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var a=(o-i)*u+1>>>0,l=new Uint8Array(a);i!==o;){for(var d=t[i],h=0,p=a-1;(0!==d||h<n)&&-1!==p;p--,h++)d+=256*l[p]>>>0,l[p]=d%s>>>0,d=d/s>>>0;if(0!==d)throw new Error("Non-zero carry");n=h,i++}for(var f=a-n;f!==a&&0===l[f];)f++;for(var g=c.repeat(r);f<a;++f)g+=e.charAt(l[f]);return g},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw new Error(`Non-${t} character`)}}},b=(new Uint8Array(0),e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")});class y{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class v{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return C(this,e)}}class x{constructor(e){this.decoders=e}or(e){return C(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const C=(e,t)=>new x({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class E{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new y(e,t,r),this.decoder=new v(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const _=({name:e,prefix:t,encode:r,decode:n})=>new E(e,t,r,n),k=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=w(r,t);return _({prefix:e,name:t,encode:n,decode:e=>b(i(e))})},S=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>_({prefix:t,name:e,encode:e=>((e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let o="",a=0,s=0;for(let n=0;n<e.length;++n)for(s=s<<8|e[n],a+=8;a>r;)a-=r,o+=t[i&s>>a];if(a&&(o+=t[i&s<<r-a]),n)for(;o.length*r&7;)o+="=";return o})(e,n,r),decode:t=>((e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const a=new Uint8Array(o*r/8|0);let s=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${n} character`);c=c<<r|o,s+=r,s>=8&&(s-=8,a[l++]=255&c>>s)}if(s>=r||255&c<<8-s)throw new SyntaxError("Unexpected end of data");return a})(t,n,r,e)}),A=_({prefix:"\0",name:"identity",encode:e=>{return t=e,(new TextDecoder).decode(t);var t},decode:e=>(e=>(new TextEncoder).encode(e))(e)}),I=S({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),$=S({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),P=k({prefix:"9",name:"base10",alphabet:"0123456789"}),T=S({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),O=S({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),N=S({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),R=S({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),M=S({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),j=S({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),U=S({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),L=S({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),B=S({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),D=S({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),z=S({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),F=k({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),W=k({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),H=k({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),G=k({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Z=S({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),V=S({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),q=S({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),K=S({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Y=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),X=Y.reduce(((e,t,r)=>(e[r]=t,e)),[]),J=Y.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]),Q=_({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+X[t]),"")},decode:function(e){const t=[];for(const r of e){const e=J[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ee=128,te=-128,re=Math.pow(2,31),ne=Math.pow(2,7),ie=Math.pow(2,14),oe=Math.pow(2,21),ae=Math.pow(2,28),se=Math.pow(2,35),ce=Math.pow(2,42),le=Math.pow(2,49),ue=Math.pow(2,56),de=Math.pow(2,63);const he=function e(t,r,n){r=r||[];for(var i=n=n||0;t>=re;)r[n++]=255&t|ee,t/=128;for(;t&te;)r[n++]=255&t|ee,t>>>=7;return r[n]=0|t,e.bytes=n-i+1,r},pe=function(e){return e<ne?1:e<ie?2:e<oe?3:e<ae?4:e<se?5:e<ce?6:e<le?7:e<ue?8:e<de?9:10},fe=(e,t,r=0)=>(he(e,t,r),t),ge=e=>pe(e),me=(e,t)=>{const r=t.byteLength,n=ge(e),i=n+ge(r),o=new Uint8Array(i+r);return fe(e,o,0),fe(r,o,n),o.set(t,i),new we(e,r,t,o)};class we{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}const be=({name:e,code:t,encode:r})=>new ye(e,t,r);class ye{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?me(this.code,t):t.then((e=>me(this.code,e)))}throw Error("Unknown type, must be binary type")}}const ve=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),xe=be({name:"sha2-256",code:18,encode:ve("SHA-256")}),Ce=be({name:"sha2-512",code:19,encode:ve("SHA-512")}),Ee=b,_e={code:0,name:"identity",encode:Ee,digest:e=>me(0,Ee(e))},ke="raw",Se=85,Ae=e=>b(e),Ie=e=>b(e),$e=new TextEncoder,Pe=new TextDecoder,Te="json",Oe=512,Ne=e=>$e.encode(JSON.stringify(e)),Re=e=>JSON.parse(Pe.decode(e));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const Me={...n,...i,...o,...a,...s,...c,...l,...u,...d,...h};var je=r(3160);function Ue(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const Le=Ue("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),Be=Ue("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{e=e.substring(1);const t=(0,je.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})),De={utf8:Le,"utf-8":Le,hex:Me.base16,latin1:Be,ascii:Be,binary:Be,...Me}},6828:(e,t,r)=>{"use strict";r.d(t,{sj:()=>d,iH:()=>f,CO:()=>p,Ld:()=>h}),Symbol();const n=Symbol(),i=Object.getPrototypeOf,o=new WeakMap,a=(e,t=!0)=>{o.set(e,t)},s=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,[u]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),r=(e=>s(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),u=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),d=new WeakMap,h=((e,t,r=u)=>{const n=d.get(e);if((null==n?void 0:n[0])===t)return n[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return a(i,!0),d.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const n=Reflect.get(e,t),o={value:n,enumerable:!0,configurable:!0};if(l.has(n))a(n,!1);else if(n instanceof Promise)delete o.value,o.get=()=>r(n);else if(c.has(n)){const[e,t]=c.get(n);o.value=h(e,t(),r)}Object.defineProperty(i,t,o)})),Object.preventExtensions(i)}),p=new WeakMap,f=[1,1],g=(a=>{if(!s(a))throw new Error("object required");const u=p.get(a);if(u)return u;let d=f[0];const m=new Set,w=(e,t=++f[0])=>{d!==t&&(d=t,m.forEach((r=>r(e,t))))};let b=f[1];const y=e=>(t,r)=>{const n=[...t];n[1]=[e,...n[1]],w(n,r)},v=new Map,x=e=>{var t;const r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},C=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),E=t(C,{deleteProperty(e,t){const r=Reflect.get(e,t);x(t);const n=Reflect.deleteProperty(e,t);return n&&w(["delete",[t],r]),n},set(t,a,u,d){const h=Reflect.has(t,a),f=Reflect.get(t,a,d);if(h&&(e(f,u)||p.has(u)&&e(f,p.get(u))))return!0;var b;x(a),s(u)&&(u=(e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype))(b=u)&&b[n]||null||u);let C=u;if(u instanceof Promise)u.then((e=>{u.status="fulfilled",u.value=e,w(["resolve",[a],e])})).catch((e=>{u.status="rejected",u.reason=e,w(["reject",[a],e])}));else{!c.has(u)&&r(u)&&(C=g(u));const e=!l.has(C)&&c.get(C);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const r=t[3](y(e));v.set(e,[t,r])}else v.set(e,[t])})(a,e)}return Reflect.set(t,a,C,d),w(["set",[a],u,f]),!0}});p.set(a,E);const _=[C,(e=++f[1])=>(b===e||m.size||(b=e,v.forEach((([t])=>{const r=t[1](e);r>d&&(d=r)}))),d),h,e=>(m.add(e),1===m.size&&v.forEach((([e,t],r)=>{if(t)throw new Error("remove already exists");const n=e[3](y(r));v.set(r,[e,n])})),()=>{m.delete(e),0===m.size&&v.forEach((([e,t],r)=>{t&&(t(),v.set(r,[e]))}))})];return c.set(E,_),Reflect.ownKeys(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(E[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),E}))=>[g,c,l,e,t,r,u,d,h,p,f])();function d(e={}){return u(e)}function h(e,t,r){const n=c.get(e);let i;n||console.warn("Please use proxy object");const o=[],a=n[3];let s=!1;const l=a((e=>{o.push(e),r?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,s&&t(o.splice(0))})))}));return s=!0,()=>{s=!1,l()}}function p(e,t){const r=c.get(e);r||console.warn("Please use proxy object");const[n,i,o]=r;return o(n,i(),t)}function f(e){return l.add(e),e}},4503:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:()=>n})},84:(e,t,r)=>{"use strict";r.d(t,{R:()=>y});var n=r(4503),i=r(6693);const o="0x82ad56cb";var a=r(2027),s=r(377),c=r(5980),l=r(7210),u=r(7799),d=r(7864),h=r(2106),p=r(6445),f=r(7469),g=r(1163),m=r(4688),w=r(2357),b=r(7531);async function y(e,t){const{account:y=e.account,batch:v=Boolean(e.batch?.multicall),blockNumber:x,blockTag:C="latest",accessList:E,data:_,gas:k,gasPrice:S,maxFeePerGas:A,maxPriorityFeePerGas:I,nonce:$,to:P,value:T,...O}=t,N=y?(0,n.T)(y):void 0;try{(0,b.F)(t);const r=(x?(0,h.eC)(x):void 0)||C,n=e.chain?.formatters?.transactionRequest?.format,a=(n||m.tG)({...(0,g.K)(O,{format:n}),from:N?.address,accessList:E,data:_,gas:k,gasPrice:S,maxFeePerGas:A,maxPriorityFeePerGas:I,nonce:$,to:P,value:T});if(v&&function({request:e}){const{data:t,to:r,...n}=e;return!(!t||t.startsWith(o)||!r||Object.values(n).filter((e=>void 0!==e)).length>0)}({request:a}))try{return await async function(e,t){const{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:p,multicallAddress:f,to:g}=t;let m=f;if(!m){if(!e.chain)throw new s.pZ;m=(0,d.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}const b=(o?(0,h.eC)(o):void 0)||a,{schedule:y}=(0,w.S)({id:`${e.uid}.${b}`,wait:n,shouldSplitBatch(e){const t=e.reduce(((e,{data:t})=>e+(t.length-2)),0);return t>2*r},fn:async t=>{const r=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),n=(0,u.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:n,to:m},b]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:x}]=await y({data:p,to:g});if(!x)throw new c.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}(e,{...a,blockNumber:x,blockTag:C})}catch(e){if(!(e instanceof s.pZ||e instanceof s.mm))throw e}const p=await e.request({method:"eth_call",params:r?[a,r]:[a]});return"0x"===p?{data:void 0}:{data:p}}catch(n){const i=function(e){if(!(e instanceof a.G))return;const t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(n),{offchainLookup:o,offchainLookupSignature:s}=await r.e(770).then(r.bind(r,9770));if(i?.slice(0,10)===s&&P)return{data:await o(e,{data:i,to:P})};throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,f.k)(e,r);return t instanceof p.cj?e:t})();return new c.cg(n,{docsPath:t,...r})}(n,{...t,account:N,chain:e.chain})}}},6693:(e,t,r)=>{"use strict";r.d(t,{$o:()=>l,F8:()=>n,X$:()=>c,du:()=>a,k3:()=>o,nZ:()=>s});const n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],l=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},1746:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,Up:()=>i,hZ:()=>o});const n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},4192:(e,t,r)=>{"use strict";r.d(t,{Bd:()=>o,Zn:()=>i,ez:()=>n});const n={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},7412:(e,t,r)=>{"use strict";r.d(t,{CI:()=>_,FM:()=>f,Gy:()=>C,KY:()=>v,M4:()=>d,MX:()=>b,S4:()=>y,SM:()=>x,cO:()=>s,dh:()=>E,fM:()=>a,fs:()=>h,gr:()=>u,hn:()=>k,lC:()=>g,mv:()=>m,wM:()=>S,wb:()=>l,xB:()=>c,xL:()=>w,yP:()=>p});var n=r(522),i=r(9135),o=r(2027);class a extends o.G{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class c extends o.G{constructor({data:e,params:t,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class l extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends o.G{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class f extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,n.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,n.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class v extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class x extends o.G{constructor({abiItem:e,data:t,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join("\n"),{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=i}}class C extends o.G{constructor({abiItem:e,param:t}){super([`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class E extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class _ extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class k extends o.G{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends o.G{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},6087:(e,t,r)=>{"use strict";r.d(t,{b:()=>i});var n=r(2027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},2027:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var n=r(8673);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});const r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}},377:(e,t,r)=>{"use strict";r.d(t,{Bk:()=>a,Yl:()=>o,mm:()=>i,pZ:()=>s});var n=r(2027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends n.G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},5980:(e,t,r)=>{"use strict";r.d(t,{cg:()=>m,uq:()=>w,Lu:()=>b,Dk:()=>y,VQ:()=>v});var n=r(4503),i=r(1746),o=r(6899),a=r(522),s=r(6070);function c({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map(((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`)).join(", ")})`}var l=r(840),u=r(9625),d=r(7795),h=r(7412),p=r(2027),f=r(3639),g=r(8673);class m extends p.G{constructor(e,{account:t,docsPath:r,chain:i,data:o,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:p,value:g}){const m=t?(0,n.T)(t):void 0,w=(0,f.xr)({from:m?.address,to:p,value:void 0!==g&&`${(0,u.d)(g)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class w extends p.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s}){const u=(0,l.mE)({abi:t,args:r,name:o}),d=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,a.t)(u,{includeName:!0}):void 0,p=(0,f.xr)({address:n&&(0,g.CR)(n),function:h,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map((()=>" ")).join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=o,this.sender=s}}class b extends p.G{constructor({abi:e,data:t,functionName:r,message:n}){let s,l,u,d,p;if(t&&"0x"!==t)try{l=(0,o.p)({abi:e,data:t});const{abiItem:r,errorName:n,args:s}=l;if("Error"===n)d=s[0];else if("Panic"===n){const[e]=s;d=i.$[e]}else{const e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?c({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;u=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(e){s=e}else n&&(d=n);s instanceof h.yP&&(p=s.signature,u=[`Unable to decode signature "${p}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]),super(d&&"execution reverted"!==d||p?[`The contract function "${r}" reverted with the following ${p?"signature":"reason"}:`,d||p].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:u}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=d,this.signature=p}}class y extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},9760:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,m:()=>i});var n=r(2027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},7788:(e,t,r)=>{"use strict";r.d(t,{Cd:()=>o,J5:()=>i,M6:()=>a});var n=r(2027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends n.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},6445:(e,t,r)=>{"use strict";r.d(t,{C_:()=>d,G$:()=>s,Hh:()=>a,M_:()=>o,WF:()=>h,ZI:()=>c,cj:()=>m,cs:()=>g,dR:()=>p,pZ:()=>f,se:()=>u,vU:()=>l});var n=r(7795),i=r(2027);class o extends i.G{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends i.G{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},8863:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>a,W5:()=>l,bs:()=>c,c9:()=>s});var n=r(6070),i=r(2027),o=r(8673);class a extends i.G{constructor({body:e,details:t,headers:r,status:i,url:a}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=a}}class s extends i.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class c extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},3639:(e,t,r)=>{"use strict";r.d(t,{Bh:()=>u,Yb:()=>d,j3:()=>c,mc:()=>h,mk:()=>l,xY:()=>s,xr:()=>a});var n=r(9625),i=r(7795),o=r(2027);function a(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),r=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`)).join("\n")}class s extends o.G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class c extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class l extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){const g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,n.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:c,gasPrice:void 0!==l&&`${(0,i.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,i.o)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let o="Transaction";r&&void 0!==i&&(o=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(o=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(o=`Transaction at block number "${t}" at index "${i}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},8673:(e,t,r)=>{"use strict";r.d(t,{CR:()=>n,Gr:()=>i,bo:()=>o});const n=e=>e,i=e=>e,o=()=>"viem@1.21.3"},4450:(e,t,r)=>{"use strict";r.d(t,{r:()=>u});var n=r(7412),i=r(5775),o=r(9135),a=r(3972),s=r(1836),c=r(5946),l=r(5444);function u(e,t){if("0x"===t&&e.length>0)throw new n.wb;if((0,o.d)(t)&&(0,o.d)(t)<32)throw new n.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){const r=[];let i=0;for(let a=0;a<t.length;a++){if(i>=(0,o.d)(e))throw new n.xB({data:e,params:t,size:(0,o.d)(e)});const s=t[a],{consumed:c,value:l}=d({data:e,param:s,position:i});r.push(l),i+=c}return r}({data:t,params:e})}function d({data:e,param:t,position:r}){const o=(0,l.S)(t.type);if(o){const[n,i]=o;return function(e,{param:t,length:r,position:n}){if(!r){const r=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0})),i=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0}));let o=0;const s=[];for(let n=0;n<i;++n){const n=d({data:(0,a.tP)(e,r+32),param:t,position:o});o+=n.consumed,s.push(n.value)}return{value:s,consumed:32}}if(h(t)){const i=(0,l.S)(t.type),o=!i?.[0];let s=0;const u=[];for(let i=0;i<r;++i){const r=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0})),l=d({data:(0,a.tP)(e,r),param:t,position:o?s:32*i});s+=l.consumed,u.push(l.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let a=0;a<r;++a){const r=d({data:e,param:t,position:n+i});i+=r.consumed,o.push(r.value)}return{value:o,consumed:i}}(e,{length:n,param:{...t,type:i},position:r})}if("tuple"===t.type)return function(e,{param:t,position:r}){const n=0===t.components.length||t.components.some((({name:e})=>!e)),i=n?[]:{};let o=0;if(h(t)){const s=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0}));for(let r=0;r<t.components.length;++r){const c=t.components[r],l=d({data:(0,a.tP)(e,s),param:c,position:o});o+=l.consumed,i[n?r:c?.name]=l.value}return{consumed:32,value:i}}for(let a=0;a<t.components.length;++a){const s=t.components[a],c=d({data:e,param:s,position:r+o});o+=c.consumed,i[n?a:s?.name]=c.value}return{consumed:o,value:i}}(e,{param:t,position:r});if("string"===t.type)return function(e,{position:t}){const r=(0,c.ly)((0,a.tP)(e,t,t+32,{strict:!0})),n=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0}));if(0===n)return{consumed:32,value:""};return{consumed:32,value:(0,c.rR)((0,s.f)((0,a.tP)(e,r+32,r+32+n,{strict:!0})))}}(e,{position:r});if(t.type.startsWith("bytes"))return function(e,{param:t,position:r}){const[n,i]=t.type.split("bytes");if(!i){const t=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0})),n=(0,c.ly)((0,a.tP)(e,t,t+32,{strict:!0}));return 0===n?{consumed:32,value:"0x"}:{consumed:32,value:(0,a.tP)(e,t+32,t+32+n,{strict:!0})}}return{consumed:32,value:(0,a.tP)(e,r,r+parseInt(i),{strict:!0})}}(e,{param:t,position:r});const u=(0,a.tP)(e,r,r+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{param:t}){const r=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,c.y_)(e,{signed:r}):(0,c.ly)(e,{signed:r})}}(u,{param:t});if("address"===t.type)return function(e){return{consumed:32,value:(0,i.x)((0,a.tP)(e,-20))}}(u);if("bool"===t.type)return function(e){return{consumed:32,value:(0,c.XA)(e)}}(u);throw new n.CI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function h(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);const r=(0,l.S)(e.type);return!(!r||!h({...e,type:r[1]}))}},6899:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var n=r(1746),i=r(7412),o=r(3972),a=r(552),s=r(4450),c=r(522);function l({abi:e,data:t}){const r=(0,o.tP)(t,0,4);if("0x"===r)throw new i.wb;const l=[...e||[],n.Up,n.hZ].find((e=>"error"===e.type&&r===(0,a.o)((0,c.t)(e))));if(!l)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:l,args:"inputs"in l&&l.inputs&&l.inputs.length>0?(0,s.r)(l.inputs,(0,o.tP)(t,4)):void 0,errorName:l.name}}},7210:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var n=r(7412),i=r(4450),o=r(840);const a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let c=e[0];if(r&&(c=(0,o.mE)({abi:e,args:t,name:r}),!c))throw new n.xL(r,{docsPath:a});if("function"!==c.type)throw new n.xL(void 0,{docsPath:a});if(!c.outputs)throw new n.MX(c.name,{docsPath:a});const l=(0,i.r)(c.outputs,s);return l&&l.length>1?l:l&&1===l.length?l[0]:void 0}},5444:(e,t,r)=>{"use strict";r.d(t,{E:()=>d,S:()=>f});var n=r(7412),i=r(6087),o=r(9321),a=r(7040),s=r(1769),c=r(9135),l=r(3972),u=r(2106);function d(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});const r=function({params:e,values:t}){const r=[];for(let n=0;n<e.length;n++)r.push(h({param:e[n],value:t[n]}));return r}({params:e,values:t}),i=p(r);return 0===i.length?"0x":i}function h({param:e,value:t}){const r=f(e.type);if(r){const[i,o]=r;return function(e,{length:t,param:r}){const i=null===t;if(!Array.isArray(e))throw new n.hn(e);if(!i&&e.length!==t)throw new n.gr({expectedLength:t,givenLength:e.length,type:`${r.type}[${t}]`});let o=!1;const s=[];for(let t=0;t<e.length;t++){const n=h({param:r,value:e[t]});n.dynamic&&(o=!0),s.push(n)}if(i||o){const e=p(s);if(i){const t=(0,u.eC)(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?(0,a.zo)([t,e]):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(s.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:o}})}if("tuple"===e.type)return function(e,{param:t}){let r=!1;const n=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],a=h({param:o,value:e[Array.isArray(e)?i:o.name]});n.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?p(n):(0,a.zo)(n.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,o.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")});if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,r]=t.type.split("bytes"),i=(0,c.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=(0,u.$G)(e),r=Math.ceil((0,c.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,s.gc)((0,l.tP)(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,c.d)(t),{size:32})),...n])}}(t);throw new n.dh(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function p(e){let t=0;for(let r=0;r<e.length;r++){const{dynamic:n,encoded:i}=e[r];t+=n?32:(0,c.d)(i)}const r=[],n=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+i,{size:32})),n.push(s),i+=(0,c.d)(s)):r.push(s)}return(0,a.zo)([...r,...n])}function f(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},7799:(e,t,r)=>{"use strict";r.d(t,{R:()=>l});var n=r(7412),i=r(7040),o=r(552),a=r(5444),s=r(522),c=r(840);function l({abi:e,args:t,functionName:r}){let l=e[0];if(r&&(l=(0,c.mE)({abi:e,args:t,name:r}),!l))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==l.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const u=(0,s.t)(l),d=(0,o.o)(u),h="inputs"in l&&l.inputs?(0,a.E)(l.inputs,t??[]):void 0;return(0,i.SM)([d,h??"0x"])}},522:(e,t,r)=>{"use strict";r.d(t,{h:()=>o,t:()=>i});var n=r(7412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},840:(e,t,r)=>{"use strict";r.d(t,{mE:()=>c});var n=r(7412),i=r(5102),o=r(4092),a=r(552),s=r(9321);function c({abi:e,args:t=[],name:r}){const s=(0,i.v)(r,{strict:!1}),c=e.filter((e=>s?"function"===e.type?(0,a.o)(e)===r:"event"===e.type&&(0,o.e)(e)===r:"name"in e&&e.name===r));if(0===c.length)return;if(1===c.length)return c[0];let d;for(const e of c)if("inputs"in e)if(t&&0!==t.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every(((t,r)=>{const n="inputs"in e&&e.inputs[r];return!!n&&l(t,n)}))){if(d&&"inputs"in d&&d.inputs){const r=u(e.inputs,d.inputs,t);if(r)throw new n.S4({abiItem:e,type:r[0]},{abiItem:d,type:r[1]})}d=e}}else if(!e.inputs||0===e.inputs.length)return e;return d||c[0]}function l(e,t){const r=typeof e,n=t.type;switch(n){case"address":return(0,s.U)(e);case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===n&&"components"in t?Object.values(t.components).every(((t,r)=>l(Object.values(e)[r],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?"string"===r||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)&&Array.isArray(e)&&e.every((e=>l(e,{...t,type:n.replace(/(\[[0-9]{0,}\])$/,"")})))}}function u(e,t,r){for(const n in e){const i=e[n],o=t[n];if("tuple"===i.type&&"tuple"===o.type&&"components"in i&&"components"in o)return u(i.components,o.components,r[n]);const a=[i.type,o.type];if(a.includes("address")&&a.includes("bytes20")||(a.includes("address")&&a.includes("string")||a.includes("address")&&a.includes("bytes"))&&(0,s.U)(r[n]))return a}}},5775:(e,t,r)=>{"use strict";r.d(t,{K:()=>c,x:()=>s});var n=r(6087),i=r(1187),o=r(3199),a=r(9321);function s(e,t){const r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,o.w)((0,i.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&n[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function c(e,t){if(!(0,a.U)(e))throw new n.b({address:e});return s(e,t)}},9321:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});const n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},7864:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var n=r(377);function i({blockNumber:e,chain:t,contract:r}){const i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},7040:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(const r of e)t+=r.length;const r=new Uint8Array(t);let n=0;for(const t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}r.d(t,{SM:()=>i,zo:()=>n})},5102:(e,t,r)=>{"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:()=>n})},1769:(e,t,r)=>{"use strict";r.d(t,{gc:()=>o,vk:()=>i});var n=r(9760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$({size:e.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let n=0;n<r;n++){const o="right"===t;i[o?n:r-n-1]=e[o?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;const i=e.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},9135:(e,t,r)=>{"use strict";r.d(t,{d:()=>i});var n=r(5102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:(e,t,r)=>{"use strict";r.d(t,{tP:()=>a});var n=r(9760),i=r(5102),o=r(9135);function a(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){s(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(r??e.length))}`;return n&&c(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){s(e,t);const i=e.slice(t,r);return n&&c(i,t,r),i}(e,t,r,{strict:n})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new n.m({offset:t,position:"start",size:(0,o.d)(e)})}function c(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new n.m({offset:r,position:"end",size:(0,o.d)(e)})}},1836:(e,t,r)=>{"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:()=>n})},5946:(e,t,r)=>{"use strict";r.d(t,{XA:()=>l,Yf:()=>s,ly:()=>u,rR:()=>d,y_:()=>c});var n=r(7788),i=r(9135),o=r(1836),a=r(1187);function s(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function c(e,t={}){const{signed:r}=t;t.size&&s(e,{size:t.size});const n=BigInt(e);if(!r)return n;const i=(e.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function l(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new n.Cd(r)}function u(e,t={}){return Number(c(e,t))}function d(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),(new TextDecoder).decode(r)}},1187:(e,t,r)=>{"use strict";r.d(t,{O0:()=>l,nr:()=>h,qX:()=>p});var n=r(2027),i=r(5102),o=r(1769),a=r(5946),s=r(2106);const c=new TextEncoder;function l(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){return h((0,s.eC)(e,t))}(e,t):"boolean"==typeof e?function(e,t={}){const r=new Uint8Array(1);return r[0]=Number(e),"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?h(e,t):p(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,c=new Uint8Array(s);for(let e=0,t=0;e<s;e++){const r=d(i.charCodeAt(t++)),o=d(i.charCodeAt(t++));if(void 0===r||void 0===o)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);c[e]=16*r+o}return c}function p(e,t={}){const r=c.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},2106:(e,t,r)=>{"use strict";r.d(t,{$G:()=>h,C4:()=>c,NC:()=>s,ci:()=>l,eC:()=>u});var n=r(7788),i=r(1769),o=r(5946);const a=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?c(e,t):l(e,t)}function c(e,t={}){const r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function l(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];const n=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){const{signed:r,size:o}=t,a=BigInt(e);let s;o?s=r?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(s=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof s&&r?-s-1n:0;if(s&&a>s||a<c){const t="bigint"==typeof e?"n":"";throw new n.J5({max:s?`${s}${t}`:void 0,min:`${c}${t}`,signed:r,size:o,value:`${e}${t}`})}const l=`0x${(r&&a<0?(1n<<BigInt(8*o))+BigInt(a):a).toString(16)}`;return o?(0,i.vk)(l,{size:o}):l}const d=new TextEncoder;function h(e,t={}){return l(d.encode(e),t)}},7469:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var n=r(2027),i=r(6445);function o(e,t){const r=(e.details||"").toLowerCase(),o=e.walk((e=>e.code===i.M_.code));return o instanceof n.G?new i.M_({cause:e,message:o.details}):i.M_.nodeMessage.test(r)?new i.M_({cause:e,message:e.details}):i.Hh.nodeMessage.test(r)?new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.G$.nodeMessage.test(r)?new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.ZI.nodeMessage.test(r)?new i.ZI({cause:e,nonce:t?.nonce}):i.vU.nodeMessage.test(r)?new i.vU({cause:e,nonce:t?.nonce}):i.se.nodeMessage.test(r)?new i.se({cause:e,nonce:t?.nonce}):i.C_.nodeMessage.test(r)?new i.C_({cause:e}):i.WF.nodeMessage.test(r)?new i.WF({cause:e,gas:t?.gas}):i.dR.nodeMessage.test(r)?new i.dR({cause:e,gas:t?.gas}):i.pZ.nodeMessage.test(r)?new i.pZ({cause:e}):i.cs.nodeMessage.test(r)?new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.cj({cause:e})}},1163:(e,t,r)=>{"use strict";function n(e,{format:t}){if(!t)return{};const r={};return function t(n){const i=Object.keys(n);for(const o of i)o in e&&(r[o]=e[o]),n[o]&&"object"==typeof n[o]&&!Array.isArray(n[o])&&t(n[o])}(t(e||{})),r}r.d(t,{K:()=>n})},4688:(e,t,r)=>{"use strict";r.d(t,{tG:()=>o});var n=r(2106);const i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?i[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}},4092:(e,t,r)=>{"use strict";r.d(t,{e:()=>a});var n=r(1187),i=r(9574),o=r(3199);const a=e=>{return t=(e=>(0,i.r)(e))(e),(0,o.w)((0,n.O0)(t));var t}},552:(e,t,r)=>{"use strict";r.d(t,{o:()=>s});var n=r(3972),i=r(1187),o=r(9574),a=r(3199);const s=e=>{return(0,n.tP)((t=(0,o.r)(e),(0,a.w)((0,i.O0)(t))),0,4);var t}},9574:(e,t,r)=>{"use strict";r.d(t,{r:()=>s});const n=/^tuple(?<array>(\[(\d*)\])*)$/;function i(e){let t=e.type;if(n.test(e.type)&&"components"in e){t="(";const r=e.components.length;for(let n=0;n<r;n++)t+=i(e.components[n]),n<r-1&&(t+=", ");const o=function(e,t){const r=e.exec(t);return r?.groups}(n,e.type);return t+=`)${o?.array??""}`,i({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function o(e){let t="";const r=e.length;for(let n=0;n<r;n++)t+=i(e[n]),n!==r-1&&(t+=", ");return t}var a=r(2027);const s=e=>{var t;return function(e){let t=!0,r="",n=0,i="",o=!1;for(let a=0;a<e.length;a++){const s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&n++,")"===s&&n--,t)if(0!==n)" "!==s?(i+=s,r+=s):","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);else if(" "===s&&["event","function",""].includes(i))i="";else if(i+=s,")"===s){o=!0;break}}if(!o)throw new a.G("Unable to normalize signature.");return i}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${o(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${o(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${o(t.inputs)})`:"error"===t.type?`error ${t.name}(${o(t.inputs)})`:"constructor"===t.type?`constructor(${o(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")}},3199:(e,t,r)=>{"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}r.d(t,{w:()=>P});const a=BigInt(2**32-1),s=BigInt(32);function c(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}function l(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:a}=c(e[i],t);[r[i],n[i]]=[o,a]}return[r,n]}if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw new Error("Non little-endian hardware is not supported");function u(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!(e instanceof Uint8Array))throw new Error("expected Uint8Array, got "+typeof e);return e}class d{clone(){return this._cloneInto()}}const[h,p,f]=[[],[],[]],g=BigInt(0),m=BigInt(1),w=BigInt(2),b=BigInt(7),y=BigInt(256),v=BigInt(113);for(let e=0,t=m,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],h.push(2*(5*n+r)),p.push((e+1)*(e+2)/2%64);let i=g;for(let e=0;e<7;e++)t=(t<<m^(t>>b)*v)%y,t&w&&(i^=m<<(m<<BigInt(e))-m);f.push(i)}const[x,C]=l(f,!0),E=(e,t,r)=>r>32?((e,t,r)=>t<<r-32|e>>>64-r)(e,t,r):((e,t,r)=>e<<r|t>>>32-r)(e,t,r),_=(e,t,r)=>r>32?((e,t,r)=>e<<r-32|t>>>64-r)(e,t,r):((e,t,r)=>t<<r|e>>>32-r)(e,t,r);class k extends d{constructor(e,t,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var a;this.state=new Uint8Array(200),this.state32=(a=this.state,new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)))}keccak(){!function(e,t=24){const r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){const n=(t+8)%10,i=(t+2)%10,o=r[i],a=r[i+1],s=E(o,a,1)^r[n],c=_(o,a,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=c}let t=e[2],i=e[3];for(let r=0;r<24;r++){const n=p[r],o=E(t,i,n),a=_(t,i,n),s=h[r];t=e[s],i=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=x[n],e[1]^=C[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);const{blockLen:t,state:r}=this,n=(e=u(e)).length;for(let i=0;i<n;){const o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,0!=(128&t)&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();const t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){i(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:o}=this;return e||(e=new k(t,r,n,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=o,e.destroyed=this.destroyed,e}}const S=((e,t,r)=>function(e){const t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}((()=>new k(t,e,r))))(1,136,32);var A=r(5102),I=r(1187),$=r(2106);function P(e,t){const r=t||"hex",n=S((0,A.v)(e,{strict:!1})?(0,I.O0)(e):e);return"bytes"===r?n:(0,$.NC)(n)}},2357:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});const n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0,sort:o}){const a=async()=>{const t=c();s();const r=t.map((({args:e})=>e));0!==r.length&&e(r).then((e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){const{pendingPromise:n}=t[r];n.resolve?.([e[r],e])}})).catch((e=>{for(let r=0;r<t.length;r++){const{pendingPromise:n}=t[r];n.reject?.(e)}}))},s=()=>n.delete(t),c=()=>n.get(t)||[],l=e=>n.set(t,[...c(),e]);return{flush:s,async schedule(e){const t={},n=new Promise(((e,r)=>{t.resolve=e,t.reject=r})),o=r?.([...c().map((({args:e})=>e)),e]);return o&&a(),c().length>0?(l({args:e,pendingPromise:t}),n):(l({args:e,pendingPromise:t}),setTimeout(a,i),n)}}}},6070:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});const n=(e,t,r)=>JSON.stringify(e,((e,r)=>{const n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n}),r)},7531:(e,t,r)=>{"use strict";r.d(t,{F:()=>c});var n=r(4503),i=r(6087),o=r(6445),a=r(3639),s=r(9321);function c(e){const{account:t,gasPrice:r,maxFeePerGas:c,maxPriorityFeePerGas:l,to:u}=e,d=t?(0,n.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new i.b({address:d.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==c||void 0!==l))throw new a.xY;if(c&&c>2n**256n-1n)throw new o.Hh({maxFeePerGas:c});if(l&&c&&l>c)throw new o.cs({maxFeePerGas:c,maxPriorityFeePerGas:l})}},9625:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(4192),i=r(5229);function o(e,t="wei"){return(0,i.b)(e,n.ez[t])}},7795:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var n=r(4192),i=r(5229);function o(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},5229:(e,t,r)=>{"use strict";function n(e,t){let r=e.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(t,"0");let[i,o]=[r.slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}r.d(t,{b:()=>n})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=i,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var i=Object.create(null);a.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,a.d(i,o),i},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".bundle-airdrop.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="spacecatch-staking:",a.l=(e,t,i,o)=>{if(r[e])r[e].push(t);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+i),s.src=e),r[e]=[t];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[o,s,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);c&&c(a)}for(t&&t(r);l<o.length;l++)i=o[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkspacecatch_staking=self.webpackChunkspacecatch_staking||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},t=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}var n=a(6729);function i(e,t={}){const{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}const o=i({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),s=i({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),u=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},d=(e,t,r,n)=>(c(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),h=(e,t,r)=>(c(e,t,"access private method"),r),p=class extends n{constructor({chains:e=[o,s],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map((e=>e.url))]}isChainUnsupported(e){return!this.chains.some((t=>t.id===e))}setStorage(e){this.storage=e}},f=a(5775),g=a(2027),m=a(8863);class w extends g.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof m.bs?e.code:t??-1}}class b extends w{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class y extends w{constructor(e){super(e,{code:y.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class v extends w{constructor(e){super(e,{code:v.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class x extends w{constructor(e){super(e,{code:x.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class C extends w{constructor(e){super(e,{code:C.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class E extends w{constructor(e){super(e,{code:E.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class _ extends w{constructor(e){super(e,{code:_.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class k extends w{constructor(e){super(e,{code:k.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class S extends w{constructor(e){super(e,{code:S.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class A extends w{constructor(e){super(e,{code:A.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class I extends w{constructor(e){super(e,{code:I.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class P extends w{constructor(e){super(e,{code:P.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class T extends w{constructor(e){super(e,{code:T.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class O extends b{constructor(e){super(e,{code:O.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class N extends b{constructor(e){super(e,{code:N.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class R extends b{constructor(e){super(e,{code:R.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class M extends b{constructor(e){super(e,{code:M.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class j extends b{constructor(e){super(e,{code:j.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class U extends b{constructor(e){super(e,{code:U.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class L extends w{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}var B=a(4503);const D=256;let z,F=D;function W(e=11){if(!z||F+e>2*D){z="",F=0;for(let e=0;e<D;e++)z+=(256+256*Math.random()|0).toString(16).substring(1)}return z.substring(F,F+++e)}function H(e){const{batch:t,cacheTime:r=e.pollingInterval??4e3,key:n="base",name:i="Base Client",pollingInterval:o=4e3,type:a="base"}=e,s=e.chain,c=e.account?(0,B.T)(e.account):void 0,{config:l,request:u,value:d}=e.transport({chain:s,pollingInterval:o}),h={account:c,batch:t,cacheTime:r,chain:s,key:n,name:i,pollingInterval:o,request:u,transport:{...l,...d},type:a,uid:W()};return Object.assign(h,{extend:function e(t){return r=>{const n=r(t);for(const e in h)delete n[e];const i={...t,...n};return Object.assign(i,{extend:e(i)})}}(h)})}var G=a(5946);async function Z(e){const t=await e.request({method:"eth_chainId"});return(0,G.ly)(t)}var V=a(2106),q=a(7412),K=a(7040),Y=a(5444);const X="/docs/contract/encodeDeployData";function J({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;const n=e.find((e=>"type"in e&&"constructor"===e.type));if(!n)throw new q.fM({docsPath:X});if(!("inputs"in n))throw new q.cO({docsPath:X});if(!n.inputs||0===n.inputs.length)throw new q.cO({docsPath:X});const i=(0,Y.E)(n.inputs,t);return(0,K.SM)([r,i])}class Q extends g.G{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}var ee=a(377);function te({chain:e,currentChainId:t}){if(!e)throw new ee.Bk;if(t!==e.id)throw new ee.Yl({chain:e,currentChainId:t})}var re=a(6445),ne=a(3639),ie=a(7469),oe=a(1163),ae=a(4688);function se(e,t,r){return n=>e[t.name||r]?.(n)??t(e,n)}var ce=a(7531),le=a(7795);class ue extends g.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class de extends g.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class he extends g.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,le.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class pe extends g.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const fe={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function ge(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,G.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,G.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?fe[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function me(e){const t=e.transactions?.map((e=>"string"==typeof e?e:ge(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function we(e,{blockHash:t,blockNumber:r,blockTag:n,includeTransactions:i}={}){const o=n??"latest",a=i??!1,s=void 0!==r?(0,V.eC)(r):void 0;let c=null;if(c=t?await e.request({method:"eth_getBlockByHash",params:[t,a]}):await e.request({method:"eth_getBlockByNumber",params:[s||o,a]}),!c)throw new pe({blockHash:t,blockNumber:r});return(e.chain?.formatters?.block?.format||me)(c)}async function be(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function ye(e,t){const{block:r,chain:n=e.chain,request:i}=t||{};if("function"==typeof n?.fees?.defaultPriorityFee){const t=r||await se(e,we,"getBlock")({});return n.fees.defaultPriorityFee({block:t,client:e,request:i})}if(void 0!==n?.fees?.defaultPriorityFee)return n?.fees?.defaultPriorityFee;try{const t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,G.y_)(t)}catch{const[t,n]=await Promise.all([r?Promise.resolve(r):se(e,we,"getBlock")({}),se(e,be,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new de;const i=n-t.baseFeePerGas;return i<0n?0n:i}}async function ve(e,t){const{block:r,chain:n=e.chain,request:i,type:o="eip1559"}=t||{},a=await(async()=>"function"==typeof n?.fees?.baseFeeMultiplier?n.fees.baseFeeMultiplier({block:r,client:e,request:i}):n?.fees?.baseFeeMultiplier??1.2)();if(a<1)throw new ue;const s=10**(a.toString().split(".")[1]?.length??0),c=e=>e*BigInt(Math.ceil(a*s))/BigInt(s),l=r||await se(e,we,"getBlock")({});if("function"==typeof n?.fees?.estimateFeesPerGas)return n.fees.estimateFeesPerGas({block:r,client:e,multiply:c,request:i,type:o});if("eip1559"===o){if("bigint"!=typeof l.baseFeePerGas)throw new de;const t=i?.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await ye(e,{block:l,chain:n,request:i}),r=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??r+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await se(e,be,"getGasPrice")({}))}}var xe=a(9625);class Ce extends g.G{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:o,gasPrice:a,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){const h=(0,ne.xr)({from:t?.address,to:u,value:void 0!==d&&`${(0,xe.d)(d)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:void 0!==a&&`${(0,le.o)(a)} gwei`,maxFeePerGas:void 0!==s&&`${(0,le.o)(s)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,le.o)(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}async function Ee(e,t){const r=t.account??e.account;if(!r)throw new Q({docsPath:"/docs/actions/public/estimateGas"});const n=(0,B.T)(r);try{const{accessList:r,blockNumber:i,blockTag:o,data:a,gas:s,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:p,...f}="local"===n.type?await ke(e,t):t,g=(i?(0,V.eC)(i):void 0)||o;(0,ce.F)(t);const m=e.chain?.formatters?.transactionRequest?.format,w=(m||ae.tG)({...(0,oe.K)(f,{format:m}),from:n.address,accessList:r,data:a,gas:s,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:p}),b=await e.request({method:"eth_estimateGas",params:g?[w,g]:[w]});return BigInt(b)}catch(r){throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,ie.k)(e,r);return t instanceof re.cj?e:t})();return new Ce(n,{docsPath:t,...r})}(r,{...t,account:n,chain:e.chain})}}async function _e(e,{address:t,blockTag:r="latest",blockNumber:n}){const i=await e.request({method:"eth_getTransactionCount",params:[t,n?(0,V.eC)(n):r]});return(0,G.ly)(i)}async function ke(e,t){const{account:r=e.account,chain:n,gas:i,nonce:o,type:a}=t;if(!r)throw new Q;const s=(0,B.T)(r),c=await se(e,we,"getBlock")({blockTag:"latest"}),l={...t,from:s.address};if(void 0===o&&(l.nonce=await se(e,_e,"getTransactionCount")({address:s.address,blockTag:"pending"})),void 0===a)try{l.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new ne.j3({transaction:e})}(l)}catch{l.type="bigint"==typeof c.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===l.type){const{maxFeePerGas:r,maxPriorityFeePerGas:i}=await ve(e,{block:c,chain:n,request:l});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new he({maxPriorityFeePerGas:i});l.maxPriorityFeePerGas=i,l.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new de;const{gasPrice:r}=await ve(e,{block:c,chain:n,request:l,type:"legacy"});l.gasPrice=r}return void 0===i&&(l.gas=await se(e,Ee,"estimateGas")({...l,account:{address:s.address,type:"json-rpc"}})),(0,ce.F)(l),l}async function Se(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function Ae(e,t){const{account:r=e.account,chain:n=e.chain,accessList:i,data:o,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:d,value:h,...p}=t;if(!r)throw new Q({docsPath:"/docs/actions/wallet/sendTransaction"});const f=(0,B.T)(r);try{let r;if((0,ce.F)(t),null!==n&&(r=await se(e,Z,"getChainId")({}),te({currentChainId:r,chain:n})),"local"===f.type){const t=await se(e,ke,"prepareTransactionRequest")({account:f,accessList:i,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:d,value:h,...p});r||(r=await se(e,Z,"getChainId")({}));const g=n?.serializers?.transaction,m=await f.signTransaction({...t,chainId:r},{serializer:g});return await se(e,Se,"sendRawTransaction")({serializedTransaction:m})}const g=e.chain?.formatters?.transactionRequest?.format,m=(g||ae.tG)({...(0,oe.K)(p,{format:g}),accessList:i,data:o,from:f.address,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:d,value:h});return await e.request({method:"eth_sendTransaction",params:[m]})}catch(e){throw function(e,{docsPath:t,...r}){const n=(()=>{const t=(0,ie.k)(e,r);return t instanceof re.cj?e:t})();return new ne.mk(n,{docsPath:t,...r})}(e,{...t,account:f,chain:t.chain||void 0})}}var Ie=a(5102),$e=a(6070),Pe=a(6087),Te=a(9321),Oe=a(9135);const Ne=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Re=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Me({domain:e,message:t,primaryType:r,types:n}){const i=n,o=(e,t)=>{for(const r of e){const{name:e,type:n}=r,a=n,s=t[e],c=a.match(Re);if(c&&("number"==typeof s||"bigint"==typeof s)){const[e,t,r]=c;(0,V.eC)(s,{signed:"int"===t,size:parseInt(r)/8})}if("address"===a&&"string"==typeof s&&!(0,Te.U)(s))throw new Pe.b({address:s});const l=a.match(Ne);if(l){const[e,t]=l;if(t&&(0,Oe.d)(s)!==parseInt(t))throw new q.KY({expectedSize:parseInt(t),givenSize:(0,Oe.d)(s)})}const u=i[a];u&&o(u,s)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),"EIP712Domain"!==r){const e=i[r];o(e,t)}}function je({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}var Ue=a(7799);function Le(e){return{addChain:t=>async function(e,{chain:t}){const{id:r,name:n,nativeCurrency:i,rpcUrls:o,blockExplorers:a}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,V.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:a?Object.values(a).map((({url:e})=>e)):void 0}]})}(e,t),deployContract:t=>function(e,{abi:t,args:r,bytecode:n,...i}){return Ae(e,{...i,data:J({abi:t,args:r,bytecode:n})})}(e,t),getAddresses:()=>async function(e){return"local"===e.account?.type?[e.account.address]:(await e.request({method:"eth_accounts"})).map((e=>(0,f.x)(e)))}(e),getChainId:()=>Z(e),getPermissions:()=>async function(e){return await e.request({method:"wallet_getPermissions"})}(e),prepareTransactionRequest:t=>ke(e,t),requestAddresses:()=>async function(e){return(await e.request({method:"eth_requestAccounts"})).map((e=>(0,f.K)(e)))}(e),requestPermissions:t=>async function(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}(e,t),sendRawTransaction:t=>Se(e,t),sendTransaction:t=>Ae(e,t),signMessage:t=>async function(e,{account:t=e.account,message:r}){if(!t)throw new Q({docsPath:"/docs/actions/wallet/signMessage"});const n=(0,B.T)(t);if("local"===n.type)return n.signMessage({message:r});const i="string"==typeof r?(0,V.$G)(r):r.raw instanceof Uint8Array?(0,V.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[i,n.address]})}(e,t),signTransaction:t=>async function(e,t){const{account:r=e.account,chain:n=e.chain,...i}=t;if(!r)throw new Q({docsPath:"/docs/actions/wallet/signTransaction"});const o=(0,B.T)(r);(0,ce.F)({account:o,...t});const a=await se(e,Z,"getChainId")({});null!==n&&te({currentChainId:a,chain:n});const s=n?.formatters||e.chain?.formatters,c=s?.transactionRequest?.format||ae.tG;return"local"===o.type?o.signTransaction({...i,chainId:a},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...c(i),chainId:(0,V.eC)(a),from:o.address}]})}(e,t),signTypedData:t=>async function(e,{account:t=e.account,domain:r,message:n,primaryType:i,types:o}){if(!t)throw new Q({docsPath:"/docs/actions/wallet/signTypedData"});const a=(0,B.T)(t),s={EIP712Domain:je({domain:r}),...o};if(Me({domain:r,message:n,primaryType:i,types:s}),"local"===a.type)return a.signTypedData({domain:r,primaryType:i,types:s,message:n});const c=(0,$e.P)({domain:r??{},primaryType:i,types:s,message:n},((e,t)=>(0,Ie.v)(t)?t.toLowerCase():t));return e.request({method:"eth_signTypedData_v4",params:[a.address,c]})}(e,t),switchChain:t=>async function(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,V.eC)(t)}]})}(e,t),watchAsset:t=>async function(e,t){return await e.request({method:"wallet_watchAsset",params:t})}(e,t),writeContract:t=>async function(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}){const s=(0,Ue.R)({abi:t,args:n,functionName:o});return await se(e,Ae,"sendTransaction")({data:`${s}${i?i.replace("0x",""):""}`,to:r,...a})}(e,t)}}function Be(e){const{key:t="wallet",name:r="Wallet Client",transport:n}=e;return H({...e,key:t,name:r,transport:e=>n({...e,retryCount:0}),type:"walletClient"}).extend(Le)}async function De(e){return new Promise((t=>setTimeout(t,e)))}function ze(e,{delay:t=100,retryCount:r=2,shouldRetry:n=(()=>!0)}={}){return new Promise(((i,o)=>{const a=async({count:s=0}={})=>{try{const t=await e();i(t)}catch(e){if(s<r&&await n({count:s,error:e}))return(async({error:e})=>{const r="function"==typeof t?t({count:s,error:e}):t;r&&await De(r),a({count:s+1})})({error:e});o(e)}};a()}))}const Fe=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:!!(e instanceof m.Gg&&e.status)&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function We(e,{retryDelay:t=150,retryCount:r=3}={}){return async n=>ze((async()=>{try{return await e(n)}catch(e){const t=e;switch(t.code){case y.code:throw new y(t);case v.code:throw new v(t);case x.code:throw new x(t);case C.code:throw new C(t);case E.code:throw new E(t);case _.code:throw new _(t);case k.code:throw new k(t);case S.code:throw new S(t);case A.code:throw new A(t);case I.code:throw new I(t);case P.code:throw new P(t);case T.code:throw new T(t);case O.code:throw new O(t);case N.code:throw new N(t);case R.code:throw new R(t);case M.code:throw new M(t);case j.code:throw new j(t);case U.code:throw new U(t);case 5e3:throw new O(t);default:if(e instanceof g.G)throw e;throw new L(t)}}}),{delay:({count:e,error:r})=>{if(r&&r instanceof m.Gg){const e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!Fe(e)})}function He({key:e,name:t,request:r,retryCount:n=3,retryDelay:i=150,timeout:o,type:a},s){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:i,timeout:o,type:a},request:We(r,{retryCount:n,retryDelay:i}),value:s}}function Ge(e,t={}){const{key:r="custom",name:n="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>He({key:r,name:n,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}var Ze,Ve=class extends p{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;const e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:n}),this.id="injected",u(this,Ze,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=r(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=async e=>{1013===e.code&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};const i=n.getProvider();if("string"==typeof n.name)this.name=n.name;else if(i){const e=function(e){if(!e)return"Injected";const t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){const r=new Set;let n=1;for(const i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${n}`,n+=1),r.add(e)}const i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);n.name?this.name=n.name(e):this.name="string"==typeof e?e:e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{const r=await this.getProvider();if(!r)throw new t;r.on&&(r.on("accountsChanged",this.onAccountsChanged),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const n=await r.request({method:"eth_requestAccounts"}),i=(0,f.K)(n[0]);let o=await this.getChainId(),a=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,a=this.isChainUnsupported(o)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new O(e);if(-32002===e.code)throw new S(e);throw e}}async disconnect(){const e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new t;const r=await e.request({method:"eth_accounts"});return(0,f.K)(r[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new t;return e.request({method:"eth_chainId"}).then(r)}async getProvider(){const e=this.options.getProvider();return e&&d(this,Ze,e),l(this,Ze)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Be({account:r,chain:n,transport:Ge(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new t;return!!await this.getAccount()}catch{return!1}}async switchChain(r){const n=await this.getProvider();if(!n)throw new t;const i=(0,V.eC)(r);try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),new Promise((e=>this.on("change",(({chain:t})=>{t?.id===r&&e()}))))]),this.chains.find((e=>e.id===r))??{id:r,name:`Chain ${i}`,network:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(t){const o=this.chains.find((e=>e.id===r));if(!o)throw new e({chainId:r,connectorId:this.id});if(4902===t.code||4902===t?.data?.originalError?.code)try{if(await n.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),await this.getChainId()!==r)throw new O(new Error("User rejected switch after adding network."));return o}catch(e){throw new O(e)}if(this.isUserRejectedRequestError(t))throw new O(t);throw new U(t)}}async watchAsset({address:e,decimals:r=18,image:n,symbol:i}){const o=await this.getProvider();if(!o)throw new t;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:r,image:n,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};Ze=new WeakMap;var qe=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Ke=(e,t,r)=>(qe(e,t,"read from private field"),r?r.call(e):t.get(e)),Ye=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Xe=(e,t,r,n)=>(qe(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Je=a(6693),Qe=a(7210),et=a(7864),tt=a(1836),rt=a(1746),nt=a(5980);function it(e,t){if(!(e instanceof g.G))return!1;const r=e.walk((e=>e instanceof nt.Lu));return r instanceof nt.Lu&&("ResolverNotFound"===r.data?.errorName||"ResolverWildcardNotSupported"===r.data?.errorName||!!r.reason?.includes("Wildcard on non-extended resolvers is not supported")||"reverse"===t&&r.reason===rt.$[50])}var ot=a(1187),at=a(3199);function st(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return(0,Ie.v)(t)?t:null}function ct(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,V.ci)(t);const r=e.split(".");for(let e=r.length-1;e>=0;e-=1){const n=st(r[e]),i=n?(0,ot.O0)(n):(0,at.w)((0,ot.qX)(r[e]),"bytes");t=(0,at.w)((0,K.zo)([t,i]),"bytes")}return(0,V.ci)(t)}function lt(e){const t=new Uint8Array(32).fill(0);return e?st(e)||(0,at.w)((0,ot.qX)(e)):(0,V.ci)(t)}function ut(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const r=new Uint8Array((0,ot.qX)(t).byteLength+2);let n=0;const i=t.split(".");for(let e=0;e<i.length;e++){let t=(0,ot.qX)(i[e]);t.byteLength>255&&(t=(0,ot.qX)(`[${lt(i[e]).slice(2)}]`)),r[n]=t.length,r.set(t,n+1),n+=t.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}const dt=3;function ht(e,{abi:t,address:r,args:n,docsPath:i,functionName:o,sender:a}){const{code:s,data:c,message:l,shortMessage:u}=e instanceof nt.VQ?e:e instanceof g.G?e.walk((e=>"data"in e))||e.walk():{},d=e instanceof q.wb?new nt.Dk({functionName:o}):[dt,E.code].includes(s)&&(c||l||u)?new nt.Lu({abi:t,data:"object"==typeof c?c.data:c,functionName:o,message:u??l}):e;return new nt.uq(d,{abi:t,args:n,contractAddress:r,docsPath:i,functionName:o,sender:a})}var pt=a(84);async function ft(e,{abi:t,address:r,args:n,functionName:i,...o}){const a=(0,Ue.R)({abi:t,args:n,functionName:i});try{const{data:s}=await se(e,pt.R,"call")({data:a,to:r,...o});return(0,Qe.k)({abi:t,args:n,functionName:i,data:s||"0x"})}catch(e){throw ht(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:i})}}class gt extends g.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class mt extends g.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class wt extends g.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class bt extends g.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const yt=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,vt=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,xt=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Ct=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function Et(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function _t({uri:e,gatewayUrls:t}){const r=xt.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};const n=Et(t?.ipfs,"https://ipfs.io"),i=Et(t?.arweave,"https://arweave.net"),o=e.match(yt),{protocol:a,subpath:s,target:c,subtarget:l=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||vt.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&c)return{uri:`${n}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&c)return{uri:`${i}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(Ct,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new wt({uri:e})}function kt(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new gt({data:e});return e.image||e.image_url||e.image_data}async function St({gatewayUrls:e,uri:t}){const{uri:r,isOnChain:n}=_t({uri:t,gatewayUrls:e});if(n)return r;const i=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){return("object"!=typeof t||void 0===t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e}))}}(r);if(i)return r;throw new wt({uri:t})}async function At(e,{blockNumber:t,blockTag:r,name:n,key:i,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,et.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=await se(e,ft,"readContract")({address:a,abi:Je.k3,functionName:"resolve",args:[(0,V.NC)(ut(n)),(0,Ue.R)({abi:Je.nZ,functionName:"text",args:[ct(n),i]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;const s=(0,Qe.k)({abi:Je.nZ,functionName:"text",data:o[0]});return""===s?null:s}catch(e){if(it(e,"resolve"))return null;throw e}}function It(e,{method:t}){const r={};return"fallback"===e.transport.type&&e.transport.onResponse?.((({method:e,response:n,status:i,transport:o})=>{"success"===i&&t===e&&(r[n]=o.request)})),t=>r[t]||e.request}class $t extends g.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var Pt=a(4092),Tt=a(522),Ot=a(840);function Nt({abi:e,eventName:t,args:r}){let n=e[0];if(t&&(n=(0,Ot.mE)({abi:e,args:r,name:t}),!n))throw new q.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==n.type)throw new q.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=(0,Tt.t)(n),o=(0,Pt.e)(i);let a=[];if(r&&"inputs"in n){const e=n.inputs?.filter((e=>"indexed"in e&&e.indexed)),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map((e=>r[e.name]))??[]:[];t.length>0&&(a=e?.map(((e,r)=>Array.isArray(t[r])?t[r].map(((n,i)=>Rt({param:e,value:t[r][i]}))):t[r]?Rt({param:e,value:t[r]}):null))??[])}return[o,...a]}function Rt({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,at.w)((0,ot.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new $t(e.type);return(0,Y.E)([e],[t])}async function Mt(e,{address:t,abi:r,args:n,eventName:i,fromBlock:o,strict:a,toBlock:s}){const c=It(e,{method:"eth_newFilter"}),l=i?Nt({abi:r,args:n,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,V.eC)(o):o,toBlock:"bigint"==typeof s?(0,V.eC)(s):s,topics:l}]});return{abi:r,args:n,eventName:i,id:u,request:c(u),strict:a,type:"event"}}async function jt(e,{address:t,args:r,event:n,events:i,fromBlock:o,strict:a,toBlock:s}={}){const c=i??(n?[n]:void 0),l=It(e,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap((e=>Nt({abi:[e],eventName:e.name,args:r})))],n&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,V.eC)(o):o,toBlock:"bigint"==typeof s?(0,V.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:r,eventName:n?n.name:void 0,fromBlock:o,id:d,request:l(d),strict:a,toBlock:s,type:"event"}}async function Ut(e){const t=It(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}const Lt=new Map,Bt=new Map;const Dt=e=>`blockNumber.${e}`;async function zt(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){const n=await async function(e,{cacheKey:t,cacheTime:r=1/0}){const n=function(e){const t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,Lt),n=t(e,Bt);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}(t),i=n.response.get();if(i&&r>0&&(new Date).getTime()-i.created.getTime()<r)return i.data;let o=n.promise.get();o||(o=e(),n.promise.set(o));try{const e=await o;return n.response.set({created:new Date,data:e}),e}finally{n.promise.clear()}}((()=>e.request({method:"eth_blockNumber"})),{cacheKey:Dt(e.uid),cacheTime:r??t});return BigInt(n)}var Ft=a(4450);const Wt="/docs/contract/decodeEventLog";function Ht({abi:e,data:t,strict:r,topics:n}){const i=r??!0,[o,...a]=n;if(!o)throw new q.FM({docsPath:Wt});const s=e.find((e=>"event"===e.type&&o===(0,Pt.e)((0,Tt.t)(e))));if(!s||!("name"in s)||"event"!==s.type)throw new q.lC(o,{docsPath:Wt});const{name:c,inputs:l}=s,u=l?.some((e=>!("name"in e&&e.name)));let d=u?[]:{};const h=l.filter((e=>"indexed"in e&&e.indexed));for(let e=0;e<h.length;e++){const t=h[e],r=a[e];if(!r)throw new q.Gy({abiItem:s,param:t});d[t.name||e]=Gt({param:t,value:r})}const p=l.filter((e=>!("indexed"in e&&e.indexed)));if(p.length>0)if(t&&"0x"!==t)try{const e=(0,Ft.r)(p,t);if(e)if(u)d=[...d,...e];else for(let t=0;t<p.length;t++)d[p[t].name]=e[t]}catch(e){if(i){if(e instanceof q.xB)throw new q.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new q.SM({abiItem:s,data:"0x",params:p,size:0});return{eventName:c,args:Object.values(d).length>0?d:void 0}}function Gt({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,Ft.r)([e],t)||[])[0]}function Zt(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function Vt(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:o,events:a,args:s,strict:c}={}){const l=c??!1,u=a??(o?[o]:void 0);let d,h=[];return u&&(h=[u.flatMap((e=>Nt({abi:[e],eventName:e.name,args:s})))],o&&(h=h[0])),d=r?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"==typeof n?(0,V.eC)(n):n,toBlock:"bigint"==typeof i?(0,V.eC)(i):i}]}),d.map((e=>{try{const{eventName:t,args:r}=u?Ht({abi:u,data:e.data,topics:e.topics,strict:l}):{eventName:void 0,args:void 0};return Zt(e,{args:r,eventName:t})}catch(t){let r,n;if(t instanceof q.SM||t instanceof q.Gy){if(l)return;r=t.abiItem.name,n=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Zt(e,{args:n?[]:{},eventName:r})}})).filter(Boolean)}async function qt(e,{abi:t,address:r,args:n,blockHash:i,eventName:o,fromBlock:a,toBlock:s,strict:c}){const l=o?(0,Ot.mE)({abi:t,name:o}):void 0,u=l?void 0:t.filter((e=>"event"===e.type));return se(e,Vt,"getLogs")({address:r,args:n,blockHash:i,event:l,events:u,fromBlock:a,toBlock:s,strict:c})}async function Kt(e,{filter:t}){const r="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map((e=>{if("string"==typeof e)return e;try{const{eventName:n,args:i}="abi"in t&&t.abi?Ht({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Zt(e,{args:i,eventName:n})}catch(r){let n,i;if(r instanceof q.SM||r instanceof q.Gy){if("strict"in t&&t.strict)return;n=r.abiItem.name,i=r.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Zt(e,{args:i?[]:{},eventName:n})}})).filter(Boolean)}async function Yt(e,{blockHash:t,blockNumber:r,blockTag:n,hash:i,index:o}){const a=n||"latest",s=void 0!==r?(0,V.eC)(r):void 0;let c=null;if(i?c=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,V.eC)(o)]}):(s||a)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,V.eC)(o)]})),!c)throw new ne.Bh({blockHash:t,blockNumber:r,blockTag:a,hash:i,index:o});return(e.chain?.formatters?.transaction?.format||ge)(c)}const Xt={"0x0":"reverted","0x1":"success"};function Jt(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>Zt(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,G.ly)(e.transactionIndex):null,status:e.status?Xt[e.status]:null,type:e.type?fe[e.type]||e.type:null}}async function Qt(e,{hash:t}){const r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new ne.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||Jt)(r)}async function er(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}const tr="Ethereum Signed Message:\n",rr="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";async function nr(e,{address:t,hash:r,signature:n,...i}){const o=(0,Ie.v)(n)?n:(0,V.NC)(n);try{const{data:n}=await se(e,pt.R,"call")({data:J({abi:Je.$o,args:[t,r,o],bytecode:rr}),...i});return a=n??"0x0",s="0x1",function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}((0,Ie.v)(a)?(0,ot.O0)(a):a,(0,Ie.v)(s)?(0,ot.O0)(s):s)}catch(e){if(e instanceof nt.cg)return!1;throw e}var a,s}function ir({domain:e,message:t,primaryType:r,types:n}){const i=void 0===e?{}:e,o={EIP712Domain:je({domain:i}),...n};Me({domain:i,message:t,primaryType:r,types:o});const a=["0x1901"];return i&&a.push(function({domain:e,types:t}){return or({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:o})),"EIP712Domain"!==r&&a.push(or({data:t,primaryType:r,types:o})),(0,at.w)((0,K.zo)(a))}function or({data:e,primaryType:t,types:r}){const n=ar({data:e,primaryType:t,types:r});return(0,at.w)(n)}function ar({data:e,primaryType:t,types:r}){const n=[{type:"bytes32"}],i=[sr({primaryType:t,types:r})];for(const o of r[t]){const[t,a]=lr({types:r,name:o.name,type:o.type,value:e[o.name]});n.push(t),i.push(a)}return(0,Y.E)(n,i)}function sr({primaryType:e,types:t}){const r=(0,V.NC)(function({primaryType:e,types:t}){let r="";const n=cr({primaryType:e,types:t});n.delete(e);const i=[e,...Array.from(n).sort()];for(const e of i)r+=`${e}(${t[e].map((({name:e,type:t})=>`${t} ${e}`)).join(",")})`;return r}({primaryType:e,types:t}));return(0,at.w)(r)}function cr({primaryType:e,types:t},r=new Set){const n=e.match(/^\w*/u),i=n?.[0];if(r.has(i)||void 0===t[i])return r;r.add(i);for(const e of t[i])cr({primaryType:e.type,types:t},r);return r}function lr({types:e,name:t,type:r,value:n}){if(void 0!==e[r])return[{type:"bytes32"},(0,at.w)(ar({data:n,primaryType:r,types:e}))];if("bytes"===r)return n="0x"+((n.length%2?"0":"")+n.slice(2)),[{type:"bytes32"},(0,at.w)(n)];if("string"===r)return[{type:"bytes32"},(0,at.w)((0,V.NC)(n))];if(r.lastIndexOf("]")===r.length-1){const i=r.slice(0,r.lastIndexOf("[")),o=n.map((r=>lr({name:t,type:i,types:e,value:r})));return[{type:"bytes32"},(0,at.w)((0,Y.E)(o.map((([e])=>e)),o.map((([,e])=>e))))]}return[{type:r},n]}BigInt(0),BigInt(1),BigInt(2);const ur=new Map,dr=new Map;let hr=0;function pr(e,t,r){const n=++hr,i=()=>ur.get(e)||[],o=()=>{const t=dr.get(e);1===i().length&&t&&t(),(()=>{const t=i();ur.set(e,t.filter((e=>e.id!==n)))})()},a=i();if(ur.set(e,[...a,{id:n,fns:t}]),a&&a.length>0)return o;const s={};for(const e in t)s[e]=(...t)=>{const r=i();if(0!==r.length)for(const n of r)n.fns[e]?.(...t)};const c=r(s);return"function"==typeof c&&dr.set(e,c),o}function fr(e,{emitOnBegin:t,initialWaitTime:r,interval:n}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const s=await(r?.(a))??n;await De(s);const c=async()=>{i&&(await e({unpoll:o}),await De(n),c())};c()})(),o}function gr(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:o,pollingInterval:a=e.pollingInterval}){let s;return(void 0!==o?o:"webSocket"!==e.transport.type)?pr((0,$e.P)(["watchBlockNumber",e.uid,t,r,a]),{onBlockNumber:n,onError:i},(n=>fr((async()=>{try{const t=await se(e,zt,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)n.onBlockNumber(e,s),s=e}(!s||t>s)&&(n.onBlockNumber(t,s),s=t)}catch(e){n.onError?.(e)}}),{emitOnBegin:t,interval:a}))):(()=>{let t=!0,r=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!t)return;const r=(0,G.y_)(e.result?.number);n(r,s),s=r},onError(e){i?.(e)}});r=o,t||r()}catch(e){i?.(e)}})(),r})()}function mr(e){return{call:t=>(0,pt.R)(e,t),createBlockFilter:()=>async function(e){const t=It(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}(e),createContractEventFilter:t=>Mt(e,t),createEventFilter:t=>jt(e,t),createPendingTransactionFilter:()=>Ut(e),estimateContractGas:t=>async function(e,{abi:t,address:r,args:n,functionName:i,...o}){const a=(0,Ue.R)({abi:t,args:n,functionName:i});try{return await se(e,Ee,"estimateGas")({data:a,to:r,...o})}catch(e){const a=o.account?(0,B.T)(o.account):void 0;throw ht(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:a?.address})}}(e,t),estimateGas:t=>Ee(e,t),getBalance:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest"}){const i=r?(0,V.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||n]});return BigInt(o)}(e,t),getBlock:t=>we(e,t),getBlockNumber:t=>zt(e,t),getBlockTransactionCount:t=>async function(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){const i=void 0!==r?(0,V.eC)(r):void 0;let o;return o=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||n]}),(0,G.ly)(o)}(e,t),getBytecode:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest"}){const i=void 0!==r?(0,V.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,i||n]});if("0x"!==o)return o}(e,t),getChainId:()=>Z(e),getContractEvents:t=>qt(e,t),getEnsAddress:t=>async function(e,{blockNumber:t,blockTag:r,coinType:n,name:i,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,et.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=(0,Ue.R)({abi:Je.X$,functionName:"addr",...null!=n?{args:[ct(i),BigInt(n)]}:{args:[ct(i)]}}),s=await se(e,ft,"readContract")({address:a,abi:Je.k3,functionName:"resolve",args:[(0,V.NC)(ut(i)),o],blockNumber:t,blockTag:r});if("0x"===s[0])return null;const c=(0,Qe.k)({abi:Je.X$,args:null!=n?[ct(i),BigInt(n)]:void 0,functionName:"addr",data:s[0]});return"0x"===c||"0x00"===(0,tt.f)(c)?null:c}catch(e){if(it(e,"resolve"))return null;throw e}}(e,t),getEnsAvatar:t=>async function(e,{blockNumber:t,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:o}){const a=await se(e,At,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:o});if(!a)return null;try{return await async function(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?async function(e,{gatewayUrls:t,record:r}){const n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[r,n,i]=t.split("/"),[o,a]=r.split(":"),[s,c]=n.split(":");if(!o||"eip155"!==o.toLowerCase())throw new mt({reason:"Only EIP-155 supported"});if(!a)throw new mt({reason:"Chain ID not found"});if(!c)throw new mt({reason:"Contract address not found"});if(!i)throw new mt({reason:"Token ID not found"});if(!s)throw new mt({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}(r),i=await async function(e,{nft:t}){if("erc721"===t.namespace)return ft(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return ft(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new bt({namespace:t.namespace})}(e,{nft:n}),{uri:o,isOnChain:a,isEncoded:s}=_t({uri:i,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const e=s?atob(o.replace("data:application/json;base64,","")):o;return St({uri:kt(JSON.parse(e)),gatewayUrls:t})}let c=n.tokenID;return"erc1155"===n.namespace&&(c=c.replace("0x","").padStart(64,"0")),async function({gatewayUrls:e,uri:t}){try{const r=await fetch(t).then((e=>e.json()));return await St({gatewayUrls:e,uri:kt(r)})}catch{throw new wt({uri:t})}}({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}(e,{gatewayUrls:t,record:r}):St({uri:r,gatewayUrls:t})}(e,{record:a,gatewayUrls:n})}catch{return null}}(e,t),getEnsName:t=>async function(e,{address:t,blockNumber:r,blockTag:n,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,et.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}const a=`${t.toLowerCase().substring(2)}.addr.reverse`;try{const[i,s]=await se(e,ft,"readContract")({address:o,abi:Je.du,functionName:"reverse",args:[(0,V.NC)(ut(a))],blockNumber:r,blockTag:n});return t.toLowerCase()!==s.toLowerCase()?null:i}catch(e){if(it(e,"reverse"))return null;throw e}}(e,t),getEnsResolver:t=>async function(e,{blockNumber:t,blockTag:r,name:n,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,et.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[a]=await se(e,ft,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,V.NC)(ut(n))],blockNumber:t,blockTag:r});return a}(e,t),getEnsText:t=>At(e,t),getFeeHistory:t=>async function(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){const o=r?(0,V.eC)(r):void 0;return{baseFeePerGas:(a=await e.request({method:"eth_feeHistory",params:[(0,V.eC)(t),o||n,i]})).baseFeePerGas.map((e=>BigInt(e))),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map((e=>e.map((e=>BigInt(e)))))};var a}(e,t),estimateFeesPerGas:t=>async function(e,t){return ve(e,t)}(e,t),getFilterChanges:e=>Kt(0,e),getFilterLogs:e=>async function(e,{filter:t}){const r=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map((e=>{try{const{eventName:n,args:i}="abi"in t&&t.abi?Ht({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Zt(e,{args:i,eventName:n})}catch(r){let n,i;if(r instanceof q.SM||r instanceof q.Gy){if("strict"in t&&t.strict)return;n=r.abiItem.name,i=r.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Zt(e,{args:i?[]:{},eventName:n})}})).filter(Boolean)}(0,e),getGasPrice:()=>be(e),getLogs:t=>Vt(e,t),getProof:t=>async function(e,{address:t,blockNumber:r,blockTag:n,storageKeys:i}){const o=n??"latest",a=void 0!==r?(0,V.eC)(r):void 0;return s=await e.request({method:"eth_getProof",params:[t,i,a||o]}),{...s,balance:s.balance?BigInt(s.balance):void 0,nonce:s.nonce?(0,G.ly)(s.nonce):void 0,storageProof:s.storageProof?(c=s.storageProof,c.map((e=>({...e,value:BigInt(e.value)})))):void 0};var s,c}(e,t),estimateMaxPriorityFeePerGas:t=>async function(e,t){return ye(e,t)}(e,t),getStorageAt:t=>async function(e,{address:t,blockNumber:r,blockTag:n="latest",slot:i}){const o=void 0!==r?(0,V.eC)(r):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||n]})}(e,t),getTransaction:t=>Yt(e,t),getTransactionConfirmations:t=>async function(e,{hash:t,transactionReceipt:r}){const[n,i]=await Promise.all([se(e,zt,"getBlockNumber")({}),t?se(e,Yt,"getBlockNumber")({hash:t}):void 0]),o=r?.blockNumber||i?.blockNumber;return o?n-o+1n:0n}(e,t),getTransactionCount:t=>_e(e,t),getTransactionReceipt:t=>Qt(e,t),multicall:t=>async function(e,t){const{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:o,contracts:a,multicallAddress:s}=t,c=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024);let l=s;if(!l){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");l=(0,et.L)({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let d=0,h=0;for(let e=0;e<a.length;e++){const{abi:t,address:n,args:i,functionName:o}=a[e];try{const e=(0,Ue.R)({abi:t,args:i,functionName:o});h+=(e.length-2)/2,c>0&&h>c&&u[d].length>0&&(d++,h=(e.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:e,target:n}]}catch(e){const a=ht(e,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw a;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:n}]}}const p=await Promise.allSettled(u.map((t=>se(e,ft,"readContract")({abi:Je.F8,address:l,args:[t],blockNumber:i,blockTag:o,functionName:"aggregate3"})))),f=[];for(let e=0;e<p.length;e++){const t=p[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)f.push({status:"failure",error:t.reason,result:void 0});continue}const n=t.value;for(let t=0;t<n.length;t++){const{returnData:i,success:o}=n[t],{callData:s}=u[e][t],{abi:c,address:l,functionName:d,args:h}=a[f.length];try{if("0x"===s)throw new q.wb;if(!o)throw new nt.VQ({data:i});const e=(0,Qe.k)({abi:c,args:h,data:i,functionName:d});f.push(r?{result:e,status:"success"}:e)}catch(e){const t=ht(e,{abi:c,address:l,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw t;f.push({error:t,result:void 0,status:"failure"})}}}if(f.length!==a.length)throw new g.G("multicall results mismatch");return f}(e,t),prepareTransactionRequest:t=>ke(e,t),readContract:t=>ft(e,t),sendRawTransaction:t=>Se(e,t),simulateContract:t=>async function(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}){const s=a.account?(0,B.T)(a.account):void 0,c=(0,Ue.R)({abi:t,args:n,functionName:o});try{const{data:s}=await se(e,pt.R,"call")({batch:!1,data:`${c}${i?i.replace("0x",""):""}`,to:r,...a});return{result:(0,Qe.k)({abi:t,args:n,functionName:o,data:s||"0x"}),request:{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}}}catch(e){throw ht(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}(e,t),verifyMessage:t=>async function(e,{address:t,message:r,signature:n,...i}){const o=function(e,t){const r="string"==typeof e?(0,ot.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,ot.O0)(e.raw),n=(0,ot.qX)(`${tr}${r.length}`);return(0,at.w)((0,K.zo)([n,r]),void 0)}(r);return nr(e,{address:t,hash:o,signature:n,...i})}(e,t),verifyTypedData:t=>async function(e,{address:t,signature:r,message:n,primaryType:i,types:o,domain:a,...s}){return nr(e,{address:t,hash:ir({message:n,primaryType:i,types:o,domain:a}),signature:r,...s})}(e,t),uninstallFilter:e=>er(0,e),waitForTransactionReceipt:t=>async function(e,{confirmations:t=1,hash:r,onReplaced:n,pollingInterval:i=e.pollingInterval,timeout:o}){const a=(0,$e.P)(["waitForTransactionReceipt",e.uid,r]);let s,c,l,u=!1;return new Promise(((d,h)=>{o&&setTimeout((()=>h(new ne.mc({hash:r}))),o);const p=pr(a,{onReplaced:n,resolve:d,reject:h},(n=>{const o=se(e,gr,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let a=i;const d=e=>{o(),e(),p()};try{if(l){if(t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;return void d((()=>n.resolve(l)))}if(s||(u=!0,await ze((async()=>{s=await se(e,Yt,"getTransaction")({hash:r}),s.blockNumber&&(a=s.blockNumber)}),{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await se(e,Qt,"getTransactionReceipt")({hash:r}),t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;d((()=>n.resolve(l)))}catch(r){if(s&&(r instanceof ne.Bh||r instanceof ne.Yb))try{c=s,u=!0;const r=await ze((()=>se(e,we,"getBlock")({blockNumber:a,includeTransactions:!0})),{delay:({count:e})=>200*~~(1<<e),retryCount:6,shouldRetry:({error:e})=>e instanceof pe});u=!1;const i=r.transactions.find((({from:e,nonce:t})=>e===c.from&&t===c.nonce));if(!i)return;if(l=await se(e,Qt,"getTransactionReceipt")({hash:i.hash}),t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;let o="replaced";i.to===c.to&&i.value===c.value?o="repriced":i.from===i.to&&0n===i.value&&(o="cancelled"),d((()=>{n.onReplaced?.({reason:o,replacedTransaction:c,transaction:i,transactionReceipt:l}),n.resolve(l)}))}catch(e){d((()=>n.reject(e)))}else d((()=>n.reject(r)))}}})}))}))}(e,t),watchBlocks:t=>function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:o,includeTransactions:a,poll:s,pollingInterval:c=e.pollingInterval}){const l=void 0!==s?s:"webSocket"!==e.transport.type,u=a??!1;let d;return l?pr((0,$e.P)(["watchBlocks",e.uid,r,n,u,c]),{onBlock:i,onError:o},(i=>fr((async()=>{try{const n=await se(e,we,"getBlock")({blockTag:t,includeTransactions:u});if(n.number&&d?.number){if(n.number===d.number)return;if(n.number-d.number>1&&r)for(let t=d?.number+1n;t<n.number;t++){const r=await se(e,we,"getBlock")({blockNumber:t,includeTransactions:u});i.onBlock(r,d),d=r}}(!d?.number||"pending"===t&&!n?.number||n.number&&n.number>d.number)&&(i.onBlock(n,d),d=n)}catch(e){i.onError?.(e)}}),{emitOnBegin:n,interval:c}))):(()=>{let t=!0,r=()=>t=!1;return(async()=>{try{const{unsubscribe:n}=await e.transport.subscribe({params:["newHeads"],onData(r){if(!t)return;const n=(e.chain?.formatters?.block?.format||me)(r.result);i(n,d),d=n},onError(e){o?.(e)}});r=n,t||r()}catch(e){o?.(e)}})(),r})()}(e,t),watchBlockNumber:t=>gr(e,t),watchContractEvent:t=>function(e,{abi:t,address:r,args:n,batch:i=!0,eventName:o,onError:a,onLogs:s,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){return(void 0!==c?c:"webSocket"!==e.transport.type)?(()=>{const c=(0,$e.P)(["watchContractEvent",r,n,i,e.uid,o,l]),d=u??!1;return pr(c,{onLogs:s,onError:a},(a=>{let s,c,u=!1;const h=fr((async()=>{if(u)try{let l;if(c)l=await se(e,Kt,"getFilterChanges")({filter:c});else{const i=await se(e,zt,"getBlockNumber")({});l=s&&s!==i?await se(e,qt,"getContractEvents")({abi:t,address:r,args:n,eventName:o,fromBlock:s+1n,toBlock:i,strict:d}):[],s=i}if(0===l.length)return;if(i)a.onLogs(l);else for(const e of l)a.onLogs([e])}catch(e){c&&e instanceof _&&(u=!1),a.onError?.(e)}else{try{c=await se(e,Mt,"createContractEventFilter")({abi:t,address:r,args:n,eventName:o,strict:d})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await se(e,er,"uninstallFilter")({filter:c}),h()}}))})():(()=>{let i=!0,c=()=>i=!1;return(async()=>{try{const l=o?Nt({abi:t,eventName:o,args:n}):[],{unsubscribe:d}=await e.transport.subscribe({params:["logs",{address:r,topics:l}],onData(e){if(!i)return;const r=e.result;try{const{eventName:e,args:n}=Ht({abi:t,data:r.data,topics:r.topics,strict:u}),i=Zt(r,{args:n,eventName:e});s([i])}catch(e){let t,n;if(e instanceof q.SM||e instanceof q.Gy){if(u)return;t=e.abiItem.name,n=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Zt(r,{args:n?[]:{},eventName:t});s([i])}},onError(e){a?.(e)}});c=d,i||c()}catch(e){a?.(e)}})(),c})()}(e,t),watchEvent:t=>function(e,{address:t,args:r,batch:n=!0,event:i,events:o,onError:a,onLogs:s,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){const d=void 0!==c?c:"webSocket"!==e.transport.type,h=u??!1;return d?pr((0,$e.P)(["watchEvent",t,r,n,e.uid,i,l]),{onLogs:s,onError:a},(a=>{let s,c,u=!1;const d=fr((async()=>{if(u)try{let l;if(c)l=await se(e,Kt,"getFilterChanges")({filter:c});else{const n=await se(e,zt,"getBlockNumber")({});l=s&&s!==n?await se(e,Vt,"getLogs")({address:t,args:r,event:i,events:o,fromBlock:s+1n,toBlock:n}):[],s=n}if(0===l.length)return;if(n)a.onLogs(l);else for(const e of l)a.onLogs([e])}catch(e){c&&e instanceof _&&(u=!1),a.onError?.(e)}else{try{c=await se(e,jt,"createEventFilter")({address:t,args:r,event:i,events:o,strict:h})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await se(e,er,"uninstallFilter")({filter:c}),d()}})):(()=>{let n=!0,c=()=>n=!1;return(async()=>{try{const l=o??(i?[i]:void 0);let d=[];l&&(d=[l.flatMap((e=>Nt({abi:[e],eventName:e.name,args:r})))],i&&(d=d[0]));const{unsubscribe:p}=await e.transport.subscribe({params:["logs",{address:t,topics:d}],onData(e){if(!n)return;const t=e.result;try{const{eventName:e,args:r}=Ht({abi:l,data:t.data,topics:t.topics,strict:h}),n=Zt(t,{args:r,eventName:e});s([n])}catch(e){let r,n;if(e instanceof q.SM||e instanceof q.Gy){if(u)return;r=e.abiItem.name,n=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Zt(t,{args:n?[]:{},eventName:r});s([i])}},onError(e){a?.(e)}});c=p,n||c()}catch(e){a?.(e)}})(),c})()}(e,t),watchPendingTransactions:t=>function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:o=e.pollingInterval}){return(void 0!==i?i:"webSocket"!==e.transport.type)?pr((0,$e.P)(["watchPendingTransactions",e.uid,t,o]),{onTransactions:n,onError:r},(r=>{let n;const i=fr((async()=>{try{if(!n)try{return void(n=await se(e,Ut,"createPendingTransactionFilter")({}))}catch(e){throw i(),e}const o=await se(e,Kt,"getFilterChanges")({filter:n});if(0===o.length)return;if(t)r.onTransactions(o);else for(const e of o)r.onTransactions([e])}catch(e){r.onError?.(e)}}),{emitOnBegin:!0,interval:o});return async()=>{n&&await se(e,er,"uninstallFilter")({filter:n}),i()}})):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!t)return;const r=e.result;n([r])},onError(e){r?.(e)}});i=o,t||i()}catch(e){r?.(e)}})(),i})()}(e,t)}}function wr(e){const{key:t="public",name:r="Public Client"}=e;return H({...e,key:t,name:r,type:"publicClient"}).extend(mr)}function br(e,t={}){const{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:c})=>{let l=e,u=()=>{};const d=He({key:r,name:n,async request({method:e,params:r}){const n=async(i=0)=>{const o=l[i]({chain:t,retryCount:0,timeout:c});try{const t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),Fe(t))throw t;if(i===l.length-1)throw t;return n(i+1)}};return n()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:l.map((e=>e({chain:t,retryCount:0})))});if(i){const e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:o,weights:a={}}){const{stability:s=.7,latency:c=.3}=a,l=[],u=async()=>{const a=await Promise.all(o.map((async t=>{const r=t({chain:e,retryCount:0,timeout:i}),n=Date.now();let o,a;try{await r.request({method:"net_listening"}),a=1}catch{a=0}finally{o=Date.now()}return{latency:o-n,success:a}})));l.push(a),l.length>n&&l.shift();const d=Math.max(...l.map((e=>Math.max(...e.map((({latency:e})=>e)))))),h=o.map(((e,t)=>{const r=l.map((e=>e[t].latency)),n=1-r.reduce(((e,t)=>e+t),0)/r.length/d,i=l.map((e=>e[t].success)),o=i.reduce(((e,t)=>e+t),0)/i.length;return 0===o?[0,t]:[c*n+s*o,t]})).sort(((e,t)=>t[0]-e[0]));r(h.map((([,e])=>o[e]))),await De(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>l=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:l,weights:e.weights})}return d}}class yr extends g.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var vr=a(2357);const xr=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}();function Cr(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:n}){return new Promise(((i,o)=>{(async()=>{let a;try{const s=new AbortController;r>0&&(a=setTimeout((()=>{n?s.abort():o(t)}),r)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()}))}let Er=0;const _r=new Map;async function kr(e){let t=_r.get(e);if(t)return t;const{schedule:r}=(0,vr.S)({id:e,fn:async()=>{const r=new xr(e),n=new Map,i=new Map,o=({data:e})=>{const t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,a=r?i:n,s=a.get(o);s&&s({data:e}),r||a.delete(o)},a=()=>{_r.delete(e),r.removeEventListener("close",a),r.removeEventListener("message",o)};return r.addEventListener("close",a),r.addEventListener("message",o),r.readyState===xr.CONNECTING&&await new Promise(((e,t)=>{r&&(r.onopen=e,r.onerror=t)})),t=Object.assign(r,{requests:n,subscriptions:i}),_r.set(e,t),[t]}}),[n,[i]]=await r();return i}const Sr={http:async function(e,{body:t,fetchOptions:r={},timeout:n=1e4}){const{headers:i,method:o,signal:a}=r;try{const s=await Cr((async({signal:s})=>await fetch(e,{...r,body:Array.isArray(t)?(0,$e.P)(t.map((e=>({jsonrpc:"2.0",id:e.id??Er++,...e})))):(0,$e.P)({jsonrpc:"2.0",id:t.id??Er++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:a||(n>0?s:void 0)})),{errorInstance:new m.W5({body:t,url:e}),timeout:n,signal:!0});let c;if(c=s.headers.get("Content-Type")?.startsWith("application/json")?await s.json():await s.text(),!s.ok)throw new m.Gg({body:t,details:(0,$e.P)(c.error)||s.statusText,headers:s.headers,status:s.status,url:e});return c}catch(r){if(r instanceof m.Gg)throw r;if(r instanceof m.W5)throw r;throw new m.Gg({body:t,details:r.message,url:e})}},webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new m.c9({body:t,url:e.url,details:"Socket is closed."});const n=Er++,i=({data:o})=>{const a=JSON.parse(o);"number"==typeof a.id&&n!==a.id||(r?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(n,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:n})),e},webSocketAsync:async function(e,{body:t,timeout:r=1e4}){return Cr((()=>new Promise((r=>Sr.webSocket(e,{body:t,onResponse:r})))),{errorInstance:new m.W5({body:t,url:e.url}),timeout:r})}};var Ar=a(4192);function Ir(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}const $r=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then:e=>$r(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>$r(t)(e)}}},Pr=e=>{let t;const r=new Set,n=(e,n)=>{const i="function"==typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach((r=>r(t,e)))}},i=()=>t,o={setState:n,getState:i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,i,o),o};var Tr=a(5229);function Or(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}var Nr=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},Rr=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},Mr=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},jr=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},Ur=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map((e=>Ur(e,{find:t,replace:r}))):e instanceof Object?Object.entries(e).reduce(((e,[n,i])=>({...e,[n]:Ur(i,{find:t,replace:r})})),{}):e;function Lr(e){const t=JSON.parse(e),r=Ur(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function Br(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(Ar.Bd[e])}function Dr(e,t){return e.slice(0,t).join(".")||"."}function zr(e,t){const{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function Fr(e,t,r,n){return JSON.stringify(e,function(e,t){const r="function"==typeof t,n=[],i=[];return function(o,a){if("object"==typeof a)if(n.length){const e=zr(n,this);0===e?n[n.length]=this:(n.splice(e),i.splice(e)),i[i.length]=o;const s=zr(n,a);if(0!==s)return r?t.call(this,o,a,Dr(i,s)):`[ref=${Dr(i,s)}]`}else n[0]=a,i[0]=o;return e.call(this,o,a)}}(((e,r)=>{const n="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,n)||n}),n),r??void 0)}var Wr={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function Hr({deserialize:e=Lr,key:t="wagmi",serialize:r=Fr,storage:n}){return{...n,getItem:(r,i=null)=>{const o=n.getItem(`${t}.${r}`);try{return o?e(o):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)n.removeItem(`${t}.${e}`);else try{n.setItem(`${t}.${e}`,r(i))}catch(e){console.error(e)}},removeItem:e=>n.removeItem(`${t}.${e}`)}}var Gr,Zr,Vr,qr,Kr,Yr="store",Xr=class{constructor({autoConnect:e=!1,connectors:t=[new Ve],publicClient:r,storage:n=Hr({storage:"undefined"!=typeof window?window.localStorage:Wr}),logger:i={warn:console.warn},webSocketPublicClient:o}){Ye(this,Vr),this.publicClients=new Map,this.webSocketPublicClients=new Map,Ye(this,Gr,void 0),Ye(this,Zr,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:r,storage:n,webSocketPublicClient:o};let a,s="disconnected";if(e)try{const e=n.getItem(Yr),t=e?.state?.data;s=t?.account?"reconnecting":"connecting",a=t?.chain?.id}catch(e){}const c="function"==typeof t?t():t;var l,u,d,h;c.forEach((e=>e.setStorage(n))),this.store=(h=((e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(r,n,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l;try{l=o.getStorage()}catch(e){}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),n,i);const u=$r(o.serialize),d=()=>{const e=o.partialize({...n()});let t;const r=u({state:e,version:o.version}).then((e=>l.setItem(o.name,e))).catch((e=>{t=e}));if(t)throw t;return r},h=i.setState;i.setState=(e,t)=>{h(e,t),d()};const p=e(((...e)=>{r(...e),d()}),n,i);let f;const g=()=>{var e;if(!l)return;a=!1,s.forEach((e=>e(n())));const t=(null==(e=o.onRehydrateStorage)?void 0:e.call(o,n()))||void 0;return $r(l.getItem.bind(l))(o.name).then((e=>{if(e)return o.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return f=o.merge(e,null!=(t=n())?t:p),r(f,!0),d()})).then((()=>{null==t||t(f,void 0),a=!0,c.forEach((e=>e(f)))})).catch((e=>{null==t||t(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(l=e.getStorage())},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),f||p})(e,t)):((e,t)=>(r,n,i)=>{let o={storage:Ir((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l=o.storage;if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),n,i);const u=()=>{const e=o.partialize({...n()});return l.setItem(o.name,{state:e,version:o.version})},d=i.setState;i.setState=(e,t)=>{d(e,t),u()};const h=e(((...e)=>{r(...e),u()}),n,i);let p;const f=()=>{var e,t;if(!l)return;a=!1,s.forEach((e=>{var t;return e(null!=(t=n())?t:h)}));const i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=n())?e:h))||void 0;return $r(l.getItem.bind(l))(o.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return p=o.merge(e,null!=(t=n())?t:h),r(p,!0),u()})).then((()=>{null==i||i(p,void 0),p=n(),a=!0,c.forEach((e=>e(p)))})).catch((e=>{null==i||i(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(l=e.storage)},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||f(),p||h})(e,t))((()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})})),{name:Yr,storage:n,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}),d=(e,t,r)=>{const n=r.subscribe;return r.subscribe=(e,t,i)=>{let o=e;if(t){const n=(null==i?void 0:i.equalityFn)||Object.is;let a=e(r.getState());o=r=>{const i=e(r);if(!n(a,i)){const e=a;t(a=i,e)}},(null==i?void 0:i.fireImmediately)&&t(a,a)}return n(o)},h(e,t,r)},d?Pr(d):Pr),this.storage=n,Xe(this,Zr,n?.getItem("wallet")),(this,l=Vr,u=qr,qe(this,l,"access private method"),u).call(this),e&&"undefined"!=typeof window&&setTimeout((async()=>await this.autoConnect()),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState((e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"})))}async destroy(){this.connector&&await(this.connector.disconnect?.()),Xe(this,Gr,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Ke(this,Gr))return;Xe(this,Gr,!0),this.setState((e=>({...e,status:e.data?.account?"reconnecting":"connecting"})));const e=Ke(this,Zr)?[...this.connectors].sort((e=>e.id===Ke(this,Zr)?-1:1)):this.connectors;let t=!1;for(const r of e){if(!r.ready||!r.isAuthorized)continue;if(!await r.isAuthorized())continue;const e=await r.connect();this.setState((t=>({...t,connector:r,chains:r?.chains,data:e,status:"connected"}))),t=!0;break}return t||this.setState((e=>({...e,data:void 0,status:"disconnected"}))),Xe(this,Gr,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t="function"==typeof e?e():e;t.forEach((e=>e.setStorage(this.args.storage))),this.setState((e=>({...e,connectors:t})))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.publicClients.get(e??-1),t)return t;const{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState((e=>({...e,publicClient:this.getPublicClient({chainId:t})})))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.webSocketPublicClients.get(e??-1),t)return t;const{webSocketPublicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState((e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})})))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function Jr(){if(!Kr)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Kr}async function Qr({chainId:e,connector:t}){const r=Jr(),n=r.connector;if(n&&t.id===n.id)throw new Rr;try{r.setState((e=>({...e,status:"connecting"})));const n=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState((e=>({...e,connector:t,chains:t?.chains,data:n,status:"connected"}))),r.storage.setItem("connected",!0),{...n,connector:t}}catch(e){throw r.setState((e=>({...e,status:e.connector?"connected":"disconnected"}))),e}}async function en(){const e=Jr();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}Gr=new WeakMap,Zr=new WeakMap,Vr=new WeakSet,qr=function(){const e=e=>{this.setState((t=>({...t,data:{...t.data,...e}})))},t=()=>{this.clearState()},r=e=>{this.setState((t=>({...t,error:e})))};this.store.subscribe((({connector:e})=>e),((n,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",r),n&&(n.on?.("change",e),n.on?.("disconnect",t),n.on?.("error",r))}));const{publicClient:n,webSocketPublicClient:i}=this.args;("function"==typeof n||"function"==typeof i)&&this.store.subscribe((({data:e})=>e?.chain?.id),(e=>{this.setState((t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})})))}))};var tn=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],rn=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function nn({chainId:e}={}){const t=Jr();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function on({address:e,account:t,chainId:r,abi:n,args:i,functionName:o,blockNumber:a,blockTag:s}){return nn({chainId:r}).readContract({abi:n,address:e,account:t,functionName:o,args:i,blockNumber:a,blockTag:s})}async function an({contracts:e,blockNumber:t,blockTag:r,...n}){const{allowFailure:i=!0}=n;try{const n=nn(),o=e.reduce(((e,t,r)=>{const i=t.chainId??n.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:r}]}}),{}),a=()=>Object.entries(o).map((([e,n])=>async function({chainId:e,contracts:t,blockNumber:r,blockTag:n,...i}){const o=nn({chainId:e});if(!o.chains)throw new Mr;if(e&&o.chain.id!==e)throw new Nr({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:t})}({allowFailure:i,chainId:parseInt(e),contracts:n.map((({contract:e})=>e)),blockNumber:t,blockTag:r}))),s=(await Promise.all(a())).flat(),c=Object.values(o).flatMap((e=>e.map((({index:e})=>e))));return s.reduce(((e,t,r)=>(e&&(e[c[r]]=t),e)),[])}catch(n){if(n instanceof nt.uq)throw n;const o=()=>e.map((e=>on({...e,blockNumber:t,blockTag:r})));return i?(await Promise.allSettled(o())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(o())}}function sn(){const{data:e,connector:t,status:r}=Jr();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function cn(){const e=Jr(),t=e.data?.chain?.id,r=e.chains??[],n=[...e.publicClient?.chains||[],...r].find((e=>e.id===t))??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...n,...e.data?.chain,id:t}:void 0,chains:r}}async function ln({chainId:e}){const{connector:r}=Jr();if(!r)throw new t;if(!r.switchChain)throw new jr({connector:r});return r.switchChain(e)}function un(e,{selector:t=(e=>e)}={}){const r=Jr().subscribe((({data:e,connector:r,status:n})=>t({address:e?.account,connector:r,status:n})),(()=>e(sn())),{equalityFn:Or});return r}var dn=a(5909),hn=a(1123),pn=a(4666),fn=a(2927),gn=a(8382);const mn=e=>e??gn.Ld;var wn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let bn=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=dn.AccountController.state.address,this.balanceVal=dn.AccountController.state.balance,this.balanceSymbol=dn.AccountController.state.balanceSymbol,this.profileName=dn.AccountController.state.profileName,this.profileImage=dn.AccountController.state.profileImage,this.network=dn.NetworkController.state.caipNetwork,this.unsubscribe.push(dn.AccountController.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),dn.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=dn.fz.getNetworkImage(this.network),t="show"===this.balance;return pn.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${mn(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${mn(e)}
        avatarSrc=${mn(this.profileImage)}
        balance=${t?dn.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){dn.IN.open()}};wn([(0,fn.Cb)({type:Boolean})],bn.prototype,"disabled",void 0),wn([(0,fn.Cb)()],bn.prototype,"balance",void 0),wn([(0,fn.Cb)()],bn.prototype,"charsStart",void 0),wn([(0,fn.Cb)()],bn.prototype,"charsEnd",void 0),wn([(0,fn.SB)()],bn.prototype,"address",void 0),wn([(0,fn.SB)()],bn.prototype,"balanceVal",void 0),wn([(0,fn.SB)()],bn.prototype,"balanceSymbol",void 0),wn([(0,fn.SB)()],bn.prototype,"profileName",void 0),wn([(0,fn.SB)()],bn.prototype,"profileImage",void 0),wn([(0,fn.SB)()],bn.prototype,"network",void 0),bn=wn([(0,hn.customElement)("w3m-account-button")],bn);var yn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let vn=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=dn.AccountController.state.isConnected,this.unsubscribe.push(dn.AccountController.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?pn.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${mn(this.balance)}
            .charsStart=${mn(this.charsStart)}
            .charsEnd=${mn(this.charsEnd)}
          >
          </w3m-account-button>
        `:pn.dy`
          <w3m-connect-button
            size=${mn(this.size)}
            label=${mn(this.label)}
            loadingLabel=${mn(this.loadingLabel)}
          ></w3m-connect-button>
        `}};yn([(0,fn.Cb)({type:Boolean})],vn.prototype,"disabled",void 0),yn([(0,fn.Cb)()],vn.prototype,"balance",void 0),yn([(0,fn.Cb)()],vn.prototype,"size",void 0),yn([(0,fn.Cb)()],vn.prototype,"label",void 0),yn([(0,fn.Cb)()],vn.prototype,"loadingLabel",void 0),yn([(0,fn.Cb)()],vn.prototype,"charsStart",void 0),yn([(0,fn.Cb)()],vn.prototype,"charsEnd",void 0),yn([(0,fn.SB)()],vn.prototype,"isAccount",void 0),vn=yn([(0,hn.customElement)("w3m-button")],vn);var xn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Cn=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=dn.IN.state.open,this.loading=dn.IN.state.loading,this.unsubscribe.push(dn.IN.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return pn.dy`
      <wui-connect-button
        size=${mn(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?dn.IN.close():dn.IN.open()}};xn([(0,fn.Cb)()],Cn.prototype,"size",void 0),xn([(0,fn.Cb)()],Cn.prototype,"label",void 0),xn([(0,fn.Cb)()],Cn.prototype,"loadingLabel",void 0),xn([(0,fn.SB)()],Cn.prototype,"open",void 0),xn([(0,fn.SB)()],Cn.prototype,"loading",void 0),Cn=xn([(0,hn.customElement)("w3m-connect-button")],Cn),a(6541);var En=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let _n=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=dn.NetworkController.state.caipNetwork,this.connected=dn.AccountController.state.isConnected,this.loading=dn.IN.state.loading,this.unsubscribe.push(dn.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)),dn.AccountController.subscribeKey("isConnected",(e=>this.connected=e)),dn.IN.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        imageSrc=${mn(dn.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){dn.IN.open({view:"Networks"})}};En([(0,fn.Cb)({type:Boolean})],_n.prototype,"disabled",void 0),En([(0,fn.SB)()],_n.prototype,"network",void 0),En([(0,fn.SB)()],_n.prototype,"connected",void 0),En([(0,fn.SB)()],_n.prototype,"loading",void 0),_n=En([(0,hn.customElement)("w3m-network-button")],_n);const kn=pn.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Sn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let An=class extends pn.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=dn.RouterController.state.view,this.unsubscribe.push(dn.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return pn.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return pn.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return pn.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return pn.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return pn.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return pn.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return pn.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return pn.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return pn.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return pn.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return pn.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return pn.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return pn.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return pn.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return pn.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return pn.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return pn.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return pn.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return pn.dy`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){const{history:t}=dn.RouterController.state;let r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};An.styles=kn,Sn([(0,fn.SB)()],An.prototype,"view",void 0),An=Sn([(0,hn.customElement)("w3m-router")],An);const In=pn.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var $n=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Pn=class extends pn.oi{constructor(){super(),this.usubscribe=[],this.address=dn.AccountController.state.address,this.profileImage=dn.AccountController.state.profileImage,this.profileName=dn.AccountController.state.profileName,this.balance=dn.AccountController.state.balance,this.balanceSymbol=dn.AccountController.state.balanceSymbol,this.network=dn.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(dn.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):dn.IN.close()})),dn.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=dn.fz.getNetworkImage(this.network);return pn.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${mn(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?hn.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):hn.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${dn.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${mn(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=dn.MO.getConnectedConnector(),t=dn.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(dn.bq.SECURE_SITE)?null:pn.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=dn.MO.getConnectedConnector(),t=dn.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return pn.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=dn.AccountController.state;return e?pn.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=dn.NetworkController.state,t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}onCopyAddress(){try{this.address&&(dn.j1.copyToClopboard(this.address),dn.SnackController.showSuccess("Address copied"))}catch{dn.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&dn.RouterController.push("Networks")}onTransactions(){dn.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),dn.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await dn.ConnectionController.disconnect(),dn.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),dn.IN.close()}catch{dn.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),dn.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=dn.AccountController.state;e&&dn.j1.openHref(e,"_blank")}onGoToUpgradeView(){dn.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),dn.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){dn.RouterController.push("UpdateEmailWallet",{email:e})}};Pn.styles=In,$n([(0,fn.SB)()],Pn.prototype,"address",void 0),$n([(0,fn.SB)()],Pn.prototype,"profileImage",void 0),$n([(0,fn.SB)()],Pn.prototype,"profileName",void 0),$n([(0,fn.SB)()],Pn.prototype,"balance",void 0),$n([(0,fn.SB)()],Pn.prototype,"balanceSymbol",void 0),$n([(0,fn.SB)()],Pn.prototype,"network",void 0),$n([(0,fn.SB)()],Pn.prototype,"disconecting",void 0),Pn=$n([(0,hn.customElement)("w3m-account-view")],Pn);var Tn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let On=class extends pn.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=dn.j1.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return pn.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?pn.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:pn.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return dn.j1.isMobile()?pn.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){dn.RouterController.push("ConnectingWalletConnect")}};Tn([(0,fn.SB)()],On.prototype,"search",void 0),On=Tn([(0,hn.customElement)("w3m-all-wallets-view")],On);const Nn=pn.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Rn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Mn=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.connectors=dn.ConnectorController.state.connectors,this.unsubscribe.push(dn.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(dn.j1.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?pn.dy`
      <wui-list-wallet
        imageSrc=${mn(dn.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=dn.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map((e=>pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{featured:e}=dn.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map((e=>pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return dn.MO.getRecentWallets().map((e=>pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const e=this.connectors.find((e=>"ANNOUNCED"===e.type));return this.connectors.map((t=>"INJECTED"!==t.type?null:dn.ConnectionController.checkInstalled()?pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getConnectorImage(t))}
          .installed=${Boolean(e)}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){const e=dn.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(dn.bq.CONNECTOR_RDNS_MAP[t.id])?null:pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const e=dn.ApiController.state.count+dn.ApiController.state.featured.length,t=e<10?e:10*Math.floor(e/10),r=t<e?`${t}+`:`${t}`;return pn.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{recommended:e}=dn.ApiController.state,{customWallets:t,featuredWalletIds:r}=dn.OptionsController.state,{connectors:n}=dn.ConnectorController.state,i=dn.MO.getRecentWallets(),o=n.filter((e=>"ANNOUNCED"===e.type));if(r||t||!e.length)return null;const a=o.length+i.length,s=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,s).map((e=>pn.dy`
        <wui-list-wallet
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?dn.j1.isMobile()?dn.RouterController.push("AllWallets"):dn.RouterController.push("ConnectingWalletConnect"):dn.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=dn.ConnectorController.state,r=dn.MO.getRecentWallets().map((e=>e.id)),n=t.map((e=>e.info?.rdns)).filter(Boolean);return e.filter((e=>!r.includes(e.id)&&!n.includes(e.rdns??void 0)))}onAllWallets(){dn.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),dn.RouterController.push("AllWallets")}onConnectWallet(e){dn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Mn.styles=Nn,Rn([(0,fn.SB)()],Mn.prototype,"connectors",void 0),Mn=Rn([(0,hn.customElement)("w3m-connect-view")],Mn);const jn=pn.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Un=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class Ln extends pn.oi{constructor(){super(),this.wallet=dn.RouterController.state.data?.wallet,this.connector=dn.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=dn.fz.getWalletImage(this.wallet)??dn.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=dn.ConnectionController.state.wcUri,this.error=dn.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(dn.ConnectionController.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),dn.ConnectionController.subscribeKey("wcError",(e=>this.error=e)),dn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),pn.dy`
      <wui-flex
        data-error=${mn(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${mn(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?pn.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(dn.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=dn.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return pn.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(dn.j1.copyToClopboard(this.uri),dn.SnackController.showSuccess("Link copied"))}catch{dn.SnackController.showError("Failed to copy")}}}Ln.styles=jn,Un([(0,fn.SB)()],Ln.prototype,"uri",void 0),Un([(0,fn.SB)()],Ln.prototype,"error",void 0),Un([(0,fn.SB)()],Ln.prototype,"ready",void 0),Un([(0,fn.SB)()],Ln.prototype,"showRetry",void 0),Un([(0,fn.SB)()],Ln.prototype,"buffering",void 0),Un([(0,fn.Cb)({type:Boolean})],Ln.prototype,"isMobile",void 0),Un([(0,fn.Cb)()],Ln.prototype,"onRetry",void 0);const Bn={INJECTED:"browser",ANNOUNCED:"browser"};let Dn=class extends Ln{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Bn[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&dn.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await dn.ConnectionController.connectExternal(this.connector),dn.yD.state.isSiweEnabled?dn.RouterController.push("ConnectingSiwe"):dn.IN.close(),dn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){dn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Dn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-external-view")],Dn);var zn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fn=class extends pn.oi{constructor(){super(...arguments),this.dappName=dn.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return pn.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,dn.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{dn.yD.setStatus("loading");const e=await dn.yD.signIn();return dn.yD.setStatus("success"),dn.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return dn.SnackController.showError("Signature declined"),dn.yD.setStatus("error"),dn.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=dn.AccountController.state;e?(await dn.ConnectionController.disconnect(),dn.IN.close()):dn.RouterController.push("Connect"),dn.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};zn([(0,fn.SB)()],Fn.prototype,"isSigning",void 0),Fn=zn([(0,hn.customElement)("w3m-connecting-siwe-view")],Fn);var Wn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Hn=class extends pn.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=dn.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),dn.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),pn.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):pn.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=dn.ConnectionController.state;if(e||dn.j1.isPairingExpired(t)){if(dn.ConnectionController.connectWalletConnect(),this.wallet){const e=dn.fz.getWalletImage(this.wallet);e&&dn.MO.setConnectedWalletImageUrl(e)}else{const e=dn.ConnectorController.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=dn.fz.getConnectorImage(e);t&&dn.MO.setConnectedWalletImageUrl(t)}await dn.ConnectionController.state.wcPromise,this.finalizeConnection(),dn.yD.state.isSiweEnabled?dn.RouterController.push("ConnectingSiwe"):dn.IN.close()}}catch(e){dn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),dn.ConnectionController.setWcError(!0),dn.j1.isAllowedRetry(this.lastRetry)&&(dn.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=dn.ConnectionController.state;e&&dn.MO.setWalletConnectDeepLink(e),t&&dn.MO.setWeb3ModalRecent(t),dn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=n?.map((({injected_id:e})=>e)).filter(Boolean),a=i?[i]:o??[],s=a.length,c=e,l=r,u=dn.ConnectionController.checkInstalled(a),d=s&&u,h=t&&!dn.j1.isMobile();d&&this.platforms.push("browser"),c&&this.platforms.push(dn.j1.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return pn.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return pn.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return pn.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return pn.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return pn.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return pn.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?pn.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Wn([(0,fn.SB)()],Hn.prototype,"platform",void 0),Wn([(0,fn.SB)()],Hn.prototype,"platforms",void 0),Hn=Wn([(0,hn.customElement)("w3m-connecting-wc-view")],Hn);let Gn=class extends pn.oi{constructor(){super(...arguments),this.wallet=dn.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return pn.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?pn.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?pn.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?pn.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?pn.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&dn.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&dn.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&dn.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&dn.j1.openHref(this.wallet.homepage,"_blank")}};Gn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-downloads-view")],Gn);let Zn=class extends pn.oi{render(){return pn.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{dn.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=dn.ApiController.state,{customWallets:r}=dn.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map((e=>pn.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          @click=${()=>{dn.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};Zn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-get-wallet-view")],Zn);const Vn=pn.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var qn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Kn=class extends pn.oi{constructor(){super(),this.network=dn.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return pn.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${mn(dn.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:pn.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await dn.NetworkController.switchActiveNetwork(this.network),dn.yD.state.isSiweEnabled||dn._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Kn.styles=Vn,qn([(0,fn.SB)()],Kn.prototype,"showRetry",void 0),qn([(0,fn.SB)()],Kn.prototype,"error",void 0),Kn=qn([(0,hn.customElement)("w3m-network-switch-view")],Kn);const Yn=pn.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Xn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Jn=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=dn.NetworkController.state.caipNetwork,this.unsubscribe.push(dn.NetworkController.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){dn.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),dn.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=dn.NetworkController.state,n=e,i=t,o={};return i&&n&&(n.forEach(((e,t)=>{o[e]=t})),i.sort(((e,t)=>{const r=o[e.id],n=o[t.id];return void 0!==r&&void 0!==n?r-n:void 0!==r?-1:void 0!==n?1:0}))),i?.map((e=>pn.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${mn(dn.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!n?.includes(e.id)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=dn.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=dn.NetworkController.state,{data:o}=dn.RouterController.state;t&&i?.id!==e.id?r?.includes(e.id)?(await dn.NetworkController.switchActiveNetwork(e),dn._4.navigateAfterNetworkSwitch()):n&&dn.RouterController.push("SwitchNetwork",{...o,network:e}):t||(dn.NetworkController.setCaipNetwork(e),dn.RouterController.push("Connect"))}};Jn.styles=Yn,Xn([(0,fn.SB)()],Jn.prototype,"caipNetwork",void 0),Jn=Xn([(0,hn.customElement)("w3m-networks-view")],Jn);var Qn=a(248);const ei=pn.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var ti=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const ri="last-transaction";let ni=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=dn.AccountController.state.address,this.transactions=dn.sl.state.transactions,this.transactionsByYear=dn.sl.state.transactionsByYear,this.loading=dn.sl.state.loading,this.empty=dn.sl.state.empty,this.next=dn.sl.state.next,this.unsubscribe.push(dn.AccountController.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,dn.sl.resetTransactions(),dn.sl.fetchTransactions(e.address))})),dn.sl.subscribe((e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){0===this.transactions.length&&dn.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,r)=>{const n=r===e.length-1,i=parseInt(t,10),o=hn.TransactionUtil.getTransactionGroupTitle(i),a=this.transactionsByYear[i];return a?pn.dy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,n)}
          </wui-flex>
        </wui-flex>
      `:null}))}templateRenderTransaction(e,t){const{date:r,descriptions:n,direction:i,isAllNFT:o,images:a,status:s,transfers:c,type:l}=this.getTransactionListItemProps(e),u=c?.length>1;return 2!==c?.length||o?u?c.map(((e,n)=>{const i=hn.TransactionUtil.getTransferDescription(e),o=t&&n===c.length-1;return pn.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?ri:""}
          status=${s}
          type=${l}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):pn.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${t&&this.next?ri:""}
        status=${s}
        type=${l}
        .images=${a}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `:pn.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${t&&this.next?ri:""}
          status=${s}
          type=${l}
          .images=${a}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map(((r,n)=>{const i=t&&n===e.length-1;return pn.dy`${this.templateRenderTransaction(r,i)}`}))}templateEmpty(){return pn.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(pn.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}createPaginationObserver(){const{projectId:e}=dn.OptionsController.state;this.paginationObserver=new IntersectionObserver((([t])=>{t?.isIntersecting&&!this.loading&&(dn.sl.fetchTransactions(this.address),dn.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${ri}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=Qn.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=hn.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,i=e?.transfers?.[0],o=Boolean(i)&&e?.transfers?.every((e=>Boolean(e.nft_info))),a=hn.TransactionUtil.getTransactionImages(n);return{date:t,direction:i?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};ni.styles=ei,ti([(0,fn.SB)()],ni.prototype,"address",void 0),ti([(0,fn.SB)()],ni.prototype,"transactions",void 0),ti([(0,fn.SB)()],ni.prototype,"transactionsByYear",void 0),ti([(0,fn.SB)()],ni.prototype,"loading",void 0),ti([(0,fn.SB)()],ni.prototype,"empty",void 0),ti([(0,fn.SB)()],ni.prototype,"next",void 0),ni=ti([(0,hn.customElement)("w3m-transactions-view")],ni);const ii=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let oi=class extends pn.oi{render(){return pn.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ii}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{dn.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};oi=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-what-is-a-network-view")],oi);const ai=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let si=class extends pn.oi{render(){return pn.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ai}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){dn.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),dn.RouterController.push("GetWallet")}};si=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-what-is-a-wallet-view")],si);const ci=pn.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,li={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR"};var ui,di;!function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={};for(const r of e)t[r]=r;return t},e.getValidEnumValues=t=>{const r=e.objectKeys(t).filter((e=>"number"!=typeof t[t[e]])),n={};for(const e of r)n[e]=t[e];return e.objectValues(n)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(const r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t}(ui||(ui={})),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(di||(di={}));const hi=ui.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),pi=e=>{switch(typeof e){case"undefined":return hi.undefined;case"string":return hi.string;case"number":return isNaN(e)?hi.nan:hi.number;case"boolean":return hi.boolean;case"function":return hi.function;case"bigint":return hi.bigint;case"symbol":return hi.symbol;case"object":return Array.isArray(e)?hi.array:null===e?hi.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?hi.promise:"undefined"!=typeof Map&&e instanceof Map?hi.map:"undefined"!=typeof Set&&e instanceof Set?hi.set:"undefined"!=typeof Date&&e instanceof Date?hi.date:hi.object;default:return hi.unknown}},fi=ui.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class gi extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},r={_errors:[]},n=e=>{for(const i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(n);else if("invalid_return_type"===i.code)n(i.returnTypeError);else if("invalid_arguments"===i.code)n(i.argumentsError);else if(0===i.path.length)r._errors.push(t(i));else{let e=r,n=0;for(;n<i.path.length;){const r=i.path[n];n===i.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(i))):e[r]=e[r]||{_errors:[]},e=e[r],n++}}};return n(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,ui.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=(e=>e.message)){const t={},r=[];for(const n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}gi.create=e=>new gi(e);const mi=(e,t)=>{let r;switch(e.code){case fi.invalid_type:r=e.received===hi.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case fi.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,ui.jsonStringifyReplacer)}`;break;case fi.unrecognized_keys:r=`Unrecognized key(s) in object: ${ui.joinValues(e.keys,", ")}`;break;case fi.invalid_union:r="Invalid input";break;case fi.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ui.joinValues(e.options)}`;break;case fi.invalid_enum_value:r=`Invalid enum value. Expected ${ui.joinValues(e.options)}, received '${e.received}'`;break;case fi.invalid_arguments:r="Invalid function arguments";break;case fi.invalid_return_type:r="Invalid function return type";break;case fi.invalid_date:r="Invalid date";break;case fi.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:ui.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case fi.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case fi.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case fi.custom:r="Invalid input";break;case fi.invalid_intersection_types:r="Intersection results could not be merged";break;case fi.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case fi.not_finite:r="Number must be finite";break;default:r=t.defaultError,ui.assertNever(e)}return{message:r}};let wi=mi;function bi(){return wi}const yi=e=>{const{data:t,path:r,errorMaps:n,issueData:i}=e,o=[...r,...i.path||[]],a={...i,path:o};let s="";const c=n.filter((e=>!!e)).slice().reverse();for(const e of c)s=e(a,{data:t,defaultError:s}).message;return{...i,path:o,message:i.message||s}};function vi(e,t){const r=yi({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,bi(),mi].filter((e=>!!e))});e.common.issues.push(r)}class xi{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const n of t){if("aborted"===n.status)return Ci;"dirty"===n.status&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const e of t)r.push({key:await e.key,value:await e.value});return xi.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const n of t){const{key:t,value:i}=n;if("aborted"===t.status)return Ci;if("aborted"===i.status)return Ci;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"===t.value||void 0===i.value&&!n.alwaysSet||(r[t.value]=i.value)}return{status:e.value,value:r}}}const Ci=Object.freeze({status:"aborted"}),Ei=e=>({status:"dirty",value:e}),_i=e=>({status:"valid",value:e}),ki=e=>"aborted"===e.status,Si=e=>"dirty"===e.status,Ai=e=>"valid"===e.status,Ii=e=>"undefined"!=typeof Promise&&e instanceof Promise;var $i;!function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}($i||($i={}));class Pi{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ti=(e,t)=>{if(Ai(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new gi(e.common.issues);return this._error=t,this._error}}};function Oi(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:n,description:i}=e;if(t&&(r||n))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=n?n:t.defaultError}:{message:null!=r?r:t.defaultError},description:i}}class Ni{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return pi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:pi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new xi,ctx:{common:e.parent.common,data:e.data,parsedType:pi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Ii(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const n={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:pi(e)},i=this._parseSync({data:e,path:n.path,parent:n});return Ti(n,i)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:pi(e)},n=this._parse({data:e,path:r.path,parent:r}),i=await(Ii(n)?n:Promise.resolve(n));return Ti(r,i)}refine(e,t){const r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement(((t,n)=>{const i=e(t),o=()=>n.addIssue({code:fi.custom,...r(t)});return"undefined"!=typeof Promise&&i instanceof Promise?i.then((e=>!!e||(o(),!1))):!!i||(o(),!1)}))}refinement(e,t){return this._refinement(((r,n)=>!!e(r)||(n.addIssue("function"==typeof t?t(r,n):t),!1)))}_refinement(e){return new xo({schema:this,typeName:No.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Co.create(this,this._def)}nullable(){return Eo.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return to.create(this,this._def)}promise(){return vo.create(this,this._def)}or(e){return io.create([this,e],this._def)}and(e){return co.create(this,e,this._def)}transform(e){return new xo({...Oi(this._def),schema:this,typeName:No.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new _o({...Oi(this._def),innerType:this,defaultValue:t,typeName:No.ZodDefault})}brand(){return new Io({typeName:No.ZodBranded,type:this,...Oi(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new ko({...Oi(this._def),innerType:this,catchValue:t,typeName:No.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return $o.create(this,e)}readonly(){return Po.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ri=/^c[^\s-]{8,}$/i,Mi=/^[a-z][a-z0-9]*$/,ji=/^[0-9A-HJKMNP-TV-Z]{26}$/,Ui=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Li=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let Bi;const Di=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,zi=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class Fi extends Ni{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==hi.string){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.string,received:t.parsedType}),Ci}const t=new xi;let r;for(const a of this._def.checks)if("min"===a.kind)e.data.length<a.value&&(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),t.dirty());else if("max"===a.kind)e.data.length>a.value&&(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),t.dirty());else if("length"===a.kind){const n=e.data.length>a.value,i=e.data.length<a.value;(n||i)&&(r=this._getOrReturnCtx(e,r),n?vi(r,{code:fi.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):i&&vi(r,{code:fi.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),t.dirty())}else if("email"===a.kind)Li.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"email",code:fi.invalid_string,message:a.message}),t.dirty());else if("emoji"===a.kind)Bi||(Bi=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),Bi.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"emoji",code:fi.invalid_string,message:a.message}),t.dirty());else if("uuid"===a.kind)Ui.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"uuid",code:fi.invalid_string,message:a.message}),t.dirty());else if("cuid"===a.kind)Ri.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"cuid",code:fi.invalid_string,message:a.message}),t.dirty());else if("cuid2"===a.kind)Mi.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"cuid2",code:fi.invalid_string,message:a.message}),t.dirty());else if("ulid"===a.kind)ji.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"ulid",code:fi.invalid_string,message:a.message}),t.dirty());else if("url"===a.kind)try{new URL(e.data)}catch(n){r=this._getOrReturnCtx(e,r),vi(r,{validation:"url",code:fi.invalid_string,message:a.message}),t.dirty()}else"regex"===a.kind?(a.regex.lastIndex=0,a.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{validation:"regex",code:fi.invalid_string,message:a.message}),t.dirty())):"trim"===a.kind?e.data=e.data.trim():"includes"===a.kind?e.data.includes(a.value,a.position)||(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),t.dirty()):"toLowerCase"===a.kind?e.data=e.data.toLowerCase():"toUpperCase"===a.kind?e.data=e.data.toUpperCase():"startsWith"===a.kind?e.data.startsWith(a.value)||(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.invalid_string,validation:{startsWith:a.value},message:a.message}),t.dirty()):"endsWith"===a.kind?e.data.endsWith(a.value)||(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.invalid_string,validation:{endsWith:a.value},message:a.message}),t.dirty()):"datetime"===a.kind?((o=a).precision?o.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}Z$`):0===o.precision?o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.invalid_string,validation:"datetime",message:a.message}),t.dirty()):"ip"===a.kind?(n=e.data,("v4"!==(i=a.version)&&i||!Di.test(n))&&("v6"!==i&&i||!zi.test(n))&&(r=this._getOrReturnCtx(e,r),vi(r,{validation:"ip",code:fi.invalid_string,message:a.message}),t.dirty())):ui.assertNever(a);var n,i,o;return{status:t.value,value:e.data}}_regex(e,t,r){return this.refinement((t=>e.test(t)),{validation:t,code:fi.invalid_string,...$i.errToObj(r)})}_addCheck(e){return new Fi({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...$i.errToObj(e)})}url(e){return this._addCheck({kind:"url",...$i.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...$i.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...$i.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...$i.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...$i.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...$i.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...$i.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...$i.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...$i.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...$i.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...$i.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...$i.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...$i.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...$i.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...$i.errToObj(t)})}nonempty(e){return this.min(1,$i.errToObj(e))}trim(){return new Fi({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Fi({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Fi({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function Wi(e,t){const r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,i=r>n?r:n;return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}Fi.create=e=>{var t;return new Fi({checks:[],typeName:No.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Oi(e)})};class Hi extends Ni{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==hi.number){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.number,received:t.parsedType}),Ci}let t;const r=new xi;for(const n of this._def.checks)"int"===n.kind?ui.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.invalid_type,expected:"integer",received:"float",message:n.message}),r.dirty()):"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),r.dirty()):"multipleOf"===n.kind?0!==Wi(e.data,n.value)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):"finite"===n.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.not_finite,message:n.message}),r.dirty()):ui.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,$i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,$i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,$i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,$i.toString(t))}setLimit(e,t,r,n){return new Hi({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:$i.toString(n)}]})}_addCheck(e){return new Hi({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:$i.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:$i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:$i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:$i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:$i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:$i.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:$i.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:$i.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:$i.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&ui.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Hi.create=e=>new Hi({checks:[],typeName:No.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...Oi(e)});class Gi extends Ni{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==hi.bigint){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.bigint,received:t.parsedType}),Ci}let t;const r=new xi;for(const n of this._def.checks)"min"===n.kind?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"max"===n.kind?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),r.dirty()):"multipleOf"===n.kind?e.data%n.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),vi(t,{code:fi.not_multiple_of,multipleOf:n.value,message:n.message}),r.dirty()):ui.assertNever(n);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,$i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,$i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,$i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,$i.toString(t))}setLimit(e,t,r,n){return new Gi({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:$i.toString(n)}]})}_addCheck(e){return new Gi({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:$i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:$i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:$i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:$i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:$i.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}Gi.create=e=>{var t;return new Gi({checks:[],typeName:No.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Oi(e)})};class Zi extends Ni{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==hi.boolean){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.boolean,received:t.parsedType}),Ci}return _i(e.data)}}Zi.create=e=>new Zi({typeName:No.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...Oi(e)});class Vi extends Ni{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==hi.date){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.date,received:t.parsedType}),Ci}if(isNaN(e.data.getTime()))return vi(this._getOrReturnCtx(e),{code:fi.invalid_date}),Ci;const t=new xi;let r;for(const n of this._def.checks)"min"===n.kind?e.data.getTime()<n.value&&(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),t.dirty()):"max"===n.kind?e.data.getTime()>n.value&&(r=this._getOrReturnCtx(e,r),vi(r,{code:fi.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),t.dirty()):ui.assertNever(n);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Vi({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:$i.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:$i.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}Vi.create=e=>new Vi({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:No.ZodDate,...Oi(e)});class qi extends Ni{_parse(e){if(this._getType(e)!==hi.symbol){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.symbol,received:t.parsedType}),Ci}return _i(e.data)}}qi.create=e=>new qi({typeName:No.ZodSymbol,...Oi(e)});class Ki extends Ni{_parse(e){if(this._getType(e)!==hi.undefined){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.undefined,received:t.parsedType}),Ci}return _i(e.data)}}Ki.create=e=>new Ki({typeName:No.ZodUndefined,...Oi(e)});class Yi extends Ni{_parse(e){if(this._getType(e)!==hi.null){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.null,received:t.parsedType}),Ci}return _i(e.data)}}Yi.create=e=>new Yi({typeName:No.ZodNull,...Oi(e)});class Xi extends Ni{constructor(){super(...arguments),this._any=!0}_parse(e){return _i(e.data)}}Xi.create=e=>new Xi({typeName:No.ZodAny,...Oi(e)});class Ji extends Ni{constructor(){super(...arguments),this._unknown=!0}_parse(e){return _i(e.data)}}Ji.create=e=>new Ji({typeName:No.ZodUnknown,...Oi(e)});class Qi extends Ni{_parse(e){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.never,received:t.parsedType}),Ci}}Qi.create=e=>new Qi({typeName:No.ZodNever,...Oi(e)});class eo extends Ni{_parse(e){if(this._getType(e)!==hi.undefined){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.void,received:t.parsedType}),Ci}return _i(e.data)}}eo.create=e=>new eo({typeName:No.ZodVoid,...Oi(e)});class to extends Ni{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==hi.array)return vi(t,{code:fi.invalid_type,expected:hi.array,received:t.parsedType}),Ci;if(null!==n.exactLength){const e=t.data.length>n.exactLength.value,i=t.data.length<n.exactLength.value;(e||i)&&(vi(t,{code:e?fi.too_big:fi.too_small,minimum:i?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(null!==n.minLength&&t.data.length<n.minLength.value&&(vi(t,{code:fi.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),null!==n.maxLength&&t.data.length>n.maxLength.value&&(vi(t,{code:fi.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map(((e,r)=>n.type._parseAsync(new Pi(t,e,t.path,r))))).then((e=>xi.mergeArray(r,e)));const i=[...t.data].map(((e,r)=>n.type._parseSync(new Pi(t,e,t.path,r))));return xi.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new to({...this._def,minLength:{value:e,message:$i.toString(t)}})}max(e,t){return new to({...this._def,maxLength:{value:e,message:$i.toString(t)}})}length(e,t){return new to({...this._def,exactLength:{value:e,message:$i.toString(t)}})}nonempty(e){return this.min(1,e)}}function ro(e){if(e instanceof no){const t={};for(const r in e.shape){const n=e.shape[r];t[r]=Co.create(ro(n))}return new no({...e._def,shape:()=>t})}return e instanceof to?new to({...e._def,type:ro(e.element)}):e instanceof Co?Co.create(ro(e.unwrap())):e instanceof Eo?Eo.create(ro(e.unwrap())):e instanceof lo?lo.create(e.items.map((e=>ro(e)))):e}to.create=(e,t)=>new to({type:e,minLength:null,maxLength:null,exactLength:null,typeName:No.ZodArray,...Oi(t)});class no extends Ni{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=ui.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==hi.object){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.object,received:t.parsedType}),Ci}const{status:t,ctx:r}=this._processInputParams(e),{shape:n,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof Qi&&"strip"===this._def.unknownKeys))for(const e in r.data)i.includes(e)||o.push(e);const a=[];for(const e of i){const t=n[e],i=r.data[e];a.push({key:{status:"valid",value:e},value:t._parse(new Pi(r,i,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof Qi){const e=this._def.unknownKeys;if("passthrough"===e)for(const e of o)a.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(vi(r,{code:fi.unrecognized_keys,keys:o}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of o){const n=r.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new Pi(r,n,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of a){const r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>xi.mergeObjectSync(t,e))):xi.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return $i.errToObj,new no({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var n,i,o,a;const s=null!==(o=null===(i=(n=this._def).errorMap)||void 0===i?void 0:i.call(n,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=$i.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new no({...this._def,unknownKeys:"strip"})}passthrough(){return new no({...this._def,unknownKeys:"passthrough"})}extend(e){return new no({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new no({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:No.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new no({...this._def,catchall:e})}pick(e){const t={};return ui.objectKeys(e).forEach((r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])})),new no({...this._def,shape:()=>t})}omit(e){const t={};return ui.objectKeys(this.shape).forEach((r=>{e[r]||(t[r]=this.shape[r])})),new no({...this._def,shape:()=>t})}deepPartial(){return ro(this)}partial(e){const t={};return ui.objectKeys(this.shape).forEach((r=>{const n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()})),new no({...this._def,shape:()=>t})}required(e){const t={};return ui.objectKeys(this.shape).forEach((r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof Co;)e=e._def.innerType;t[r]=e}})),new no({...this._def,shape:()=>t})}keyof(){return wo(ui.objectKeys(this.shape))}}no.create=(e,t)=>new no({shape:()=>e,unknownKeys:"strip",catchall:Qi.create(),typeName:No.ZodObject,...Oi(t)}),no.strictCreate=(e,t)=>new no({shape:()=>e,unknownKeys:"strict",catchall:Qi.create(),typeName:No.ZodObject,...Oi(t)}),no.lazycreate=(e,t)=>new no({shape:e,unknownKeys:"strip",catchall:Qi.create(),typeName:No.ZodObject,...Oi(t)});class io extends Ni{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map((async e=>{const r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const r=e.map((e=>new gi(e.ctx.common.issues)));return vi(t,{code:fi.invalid_union,unionErrors:r}),Ci}));{let e;const n=[];for(const i of r){const r={...t,common:{...t.common,issues:[]},parent:null},o=i._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&n.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const i=n.map((e=>new gi(e)));return vi(t,{code:fi.invalid_union,unionErrors:i}),Ci}}get options(){return this._def.options}}io.create=(e,t)=>new io({options:e,typeName:No.ZodUnion,...Oi(t)});const oo=e=>e instanceof go?oo(e.schema):e instanceof xo?oo(e.innerType()):e instanceof mo?[e.value]:e instanceof bo?e.options:e instanceof yo?Object.keys(e.enum):e instanceof _o?oo(e._def.innerType):e instanceof Ki?[void 0]:e instanceof Yi?[null]:null;class ao extends Ni{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==hi.object)return vi(t,{code:fi.invalid_type,expected:hi.object,received:t.parsedType}),Ci;const r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(vi(t,{code:fi.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ci)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const n=new Map;for(const r of t){const t=oo(r.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const i of t){if(n.has(i))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);n.set(i,r)}}return new ao({typeName:No.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...Oi(r)})}}function so(e,t){const r=pi(e),n=pi(t);if(e===t)return{valid:!0,data:e};if(r===hi.object&&n===hi.object){const r=ui.objectKeys(t),n=ui.objectKeys(e).filter((e=>-1!==r.indexOf(e))),i={...e,...t};for(const r of n){const n=so(e[r],t[r]);if(!n.valid)return{valid:!1};i[r]=n.data}return{valid:!0,data:i}}if(r===hi.array&&n===hi.array){if(e.length!==t.length)return{valid:!1};const r=[];for(let n=0;n<e.length;n++){const i=so(e[n],t[n]);if(!i.valid)return{valid:!1};r.push(i.data)}return{valid:!0,data:r}}return r===hi.date&&n===hi.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class co extends Ni{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=(e,n)=>{if(ki(e)||ki(n))return Ci;const i=so(e.value,n.value);return i.valid?((Si(e)||Si(n))&&t.dirty(),{status:t.value,value:i.data}):(vi(r,{code:fi.invalid_intersection_types}),Ci)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then((([e,t])=>n(e,t))):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}co.create=(e,t,r)=>new co({left:e,right:t,typeName:No.ZodIntersection,...Oi(r)});class lo extends Ni{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==hi.array)return vi(r,{code:fi.invalid_type,expected:hi.array,received:r.parsedType}),Ci;if(r.data.length<this._def.items.length)return vi(r,{code:fi.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ci;!this._def.rest&&r.data.length>this._def.items.length&&(vi(r,{code:fi.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...r.data].map(((e,t)=>{const n=this._def.items[t]||this._def.rest;return n?n._parse(new Pi(r,e,r.path,t)):null})).filter((e=>!!e));return r.common.async?Promise.all(n).then((e=>xi.mergeArray(t,e))):xi.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new lo({...this._def,rest:e})}}lo.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new lo({items:e,typeName:No.ZodTuple,rest:null,...Oi(t)})};class uo extends Ni{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==hi.object)return vi(r,{code:fi.invalid_type,expected:hi.object,received:r.parsedType}),Ci;const n=[],i=this._def.keyType,o=this._def.valueType;for(const e in r.data)n.push({key:i._parse(new Pi(r,e,r.path,e)),value:o._parse(new Pi(r,r.data[e],r.path,e))});return r.common.async?xi.mergeObjectAsync(t,n):xi.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return new uo(t instanceof Ni?{keyType:e,valueType:t,typeName:No.ZodRecord,...Oi(r)}:{keyType:Fi.create(),valueType:e,typeName:No.ZodRecord,...Oi(t)})}}class ho extends Ni{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==hi.map)return vi(r,{code:fi.invalid_type,expected:hi.map,received:r.parsedType}),Ci;const n=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map((([e,t],o)=>({key:n._parse(new Pi(r,e,r.path,[o,"key"])),value:i._parse(new Pi(r,t,r.path,[o,"value"]))})));if(r.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const r of o){const n=await r.key,i=await r.value;if("aborted"===n.status||"aborted"===i.status)return Ci;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const r of o){const n=r.key,i=r.value;if("aborted"===n.status||"aborted"===i.status)return Ci;"dirty"!==n.status&&"dirty"!==i.status||t.dirty(),e.set(n.value,i.value)}return{status:t.value,value:e}}}}ho.create=(e,t,r)=>new ho({valueType:t,keyType:e,typeName:No.ZodMap,...Oi(r)});class po extends Ni{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==hi.set)return vi(r,{code:fi.invalid_type,expected:hi.set,received:r.parsedType}),Ci;const n=this._def;null!==n.minSize&&r.data.size<n.minSize.value&&(vi(r,{code:fi.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),null!==n.maxSize&&r.data.size>n.maxSize.value&&(vi(r,{code:fi.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const i=this._def.valueType;function o(e){const r=new Set;for(const n of e){if("aborted"===n.status)return Ci;"dirty"===n.status&&t.dirty(),r.add(n.value)}return{status:t.value,value:r}}const a=[...r.data.values()].map(((e,t)=>i._parse(new Pi(r,e,r.path,t))));return r.common.async?Promise.all(a).then((e=>o(e))):o(a)}min(e,t){return new po({...this._def,minSize:{value:e,message:$i.toString(t)}})}max(e,t){return new po({...this._def,maxSize:{value:e,message:$i.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}po.create=(e,t)=>new po({valueType:e,minSize:null,maxSize:null,typeName:No.ZodSet,...Oi(t)});class fo extends Ni{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==hi.function)return vi(t,{code:fi.invalid_type,expected:hi.function,received:t.parsedType}),Ci;function r(e,r){return yi({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,bi(),mi].filter((e=>!!e)),issueData:{code:fi.invalid_arguments,argumentsError:r}})}function n(e,r){return yi({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,bi(),mi].filter((e=>!!e)),issueData:{code:fi.invalid_return_type,returnTypeError:r}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof vo){const e=this;return _i((async function(...t){const a=new gi([]),s=await e._def.args.parseAsync(t,i).catch((e=>{throw a.addIssue(r(t,e)),a})),c=await Reflect.apply(o,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch((e=>{throw a.addIssue(n(c,e)),a}))}))}{const e=this;return _i((function(...t){const a=e._def.args.safeParse(t,i);if(!a.success)throw new gi([r(t,a.error)]);const s=Reflect.apply(o,this,a.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new gi([n(s,c.error)]);return c.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new fo({...this._def,args:lo.create(e).rest(Ji.create())})}returns(e){return new fo({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new fo({args:e||lo.create([]).rest(Ji.create()),returns:t||Ji.create(),typeName:No.ZodFunction,...Oi(r)})}}class go extends Ni{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}go.create=(e,t)=>new go({getter:e,typeName:No.ZodLazy,...Oi(t)});class mo extends Ni{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return vi(t,{received:t.data,code:fi.invalid_literal,expected:this._def.value}),Ci}return{status:"valid",value:e.data}}get value(){return this._def.value}}function wo(e,t){return new bo({values:e,typeName:No.ZodEnum,...Oi(t)})}mo.create=(e,t)=>new mo({value:e,typeName:No.ZodLiteral,...Oi(t)});class bo extends Ni{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),r=this._def.values;return vi(t,{expected:ui.joinValues(r),received:t.parsedType,code:fi.invalid_type}),Ci}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return vi(t,{received:t.data,code:fi.invalid_enum_value,options:r}),Ci}return _i(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return bo.create(e)}exclude(e){return bo.create(this.options.filter((t=>!e.includes(t))))}}bo.create=wo;class yo extends Ni{_parse(e){const t=ui.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==hi.string&&r.parsedType!==hi.number){const e=ui.objectValues(t);return vi(r,{expected:ui.joinValues(e),received:r.parsedType,code:fi.invalid_type}),Ci}if(-1===t.indexOf(e.data)){const e=ui.objectValues(t);return vi(r,{received:r.data,code:fi.invalid_enum_value,options:e}),Ci}return _i(e.data)}get enum(){return this._def.values}}yo.create=(e,t)=>new yo({values:e,typeName:No.ZodNativeEnum,...Oi(t)});class vo extends Ni{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==hi.promise&&!1===t.common.async)return vi(t,{code:fi.invalid_type,expected:hi.promise,received:t.parsedType}),Ci;const r=t.parsedType===hi.promise?t.data:Promise.resolve(t.data);return _i(r.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}vo.create=(e,t)=>new vo({type:e,typeName:No.ZodPromise,...Oi(t)});class xo extends Ni{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===No.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:e=>{vi(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===n.type){const e=n.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r}))):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===n.type){const e=e=>{const t=n.refinement(e,i);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===r.common.async){const n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===n.status?Ci:("dirty"===n.status&&t.dirty(),e(n.value),{status:t.value,value:n.value})}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((r=>"aborted"===r.status?Ci:("dirty"===r.status&&t.dirty(),e(r.value).then((()=>({status:t.value,value:r.value}))))))}if("transform"===n.type){if(!1===r.common.async){const e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ai(e))return e;const o=n.transform(e.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((e=>Ai(e)?Promise.resolve(n.transform(e.value,i)).then((e=>({status:t.value,value:e}))):e))}ui.assertNever(n)}}xo.create=(e,t,r)=>new xo({schema:e,typeName:No.ZodEffects,effect:t,...Oi(r)}),xo.createWithPreprocess=(e,t,r)=>new xo({schema:t,effect:{type:"preprocess",transform:e},typeName:No.ZodEffects,...Oi(r)});class Co extends Ni{_parse(e){return this._getType(e)===hi.undefined?_i(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Co.create=(e,t)=>new Co({innerType:e,typeName:No.ZodOptional,...Oi(t)});class Eo extends Ni{_parse(e){return this._getType(e)===hi.null?_i(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Eo.create=(e,t)=>new Eo({innerType:e,typeName:No.ZodNullable,...Oi(t)});class _o extends Ni{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===hi.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}_o.create=(e,t)=>new _o({innerType:e,typeName:No.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...Oi(t)});class ko extends Ni{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Ii(n)?n.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new gi(r.common.issues)},input:r.data})}))):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new gi(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ko.create=(e,t)=>new ko({innerType:e,typeName:No.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...Oi(t)});class So extends Ni{_parse(e){if(this._getType(e)!==hi.nan){const t=this._getOrReturnCtx(e);return vi(t,{code:fi.invalid_type,expected:hi.nan,received:t.parsedType}),Ci}return{status:"valid",value:e.data}}}So.create=e=>new So({typeName:No.ZodNaN,...Oi(e)});const Ao=Symbol("zod_brand");class Io extends Ni{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class $o extends Ni{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Ci:"dirty"===e.status?(t.dirty(),Ei(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{const e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Ci:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new $o({in:e,out:t,typeName:No.ZodPipeline})}}class Po extends Ni{_parse(e){const t=this._def.innerType._parse(e);return Ai(t)&&(t.value=Object.freeze(t.value)),t}}Po.create=(e,t)=>new Po({innerType:e,typeName:No.ZodReadonly,...Oi(t)});const To=(e,t={},r)=>e?Xi.create().superRefine(((n,i)=>{var o,a;if(!e(n)){const e="function"==typeof t?t(n):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a,c="string"==typeof e?{message:e}:e;i.addIssue({code:"custom",...c,fatal:s})}})):Xi.create(),Oo={object:no.lazycreate};var No;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(No||(No={}));const Ro=Fi.create,Mo=Hi.create,jo=So.create,Uo=Gi.create,Lo=Zi.create,Bo=Vi.create,Do=qi.create,zo=Ki.create,Fo=Yi.create,Wo=Xi.create,Ho=Ji.create,Go=Qi.create,Zo=eo.create,Vo=to.create,qo=no.create,Ko=no.strictCreate,Yo=io.create,Xo=ao.create,Jo=co.create,Qo=lo.create,ea=uo.create,ta=ho.create,ra=po.create,na=fo.create,ia=go.create,oa=mo.create,aa=bo.create,sa=yo.create,ca=vo.create,la=xo.create,ua=Co.create,da=Eo.create,ha=xo.createWithPreprocess,pa=$o.create,fa={string:e=>Fi.create({...e,coerce:!0}),number:e=>Hi.create({...e,coerce:!0}),boolean:e=>Zi.create({...e,coerce:!0}),bigint:e=>Gi.create({...e,coerce:!0}),date:e=>Vi.create({...e,coerce:!0})},ga=Ci;var ma=Object.freeze({__proto__:null,defaultErrorMap:mi,setErrorMap:function(e){wi=e},getErrorMap:bi,makeIssue:yi,EMPTY_PATH:[],addIssueToContext:vi,ParseStatus:xi,INVALID:Ci,DIRTY:Ei,OK:_i,isAborted:ki,isDirty:Si,isValid:Ai,isAsync:Ii,get util(){return ui},get objectUtil(){return di},ZodParsedType:hi,getParsedType:pi,ZodType:Ni,ZodString:Fi,ZodNumber:Hi,ZodBigInt:Gi,ZodBoolean:Zi,ZodDate:Vi,ZodSymbol:qi,ZodUndefined:Ki,ZodNull:Yi,ZodAny:Xi,ZodUnknown:Ji,ZodNever:Qi,ZodVoid:eo,ZodArray:to,ZodObject:no,ZodUnion:io,ZodDiscriminatedUnion:ao,ZodIntersection:co,ZodTuple:lo,ZodRecord:uo,ZodMap:ho,ZodSet:po,ZodFunction:fo,ZodLazy:go,ZodLiteral:mo,ZodEnum:bo,ZodNativeEnum:yo,ZodPromise:vo,ZodEffects:xo,ZodTransformer:xo,ZodOptional:Co,ZodNullable:Eo,ZodDefault:_o,ZodCatch:ko,ZodNaN:So,BRAND:Ao,ZodBranded:Io,ZodPipeline:$o,ZodReadonly:Po,custom:To,Schema:Ni,ZodSchema:Ni,late:Oo,get ZodFirstPartyTypeKind(){return No},coerce:fa,any:Wo,array:Vo,bigint:Uo,boolean:Lo,date:Bo,discriminatedUnion:Xo,effect:la,enum:aa,function:na,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>To((t=>t instanceof e),t),intersection:Jo,lazy:ia,literal:oa,map:ta,nan:jo,nativeEnum:sa,never:Go,null:Fo,nullable:da,number:Mo,object:qo,oboolean:()=>Lo().optional(),onumber:()=>Mo().optional(),optional:ua,ostring:()=>Ro().optional(),pipeline:pa,preprocess:ha,promise:ca,record:ea,set:ra,strictObject:Ko,string:Ro,symbol:Do,transformer:la,tuple:Qo,undefined:zo,union:Yo,unknown:Ho,void:Zo,NEVER:ga,ZodIssueCode:fi,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:gi});const wa=ma.object({message:ma.string()});function ba(e){return ma.literal(li[e])}const ya=ma.object({chainId:ma.number()}),va=ma.object({email:ma.string().email()}),xa=ma.object({otp:ma.string()}),Ca=ma.object({chainId:ma.optional(ma.number())}),Ea=ma.object({email:ma.string().email()}),_a=ma.object({themeMode:ma.optional(ma.enum(["light","dark"])),themeVariables:ma.optional(ma.record(ma.string(),ma.string().or(ma.number())))}),ka=ma.object({action:ma.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),Sa=ma.object({email:ma.string().email(),address:ma.string(),chainId:ma.number()}),Aa=ma.object({isConnected:ma.boolean()}),Ia=ma.object({chainId:ma.number()}),$a=ma.object({chainId:ma.number()}),Pa=ma.object({email:ma.string().email()}),Ta=ma.string(),Oa=ma.object({method:ma.literal("personal_sign"),params:ma.array(ma.any())}),Na=ma.object({method:ma.literal("eth_sendTransaction"),params:ma.array(ma.any())}),Ra=ma.object({method:ma.literal("eth_accounts")}),Ma=ma.object({method:ma.literal("eth_getBalance"),params:ma.array(ma.any())}),ja=ma.object({method:ma.literal("eth_estimateGas"),params:ma.array(ma.any())}),Ua=ma.object({method:ma.literal("eth_gasPrice")}),La=ma.object({method:ma.literal("eth_signTypedData_v4"),params:ma.array(ma.any())}),Ba=ma.object({method:ma.literal("eth_blockNumber")}),Da=ma.object({method:ma.literal("eth_chainId")}),za=ma.object({token:ma.string()}),Fa={appEvent:ma.object({type:ba("APP_SWITCH_NETWORK"),payload:ya}).or(ma.object({type:ba("APP_CONNECT_EMAIL"),payload:va})).or(ma.object({type:ba("APP_CONNECT_DEVICE")})).or(ma.object({type:ba("APP_CONNECT_OTP"),payload:xa})).or(ma.object({type:ba("APP_GET_USER"),payload:ma.optional(Ca)})).or(ma.object({type:ba("APP_SIGN_OUT")})).or(ma.object({type:ba("APP_IS_CONNECTED"),payload:ma.optional(za)})).or(ma.object({type:ba("APP_GET_CHAIN_ID")})).or(ma.object({type:ba("APP_RPC_REQUEST"),payload:Oa.or(Na).or(Ra).or(Ma).or(ja).or(Ua).or(La).or(Ba).or(Da)})).or(ma.object({type:ba("APP_UPDATE_EMAIL"),payload:Ea})).or(ma.object({type:ba("APP_AWAIT_UPDATE_EMAIL")})).or(ma.object({type:ba("APP_SYNC_THEME"),payload:_a})),frameEvent:ma.object({type:ba("FRAME_SWITCH_NETWORK_ERROR"),payload:wa}).or(ma.object({type:ba("FRAME_SWITCH_NETWORK_SUCCESS"),payload:$a})).or(ma.object({type:ba("FRAME_CONNECT_EMAIL_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_CONNECT_EMAIL_SUCCESS"),payload:ka})).or(ma.object({type:ba("FRAME_CONNECT_OTP_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_CONNECT_OTP_SUCCESS")})).or(ma.object({type:ba("FRAME_CONNECT_DEVICE_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_CONNECT_DEVICE_SUCCESS")})).or(ma.object({type:ba("FRAME_GET_USER_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_GET_USER_SUCCESS"),payload:Sa})).or(ma.object({type:ba("FRAME_SIGN_OUT_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_SIGN_OUT_SUCCESS")})).or(ma.object({type:ba("FRAME_IS_CONNECTED_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_IS_CONNECTED_SUCCESS"),payload:Aa})).or(ma.object({type:ba("FRAME_GET_CHAIN_ID_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Ia})).or(ma.object({type:ba("FRAME_RPC_REQUEST_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_RPC_REQUEST_SUCCESS"),payload:Ta})).or(ma.object({type:ba("FRAME_SESSION_UPDATE"),payload:za})).or(ma.object({type:ba("FRAME_UPDATE_EMAIL_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_UPDATE_EMAIL_SUCCESS")})).or(ma.object({type:ba("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:Pa})).or(ma.object({type:ba("FRAME_SYNC_THEME_ERROR"),payload:wa})).or(ma.object({type:ba("FRAME_SYNC_THEME_SUCCESS")}))},Wa={set(e,t){localStorage.setItem(`${li.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${li.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${li.STORAGE_KEY}${e}`)}},Ha=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Ga=3e4,Za={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return Ha.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=Wa.get(li.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Ga){const e=Math.ceil((Ga-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=Wa.get(li.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Ga)return Math.ceil((Ga-t)/1e3)}return 0}};class Va{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Za.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(li.FRAME_EVENT_KEY))return;const r=Fa.frameEvent.parse(t);e(r)}))},onAppEvent:e=>{window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(li.APP_EVENT_KEY))return;const r=Fa.appEvent.parse(t);e(r)}))},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");Fa.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw new Error("W3mFrame: parent is not set");Fa.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t){this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}));const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${li.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}class qa{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.w3mFrame=new Va(e,!0),this.w3mFrame.events.onFrameEvent((e=>{switch(console.log("💻 received",e),e.type){case li.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case li.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case li.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case li.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case li.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case li.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case li.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case li.FRAME_GET_USER_ERROR:return this.onConnectError(e);case li.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case li.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case li.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case li.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case li.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case li.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case li.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case li.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case li.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case li.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case li.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case li.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case li.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case li.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(e);case li.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(e);case li.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case li.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);default:return null}}))}getLoginEmailUsed(){return Boolean(Wa.get(li.EMAIL_LOGIN_USED_KEY))}getEmail(){return Wa.get(li.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Za.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:li.APP_CONNECT_EMAIL,payload:e}),new Promise(((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}}))}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_CONNECT_DEVICE}),new Promise(((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}}))}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_CONNECT_OTP,payload:e}),new Promise(((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}}))}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_IS_CONNECTED,payload:void 0}),new Promise(((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}}))}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_GET_CHAIN_ID}),new Promise(((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}}))}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Za.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:li.APP_UPDATE_EMAIL,payload:e}),new Promise(((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}}))}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_AWAIT_UPDATE_EMAIL}),new Promise(((e,t)=>{this.awaitUpdateEmailResolver={resolve:e,reject:t}}))}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_SYNC_THEME,payload:e}),new Promise(((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}}))}async connect(e){const t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_GET_USER,payload:{chainId:t}}),new Promise(((e,t)=>{this.connectResolver={resolve:e,reject:t}}))}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise(((e,t)=>{this.switchChainResolver={resolve:e,reject:t}}))}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_SIGN_OUT}),new Promise(((e,t)=>{this.disconnectResolver={resolve:e,reject:t}}))}async request(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:li.APP_RPC_REQUEST,payload:e}),new Promise(((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent((t=>{t.type.includes(li.RPC_METHOD_KEY)&&e(t)}))}onRpcResponse(e){this.w3mFrame.events.onFrameEvent((t=>{t.type.includes(li.RPC_METHOD_KEY)&&e(t)}))}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===li.FRAME_GET_USER_SUCCESS&&e()}))}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){const{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){Wa.set(li.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Wa.set(li.EMAIL,e),Wa.set(li.EMAIL_LOGIN_USED_KEY,"true"),Wa.delete(li.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Wa.delete(li.EMAIL_LOGIN_USED_KEY),Wa.delete(li.EMAIL),Wa.delete(li.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Wa.set(li.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(Wa.get(li.LAST_USED_CHAIN_KEY))}}var Ka=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ya=class extends pn.oi{constructor(){super(...arguments),this.email=dn.RouterController.state.data?.email,this.emailConnector=dn.ConnectorController.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=Za.getTimeToNextEmailLogin(),this.error=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=Boolean(this.timeoutTimeLeft);return pn.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?pn.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:pn.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
              ></wui-otp>
              ${this.error?pn.dy`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Za.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{if(!this.loading){const t=e.detail;this.emailConnector&&6===t.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:t}),dn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await dn.ConnectionController.connectExternal(this.emailConnector),dn.IN.close(),dn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(e){dn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=dn.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){const e=dn.ConnectorController.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),dn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),dn.SnackController.showSuccess("Code email resent")}}catch(e){dn.SnackController.showError(e)}finally{this.loading=!1}}};Ya.styles=ci,Ka([(0,fn.SB)()],Ya.prototype,"loading",void 0),Ka([(0,fn.SB)()],Ya.prototype,"timeoutTimeLeft",void 0),Ka([(0,fn.SB)()],Ya.prototype,"error",void 0),Ya=Ka([(0,hn.customElement)("w3m-email-verify-otp-view")],Ya);const Xa=pn.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Ja=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Qa=class extends pn.oi{constructor(){super(),this.email=dn.RouterController.state.data?.email,this.emailConnector=dn.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return pn.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),dn.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),dn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),dn.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),dn.SnackController.showSuccess("Code email resent")}}catch(e){dn.SnackController.showError(e)}finally{this.loading=!1}}};Qa.styles=Xa,Ja([(0,fn.SB)()],Qa.prototype,"loading",void 0),Qa=Ja([(0,hn.customElement)("w3m-email-verify-device-view")],Qa);const es=pn.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var ts=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rs=class extends pn.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(dn.IN.subscribeKey("open",(e=>{e||this.onHideIframe()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const t=e?.getBoundingClientRect(),r=t??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${r.width}px`,this.iframe.style.height=r.height-10+"px",this.iframe.style.left=`${r.left}px`,this.iframe.style.top=`${r.top+5}px`,this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),pn.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};rs.styles=es,ts([(0,fn.SB)()],rs.prototype,"ready",void 0),rs=ts([(0,hn.customElement)("w3m-approve-transaction-view")],rs);let ns=class extends pn.oi{render(){return pn.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${dn.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${dn.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};ns=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-upgrade-wallet-view")],ns);const{D:is}=gn._$LH;class os{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const as=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),as(e,t);return!0},ss=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},cs=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ds(t)}};function ls(e){void 0!==this._$AN?(ss(this),this._$AM=e,cs(this)):this._$AM=e}function us(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)as(n[e],!1),ss(n[e]);else null!=n&&(as(n,!1),ss(n));else as(this,e)}const ds=e=>{2==e.type&&(e._$AP??=us,e._$AQ??=ls)};class hs extends os{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),cs(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(as(this,e),ss(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const ps=()=>new fs;class fs{}const gs=new WeakMap,ms=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends hs{render(e){return gn.Ld}update(e,[t]){const r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),gn.Ld}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let r=gs.get(t);void 0===r&&(r=new WeakMap,gs.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?gs.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),ws=pn.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var bs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ys=class extends pn.oi{constructor(){super(...arguments),this.formRef=ps(),this.initialValue=dn.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return pn.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ms(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${dn.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=dn.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),dn.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),dn.RouterController.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(e){dn.SnackController.showError(e),this.loading=!1}}};ys.styles=ws,bs([(0,fn.SB)()],ys.prototype,"email",void 0),bs([(0,fn.SB)()],ys.prototype,"loading",void 0),ys=bs([(0,hn.customElement)("w3m-update-email-wallet-view")],ys);const vs=pn.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var xs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Cs=class extends pn.oi{constructor(){super(),this.email=dn.RouterController.state.data?.email,this.emailConnector=dn.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return pn.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),dn.RouterController.replace("Account"),dn.SnackController.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),dn.SnackController.showSuccess("Code email resent")}}catch(e){dn.SnackController.showError(e)}finally{this.loading=!1}}};Cs.styles=vs,xs([(0,fn.SB)()],Cs.prototype,"loading",void 0),Cs=xs([(0,hn.customElement)("w3m-update-email-wallet-waiting-view")],Cs);const Es=pn.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function _s(e){const{connectors:t}=dn.ConnectorController.state,r=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(r[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}var ks=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Ss="local-paginator";let As=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!dn.ApiController.state.wallets.length,this.wallets=dn.ApiController.state.wallets,this.recommended=dn.ApiController.state.recommended,this.featured=dn.ApiController.state.featured,this.unsubscribe.push(dn.ApiController.subscribeKey("wallets",(e=>this.wallets=e)),dn.ApiController.subscribeKey("recommended",(e=>this.recommended=e)),dn.ApiController.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return pn.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await dn.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>pn.dy`
        <wui-card-select-loader type="wallet" id=${mn(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return _s([...this.featured,...this.recommended,...this.wallets]).map((e=>pn.dy`
        <wui-card-select
          imageSrc=${mn(dn.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n}=dn.ApiController.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let a=Math.ceil(o/i)*i-o+i;return a-=e.length?r.length%i:0,0===n&&r.length>0?null:0===n||[...r,...e,...t].length<n?this.shimmerTemplate(a,Ss):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Ss}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=dn.ApiController.state;r.length<t&&dn.ApiController.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=dn.ConnectorController.state,r=t.find((({explorerId:t})=>t===e.id));r?dn.RouterController.push("ConnectingExternal",{connector:r}):dn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};As.styles=Es,ks([(0,fn.SB)()],As.prototype,"initial",void 0),ks([(0,fn.SB)()],As.prototype,"wallets",void 0),ks([(0,fn.SB)()],As.prototype,"recommended",void 0),ks([(0,fn.SB)()],As.prototype,"featured",void 0),As=ks([(0,hn.customElement)("w3m-all-wallets-list")],As);const Is=pn.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var $s=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ps=class extends pn.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?pn.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await dn.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=dn.ApiController.state,t=_s(e);return e.length?pn.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>pn.dy`
            <wui-card-select
              imageSrc=${mn(dn.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:pn.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=dn.ConnectorController.state,r=t.find((({explorerId:t})=>t===e.id));r?dn.RouterController.push("ConnectingExternal",{connector:r}):dn.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Ps.styles=Is,$s([(0,fn.SB)()],Ps.prototype,"loading",void 0),$s([(0,fn.Cb)()],Ps.prototype,"query",void 0),Ps=$s([(0,hn.customElement)("w3m-all-wallets-search")],Ps);var Ts=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Os=class extends pn.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(dn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return pn.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};Ts([(0,fn.Cb)({type:Array})],Os.prototype,"platforms",void 0),Ts([(0,fn.Cb)()],Os.prototype,"onSelectPlatfrom",void 0),Ts([(0,fn.SB)()],Os.prototype,"buffering",void 0),Os=Ts([(0,hn.customElement)("w3m-connecting-header")],Os);let Ns=class extends Ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=dn.ConnectorController.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),r=e.find((e=>"INJECTED"===e.type));t?await dn.ConnectionController.connectExternal(t):r&&await dn.ConnectionController.connectExternal(r),dn.IN.close(),dn.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){dn.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Ns=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-browser")],Ns);let Rs=class extends Ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=dn.j1.formatNativeUrl(e,this.uri);dn.ConnectionController.setWcLinking({name:t,href:n}),dn.ConnectionController.setRecentWallet(this.wallet),dn.j1.openHref(r,"_self")}catch{this.error=!0}}};Rs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-desktop")],Rs);let Ms=class extends Ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=dn.j1.formatNativeUrl(e,this.uri);dn.ConnectionController.setWcLinking({name:t,href:n}),dn.ConnectionController.setRecentWallet(this.wallet),dn.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=dn.j1.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(dn.ConnectionController.setBuffering(!0),setTimeout((()=>{dn.ConnectionController.setBuffering(!1)}),5e3))}};Ms=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-mobile")],Ms);const js=pn.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let Us=class extends Ln{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),pn.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return dn.ConnectionController.setWcLinking(void 0),dn.ConnectionController.setRecentWallet(this.wallet),pn.dy` <wui-qr-code
      size=${e}
      theme=${dn.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${mn(dn.fz.getWalletImage(this.wallet))}
      alt=${mn(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return pn.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Us.styles=js,Us=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-qrcode")],Us);const Ls=pn.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let Bs=class extends pn.oi{constructor(){super(...arguments),this.dappImageUrl=dn.OptionsController.state.metadata?.icons,this.walletImageUrl=dn.MO.getConnectedWalletImageUrl()}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return pn.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Bs.styles=Ls,Bs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-siwe")],Bs);let Ds=class extends pn.oi{constructor(){if(super(),this.wallet=dn.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return pn.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${mn(dn.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ds=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-unsupported")],Ds);let zs=class extends Ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",dn.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=dn.j1.formatUniversalUrl(e,this.uri);dn.ConnectionController.setWcLinking({name:t,href:n}),dn.ConnectionController.setRecentWallet(this.wallet),dn.j1.openHref(r,"_blank")}catch{this.error=!0}}};zs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-connecting-wc-web")],zs);const Fs=pn.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ws=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function Hs(){const e=dn.RouterController.state.data?.connector?.name,t=dn.RouterController.state.data?.wallet?.name,r=dn.RouterController.state.data?.network?.name,n=t??e,i=dn.ConnectorController.getConnectors();return{Connect:`Connect ${1===i.length&&"w3m-email"===i[0]?.id?"Email":""} Wallet`,Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let Gs=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.heading=Hs()[dn.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(dn.RouterController.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),dn.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pn.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){dn.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),dn.RouterController.push("WhatIsAWallet")}async onClose(){dn.yD.state.isSiweEnabled&&"success"!==dn.yD.state.status&&await dn.ConnectionController.disconnect(),dn.IN.close()}titleTemplate(){return pn.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=dn.RouterController.state,t="Connect"===e,r="ApproveTransaction"===e;return this.showBack&&!r?pn.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:pn.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?pn.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const r=Hs()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=dn.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===dn.RouterController.state.view?dn.RouterController.push("Connect"):dn.RouterController.goBack()}};Gs.styles=[Fs],Ws([(0,fn.SB)()],Gs.prototype,"heading",void 0),Ws([(0,fn.SB)()],Gs.prototype,"buffering",void 0),Ws([(0,fn.SB)()],Gs.prototype,"showBack",void 0),Gs=Ws([(0,hn.customElement)("w3m-header")],Gs);var Zs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Vs=class extends pn.oi{constructor(){super(...arguments),this.data=[]}render(){return pn.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>pn.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>pn.dy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Zs([(0,fn.Cb)({type:Array})],Vs.prototype,"data",void 0),Vs=Zs([(0,hn.customElement)("w3m-help-widget")],Vs);const qs=pn.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let Ks=class extends pn.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=dn.OptionsController.state;return e||t?pn.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=dn.OptionsController.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=dn.OptionsController.state;return e?pn.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=dn.OptionsController.state;return e?pn.dy`<a href=${e}>Privacy Policy</a>`:null}};Ks.styles=[qs],Ks=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,hn.customElement)("w3m-legal-footer")],Ks);const Ys=pn.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Xs=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Js=class extends pn.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=dn.j1.isMobile(),a=dn.j1.isIos(),s=dn.j1.isAndroid(),c=[t,r,i,n].filter(Boolean).length>1,l=hn.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?pn.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>dn.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?pn.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?pn.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?pn.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&dn.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&dn.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&dn.j1.openHref(this.wallet.homepage,"_blank")}};Js.styles=[Ys],Xs([(0,fn.Cb)({type:Object})],Js.prototype,"wallet",void 0),Js=Xs([(0,hn.customElement)("w3m-mobile-download-links")],Js);const Qs=pn.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ec=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const tc={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let rc=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=dn.SnackController.state.open,this.unsubscribe.push(dn.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=dn.SnackController.state,r=tc[t];return pn.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>dn.SnackController.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};rc.styles=Qs,ec([(0,fn.SB)()],rc.prototype,"open",void 0),rc=ec([(0,hn.customElement)("w3m-snackbar")],rc);const nc=pn.iv`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var ic=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oc=class extends pn.oi{constructor(){super(),this.unsubscribe=[],this.formRef=ps(),this.connectors=dn.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(dn.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.length>1,t=this.connectors.find((e=>"EMAIL"===e.type)),r=!this.loading&&this.email.length>3;return t?pn.dy`
      <form ${ms(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${r?pn.dy`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading?pn.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${e?pn.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=dn.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});dn.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(dn.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),dn.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&dn.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=dn.j1.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":dn.SnackController.showError(e)}finally{this.loading=!1}}onFocusEvent(){dn.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};oc.styles=nc,ic([(0,fn.SB)()],oc.prototype,"connectors",void 0),ic([(0,fn.SB)()],oc.prototype,"email",void 0),ic([(0,fn.SB)()],oc.prototype,"loading",void 0),ic([(0,fn.SB)()],oc.prototype,"error",void 0),oc=ic([(0,hn.customElement)("w3m-email-login-widget")],oc);let ac=!1;class sc{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{dn.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{dn.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{dn.AccountController.setBalance(e,t)},this.setProfileName=e=>{dn.AccountController.setProfileName(e)},this.setProfileImage=e=>{dn.AccountController.setProfileImage(e)},this.resetAccount=()=>{dn.AccountController.resetAccount()},this.setCaipNetwork=e=>{dn.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>dn.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{dn.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>dn.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{dn.NetworkController.resetNetwork()},this.setConnectors=e=>{dn.ConnectorController.setConnectors(e)},this.addConnector=e=>{dn.ConnectorController.addConnector(e)},this.getConnectors=()=>dn.ConnectorController.getConnectors(),this.resetWcConnection=()=>{dn.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>dn.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{dn.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{dn.yD.setNonce(e)},this.setSIWESession=e=>{dn.yD.setSession(e)},this.setSIWEStatus=e=>{dn.yD.setStatus(e)},this.setSIWEMessage=e=>{dn.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),dn.IN.open(e)}async close(){await this.initOrContinue(),dn.IN.close()}setLoading(e){dn.IN.setLoading(e)}getThemeMode(){return dn.ThemeController.state.themeMode}getThemeVariables(){return dn.ThemeController.state.themeVariables}setThemeMode(e){dn.ThemeController.setThemeMode(e),(0,hn.setColorTheme)(dn.ThemeController.state.themeMode);try{const e=dn.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:dn.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){dn.ThemeController.setThemeVariables(e),(0,hn.setThemeVariables)(dn.ThemeController.state.themeVariables);try{const e=dn.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:dn.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return dn.ThemeController.subscribe(e)}getState(){return{...dn.Ie.state}}subscribeState(e){return dn.Ie.subscribe(e)}getEvent(){return{...dn.Xs.state}}subscribeEvents(e){return dn.Xs.subscribe(e)}subscribeSIWEState(e){return dn.yD.subscribe(e)}initControllers(e){if(dn.NetworkController.setClient(e.networkControllerClient),dn.NetworkController.setDefaultCaipNetwork(e.defaultChain),dn.OptionsController.setProjectId(e.projectId),dn.OptionsController.setIncludeWalletIds(e.includeWalletIds),dn.OptionsController.setExcludeWalletIds(e.excludeWalletIds),dn.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),dn.OptionsController.setTokens(e.tokens),dn.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),dn.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),dn.OptionsController.setCustomWallets(e.customWallets),dn.OptionsController.setEnableAnalytics(e.enableAnalytics),dn.OptionsController.setSdkVersion(e._sdkVersion),dn.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){const t=e.siweControllerClient;dn.yD.setSIWEClient(t)}e.metadata&&dn.OptionsController.setMetadata(e.metadata),e.themeMode&&dn.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&dn.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return this.initPromise||ac||!dn.j1.isClient()||(ac=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(a.bind(a,1123)),Promise.resolve().then(a.bind(a,6541))]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}const cc={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.6"},lc={ConnectorExplorerIds:{[cc.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[cc.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[cc.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[cc.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[cc.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[cc.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[cc.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[cc.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[cc.INJECTED_CONNECTOR_ID]:"Browser Wallet",[cc.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[cc.COINBASE_CONNECTOR_ID]:"Coinbase",[cc.LEDGER_CONNECTOR_ID]:"Ledger",[cc.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[cc.INJECTED_CONNECTOR_ID]:"INJECTED",[cc.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[cc.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[cc.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},uc={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,r])=>{t[`${cc.EIP155}:${e}`]=r})),t}};function dc(e){if(e)return{id:`${cc.EIP155}:${e.id}`,name:e.name,imageId:lc.EIP155NetworkImageIds[e.id]}}var hc,pc,fc=function(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},gc=function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};const mc="connectedRdns";class wc extends Ve{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",hc.set(this,void 0),pc.set(this,void 0),this.onAccountsChanged=e=>{0===e.length?(this.storage?.removeItem(mc),this.emit("disconnect")):e[0]&&this.emit("change",{account:(0,f.K)(e[0])})},fc(this,hc,this.options.getProvider(),"f")}async connect(e){const t=await super.connect(e);return gc(this,pc,"f")&&this.storage?.setItem(mc,gc(this,pc,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(mc),fc(this,pc,void 0,"f")}async isAuthorized(e){const t=this.storage?.getItem(mc);if(t){if(gc(this,pc,"f")&&t===gc(this,pc,"f").info.rdns){const e=gc(this,pc,"f").provider;if((await e.request({method:"eth_accounts"})).length)return!0}e&&fc(this,pc,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(gc(this,pc,"f")?.provider??gc(this,hc,"f"))}setEip6963Wallet(e){fc(this,pc,e,"f")}}hc=new WeakMap,pc=new WeakMap;class bc extends p{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},"undefined"!=typeof window&&(this.provider=new qa(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:t,chainId:r}=await this.provider.connect({chainId:e.chainId});return{account:t,chain:{id:r,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const t=this.chains.find((t=>t.id===e));if(!t)throw new U(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const r=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:r}}),t}catch(e){if(e instanceof Error)throw new U(e);throw e}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:t}=await this.provider.connect();return Promise.resolve(Be({account:e,chain:{id:t},transport:Ge(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}var yc,vc,xc=a(8764);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=xc.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var Cc=class extends p{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,u(this,yc,void 0),u(this,vc,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=r(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await t.enable(),n=(0,f.K)(r[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:n,chain:{id:i,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new O(e);throw e}}async disconnect(){if(!l(this,vc))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,f.K)(t[0])}async getChainId(){return r((await this.getProvider()).chainId)}async getProvider(){if(!l(this,vc)){let e=(await Promise.all([a.e(811),a.e(439)]).then(a.t.bind(a,5811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),d(this,yc,new e(this.options));const t=l(this,yc).walletExtension?.getChainId(),r=this.chains.find((e=>this.options.chainId?e.id===this.options.chainId:e.id===t))||this.chains[0],n=this.options.chainId||r?.id,i=this.options.jsonRpcUrl||r?.rpcUrls.default.http[0];d(this,vc,l(this,yc).makeWeb3Provider(i,n))}return l(this,vc)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Be({account:r,chain:n,transport:Ge(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const r=await this.getProvider(),n=(0,V.eC)(t);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find((e=>e.id===t))??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find((e=>e.id===t));if(!o)throw new e({chainId:t,connectorId:this.id});if(4902===i.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(e){throw new O(e)}throw new U(i)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}};yc=new WeakMap,vc=new WeakMap;var Ec,_c,kc,Sc,Ac,Ic,$c,Pc,Tc,Oc,Nc,Rc,Mc,jc,Uc,Lc,Bc,Dc,zc,Fc,Wc=a(9795),Hc="eip155",Gc="requestedChains",Zc="wallet_addEthereumChain",Vc=class extends p{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),u(this,kc),u(this,Ac),u(this,$c),u(this,Tc),u(this,Nc),u(this,Mc),u(this,Uc),u(this,Bc),u(this,zc),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,u(this,Ec,void 0),u(this,_c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,f.K)(e[0])})},this.onChainChanged=e=>{const t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{h(this,Mc,jc).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},h(this,kc,Sc).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){const e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw new Error("No chains found on connector.");const n=await this.getProvider();h(this,Tc,Oc).call(this);const i=h(this,$c,Pc).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){const e=this.chains.filter((e=>e.id!==r)).map((e=>e.id));this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,optionalChains:[r,...e]}),h(this,Mc,jc).call(this,this.chains.map((({id:e})=>e)))}const o=await n.enable(),a=(0,f.K)(o[0]),s=await this.getChainId();return{account:a,chain:{id:s,unsupported:this.isChainUnsupported(s)}}}catch(e){if(/user rejected/i.test(e?.message))throw new O(e);throw e}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{h(this,Nc,Rc).call(this),h(this,Mc,jc).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return(0,f.K)(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return l(this,Ec)||await h(this,kc,Sc).call(this),e&&await this.switchChain(e),l(this,Ec)}async getWalletClient({chainId:e}={}){const[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Be({account:r,chain:n,transport:Ge(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=h(this,$c,Pc).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find((t=>t.id===e));if(!t)throw new U(new Error("chain not found on connector."));try{const r=await this.getProvider(),n=h(this,Bc,Dc).call(this),i=h(this,zc,Fc).call(this);if(!n.includes(e)&&i.includes(Zc)){await r.request({method:Zc,params:[{chainId:(0,V.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const n=h(this,Uc,Lc).call(this);n.push(e),h(this,Mc,jc).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,V.eC)(e)}]}),t}catch(e){if(/user rejected request/i.test("string"==typeof e?e:e?.message))throw new O(e);throw new U(e)}}};Ec=new WeakMap,_c=new WeakMap,kc=new WeakSet,Sc=async function(){return l(this,_c)||"undefined"==typeof window||d(this,_c,h(this,Ac,Ic).call(this)),l(this,_c)},Ac=new WeakSet,Ic=async function(){const{EthereumProvider:e}=await a.e(98).then(a.bind(a,3098)),t=this.chains.map((({id:e})=>e));if(t.length){const{projectId:r,showQrModal:n=!0,qrModalOptions:i,metadata:o,relayUrl:a}=this.options;d(this,Ec,await e.init({showQrModal:n,qrModalOptions:i,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),metadata:o,relayUrl:a}))}},$c=new WeakSet,Pc=function(){if(h(this,zc,Fc).call(this).includes(Zc))return!1;if(!this.options.isNewChainsStale)return!1;const e=h(this,Uc,Lc).call(this),t=this.chains.map((({id:e})=>e)),r=h(this,Bc,Dc).call(this);return!(r.length&&!r.some((e=>t.includes(e)))||t.every((t=>e.includes(t))))},Tc=new WeakSet,Oc=function(){l(this,Ec)&&(h(this,Nc,Rc).call(this),l(this,Ec).on("accountsChanged",this.onAccountsChanged),l(this,Ec).on("chainChanged",this.onChainChanged),l(this,Ec).on("disconnect",this.onDisconnect),l(this,Ec).on("session_delete",this.onDisconnect),l(this,Ec).on("display_uri",this.onDisplayUri),l(this,Ec).on("connect",this.onConnect))},Nc=new WeakSet,Rc=function(){l(this,Ec)&&(l(this,Ec).removeListener("accountsChanged",this.onAccountsChanged),l(this,Ec).removeListener("chainChanged",this.onChainChanged),l(this,Ec).removeListener("disconnect",this.onDisconnect),l(this,Ec).removeListener("session_delete",this.onDisconnect),l(this,Ec).removeListener("display_uri",this.onDisplayUri),l(this,Ec).removeListener("connect",this.onConnect))},Mc=new WeakSet,jc=function(e){this.storage?.setItem(Gc,e)},Uc=new WeakSet,Lc=function(){return this.storage?.getItem(Gc)??[]},Bc=new WeakSet,Dc=function(){if(!l(this,Ec))return[];const e=l(this,Ec).session?.namespaces;if(!e)return[];const t=(0,Wc.fK)(e),r=t[Hc]?.chains?.map((e=>parseInt(e.split(":")[1]||"")));return r??[]},zc=new WeakSet,Fc=function(){if(!l(this,Ec))return[];const e=l(this,Ec).session?.namespaces;if(!e)return[];const t=(0,Wc.fK)(e),r=t[Hc]?.methods;return r??[]};const qc=dn.j1.getBlockchainApiUrl();function Kc({projectId:e}){return function(t){if(!lc.WalletConnectRpcChainIds.includes(t.id))return null;const r=`${qc}/v1/?chainId=${cc.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}const Yc=i({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Xc=[{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"AccessControlBadConfirmation",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bytes32",name:"neededRole",type:"bytes32"}],name:"AccessControlUnauthorizedAccount",type:"error"},{inputs:[{internalType:"address",name:"target",type:"address"}],name:"AddressEmptyCode",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"AddressInsufficientBalance",type:"error"},{inputs:[],name:"FailedInnerCall",type:"error"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"SafeERC20FailedOperation",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beneficiary",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensClaimed",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropStartTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"allocatedAmounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"beneficiary",type:"address"}],name:"calculateClaimableAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"claimedAmounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recoveryTokenAddress",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"recoverTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"callerConfirmation",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"beneficiaries",type:"address[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],name:"setBeneficiaryAllocations",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startAirdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDistributedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];function Jc(e){return Jc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jc(e)}function Qc(){Qc=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:S(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",g="completed",m={};function w(){}function b(){}function y(){}var v={};l(v,a,(function(){return this}));var x=Object.getPrototypeOf,C=x&&x(x(T([])));C&&C!==r&&n.call(C,a)&&(v=C);var E=y.prototype=w.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==Jc(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function S(t,r,n){var i=h;return function(o,a){if(i===f)throw new Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=A(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var l=d(t,r,n);if("normal"===l.type){if(i=n.done?g:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=g,n.method="throw",n.arg=l.arg)}}}function A(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=d(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(Jc(t)+" is not iterable")}return b.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:b,configurable:!0}),b.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},_(k.prototype),l(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new k(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function el(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}var tl,rl="2aae8a4abb998da466e076f32f4b1577",nl=$(".gateway--connect"),il=$(".gateway--disconnected"),ol=$(".gateway--connected"),al=$(".gateway--balance"),sl=[Yc],cl=function({projectId:e,chains:t,metadata:r,enableInjected:n,enableCoinbase:i,enableEIP6963:o,enableEmail:a,enableWalletConnect:s}){const{publicClient:c}=function(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const r of e){let e=!1;for(const n of t){const t=n(r);t&&(e=!0,c.some((({id:e})=>e===r.id))||(c=[...c,t.chain]),l[r.id]=[...l[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw new Error([`Could not find valid provider configuration for chain "${r.name}".\n`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join("\n"))}return{chains:c,publicClient:({chainId:t})=>{const u=c.find((e=>e.id===t))??e[0],d=l[u.id];if(!d||!d[0])throw new Error(`No providers configured for chain "${u.id}"`);const h=wr({batch:r,chain:u,transport:br(d.map((e=>function(e,t={}){const{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??c,p=l??t.timeout??1e4,f=e||s?.rpcUrls.default.http[0];if(!f)throw new yr;return He({key:i,name:o,async request({method:t,params:i}){const o={method:t,params:i},{schedule:a}=(0,vr.S)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>Sr.http(f,{body:e,fetchOptions:n,timeout:p}),sort:(e,t)=>e.id-t.id}),[{error:s,result:c}]=await(async e=>r?a(e):[await Sr.http(f,{body:e,fetchOptions:n,timeout:p})])(o);if(s)throw new m.bs({body:o,error:s,url:f});return c},retryCount:h,retryDelay:a,timeout:p,type:"http"},{fetchOptions:n,url:e})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:n});return Object.assign(h,{chains:c})},webSocketPublicClient:({chainId:t})=>{const l=c.find((e=>e.id===t))??e[0],d=u[l.id];if(!d||!d[0])return;const h=wr({batch:r,chain:l,transport:br(d.map((e=>function(e,t={}){const{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:a,timeout:s})=>{const c=t.retryCount??a,l=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new yr;return He({key:r,name:n,async request({method:e,params:t}){const r={method:e,params:t},n=await kr(u),{error:i,result:o}=await Sr.webSocketAsync(n,{body:r,timeout:l});if(i)throw new m.bs({body:r,error:i,url:u});return o},retryCount:c,retryDelay:i,timeout:l,type:"webSocket"},{getSocket:()=>kr(u),async subscribe({params:e,onData:t,onError:r}){const n=await kr(u),{result:i}=await new Promise(((i,o)=>Sr.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error)return o(e.error),void r?.(e.error);"number"!=typeof e.id?"eth_subscription"===e.method&&t(e.params):i(e)}})));return{subscriptionId:i,unsubscribe:async()=>new Promise((e=>Sr.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e})))}}})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:n});return Object.assign(h,{chains:c})}}}(t,[Kc({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),l=[];return!1!==s&&l.push(new Vc({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}})),!1!==n&&l.push(new Ve({chains:t,options:{shimDisconnect:!0}})),!1!==o&&l.push(new wc({chains:t})),!1!==i&&l.push(new Cc({chains:t,options:{appName:r?.name??"Unknown"}})),!0===a&&l.push(new bc({chains:t,options:{projectId:e}})),function(e){const t=new Xr(e);return Kr=t,t}({autoConnect:!0,connectors:l,publicClient:c})}({chains:sl,projectId:rl,metadata:{name:"SpaceCatch",description:"The next-generation AR&Web3 game",url:"https://spacecatch.io/",icons:["https://spacecatch.io/img/logo-symbol.png"]}}),ll=(tl={wagmiConfig:cl,projectId:rl,chains:sl},new class extends sc{constructor(e){const{wagmiConfig:r,siweConfig:n,chains:i,defaultChain:o,tokens:a,_sdkVersion:s,...c}=e;if(!r)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async e=>{const t=uc.caipNetworkIdToNumber(e?.id);t&&await ln({chainId:t})},async getApprovedCaipNetworksData(){const e=localStorage.getItem("wagmi.wallet");if(e?.includes(cc.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:lc.WalletConnectRpcChainIds.map((e=>`${cc.EIP155}:${e}`))};if(e?.includes(cc.WALLET_CONNECT_CONNECTOR_ID)){const e=r.connectors.find((e=>e.id===cc.WALLET_CONNECT_CONNECTOR_ID));if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const t=await e.getProvider(),n=t.signer?.session?.namespaces,i=n?.[cc.EIP155]?.methods,o=n?.[cc.EIP155]?.chains;return{supportsAllNetworks:i?.includes(cc.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async e=>{const t=r.connectors.find((e=>e.id===cc.WALLET_CONNECT_CONNECTOR_ID));if(!t)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");t.on("message",(r=>{"display_uri"===r.type&&(e(r.data),t.removeAllListeners())}));const n=uc.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await Qr({connector:t,chainId:n})},connectExternal:async({id:e,provider:t,info:n})=>{const i=r.connectors.find((t=>t.id===e));if(!i)throw new Error("connectionControllerClient:connectExternal - connector is undefined");t&&n&&i.id===cc.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:t,info:n});const o=uc.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await Qr({connector:i,chainId:o})},checkInstalled:e=>{const t=this.getConnectors().filter((e=>"ANNOUNCED"===e.type)),r=this.getConnectors().find((e=>"INJECTED"===e.type));if(!e)return Boolean(window.ethereum);if(t.length){const r=e.some((e=>t.some((t=>t.info?.rdns===e))));if(r)return!0}return!!r&&!!window?.ethereum&&e.some((e=>Boolean(window.ethereum?.[String(e)])))},disconnect:async()=>{await en(),n?.options?.signOutOnDisconnect&&await n.signOut()},signMessage:async e=>async function(e){const r=await async function({chainId:e}={}){const t=Jr();return await(t.connector?.getWalletClient?.({chainId:e}))||null}();if(!r)throw new t;return await r.signMessage({message:e.message})}({message:e})};super({networkControllerClient:l,connectionControllerClient:u,siweControllerClient:n,defaultChain:dc(o),tokens:uc.getCaipTokens(a),_sdkVersion:s??`html-wagmi-${cc.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(r),this.syncEmailConnector(r),this.listenEIP6963Connector(r),this.listenEmailConnector(r),un((()=>this.syncAccount())),function(e,{selector:t=(e=>e)}={}){Jr().subscribe((({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r})),(()=>e(cn())),{equalityFn:Or})}((()=>this.syncNetwork()))}getState(){const e=super.getState();return{...e,selectedNetworkId:uc.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:uc.caipNetworkIdToNumber(t.selectedNetworkId)})))}syncRequestedNetworks(e){const t=e?.map((e=>({id:`${cc.EIP155}:${e.id}`,name:e.name,imageId:lc.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]})));this.setRequestedCaipNetworks(t??[])}async syncAccount(){const{address:e,isConnected:t}=sn(),{chain:r}=cn();if(this.resetAccount(),t&&e&&r){const n=`${cc.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){const{address:e,isConnected:t}=sn(),{chain:r}=cn();if(r){const n=String(r.id),i=`${cc.EIP155}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:lc.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){const t=`${cc.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){const t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t.id!==o.id)return this.setProfileName(null),void this.setProfileImage(null);try{const{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${cc.EIP155}:${t.id}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{const r=await async function({address:e,chainId:t}){return nn({chainId:t}).getEnsName({address:(0,f.K)(e)})}({address:e,chainId:t.id});if(r){this.setProfileName(r);const e=await async function({name:e,chainId:t}){const{normalize:r}=await a.e(849).then(a.bind(a,4849)),n=nn({chainId:t});return await n.getEnsAvatar({name:r(e)})}({name:r,chainId:t.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){const r=await async function({address:e,chainId:t,formatUnits:r,token:n}){const i=Jr(),o=nn({chainId:t});if(n){const i=async({abi:i})=>{const o={abi:i,address:n,chainId:t},[a,s,c]=await an({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,Tr.b)(a??"0",Br(r??s)),symbol:c,value:a}};try{return await i({abi:tn})}catch(e){if(e instanceof nt.uq){const{symbol:e,...t}=await i({abi:rn});return{symbol:(0,G.rR)((0,tt.f)(e,{dir:"right"})),...t}}throw e}}const a=[...i.publicClient.chains||[],...i.chains??[]],s=await o.getBalance({address:e}),c=a.find((e=>e.id===o.chain.id));return{decimals:c?.nativeCurrency.decimals??18,formatted:(0,Tr.b)(s??"0",Br(r??18)),symbol:c?.nativeCurrency.symbol??"ETH",value:s}}({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const t=[];e.connectors.forEach((({id:e,name:r})=>{[cc.EIP6963_CONNECTOR_ID,cc.EMAIL_CONNECTOR_ID].includes(e)||t.push({id:e,explorerId:lc.ConnectorExplorerIds[e],imageId:lc.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:lc.ConnectorNamesMap[e]??r,type:lc.ConnectorTypesMap[e]??"EXTERNAL"})})),this.setConnectors(t)}async syncEmailConnector(e){const t=e.connectors.find((({id:e})=>"w3mEmail"===e));if(t){const e=await t.getProvider();this.addConnector({id:cc.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}eip6963EventHandler(e,t){if(t.detail){const{info:r,provider:n}=t.detail;this.getConnectors().find((e=>e.name===r.name))||(this.addConnector({id:cc.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[cc.EIP6963_CONNECTOR_ID],name:r.name,provider:n,info:r}),e.isAuthorized({info:r,provider:n}))}}listenEIP6963Connector(e){const t=e.connectors.find((e=>e.id===cc.EIP6963_CONNECTOR_ID));if("undefined"!=typeof window&&t){const e=this.eip6963EventHandler.bind(this,t);window.addEventListener(cc.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(cc.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const t=e.connectors.find((e=>e.id===cc.EMAIL_CONNECTOR_ID));if("undefined"!=typeof window&&t){super.setLoading(!0);const e=await t.getProvider(),r=e.getLoginEmailUsed();super.setLoading(r),e.onRpcRequest((()=>{super.open({view:"ApproveTransaction"})})),e.onRpcResponse((()=>{super.close()})),e.onIsConnected((()=>{super.setLoading(!1)}))}}}({...tl,_sdkVersion:`html-wagmi-${cc.VERSION}`}));function ul(){var e;return e=Qc().mark((function e(){var t,r,n;return Qc().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=sn().address,42161===ll.getState().selectedNetworkId){e.next=5;break}return e.next=5,ln({chainId:42161});case 5:return e.next=7,on({address:"0xa6cdd516985779F9cDe7b45359c7c9CbC1944330",abi:Xc,functionName:"allocatedAmounts",args:[t]});case 7:r=e.sent,n=Number(r/BigInt(1e18)),n=Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),al.text(n);case 11:case"end":return e.stop()}}),e)})),ul=function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){el(o,n,i,a,s,"next",e)}function s(e){el(o,n,i,a,s,"throw",e)}a(void 0)}))},ul.apply(this,arguments)}$(nl).on("click",(function(){sn().isConnected?en():ll.open()})),un((function(e){e.isConnected?(il.hide(),ol.show(),nl.text("Disconnect ["+e.address.slice(0,4)+"..."+e.address.slice(-4)+"]"),function(){ul.apply(this,arguments)}()):(il.show(),ol.hide(),nl.text("Connect wallet"))}))})()})();