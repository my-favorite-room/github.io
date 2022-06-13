let quiz =[
  {
   question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
   answers:[
     'スーパーファミコン',
     'プレステ2',
     'ニンテンドースイッチ',
     'ニンテンドーDS'
   ],
   correct:'ニンテンドーDS'
  },{
   question:' 糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
   answers:[
     'MOTHER2',
     'スーパーマリオブラザーズ3',
     'スーパードンキーコング',
     '星のカービィ'
   ],
   correct:'MOTHER2'
  },{
   question:'世界で最も売れたゲームソフトは？',
   answers:[
     'Minecraft',
     'スーパーマリオブラザーズ',
     'テトリス',
     'Wii Sports'
   ],
   correct:'Minecraft'
  },{
   question:'任天堂switchでもっとも売れたゲームソフトは？',
   answers:[
     'スーパーマリオオデッセイ',
     'ゼルダの伝説',
     'マリオカート8',
     'スマッシュブラザーズ'
   ],
   correct:'スマッシュブラザーズ'
  },{
   question:'コミック歴代総売り上げが一番多いのは？',
   answers:[
     '鬼滅の刃',
     'ワンピース',
     'ドラゴンボール',
     '名探偵コナン'
   ],
   correct:'ワンピース'
  }
 ];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題
const setupQuiz = () => {
  //変数questionの内容をhtmlのjs-questionに代入する
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
//クイズ問題関数の実行
setupQuiz();
//クリックしたときのアクション　
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解(*_*;');
  }
  quizIndex++;
  if(quizIndex < quizLength ){
    //問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です＼(^o^)／');
    window.alert('お疲れさまでした。閉じるボタンを押して終了してください。また遊んでね(^^)/');
  }
};

//クリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
    quizNumber++;
   });
  handlerIndex++;
}
