/**
 * @author      Pierre-Henry Soria
 * @email       ph7software@gmail.com
 * @link        http://github.com/pH-7/Disable-Copying-JS
 * @copyright   Copyright Pierre-Henry Soria, All Rights Reserved.
 * @license     CC BY - http://creativecommons.org/licenses/by/3.0/
 */

function disableSelect() {
  return false;
}

function reEnable() {
  return true;
}

// If IE4+
document.onselectstart = new Function ("return false");
document.oncontextmenu = new Function ("return false");

// If NS6
if (window.sidebar) {
  document.onmousedown = disableSelect();
  document.onclick = reEnable();
}
