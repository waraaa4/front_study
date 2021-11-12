# 수업내용 정리
## front 3일차(20211111)
### 자바스크립트

1. javascript function
- 함수(자바의 메서드랑 비슷)
- 특정 기능을 수행하는 코드블록
- 호출해줘야 실행
- 특정 이벤트가 발생 했을때 함수를 호출
    - 특정 이벤트?
        - click, doubleclick, mouse over, keyup, keydown 
- 메개변수, 리턴 등 있음.

2. id속성 vs class속성
- id속성
    - 한 문서 안에서 id 속성값은 유일해야 한다.
    - css 적용시 사용, javascript 에서 제어할 때도 사용
- class속성
    - css 적용할 때 많이 사용함.
    - 여러 태그에 동일한 class 값을 적용할 수 있다.
    - 한번에 여러 class를 동시에 적용할 수 있다.
        - ex) p태그에 class1, class2, class3를 동시에 적용하고 싶다면
        ```
        <p class="class1 class2 class3"></p>
        ```

3. DOM 가져오기
- 대부분 document. 으로 시작함.
    - document는 현재 html 문서를 가리킴.
- getElementById("id속성값")
    - 현재 html에 작성된 태그 중 특정 id속성값을 가지고 있는 요소를 가져옴.
- querySelector()
    - id, class, 태그 등 여러 요소를 가져올 수 있음.
    - id를 가져올 때는 id앞에 #을 붙여야 함.
        - ex) id1 이라는 요소를 가져온다면 document.querySelector("#di1")
    - class를 가져올때는 class 앞에 .을 붙여야 함.
        - ex) class1 이라는 요소를 가져온다면 document.querySelector('.class1')
- getElementByClassName()
    - 현재 html에 작성된 태그 중 특정 clss속성값을 가지고 있는 요소를 가져옴.




