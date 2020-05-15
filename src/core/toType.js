//对象
import class2type from "../var/class2type.js";

//转换为字符串
import toString from "../var/toString.js";

/**
 * 返回传入的obj的数据类型
 * @param {*} obj
 */
function toType( obj ) {

	//对象为空返回"null"

	if ( obj == null ) {
		return obj + "";
	}

	//obj类型为对象,这里终于明白了对于是symbol和function能够返回正确的数据类型
	return typeof obj === "object" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

export default toType;
