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