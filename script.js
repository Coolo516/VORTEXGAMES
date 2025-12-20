let currentSection = ''; // Tracks if we're in 'games' or 'apps'

function showHome() {
    document.getElementById('home-screen').style.display = 'flex';
    document.getElementById('games-section').style.display = 'none';
    document.getElementById('apps-section').style.display = 'none';
    document.getElementById('game-player').style.display = 'none';
}

function showSection(section) {
    document.getElementById('home-screen').style.display = 'none';
    if (section === 'games') {
        document.getElementById('games-section').style.display = 'block';
        document.getElementById('apps-section').style.display = 'none';
    } else if (section === 'apps') {
        document.getElementById('apps-section').style.display = 'block';
        document.getElementById('games-section').style.display = 'none';
    }
}

function loadContent(url, section) {
    const iframe = document.getElementById('content-iframe');
    const player = document.getElementById('game-player');
    
    currentSection = section;
    
    iframe.src = url;
    player.style.display = 'block';
    
    // Hide the current section
    document.getElementById('games-section').style.display = 'none';
    document.getElementById('apps-section').style.display = 'none';
}

function hideContent() {
    const iframe = document.getElementById('content-iframe');
    const player = document.getElementById('game-player');
    
    iframe.src = '';
    player.style.display = 'none';
    
    // Show the section we came from
    if (currentSection === 'games') {
        document.getElementById('games-section').style.display = 'block';
    } else if (currentSection === 'apps') {
        document.getElementById('apps-section').style.display = 'block';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}