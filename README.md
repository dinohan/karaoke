# 노래방 검색기

react 공부를 위한 프로젝트입니다.

## [사용해보기](https://dino-is-singing.netlify.app/)

## Update log

### 2020.12.21
프로젝트 시작

> react 공부 두번째 프로젝트.
> 
> open API인 [노래방 api](https://api.manana.kr/karaoke)를 활용해 만들었다.
>
> Router를 활용하여 메인(최신곡)과 검색 화면을 오간다.
> 
> hisotry.push()를 이용하여 url query를 추가한다.

### 2020.12.29

리팩토링 및 기능 추가

> Hook 과 Redux, Local storage를 공부하고 적용하여 리팩토링을 진행하였고, **즐겨찾기** 기능을 추가하였다.
> 
> Hook을 활용하여 클래스형 컴포넌트를 전부 함수형 컴포넌트로 바꾸었다.
>
> Redux 디자인 패턴을 적용하여 상태를 관리한다.
> 이 사이트에서 관리되는 상태는 다음과 같다.
> ```json
> {
>    keyword: '',       //검색. string
>    brandFilter: 0,    //태진/금영 필터. number: (0, 1)
>    typeFilter: 0,     //곡명/가수명 필터 number:  (0, 1)
>    favSongs: [],      //즐겨찾는 곡. array of object
> }
> ```
> Store의 상태에 변화가 있을 때마다 위 정보를 local storage에 저장하고, 최초 로드시에 local storage를 검사하고 저장된 내용이 있을 시 해당 내용을 store에 올린다.
>
> netlify 배포 관련 문제가 있었는데, 새로고침 시 not found가 뜨는 문제였다. redirect 설정 파일을 만들어주거나, hashrouter를 사용하면 되는 문제였고, 라우터를 hashrouter로 변경하여 문제를 해결했다.

### 2020.12.30

리팩토링

> 디자인을 개선하였고, Redux 툴킷을 활용하여 리팩토링을 했다.
>
> 이제 chrome에서 Redux dev tool 을 사용할 수 있다.

### 2021.01.01

Detail 화면 추가

> 곡 상세정보를 확인할 수 있는 팝업 화면을 만들었다. 이 화면에 앞으로 다양한 내용이 들어갈 수 있을 것이다.
> 
> 제목 복사 버튼을 눌렀을 때 toast 팝업을 띄우기 위해 [외부 라이브러리](https://jossmac.github.io/react-toast-notifications/)를 활용했다.
>
> redux store에 항목 2가지가 추가되었다. `detailOpened: bool`와 `detailSong: object`