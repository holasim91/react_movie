# MOVIE APP BY REACT

 1. Movie Detail 페이지 디자인 -> 네이버영화 참고
 2. 영화API변경 => themoviedb
 3. 장르 ->https://developers.themoviedb.org/3/movies/get-movie-details 이게 답이다..(완료)
 4. movieData를 만들고 Home화면을 외부 API를 받는 방식이 아닌 임의로 만든 데이터를 fetching하는 거로 바꿔야함(toWatchList를 위하여)
 5. https://github.com/kyungyoonha/react_mission1_todoList 참고하기
 6. https://github.com/Louis-jk/MovieApp 참고


# 추가예정
 1. 무한스크롤 or 페이지네이션
 2. ToWatchList (ing..)
 3. 찜(ToWatchList에서 볼 수 있음)(ing...)
 4. Loading Circle
 5. 내 소개 페이지
 6. Detail 디자인
 7. CSS ->  Styled-Components로 이식
 8. 반응형
 9. Detail 속 comment



# ISSUE
 1. detail페이지에서 navigation을 조작하면 에러가 난다. (/movie/가 없어지지 않음)
 2. Home화면에서 데이터를 불러오는건 API를 통한 외부 데이터이고, 찜여부를 위해 toWatchList의 정보를 가져오려면 로컬데이터에서 불러와야하는데, 이 것을 어떻게 처리해야할까. Home에서 Movie로 props를 뿌려주는건데.. 
 3. 보고싶은 영화에 담기 기능(찜 기능)을 추가하려면 DB를 만들지 않는 이상 힘들지 않을까 싶다. 
    ->  내가 임의로 만든 데이터애(DB에 저장되지 않은)

# 오늘 한 것
  1. ContextAPI의 생태계를 파악하기 위해 velopert의 todolist를 보고 공부를 했다.
  2. Context API를 활용해서 toWatchList에서 state를 조회하고, dispatch해주는 작업(Toggle과 Delete)을 했다
  3. 일반 CSS로 스타일링 했던 것들을 Styled-components로 작업을 했는데 내가 커스텀 한 건 거의 없다.
  4. Infinite Scroll를 위해 검색하던중 IntersactionObserverAPI의 존재를 알았고, 그것에 관한 강의를 보고있다.
  

# 내일 할 것
  1. 제로초의 노드버드 FE부분만 듣고 리덕스 도입을 고민해봐야겠다
  2. 그렇다면 Next.js도 도입을 할 수도 있다.
  3. 그럼 싹 다 갈아엎어야하나..?
  
