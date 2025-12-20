let currentSection = '';

function showHome() {
    document.getElementById('home-screen').style.display = 'flex';
    document.getElementById('games-section').style.display = 'none';
    document.getElementById('apps-section').style.display = 'none';
    document.getElementById('player').style.display = 'none';
}

function showSection(section) {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('games-section').style.display = section === 'games' ? 'block' : 'none';
    document.getElementById('apps-section').style.display = section === 'apps' ? 'block' : 'none';
}

function loadContent(url, section) {
    const iframe = document.getElementById('content-iframe');
    const player = document.getElementById('player');
    
    currentSection = section;
    iframe.src = url;
    player.style.display = 'flex';
    document.getElementById('games-section').style.display = 'none';
    document.getElementById('apps-section').style.display = 'none';
}

function hideContent() {
    const iframe = document.getElementById('content-iframe');
    const player = document.getElementById('player');
    
    iframe.src = '';
    player.style.display = 'none';
    
    if (currentSection === 'games') {
        document.getElementById('games-section').style.display = 'block';
    } else if (currentSection === 'apps') {
        document.getElementById('apps-section').style.display = 'block';
    }
}
