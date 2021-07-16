 
//まだ未完成なのでそのままコピーすると欠陥がでます
  
//欠陥だらけです
  
//ご注意下さい
  
//by Ami Kimura



// Window幅に応じたメニュー表示の変更
function ShowAndHide(win) {
  if (win < 769) {
    $(".navButton").show();
    $(".nav-menu").hide();
  } else {
    $(".navButton").hide();
    $(".nav-menu").show();
  }
}


// Smooth Scrool

$(function(){

   $('a[href^="#"]').click(function() {

      // 初期設定：移動時間(ms)と頭出し位置
      var speed = 800;
      var offset = -104;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});


$(function() {

  // 初めてページを開いた時の状態チェック
  ShowAndHide($(window).width());

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function() {
    ShowAndHide($(window).width());
  });

  // メニューボタンクリック時のトグル動作
  $(".navButton").click(function() {
    $(".nav-menu").slideToggle();
  });

});
