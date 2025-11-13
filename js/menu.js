// // js/menu.js - Menu Interativo

// let currentHoveredStory = null;

// // Mapeamento de botões para histórias
// const storyMapping = {
//     'startGame': 'startGame',
//     'viewMenu': 'visualizeMenu',
//     'viewStories': 'viewStories'
// };

// // Iniciar o jogo
// function startGame() {
//     document.getElementById('menu-screen').classList.add('hidden');
//     document.getElementById('game-container').classList.remove('hidden');
//     init();
// }

// // Mostrar história ao passar o mouse
// function showMenuStory(buttonId) {
//     const storyKey = storyMapping[buttonId];
//     if (!storyKey || !menuStories[storyKey]) return;
    
//     currentHoveredStory = storyKey;
//     const story = menuStories[storyKey];
    
//     const emptyPanel = document.getElementById('menu-story-empty');
//     const contentPanel = document.getElementById('menu-story-content');
    
//     emptyPanel.style.display = 'none';
//     contentPanel.style.display = 'block';
    
//     renderMenuStory(story);
// }

// // Esconder história ao tirar o mouse
// function hideMenuStory() {
//     setTimeout(() => {
//         if (!currentHoveredStory) return;
        
//         const emptyPanel = document.getElementById('menu-story-empty');
//         const contentPanel = document.getElementById('menu-story-content');
        
//         emptyPanel.style.display = 'flex';
//         contentPanel.style.display = 'none';
//         currentHoveredStory = null;
//     }, 200); // Pequeno delay para transição suave
// }

// // Renderizar história no painel
// function renderMenuStory(story) {
//     const container = document.getElementById('menu-story-content');
//     let html = '';
    
//     html += `
//         <div class="story-header">
//             <div class="story-header-top">
//                 <span>📖</span>
//                 <span class="story-header-id">${story.id}</span>
//             </div>
//             <h2 class="story-header-title">${story.title}</h2>
//             <p class="story-header-description">${story.description}</p>
//         </div>
//     `;
    
//     story.scenarios.forEach(scenario => {
//         html += `
//             <div class="scenario-card">
//                 <h3 class="scenario-title">
//                     <span>✓</span>
//                     ${scenario.name}
//                 </h3>
                
//                 <div class="scenario-section">
//                     <p class="scenario-label scenario-label-given">DADO QUE:</p>
//                     <ul class="scenario-list">
//                         ${scenario.given.map(g => 
//                             `<li class="scenario-item-game scenario-item-given">${g}</li>`
//                         ).join('')}
//                     </ul>
//                 </div>
                
//                 <div class="scenario-section">
//                     <p class="scenario-label scenario-label-when">QUANDO:</p>
//                     <p class="scenario-item-game scenario-item-when">${scenario.when}</p>
//                 </div>
                
//                 <div class="scenario-section">
//                     <p class="scenario-label scenario-label-then">ENTÃO:</p>
//                     <ul class="scenario-list">
//                         ${scenario.then.map(t => 
//                             `<li class="scenario-item-game scenario-item-then">
//                                 <span class="scenario-check">✓</span>
//                                 <span>${t}</span>
//                             </li>`
//                         ).join('')}
//                     </ul>
//                 </div>
//             </div>
//         `;
//     });
    
//     container.innerHTML = html;
// }

// // Retornar ao menu do jogo
// function returnToMenu() {
//     document.getElementById('game-container').classList.add('hidden');
//     document.getElementById('menu-screen').classList.remove('hidden');
    
//     // Reset do jogo
//     gameState.playerPos = { x: 150, y: 470 };
//     gameState.direction = 'right';
//     gameState.isMoving = false;
//     gameState.keys = {};
//     gameState.currentFrame = 0;
//     gameState.lastAction = '';
    
//     document.getElementById('storyEmpty').style.display = 'flex';
//     document.getElementById('storyContent').style.display = 'none';
    
//     // Resetar painel do menu
//     document.getElementById('menu-story-empty').style.display = 'flex';
//     document.getElementById('menu-story-content').style.display = 'none';
//     currentHoveredStory = null;
// }
// Funções do Menu
function startGame() {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    init();
}

function showMenuStories() {
    renderMenuStories();
    document.getElementById('menu-stories-modal').classList.add('show');
}

function closeMenuStories() {
    document.getElementById('menu-stories-modal').classList.remove('show');
}

function returnToMenu() {
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
    
    // Reset do jogo
    gameState.playerPos = { x: 150, y: 470 };
    gameState.direction = 'right';
    gameState.isMoving = false;
    gameState.keys = {};
    gameState.currentFrame = 0;
    gameState.lastAction = '';
    
    document.getElementById('storyEmpty').style.display = 'flex';
    document.getElementById('storyContent').style.display = 'none';
}

function renderMenuStories() {
    const container = document.getElementById('menu-stories-container');
    let html = '';
    
    Object.values(menuStories).forEach(story => {
        html += `
            <div class="user-story-card">
                <div class="user-story-header">
                    <span class="user-story-id">${story.id}</span>
                </div>
                <h3 class="user-story-title">${story.title}</h3>
                <p class="user-story-description">${story.description}</p>
        `;
        
        story.scenarios.forEach(scenario => {
            html += `
                <div class="scenario-item">
                    <p class="scenario-name">${scenario.name}</p>
                    <div class="scenario-section">
                        <p class="scenario-label scenario-label-given">DADO QUE:</p>
                        ${scenario.given.map(g => `<p class="scenario-text">✓ ${g}</p>`).join('')}
                    </div>
                    <div class="scenario-section">
                        <p class="scenario-label scenario-label-when">QUANDO:</p>
                        <p class="scenario-text">${scenario.when}</p>
                    </div>
                    <div class="scenario-section">
                        <p class="scenario-label scenario-label-then">ENTÃO:</p>
                        ${scenario.then.map(t => `<p class="scenario-text">✓ ${t}</p>`).join('')}
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
}