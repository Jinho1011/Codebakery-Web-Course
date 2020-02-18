const http = require("http");
//html 파일을 불러오기 위한 파일입출력
const fs = require("fs");

//서버 생성        요청  응답
http.createServer((req, res) => {
    //콘솔에 Server Start! 출력
    
    //html파일을 읽어옴
    fs.readFile("./server.html", (err, data) => {

        //만약 에러라면,
        if(err){
            //에러를 보냄
            throw err;
        }
        //데이터를 클라이언트에게 보냄
        res.end(data);
    });

}).listen(8080, ()=>{
    console.log('8080포트에서 서버 대기 중 입니다.');
});//포트번호