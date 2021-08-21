// スライダー
const swiper = new Swiper('.swiper-container', {
  speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 20,
				width: 274,
      }
    }
});

// アコーディオン
jQuery('.qa_q').click(function() {
  jQuery(this).next('.qa_a').slideToggle();
  jQuery(this).children('.qa_icon').toggleClass( '-open' );
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;

  if (id == '#comments') {
    position = $(target).offset().top - 130;
    } else {
      position = jQuery(target).offset().top;
    };
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});

// スクロール検知
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // 表示する
 jQuery('.to_top').show();
 $('body').addClass('scrolled');
  } else {
    // 100pxを下回ったら隠す
  jQuery('.to_top').hide();
  $('body').removeClass('scrolled');
  }
});

// 入力確認
let $submit = $('#js_submit');

$('input[type=text], input[type=checkbox]').on('change', function () {
  if (
    $('#js_name').val() !== '' &&
    $('#js_name2').val() !== '' &&
    $('input[type=checkbox]').prop('checked') === true
  ) {
    $($submit).addClass('.is-active');
    $($submit).prop('disabled', false);
  } else {
    $($submit).removeClass('.is-active');
    $($submit).prop('disabled', true);
  }
});

// ドロワーメニュー
$('.drawer_hamburger').on('click', function() {
  $(this).toggleClass('-active');
  $('.drawer_bg').toggleClass('-active');
  $('.drawer_content').toggleClass('-active');
});