 
//まだ未完成なのでそのままコピーすると欠陥がでます
  
//欠陥だらけです
  
//ご注意下さい
  
//by Ami Kimura


// Smooth Scrool

$(function(){

   $('a[href^="#"]').click(function() {

      // 初期設定：移動時間(ms)と頭出し位置
      var speed = 1200;
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
