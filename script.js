// 页面切换功能
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    // 添加留言按钮事件监听器
    const messageButton = document.getElementById('messageButton');
    if (messageButton) {
        messageButton.addEventListener('click', function() {
            addMessage();
        });
        console.log('留言按钮事件监听器已添加');
    } else {
        console.error('留言按钮未找到');
    }
    
    // 添加老电影胶片效果
    const filmGrain = document.createElement('div');
    filmGrain.className = 'film-grain';
    document.body.appendChild(filmGrain);

    // 添加哥特式装饰元素
    const gothicDecoration = document.createElement('div');
    gothicDecoration.className = 'gothic-decoration';
    document.body.appendChild(gothicDecoration);

    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .film-grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"/></filter><rect width="500" height="500" filter="url(%23noise)" opacity="0.15"/></svg>');
            pointer-events: none;
            z-index: 9999;
            opacity: 0.15;
        }
        
        @keyframes filmFlicker {
            0% { opacity: 0.15; }
            5% { opacity: 0.12; }
            10% { opacity: 0.15; }
            15% { opacity: 0.18; }
            20% { opacity: 0.15; }
            25% { opacity: 0.12; }
            30% { opacity: 0.18; }
            35% { opacity: 0.15; }
            40% { opacity: 0.10; }
            45% { opacity: 0.15; }
            50% { opacity: 0.18; }
            55% { opacity: 0.15; }
            60% { opacity: 0.12; }
            65% { opacity: 0.18; }
            70% { opacity: 0.15; }
            75% { opacity: 0.10; }
            80% { opacity: 0.15; }
            85% { opacity: 0.18; }
            90% { opacity: 0.15; }
            95% { opacity: 0.12; }
            100% { opacity: 0.15; }
        }
        
        .film-grain {
            animation: filmFlicker 4s infinite;
        }
        
        /* 添加老电影划痕效果 */
        .film-scratches {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><line x1="250" y1="0" x2="250" y2="500" stroke="white" stroke-width="0.5" stroke-opacity="0.05"/><line x1="0" y1="250" x2="500" y2="250" stroke="white" stroke-width="0.5" stroke-opacity="0.05"/></svg>');
            pointer-events: none;
            z-index: 9998;
            opacity: 0;
            animation: scratchesAppear 15s infinite;
        }
        
        @keyframes scratchesAppear {
            0% { opacity: 0; }
            10% { opacity: 0; }
            11% { opacity: 0.08; }
            12% { opacity: 0; }
            20% { opacity: 0; }
            21% { opacity: 0.05; }
            22% { opacity: 0; }
            80% { opacity: 0; }
            81% { opacity: 0.08; }
            82% { opacity: 0; }
            90% { opacity: 0; }
            91% { opacity: 0.06; }
            92% { opacity: 0; }
            100% { opacity: 0; }
        }
            
        @keyframes pageTransitionOut {
            0% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
            30% {
                opacity: 0.7;
                transform: translateY(15px) scale(0.97);
                filter: blur(2px);
            }
            100% { 
                opacity: 0; 
                transform: translateY(30px) scale(0.95);
                filter: blur(8px);
            }
        }
        
        @keyframes pageTransitionIn {
            0% { 
                opacity: 0; 
                transform: translateY(-30px) scale(0.95);
                filter: blur(8px);
            }
            70% {
                opacity: 0.7;
                transform: translateY(-10px) scale(0.98);
                filter: blur(3px);
            }
            100% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }
        
@keyframes oldFilmFadeIn {
            0% { 
                opacity: 0; 
                transform: scale(0.95);
                filter: blur(5px) grayscale(0%);
            }
            30% {
                opacity: 0.3;
                filter: blur(3px) grayscale(0%);
            }
            100% { 
                opacity: 1; 
                transform: scale(1);
                filter: blur(0) grayscale(0%);
            }
        }
        
        /* 新增：老电影翻页效果 */
        @keyframes pageTurn {
            0% {
                opacity: 1;
                transform: rotateY(0deg);
                transform-origin: left center;
                filter: brightness(1);
            }
            50% {
                opacity: 0.5;
                transform: rotateY(90deg);
                transform-origin: left center;
                filter: brightness(0.8) blur(3px);
            }
            50.1% {
                opacity: 0.5;
                transform: rotateY(-90deg);
                transform-origin: right center;
                filter: brightness(0.8) blur(3px);
            }
            100% {
                opacity: 1;
                transform: rotateY(0deg);
                transform-origin: right center;
                filter: brightness(1);
            }
        }
        
        /* 新增：墨水晕染效果 */
        @keyframes inkSpread {
            0% {
                opacity: 0;
                filter: blur(10px) contrast(0.8);
                transform: scale(0.9);
            }
            50% {
                opacity: 0.7;
                filter: blur(5px) contrast(0.9);
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                filter: blur(0) contrast(1);
                transform: scale(1);
            }
        }
            
        .page-transition-out {
            animation: pageTransitionOut 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        
        .page-transition-in {
            animation: pageTransitionIn 1s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        
        .page-turn {
            animation: pageTurn 1.2s cubic-bezier(0.7, 0, 0.3, 1) forwards;
            backface-visibility: hidden;
            perspective: 1000px;
        }
        
        .ink-spread {
            animation: inkSpread 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
            
        .vignette {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.7) 100%);
            pointer-events: none;
            z-index: 9998;
        }
        
        /* 新增：老电影闪烁效果 */
        .film-flicker {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0);
            pointer-events: none;
            z-index: 9997;
            transition: background-color 0.1s ease;
        }
        
        /* 新增：老电影黑边效果 */
        .film-frame {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 50px 10px rgba(0, 0, 0, 0.8);
            pointer-events: none;
            z-index: 9996;
        }
    `;
    document.head.appendChild(style);
    
    // 添加暗角效果
    const vignette = document.createElement('div');
    vignette.className = 'vignette';
    document.body.appendChild(vignette);

    // 添加老电影划痕效果
    const filmScratches = document.createElement('div');
    filmScratches.className = 'film-scratches';
    document.body.appendChild(filmScratches);
    
    // 添加老电影闪烁效果
    const filmFlicker = document.createElement('div');
    filmFlicker.className = 'film-flicker';
    document.body.appendChild(filmFlicker);
    
    // 添加老电影黑边效果
    const filmFrame = document.createElement('div');
    filmFrame.className = 'film-frame';
    document.body.appendChild(filmFrame);
    
    // 随机闪烁效果
    setInterval(() => {
        if (Math.random() < 0.05) { // 5%的概率闪烁
            filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            setTimeout(() => {
                filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }, 50 + Math.random() * 100);
        }
    }, 500);
    
    // 移动端菜单切换
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        sidebar.classList.toggle('active');
        
        // 添加菜单切换音效
        playSound('menuToggle');
        
        // 添加墨水晕染效果
        if (sidebar.classList.contains('active')) {
            sidebar.style.animation = 'inkSpread 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards';
        } else {
            sidebar.style.animation = '';
        }
    });
    
    // 点击导航项时在移动端自动关闭菜单
    function closeMenuOnMobile() {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
        }
    }
    
    // 确保移动端菜单按钮正确工作
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
    
    // 导航切换
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            const currentActivePage = document.querySelector('.page.active');
            
            // 添加调试信息
            console.log('点击导航项:', targetPage);
            console.log('当前活动页面:', currentActivePage.id);
            
            // 如果点击的是当前页面，不执行切换
            if (currentActivePage.id === targetPage) {
                console.log('已经是当前页面，不执行切换');
                return;
            }
            
            // 移除所有导航项的活动状态
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 添加当前导航项的活动状态
            this.classList.add('active');
            
            // 播放页面切换音效
            playSound('pageChange');
            
            // 检查目标页面是否存在
            const targetPageElement = document.getElementById(targetPage);
            if (!targetPageElement) {
                console.error('目标页面不存在:', targetPage);
                return;
            }
            console.log('目标页面存在:', targetPage);
            
            // 随机选择过渡效果
            const transitionEffects = ['fade', 'turn', 'ink'];
            const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
            
            // 添加老电影闪烁效果
            filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            setTimeout(() => {
                filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }, 100);
            
            // 使用简化的过渡动画，减少卡顿
            // 页面淡出动画
            currentActivePage.classList.add('page-transition-out');
            
            // 等待淡出动画完成后切换页面
            setTimeout(() => {
                // 移除所有页面的活动状态
                pages.forEach(page => {
                    page.classList.remove('active');
                    page.classList.remove('page-transition-out');
                    page.style.animation = '';
                });
                
                // 添加目标页面的活动状态
                targetPageElement.classList.add('active');
                targetPageElement.classList.add('page-transition-in');
                console.log('页面已切换到:', targetPage);
                
                // 移除过渡动画类
                setTimeout(() => {
                    targetPageElement.classList.remove('page-transition-in');
                }, 800);
            }, 500);
            
            // 在移动端自动关闭菜单
            closeMenuOnMobile();
        });
    });
    
    // 画廊卡片包交互
    const galleryPackages = document.querySelectorAll('.gallery-package');
    const galleryPackagesContainer = document.getElementById('gallery-packages');
    const galleryCardsContainer = document.getElementById('gallery-cards');
    const backToPackagesButton = document.getElementById('backToPackages');
    const currentPackageTitle = document.getElementById('currentPackageTitle');
    
    // 点击卡片包显示对应的卡片内容
    galleryPackages.forEach(packageEl => {
        packageEl.addEventListener('click', function() {
            const packageId = this.getAttribute('data-package');
            const packageTitle = this.querySelector('.package-title').textContent;
            
            // 播放切换音效
            playSound('tabChange');
            
            // 添加老电影闪烁效果
            filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            setTimeout(() => {
                filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }, 100);
            
            // 隐藏卡片包列表，显示卡片内容
            galleryPackagesContainer.style.animation = 'fadeOut 0.6s cubic-bezier(0.7, 0, 0.3, 1) forwards';
            
            setTimeout(() => {
                galleryPackagesContainer.style.display = 'none';
                galleryCardsContainer.style.display = 'block';
                galleryCardsContainer.style.animation = 'oldFilmFadeIn 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards';
                
                // 设置当前卡片包标题
                currentPackageTitle.textContent = packageTitle;
                
                // 隐藏所有卡片内容
                document.querySelectorAll('.gallery-cards-content').forEach(content => {
                    content.style.display = 'none';
                });
                
                // 显示对应的卡片内容
                const targetContent = document.getElementById(`${packageId}-cards`);
                if (targetContent) {
                    targetContent.style.display = 'block';
                    targetContent.style.animation = 'inkSpread 1s cubic-bezier(0.7, 0, 0.3, 1) forwards';
                }
            }, 600);
        });
    });
    
    // 返回卡片包列表按钮
    if (backToPackagesButton) {
        backToPackagesButton.addEventListener('click', function() {
            // 播放返回音效
            playSound('tabChange');
            
            // 添加老电影闪烁效果
            filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            setTimeout(() => {
                filmFlicker.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }, 100);
            
            // 隐藏卡片内容，显示卡片包列表
            galleryCardsContainer.style.animation = 'fadeOut 0.6s cubic-bezier(0.7, 0, 0.3, 1) forwards';
            
            setTimeout(() => {
                galleryCardsContainer.style.display = 'none';
                galleryPackagesContainer.style.display = 'block';
                galleryPackagesContainer.style.animation = 'oldFilmFadeIn 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards';
            }, 600);
        });
    }
    
    // 添加CSS样式
    const galleryStyle = document.createElement('style');
    galleryStyle.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: translateX(0); filter: blur(0); }
            50% { opacity: 0.5; filter: blur(3px); }
            100% { opacity: 0; transform: translateX(-20px); filter: blur(5px); }
        }
        
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateX(20px); filter: blur(5px); }
            50% { opacity: 0.5; filter: blur(3px); }
            100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
    `;
    document.head.appendChild(galleryStyle);
    
    // 初始化性格特质动画
    initTraitBars();
    
    // 初始化关系图动画
    initRelationNodes();
});

// 添加CSS样式
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    @keyframes inkSpread {
        0% { 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95);
            filter: blur(5px);
        }
        30% {
            opacity: 0.7;
            filter: blur(2px);
        }
        100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0);
        }
    }
    
    @keyframes inkFade {
        0% { 
            opacity: 1; 
            transform: translateY(0);
        }
        100% { 
            opacity: 0; 
            transform: translateY(20px);
        }
    }
    
    .notification {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: #ffffff;
        padding: 10px 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .notification.show {
        opacity: 1;
    }
`;
document.head.appendChild(additionalStyle);

// 自定义通知函数
function showNotification(message) {
    // 检查是否已存在通知
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    // 3秒后隐藏通知
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 音效功能 - 已禁用
function playSound(type) {
    // 仅记录日志，不播放实际音效
    console.log(`音效已禁用: ${type}`);
    // 不创建音频上下文，不播放任何声音
}

// 初始化性格特质动画
function initTraitBars() {
    const traitBars = document.querySelectorAll('.trait-fill');
    
    // 添加CSS样式
    const traitStyle = document.createElement('style');
    traitStyle.textContent = `
        @keyframes traitFill {
            0% { width: 0; }
            100% { width: var(--trait-value); }
        }
        
        .trait-fill {
            animation: traitFill 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
    `;
    document.head.appendChild(traitStyle);
    
    // 设置动画延迟
    traitBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.style.setProperty('--trait-value', width);
        bar.style.animationDelay = `${index * 0.2}s`;
    });
}

// 初始化关系图动画
function initRelationNodes() {
    const nodes = document.querySelectorAll('.relation-node:not(.central)');
    
    // 添加CSS样式
    const nodeStyle = document.createElement('style');
    nodeStyle.textContent = `
        @keyframes nodeAppear {
            0% { 
                opacity: 0; 
                transform: scale(0.5) translateY(20px);
                filter: blur(5px);
            }
            70% {
                opacity: 0.7;
                filter: blur(2px);
            }
            100% { 
                opacity: 1; 
                transform: scale(1) translateY(0);
                filter: blur(0);
            }
        }
        
        @keyframes lineAppear {
            0% { opacity: 0; height: 0; width: 0; }
            100% { opacity: 1; height: 100%; width: 100%; }
        }
        
        .relation-node {
            animation: nodeAppear 1s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        
        .relation-line {
            animation: lineAppear 1.2s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
    `;
    document.head.appendChild(nodeStyle);
    
    // 设置动画延迟
    nodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.animationDelay = `${index * 0.3 + 0.5}s`;
        
        const line = node.querySelector('.relation-line');
        if (line) {
            line.style.opacity = '0';
            line.style.animationDelay = `${index * 0.3 + 0.7}s`;
        }
    });
}
