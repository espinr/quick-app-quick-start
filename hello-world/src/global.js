/**
 * @file Configuration and acquisition of global capabilities
 * Document address: https://doc.quickapp.cn/tutorial/framework/optimization-skills.html#%E4%BD%BF%E7%94%A8-globaljs
 */

 function getGlobalRef() {
  return Object.getPrototypeOf(global) || global
}

const quickappGlobal = getGlobalRef()

/**
 * Set global data (shared by APP and Page);
 * @param key {string}
 * @param val {*}
 */
function setGlobalData(key, val) {
  quickappGlobal[key] = val
}

/**
 * Get global data (shared by APP and Page);
 * @param key {string}
 * @return {*}
 */
function getGlobalData(key) {
  return quickappGlobal[key]
}

// The two methods are defined globally by default
setGlobalData('setGlobalData', setGlobalData)
setGlobalData('getGlobalData', getGlobalData)

export {setGlobalData, getGlobalData}