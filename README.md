# 목차
[1차시 :: 개발 환경 설정하기](#-1차시)   
[2차시 :: JS 기초](#-2차시)

# 1차시
## visual studio code 설치
https://code.visualstudio.com/

## 익스텐션 설치
개발 편하기 위해서 자동입력기능이나 문법 수정 같은 익스텐션이 포함되어 있습니다.  
- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Colorizer
- Colored Console Log
- EsLint
- HTML CSS Support
- HTML Snippets
- IntelliSense for CSS class name
- Javascript code snoppets
- jinja
- live server
- material icon theme
- material theme (스킨인데 제일 간지남)
- npm
- path intellisense
- Polacode (나중에 코드로 질문할 때 이걸로 캡쳐해서 주세요, 보기 편함ㅇㅇ)
- Prettier - Code formatter
- Python
- SFTP
- Turbo Console log

## 깃허브 따라하기
작은 프로젝트라도 깃허브에 올려서 관리해놓으세여(나중에 수시 쓸 때 편함)
git 다운 링크 : https://git-scm.com/downloads

### 본인 숙제를 git에 올리는 방법
1. visual studio를 켠다  
![1](https://github.com/Jinho1011/Codebakery-Web-Course/blob/master/how%20to%20git/1.png)  

2. `ctrl + b`를 눌러 터미널을 연다  
![2](https://github.com/Jinho1011/Codebakery-Web-Course/blob/master/how%20to%20git/2.png)  

3. `ctrl k + o`를 눌러 원하는 폴더에 들어간다

4. 터미널에서 `git clone https://github.com/Jinho1011/Codebakery-Web-Course`를 통해 저장소를 불러온다

5. 다시 `ctrl k + o`를 눌러 `Codebakery-Web-Course` 폴더에 들어간다

6. 자신의 이름으로 폴더를 만들고 그 안에 자신의 숙제를 업로드한다  
![3](https://github.com/Jinho1011/Codebakery-Web-Course/blob/master/how%20to%20git/3.png)  

7. 터미널에서 `git add .`
- 추가할 반영 목록을 작성(.으로 하면 전체임)

8. `git commit -m <커밋명>`
- 커밋명은 직관적으로!
- ex) create folder, delete folder, modify file

9. `git push origin master`
- master 브랜치에 추가

1,2,3,4는 처음에만 작업하면 되고 나중에 숙제를 수정할 때에는 7,8,9만 하면 됨!!
다음처럼 나오면 성공!  
![4](https://github.com/Jinho1011/Codebakery-Web-Course/blob/master/how%20to%20git/4.png)  

# 2차시

## Javascript에 대해 알아봐요
https://academy.nomadcoders.co/p/javascript-basics-for-absolute-beginners-kr


# 3차시

## NodeJs를 시작해봅시다
https://nodejs.org/dist/v12.15.0/node-v12.15.0-x64.msi

## npm
Node.js와 뗄래야 뗄 수 없는 관계로 npm이라는 게 있습니다. node package manager의 줄임말인데요.  Node.js에서는 자주 쓰이고 재사용되는 자바스크립트 코드들을 패키지로 만들어서 사용할 수 있습니다.  그러한 패키지를 모아놓은 저장소가 npm입니다.

Node.js를 설치하면 자동으로 npm이 설치됩니다!

## 첫 서버 만들기
```js
const http = require('http'); // 서버를 만드는 모듈 불러옴

http.createServer((req, res) => { // 서버 만드는 메소드
  console.log('server start!');
  res.write('hello world \n');
  res.end('goodbye');
}).listen(8080); // 포트번호
```
`server.js`를 하나 만들고 `node server.js`로 서버를 실행시켜줍니다
브라우저에서 https://localhost:8080 으로 접속해봅니다

`createServer`에는 request(요청)과 response(응답)이라는 두 인자가 있습니다.    
![server](https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/2614/4971.png)  

req는 클라이언트에서 서버로 보낸 요청에 관련된 내용이 담겨있고, res로는 클라이언트로 웹페이지를 보내는 역할을 합니다.

위 코드에서는 `res.write()`와 `res.end()`로 내용을 전달했죠

그럼 다음은 html 파일을 res로 보내 실제 서버처럼 만들어봅시다.

## html파일 전송하기
