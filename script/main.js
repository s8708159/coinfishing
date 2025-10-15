document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    if (!header) return;
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("Shrink");
        } else {
            header.classList.remove("Shrink");
        }
    });

    // 新增：在寬度1024px以下時，點擊 .Item 移除 nav.menu 的 Open class
    document.querySelectorAll(".menu .Item").forEach(function(item) {
        item.addEventListener("click", function() {
            if (window.innerWidth < 1024) {
                var menu = header.querySelector("nav.menu");
                var mobMenuBtn = header.querySelector(".MobMenuBtn");
                if (menu && menu.classList.contains("Open")) {
                    menu.classList.remove("Open");
                }
                if (mobMenuBtn && mobMenuBtn.classList.contains("Open")) {
                    mobMenuBtn.classList.remove("Open");
                }
            }
        });
    });
});

// 錨點滑動
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[data-target]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = anchor.getAttribute('data-target');
            var target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// 漢堡選單功能
document.addEventListener("DOMContentLoaded", function () {
    const mobMenuBtn = document.querySelector(".MobMenuBtn");
    const menu = document.querySelector(".menu");

    if (mobMenuBtn && menu) {
        // 點擊漢堡按鈕切換選單
        mobMenuBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // 防止點擊按鈕觸發外部關閉
            menu.classList.toggle("Open");
            mobMenuBtn.classList.toggle("Open");
        });

        // 點擊選單內部阻止關閉
        menu.addEventListener("click", function (e) {
            e.stopPropagation();
        });

        // 點擊文檔其他地方關閉選單
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !mobMenuBtn.contains(e.target) && menu.classList.contains("Open")) {
                menu.classList.remove("Open");
                mobMenuBtn.classList.remove("Open");
            }
        });

        // 鍵盤支援（Enter 或空格鍵切換選單）
        mobMenuBtn.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // 防止空格鍵滾動頁面
                menu.classList.toggle("Open");
                mobMenuBtn.classList.toggle("Open");
            }
        });
    }
});

// 可拖拉的遊戲截圖輪播 
document.addEventListener("DOMContentLoaded", function () {
    const gamePhotoSlide = document.querySelector(".GamePhoto .Slide");
    if (!gamePhotoSlide) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    gamePhotoSlide.addEventListener("mousedown", function (e) {
        isDown = true;
        gamePhotoSlide.classList.add("dragging");
        startX = e.pageX - gamePhotoSlide.offsetLeft;
        scrollLeft = gamePhotoSlide.scrollLeft;
    });

    gamePhotoSlide.addEventListener("mouseleave", function () {
        isDown = false;
        gamePhotoSlide.classList.remove("dragging");
    });

    gamePhotoSlide.addEventListener("mouseup", function () {
        isDown = false;
        gamePhotoSlide.classList.remove("dragging");
    });

    gamePhotoSlide.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gamePhotoSlide.offsetLeft;
        const walk = (x - startX) * 1.5; // 拖拉速度
        gamePhotoSlide.scrollLeft = scrollLeft - walk;
    });

    // 支援觸控
    gamePhotoSlide.addEventListener("touchstart", function (e) {
        isDown = true;
        startX = e.touches[0].pageX - gamePhotoSlide.offsetLeft;
        scrollLeft = gamePhotoSlide.scrollLeft;
    });

    gamePhotoSlide.addEventListener("touchend", function () {
        isDown = false;
    });

    gamePhotoSlide.addEventListener("touchmove", function (e) {
        if (!isDown) return;
        const x = e.touches[0].pageX - gamePhotoSlide.offsetLeft;
        const walk = (x - startX) * 1.5;
        gamePhotoSlide.scrollLeft = scrollLeft - walk;
    });
    // 防止拖拉時選取到文字或圖片
    gamePhotoSlide.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });

    gamePhotoSlide.querySelectorAll("img, *").forEach(function (el) {
        el.addEventListener("dragstart", function (e) {
            e.preventDefault();
        });
        el.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
    });

    gamePhotoSlide.addEventListener("selectstart", function (e) {
        e.preventDefault();
    });
});

// 可拖拉的遊玩方式輪播
document.addEventListener("DOMContentLoaded", function () {
    const waySlide = document.querySelector(".Way .Slide");
    if (!waySlide) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    waySlide.addEventListener("mousedown", function (e) {
        isDown = true;
        waySlide.classList.add("dragging");
        startX = e.pageX - waySlide.offsetLeft;
        scrollLeft = waySlide.scrollLeft;
    });

    waySlide.addEventListener("mouseleave", function () {
        isDown = false;
        waySlide.classList.remove("dragging");
    });

    waySlide.addEventListener("mouseup", function () {
        isDown = false;
        waySlide.classList.remove("dragging");
    });

    waySlide.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - waySlide.offsetLeft;
        const walk = (x - startX) * 1.5; // 拖拉速度
        waySlide.scrollLeft = scrollLeft - walk;
    });

    // 支援觸控
    waySlide.addEventListener("touchstart", function (e) {
        isDown = true;
        startX = e.touches[0].pageX - waySlide.offsetLeft;
        scrollLeft = waySlide.scrollLeft;
    });

    waySlide.addEventListener("touchend", function () {
        isDown = false;
    });

    waySlide.addEventListener("touchmove", function (e) {
        if (!isDown) return;
        const x = e.touches[0].pageX - waySlide.offsetLeft;
        const walk = (x - startX) * 1.5;
        waySlide.scrollLeft = scrollLeft - walk;
    });
    // 防止拖拉時選取到文字或圖片
    waySlide.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });

    waySlide.querySelectorAll("img, *").forEach(function (el) {
        el.addEventListener("dragstart", function (e) {
            e.preventDefault();
        });
        el.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
    });

    waySlide.addEventListener("selectstart", function (e) {
        e.preventDefault();
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const groups = document.querySelectorAll('.Species .Group');
        const num = document.getElementById('BossNum');
        const schedule = document.getElementById('BossSchedule').children;
        const backBtn = document.getElementById('BackBtn');
        const nextBtn = document.getElementById('NextBtn');
        let idx = 0, timer = null, animating = false;

        function showGroup(newIdx, direction = 1) {
            if (animating || newIdx === idx) return;
            animating = true;
            const prev = groups[idx];
            const next = groups[newIdx];

            // DataArea fade out
            const prevData = prev.querySelector('.DataArea');
            const prevBoss = prev.querySelector('.BossArea');
            prevData.style.transition = 'opacity 0.3s';
            prevData.style.opacity = 0;
            // BossArea slide out
            prevBoss.style.transition = 'transform 0.3s, opacity 0.3s';
            prevBoss.style.transform = 'translateY(50px)';
            prevBoss.style.opacity = 0;

            setTimeout(() => {
                prev.style.display = 'none';
                // Prepare next
                next.style.display = '';
                const nextData = next.querySelector('.DataArea');
                const nextBoss = next.querySelector('.BossArea');
                nextData.style.opacity = 0;
                nextData.style.transition = 'opacity 0.3s';
                nextBoss.style.transform = 'translateY(50px)';
                nextBoss.style.opacity = 0;
                nextBoss.style.transition = 'transform 0.3s, opacity 0.3s';

                setTimeout(() => {
                    // DataArea fade in
                    nextData.style.opacity = 1;
                    // BossArea slide in
                    nextBoss.style.transform = 'translateY(0)';
                    nextBoss.style.opacity = 1;
                    // Update points
                    for(let i=0;i<schedule.length;i++) schedule[i].classList.toggle('Focus',i===newIdx);
                    num.textContent = newIdx+1;
                    idx = newIdx;
                    setTimeout(()=>{animating=false;},350);
                }, 30);
            }, 300);
        }

        function goto(n) {
            let newIdx = (n + groups.length) % groups.length;
            showGroup(newIdx, n>idx?1:-1);
            resetTimer();
        }

        function resetTimer() {
            if(timer) clearInterval(timer);
            timer = setInterval(()=>goto(idx+1), 3000);
        }

        // Init
        groups.forEach((g,i)=>{
            g.style.display = i===0?'':'none';
            g.querySelector('.DataArea').style.opacity = 1;
            g.querySelector('.BossArea').style.transform = 'translateY(0)';
            g.querySelector('.BossArea').style.opacity = 1;
        });
        resetTimer();

        backBtn.onclick = ()=>goto(idx-1);
        nextBtn.onclick = ()=>goto(idx+1);
    // 點擊 schedule 切換
    Array.from(schedule).forEach((item, i) => {
        item.onclick = () => goto(i);
    });
});


// FishSlide 無間斷、無限循環輪播（修正抖動，兩個方向均使用元素移動）
window.addEventListener('load', function () {
    // 找到所有 FishSlide 容器
    const fishSlides = document.querySelectorAll('.FishSlide');
    if (fishSlides.length === 0) {
        console.error('No .FishSlide elements found.');
        return;
    }

    fishSlides.forEach(function (container) {
        const slide = container.querySelector('.Slide');
        if (!slide) {
            console.error('No .Slide element found in .FishSlide container.');
            return;
        }

        const fishItems = Array.from(slide.children);
        if (fishItems.length === 0) {
            console.error('No child elements found in .Slide.');
            return;
        }

        // 檢測是否為反向輪播
        const isReverse = container.classList.contains('Reverse');
        console.log(`Initializing ${isReverse ? 'Reverse (Left to Right)' : 'Normal (Right to Left)'} FishSlide in container:`, container);

        // 計算視窗寬度（容器寬度）和精確單位寬度（包含 gap）
        const containerWidth = container.clientWidth;
        const computedStyle = getComputedStyle(slide);
        const gap = parseInt(computedStyle.gap) || 0; // 動態獲取 gap 值
        const singleItemWidth = fishItems[0].offsetWidth + gap; // 單位寬度 = 元素寬度 + gap（平均值）

        // 初始化樣式
        slide.style.display = 'flex';
        slide.style.transform = 'translateX(0px)';

        let pos = 0; // 當前 translateX 位置
        let animationId; // 動畫 ID

        // 動畫函數：持續移動，並精確檢查邊界移動元素
        function animate() {
            if (isReverse) {
                // Reverse：從左向右移動（pos 增加），最後一個元素移出右邊時移到開頭
                pos += 1; // 每幀移動 1px（調整此值控制速度：越大越快）
                slide.style.transform = `translateX(${pos}px)`;

                // 精確檢查最後一個元素是否移出右邊（使用實際 offsetWidth + scrollWidth）
                const lastItem = slide.lastElementChild;
                if (lastItem) {
                    const lastItemRight = pos + slide.scrollWidth - lastItem.offsetWidth; // 考慮 gap 的總寬
                    if (lastItemRight >= containerWidth) {
                        // 移動前記錄位置，移動後補償
                        const currentPos = pos;
                        slide.insertBefore(lastItem, slide.firstElementChild);
                        pos = currentPos - singleItemWidth; // 精確補償（包含 gap）
                        slide.style.transform = `translateX(${pos}px)`;
                    }
                }
            } else {
                // 正常：從右向左移動（pos 減少），第一個元素移出左邊時移到末尾
                pos -= 1; // 每幀移動 1px（調整此值控制速度：越大越快）
                slide.style.transform = `translateX(${pos}px)`;

                // 精確檢查第一個元素是否移出左邊（使用實際 offsetLeft + offsetWidth）
                const firstItem = slide.firstElementChild;
                if (firstItem) {
                    const firstItemLeft = pos + firstItem.offsetLeft; // offsetLeft 已包含 gap 影響
                    if (firstItemLeft <= -firstItem.offsetWidth) {
                        // 移動前記錄位置，移動後補償
                        const currentPos = pos;
                        slide.appendChild(firstItem);
                        pos = currentPos + singleItemWidth; // 精確補償（包含 gap）
                        slide.style.transform = `translateX(${pos}px)`;
                    }
                }
            }

            animationId = requestAnimationFrame(animate); // 繼續下一幀
        }

        // 啟動動畫
        animationId = requestAnimationFrame(animate);
    });
});

// 偵測KvBox完全離開視窗時，DownloadArea加上Fixed class的功能
document.addEventListener("DOMContentLoaded", function () {
    const kvBox = document.querySelector(".KvBox");
    const downloadArea = kvBox ? kvBox.querySelector(".DownloadArea") : null;
    if (kvBox && downloadArea) {
        window.addEventListener("scroll", function () {
            const kvBoxRect = kvBox.getBoundingClientRect();
            if (kvBoxRect.bottom <= 0) {
                downloadArea.classList.add("Fixed");
            } else {
                downloadArea.classList.remove("Fixed");
            }
        });
    }
});

// 淡入動畫
document.addEventListener("DOMContentLoaded", function () {
    const approachElements = document.querySelectorAll('.Approach');
    if (approachElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 進入視窗高度的20%才觸發
            if (entry.intersectionRatio >= 0.20) {
                if (entry.target.closest('.Approach') !== entry.target) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 500);
                } else {
                    entry.target.classList.add('visible');
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: [0, 0.20] // 0~20%可視範圍
    });

    approachElements.forEach(el => observer.observe(el));
});

// 水波滑鼠游標效果
document.addEventListener("DOMContentLoaded", function () {
    // 建立水波游標元素
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "rgba(0,180,255,0.25)";
    cursor.style.boxShadow = "0 0 20px 8px rgba(0,180,255,0.15)";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "background 0.2s, box-shadow 0.2s";
    cursor.style.mixBlendMode = "screen";
    cursor.style.willChange = "transform";
    cursor.style.backdropFilter = "blur(2px)";
    document.body.appendChild(cursor);

    // 泡泡動畫生成
    function createBubble(x, y) {
        const bubble = document.createElement("div");
        bubble.style.position = "fixed";
        bubble.style.left = x + "px";
        bubble.style.top = y + "px";
        bubble.style.width = bubble.style.height = (20 + Math.random() * 20) + "px";
        bubble.style.borderRadius = "50%";
        bubble.style.background = "rgba(0,180,255,0.3)";
        bubble.style.opacity = "0.8";
        bubble.style.pointerEvents = "none";
        bubble.style.zIndex = "9998";
        bubble.style.transform = "translate(-50%, -50%) scale(1)";
        bubble.style.transition = "transform 0.8s cubic-bezier(.4,2,.2,1), opacity 0.8s";
        document.body.appendChild(bubble);

        // 動畫
        setTimeout(() => {
            bubble.style.transform = "translate(-50%, -50%) scale(" + (1.5 + Math.random()) + ")";
            bubble.style.opacity = "0";
        }, 10);

        // 移除
        setTimeout(() => {
            bubble.remove();
        }, 800);
    }

    // 跟隨滑鼠移動
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.background = "rgba(0,180,255,0.25)";
        cursor.style.boxShadow = "0 0 20px 8px rgba(0,180,255,0.15)";
        // 產生泡泡
        if (Math.random() < 0.18) createBubble(e.clientX, e.clientY);
    });

    // 點擊時產生水波動畫和泡泡
    document.addEventListener("mousedown", function (e) {
        cursor.style.background = "rgba(0,180,255,0.45)";
        cursor.style.boxShadow = "0 0 40px 16px rgba(0,180,255,0.25)";
        setTimeout(() => {
            cursor.style.background = "rgba(0,180,255,0.25)";
            cursor.style.boxShadow = "0 0 20px 8px rgba(0,180,255,0.15)";
        }, 180);
        // 點擊時多產生幾個泡泡
        for (let i = 0; i < 4; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = 10 + Math.random() * 20;
            createBubble(e.clientX + Math.cos(angle) * r, e.clientY + Math.sin(angle) * r);
        }
    });

    // 隱藏游標在輸入框、textarea、button上
    ["mouseenter", "mouseleave"].forEach(event => {
        document.body.addEventListener(event, function (e) {
            if (["INPUT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) {
                cursor.style.display = event === "mouseenter" ? "none" : "";
            }
        }, true);
    });
});
