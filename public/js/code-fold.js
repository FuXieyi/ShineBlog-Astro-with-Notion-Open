function initCodeMoreBox() {
  // 选择所有pre代码块容器
  const codeBlocks = document.querySelectorAll(".code-block pre, pre");
  if (!codeBlocks || codeBlocks.length === 0) {
    return;
  }
  
  // SVG图标内容
  const codeMoreSVG = `<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11,12 L3,4 L19,4 L11,12 Z" fill="#999999"/></g></svg>`;
  const codeLessSVG = `<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11,4 L19,12 L3,12 L11,4 Z" fill="#999999"/></g></svg>`;
  
  codeBlocks.forEach(codeBlock => {
    // 如果代码块已经有折叠按钮，跳过
    if (codeBlock.parentElement?.querySelector('.code-more-box')) {
      return;
    }
    
    // 校验是否overflow（超出最大高度）
    if (codeBlock.scrollHeight <= 400) {
      return;
    }
    
    // 设置最大高度和相对定位
    codeBlock.style.maxHeight = '400px';
    codeBlock.style.overflow = 'hidden';
    codeBlock.style.position = 'relative';
    
    // 创建容器用于设置正确的相对定位
    const container = codeBlock.parentElement;
    if (container) {
      container.style.position = 'relative';
    }
    
    // 元素初始化
    // codeMoreBox - 渐变遮罩和展开按钮容器
    const codeMoreBox = document.createElement('div');
    codeMoreBox.classList.add('code-more-box');
    
    // codeMoreBtn - 展开按钮 (使用div而不是button，避免默认行为)
    const codeMoreBtn = document.createElement('div');
    codeMoreBtn.classList.add('code-more-btn');
    codeMoreBtn.setAttribute('role', 'button');
    codeMoreBtn.setAttribute('tabindex', '0');
    codeMoreBtn.setAttribute('aria-label', '展开代码');
    
    codeMoreBtn.addEventListener('click', (event) => {
      // 阻止事件冒泡和默认行为
      event.stopPropagation();
      event.preventDefault();
      
      // 移除最大高度限制，显示完整代码
      codeBlock.style.maxHeight = 'none';
      // 隐藏展开按钮
      codeMoreBox.style.display = 'none';
      // 显示收起按钮
      codeLessBtn.style.display = 'block';
      // 触发resize事件，重新计算页面布局
      window.dispatchEvent(new Event('resize'));
    });
    
    // 展开图标 (使用内联SVG)
    const moreIcon = document.createElement('div');
    moreIcon.classList.add('code-more-icon');
    moreIcon.innerHTML = codeMoreSVG;
    moreIcon.style.width = '22px';
    moreIcon.style.height = '16px';
    
    // 添加元素到DOM
    codeMoreBtn.appendChild(moreIcon);
    codeMoreBox.appendChild(codeMoreBtn);
    
    // 创建收起按钮 (使用div而不是button，避免默认行为)
    const codeLessBtn = document.createElement('div');
    codeLessBtn.classList.add('code-less-btn');
    codeLessBtn.setAttribute('role', 'button');
    codeLessBtn.setAttribute('tabindex', '0');
    codeLessBtn.setAttribute('aria-label', '收起代码');
    codeLessBtn.style.display = 'none'; // 初始隐藏
    
    codeLessBtn.addEventListener('click', (event) => {
      // 阻止事件冒泡和默认行为
      event.stopPropagation();
      event.preventDefault();
      
      // 恢复最大高度限制
      codeBlock.style.maxHeight = '400px';
      // 隐藏收起按钮
      codeLessBtn.style.display = 'none';
      // 显示展开按钮
      codeMoreBox.style.display = 'block';
      // 滚动到代码块顶部
      codeBlock.scrollIntoView({behavior: 'smooth'});
      // 触发resize事件，重新计算页面布局
      window.dispatchEvent(new Event('resize'));
    });
    
    // 收起图标 (使用内联SVG)
    const lessIcon = document.createElement('div');
    lessIcon.classList.add('code-less-icon');
    lessIcon.innerHTML = codeLessSVG;
    lessIcon.style.width = '22px';
    lessIcon.style.height = '16px';
    
    codeLessBtn.appendChild(lessIcon);
    
    // 将按钮添加到DOM
    if (container) {
      container.appendChild(codeMoreBox);
      container.appendChild(codeLessBtn);
    } else {
      // 如果没有父容器，则直接添加到代码块
      const parent = codeBlock.parentNode;
      parent.appendChild(codeMoreBox);
      parent.appendChild(codeLessBtn);
    }
  });
}

/**
 * 防止图片查看器处理代码折叠按钮的图片
 */
function disablePhotoSwipeForCodeButtons() {
  // 如果网站使用PhotoSwipe图片查看器
  if (typeof window.PhotoSwipeLightbox !== 'undefined') {
    const lightbox = window.PhotoSwipeLightbox;
    if (lightbox && lightbox.addFilter) {
      lightbox.addFilter('domItemData', (itemData, element) => {
        // 如果元素有data-no-view属性，则排除它
        if (element && element.hasAttribute && 
            (element.hasAttribute('data-no-view') || 
             element.hasAttribute('data-no-lightbox') ||
             element.classList.contains('code-more-icon') ||
             element.classList.contains('code-less-icon'))) {
          return false;
        }
        return itemData;
      });
    }
  }
}

// 在页面加载完成后初始化代码折叠功能
document.addEventListener('DOMContentLoaded', () => {
  initCodeMoreBox();
  disablePhotoSwipeForCodeButtons();
});

// 如果网站使用了分页加载或动态内容，可能需要在内容更新后重新初始化
document.addEventListener('astro:page-load', () => {
  initCodeMoreBox();
  disablePhotoSwipeForCodeButtons();
});
document.addEventListener('astro:after-swap', () => {
  initCodeMoreBox();
  disablePhotoSwipeForCodeButtons();
}); 