//window的dom对象
import document from "../var/document.js";

var preservedScriptAttributes = {
	type: true,
	src: true,
	nonce: true,
	noModule: true
};

/**
 * 这个函数的作用是创建一个脚本在网页中运行然后再删除这个脚本
 * @param {*脚本程序} code
 * @param {*DOM节点} node
 * @param {*DOM对象} doc
 */
function DOMEval( code, node, doc ) {
	doc = doc || document;

	var i, val,

		//创建脚本对象

		script = doc.createElement( "script" );

	//设置脚本的内容

	script.text = code;

	//节点存在的处理

	if ( node ) {
		for ( i in preservedScriptAttributes ) {

			// Support: Firefox <=64 - 66+, Edge <=18+
			// Some browsers don't support the "nonce" property on scripts.
			// On the other hand, just using `getAttribute` is not enough as
			// the `nonce` attribute is reset to an empty string whenever it
			// becomes browsing-context connected.
			// See https://github.com/whatwg/html/issues/2369
			// See https://html.spec.whatwg.org/#nonce-attributes
			// The `node.getAttribute` check was added for the sake of
			// `jQuery.globalEval` so that it can fake a nonce-containing node
			// via an object.
			//节点存在这个属性节点具有获取属性的功能且能够获取到这个属性，设置这个属性的值
			val = node[ i ] || node.getAttribute && node.getAttribute( i );
			if ( val ) {
				script.setAttribute( i, val );
			}
		}
	}
	doc.head.appendChild( script ).parentNode.removeChild( script );
}

export default DOMEval;
