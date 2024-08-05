document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 처리
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main > section');
    const logo = document.querySelector('.logo a');
    

    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('main');
    });


    
});

document.addEventListener('DOMContentLoaded', function() {

    // 캘린더 초기화
    var calendarEl = document.getElementById('calendar-widget');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        height: 'auto' // 캘린더 높이를 자동으로 조절
    });
    calendar.render();
});


document.addEventListener('DOMContentLoaded', function() {

    // 스토리 스토어 필터링
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const storyCards = document.querySelectorAll('.store-story-card');

    function filterStories() {
        const selectedCategory = categoryFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        storyCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('h3').textContent.toLowerCase();
            const shouldShow = (selectedCategory === '' || category === selectedCategory) &&
                               (title.includes(searchTerm));
            card.style.display = shouldShow ? 'block' : 'none';
        });
    }

    categoryFilter.addEventListener('change', filterStories);
    searchInput.addEventListener('input', filterStories);
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupLink = document.getElementById('signup-link');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // 로그인 처리 로직 추가
        console.log('이메일:', email);
        console.log('비밀번호:', password);

        // 예시: 로그인 성공 메시지
        alert('로그인 성공!');
    });

    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 회원가입 페이지로 이동 또는 표시하는 로직 추가
        alert('회원가입 페이지로 이동합니다.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.getElementById('profile-link');

    profileLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 회원가입 페이지로 이동 또는 표시하는 로직 추가
        alert('프로필로 이동합니다.');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const storyList = document.querySelector('.story-list');
    const writeStoryButton = document.getElementById('write-story');

    // 샘플 스토리 데이터
    const stories = [
        { title: "첫 번째 이야기", excerpt: "이것은 첫 번째 이야기의 일부입니다...", date: "2024년 8월 4일" },
        { title: "성장의 기록", excerpt: "오늘 나는 새로운 것을 배웠다...", date: "2024년 8월 3일" },
        { title: "도전과 극복", excerpt: "어려움을 겪었지만 결국 해냈다...", date: "2024년 8월 2일" }
    ];

    // 스토리 목록 생성
    function renderStories() {
        storyList.innerHTML = '';
        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.className = 'story-item';
            storyElement.innerHTML = `
                <h3 class="story-title">${story.title}</h3>
                <p class="story-excerpt">${story.excerpt}</p>
                <div class="story-meta">${story.date}</div>
            `;
            storyList.appendChild(storyElement);
        });
    }

    renderStories();

    writeStoryButton.addEventListener('click', function() {
        alert('새 글 작성 기능은 아직 구현되지 않았습니다.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filteredStories = document.getElementById('filtered-stories');
    const examFilter = document.getElementById('exam-filter');
    const personalityFilter = document.getElementById('personality-filter');
    const locationFilter = document.getElementById('location-filter');
    const searchInput = document.getElementById('search-input');

    // 샘플 스토리 데이터
    const stories = [
        { 
            title: "법대생에서 IT 개발자로", 
            excerpt: "법학을 공부하다 프로그래밍에 매료되어 커리어를 전환한 과정과 그 속에서 배운 교훈들", 
            author: "김코딩",
            price: 7000,
            exam: "프로그래밍",
            personality: "내향적",
            location: "서울",
            image: "Financial District, New York City_ November, 2017_.jpeg"
        },
        { 
            title: "6개월 만에 JLPT N1 따기", 
            excerpt: "효율적인 일본어 학습법과 시험 준비 전략 공유", 
            author: "H20H20",
            price: 5000,
            exam: "자격증",
            personality: "외향적",
            location: "부산",
            image: "https://item.kakaocdn.net/do/8481d7628da408ea7ea20b235cf336c87154249a3890514a43687a85e6b6cc82"
        },
        { 
            title: "50대의 창업 성공기", 
            excerpt: "늦은 나이에 시작한 창업, 그 도전과 성공의 여정", 
            author: "박창업",
            price: 12000,
            exam: "창업",
            personality: "외향적",
            location: "대구",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEEjqTbysU5Herw7oiyd0BsyO-BpBcNXvFQ&s"
        }
    ];

    function renderFilteredStories() {
        const selectedExam = examFilter.value;
        const selectedPersonality = personalityFilter.value;
        const selectedLocation = locationFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filteredResults = stories.filter(story => {
            const examMatch = selectedExam === '' || story.exam === selectedExam;
            const personalityMatch = selectedPersonality === '' || story.personality === selectedPersonality;
            const locationMatch = selectedLocation === '' || story.location === selectedLocation;
            const searchMatch = story.title.toLowerCase().includes(searchTerm) || 
                                story.excerpt.toLowerCase().includes(searchTerm);

            return examMatch && personalityMatch && locationMatch && searchMatch;
        });

        filteredStories.innerHTML = '';
        filteredResults.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.className = 'store-story-card';
            storyElement.innerHTML = `
                <img src="${story.image}" alt="${story.title}">
                <div class="store-story-info">
                    <h3>${story.title}</h3>
                    <p>${story.excerpt}</p>
                    <div class="store-story-meta">
                        <span class="author">${story.author}</span>
                        <span class="price">${story.price.toLocaleString()}원</span>
                    </div>
                    <div class="story-tags">
                        <span>${story.exam}</span> | 
                        <span>${story.personality}</span> | 
                        <span>${story.location}</span>
                    </div>
                </div>
            `;
            filteredStories.appendChild(storyElement);
        });
    }

    examFilter.addEventListener('change', renderFilteredStories);
    personalityFilter.addEventListener('change', renderFilteredStories);
    locationFilter.addEventListener('change', renderFilteredStories);
    searchInput.addEventListener('input', renderFilteredStories);

    // 초기 렌더링
    renderFilteredStories();
});