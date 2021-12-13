// 팝업
function openImg(obj) {
  $(".img_modal .prod_img").attr("src", obj.src);
  $(".img_modal_bg").fadeIn();
  $(".img_modal").fadeIn();
  $(".close").click(function () {
    $(".img_modal_bg").fadeOut();
    $(".img_modal").fadeOut();
  });
}

// 팝업
function openModal() {
  $(".modal_content").fadeIn();

  $(".close").click(function () {
    $(".modal_content").fadeOut();
  });
}

//오늘하루보지않기
function layerPopupHide(state) {
  $(".modal_content").fadeOut();
  if (state === 1) {
    if ($.cookie("popCookie") == undefined) {
      $.cookie("popCookie", "Y", { expires: 1, path: "/" });
    }
  }
}

// 퀵 메뉴 위치 설정
function fixedMenu() {
  var fullWidth = window.innerWidth;
  var contWinth = $(".inner").innerWidth();
  return (fullWidth - contWinth) / 2 - 160;
}

$(function () {
  // 모바일 메뉴 드롭다운
  $(".mo_menu > ul li .row").click(function () {
    $(".mo_menu > ul li .mo_sub_menu").slideUp();
    if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $(this).siblings(".mo_menu > ul li .mo_sub_menu").slideUp();
    } else {
      $(".mo_menu > ul li .row").removeClass("show");
      $(this).addClass("show");
      $(this).siblings(".mo_menu > ul li .mo_sub_menu").slideDown();
    }
  });

  // 헤더 검색 창 클릭 시
  $(".head_search .wrap").click(function () {
    $(this).addClass("search_show");
  });

  $("html").click(function (e) {
    if (!$(e.target.parentElement).hasClass("search_show")) {
      $(".head_search .wrap").removeClass("search_show");
    }
  });

  // 퀵메뉴 위치 조정
  if (window.innerWidth > 768) {
    $(".quick_menu").css("right", fixedMenu());
  }

  $(window).resize(function () {
    if (window.innerWidth > 768) {
      $(".quick_menu").css("right", fixedMenu());
      $(".loc .nav_sec .link_wrap ul").css("display", "flex");
    } else {
      $(".quick_menu").css("right", "unset");
      $(".loc .nav_sec .link_wrap ul").css("display", "none");
      $(".loc .nav_sec .link_wrap .link_title").removeClass("open");
    }
  });

  // 햄버거 메뉴 클릭 시
  $("header ul.menu > li.mo_ver").click(function () {
    $(".mo_menu").slideToggle();
    $(".bg").toggleClass("show");
  });

  // 서브 메뉴 드롭 다운
  $(".loc .nav_sec .link_wrap .link_title").click(function () {
    $(".loc .nav_sec .link_wrap .link_title").toggleClass("open");
    $(".loc .nav_sec .link_wrap ul").slideToggle();
  });

  // 메인 아이콘 메뉴
  // $(".main .sec_01 .row .icon_menu").hover(
  //   function () {
  //     if (!$(this).hasClass("active")) {
  //       var imgSrc = $(this).children(".img_wrap").children().attr("src");
  //       const path = imgSrc.split(".");

  //       $(this).addClass("hover");
  //       $(this)
  //         .children(".img_wrap")
  //         .children()
  //         .attr("src", "." + path[1] + "_color.png");
  //     }
  //   },
  //   function () {
  //     if (!$(this).hasClass("active")) {
  //       var imgSrc = $(this).children(".img_wrap").children().attr("src");
  //       const path = imgSrc.split("_color");
  //       $(this).removeClass("hover");
  //       $(this)
  //         .children(".img_wrap")
  //         .children()
  //         .attr("src", path[0] + ".png");
  //     }
  //   }
  // );
  $(window).resize(function () {
    if (window.innerWidth > 768) {
      $("header .mo_menu").css("display", "block");
      $(".bg").removeClass("show");
    } else {
      $("header .mo_menu").css("display", "none");
      $(".bg").removeClass("show");
    }
  });
});
