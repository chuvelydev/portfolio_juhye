/*스킬*/
/*스킬*/
/*스킬*/

$(document).ready(function () {
  $(".card_1").on("mouseenter", function () {
    $(".card_1 .cardBox").addClass("on");
  });
  $(".card_1").on("mouseleave", function () {
    $(".card_1 .cardBox").removeClass("on");
  });
  $(".card_2").on("mouseenter", function () {
    $(".card_2 .cardBox").addClass("on");
  });
  $(".card_2").on("mouseleave", function () {
    $(".card_2 .cardBox").removeClass("on");
  });
  $(".card_3").on("mouseenter", function () {
    $(".card_3 .cardBox").addClass("on");
  });
  $(".card_3").on("mouseleave", function () {
    $(".card_3 .cardBox").removeClass("on");
  });
  $(".card_4").on("mouseenter", function () {
    $(".card_4 .cardBox").addClass("on");
  });
  $(".card_4").on("mouseleave", function () {
    $(".card_4 .cardBox").removeClass("on");
  });
  $(".card_5").on("mouseenter", function () {
    $(".card_5 .cardBox").addClass("on");
  });
  $(".card_5").on("mouseleave", function () {
    $(".card_5 .cardBox").removeClass("on");
  });
  $(".card_6").on("mouseenter", function () {
    $(".card_6 .cardBox").addClass("on");
  });
  $(".card_6").on("mouseleave", function () {
    $(".card_6 .cardBox").removeClass("on");
  });
  $(".card_7").on("mouseenter", function () {
    $(".card_7 .cardBox").addClass("on");
  });
  $(".card_7").on("mouseleave", function () {
    $(".card_7 .cardBox").removeClass("on");
  });
  $(".card_8").on("mouseenter", function () {
    $(".card_8 .cardBox").addClass("on");
  });
  $(".card_8").on("mouseleave", function () {
    $(".card_8 .cardBox").removeClass("on");
  });

  $(".card_9").on("mouseenter", function () {
    $(".card_9 .cardBox").addClass("on");
  });
  $(".card_9").on("mouseleave", function () {
    $(".card_9 .cardBox").removeClass("on");
  });
  $(".card_10").on("mouseenter", function () {
    $(".card_10 .cardBox").addClass("on");
  });
  $(".card_10").on("mouseleave", function () {
    $(".card_10 .cardBox").removeClass("on");
  });
  $(".card_11").on("mouseenter", function () {
    $(".card_11 .cardBox").addClass("on");
  });
  $(".card_11").on("mouseleave", function () {
    $(".card_11 .cardBox").removeClass("on");
  });
  $(".card_12").on("mouseenter", function () {
    $(".card_12 .cardBox").addClass("on");
  });
  $(".card_12").on("mouseleave", function () {
    $(".card_12 .cardBox").removeClass("on");
  });

  /*슬라이드*/
  /*슬라이드*/
  /*슬라이드*/
  let i = 0;
  let total = $(".text2 > li").length;

  function start() {
    i++;

    if (i == total - 1) {
      $(".text2")
        .stop()
        .animate({ marginLeft: "-300%" }, function () {
          $(".text2").css({ marginLeft: "0%" });
        });
      $(".computerul")
        .stop()
        .animate({ marginLeft: "-300%" }, function () {
          $(".computerul").css({ marginLeft: "0%" });
        });
      i = 0;
    } else {
      $(".text2")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
      $(".computerul")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon .next").click(function () {
    start();
  });

  function back() {
    i--;

    if (i < 0) {
      $(".text2").css({ marginLeft: "-300%" });
      $(".text2").stop().animate({ marginLeft: "-200%" });
      $(".computerul").css({ marginLeft: "-300%" });
      $(".computerul").stop().animate({ marginLeft: "-200%" });
      i = 3;
    } else {
      $(".text2").animate({ marginLeft: `${-i * 100}%` });
      $(".computerul").animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon  .prev").click(function () {
    back();
  });
  /*메뉴*/
  /*메뉴*/
  /*메뉴*/
  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let work = document.querySelector(".work");
  let gallery = document.querySelector(".gallery");
  let contact = document.querySelector(".contact");

  home.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  about.addEventListener("click", function () {
    window.scrollTo({ top: 950, behavior: "smooth" });
  });
  work.addEventListener("click", function () {
    window.scrollTo({ top: 1880, behavior: "smooth" });
  });
  gallery.addEventListener("click", function () {
    window.scrollTo({ top: 2800, behavior: "smooth" });
  });
  contact.addEventListener("click", function () {
    window.scrollTo({ top: 4100, behavior: "smooth" });
  });
  let baseline = -200;
  let visual = $("#visual").offset().top + baseline;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  //console.log(visual);
  let x = $(this).index();
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > visual && scroll < con1) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(0).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(0).children("a").addClass("on");
      home.classList.add("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
    } else if (scroll > con1 && scroll < con2) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(1).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(1).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.add("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
      $("#con1 > h2").addClass("on");
      $("#con1 .bottom").addClass("on");
      $(".con1_img img").addClass("on");
      $(".con1_about p").addClass("on");
      $(".skill h2").addClass("on");
      $(".skill ul").addClass("on");
    } else if (scroll > con2 && scroll < con3) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(2).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(2).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.add("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
      $("#con2 > h2").addClass("on");
      $("#con2 .bottom").addClass("on");
      $(".con2_1").addClass("on");
      $(".con2_2").addClass("on");
      $(".slidecon a").addClass("on");
    } else if (scroll > con3 && scroll < con4) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(3).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(3).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.add("on");
      contact.classList.remove("on");
      $("#con3 > h2").addClass("on");
      $("#con3 .bottom").addClass("on");
      $(".small").addClass("on");
    } else {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(4).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(4).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.add("on");
      $("#con4 > h2").addClass("on");
      $("#con4 .bottom").addClass("on");
      $("#con4 h4:nth-of-type(1)").addClass("on");
      $("#con4 h4:nth-of-type(2)").addClass("on");
      $("#con4 h3:nth-of-type(1)").addClass("on");
      $("#con4 h3:nth-of-type(2)").addClass("on");
      $(".small").removeClass("on");
    }
    $(".navi li").on("click", function () {
      target = $(this).children("a").attr("href");
      targetpos = $(target).offset().top;
      movescroll(targetpos);
    });

    function movescroll(targetpos) {
      $("html, body").stop().animate({ scrollTop: targetpos }, 1000);
    }
  });
  /*갤러리*/
  /*갤러리*/
  /*갤러리*/
  $(".small li").on("click", function () {
    let i = $(this).index();
    $(".large li").eq(i).css({ display: "block" });
    $(".large li").hide();
    $(".con3_1 a").css({ display: "block" });
    $(".large li").eq(i).show();
  });

  $(".con3_1 a").on("click", function () {
    $(".large li").hide();
    $(".con3_1 a").css({ display: "none" });
  });
  /*이미지*/
  /*이미지*/
  /*이미지*/
  $(".computerul li").hover(
    function() {

        $(this).find("img").addClass('img-scroll-down');
    },
    function() {
    
        $(this).find("img").removeClass('img-scroll-down');
    }
);
/*기획안*/
/*기획안*/
/*기획안*/
 $(".plan1_a").click(function (event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(".plan1").toggle();
      $(".con2ul").css({display:"none"})
      $(".bottom").css({display:"none"})
      $("#con2 h2").css({display:"none"})
  });

  $(document).click(function (event) {

      if ($(".plan1").is(":visible")) {
          $(".plan1").hide();
      }
      $(".con2ul").css({display:"block"})
      $(".bottom").css({display:"block"})
      $("#con2 h2").css({display:"block"})
  });

  $(".plan2_a").click(function (event) {
    event.preventDefault(); 
    event.stopPropagation(); 
    $(".plan2").toggle();
    $(".con2ul").css({display:"none"})
    $(".bottom").css({display:"none"})
    $("#con2 h2").css({display:"none"})
});

$(document).click(function (event) {

    if ($(".plan2").is(":visible")) {
        $(".plan2").hide();
    }
    $(".con2ul").css({display:"block"})
    $(".bottom").css({display:"block"})
    $("#con2 h2").css({display:"block"})
});
$(".plan4_a").click(function (event) {
  event.preventDefault(); 
  event.stopPropagation(); 
  $(".plan4").toggle();
  $(".con2ul").css({display:"none"})
  $(".bottom").css({display:"none"})
  $("#con2 h2").css({display:"none"})
});
$(document).click(function (event) {

  if ($(".plan4").is(":visible")) {
      $(".plan4").hide();
  }
  $(".con2ul").css({display:"block"})
  $(".bottom").css({display:"block"})
  $("#con2 h2").css({display:"block"})
});
});
