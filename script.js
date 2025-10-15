// 顯示訊息功能
function showMessage() {
    alert('歡迎使用 Coinfishing！\n\n我們將為您提供最新的加密貨幣資訊。');
}

// 平滑滾動導航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 表單提交處理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 顯示成功訊息
    alert('感謝您的訊息！我們會盡快回覆您。');
    
    // 重置表單
    this.reset();
});

// 滾動時導航列效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 頁面載入完成動畫
window.addEventListener('load', () => {
    console.log('Coinfishing website loaded successfully!');
    
    // 添加淡入效果
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// 動態時間更新（Footer）
function updateFooterYear() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Coinfishing. All rights reserved.`;
    }
}

updateFooterYear();
