// 페이지 슬라이드 효과
// 페이지 슬라이드 효과
// 페이지 슬라이드 효과
document.querySelectorAll("header li").forEach((item, index) => {
   item.addEventListener("click", () => {
      const container = document.getElementById("container");
      container.style.transition = "margin-top 0.5s ease";
      container.style.marginTop = `-${index * 100}vh`;
   });
});

// 시계 애니메이션
// 시계 애니메이션
// 시계 애니메이션
setInterval(() => {
   const time = new Date();

   const hour = time.getHours(); // 0~23
   const min = time.getMinutes(); // 0~59
   const sec = time.getSeconds(); // 0~59

   const hh = document.getElementById("hour");
   const mm = document.getElementById("min");
   const ss = document.getElementById("sec");

   // 시침 각도 계산 (1시간당 30도, 분에 따라 보정)
   const DegHour = (hour % 12) * 30 + min * (360 / 12 / 60);
   // 분침 각도 계산 (1분당 6도)
   const DegMin = min * 6;
   // 초침 각도 계산 (1초당 6도)
   const DegSec = sec * 6;

   // 시침, 분침, 초침 회전 적용
   hh.style.transform = `rotate(${DegHour}deg)`;
   mm.style.transform = `rotate(${DegMin}deg)`;
   ss.style.transform = `rotate(${DegSec}deg)`;
}, 1000); // 1초마다 실행

//자동이미지슬라이드 기능(page 3.4)
//자동이미지슬라이드 기능(page 3.4)
//자동이미지슬라이드 기능(page 3.4)
$(document).ready(function () {
   let currentSlide = 0;
   const totalSlides = $(".page3-slide").length;
   const slideInterval = 5000;
   let autoSlide;

   function goToSlide(index) {
      currentSlide = index;
      $(".page3-wrap").css("left", -index * 100 + "%");
      updateNavigation();
   }

   function updateNavigation() {
      $(".navi li").removeClass("on");
      $(".navi li").eq(currentSlide).addClass("on");
   }

   function startAutoSlide() {
      autoSlide = setInterval(function () {
         let nextSlide = (currentSlide + 1) % totalSlides;
         goToSlide(nextSlide);
      }, slideInterval);
   }

   function stopAutoSlide() {
      clearInterval(autoSlide);
   }

   $(".prev i").click(function (e) {
      e.preventDefault();
      stopAutoSlide();
      currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
      goToSlide(currentSlide);
      startAutoSlide();
   });

   $(".next i").click(function (e) {
      e.preventDefault();
      stopAutoSlide();
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
      startAutoSlide();
   });

   $(".navi li").click(function () {
      stopAutoSlide();
      let index = $(this).index();
      goToSlide(index);
      startAutoSlide();
   });

   // 초기 설정
   goToSlide(0);
   startAutoSlide();
});

//gsap 스크롤 이벤트 page5
//gsap 스크롤 이벤트
//gsap 스크롤 이벤트
$(document).ready(function () {
   // GSAP 등록 (ScrollTrigger)
   gsap.registerPlugin(ScrollTrigger);

   // Ceramic Project Title 애니메이션 (스크롤 시 등장)
   gsap.from(".ceramic-project .tit_area", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
         trigger: ".ceramic-project .tit_area", // 타겟 요소
         start: "top 80%", // 스크롤 시 시작 (타겟이 화면의 80%에 도달할 때)
         end: "bottom 10%", // 끝나는 시점
         scrub: 3, // 애니메이션 속도를 느리게 설정 (수치를 더 크게)
         markers: false, // 마커 표시
      },
   });

   // Ceramic Project Text 애니메이션 (스크롤 시 등장)
   gsap.from(".ceramic-project .txt", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
         trigger: ".ceramic-project .txt",
         start: "top 80%",
         end: "bottom 10%",
         scrub: 3, // 애니메이션 속도 조정
         markers: false, // 마커 표시
      },
   });

   gsap.to(".ceramic-project .img_slide", {
      xPercent: -100 * (2 - 1), // 슬라이드의 개수에 따라 이동 거리 계산
      scrollTrigger: {
         trigger: ".ceramic-project .img_slide_wrap", // 슬라이드 감싸는 div
         pin: true, // 스크롤 시 고정
         scrub: 5, // 속도 조정
         start: "top 28%", // 슬라이드가 화면의 50%에 도달할 때 시작 (스크롤 위치 기준)
         end: "bottom 65%", // 슬라이드가 화면의 30% 지점에서 끝날 때
         markers: false, // 마커 표시
      },
   });
});

//어바웃
