// Gerenciamento de Sprites
async function loadSprites() {
    const newSprites = {
        idle: { right: [], left: [], up: [], down: [] },
        walk: { right: [], left: [], up: [], down: [] }
    };

    const directions = ['right', 'left', 'up', 'down'];
    const types = ['idle', 'walk'];

    for (const type of types) {
        for (const dir of directions) {
            const folderPath = `${type}-${dir}`;
            
            for (let i = 1; i <= 10; i++) {
                const path = `assets/sabrina/${folderPath}/${i}.png`;
                try {
                    const img = new Image();
                    img.src = path;
                    
                    await new Promise((resolve, reject) => {
                        img.onload = () => {
                            newSprites[type][dir].push(path);
                            resolve();
                        };
                        img.onerror = () => reject();
                        setTimeout(reject, 100);
                    });
                } catch (error) {
                    break;
                }
            }
        }
    }

    return newSprites;
}