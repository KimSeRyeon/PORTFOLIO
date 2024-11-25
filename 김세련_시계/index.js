// 페이지 슬라이드 효과
document.querySelectorAll("header li").forEach((item, index) => {
    item.addEventListener("click", () => {
        const container = document.getElementById("container");
        container.style.transition = "margin-top 0.5s ease"; 
        container.style.marginTop = `-${index * 100}vh`; 
    });
});

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
