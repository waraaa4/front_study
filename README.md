1. github repository 만들기
2. 내 pc suername, email 확인하기
3. git 으로 지정할 폴더 cmd 접속
4. git init
5. git remote add origin 'git hub repo 주소'
6. 올릴 파일 저장
    - git add .
7. git commit -m '커밋메시지'
8. git branch -M main
    - 메인 브랜치를 main 으로 변경
9. git push origin main

# 수업내용 정리
## front 1일차(20211109)
### 인라인 요소(inline element), 블록 요소(block element)
1. 인라인 요소
    - 태그 내용을 표현하고 줄이 바뀌지 않음
    - 보통 텍스트 내용만큼만 영역을 차지하게 됨
    - 가로, 세로 크기를 따로 지정할 수 없음
        - 가로, 세로 크기를 따로 지정하고 싶으면 css 블록 요소 지정해야함
    - 대표적인 인라인 태그
        - span, a 등
2. 블록 요소 
    - 태그 내용을 표현하고 줄이 바뀜
    - 텍스트 내용과는 상관없이 한줄을 모두 차지함
    - 가로, 세로 크기를 지정할 수 있음
    - 대표적인 블록 태그
     - div, h1~h6 등

### 주로 사용하게 될 태그등

```
- <style>, <script>, <h1>, <p>, <div>
- <form>, <input>, <button>, <select>
```

### UI/UX
- UI(User Interface): 화면, GUI(Graphical User Interface)
- UX(User eXperience): 사용자 경험. 얼마나 쓰기 좋냐.

### 경로 지정시 사용하는 방법
- ./: 현재 파일이 있는 폴더를 가리킴.
- ../: 현재 폴더에서 한수준 위로 올라가는 폴더를 가리킴.