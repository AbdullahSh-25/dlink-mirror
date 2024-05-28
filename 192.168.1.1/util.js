var BLANK_VALID = true;
var BLANK_INVALID = false;
var SPACE_VALID = true;
var SPACE_INVALID = false
var SLASH_VALID = true;
var SLASH_INVALID = false;
var IS_MAC_FLT = true;
var IS_NOT_MAC_FLT = false;
var ERROR_ENCODE_URL = "(E)(R)(R)(O)(R)%21%21(R)(O)(R)(R)(E).html";
var TYPE_NETWORK_ADDRESS = "NETWORK";
var TYPE_IP_ADDRESS = "IP";
var TYPE_BRCAST_ADDRESS = "BROADCAST";
DISABLED = true;
ENABLED = false;
function isHexaDigit(digit) {
var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f");
var len = hexVals.length;
var i = 0;
var ret = false;
for ( i = 0; i < len; i++ )
if ( digit == hexVals[i] ) break;
if ( i < len )
ret = true;
return ret;
}
function isValidKey(val, size, fieldname) {
var ret = false;
var len = val.length;
var dbSize = size * 2;
var addcomment1 = "Please enter 13 ASCII characters or 26 hexadecimal digits for a 128-bit WEP encryption key.";
var addcomment2 = "Please enter 5 ASCII characters or 10 hexadecimal digits for a 64-bit WEP encryption key.";
if ( len == size )
ret = true;
else if ( len == dbSize ) {
for ( i = 0; i < dbSize; i++ )
if ( isHexaDigit(val.charAt(i)) == false )
break;
if ( i == dbSize )
ret = true;
} else
ret = false;
if (fieldname != undefined)
if (ret == false){
if (size == 5)
alertInvalid (fieldname,val,addcomment2);
else if (size == 13)
alertInvalid (fieldname,val,addcomment1);
}
return ret;
}
function isValidHexKey(val, size) {
var ret = false;
if (val.length == size) {
for ( i = 0; i < val.length; i++ ) {
if ( isHexaDigit(val.charAt(i)) == false ) {
break;
}
}
if ( i == val.length ) {
ret = true;
}
}
return ret;
}
function isNameUnsafe(compareChar) {
var unsafeString = "\"<>%\\^[]`\+\$\,='#&: \t;";
if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
&& compareChar.charCodeAt(0) < 123 )
return false;
else
return true;
}
function isValidName(name,fieldname,isblankvalid,isSpaceValid,isSlashValid) {
var i = 0;
var hasField = false;
if (fieldname != undefined) hasField = true;
if (name=="")
if ((isblankvalid == undefined) || (isblankvalid == false))
{
if (hasField) alertInvalid(fieldname,name);
return false;
}
if ((isSpaceValid == undefined) || (isSpaceValid == false)){
for ( i = 0; i < name.length; i++ ) {
if ( isNameUnsafe(name.charAt(i)) == true )
{
if (hasField) alertInvalid(fieldname,name);
return false;
}
}
}
else
{
for ( i = 0; i < name.length; i++ ) {
if ( isCharUnsafe(name.charAt(i)) == true ){
if (hasField) alertInvalid(fieldname,name);
return false;
}
}
}
if ( isSlashValid==SLASH_INVALID ){
if ( name.indexOf("index.html") != -1 )
{
if (hasField) alertInvalid(fieldname,name);
return false;
}
}
return true;
}
function isCharUnsafe(compareChar) {
var unsafeString = "\"<>%\\^[]`\+\$\,='#&@.:\t;";
if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) >= 32
&& compareChar.charCodeAt(0) < 123 )
return false;
else
return true;
}
function isSameSubNet(lan1Ip, lan1Mask, lan2Ip, lan2Mask) {
var count = 0;
lan1a = lan1Ip.split('.');
lan1m = lan1Mask.split('.');
lan2a = lan2Ip.split('.');
lan2m = lan2Mask.split('.');
for (i = 0; i < 4; i++) {
l1a_n = parseInt(lan1a[i], 10);
l1m_n = parseInt(lan1m[i], 10);
l2a_n = parseInt(lan2a[i], 10);
l2m_n = parseInt(lan2m[i], 10);
if ((l1a_n & l1m_n) == (l2a_n & l2m_n))
count++;
}
if (count == 4)
return true;
else
return false;
}
function isValidIpAddress(address,fieldname,type) {
var i = 0;
var c = '';
var hasfield = false;
if (fieldname != undefined) hasfield = true;
if (address == "") {
if (hasfield) alertInvalid(fieldname,address);
return false;
}
for (i = 0; i < address.length; i++) {
c = address.charAt(i);
if((c>='0'&&c<='9')||(c=='.'))
continue;
else
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
}
if ( address == '0.0.0.0' ||
address == '255.255.255.255' )
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
addrParts = address.split('.');
for (i=0; i < addrParts.length; i++){
addrParts[i] = parseInt(addrParts[i],10);
addrParts[i] += "";
}
if ( addrParts.length != 4 ) {
if (hasfield) alertInvalid(fieldname,address);
return false;
}
for (i = 0; i < 4; i++) {
if (isNaN(addrParts[i]) || addrParts[i] =="")
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
num = parseInt(addrParts[i],10);
if ( num < 0 || num > 255 )
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
if (addrParts[i].length > 3)
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
}
if ((type == undefined) || (type==TYPE_IP_ADDRESS)){
if (parseInt(addrParts[0],10)==0||parseInt(addrParts[3],10)==0||parseInt(addrParts[0],10)==127||parseInt(addrParts[0],10)>223)
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
}else{
if (type == TYPE_NETWORK_ADDRESS){
if ((parseInt(addrParts[0],10)==0) || (parseInt(addrParts[0],10)==127)||parseInt(addrParts[0],10)>223)
{
if (hasfield) alertInvalid(fieldname,address);
return false;
}
}
}
return true;
}
function getLeftMostZeroBitPos(num) {
var i = 0;
var numArr = [128, 64, 32, 16, 8, 4, 2, 1];
for ( i = 0; i < numArr.length; i++ )
if ( (num & numArr[i]) == 0 )
return i;
return numArr.length;
}
function getRightMostOneBitPos(num) {
var i = 0;
var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
for ( i = 0; i < numArr.length; i++ )
if ( ((num & numArr[i]) >> i) == 1 )
return (numArr.length - i - 1);
return -1;
}
function isValidSubnetMask(mask,fieldname) {
var i = 0, num = 0;
var zeroBitPos = 0, oneBitPos = 0;
var zeroBitExisted = false;
var c = '';
var hasField = false;
if (fieldname != undefined) hasField = true;
for (i = 0; i < mask.length; i++) {
c = mask.charAt(i);
if((c>='0'&&c<='9')||(c=='.'))
continue;
else
{
if (hasField) alertInvalid(fieldname,mask);
return false;
}
}
if ( mask == '0.0.0.0' )
{
if (hasField) alertInvalid(fieldname,mask);
return false;
}
maskParts = mask.split('.');
if ( maskParts.length != 4 )
{
if (hasField) alertInvalid(fieldname,mask);
return false;
}
for (i=0; i<maskParts.length; i++)
if (maskParts[i].length < 1){
if (hasField) alertInvalid(fieldname,mask);
return false;
}
for (i = 0; i < 4; i++) {
if ( isNaN(maskParts[i]) == true ){
if (hasField) alertInvalid(fieldname,mask);
return false;
}
num = parseInt(maskParts[i]);
if ( num < 0 || num > 255 ) {
if (hasField) alertInvalid(fieldname,mask);
return false;
}
if ( zeroBitExisted == true && num != 0 ) {
if (hasField) alertInvalid(fieldname,mask);
return false;
}
zeroBitPos = getLeftMostZeroBitPos(num);
oneBitPos = getRightMostOneBitPos(num);
if ( zeroBitPos < oneBitPos ) {
if (hasField) alertInvalid(fieldname,mask);
return false;
}
if ( zeroBitPos < 8 )
zeroBitExisted = true;
}
if (parseInt(maskParts[0])==0) {
if (hasField) alertInvalid(fieldname,mask);
return false;
}
if (parseInt(maskParts[3])>=255) {
if (hasField) alertInvalid(fieldname,mask);
return false;
}
return true;
}
function isValidPort(port,fieldname) {
var fromport = 0;
var toport = 100;
var hasField = false;
if (fieldname != undefined) hasField = true;
portrange = port.split(':');
if ( portrange.length < 1 || portrange.length > 2 ) {
{
if (hasField) alertInvalid(fieldname,port);
return false;
}
}
if ( isNaN(portrange[0]) )
{
if (hasField) alertInvalid(fieldname,port);
return false;
}
fromport = (portrange[0] * 1);
if ( portrange.length > 1 ) {
if ( isNaN(portrange[1]) )
{
if (hasField) alertInvalid(fieldname,port);
return false;
}
toport = (portrange[1] * 1);
if ( toport <= fromport )
{
if (hasField) alertInvalid(fieldname,port);
return false;
}
}
if ( fromport < 1 || fromport > 65535 || toport < 1 || toport > 65535 )
{
if (hasField) alertInvalid(fieldname,port);
return false;
}
return true;
}
function isValidNatPort(port) {
var fromport = 0;
var toport = 100;
portrange = port.split('-');
if ( portrange.length < 1 || portrange.length > 2 ) {
return false;
}
if ( isNaN(portrange[0]) )
return false;
fromport = (portrange[0] * 1);
if ( portrange.length > 1 ) {
if ( isNaN(portrange[1]) )
return false;
toport = (portrange[1] * 1);
if ( toport <= fromport )
return false;
}
if ( fromport < 1 || fromport > 65535 || toport < 1 || toport > 65535 )
return false;
return true;
}
function isValidMacAddress(address,ismacflt,fieldname) {
var c = '';
var i = 0, j = 0;
var hasField;
var additionalComment = " e.g. 00:22:33:AA:BB:CC";
if (fieldname != undefined) hasField = true;
if ((ismacflt == undefined) || (ismacflt == false)){
if (( address.toLowerCase() == 'ff:ff:ff:ff:ff:ff' ) || ( address.toLowerCase() == '00:00:00:00:00:00' )){
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
}
addrParts = address.split(':');
if ( addrParts.length != 6 ) {
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
for (i = 0; i < 6; i++) {
if ( addrParts[i] == '' ){
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
if (addrParts[i].length != 2){
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
for ( j = 0; j < addrParts[i].length; j++ ) {
c = addrParts[i].toLowerCase().charAt(j);
if ( (c >= '0' && c <= '9') ||
(c >= 'a' && c <= 'f') )
continue;
else
{
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
}
}
if ((parseInt(addrParts[0], 16) % 2) == 1){
if (hasField) alertInvalid(fieldname,address,additionalComment);
return false;
}
return true;
}
function isValidMacFltAddress(address,fieldname) {
var c = '';
var i = 0, j = 0;
var hasField = false;
var additionalComment = " Eg. 00:22:33:AA:BB:CC";
if (fieldname != undefined) hasField = true;
addrParts = address.split(':');
if ( addrParts.length != 6 ) return false;
for (i = 0; i < 6; i++) {
if ( addrParts[i] == '' )
{
alertInvalid(fieldname,address,additionalComment);
return false;
}
if (addrParts[i].length != 2)
{
alertInvalid(fieldname,address,additionalComment);
return false;
}
for ( j = 0; j < addrParts[i].length; j++ ) {
c = addrParts[i].toLowerCase().charAt(j);
if ( (c >= '0' && c <= '9') ||
(c >= 'a' && c <= 'f') )
continue;
else
{
alertInvalid(fieldname,address,additionalComment);
return false;
}
}
}
return true;
}
var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,'#&";
function isUnsafe(compareChar)
{
if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
&& compareChar.charCodeAt(0) < 123 )
return false;
else
return true;
}
function decToHex(num, radix)
{
var hexString = "";
while ( num >= radix ) {
temp = num % radix;
num = Math.floor(num / radix);
hexString += hexVals[temp];
}
hexString += hexVals[num];
return reversal(hexString);
}
function reversal(s)
{
var len = s.length;
var trans = "";
for (i = 0; i < len; i++)
trans = trans + s.substring(len-i-1, len-i);
s = trans;
return s;
}
function convertSpclChar (compareChar) {
var i_ctr = 0;
var toConvertString = "\"<>%\\^[]`\+\$\,='#&: \t";
var returnString = "";
while (i_ctr < compareChar.length){
if (toConvertString.indexOf(compareChar.charAt(i_ctr)) == -1)
returnString = returnString + compareChar.charAt(i_ctr);
else
returnString = returnString + convert(compareChar.charAt(i_ctr));
i_ctr++;
}
return returnString
}
function checkFile(txtBox)
{
var OS = GetBrowserOS();
if (txtBox.length == 0)
{
alert("Please enter a valid filename.");
return false;
}
if (OS.indexOf("win")!=-1){
if (txtBox.indexOf("\\\\")!=-1)
return true;
temp = txtBox.search(":");
if (temp != 1)
{
alert("Please enter a valid filename.");
return false;
}
}
return true;
}
function convert(val)
{
return "%" + decToHex(val.charCodeAt(0), 16);
}
function encodeUrl(val,fieldname)
{
var len = val.length;
var i = 0;
var newStr = "";
var original = val;
var hasField = false;
if (fieldname != undefined ) hasField = true;
for ( i = 0; i < len; i++ ) {
if ( val.substring(i,i+1).charCodeAt(0) < 127 ) {
if (isUnsafe(val.substring(i,i+1)) == false)
newStr = newStr + val.substring(i,i+1);
else
newStr = newStr + convert(val.substring(i,i+1));
} else {
newStr = original;
if (hasField) {
alertInvalid(fieldname,val);
newStr = ERROR_ENCODE_URL;
}
i = len;
}
}
return newStr;
}
var markStrChars = "\"'";
function isMarkStrChar(compareChar)
{
if ( markStrChars.indexOf(compareChar) == -1 )
return false;
else
return true;
}
function processMarkStrChars(str) {
var i = 0;
var retStr = '';
for ( i = 0; i < str.length; i++ ) {
if ( isMarkStrChar(str.charAt(i)) == true )
retStr += '\\';
retStr += str.charAt(i);
}
return retStr;
}
function showhide(element, sh)
{
var status;
if (sh == 1) {
status = "block";
}
else {
status = "none"
}
if (document.getElementById)
{
document.getElementById(element).style.display = status;
}
else if (document.all)
{
document.all[element].style.display = status;
}
else if (document.layers)
{
document.layers[element].display = status;
}
}
function getSelect(item)
{
var idx;
if (item.options.length > 0) {
idx = item.selectedIndex;
return item.options[idx].value;
}
else {
return '';
}
}
function setSelect(item, value)
{
for (i=0; i<item.options.length; i++) {
if (item.options[i].value == value) {
item.selectedIndex = i;
break;
}
}
}
function setCheck(item, value)
{
if ( value == '1' ) {
item.checked = true;
} else {
item.checked = false;
}
}
function setDisable(item, value)
{
if ( value == 1 || value == '1' ) {
item.disabled = true;
} else {
item.disabled = false;
}
}
function submitText(item)
{
return '&' + item.name + '=' + item.value;
}
function submitSelect(item)
{
return '&' + item.name + '=' + getSelect(item);
}
function submitCheck(item)
{
var val;
if (item.checked == true) {
val = 1;
}
else {
val = 0;
}
return '&' + item.name + '=' + val;
}
function isInteger(val)
{
var i;
val = val + "";
if (val == "")
return false;
for (i=0; i<val.length; i++ )
{
ch = val.charAt(i);
if( (ch==' ')||(ch=='\n')||(ch=='\t') )
return false;
if (isNaN(ch))
return false;
}
return true;
}
function isInValidRange(s,low,high,fieldname) {
if((isInteger(s) == false)||(isNaN(s)==true))
{
if (fieldname != undefined) alertInvalid(fieldname,s);
return false;
}
s = parseInt(s,10);
if(s<low||s>high){
if (fieldname != undefined) alert (fieldname + " " + s + " is out of range [" + low + "-" + high + "].");
return false;
}
else
return true;
}
function isBlank(s) {
var c;
for(i=0;i<s.length;i++) {
c = s.charAt(i);
if( (c!=' ')&&(c!='\n')&&(c!='\t') )
return false;
}
return true;
}
function isValidName_Voice(raw)
{
var i;
var ch;
if(raw == "")
{
return true;
}
else if(raw.length != 0)
{
for(i = 0; i<raw.length; i++)
{
ch = raw.charAt(i);
if(ch.search(/[0-9]|[a-z]|[A-Z]|-/) == -1)
{
return false;
}
}
}
return true;
}
function isValidPassword(val)
{
var ch;
for(j = 0; j < val.length; j++)
{
ch = val.charAt(j);
if (ch.search(/[0-9]|[a-z]|[A-Z]/) == -1)
return false;
}
return true;
}
function isFormElements_UsedByAddress(name)
{
var isExists = false;
for(i=0; i<document.forms[0].elements.length;i++)
{
if(document.forms[0].elements[i].name == name)
{
isExists = true;
break;
}
}
if(document.forms[0].elements[i].value == "")
{
document.forms[0].elements[i].value = '0.0.0.0';
return ('0.0.0.0');
}
else
return (document.forms[0].elements[i].value);
}
function isFormElements_Checked(name)
{
var isExists = false;
for(i=0; i<document.forms[0].elements.length;i++)
{
if(document.forms[0].elements[i].name == name)
{
isExists = true;
break;
}
}
if(document.forms[0].elements[i].checked == true)
return true;
else
return false;
}
function isFormElements(name)
{
var isExists = false;
for(i=0; i<document.forms[0].elements.length;i++)
{
if(document.forms[0].elements[i].name == name)
{
isExists = true;
break;
}
}
if(document.forms[0].elements[i].value == "")
{
document.forms[0].elements[i].value = 0;
return (0);
}
else
return (document.forms[0].elements[i].value);
}
function SetFormElementsFocus(name)
{
var isExists = false;
for(i=0; i<document.forms[0].elements.length;i++)
{
if(document.forms[0].elements[i].name == name)
{
isExists = true;
document.forms[0].elements[i].focus();
break;
}
}
return (isExists);
}
function isValidIPOrDomainName(str)
{
var i;
var str_array = str.split(".");
for (i=0; i<str_array.length; i++ )
{
if (str_array[i] == "")
return false;
}
for (i=0; i<str_array.length; i++ )
{
if (!isInteger(str_array[i]))
break;
}
if (i == str_array.length)
{
if (str_array.length == 4)
{
if (!isValidIpAddress(str))
return false;
}
else
return false;
}
return true;
}
function GetBrowserOS()
{
var detect = navigator.userAgent.toLowerCase();
var OS,browser,version,total,thestring, browseVer;
if (do_checkstr('konqueror'))
{
browser = "Konqueror";
OS = "Linux";
}
else if (do_checkstr('safari')) browser = "safa";
else if (do_checkstr('omniweb')) browser = "omni";
else if (do_checkstr('opera')) browser = "oper";
else if (do_checkstr('webtv')) browser = "webt";
else if (do_checkstr('icab')) browser = "icab";
else if (do_checkstr('msie')) browser = "msie";
else if(navigator.userAgent.indexOf("Firefox")!=-1){
var versionindex=navigator.userAgent.indexOf("Firefox")+8
if (parseInt(navigator.userAgent.charAt(versionindex))>=1)
browser = "fire";
}
else if (!do_checkstr('compatible'))
{
browser = "nets"
}
else browser = "unknown";
if (browser != "unknown")
if (!OS)
{
if (do_checkstr('linux')) OS = "lin";
else if (do_checkstr('x11')) OS = "uni";
else if (do_checkstr('mac')) OS = "mac"
else if (do_checkstr('win')) OS = "win"
else OS = "unknown";
}
browseVer = browser + OS;
return browseVer;
}
function do_checkstr(string)
{
var detect = navigator.userAgent.toLowerCase();
place = detect.indexOf(string) + 1;
thestring = string;
return place;
}
function reencodeIP (IP)
{
var newIP = '';
addrParts = IP.split('.');
for (i=0; i < addrParts.length; i++)
if (i == 3)
newIP = newIP + parseInt(addrParts[i],10);
else
newIP = newIP + parseInt(addrParts[i],10) + '.';
return newIP;
}
function isOverlapModemIp(EndIp, StartIp, ModemIp)
{
addrEnd = EndIp.split('.');
addrStart = StartIp.split('.');
addrModem = ModemIp.split('.');
E = parseInt(addrEnd[3],10) + 1;
S = parseInt(addrStart[3],10) + 1;
M = parseInt(addrModem[3],10) + 1;
if ((S<=M) && (M<=E))
return true;
else
return false;
}
function alertInvalid(fieldname, fieldvalue, additional)
{
if (additional == undefined)
alert (fieldname + " " + fieldvalue + " is invalid.");
else
alert (fieldname + " " + fieldvalue + " is invalid, " + additional + ".");
}
function isValidTime(time,fieldname)
{
var vals;
var hasField = false;
var hour, min;
if (fieldname != undefined) hasField = true;
vals = time.split(':');
if (vals.length == 2){
if (!isInteger(vals[0]) || !isInteger(vals[1])){
if (hasField) alertInvalid(fieldname,time);
return -1;
}
hour = parseInt(vals[0],10);
min = parseInt(vals[1],10);
if (!isInValidRange(hour,0,23)){
if (hasField) alertInvalid(fieldname,time);
return -1;
}
if (!isInValidRange(min,0,59)){
if (hasField) alertInvalid(fieldname,time);
return -1;
}
}
else
{
if (hasField) alertInvalid(fieldname,time);
return -1;
}
return (hour * 60 + min);
}
function DoValidateIpRange(Subnet, Mask, type)
{
var Subadd = Subnet.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var Maskadd = Mask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
if ((Subnet == "") || (Mask =="")) return true;
var i;
var error=false;
var count = 0;
var snm1a = 255;
var snm2a = 255;
var snm3a = 255;
var snm4a = 255;
var nw1a = 0;
var nw2a = 0;
var nw3a = 0;
var nw4a = 0;
var broad1a = 255;
var broad2a = 255;
var broad3a = 255;
var broad4a = 255;
arrSubadd = Subadd[0].split(".");
arrMask = Maskadd[0].split(".");
snm1a = arrMask[0];
snm2a = arrMask[1];
snm3a = arrMask[2];
snm4a = arrMask[3];
var ck1a = arrSubadd[0];
var ck2a = arrSubadd[1];
var ck3a = arrSubadd[2];
var ck4a = arrSubadd[3];
nw1a = eval(snm1a & ck1a);
nw2a = eval(snm2a & ck2a);
nw3a = eval(snm3a & ck3a);
nw4a = eval(snm4a & ck4a);
broad1a = ((nw1a) ^ (~ snm1a) & 255);
broad2a = ((nw2a) ^ (~ snm2a) & 255);
broad3a = ((nw3a) ^ (~ snm3a) & 255);
broad4a = ((nw4a) ^ (~ snm4a) & 255);
if ((type == undefined) || (type == TYPE_IP_ADDRESS)){
if ((broad1a == arrSubadd[0]) && (broad2a == arrSubadd[1]) && (broad3a == arrSubadd[2]) && (broad4a == arrSubadd[3]))
{
errVal = "The combination of IP Address:" + Subnet + " and Subnet Mask:" + Mask;
alertInvalid("",errVal," please check your subnet mask.");
return false;
}
}
else if (type == TYPE_NETWORK_ADDRESS){
var tempIP = nw1a + "." + nw2a + "." + nw3a + "." + nw4a;
if (tempIP != Subnet){
errVal = Subnet + " and Subnet Mask: " + Mask;
alertInvalid ("The combination of Network Address: ",errVal);
return false;
}
}
else if (type == TYPE_BRCAST_ADDRESS){
var tempIP = broad1a + "." + broad2a + "." + broad3a + "." + broad4a;
if (tempIP != Subnet)
return false;
}
return true;
}
function DoValidateNetworkIP(Subnet, Mask)
{
var Subadd = Subnet.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var Maskadd = Mask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
if ((Subnet == "") || (Mask =="")) return true;
var i;
var error=false;
var count = 0;
var snm1a = 255;
var snm2a = 255;
var snm3a = 255;
var snm4a = 255;
var nw1a = 0;
var nw2a = 0;
var nw3a = 0;
var nw4a = 0;
var broad1a = 255;
var broad2a = 255;
var broad3a = 255;
var broad4a = 255;
arrSubadd = Subadd[0].split(".");
arrMask = Maskadd[0].split(".");
snm1a = arrMask[0];
snm2a = arrMask[1];
snm3a = arrMask[2];
snm4a = arrMask[3];
var ck1a = arrSubadd[0];
var ck2a = arrSubadd[1];
var ck3a = arrSubadd[2];
var ck4a = arrSubadd[3];
nw1a = eval(snm1a & ck1a);
nw2a = eval(snm2a & ck2a);
nw3a = eval(snm3a & ck3a);
nw4a = eval(snm4a & ck4a);
broad1a = ((nw1a) ^ (~ snm1a) & 255);
broad2a = ((nw2a) ^ (~ snm2a) & 255);
broad3a = ((nw3a) ^ (~ snm3a) & 255);
broad4a = ((nw4a) ^ (~ snm4a) & 255);
var tempIP = nw1a + "." + nw2a + "." + nw3a + "." + nw4a;
if (tempIP == Subnet){
errVal = Subnet + " and Subnet Mask: " + Mask;
alertInvalid ("The combination of IP Address: ",errVal);
return false;
}
return true;
}
function getBroadcastIP(HostIp, Mask)
{
var Hostadd = HostIp.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var Maskadd = Mask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var digits1, digits3;
var result;
var count = 0;
var oct1a = 0;
var oct2a = 0;
var oct3a = 0;
var oct4a = 0;
var snm1a = 255;
var snm2a = 255;
var snm3a = 255;
var snm4a = 255;
var nw1a = 0;
var nw2a = 0;
var nw3a = 0;
var nw4a = 0;
var broad1a = 255;
var broad2a = 255;
var broad3a = 255;
var broad4a = 255;
digits1 = Hostadd[0].split(".");
digits3 = Maskadd[0].split(".");
oct1a = digits1[0];
oct2a = digits1[1];
oct3a = digits1[2];
oct4a = digits1[3];
snm1a = digits3[0];
snm2a = digits3[1];
snm3a = digits3[2];
snm4a = digits3[3];
nw1a = eval(snm1a & oct1a);
nw2a = eval(snm2a & oct2a);
nw3a = eval(snm3a & oct3a);
nw4a = eval(snm4a & oct4a);
broad1a = ((nw1a) ^ (~ snm1a) & 255);
broad2a = ((nw2a) ^ (~ snm2a) & 255);
broad3a = ((nw3a) ^ (~ snm3a) & 255);
broad4a = ((nw4a) ^ (~ snm4a) & 255);
result = broad1a + "." + broad2a + "." + broad3a + "." + broad4a
return result;
}
function isDateValid(year, month, day)
{
if (month == 2) {
if ( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) )
{
if(day > 29) return 0;
}
else
{
if(day > 28) return 0;
}
}
else if ((month == 4)||(month == 6)||(month == 9)||(month == 11))
{
if(day > 30) return 0;
}
return 1;
}
function isValidEmail(fieldvalue,fieldname){
var hasField = false;
if (fieldname != undefined) hasField = true;
if (!isValidName(fieldvalue,fieldname,BLANK_INVALID,SPACE_INVALID)) return false;
var tmpIndex = fieldvalue.indexOf('@');
var dotIndex = fieldvalue.indexOf('.');
if ((tmpIndex == -1) || (dotIndex == -1) || (tmpIndex == fieldvalue.length -1) || (dotIndex == fieldvalue.length -1)
|| (tmpIndex == 0) || (dotIndex == 0)){
if (hasField) alertInvalid (fieldname,fieldvalue);
return false;
}
return true;
}
function changeBlockState(idname,status){
var i,currentcolor;
var OS = GetBrowserOS();
var tempelems = document.getElementById(idname).getElementsByTagName("*");
if (status == false)
currentcolor = "black";
else
currentcolor = "#aca899";
for (i = 0; i < tempelems.length;i++){
if (tempelems[i].disabled != undefined)
tempelems[i].disabled = status;
if (OS.indexOf("msie")!= -1){
if (tempelems[i].style.color)
tempelems[i].style.color = currentcolor;
}
else{
if (tempelems[i].style.color != undefined)
tempelems[i].style.color = currentcolor;
}
}
var tempelems = document.getElementById(idname);
if (tempelems.disabled != undefined)
tempelems.disabled = status;
if (OS.indexOf("msie")!= -1){
if (tempelems.style.color)
tempelems.style.color = currentcolor;
}
else{
if (tempelems.style.color != undefined)
tempelems.style.color = currentcolor;
}
}
function TcpIdToString(value){
var tempVal = '';
switch (value) {
case '0':
tempVal = 'TCP/UDP';
break;
case '1':
tempVal = 'TCP';
break;
case '2':
tempVal = 'UDP';
break;
case '3':
tempVal = 'ICMP';
break;
default:
tempVal = 'Any';
break;
}
return tempVal
}
function DoValidateIpRangeCheck(Subnet, Mask, type)
{
var Subadd = Subnet.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var Maskadd = Mask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
if(Subadd == null)
return -1;
if(Maskadd == null)
return -2;
for (i = 0; i < Subnet.length; i++) {
c = Subnet.charAt(i);
if((c>='0'&&c<='9')||(c=='.'))
continue;
else
return -1;
}
for (i = 0; i < Mask.length; i++) {
c = Mask.charAt(i);
if((c>='0'&&c<='9')||(c=='.'))
continue;
else
return -2;
}
var i;
var error=false;
var count = 0;
var snm1a = 255;
var snm2a = 255;
var snm3a = 255;
var snm4a = 255;
var nw1a = 0;
var nw2a = 0;
var nw3a = 0;
var nw4a = 0;
var broad1a = 255;
var broad2a = 255;
var broad3a = 255;
var broad4a = 255;
arrSubadd = Subadd[0].split(".");
arrMask = Maskadd[0].split(".");
snm1a = arrMask[0];
snm2a = arrMask[1];
snm3a = arrMask[2];
snm4a = arrMask[3];
var ck1a = arrSubadd[0];
var ck2a = arrSubadd[1];
var ck3a = arrSubadd[2];
var ck4a = arrSubadd[3];
nw1a = eval(snm1a & ck1a);
nw2a = eval(snm2a & ck2a);
nw3a = eval(snm3a & ck3a);
nw4a = eval(snm4a & ck4a);
broad1a = ((nw1a) ^ (~ snm1a) & 255);
broad2a = ((nw2a) ^ (~ snm2a) & 255);
broad3a = ((nw3a) ^ (~ snm3a) & 255);
broad4a = ((nw4a) ^ (~ snm4a) & 255);
if ((type == undefined) || (type == TYPE_IP_ADDRESS)){
if ((broad1a == arrSubadd[0]) && (broad2a == arrSubadd[1]) && (broad3a == arrSubadd[2]) && (broad4a == arrSubadd[3]))
{
return -2;
}
}
else if (type == TYPE_NETWORK_ADDRESS){
var tempIP = nw1a + "." + nw2a + "." + nw3a + "." + nw4a;
if (tempIP != Subnet){
return -3;
}
}
else if (type == TYPE_BRCAST_ADDRESS){
var tempIP = broad1a + "." + broad2a + "." + broad3a + "." + broad4a;
if (tempIP != Subnet)
return -4;
}
return true;
}
function valIsBroadcastIP(HostIp, Mask)
{
var broadIP = getBroadcastIP(HostIp, Mask);
var hostIPSplit = HostIp.split(".");
var broadIPSlip = broadIP.split(".");
var result = true;
for (i = 0; i < 4; i++) {
if (hostIPSplit[i] != broadIPSlip[i])
result = false;
}
return result;
}
function isEndIpBigerStartIP(EndIp, StartIp)
{
addrEnd = EndIp.split('.');
addrStart = StartIp.split('.');
valueS = eval(addrStart[0] * 16777216) + eval(addrStart[1] * 65536) + eval(addrStart[2] * 256) + eval(addrStart[3]);
valueE = eval(addrEnd[0] * 16777216) + eval(addrEnd[1] * 65536) + eval(addrEnd[2] * 256) + eval(addrEnd[3]);
if (valueE <= valueS)
return false;
return true;
}
var idxStr = '4';
function getMsgIndex() {
var idxNum = parseInt(idxStr);
if ( isNaN(idxNum) || idxNum < 0 || idxNum > 4 )
idxNum = 4;
return idxNum;
}
var count = 0;
var total = '100';
var interval;
var needReset = 1;
function reboot() {
var loc = ' ';
if ( getMsgIndex() != 2 )
{
if(count < 20)
{
count ++;
status="";
if (document.getElementById)
document.getElementById('status').style.display = "inline";
else
{
if (document.layers == false)
document.all.status.style.display = "inline";
}
if (document.getElementById('uiStatus').innerHTML.length < 100)
document.getElementById('uiStatus').innerHTML = document.getElementById('uiStatus').innerHTML + "|||||";
document.getElementById('uiPercent').innerHTML = parseInt(((count / 20) * 100), 10) + '%';
setTimeout('reboot()', interval);
}
else
{
var loc = 'wizard.html';
var code = 'location="' + loc + '"';
eval(code);
}
}
}
function frmLoad() {
var status;
if (needReset== 1)
{
if (getMsgIndex() != 0 || 1 == 2)
total=70;
interval = total*50;
reboot();
}
if (needReset == 0)
status="visible";
else
status="hidden";
if (document.layers == false)
document.all.back.style.visibility = status;
}
function frmUpload() {
var status;
if (needReset== 1)
{
if (getMsgIndex() != 0 || 1 == 2)
total=70;
interval = total*100;
reboot();
}
if (needReset == 0)
status="visible";
else
status="hidden";
if (document.layers == false)
document.all.back.style.visibility = status;
}


