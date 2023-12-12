export const MENU_CARD = Object.freeze({
	japanese: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  korean: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	chinese: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	asian:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	western: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

export const COMMA = ',';
export const WHITESPACE = ' ';
export const EMPTY_CHARACTER = '';

export const EMPTY_LENGTH = 0;
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 4;
export const MIN_NAMES_LENGTH = 2;
export const MAX_NAMES_LENGTH = 5;
export const MAX_MENUS_LENGTH = 2;
export const MAX_RECOMMENDATION_SIZE = 5;
export const MAX_SAME_CATEGORY_SELECTIONS_PER_WEEK = 2;

export const START_MESSAGE = '점심 메뉴 추천을 시작합니다.';
export const END_MESSAGE = '추천을 완료했습니다.';
export const RESULT_MESSAGE = `메뉴 추천 결과입니다.
[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]`;

export const COACH_NAMES_INPUT_MESSAGE = '메뉴 추천을 받을 코치의 이름을 입력 해 주세요.\n';
export const DISLIKED_MENUS_INPUT_MESSAGE = '(이)가 못 먹는 메뉴를 입력해 주세요.\n';

export const COACH_ERROR_MESSAGE = '[ERROR] 유효하지 않은 형식의 이름입니다. 코치 이름을 다시 입력 해 주세요.';
export const MENU_ERROR_MESSAGE = '[ERROR] 유효하지 않은 형식의 이름입니다. 메뉴 이름을 다시 입력 해 주세요.';