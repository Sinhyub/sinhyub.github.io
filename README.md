# sinhyub.github.io

경험에서 얻은 지식을 보관하고, 필요할 때 꺼내 쓰는 개인 지식 베이스.

**https://sinhyub.com**

## 구조

```
index.html              ← 지식 허브 (검색 · 카테고리 필터 · 카탈로그)
enhancers/              ← 사고 도구, 에세이, 번역
reports/                ← 게임 산업 분석 보고서
```

## 지식 추가 방법

1. `enhancers/` 또는 `reports/` 에 HTML 파일을 작성한다.
2. `index.html` 의 `ENTRIES` 배열에 항목을 추가한다.

```js
{
  title: "제목",
  desc: "한두 줄 설명",
  url: "enhancers/파일명.html",
  date: "2026-03-26",
  category: "카테고리명",
  tags: ["태그1", "태그2"]
}
```

3. `git push` 하면 GitHub Pages를 통해 sinhyub.com에 반영된다.

## 로컬 미리보기

```bash
python3 -m http.server 8000
# http://localhost:8000 에서 확인
```

빌드 도구 없이 순수 정적 HTML로 동작한다.
