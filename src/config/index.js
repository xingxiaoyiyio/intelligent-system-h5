//项目域名地址
const proUrl = 'http://120.77.180.187:8085';
const devUrl = 'http://120.77.180.187:8084';

let ROOT,PREFIX,API_BASEURL;
if (process.env.NODE_ENV === 'development') {
    ROOT = devUrl;
    PREFIX = '/apis';
    API_BASEURL = PREFIX;
} else {
    ROOT = proUrl;
    PREFIX = ''
    API_BASEURL = proUrl + PREFIX;
}

exports.PREFIX = PREFIX; 
exports.ROOT = ROOT;
exports.API_BASEURL = API_BASEURL;