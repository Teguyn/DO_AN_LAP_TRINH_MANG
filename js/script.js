// ============================================
// DARK MODE TOGGLE
// ============================================

function initDarkMode() {
    // Check if dark mode preference is saved
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme !== 'light' ? savedTheme : (prefersDark ? 'dark' : 'light');
    
    // Apply saved theme
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Create toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    if (theme === 'dark') {
        themeToggle.classList.add('dark');
    }
    
    document.body.appendChild(themeToggle);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon and class
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeToggle.classList.toggle('dark');
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeToggle.classList.toggle('dark');
    });
}

// Initialize dark mode on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Skip if it's a share button
        if (this.classList.contains('share-button')) {
            return;
        }
        
        e.preventDefault();
        const hash = this.getAttribute('href');
        const mainContent = document.getElementById('main-content');
        const blogDetailView = document.getElementById('blogDetailView');
        
        // Extract section ID from hash (e.g., "#blog" -> "blog", "#blog/123" -> "blog")
        const sectionId = hash.split('/')[0].substring(1); // Remove # and get first part
        
        // If blog detail is showing and clicking any navigation link (including #blog), return to main view first
        if (blogDetailView && blogDetailView.style.display === 'block') {
            // Block scroll listener temporarily to prevent wrong section detection
            shouldUpdateNavOnScroll = false;
            
            mainContent.style.display = 'block';
            blogDetailView.style.display = 'none';
            
            // Reset scroll position to top first
            window.scrollTo(0, 0);
            
            // Use replaceState instead of changing hash to avoid history issues
            history.replaceState(null, null, hash);
            
            // Update active nav link to target section
            updateActiveNavLink(sectionId);
            
            // Scroll to target immediately
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'auto', // Instant scroll instead of smooth
                    block: 'start'
                });
            }
            
            // Re-enable scroll listener immediately since we're scrolling instantly
            shouldUpdateNavOnScroll = true;
        } else {
            // Block scroll listener temporarily
            shouldUpdateNavOnScroll = false;
            
            // Update active nav link
            updateActiveNavLink(sectionId);
            
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'auto', // Instant scroll instead of smooth
                    block: 'start'
                });
            }
            
            // Re-enable scroll listener immediately
            shouldUpdateNavOnScroll = true;
        }
    });
});

// ============================================
// SKILL BARS ANIMATION
// ============================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showMessage('Vui lòng điền tất cả các trường bắt buộc!', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Vui lòng nhập địa chỉ email hợp lệ!', 'error');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        console.log('Form Data:', formData);
        
        // Simulate sending (in production, use fetch or axios)
        // sendFormData(formData);
        
        showMessage('Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ liên hệ với bạn trong vòng 24 giờ.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards, blog cards, cert cards, etc.
document.querySelectorAll('.project-card, .blog-card, .cert-card, .achievement-item, .highlight-card, .soft-skill').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

let shouldUpdateNavOnScroll = true;

function updateActiveNavLink(sectionId = null) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (sectionId && link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    // Don't update nav if blog detail view is shown or if we're blocking updates
    const blogDetailView = document.getElementById('blogDetailView');
    if (blogDetailView && blogDetailView.style.display === 'block') {
        return;
    }
    
    if (!shouldUpdateNavOnScroll) {
        return;
    }
    
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    updateActiveNavLink(current);
});

// ============================================
// ADD ACTIVE CLASS STYLE
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    animateSkillBars();
    document.body.style.opacity = '1';
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// SEND FORM DATA TO SERVER (OPTIONAL)
// ============================================

// Uncomment and modify this function if you have a backend server
/*
async function sendFormData(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            showMessage(data.message, 'success');
            contactForm.reset();
        } else {
            showMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error');
    }
}
*/

// ============================================
// PARALLAX EFFECT (OPTIONAL)
// ============================================

window.addEventListener('scroll', debounce(() => {
    const scrollPosition = window.scrollY;
    
    // Add parallax effect to hero section if needed
    const hero = document.querySelector('.hero');
    if (hero && scrollPosition < hero.clientHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
}, 10));

// ============================================
// DARK MODE TOGGLE (OPTIONAL)
// ============================================

// You can add a dark mode toggle button and uncomment this
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
*/

// ============================================
// INITIALIZE
// ============================================

// Load and render blog posts from JSON
let blogData = {};

async function loadBlogPosts() {
    try {
        const response = await fetch('data/posts.json');
        const data = await response.json();
        
        // Convert array to object keyed by id for compatibility
        blogData = {};
        data.posts.forEach(post => {
            blogData[post.id] = post;
        });
        
        // Render blog posts
        renderBlogPosts(data.posts);
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    posts.forEach((post, index) => {
        const isHidden = index >= 6; // First 6 are visible, rest are hidden
        const hiddenClass = isHidden ? 'hidden-blog' : '';
        const displayStyle = isHidden ? 'style="display:none;"' : '';
        
        const article = document.createElement('article');
        article.className = `blog-card ${post.cardClass} ${hiddenClass}`;
        article.setAttribute('data-blog-id', post.id);
        article.innerHTML = `
            <div class="blog-card-header">
                <div class="blog-icon"><i class="fas fa-${post.icon}"></i></div>
                <div class="blog-category">${post.category}</div>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span class="blog-date"><i class="fas fa-calendar"></i> ${post.date}</span>
                <span class="blog-reading-time"><i class="fas fa-clock"></i> ${post.readingTime}</span>
            </div>
            <a href="#" class="blog-link read-more">Đọc Thêm <i class="fas fa-arrow-right"></i></a>
        `;
        
        if (isHidden) {
            article.style.display = 'none';
        }
        
        blogGrid.appendChild(article);
    });
    
    // Re-attach event listeners after rendering
    initBlogDetailPage();
}

// Blog detail page functionality
function initBlogDetailPage() {
    const mainContent = document.getElementById('main-content');
    const blogDetailView = document.getElementById('blogDetailView');
    const backBtn = document.getElementById('backToBlog');

    // Helper function to render blog detail with tags
    function renderBlogDetail(blog) {
        if (blog) {
            document.getElementById('detailCategory').textContent = blog.category;
            document.getElementById('detailTitle').textContent = blog.title;
            document.getElementById('detailMeta').textContent = blog.date;
            document.getElementById('detailContent').innerHTML = blog.content;
            
            // Render tags if available
            const tagsContainer = document.getElementById('blogTags');
            if (tagsContainer && blog.tags && blog.tags.length > 0) {
                tagsContainer.innerHTML = blog.tags
                    .map(tag => `<span class="blog-tag">#${tag}</span>`)
                    .join('');
            } else if (tagsContainer) {
                tagsContainer.innerHTML = '';
            }
            
            // Set active nav link to "Blog"
            updateActiveNavLink('blog');
        }
    }

    // Handle "Read More" clicks - navigate to blog detail page
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const article = link.closest('.blog-card');
            const blogId = article.getAttribute('data-blog-id');
            
            // Show blog detail view, hide main content
            mainContent.style.display = 'none';
            blogDetailView.style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update URL hash
            window.location.hash = `blog/${blogId}`;
            
            // Populate blog detail
            const blog = blogData[blogId];
            renderBlogDetail(blog);
        });
    });

    // Back button functionality
    backBtn.addEventListener('click', () => {
        // Close mobile menu if open
        if (hamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        mainContent.style.display = 'block';
        blogDetailView.style.display = 'none';
        
        // Use replaceState to avoid history issues
        history.replaceState(null, null, '#blog');
        
        // Update active nav link
        updateActiveNavLink('blog');
        
        // Scroll to blog section
        const blogSection = document.getElementById('blog');
        if (blogSection) {
            blogSection.scrollIntoView({
                behavior: 'auto', // Instant scroll instead of smooth
                block: 'start'
            });
        }
        
        // Enable scroll listener with a small delay to allow scroll to complete
        setTimeout(() => {
            shouldUpdateNavOnScroll = true;
        }, 50);
    });

    // Handle direct URL hash navigation
    function handleHashChange() {
        const hash = window.location.hash;
        if (hash.startsWith('#blog/')) {
            const blogId = hash.split('/')[1];
            const blog = blogData[blogId];
            
            if (blog) {
                mainContent.style.display = 'none';
                blogDetailView.style.display = 'block';
                renderBlogDetail(blog);
                window.scrollTo(0, 0);
            }
        } else {
            mainContent.style.display = 'block';
            blogDetailView.style.display = 'none';
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash on page load
    handleHashChange();
}

// Handle "View All Blogs" button
function initViewAllBlogs() {
    const viewAllBtn = document.getElementById('viewAllBlogs');
    if (viewAllBtn) {
        let isExpanded = false;
        let isAnimating = false;
        
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Prevent multiple clicks during animation
            if (isAnimating) return;
            isAnimating = true;
            
            const hiddenBlogs = document.querySelectorAll('.hidden-blog');
            
            if (!isExpanded) {
                // ============================================
                // SHOW BLOGS - Slide Up Animation
                // ============================================
                
                hiddenBlogs.forEach((blog, index) => {
                    blog.style.display = 'block';
                    blog.style.overflow = 'hidden';
                    
                    const scrollHeight = blog.scrollHeight;
                    
                    blog.style.maxHeight = '0';
                    blog.style.marginBottom = '0';
                    blog.style.opacity = '0';
                    blog.style.transform = 'translateY(30px)';
                    
                    blog.offsetHeight;
                    
                    // Slide Up animation với bounce effect
                    setTimeout(() => {
                        blog.style.transition = 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        blog.style.maxHeight = (scrollHeight + 20) + 'px';
                        blog.style.marginBottom = '20px';
                        blog.style.opacity = '1';
                        blog.style.transform = 'translateY(0)';
                    }, index * 120);
                    
                    setTimeout(() => {
                        blog.style.overflow = '';
                        blog.style.maxHeight = '';
                        blog.style.marginBottom = '';
                        blog.style.transition = '';
                        blog.style.opacity = '';
                        blog.style.transform = '';
                        
                        if (index === hiddenBlogs.length - 1) {
                            isAnimating = false;
                        }
                    }, 700 + index * 120);
                });
                viewAllBtn.textContent = 'Ẩn Bài Viết Khác';
                isExpanded = true;
            } else {
                // ============================================
                // HIDE BLOGS - Slide Down Out Animation (Ngược lại)
                // ============================================
                
                // Lưu vị trí scroll hiện tại
                const scrollPosition = window.scrollY;
                
                hiddenBlogs.forEach((blog, index) => {
                    // Chuẩn bị cho animation
                    blog.style.overflow = 'hidden';
                    
                    // Stagger animation - mỗi bài viết ẩn từng cái một (ngược chiều)
                    setTimeout(() => {
                        // Slide Down Out animation - ngược lại với slide up
                        blog.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
                        blog.style.maxHeight = '0';
                        blog.style.marginBottom = '0';
                        blog.style.opacity = '0';
                        blog.style.transform = 'translateY(30px) scale(0.98)';
                        
                        // Sau animation hoàn thành
                        setTimeout(() => {
                            // Ẩn display
                            blog.style.display = 'none';
                            
                            // Clear inline styles
                            blog.style.transition = '';
                            blog.style.overflow = '';
                            blog.style.maxHeight = '';
                            blog.style.marginBottom = '';
                            blog.style.opacity = '';
                            blog.style.transform = '';
                            
                            // Phục hồi scroll position sau khi tất cả animation hoàn thành
                            if (index === hiddenBlogs.length - 1) {
                                // Restore scroll position ngay lập tức
                                window.scrollTo(0, scrollPosition);
                                isAnimating = false;
                            }
                        }, 800);
                    }, index * 100);
                });
                
                viewAllBtn.textContent = 'Xem Tất Cả Bài Viết';
                isExpanded = false;
            }
        });
    }
}

// Initialize blog features when partials are loaded
function initBlogFeatures() {
    loadBlogPosts().then(() => {
        initBlogDetailPage();
        initViewAllBlogs();
        initShareButtons();
    });
}

// Share button handlers
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.getAttribute('data-platform');
            const title = document.getElementById('detailTitle')?.textContent || 'Blog Post';
            const url = window.location.href;
            
            switch(platform) {
                case 'facebook':
                    window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                        'facebook-share',
                        'width=600,height=400'
                    );
                    break;
                case 'twitter':
                    window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
                        'twitter-share',
                        'width=600,height=400'
                    );
                    break;
                case 'linkedin':
                    window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                        'linkedin-share',
                        'width=600,height=400'
                    );
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        // Show feedback
                        const originalText = btn.innerHTML;
                        btn.innerHTML = '<i class="fas fa-check"></i>';
                        btn.style.backgroundColor = '#10b981';
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.style.backgroundColor = '';
                        }, 2000);
                    }).catch(() => {
                        alert('Không thể sao chép liên kết');
                    });
                    break;
            }
        });
    });
}

// Call initialization
initBlogFeatures();

console.log('Portfolio website loaded successfully!');

// Set the current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// ============================================
// CERTIFICATE MODAL FUNCTIONS
// ============================================

function openCertModal(imageSrc) {
    console.log('Opening modal with:', imageSrc);
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certModalImg');
    if (modal && modalImg) {
        modalImg.src = imageSrc;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Modal elements not found');
    }
}

function closeCertModal() {
    console.log('Closing modal');
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('certModal');
    if (modal && event.target === modal) {
        closeCertModal();
    }
});

// Close modal when Escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCertModal();
    }
});
