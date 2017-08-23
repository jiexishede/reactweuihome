var apiur='http://api.mircalcure.com/zlapi';
var imageurl='http://118.178.194.193:8070/tumourfile/sysfile/getPicFile.do?fileId=';
var imageFileUrl='http://118.178.194.193:8029/formalFile/';
var GET_FILE_URL = 'http://file.mircalcure.com/formalFile/';


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}