//var http = require("http");  /*��һ������require��Node.js�Դ���?http?ģ�飬���Ұ�����ֵ��?http?������*/
//
//http.createServer(function(request, response) { /*����httpģ���ṩ�ĺ�����?createServer?����������᷵��һ���������������һ������?listen�ķ��������������һ����ֵ������ָ�����HTTP�����������Ķ˿ںš�*/
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//});
/*createServer()?�ĵ�һ��Ҳ��Ψһһ����������Ϊ��JavaScript�У���������������һ�����ǿ��Ա����ݵġ�*/



/*
�ᱨ��
var http = require("http");

function onRequest(request, response){
    console.log("Request received.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");*/
