// request 함수를 모아 놓고 사용하는 파일!

// fetch를 호출하고 받아온 response body를 return하는 함수
export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/7008/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}
// async~await : 네트워크 request를 기다렸다가 response에서 json함수를 호출하고 json 변환이 끝나면 body를 return해 줌
// async를 사용 ==> getReviews 함수 == 비동기 함수
