// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    $('.main_text').hide().fadeIn(900);
});