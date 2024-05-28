function openSupport(){
window.open('http://support.dlink.com/', '', '');
}
var TabHeader="";
var SideItem="";
var HelpItem="";
var ModemVer="DSL-2740U";
var FirmwareVer="ME_1.03";

var WizardInfo = '1';

 var CSetup = 1;
var CAdvanced = 2;
var CMaintain = 3;
var CStatus = 4;
var CHelp = 5;
var CEnd = 5;
var delaytimer=300;
var user = 'admin';
var proto = 'PPPoE';
var ipExt = '0';
var dhcpen = '1';
var std = 'annex_a';
var wireless = '1';
 var voice = '';
var buildDdnsd = '1';
var buildSntp = '1';
var buildPureBridge = '0';
var buildPortmap = '1';
var ShowTR069 = '1';
 var buildipp = '0';
var buildSes = '';
var siproxd = '0';
var tod = '1';
var QosEnabled = 'false';
var buildRip = '1';
var buildUsbHost = '0';
var buildUsbFtp = '0';
var buildUsbSmb = '0';
var ipsec = '0';
var certificate = '1';
var wirelessqos = '1';
var tr69c = '1';
var buildPptpClient = '&nbsp';
var buildDOS = '1';
var buildPT = '1';
var buildQoS='1';
var urlFilter = '1';
var iptSchedule = '1';
var buildUpnp = '1';
var usb_printer = '0';
 var QuickSetup=0;
var VirtualServers=0;
var PortTriggering=0;
var DMZHost=0;
var ALG=0;
var Outgoing=0;
var Incoming=0;
var Filter=0;
var AttackPrevent=0;
var MACFiltering=0;
var ParentalControl=0;
var QualityofService=0;
var DefaultGateway=0;
var StaticRoute=0;
var RIP=0;
var Routing=0;
var DNSServer=0;
var DynamicDNS=0;
var Annex="";
var PortMapping=0;
var PPTPClient=0;
var IPSec=0;
var wlBasic=0;
var wlSecurity=0;
var wlMACFilter=0;
var wlBridge=0;
var wlAdvanced=0;
var wlQos=0;
var wlSES=0;
var wlStationInfo=0;
var WirelessAdv=0;
var MassStorage=0;
var PrintServer=0;
var Settings=0;
var SelfTroubleShoot=0;
var TR069Client=0;
var cert = 0;
var InternetTime=0;
var AccessControl=0;
var Security="";
var UpdateSoftware=0;
var schedule = 0;
var statswanweb="statsifcwan.html";
if ( user != 'support' && user != 'user') {
if ( buildPureBridge == 0) {
VirtualServers=1;
if(buildPT == '1')
PortTriggering=1;
DMZHost=1;
if ( siproxd == '1' )
ALG =1;
Outgoing=1;
Incoming=1;
MACFiltering=1;
Filter=1;
if (buildDOS == '1')
AttackPrevent=1;
if (( tod == '1' ) || (urlFilter == '1'))
ParentalControl=1;
if (iptSchedule=='1')
schedule = 1;
}
}
if ( buildPureBridge == 0) {
QuickSetup=1;
if ( user != 'user') {
if (buildQoS == '1')
QualityofService=1;
DefaultGateway=1;
StaticRoute=1;
Routing=1;
if ( buildRip == '1')
RIP=1;
DNSServer=1;
if ( buildDdnsd == '1')
DynamicDNS=1;
}
}
if ( std == 'annex_c' )
Annex="adslcfgc.html";
else
Annex="adslcfg.html";
if ( buildPortmap == '1' ) {
PortMapping=1;
}
if ( buildPptpClient == '1' ) {
PPTPClient=1;
}
if ( ipsec == '1' ) {
IPSec=1;
}
if ( user != 'user'){
statswanweb="statsifcwanber.html";
if (certificate == '1') {
cert = 1;
}
if ( tr69c == '1' )
TR069Client=1;
}
if ( wireless == '1' ) {
wlBasic=1;
wlSecurity=1;
wlMACFilter=1;
wlBridge=1;
wlAdvanced=1;
WirelessAdv=1;
if (buildQoS == '1'){
if ( wirelessqos == '1' ) {
wlQos=1;
}
}
if ( buildSes == '1' ) {
wlSES=1;
}
wlStationInfo=1;
}
if ( buildUsbHost == '1' ) {
if ( buildUsbFtp == '1' || buildUsbSmb == '1' ) {
MassStorage=1;
}
if ( buildipp == '1' ) {
PrintServer=1;
}
}
if ( user != 'user') {
Settings=1;
if ( (buildPureBridge == '0') && (buildSntp == '1') )
InternetTime=1;
AccessControl=1;
}
var SetupMenu=new Array();
var AdvMenu=new Array();
var MaintainMenu = new Array();
var StatMenu=new Array();
var HelpMenu=new Array();
var SiteMenu=new Array();
var TabMenu = new Array();
var tabPos = GetTABpos();
var index = 0;
SetupMenu[index++]=new Gitem(CSetup, "Wizard", "internet.html", WizardInfo, "setuphelp.html", -1);
SetupMenu[index++]=new Gitem(CSetup, "Local Network", "tcpiplan.html", 1, "setuphelp.html", 0);
SetupMenu[index++]=new Gitem(CSetup, "Internet Setup", "wanadsl_auto_droute.html", 1, "setuphelp.html", 1);
SetupMenu[index++]=new Gitem(CSetup, "Wireless Setup", "wlbasic.html", wlBasic, "setuphelp.html", 2);
SetupMenu[index++]=new Gitem(CSetup, "Time and Date", "time.html", InternetTime, "setuphelp.html", -1);
index = 0;
AdvMenu[index++]=new Gitem(CAdvanced, "Advanced Wireless", "wladvanced.html", wlAdvanced, "advhelp.html", 3);
AdvMenu[index++]=new Gitem(CAdvanced, "Access Control List", "acl.html", 1, "advhelp.html", 9);
AdvMenu[index++]=new Gitem(CAdvanced, "Port Triggering", "nat_portrigger.html", 1, "advhelp.html", -1);
AdvMenu[index++]=new Gitem(CAdvanced, "Port Forwarding", "virtualSrv.html", 1, "advhelp.html", -1);
AdvMenu[index++]=new Gitem(CAdvanced, "DMZ", "fw-dmz.html", 1, "advhelp.html", -1);
AdvMenu[index++]=new Gitem(CAdvanced, "Parent Control", "parent_ctrl.html", ParentalControl, "advhelp.html", 11);
AdvMenu[index++]=new Gitem(CAdvanced, "Filtering Options", "fw-ipportfilter_adv.html", Filter, "advhelp.html", 4);
AdvMenu[index++]=new Gitem(CAdvanced, "DOS Settings", "dos.html", AttackPrevent, "advhelp.html", -1);
AdvMenu[index++]=new Gitem(CAdvanced, "DNS", "dns.html", 1, "advhelp.html", 10);
AdvMenu[index++]=new Gitem(CAdvanced, "Dynamic DNS", "ddns.html", 1, "advhelp.html", -1);
if(PortMapping) {
AdvMenu[index++]=new Gitem(CAdvanced, "Network Tools", "portmap.html", PortMapping, "advhelp.html", 5);
}else
{
AdvMenu[index++]=new Gitem(CAdvanced, "Network Tools", "igmproxy.html", 1, "advhelp.html", 5);
}
AdvMenu[index++]=new Gitem(CAdvanced, "Routing", "routing.html", 1, "advhelp.html", 6);
AdvMenu[index++]=new Gitem(CAdvanced, "NAT", "fw-natpass.html", 1, "advhelp.html", 7);
if(usb_printer == '1')
{
AdvMenu[index++]=new Gitem(CAdvanced, "USB Printer", "cups.html", 1, "advhelp.html", -1);
}
index = 0;
MaintainMenu[index++]=new Gitem(CMaintain, "System", "system.html", 1, "mainhelp.html", -1);
MaintainMenu[index++]=new Gitem(CMaintain, "Firmware Update", "upload.html", 1, "mainhelp.html", -1);
MaintainMenu[index++]=new Gitem(CMaintain, "Password", "userconfig.html", 1, "mainhelp.html",-1);
MaintainMenu[index++]=new Gitem(CMaintain, "Diagnostics", "ping.html", 1, "mainhelp.html", 8);
MaintainMenu[index++]=new Gitem(CMaintain, "System Log", "logging.html", 1, "mainhelp.html", -1);
MaintainMenu[index++]=new Gitem(CMaintain, "Logout", "weblogout.html", 1, "", -1);
index = 0;
StatMenu[index++]=new Gitem(CStatus, "Device Info", "status.html", 1, "statushelp.html", -1);
StatMenu[index++]=new Gitem(CStatus, "Wireless Clients", "wlclients.html", wlBasic, "statushelp.html", -1);
StatMenu[index++]=new Gitem(CStatus, "DHCP Clients", "dhcpclients.html", 1, "statushelp.html", -1);
StatMenu[index++]=new Gitem(CStatus, "ADSL Driver", "adslconfig.html", 1, "statushelp.html", -1);
StatMenu[index++]=new Gitem(CStatus, "Statistics", "stats.html", 1, "statushelp.html", -1);
StatMenu[index++]=new Gitem(CStatus, "Route Info", "routeinfo.html", 1, "statushelp.html", -1);
index = 0;
HelpMenu[index++]=new Gitem(CHelp, "Menu", "helpmenu.html", 1, "", -1);
HelpMenu[index++]=new Gitem(CHelp, "Setup", "helpsetup.html", 1, "", -1);
HelpMenu[index++]=new Gitem(CHelp, "Advanced", "helpadv.html", 1, "", -1);
HelpMenu[index++]=new Gitem(CHelp, "Maintenance", "helpmain.html", 1, "", -1);
HelpMenu[index++]=new Gitem(CHelp, "Status", "helpstatusinfo.html", 1, "", -1);
SiteMenu[0 ]=new Gitem(CHelp, "", "", 0, "", -1);
var setup=getDefaultPage(0);
var adv=getDefaultPage(1);
var maintenace=getDefaultPage(2);
var status=getDefaultPage(3);
var help=getDefaultPage(4);
index = 0;
TabMenu[index++] =new Gtab("Setup", setup);
TabMenu[index++] =new Gtab("Advanced", adv);
TabMenu[index++] =new Gtab("Maintenance", maintenace);
TabMenu[index++] =new Gtab("Status", status);
TabMenu[index++] =new Gtab("Help", help);
function getDefaultPage(ID)
{
var sideMenu = SetupMenu;
if (ID == 1)
{
sideMenu = AdvMenu;
}
else if (ID == 2)
{
sideMenu = MaintainMenu;
}
else if (ID == 3)
{
sideMenu = StatMenu;
}
else if (ID == 4)
{
sideMenu = HelpMenu;
}
for(i=0;i < sideMenu.length;i++)
{
if (sideMenu[i].ishow == 1)
return sideMenu[i].surl;
}
}
function Gitem(ifolder,sname,surl,ishow,shelp, idmenu)
{
this.ifolder=ifolder;
this.sname=sname;
this.surl=surl;
this.ishow=ishow;
this.shelp=shelp;
this.idmenu = idmenu;
}
function Gtab(sname,surl)
{
this.sname=sname;
this.surl=surl;
}
function doLink(surl)
{
shref =""+surl;
document.location.href = shref;
}
function GetTABpos()
{
var tabOn = -1;
for(i=0; i < TabMenu.length; i++)
{
if (TabHeader == TabMenu[i].sname)
tabOn = i;
}
return tabOn;
}
function GetSidepos(menu)
{
var tabOn = -1;
for(i=0; i < menu.length; i++)
{
if (SideItem == menu[i].sname)
tabOn = i;
}
return tabOn;
}
function Write_Folder_Images()
{
var top1 = '<td width=140 class=';
var top2 = '><a href="';
var top3 = '">';
var top4 = '</a></td>';
var end = '<td style="background-color:white; width:2px;"></td>';
var result = "";
tabPos = GetTABpos();
for(i=0; i < TabMenu.length; i++)
{
if (tabPos == i)
result = result + top1 + 'topnavon rowspan=2' + top2 + TabMenu[i].surl + top3 + TabMenu[i].sname + top4 + end;
else
result = result + top1 + 'topnavoff' + top2 + TabMenu[i].surl + top3 + TabMenu[i].sname + top4 + end;
}
document.write(result);
if (tabPos == -1){
document.write('</tr><tr><td></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>');
} else {
document.write('</tr><tr><td></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td><td style="background-color:#404343;"></td>' +
'<td style="background-color:#404343;"></td>');
}
}
function Write_Item_Images()
{
var sideMenu = SetupMenu;;
var top = '<td id=sidenav_container><div id=sidenav><ul>';
var bottom = '</li></ul></div></td>';
var side1 = '<li><div onMouseover="showmenu(event,linkset[';
var side1_2 = '<li><div ';
var side2_1 = '><a href="';
var side2_2 = '], this)" onMouseout="delayhidemenu()" ';
var side2_3 = '><a href="';
var side3 = '">';
var side4 = '</a></div>';
var result = "";
if (tabPos == 0)
{
sideMenu = SetupMenu;
}
else if (tabPos == 1)
{
sideMenu = AdvMenu;
}
else if (tabPos == 2)
{
sideMenu = MaintainMenu;
}
else if (tabPos == 3)
{
sideMenu = StatMenu;
}
else if (tabPos == 4)
{
sideMenu = HelpMenu;
}
if (tabPos == -1)
{
sideMenu = SiteMenu;
}
var g_FID= GetSidepos(sideMenu);
for(i=0;i < sideMenu.length;i++)
{
if ((g_FID == i)&&(sideMenu[i].ishow == 1)){
if (sideMenu[i].idmenu > -1)
result = result + side1 + sideMenu[i].idmenu + side2_2 + ' class=sidenavoff id=dmenu' + sideMenu[i].idmenu + side2_3 + sideMenu[i].surl + side3 + sideMenu[i].sname + side4;
else
result = result + side1_2 + ' class=sidenavoff' + side2_1 + sideMenu[i].surl + side3 + sideMenu[i].sname + side4;
}else if (sideMenu[i].ishow == 1){
if (sideMenu[i].idmenu > -1)
result = result + side1 + sideMenu[i].idmenu + side2_2 + ' id=dmenu' + sideMenu[i].idmenu + side2_3 + sideMenu[i].surl + side3 + sideMenu[i].sname + side4;
else
result = result + side1_2 + side2_1 + sideMenu[i].surl + side3 + sideMenu[i].sname + side4;
}
}
document.write(top);
document.write(result);
if (tabPos == 4)
{
document.write('<li><div><a href="javascript:openSupport()">Support</a></div>');
}
document.write(bottom);
}
function mainTableStart()
{
var tabPos;
document.write('<style>');
document.write('div.overflow');
document.write('{');
document.write('	overflow: auto;');
if (HelpItem != ""){
document.write('	width: 530px;');
} else {
document.write('	width: 655px;');
}
document.write('}');
document.write('</style>');
tabPos = GetTABpos();
if (tabPos == 4)
document.write('<div align="center" style="display: hidden" id="tblmain">');
else
document.write('<div align="center" style="display: none" id="tblmain">');
document.write('<table cellSpacing=0 width="840"><tr><td>');
document.write('<table id=header_container width="840"><tr>');
document.write('<td align=left width="240">Product Page: ' + ModemVer + '</td>');
document.write('<td align=right width="600">Firmware Version: ' + FirmwareVer + '</td>');
document.write('</tr></table>');
document.write('<table cellSpacing=0 width=100%>');
document.write('<tr><td height=3 style="background:white"></td></tr>');
document.write('</table>');
}
function logo()
{
document.write('<table cellSpacing=0 width="840"><tr><td id=masthead_container width="840"><img alt="" src="img_masthead.gif" width=840></td></tr></table>');
}

function TopNav()
{
document.write('<table cellSpacing=0 width="100%" style="background-color:f1f1f1" Height=3px border=0><tr><td width="840"></td></tr></table>');
document.write('<table id=topnav_container2 border=0 cellSpacing=0><tr><td style="background-color:white; width:1px;"></td><td id=modnum rowspan=2 background="img_short_modnum.gif" style="font-size:10px"><b><em>&nbsp;' + ModemVer +'</em></b></td>');
document.write('<td style="background-color:white; width:2px;"></td>');
Write_Folder_Images();
document.write('</tr></table>');
document.write('<table cellSpacing=0 width="100%" style="background-color:f1f1f1" Height:3px border=0><tr><td width="840"></td></tr></table>');
}
function ThirdRowStart()
{
document.write('<table id=content_container cellSpacing=0 summary="" border=0 width="840"><tr>');
}
function mainBodyStart()
{
document.write('<td id=maincontent_container><table><tr><td>');
if (HelpItem != ""){
document.write('<div id=maincontent style="width:563">');
} else {
document.write('<div id=maincontent style="width:690">');
}
}
function mainBodyEnd()
{
document.write('</div>');
document.write('</td></tr></table></td>');
}
function ThirdRowEnd()
{
var sideMenu;
if (tabPos == 0)
{
sideMenu = SetupMenu;
}
else if (tabPos == 1)
{
sideMenu = AdvMenu;
}
else if (tabPos == 2)
{
sideMenu = MaintainMenu;
}
else if (tabPos == 3)
{
sideMenu = StatMenu;
}
else if (tabPos == 4)
{
sideMenu = HelpMenu;
}
else if (tabPos == -1)
{
sideMenu = SiteMenu;
}
var g_FID= GetSidepos(sideMenu);
if (HelpItem != ""){
document.write('<td id=sidehelp_container>');
document.write('<div id=help_text>');
document.write('<label id="helpLabel"></label>');
document.write('<script language="Javascript" src="' + sideMenu[g_FID].shelp + '"></script>');
document.write('</div>');
document.write('</td>');
}
document.write('</tr></table>');
}
function Footer()
{
document.write('<table id=footer_container cellSpacing=0 border=0><tr><td id=leftimage>');
document.write('<img height=35 alt="" src="img_broadband_bottom.gif" width=114></td>');
document.write('<td><IFRAME id=attFrameid name=attention align=middle src=\"attention.htm\" height=35  width=100%% frameBorder=0 SCROLLING=\"no\" ></IFRAME></td>');
document.write('</tr></table>');
}
function mainTableEnd()
{
document.write('</td></tr></table><div id=copyright>Copyright &copy; 2005-2012 D-Link Systems, Inc.</div></div>');
setTimeout("document.getElementById('tblmain').style.display = 'block'", delaytimer);
}
function wizardHead()
{
document.write('<DIV align="center"><TABLE cellSpacing=0 width="840"><TR><TD>' +
'<TABLE id=header_container width="840"><TR><TD align=left width="200">Product Page: ' + ModemVer + '</TD><TD align=right width="50"></TD>' +
'<TD align=right width="550">Firmware Version: ' + FirmwareVer + '</TD></TR></TABLE>');
document.write('<TABLE cellSpacing=0 width=100%><TR><td height=3 style={background:white}></td></TR></TABLE>');
document.write('<table cellSpacing=0 width="840"><tr><td id=masthead_container width="840"><img alt="" src="img_masthead.gif" width=840></td></tr></table>');

 document.write('<TABLE cellSpacing=0 width="100%" style="background-color:f1f1f1" Height=3px border=0><TR><TD width="800"></TD></TR></TABLE>' +
'<TABLE cellSpacing=0 width="100%" style="background-color:f1f1f1" Height=3px border=0><TR><TD width="800"></TD></TR></TABLE>' +
'<TABLE id=content_container cellSpacing=0 summary="" border=0 width="800"><TR><TD width=78></TD><TD id=maincontent_container colspan=4><TABLE><TR><TD><DIV id=maincontent style="width:680">');
}
function wizardFooter()
{
document.write('</DIV></TD></TR></TABLE></TD></TR></TABLE><TABLE id=footer_container cellSpacing=0 border=0>' +
'<TR><TD id=leftimage><IMG height=35 alt="" src="img_broadband_bottom.gif" width=114></TD><TD>&nbsp;</TD></TR></TABLE></TD></TR></TABLE>' +
'<DIV id=copyright>Copyright &copy; 2005-2012 D-Link Systems, Inc.</DIV></DIV>');
}
var defaultMenuWidth="130px"
var baseTop = 147;
var top = 27;
var width = 127;
var linkset=new Array()
linkset[0]='<div id=sidenav><ul>';
linkset[0]+='<li><div><a href="tcpiplan.html">LAN Interface</a></div>';
linkset[0]+='<li><div><a href="lan_ipv6.html">LAN IPv6 Interface</a></div>';
linkset[0]+='<li><div><a href="dhcpd.html">DHCP Server</a></div>';
linkset[0]+='<li><div><a href="dhcpip.html">DHCP Reserved</a></div>';
linkset[0]+='</li></ul></div>';
linkset[1]='<div id=sidenav><ul>';
linkset[1]+='<li><div><a href="wanadsl_auto_droute.html">Channel Config</a></div>';
linkset[1]+='<li><div><a href="wanatm.html">ATM Settings</a></div>';
linkset[1]+='<li><div><a href="adslset.html">ADSL Settings</a></div>';
linkset[1]+='<li><div><a href="autopvc.html">PVC Auto Search</a></div>';
linkset[1]+='</li></ul></div>';
linkset[2]='<div id=sidenav><ul>';
linkset[2]+='<li><div><a href="wlbasic.html">Wireless Basics</a></div>';
linkset[2]+='<li><div><a href="wlwpa.html">Wireless Security</a></div>';
linkset[2]+='</li></ul></div>';
linkset[3]='<div id=sidenav><ul>';
linkset[3]+='<li><div><a href="wladvanced.html">Wireless Advanced</a></div>';
linkset[3]+='<li><div><a href="wlactrl.html">Access Control</a></div>';
linkset[3]+='<li><div><a href="wlwps.html">WPS</a></div>';
linkset[3]+='<li><div><a href="wlmbssid.html">MBSSID</a></div>';
linkset[3]+='</li></ul></div>';
linkset[4]='<div id=sidenav><ul>';
linkset[4]+='<li><div><a href="fw-ipportfilter_adv.html">IP/Port Filter</a></div>';
linkset[4]+='<li><div><a href="fw-ipportfilter_adv_v6.html">IPv6/Port Filter</a></div>';
linkset[4]+='<li><div><a href="fw-macfilter.html">MAC Filter</a></div>';
linkset[4]+='</li></ul></div>';
linkset[5]='<div id=sidenav><ul>';
if(PortMapping) {
linkset[5]+='<li><div><a href="portmap.html">Port Mappping</a></div>';
}
linkset[5]+='<li><div><a href="igmproxy.html">IGMP Proxy</a></div>';
linkset[5]+='<li><div><a href="ipqos.html">IP QoS</a></div>';
linkset[5]+='<li><div><a href="upnp.html">UPnP</a></div>';
linkset[5]+='<li><div><a href="snmp.html">SNMP</a></div>';
if(ShowTR069=='1') {
linkset[5]+='<li><div><a href="tr069.html">TR-069</a></div>';
}
linkset[5]+='<li><div><a href="fw-layer7filter.html">Software Forbidden</a></div>';
linkset[5]+='<li><div><a href="arp_binding.html">ARP Binding</a></div>';
linkset[5]+='<li><div><a href="clientlimit.html">Client Limit</a></div>';
linkset[5]+='</li></ul></div>';
linkset[6]='<div id=sidenav><ul>';
linkset[6]+='<li><div><a href="routing.html">Static Route</a></div>';
linkset[6]+='<li><div><a href="routing_v6.html">IPv6 Static Route</a></div>';
linkset[6]+='<li><div><a href="rip.html">RIP</a></div>';
linkset[6]+='</li></ul></div>';
linkset[7]='<div id=sidenav><ul>';
linkset[7]+='<li><div><a href="fw-natpass.html">NAT ALG</a></div>';
linkset[7]+='<li><div><a href="fw_excludeip.html">NAT Exclude IP</a></div>';
linkset[7]+='<li><div><a href="fw-nat.html">NAT Forwarding</a></div>';
linkset[7]+='<li><div><a href="nat_ftpalg.html">FTP ALG Config</a></div>';
linkset[7]+='<li><div><a href="fw-natmapping.html">NAT IP Mapping</a></div>';
linkset[7]+='</li></ul></div>';
linkset[8]='<div id=sidenav><ul>';
linkset[8]+='<li><div><a href="ping.html">Ping</a></div>';
linkset[8]+='<li><div><a href="ping_v6.html">Ping6</a></div>';
linkset[8]+='<li><div><a href="traceroute.html">Traceroute</a></div>';
linkset[8]+='<li><div><a href="adsl-diag.html">ADSL</a></div>';
linkset[8]+='<li><div><a href="diag-test.html">Diag Test</a></div>';
linkset[8]+='</li></ul></div>';
linkset[9]='<div id=sidenav><ul>';
linkset[9]+='<li><div><a href="acl.html">Access Control List</a></div>';
linkset[9]+='<li><div><a href="acl_v6.html">Access Control List IPv6</a></div>';
linkset[9]+='</li></ul></div>';
linkset[10]='<div id=sidenav><ul>';
linkset[10]+='<li><div><a href="dns.html">DNS</a></div>';
linkset[10]+='<li><div><a href="dns_v6.html">IPv6 DNS</a></div>';
linkset[10]+='</li></ul></div>';
linkset[11]='<div id=sidenav><ul>';
linkset[11]+='<li><div><a href="parent_ctrl.html">URL Block</a></div>';
linkset[11]+='<li><div><a href="family.html">Online Time Limit</a></div>';
linkset[11]+='<li><div><a href="schedule.html">Schedules</a></div>';
linkset[11]+='</li></ul></div>';
var ie5=document.all && !window.opera
var ns6=document.getElementById
if (ie5||ns6){
document.write('<IFRAME id="iframetemp" style="position:absolute; display:none; z-index:0; width:0; height:0" frameborder=0 scrolling=no marginwidth=0 src="" marginheight=0></iframe>');
document.write('<div id="popitmenu" onMouseover="clearhidemenu();" onMouseout="dynamichide(event)">menu</div>')
}
var frameTemp = ie5? document.all.iframetemp : document.getElementById("iframetemp");
function iecompattest(){
return (document.compatMode && document.compatMode.indexOf("CSS")!=-1)? document.documentElement : document.body
}
function showmenu(e, which, count){
if (!document.all&&!document.getElementById)
return;
clearhidemenu();
menuobj=ie5? document.all.popitmenu : document.getElementById("popitmenu");
menuobj.innerHTML=which;
menuobj.style.width=defaultMenuWidth;
menuobj.contentwidth=menuobj.offsetWidth;
menuobj.contentheight=menuobj.offsetHeight;
eventX=ie5? event.clientX : e.clientX;
eventY=ie5? event.clientY : e.clientY;
var rightedge=ie5? iecompattest().clientWidth-eventX : window.innerWidth-eventX;
var bottomedge=ie5? iecompattest().clientHeight-eventY : window.innerHeight-eventY;
var tempEl = count;
var baseLeft = 0;
var tempTop =0;
while (tempEl != null){
baseLeft += tempEl.offsetLeft;
tempTop += tempEl.offsetTop;
tempEl = tempEl.offsetParent;
}
if (rightedge<menuobj.contentwidth)
menuobj.style.left=baseLeft+width;
else
menuobj.style.left=baseLeft+width;
if (bottomedge<menuobj.contentheight)
menuobj.style.top= tempTop;
else
menuobj.style.top=tempTop;
frameTemp.style.display="block";
frameTemp.style.left=menuobj.style.left;
frameTemp.style.top=menuobj.style.top;
frameTemp.style.width=menuobj.contentwidth;
frameTemp.style.height=menuobj.contentheight;
menuobj.style.visibility="visible";
return false;
}
function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}
function hidemenu(){
if (window.menuobj)
menuobj.style.visibility="hidden";
frameTemp.style.display="none";
}
function dynamichide(e){
if (ie5&&!menuobj.contains(e.toElement))
hidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
hidemenu()
}
function delayhidemenu(){
delayhide=setTimeout("hidemenu()",300)
}
function clearhidemenu(){
if (window.delayhide)
clearTimeout(delayhide)
}
if (ie5||ns6)
document.onclick=hidemenu


