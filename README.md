# Frontend Mentor - Contact form

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

### 새롭게 배운 것
- SCSS를 사용하면 CSS를 작성하기가 더 용이해진다. Live Sass Compiler를 사용하면 된다.
- label은 inline 속성이라서, margin이 정상적으로 적용되지 않는다. 다만 아래에 input이 있다면 브라우저가 자동으로 보정해준다. 그래도 정상적인 건 아니기 때문에 label은 block 속성으로 바꿔 줘야 한다.
- input type='checkbox' 는 기본 이미지가 정해져 있기 때문에 스타일을 수정하려고 해도 안 된다.
- 기본적으로 input에는 :focus 시 outline이 설정되어 있다. 이걸 없애고 자유롭게 만들고 싶다면 outline: none;을 해 줘야 한다.
- input 아래에 경고 문구를 넣을 의향이 있다면, margin-bottom을 주지 말자. 차라리 아래 요소에 margin-top을 넣자.
- html의 기본 font-size는 10px을 써 줘야 rem, em을 쓸 때 계산하기가 편하다.
- 선택자는 구체적일수록 우선순위가 높다.
- label은 :focus가 불가능하다. 그러나 꼭 주고 싶다면 tabindex="0"을 주면 된다.
- 길이 값을 줄 때 calc()는 유용하다.
- 선택자 중에서 바로 뒤에 '.클래스명'을 넣으면 해당 클래스를 가지고 있는 요소를 선택하게 된다.
- form을 쓸 때 안에 복잡한 div 구조를 만들어서 써도 상관없다.
- form을 쓸 때는 안에 있는 input에 name 속성을 줘야 한다. 서버로 전송할 것을 고려한다면 더더욱. 또한 안에 type="submit"을 가지고 있는 버튼이 있어야 한다.
- form은 여러 개 있어도 상관 없지만, 중첩되어서는 안 된다.
- input type="checkbox"는 자바스크립트에서 .checked 가 true인지 false인지로 값을 받을 수 있다.
- forEach()는 안에 람다함수를 인자로 받는다.
- document.querySelected로 어떤 const 변수에 값을 저장하고, 만약 없을 경우 (!변수명) 으로 해당 요소가 없었는지를 판별할 수 있다.
- 브랜치의 이름을 바꾸고 싶다면 git branch -m 브랜치명 을 쓰면 된다.