#MySNS_Backend
backend / node.js
##Database Schema
***
###User Schema
>user_id : String, 사용자의 아이디입니다.

>user_pw : String, 사용자의 비밀번호입니다.

>user_name : String, 사용자의 이름입니다.

>token : String, 사용자 토큰입니다.

###TimeLine Schema
>post_name : String, 게시자의 이름입니다.

>post_title : String, 게시물의 제목입니다.

>post_time : String, 게시물의 게시 시간입니다.

>post_context : String, 게시물의 내용입니다.

***
##API Docs
***
*/register : 회원가입
>리퀘스트 파라미터

>>user_id : 사용자 아이디입니다.

>>user_pw : 사용자 비밀번호입니다.

>>user_name : 사용자 이름입니다.

*/login : 로그인
>리퀘스트 파라미터
>>user_id : 사용자 아이디입니다.

>>user_pw : 사용자 비밀번호입니다.

>응답

>>user data json
