# polaris-acapella

## 簡介
這個網站是為北極星人聲樂團Polaris Acapella Group寫的官方網站，網站主要內容包括團員介紹,樂團介紹,表演資訊,樂團相片和樂團過去的mv等

## Deployed連結
https://polaris-acapella.herokuapp.com/

## 使用說明/詳細介紹
最佳顯示為Macbook Pro 13吋螢幕，其他比例的螢幕可能出現炸版請見諒
### 安裝並執行
```
npm install
cd client
npm install
cd ..
npm start
```
### 詳細介紹
1. 首頁：有樂團的logo，背景偶爾會有流星一閃而逝
2. 關於：有關於樂團的介紹
3. 團員：有一張全團團員的合照，當滑鼠移到每個團員的臉上時會顯示該團員的自我介紹詞
4. 表演：有樂團接下來的表演資訊，包含表演名稱以及時間地點
5. 相片：有多張樂團表演以及出遊的照片，可點擊箭頭切換相片，相片也會自動播放
6. 影片：有樂團之前拍的各個mv，可直接在網頁上播放
7. 選單：選取連結可以滑動到該頁面位置
8. 頁尾：有樂團的聯絡方式，包含fb, ig, youtube

## 使用與參考之框架/模組/原始碼
1. 相片展示部分使用網路上找到的原始碼：https://mdbootstrap.com/plugins/jquery/gallery/#docsTabsAPI
2. 封面流星部分使用網路上找到的原始碼：https://github.com/graph1994/shooting-star
3. 串接後端資料庫部分參考並修改網路上找到的教學文章：https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274

## 心得
這次期中project中我遇到非常多問題，比如說deploy上heroku時遇到的fetch問題等等的，也讓我學到了查資料的能力．這次前端的部分大部分都是手刻，所以相容性有點差，螢幕比例不一樣有時候會炸版，如果以後再開發類似網頁可能會去找現成響應式網頁模板來進行開發XD

## 未來展望
1. 改為響應式網頁，提供手機使用者觀看
2. 新增和使用者互動如離言版等功能
3. 新增管理者頁面，方便樂團非資訊相關人員也能修改網頁內容