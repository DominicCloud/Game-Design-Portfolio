// Profile Image Enlarge
function openProfileImage(event) {
    event.stopPropagation();
    const overlay = document.getElementById('profileOverlay');
    overlay.classList.remove('closing');
    overlay.classList.add('active');
}

function closeProfileImage() {
    const overlay = document.getElementById('profileOverlay');
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing');
    }, 200);
}

// Game Data
const projectData = {
    games: [
        {
            id: 'bardo',
            title: 'Bardo',
            subtitle: '2D Platformer',
            status: 'In Development',
            date: 'March 2025 - Present',
            coverImage: 'assets/Games/bardo/game art 1.jpg',
            description: 'A 2D side-scrolling platformer where death means more than just failure. As Hudson, a middle-aged journalist in the 1970s, you traverse around a mystifying and ever-shifting tower in search of your son and elderly father. Dying in a room allows the player to respawn in a randomly selected new room, with reduced humanity. When Hudson loses all of his humanity, he submits to the tower and the run is lost!<br><br><strong>Death turns into strategy and loss becomes the way forward.</strong>',
            workDone: [
                'Built a Finite State Machine for player movement and animation states',
                'Developed a resource manager that manages health, humanity meter and coins and also interacts seamlessly with the UI',
                'Built a custom level manager with a two-room buffer that correctly loads and unloads new areas in a memory-efficient manner (storing previous level information along with the solved next level data is critical to ensure lightning fast level loading)',
                'Built the complete first area with traps, collectibles, inter-connecting doorways and paths'
            ],
            workPending: [
                'Adding in finished Art',
                'Adding in SFX',
                'Adding main menu'
            ],
            devNotes: 'With death as a mode of progress, every trap and obstacle had to be reimagined. I had to be careful not to break the game; if everything that hurts the player also guarantees forward progress, the player would need to be challenged in some other manner. The solution for this is the "Humanity Meter" - a form of corruption that fills up with every death. A good reminder to the player that death is not a free pass, but a calculated decision (or maybe a limited room error XD).',
            gallery: ['assets/Games/bardo/1.png', 'assets/Games/bardo/2.png', 'assets/Games/bardo/3.png', 'assets/Games/bardo/game art 2.jpg']
        },
        {
            id: 'Chopstyx',
            title: 'Chopstyx',
            subtitle: 'Turn-Based RPG',
            status: 'Completed',
            date: 'January 2026',
            coverImage: 'assets/Games/Chopstyx/cover.png',
            description: '<a href="https://dominiccloud.itch.io/Chopstyx" target="_blank" rel="noopener noreferrer">🎮 Play Chopstyx on itch.io now!</a><br><br>Chopstyx is a turn-based RPG that reimagines the classic hand game Chopsticks as a mythological duel against Charon, the Ferryman of the Underworld. You play as a damned soul crossing the River Styx when Charon, bored with the endless ferrying of the dead, proposes a game. Defeat him in an intentionally unfair match, and you may earn your freedom.<br><br>Unbeknownst to Charon, you carry the Rings of the Gods—powerful artifacts capable of disturbing the waters of the Styx and bending the rules of the game in your favor.',
            workDone: [
                'Developed during USC Global Game Jam 2026 (48-hour challenge) with a three-person team',
                'Served as Producer and Programmer, leading team coordination, scope management, and task allocation',
                'Programmed core gameplay systems adapting Chopsticks rules for turn-based RPG combat',
                'Received <b>Best Technical Design</b> Award for strong collaboration and technical execution'
            ],
            devNotes: 'Within the limited 48-hour timeframe, we successfully scoped, designed, and built a complete playable experience. The challenge was balancing the classic Chopsticks mechanics with RPG elements while maintaining the mythological narrative.',
            montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/Chopstyx_montage.mp4',
            gallery: ['assets/Games/chopstyx/1.png', 'assets/Games/chopstyx/2.png', 'assets/Games/chopstyx/3.png', 'assets/Games/chopstyx/4.png']
        },
        {
            id: 'tower-defense',
            title: 'Tower Defense',
            subtitle: 'Strategy Game',
            status: 'Completed',
            date: 'December 2024',
            coverImage: 'assets/Games/tower defense/cover.png',
            description: 'This strategy game allows the player to take the role of defense general of a castle. The general is allotted a certain amount of gold and must use this resource wisely to purchase and strategically deploy cannon towers that automatically fire at enemy barbarians charging at the castle base. Taking out all the enemies without sustaining any damage to the castle while also balancing your gold bank balance earns you a flawless 3 star reward!',
            workDone: [
                'Built core systems: resource management, pathfinding, tower placement, and automated turret AI with target prioritization',
                'Balanced economy (costs, health, damage) and designed 3-star rating system rewarding strategic optimization'
            ],
            devNotes: 'This project introduced me to a whole new collection of programming tricks and engine tools used in almost every popular game. Some of these common tricks include scene swapping, path following nodes, automated targeting and firing, etc.',
            gallery: ['assets/Games/tower defense/1.png', 'assets/Games/tower defense/2star_victory.png', 'assets/Games/tower defense/bts.png']
        },
        {
            id: 'rocket-boost',
            title: 'Rocket Boost',
            subtitle: '3D Physics Platformer',
            status: 'Completed',
            date: 'December 2024',
            coverImage: 'assets/Games/project boost/cover.png',
            description: 'This 3D game takes the simple game loop of the popular \'flappy bird\' and expands on it to a 3 Dimensional layout while adding a little more complexity and nuance. The goal is for the player to fly, steer and land a rocket ship on the designated landing pad, while avoiding obstacles and moving debris in space.',
            workDone: [
                'Developed 5 levels with escalating difficulty using physics-based controls for thrust and rotation',
                'Designed obstacles (moving platforms, debris) and scene management emphasizing spatial awareness'
            ],
            devNotes: 'This game has multiple levels, linked together with different scenes in the game tree. This allowed me to design five individually unique and stimulating levels.',
            montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/rocket_boost_montage.mp4',
            gallery: ['assets/Games/project boost/level.png', 'assets/Games/project boost/crash.png', 'assets/Games/project boost/success.png']
        },
        {
            id: 'firing-knight',
            title: 'The Firing Knight',
            subtitle: '2D Pixel Platformer',
            status: 'Completed',
            date: 'June 2024',
            coverImage: 'assets/Games/firing knight/cover.png',
            description: 'My first ever game developed from scratch was a 2D pixel platformer that sees the player control a knight and traverse an unfamiliar land with moving platforms and horrific slime monsters while he collects coins and makes his way to the top. This project allowed me to understand the fundamentals of game design such as level design, using tilemaps, character and object animations and writing scripts for player movement and interaction as well enemy behavior.',
            workDone: [
                'Designed gameplay combining platforming with ranged combat; implemented AI with patrol patterns and detection',
                'Created level design using tilemaps and collectibles to encourage exploration and reward skilled play'
            ],
            montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/firing_knight_montage.mp4',
            gallery: ['assets/Games/firing knight/2dgame.png', 'assets/Games/firing knight/2dgamedev2.png', 'assets/Games/firing knight/2dgamedev3.png', 'assets/Games/firing knight/2dgame_bts.png']
        }
    ],
    prototypes: {
        tabletop: [
            {
                id: 'madjack',
                title: 'MadJack',
                subtitle: 'Card Game',
                status: 'In Development',
                date: null,
                coverImage: 'assets/Prototypes/tabletop/MadJack/1.webp',
                description: 'A twist on blackjack with powerups and special cards and meta progression that carries forward for a total of 5 rounds. Face cards no longer have the value but instead can be saved up and used as a rescue move of sorts.',
                gallery: []
            },
            {
                id: 'voidrunners',
                title: 'Voidrunners',
                subtitle: 'Co-op Board Game',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/tabletop/Voidrunners/cover.jpg',
                description: 'Voidrunners is a 4-player cooperative space adventure where players must work together to retrieve stranded gears and escape before a growing black hole consumes them. Stranded with limited fuel, players navigate a circular space board, making high-stakes movement decisions as the environment actively works against them.<br><br>Each player begins with a shared sense of urgency: fuel is capped at 10, and every move matters. While careful planning can help, fuel alone is often insufficient—forcing players to gamble on risky slingshot maneuvers around stars or rely on each other for survival.',
                designGoal: 'Evoke two key emotions: <strong>Dread and anxiety</strong>, as the black hole inexorably pulls players inward each turn, and <strong>Cooperation and trust</strong>, as players must support one another to successfully retrieve gears and return to the ship. The experience emphasizes shared responsibility, where individual mistakes—or acts of generosity—can impact the entire team.',
                coreMechanics: [
                    '<strong>Risk-Reward Stars:</strong> Slingshotting around stars offers powerful movement boosts but introduces uncertainty, encouraging players to take calculated risks instead of always choosing the safest path',
                    '<strong>Encroaching Black Hole:</strong> The central black hole pulls all players one space inward every turn, creating constant time pressure and reinforcing the feeling of impending doom',
                    '<strong>Player Boosting:</strong> Players can collide with and push one another in any direction, granting the boosted player free movement. This mechanic directly incentivizes cooperation and enables clutch, selfless plays'
                ],
                devNotes: 'Every core mechanic in Voidrunners reinforces its emotional goals—scarcity drives tension, environmental pressure fuels urgency, and player interaction transforms survival into a shared effort rather than a solo puzzle.',
                gallery: ['assets/Prototypes/tabletop/Voidrunners/2.jpg', 'assets/Prototypes/tabletop/Voidrunners/3.jpg', 'assets/Prototypes/tabletop/Voidrunners/1.jpg']
            },
            {
                id: 'toy-box-brawl',
                title: 'Toy Box Brawl',
                subtitle: 'Territory Control Game',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/tabletop/Toy Box Brawl/cover.png',
                description: 'Toy Box Brawl is a 1v1, turn-based territory control game where players deploy toy units to dominate the battlefield and score Victory Points. Using a streamlined card-driven system, players must balance positioning, resource management, and tactical combat to outmaneuver their opponent.<br><br>Victory Points are earned by occupying tiles at the start of your turn, with tiles increasing in value the closer they are to the opponent\'s home base. This creates constant forward pressure and rewards calculated aggression.',
                coreMechanics: [
                    '<strong>Distance-Based Scoring:</strong> Victory Point values scale with proximity to the opponent\'s home base, naturally incentivizing players to push forward and contest enemy territory rather than play defensively',
                    '<strong>Spatial Contention:</strong> Energy tiles act as high-value choke points, encouraging repeated conflict and meaningful positioning decisions',
                    '<strong>Minimal Resource Design:</strong> The game uses only two resources—Action Points (used to move pawns and deploy new units) and Power (used exclusively to resolve combat). By limiting the resource economy to two clearly defined systems, Toy Box Brawl emphasizes clarity, tension, and tactical depth without unnecessary complexity'
                ],
                devNotes: 'The design prioritizes constant interaction and territory pressure. Every turn presents a tradeoff between expanding control, reinforcing your position, or preparing for conflict—keeping both players engaged throughout the match.',
                gallery: ['assets/Prototypes/tabletop/Toy Box Brawl/1.jpg', 'assets/Prototypes/tabletop/Toy Box Brawl/2.jpg', 'assets/Prototypes/tabletop/Toy Box Brawl/3.jpg']
            },
            {
                id: 'quit-lion',
                title: 'Quit Lion!',
                subtitle: 'Bluffing Race Game',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/tabletop/Quit Lion!/cover.png',
                description: 'Quit Lion! is a 4-player competitive bluffing board game about shameless line-cutting at a watering hole. Players take on the roles of notorious animals jockeying for position in a queue, using excuses, deception, and social pressure to sneak their way forward. Through bluffing and calling out lies, players race to be the first to reach the watering hole—preferably at the expense of their friends.',
                designGoal: 'Make players feel conniving, deceptive, and socially mischievous. We wanted bluffing to feel personal and playful rather than purely mechanical, encouraging table talk and reading opponents. As a result, the game was intentionally designed to shine when played with close friends and family, where trust, history, and banter heighten the experience.',
                workDone: [
                    '<strong>Development Process:</strong> Developed over a 4-week period using a highly iterative, player-centric design process. Conducted 15+ playtests and created 5 fully playable iterations',
                    '<strong>Iteration Focus:</strong> Mechanics were frequently reworked to ensure they supported our core experience goals rather than existing for complexity\'s sake. Each iteration focused on refining how bluffing, movement, and player interaction intersected at the table'
                ],
                devNotes: 'One major insight was that tying bluffing directly to movement created unintended player incentives. Players were naturally reluctant to bluff high-value movement cards, as the risk of being caught outweighed the reward, while lower-value cards were more often used deceptively. This led to less dramatic bluffing moments than anticipated and revealed the importance of aligning risk-reward structures with desired player behavior.',
                montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/quit_lion_montage.mp4',
                gallery: ['assets/Prototypes/tabletop/Quit Lion!/gameplay.jpg', 'assets/Prototypes/tabletop/Quit Lion!/player pieces.jpg', 'assets/Prototypes/tabletop/Quit Lion!/punishment cards.jpg', 'assets/Prototypes/tabletop/Quit Lion!/board.jpg']
            }
        ],
        digital: [
            {
                id: 'disc-runner',
                title: 'Disc Runner',
                subtitle: 'High-Precision Platformer',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/digital/disc runner/1.png',
                description: 'A high-precision platformer built around a singular, versatile mechanic: a kinetic disc that serves as both a projectile and a portable platform. The game focuses on a 50/50 split between environmental puzzle-solving (finding the path) and mechanical execution (executing the path).<br><br>The player\'s primary tool is a boomerang disc that interacts with both the environment and the player\'s movement state.',
                coreMechanics: [
                    '<strong>The Disc Jump:</strong> Players can throw the disc along the horizontal or vertical axis. Jumping off a horizontal disc acts as a standard platform boost, while jumping off a vertical disc allows for mid-air wall jumps',
                    '<strong>The Boomerang Effect:</strong> The disc naturally returns to the player. Mastering the timing of its return is essential for chaining movements',
                    '<strong>Ricochet Physics:</strong> The disc bounces off solid surfaces. This allows players to "set up" platforms in hard-to-reach areas by banking shots off walls',
                    '<strong>Momentum Dash:</strong> Upon catching the disc, the player gains a brief dash window. This creates a rhythmic "Throw → Jump → Catch → Dash" loop that rewards precision timing'
                ],
                workDone: [
                    '<strong>Design Philosophy:</strong> Levels are designed as "movement puzzles" with two distinct challenges—the logical challenge (visualizing the sequence of throws and bounces) and the execution challenge (frame-perfect inputs)',
                    '<strong>Dynamic Room-to-Room Camera System:</strong> Developed a custom camera controller with framing logic that automatically adjusts zoom levels and offsets to ensure rooms of any dimension are perfectly centered',
                    '<strong>Seamless Transitions:</strong> Using viewport-boundary detection, camera helper functions predict the player\'s intended destination and transition smoothly without breaking momentum',
                    '<strong>Optimization:</strong> Camera logic intelligently culls off-screen assets, ensuring high performance even in complex levels'
                ],
                devNotes: '<strong>Key Takeaways:</strong> Refined the "snap-to" logic of the disc jump to ensure it felt responsive rather than frustrating. Discovered that the ricochet mechanic allowed for speedrunning skips I hadn\'t originally intended, which I then leaned into during level design.',
                montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/disk_runner_montage.mp4',
                gallery: ['assets/Prototypes/digital/disc runner/1.png', 'assets/Prototypes/digital/disc runner/2.png', 'assets/Prototypes/digital/disc runner/3.png', 'assets/Prototypes/digital/disc runner/4.png']
            },
            {
                id: 'pong-o',
                title: 'Pong-O',
                subtitle: 'Competitive Arcade Game',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/digital/pong-o/1.png',
                description: 'A competitive PvP reinterpretation of Pong set within a circular arena. Players score points each time their shot crosses the opponent\'s half-line, with victory going to the first player to reach 3,000 points. The circular play space transforms traditional positioning and angles, creating constant motion and dynamic rallies.',
                designGoal: 'Capture the nostalgic immediacy of classic arcade games like Pong while introducing modern mechanics that deepen competition and player expression.',
                workDone: [
                    '<strong>Rally System:</strong> Features a rally multiplier system that rewards evenly matched players and sustained skillful play. As long as a rally continues, both players gain a temporary score multiplier that steadily increases',
                    '<strong>High-Risk Decision Making:</strong> Breaking the rally comes at a cost—the player responsible is penalized 50 × the current rally multiplier, reinforcing high-risk, high-reward gameplay',
                    '<strong>Shrink System:</strong> Dynamically reduces the players\' paddle size over time but increases their base multiplier, naturally increasing difficulty while incentivizing higher score potential',
                    '<strong>Accessibility Options:</strong> For players seeking a more relaxed experience, the Shrink system can be disabled prior to the start of a match'
                ],
                devNotes: 'The circular arena completely transforms the traditional Pong formula, requiring players to constantly adapt their positioning and angles. The combination of rally multipliers and shrinking paddles creates escalating tension throughout each match.',
                montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/pong_montage.mp4',
                gallery: ['assets/Prototypes/digital/pong-o/1.png', 'assets/Prototypes/digital/pong-o/2.png', 'assets/Prototypes/digital/pong-o/3.png']
            },
            {
                id: 'snake-catcher',
                title: 'Snake Catcher',
                subtitle: 'Idle Progression Game',
                status: 'Completed',
                date: null,
                coverImage: 'assets/Prototypes/digital/snake catcher/1.png',
                description: 'A minimalist idle game centered around catching snakes. Players can actively pursue snakes or passively wait for them to wander into range—either way, every successful catch rewards coins. These coins can be reinvested to expand the catch radius, unlock new snake varieties, and increase the total number of snakes on screen, creating a self-reinforcing progression loop of growth and reward.<br><br><strong>Prototype Goal:</strong> The primary goal of this prototype was to explore game design without a fail state. By removing loss conditions entirely, the experience is intended to feel soothing and low-pressure. While this version is a prototype, the long-term vision emphasizes a calming gameplay loop paired with visually pleasing motion and presentation.',
                workDone: [
                    '<strong>Procedural Snake Movement (Inverse Kinematics):</strong> Each snake\'s movement is driven by Inverse Kinematics rather than pre-authored animations. Individual joints respond dynamically to the position of the previous joint based on a defined rule set, allowing for fluid, organic motion without requiring hundreds of baked animations',
                    '<strong>Memory-Efficient Snake Respawning:</strong> When a snake despawns, two snakes are generated in its place. One of these is the original snake, repositioned outside the viewport and recolored, rather than fully destroyed and recreated. This reuse of objects reduces memory overhead and improves runtime performance, enabling higher snake counts without additional cost'
                ],
                devNotes: 'This prototype explores what happens when you remove traditional game pressure entirely. The result is a meditative experience where progression feels rewarding without the anxiety of failure states.',
                montage: 'https://github.com/DominicCloud/Game-Design-Portfolio/releases/download/v1.0-montages/snake_catcher_montage.mp4',
                gallery: ['assets/Prototypes/digital/snake catcher/1.png', 'assets/Prototypes/digital/snake catcher/2.png', 'assets/Prototypes/digital/snake catcher/3.png']
            }
        ]
    }
};

// Generate Game Cards
function generateGameCards() {
    const gamesGrid = document.getElementById('gamesGrid');
    const tabletopPrototypesGrid = document.getElementById('tabletopPrototypesGrid');
    const digitalPrototypesGrid = document.getElementById('digitalPrototypesGrid');

    // Games
    projectData.games.forEach(game => {
        const card = createGameCard(game, 'game');
        gamesGrid.appendChild(card);
    });

    // Tabletop Prototypes
    projectData.prototypes.tabletop.forEach(game => {
        const card = createGameCard(game, 'tabletop');
        tabletopPrototypesGrid.appendChild(card);
    });

    // Digital Prototypes
    projectData.prototypes.digital.forEach(game => {
        // Skip games without cover images
        if (!game.coverImage) return;
        const card = createGameCard(game, 'digital-prototype');
        digitalPrototypesGrid.appendChild(card);
    });
}

function createGameCard(game, category) {
    const card = document.createElement('div');
    const isPrototype = category === 'tabletop' || category === 'digital-prototype';
    card.className = `game-card${isPrototype ? ' prototype' : ''}`;
    card.onclick = () => openGameModal(game, category);

    const img = document.createElement('img');
    img.className = 'game-card-image';
    img.src = game.coverImage;
    img.alt = game.title;

    const content = document.createElement('div');
    content.className = 'game-card-content';

    const title = document.createElement('h3');
    title.className = 'game-card-title';
    title.innerHTML = `${game.title}${game.subtitle ? '<br>' + game.subtitle : ''}`;

    content.appendChild(title);

    if (game.status) {
        const badge = document.createElement('span');
        badge.className = `status-badge ${game.status === 'In Development' ? 'status-in-dev' : 'status-completed'}`;
        badge.textContent = game.status;
        content.appendChild(badge);
    }

    if (game.montage) {
        const montageBadge = document.createElement('span');
        montageBadge.className = 'montage-badge';
        montageBadge.innerHTML = `<span class="montage-badge-icon"><svg viewBox="0 0 10 12" fill="#000"><polygon points="1,0 10,6 1,12"/></svg></span>Gameplay`;
        content.appendChild(montageBadge);
    }

    card.appendChild(img);
    card.appendChild(content);

    // Add mouse tilt effect
    addCardTiltEffect(card);

    return card;
}

// Touch device detection
function isTouchDevice() {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

// Card Tilt Effect
function addCardTiltEffect(card) {
    if (isTouchDevice()) return; // skip tilt on touch — hover never fires cleanly
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
}

// Store current game gallery for carousel
let currentGameGallery = [];

// Modal Functions
function openGameModal(game, category = 'game') {
    const modal = document.getElementById('gameModal');
    const modalBody = document.getElementById('modalBody');
    const modalLabel = document.querySelector('.modal-header span');

    // Remove closing class if present
    modal.classList.remove('closing');

    // Update header label
    const labels = {
        'game': 'GAME',
        'tabletop': 'TABLETOP PROTOTYPE',
        'digital-prototype': 'DIGITAL PROTOTYPE'
    };
    modalLabel.textContent = isTouchDevice()
        ? 'TAP ✕ TO CLOSE'
        : (labels[category] || 'GAME');

    // Store gallery for carousel
    currentGameGallery = game.gallery || [];

    // Build modal content
    let content = `
        <div class="modal-game-header">
            <img src="${game.coverImage}" alt="${game.title}" class="modal-cover-image">
            <div class="modal-game-info">
                <h2>${game.title}${game.subtitle ? ' - ' + game.subtitle : ''}</h2>
                ${game.status ? `<span class="status-badge ${game.status === 'In Development' ? 'status-in-dev' : 'status-completed'}">${game.status}</span>` : ''}${game.montage ? `<span class="montage-badge"><span class="montage-badge-icon"><svg viewBox="0 0 10 12" fill="#000"><polygon points="1,0 10,6 1,12"/></svg></span>Gameplay</span>` : ''}
                ${game.date ? `<p class="modal-game-date">${game.date}</p>` : ''}
                <div class="modal-game-description">${game.description}</div>
            </div>
        </div>
    `;

    if (game.designGoal) {
        content += `
            <div class="modal-section">
                <h3>Design Goal</h3>
                <p>${game.designGoal}</p>
            </div>
        `;
    }

    if (game.coreMechanics) {
        content += `
            <div class="modal-section">
                <h3>Core Gameplay Mechanics</h3>
                <ul>
                    ${game.coreMechanics.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (game.workDone) {
        content += `
            <div class="modal-section">
                <h3>Work Done</h3>
                <ul>
                    ${game.workDone.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (game.workPending) {
        content += `
            <div class="modal-section">
                <h3>Work Pending</h3>
                <ul>
                    ${game.workPending.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (game.devNotes) {
        content += `
            <div class="modal-section">
                <h3>Dev Notes</h3>
                <p>${game.devNotes}</p>
            </div>
        `;
    }

    if ((game.gallery && game.gallery.length > 0) || game.montage) {
        content += `
            <div class="modal-section">
                <h3>Gallery</h3>
                <div class="modal-gallery">
                    ${game.montage ? `<div class="modal-gallery-video"><video src="${game.montage}" controls preload="metadata" playsinline></video></div>` : ''}
                    ${(game.gallery || []).map((img, idx) => `<img src="${img}" class="modal-gallery-thumb" onclick="openImageCarousel(currentGameGallery, ${idx})" alt="Gallery image">`).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.add('closing');

    setTimeout(() => {
        modal.classList.remove('active', 'closing');
        document.body.style.overflow = '';
    }, 300);
}

// Image Carousel Variables
let currentCarouselGallery = [];
let currentCarouselIndex = 0;

// Image Carousel Functions
function openImageCarousel(gallery, startIndex = 0) {
    currentCarouselGallery = gallery;
    currentCarouselIndex = startIndex;

    const modal = document.getElementById('imageModal');
    modal.classList.remove('closing');
    modal.classList.add('active');

    updateCarouselImage();
}

function updateCarouselImage() {
    const modalImg = document.getElementById('imageModalContent');
    const counter = document.getElementById('carouselCounter');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    modalImg.src = currentCarouselGallery[currentCarouselIndex];
    counter.textContent = `${currentCarouselIndex + 1} / ${currentCarouselGallery.length}`;

    // Disable arrows at boundaries
    if (currentCarouselIndex === 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if (currentCarouselIndex === currentCarouselGallery.length - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

function navigateCarousel(direction) {
    const newIndex = currentCarouselIndex + direction;

    if (newIndex >= 0 && newIndex < currentCarouselGallery.length) {
        currentCarouselIndex = newIndex;
        updateCarouselImage();
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('closing');

    setTimeout(() => {
        modal.classList.remove('active', 'closing');
    }, 200);
}

// Keyboard Events
document.addEventListener('keydown', function(event) {
    const imageModal = document.getElementById('imageModal');
    const gameModal = document.getElementById('gameModal');

    if (event.key === 'Escape') {
        const profileOverlay = document.getElementById('profileOverlay');
        if (profileOverlay.classList.contains('active')) {
            closeProfileImage();
        } else if (imageModal.classList.contains('active')) {
            closeImageModal();
        } else if (gameModal.classList.contains('active')) {
            closeGameModal();
        }
    }

    // Arrow key navigation for carousel
    if (imageModal.classList.contains('active')) {
        if (event.key === 'ArrowLeft') {
            navigateCarousel(-1);
        } else if (event.key === 'ArrowRight') {
            navigateCarousel(1);
        }
    }
});

// Typewriter Effect with cancellation support
let currentTypewriterTimeout = null;

function typewriter(element, text, speed, callback) {
    // Cancel any ongoing typewriter
    if (currentTypewriterTimeout) {
        clearTimeout(currentTypewriterTimeout);
        currentTypewriterTimeout = null;
    }

    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            currentTypewriterTimeout = setTimeout(type, speed);
        } else {
            currentTypewriterTimeout = null;
            if (callback) {
                callback();
            }
        }
    }

    type();
}

function initHeroTypewriter() {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const titleText = title.textContent;
    const subtitleText = subtitle.textContent;

    // Type title first, then subtitle
    typewriter(title, titleText, 80, function() {
        setTimeout(function() {
            typewriter(subtitle, subtitleText, 60, function() {
                // After initial typing, start message rotation
                HeroMessages.init();
            });
        }, 300);
    });
}

// Hero Message Rotation System
const HeroMessages = {
    messages: [
        "Try hovering above the snakes to play!",
        "Hold to charge a bigger blast",
        "One pops, two return in its place",
        "Hold the arrow below to proceed",
        "Thanks for stopping by!",
        "Curious? Keep exploring...",
        "Each interaction reveals more"
    ],

    completionMessages: [
        "Well done! Enjoy the journey",
        "Perfect! Let's continue",
        "Great job! Thanks for playing",
    ],

    originalText: "Game Designer | Systemic Design",
    messageTimer: null,
    currentMessageIndex: 0,
    hasShownCompletionMessage: false,
    isActive: false,
    observer: null,

    init() {
        // Start message rotation after 3s
        setTimeout(() => {
            if (!this.hasShownCompletionMessage) {
                this.isActive = true;
                this.startMessageRotation();
            }
        }, 3000);

        // Watch for hero section leaving viewport
        this.setupViewportObserver();
    },

    setupViewportObserver() {
        const heroSection = document.getElementById('heroSection');

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Hero section left viewport - restore original message
                    this.restoreOriginalMessage();
                }
            });
        }, {
            threshold: 0.1  // Trigger when less than 10% is visible
        });

        this.observer.observe(heroSection);
    },

    restoreOriginalMessage() {
        // Stop rotation
        this.isActive = false;
        clearTimeout(this.messageTimer);

        // Clear any ongoing typewriter
        if (currentTypewriterTimeout) {
            clearTimeout(currentTypewriterTimeout);
            currentTypewriterTimeout = null;
        }

        const subtitle = document.querySelector('.hero-subtitle');
        subtitle.style.opacity = '0';
        setTimeout(() => {
            subtitle.textContent = this.originalText;
            subtitle.style.opacity = '1';
        }, 300);
    },

    startMessageRotation() {
        const showNextMessage = () => {
            if (this.hasShownCompletionMessage || !this.isActive) return;

            const subtitle = document.querySelector('.hero-subtitle');
            const message = this.messages[this.currentMessageIndex];

            // Fade out, type new message
            subtitle.style.opacity = '0';
            setTimeout(() => {
                typewriter(subtitle, message, 50, () => {
                    subtitle.style.opacity = '1';
                });
            }, 300);

            // Move to next message
            this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;

            // Schedule next message (random 5-7s)
            const nextDelay = Math.random() * 2000 + 5000; // 5000-7000ms
            this.messageTimer = setTimeout(showNextMessage, nextDelay);
        };

        showNextMessage();
    },

    showCompletionMessage() {
        if (this.hasShownCompletionMessage) return;

        this.hasShownCompletionMessage = true;
        this.isActive = false;
        clearTimeout(this.messageTimer);

        const subtitle = document.querySelector('.hero-subtitle');
        const message = this.completionMessages[Math.floor(Math.random() * this.completionMessages.length)];

        // Immediately stop any ongoing typewriter and clear text
        if (currentTypewriterTimeout) {
            clearTimeout(currentTypewriterTimeout);
            currentTypewriterTimeout = null;
        }
        subtitle.textContent = '';

        subtitle.style.opacity = '0';
        setTimeout(() => {
            typewriter(subtitle, message, 50, () => {
                subtitle.style.opacity = '1';
            });
        }, 300);
    },

    stop() {
        this.isActive = false;
        clearTimeout(this.messageTimer);
    }
};

// Snake Game
const SnakeGame = {
    gridSize: 20,
    snakes: [],
    snakeInterval: null,
    isActive: false,
    introPhase: true,
    FIXED_SNAKE_LENGTH: 6,
    MAX_SNAKES: 80,
    nextSnakeId: 0,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#FF85A2', '#7FDBFF', '#2ECC40', '#FFDC00', '#F012BE', '#01FF70', '#FF851B', '#B10DC9'],
    mouseGridPos: { x: 0, y: 0 },
    mousePixelPos: { x: 0, y: 0 },
    heroRect: null,
    MIN_DESTROY_RADIUS: 6,
    MAX_DESTROY_RADIUS: 12,
    MAX_HOLD_DURATION: 1500,
    moveInterval: 200,
    holdStartTime: null,
    holdTimer: null,
    chargeEl: null,
    chargeOrigin: null,

    init() {
        if (isTouchDevice()) {
            this.gridSize             = 14;
            this.FIXED_SNAKE_LENGTH   = 4;
            this.CHAIN_DESTROY_RADIUS = 0; // disable chains — small screen causes infinite cascade
            this.moveInterval         = 320;
        }

        const hero = document.getElementById('heroSection');
        this.heroRect = hero.getBoundingClientRect();
        hero.classList.add('intro-phase');

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            if (this.isActive && this.heroRect) {
                const relX = e.clientX - this.heroRect.left;
                const relY = e.clientY - this.heroRect.top;
                this.mousePixelPos = { x: relX, y: relY };
                this.mouseGridPos = {
                    x: Math.floor(relX / this.gridSize),
                    y: Math.floor(relY / this.gridSize)
                };

                // Moving away from charge origin fires shockwave immediately
                if (this.holdStartTime && this.chargeOrigin) {
                    const dx = relX - this.chargeOrigin.x;
                    const dy = relY - this.chargeOrigin.y;
                    if (Math.sqrt(dx * dx + dy * dy) > this.gridSize) {
                        this.releaseCharge();
                    }
                }
            }
        });

        // Keep heroRect fresh on resize / orientation change
        new ResizeObserver(() => {
            this.heroRect = hero.getBoundingClientRect();
        }).observe(hero);

        // Hero enter/leave — only active after intro
        hero.addEventListener('mouseenter', () => {
            if (this.introPhase) return;
            this.heroRect = hero.getBoundingClientRect();
            this.startGame();
        });

        hero.addEventListener('mouseleave', () => {
            if (this.introPhase) return;
            this.stopGame();
        });

        // Hold-to-charge shockwave — only active after intro
        hero.addEventListener('mousedown', (e) => {
            if (this.introPhase) return;
            if (e.button !== 0) return;
            if (e.target.classList.contains('scroll-button') ||
                e.target.classList.contains('arrow-icon') ||
                e.target.closest('.scroll-button')) return;
            if (!this.isActive || !this.heroRect) return;
            e.preventDefault();

            const relX = e.clientX - this.heroRect.left;
            const relY = e.clientY - this.heroRect.top;
            this.startCharge(relX, relY);
        });

        hero.addEventListener('mouseup', (e) => {
            if (this.introPhase) return;
            if (e.button !== 0) return;
            if (!this.holdStartTime) return;
            this.releaseCharge();
        });

        // Cancel charge if mouse released outside hero
        document.addEventListener('mouseup', (e) => {
            if (e.button !== 0) return;
            if (this.holdStartTime) this.cancelCharge();
        });

        this.startIntroPhase();
    },

    // ── INTRO PHASE ──────────────────────────────────────────────

    startIntroPhase() {
        this.spawnIntroSnakes();
        this.renderIntroSnakes();

        // Show hint circle after snakes have rendered
        setTimeout(() => {
            const hintCircle = document.getElementById('hintCircle');
            if (!hintCircle) return;
            hintCircle.classList.remove('hidden');

            const INTRO_HOLD_MS = 800;
            let introHoldStart = null;
            let introRafId = null;
            let introFired = false;

            const cancelIntroHold = () => {
                if (introFired) return;
                if (introRafId) { cancelAnimationFrame(introRafId); introRafId = null; }
                introHoldStart = null;
                hintCircle.classList.remove('holding');
                hintCircle.style.setProperty('--progress', '0deg');
            };

            const startIntroHold = (clientX, clientY) => {
                if (introFired) return;
                introHoldStart = Date.now();
                hintCircle.classList.add('holding');

                const tick = () => {
                    const progress = Math.min((Date.now() - introHoldStart) / INTRO_HOLD_MS, 1);
                    hintCircle.style.setProperty('--progress', `${progress * 360}deg`);
                    if (progress >= 1) {
                        introFired = true;
                        hintCircle.classList.remove('holding');
                        this.triggerIntroReveal(clientX, clientY);
                        return;
                    }
                    introRafId = requestAnimationFrame(tick);
                };
                introRafId = requestAnimationFrame(tick);
            };

            hintCircle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                startIntroHold(e.clientX, e.clientY);
            });
            hintCircle.addEventListener('mouseup',    () => cancelIntroHold());
            hintCircle.addEventListener('mouseleave', () => cancelIntroHold());

            // Touch equivalents
            hintCircle.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const t = e.touches[0];
                startIntroHold(t.clientX, t.clientY);
            }, { passive: false });
            hintCircle.addEventListener('touchend',    () => cancelIntroHold());
            hintCircle.addEventListener('touchcancel', () => cancelIntroHold());
        }, 500);
    },

    spawnIntroSnakes() {
        const maxX = Math.floor(this.heroRect.width / this.gridSize);
        const maxY = Math.floor(this.heroRect.height / this.gridSize);

        // Grid-distributed snakes with slight jitter for an organic look
        for (let y = 0; y < maxY; y += 3) {
            for (let x = 0; x < maxX; x += 8) {
                const jx = Math.floor(Math.random() * 4) - 1;
                const jy = Math.floor(Math.random() * 2);
                const startX = Math.max(0, Math.min(maxX - this.FIXED_SNAKE_LENGTH, x + jx));
                const startY = Math.max(0, Math.min(maxY - 1, y + jy));

                const segments = [];
                for (let i = 0; i < this.FIXED_SNAKE_LENGTH; i++) {
                    segments.push({ x: Math.min(startX + i, maxX - 1), y: startY });
                }
                this.snakes.push({
                    id: this.nextSnakeId++,
                    color: this.colors[Math.floor(Math.random() * this.colors.length)],
                    segments
                });
            }
        }
    },

    renderIntroSnakes() {
        const hero = document.getElementById('heroSection');
        hero.querySelectorAll('.snake-segment').forEach(s => s.remove());

        this.snakes.forEach(snake => {
            snake.segments.forEach((seg, idx) => {
                const el = document.createElement('div');
                el.className = 'snake-segment intro' + (idx === 0 ? ' snake-head' : '');
                el.setAttribute('data-snake-id', snake.id);
                el.style.backgroundColor = snake.color;
                el.style.left = (seg.x * this.gridSize) + 'px';
                el.style.top  = (seg.y * this.gridSize) + 'px';
                hero.appendChild(el);
            });
        });
    },

    triggerIntroReveal(clientX, clientY) {
        const hintCircle = document.getElementById('hintCircle');
        if (hintCircle) hintCircle.classList.add('hidden');

        const pixelX = clientX - this.heroRect.left;
        const pixelY = clientY - this.heroRect.top;

        // Big flash + screen shake at click point
        this.spawnExplosionVFX(pixelX, pixelY, true);
        const hero = document.getElementById('heroSection');
        hero.classList.remove('screen-shake');
        void hero.offsetWidth;
        hero.classList.add('screen-shake');
        setTimeout(() => hero.classList.remove('screen-shake'), 300);

        // Sort snakes by distance from click — pop them outward in a wave
        const snakesCopy = [...this.snakes];
        const byDist = snakesCopy.map(snake => {
            const head = snake.segments[0];
            const dx = (head.x * this.gridSize + this.gridSize / 2) - pixelX;
            const dy = (head.y * this.gridSize + this.gridSize / 2) - pixelY;
            return { snake, dist: Math.sqrt(dx * dx + dy * dy) };
        }).sort((a, b) => a.dist - b.dist);

        const maxDist = byDist[byDist.length - 1]?.dist || 1;
        const SWEEP = 900;

        byDist.forEach(({ snake, dist }, i) => {
            const delay = (dist / maxDist) * SWEEP;
            setTimeout(() => {
                // Pop all segments of this snake
                document.querySelectorAll(`.snake-segment[data-snake-id="${snake.id}"]`)
                    .forEach(el => {
                        el.classList.add('snake-pop');
                        setTimeout(() => el.remove(), 400);
                    });
                this.snakes = this.snakes.filter(s => s.id !== snake.id);

                // Sparse explosion VFX so the screen doesn't choke
                if (i % 6 === 0) {
                    const head = snake.segments[0];
                    this.spawnExplosionVFX(
                        head.x * this.gridSize + this.gridSize / 2,
                        head.y * this.gridSize + this.gridSize / 2,
                        false
                    );
                }
            }, delay);
        });

        // After wave completes, reveal text/glass and start normal game
        setTimeout(() => this.onIntroComplete(), SWEEP + 500);
    },

    onIntroComplete() {
        this.introPhase = false;
        this.snakes = [];

        // Clear text content while still invisible, then let intro-phase removal fade it in
        const title    = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        title.textContent    = '';
        subtitle.textContent = '';

        // Removing intro-phase triggers CSS opacity transitions on glass, text, button
        document.getElementById('heroSection').classList.remove('intro-phase');

        // Restore text and start typewriter as elements fade in
        title.textContent    = 'Callahan D. Carvalho';
        subtitle.textContent = 'Game Designer | Systemic Design';
        initHeroTypewriter();

        // Cursor is already over the hero so mouseenter won't fire — start manually
        // Skip on touch devices: no cursor to chase snakes with
        this.heroRect = document.getElementById('heroSection').getBoundingClientRect();
        if (!isTouchDevice()) this.startGame();
    },

    // ── NORMAL PHASE ─────────────────────────────────────────────


    SHOCKWAVE_DESTROY_RADIUS: 6,
    CHAIN_DESTROY_RADIUS: 4,

    startCharge(relX, relY) {
        this.holdStartTime = Date.now();
        this.chargeOrigin = { x: relX, y: relY };

        const hero = document.getElementById('heroSection');
        const ring = document.createElement('div');
        ring.className = 'charge-ring';
        ring.style.left = relX + 'px';
        ring.style.top  = relY + 'px';
        hero.appendChild(ring);
        this.chargeEl = ring;

        // Start expanding ring on next frame so transition fires
        requestAnimationFrame(() => requestAnimationFrame(() => {
            ring.style.transition = `width ${this.MAX_HOLD_DURATION}ms linear, height ${this.MAX_HOLD_DURATION}ms linear, border-color 0.3s ease`;
            ring.style.width  = '480px';
            ring.style.height = '480px';
        }));

        // At max charge: turn gold + burst twinkle
        this.holdTimer = setTimeout(() => {
            ring.classList.add('max-charged');
            this.spawnMaxChargeTwinkle(
                parseFloat(ring.style.left),
                parseFloat(ring.style.top)
            );
        }, this.MAX_HOLD_DURATION);
    },

    releaseCharge() {
        const held = Date.now() - this.holdStartTime;
        const ratio = Math.min(held / this.MAX_HOLD_DURATION, 1);
        const radius = this.MIN_DESTROY_RADIUS +
            (this.MAX_DESTROY_RADIUS - this.MIN_DESTROY_RADIUS) * ratio;

        const { x, y } = this.chargeOrigin;

        clearTimeout(this.holdTimer);
        this.holdTimer = null;
        this.holdStartTime = null;
        this.chargeOrigin = null;
        if (this.chargeEl) { this.chargeEl.remove(); this.chargeEl = null; }

        this.triggerShockwave(x, y, radius);
    },

    cancelCharge() {
        clearTimeout(this.holdTimer);
        this.holdTimer = null;
        this.holdStartTime = null;
        this.chargeOrigin = null;
        if (this.chargeEl) { this.chargeEl.remove(); this.chargeEl = null; }
    },

    spawnMaxChargeTwinkle(relX, relY) {
        const hero = document.getElementById('heroSection');
        const count = 16;
        for (let i = 0; i < count; i++) {
            const spark = document.createElement('div');
            spark.className = 'charge-twinkle';
            const angle = (Math.PI * 2 * i) / count;
            const dist = 40 + Math.random() * 60;
            spark.style.left = relX + 'px';
            spark.style.top  = relY + 'px';
            spark.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
            spark.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
            hero.appendChild(spark);
            setTimeout(() => spark.remove(), 600);
        }
    },

    triggerShockwave(pixelX, pixelY, radius) {
        if (radius === undefined) radius = this.SHOCKWAVE_DESTROY_RADIUS;
        this.spawnExplosionVFX(pixelX, pixelY, true);

        const gridX = Math.floor(pixelX / this.gridSize);
        const gridY = Math.floor(pixelY / this.gridSize);

        const destroyedIds = new Set();
        this.explodeAt(gridX, gridY, radius, destroyedIds);

        this.renderSnakes();
    },

    // Recursive chain-reaction explosion
    explodeAt(gridX, gridY, destroyRadius, destroyedIds) {
        const hero = document.getElementById('heroSection');

        const snakesToDestroy = [];

        this.snakes.forEach(snake => {
            if (destroyedIds.has(snake.id)) return;

            const head = snake.segments[0];
            const dx = head.x - gridX;
            const dy = head.y - gridY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= destroyRadius) {
                snakesToDestroy.push(snake);
                destroyedIds.add(snake.id);
            }
        });

        // Screen shake + hit freeze when snakes are actually destroyed
        if (snakesToDestroy.length > 0) {
            hero.classList.remove('screen-shake');
            void hero.offsetWidth;
            hero.classList.add('screen-shake');
            setTimeout(() => hero.classList.remove('screen-shake'), 300);
            this.triggerHitFreeze(150);
        }

        // Collect chain explosion origins before destroying
        const chainOrigins = snakesToDestroy.map(snake => ({
            headX: snake.segments[0].x,
            headY: snake.segments[0].y
        }));

        // Destroy all snakes simultaneously — debris + removal
        snakesToDestroy.forEach(snake => {
            snake.segments.forEach(seg => {
                for (let p = 0; p < 2; p++) {
                    const debris = document.createElement('div');
                    debris.className = 'shockwave-particle';
                    const angle = Math.random() * Math.PI * 2;
                    const dist = 20 + Math.random() * 40;
                    debris.style.left = (seg.x * this.gridSize + this.gridSize / 2) + 'px';
                    debris.style.top = (seg.y * this.gridSize + this.gridSize / 2) + 'px';
                    debris.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
                    debris.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
                    debris.style.backgroundColor = snake.color;
                    hero.appendChild(debris);
                    setTimeout(() => debris.remove(), 500);
                }
            });

            this.removeSnake(snake.id);

            // Respawn new snakes
            setTimeout(() => {
                if (this.isActive) {
                    this.spawnSnake();
                    setTimeout(() => {
                        if (this.isActive) {
                            this.spawnSnake();
                            setTimeout(() => {
                                if (this.isActive) this.spawnSnake();
                            }, 100);
                        }
                    }, 100);
                }
            }, 300);
        });

        // Chain explosions fire together after a short beat
        if (chainOrigins.length > 0) {
            setTimeout(() => {
                chainOrigins.forEach(origin => {
                    const chainPixelX = origin.headX * this.gridSize + this.gridSize / 2;
                    const chainPixelY = origin.headY * this.gridSize + this.gridSize / 2;
                    this.spawnExplosionVFX(chainPixelX, chainPixelY, false);
                    this.explodeAt(origin.headX, origin.headY, this.CHAIN_DESTROY_RADIUS, destroyedIds);
                });
                this.renderSnakes();
            }, 150);
        }
    },

    // Spawn visual explosion effects (ring, flash, particles)
    spawnExplosionVFX(pixelX, pixelY, isMain) {
        const hero = document.getElementById('heroSection');

        // Shockwave ring
        const ring = document.createElement('div');
        ring.className = 'shockwave-ring' + (isMain ? '' : ' chain-ring');
        ring.style.left = pixelX + 'px';
        ring.style.top = pixelY + 'px';
        hero.appendChild(ring);
        setTimeout(() => ring.remove(), 600);

        // Flash
        const flash = document.createElement('div');
        flash.className = 'shockwave-flash';
        flash.style.left = pixelX + 'px';
        flash.style.top = pixelY + 'px';
        hero.appendChild(flash);
        setTimeout(() => flash.remove(), 300);


        // Burst particles
        const count = isMain ? 6 : 4;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'shockwave-particle';
            const angle = (Math.PI * 2 * i) / count;
            const dist = (isMain ? 40 : 20) + Math.random() * (isMain ? 60 : 30);
            particle.style.left = pixelX + 'px';
            particle.style.top = pixelY + 'px';
            particle.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
            particle.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
            particle.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            hero.appendChild(particle);
            setTimeout(() => particle.remove(), 500);
        }
    },

    freezeTimeout: null,

    triggerHitFreeze(duration = 100) {
        if (!this.isActive) return;
        clearInterval(this.snakeInterval);
        this.snakeInterval = null;
        // Cancel any pending restart so multiple rapid calls don't stack intervals
        if (this.freezeTimeout) {
            clearTimeout(this.freezeTimeout);
        }
        this.freezeTimeout = setTimeout(() => {
            this.freezeTimeout = null;
            if (this.isActive) {
                this.snakeInterval = setInterval(() => this.moveSnakes(), this.moveInterval);
            }
        }, duration);
    },

    createRipple(gridX, gridY) {
        const hero = document.getElementById('heroSection');
        const ripple = document.createElement('div');
        ripple.className = 'spawn-ripple';
        ripple.style.left = (gridX * this.gridSize) + 'px';
        ripple.style.top = (gridY * this.gridSize) + 'px';
        hero.appendChild(ripple);

        // Remove ripple after animation completes
        setTimeout(() => ripple.remove(), 750);
    },

    startGame() {
        if (this.isActive) return;
        this.isActive = true;
        for (let i = 0; i < 10; i++) {
            setTimeout(() => this.spawnSnake(), i * 100);
        }
        this.snakeInterval = setInterval(() => this.moveSnakes(), this.moveInterval);
    },

    stopGame() {
        this.cancelCharge();
        this.isActive = false;
        clearInterval(this.snakeInterval);
        this.snakeInterval = null;
        if (this.freezeTimeout) {
            clearTimeout(this.freezeTimeout);
            this.freezeTimeout = null;
        }
        this.removeAllSnakes();

        // Reset escape hint
        const arrow = document.getElementById('scrollArrow');
        if (arrow) {
            arrow.classList.remove('escape-hint');
        }
    },

    spawnSnake() {
        // Check if we've reached the maximum snake limit
        if (this.snakes.length >= this.MAX_SNAKES) return;

        const maxX = Math.floor(this.heroRect.width / this.gridSize);
        const maxY = Math.floor(this.heroRect.height / this.gridSize);

        // Random spawn position at edge
        const side = Math.floor(Math.random() * 4);
        let startX, startY;

        switch(side) {
            case 0: startX = 0; startY = Math.floor(Math.random() * maxY); break;
            case 1: startX = maxX - 1; startY = Math.floor(Math.random() * maxY); break;
            case 2: startX = Math.floor(Math.random() * maxX); startY = 0; break;
            case 3: startX = Math.floor(Math.random() * maxX); startY = maxY - 1; break;
        }

        // Create new snake object with fixed length
        const segments = [];
        for (let i = 0; i < this.FIXED_SNAKE_LENGTH; i++) {
            segments.push({ x: startX, y: startY });
        }

        const newSnake = {
            id: this.nextSnakeId++,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            segments: segments
        };

        this.snakes.push(newSnake);
        this.renderSnakes();
    },

    removeAllSnakes() {
        const segments = document.querySelectorAll('.snake-segment');
        segments.forEach(seg => {
            seg.style.opacity = '0';
            seg.style.transform = 'scale(0)';
            setTimeout(() => seg.remove(), 300);
        });
        this.snakes = [];
    },

    removeSnake(snakeId, animate = true) {
        const segments = document.querySelectorAll(`.snake-segment[data-snake-id="${snakeId}"]`);
        segments.forEach(seg => {
            if (animate) {
                seg.classList.add('snake-pop');
                setTimeout(() => seg.remove(), 400);
            } else {
                seg.remove();
            }
        });

        // Remove from snakes array
        this.snakes = this.snakes.filter(s => s.id !== snakeId);
    },

    moveSnakes() {
        if (this.snakes.length === 0) return;

        const maxX = Math.floor(this.heroRect.width / this.gridSize);
        const maxY = Math.floor(this.heroRect.height / this.gridSize);
        const snakesToRemove = [];

        this.snakes.forEach(snake => {
            const head = snake.segments[0];
            const dx = this.mouseGridPos.x - head.x;
            const dy = this.mouseGridPos.y - head.y;

            let newX = head.x;
            let newY = head.y;

            // Simple pathfinding - move one step closer
            if (Math.abs(dx) > Math.abs(dy)) {
                newX += dx > 0 ? 1 : -1;
            } else if (dy !== 0) {
                newY += dy > 0 ? 1 : -1;
            } else if (dx !== 0) {
                newX += dx > 0 ? 1 : -1;
            }

            // Bounds checking - keep snake within hero section
            newX = Math.max(0, Math.min(maxX - 1, newX));
            newY = Math.max(0, Math.min(maxY - 1, newY));

            // Check collision with cursor
            if (newX === this.mouseGridPos.x && newY === this.mouseGridPos.y) {
                snakesToRemove.push(snake.id);
                return;
            }

            // Move snake
            snake.segments.unshift({ x: newX, y: newY });
            snake.segments.pop();
        });

        // Screen shake + hit freeze when snakes are caught by cursor
        if (snakesToRemove.length > 0) {
            const hero = document.getElementById('heroSection');
            hero.classList.remove('screen-shake');
            void hero.offsetWidth;
            hero.classList.add('screen-shake');
            setTimeout(() => hero.classList.remove('screen-shake'), 300);
            this.triggerHitFreeze(80);
        }

        // Remove caught snakes and spawn THREE new ones for faster scaling
        snakesToRemove.forEach(snakeId => {
            this.removeSnake(snakeId);
            // Spawn 3 new snakes with staggered timing
            setTimeout(() => {
                if (this.isActive) {
                    this.spawnSnake();
                    setTimeout(() => {
                        if (this.isActive) {
                            this.spawnSnake();
                            setTimeout(() => {
                                if (this.isActive) this.spawnSnake();
                            }, 100);
                        }
                    }, 100);
                }
            }, 300);
        });

        this.renderSnakes();
    },

    renderSnakes() {
        const hero = document.getElementById('heroSection');
        const existingSegments = hero.querySelectorAll('.snake-segment');
        existingSegments.forEach(seg => {
            if (!seg.classList.contains('snake-pop')) seg.remove();
        });

        this.snakes.forEach(snake => {
            snake.segments.forEach((segment, index) => {
                const segmentEl = document.createElement('div');
                segmentEl.className = 'snake-segment' + (index === 0 ? ' snake-head' : '');
                segmentEl.setAttribute('data-snake-id', snake.id);

                // Add pop animation to new segments
                if (segment.isNew) {
                    segmentEl.classList.add('snake-segment-pop');
                    segment.isNew = false; // Clear flag after applying animation
                }

                // Add hover detection - pop on mouse contact
                segmentEl.addEventListener('mouseenter', () => {
                    if (this.isActive) {
                        this.onSnakeHovered(snake.id);
                    }
                });

                segmentEl.style.backgroundColor = snake.color;
                segmentEl.style.left = (segment.x * this.gridSize) + 'px';
                segmentEl.style.top = (segment.y * this.gridSize) + 'px';
                hero.appendChild(segmentEl);
            });
        });

        // Update escape hint based on snake count
        this.updateEscapeHint();
    },

    onSnakeHovered(snakeId) {
        this.removeSnake(snakeId, false);
        setTimeout(() => {
            if (this.isActive) {
                this.spawnSnake();
                setTimeout(() => {
                    if (this.isActive) {
                        this.spawnSnake();
                        setTimeout(() => {
                            if (this.isActive) this.spawnSnake();
                        }, 100);
                    }
                }, 100);
            }
        }, 300);
    },

    updateEscapeHint() {
        const arrow = document.getElementById('scrollArrow');
        if (!arrow) return;

        // Show escape hint when 20 or more snakes are active
        if (this.snakes.length >= 20) {
            arrow.classList.add('escape-hint');
        } else {
            arrow.classList.remove('escape-hint');
        }
    },

    popAllSnakesAndScroll() {
        // Stop the game interval and prevent new snakes
        this.isActive = false;
        clearInterval(this.snakeInterval);

        // Remove escape hint
        const arrow = document.getElementById('scrollArrow');
        if (arrow) {
            arrow.classList.remove('escape-hint');
        }

        // Show completion message
        HeroMessages.showCompletionMessage();

        // Get all snake segments and group by row (Y position)
        const allSegments = document.querySelectorAll('.snake-segment');
        const segmentsByRow = new Map();

        allSegments.forEach(segment => {
            const top = parseInt(segment.style.top);
            const gridY = Math.floor(top / this.gridSize);

            if (!segmentsByRow.has(gridY)) {
                segmentsByRow.set(gridY, []);
            }
            segmentsByRow.get(gridY).push(segment);
        });

        // Sort rows from top to bottom
        const sortedRows = Array.from(segmentsByRow.entries()).sort((a, b) => a[0] - b[0]);

        // Get position references for escaping segments
        const workIntro = document.querySelector('.work-intro');

        // Apply falling animation to each row with staggered timing
        sortedRows.forEach(([rowY, segments], rowIndex) => {
            setTimeout(() => {
                segments.forEach(segment => {
                    // Randomly select some segments to escape (15% chance)
                    if (Math.random() < 0.15) {
                        // Clone this segment to make it escape
                        const escapeSegment = segment.cloneNode(true);
                        const segmentRect = segment.getBoundingClientRect();

                        // Position it absolutely on the page
                        escapeSegment.style.position = 'fixed';
                        escapeSegment.style.left = segmentRect.left + 'px';
                        escapeSegment.style.top = segmentRect.top + 'px';
                        escapeSegment.style.zIndex = '1500';
                        escapeSegment.style.width = '20px';
                        escapeSegment.style.height = '20px';

                        document.body.appendChild(escapeSegment);

                        // Animate it falling down to work-intro section
                        setTimeout(() => {
                            const workRect = workIntro.getBoundingClientRect();
                            const fallDistance = workRect.top - segmentRect.top + (Math.random() * 300 + 100);
                            const fallRotation = Math.random() * 60 - 30;

                            escapeSegment.style.setProperty('--fall-distance', `${fallDistance}px`);
                            escapeSegment.style.setProperty('--fall-rotation', `${fallRotation}deg`);
                            escapeSegment.classList.add('tile-fall-escape');

                            // After falling, re-position as decoration in work-intro
                            setTimeout(() => {
                                escapeSegment.style.position = 'absolute';
                                escapeSegment.style.left = (Math.random() * 90 + 5) + '%';
                                escapeSegment.style.top = (Math.random() * 80 + 10) + '%';
                                escapeSegment.style.transform = `rotate(${fallRotation}deg)`;
                                escapeSegment.style.opacity = '0.2';
                                escapeSegment.style.zIndex = '0';

                                workIntro.appendChild(escapeSegment);
                            }, 2000);
                        }, 50);
                    }

                    // All segments get normal falling animation
                    segment.classList.add('tile-fall');
                    setTimeout(() => segment.remove(), 1000); // Remove after animation completes
                });
            }, rowIndex * 100); // 100ms delay between each row
        });

        // Clear the snakes array and scroll
        const totalDelay = sortedRows.length * 100 + 1100;
        setTimeout(() => {
            this.snakes = [];
            document.querySelector('.about-section').scrollIntoView({behavior: 'smooth'});
        }, totalDelay);
    }
};

// Hold-to-Scroll Button - Day/Night Cycle Toggle
const HoldButton = {
    holdTimer: null,
    holdStartTime: null,
    completed: false,
    currentMode: 'day',  // 'day' or 'night' - tracks current cycle
    targetMode: 'day',
    HOLD_DURATION: 1500,

    // Color definitions for day/night cycles
    colors: {
        day: {
            bg: { r: 255, g: 229, b: 232 },    // #FFE5E8 - soft pink
            text: { r: 26, g: 26, b: 26 },      // #1A1A1A - dark
            arrow: { r: 26, g: 26, b: 26 },     // #1A1A1A - black (matches text)
            ripple: { r: 45, g: 0, b: 87 }      // #2D0057 - darker purple
        },
        night: {
            bg: { r: 20, g: 33, b: 66 },       // #142142 - navy blue
            text: { r: 255, g: 255, b: 255 },   // #FFFFFF - white
            arrow: { r: 255, g: 255, b: 255 },  // #FFFFFF - white (matches text)
            ripple: { r: 255, g: 255, b: 255 }  // #FFFFFF - white
        }
    },

    init() {
        const scrollButton = document.getElementById('scrollArrow');
        const arrowIcon = document.querySelector('.arrow-icon');

        // Arrow hover effect - turn black/white based on cycle
        scrollButton.addEventListener('mouseenter', () => {
            if (!this.holdTimer) {  // Only if not currently holding
                const arrowColor = this.colors[this.currentMode].arrow;
                arrowIcon.style.borderTopColor = `rgb(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b})`;
            }
        });

        scrollButton.addEventListener('mousedown', () => {
            this.startHold();
        });

        scrollButton.addEventListener('mouseup', () => {
            if (!this.completed) {
                this.cancelHold(false);
            }
            this.completed = false;
        });

        scrollButton.addEventListener('mouseleave', () => {
            if (!this.holdTimer) {  // Only reset to gray if not holding
                arrowIcon.style.borderTopColor = '#999';
            }
            if (!this.completed) {
                this.cancelHold(false);
            }
            this.completed = false;
        });

        // Touch support for mobile
        scrollButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startHold();
        });

        scrollButton.addEventListener('touchend', () => {
            if (!this.completed) {
                this.cancelHold(false);
            }
            this.completed = false;
        });

        scrollButton.addEventListener('touchcancel', () => {
            if (!this.completed) {
                this.cancelHold(false);
            }
            this.completed = false;
        });
    },

    startHold() {
        this.completed = false;
        // Toggle to opposite cycle
        this.targetMode = this.currentMode === 'day' ? 'night' : 'day';
        this.holdStartTime = Date.now();

        // Add holding class for visual feedback
        const scrollButton = document.getElementById('scrollArrow');
        scrollButton.classList.add('holding');

        this.updateProgress();
    },

    updateProgress() {
        const elapsed = Date.now() - this.holdStartTime;
        const progress = Math.min(elapsed / this.HOLD_DURATION, 1);

        const heroSection = document.getElementById('heroSection');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const arrowIcon = document.querySelector('.arrow-icon');
        const scrollButton = document.getElementById('scrollArrow');
        const scrollButtonLabel = document.querySelector('.scroll-button-label');

        // Update progress ring
        scrollButton.style.setProperty('--progress', `${progress * 360}deg`);

        // Interpolate from current cycle to target cycle
        const fromColors = this.colors[this.currentMode];
        const toColors = this.colors[this.targetMode];

        // Background color interpolation
        const bgR = Math.floor(fromColors.bg.r + progress * (toColors.bg.r - fromColors.bg.r));
        const bgG = Math.floor(fromColors.bg.g + progress * (toColors.bg.g - fromColors.bg.g));
        const bgB = Math.floor(fromColors.bg.b + progress * (toColors.bg.b - fromColors.bg.b));
        heroSection.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

        // Text color interpolation (also applies to label)
        const textR = Math.floor(fromColors.text.r + progress * (toColors.text.r - fromColors.text.r));
        const textG = Math.floor(fromColors.text.g + progress * (toColors.text.g - fromColors.text.g));
        const textB = Math.floor(fromColors.text.b + progress * (toColors.text.b - fromColors.text.b));
        const textColor = `rgb(${textR}, ${textG}, ${textB})`;
        heroTitle.style.color = textColor;
        heroSubtitle.style.color = textColor;
        scrollButtonLabel.style.color = textColor;

        // Ripple interpolates independently: dark purple → white
        const rippleR = Math.floor(fromColors.ripple.r + progress * (toColors.ripple.r - fromColors.ripple.r));
        const rippleG = Math.floor(fromColors.ripple.g + progress * (toColors.ripple.g - fromColors.ripple.g));
        const rippleB = Math.floor(fromColors.ripple.b + progress * (toColors.ripple.b - fromColors.ripple.b));
        heroSection.style.setProperty('--ripple-color', `rgb(${rippleR}, ${rippleG}, ${rippleB})`);

        // Arrow color interpolation
        const arrowR = Math.floor(fromColors.arrow.r + progress * (toColors.arrow.r - fromColors.arrow.r));
        const arrowG = Math.floor(fromColors.arrow.g + progress * (toColors.arrow.g - fromColors.arrow.g));
        const arrowB = Math.floor(fromColors.arrow.b + progress * (toColors.arrow.b - fromColors.arrow.b));
        arrowIcon.style.borderTopColor = `rgb(${arrowR}, ${arrowG}, ${arrowB})`;

        if (progress < 1) {
            this.holdTimer = requestAnimationFrame(() => this.updateProgress());
        } else {
            // Complete - switch to target cycle permanently
            this.completed = true;
            this.currentMode = this.targetMode;  // Update current cycle
            this.cancelHold(true);
            SnakeGame.popAllSnakesAndScroll();
        }
    },

    cancelHold(keepColors = false) {
        if (this.holdTimer) {
            cancelAnimationFrame(this.holdTimer);
            this.holdTimer = null;
        }

        // Remove holding class
        const scrollButton = document.getElementById('scrollArrow');
        const arrowIcon = document.querySelector('.arrow-icon');
        scrollButton.classList.remove('holding');
        scrollButton.style.setProperty('--progress', '0deg');

        if (!keepColors) {
            // Reset to current cycle colors (not CSS default)
            const heroSection = document.getElementById('heroSection');
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const scrollButtonLabel = document.querySelector('.scroll-button-label');

            const currentColors = this.colors[this.currentMode];

            heroSection.style.backgroundColor = `rgb(${currentColors.bg.r}, ${currentColors.bg.g}, ${currentColors.bg.b})`;
            const resetTextColor = `rgb(${currentColors.text.r}, ${currentColors.text.g}, ${currentColors.text.b})`;
            heroTitle.style.color = resetTextColor;
            heroSubtitle.style.color = resetTextColor;
            scrollButtonLabel.style.color = resetTextColor;
            heroSection.style.setProperty('--ripple-color', `rgb(${currentColors.ripple.r}, ${currentColors.ripple.g}, ${currentColors.ripple.b})`);
            arrowIcon.style.borderTopColor = `rgb(${currentColors.arrow.r}, ${currentColors.arrow.g}, ${currentColors.arrow.b})`;
        }

        // Always return arrow to gray when not holding
        arrowIcon.style.borderTopColor = '#999';
    }
};

// About Section Scroll Animation
function initAboutAnimation() {
    const aboutSection = document.querySelector('.about-section');
    let cardsAnimated = false;
    let firstView = true;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (firstView) {
                    // First time: full fly-in animation
                    aboutSection.classList.add('animated');

                    // Animate playing cards with staggered timing
                    const cards = aboutSection.querySelectorAll('.playing-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                            setTimeout(() => {
                                card.classList.add('float');
                            }, 600);
                        }, index * 150);
                    });

                    firstView = false;
                } else {
                    // Subsequent times: 360 spin
                    aboutSection.classList.add('quick-twirl');
                    setTimeout(() => {
                        aboutSection.classList.remove('quick-twirl');
                    }, 1000);
                }
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(aboutSection);
}

// Carousel swipe gesture (touch)
function initCarouselSwipe() {
    const modal = document.getElementById('imageModal');
    let swipeStartX = null;
    let swipeStartY = null;

    modal.addEventListener('touchstart', (e) => {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        if (swipeStartX === null) return;
        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = e.changedTouches[0].clientY - swipeStartY;
        swipeStartX = null;
        swipeStartY = null;
        // Only register horizontal swipes (not accidental scrolls)
        if (Math.abs(dx) > 50 && Math.abs(dy) < 80) {
            navigateCarousel(dx < 0 ? 1 : -1);
        }
    }, { passive: true });
}

// Touch tap to flip profile card
function initTouchCardFlip() {
    if (!isTouchDevice()) return;
    const profileCardInner = document.querySelector('.profile-card-inner');
    const aboutContent = document.querySelector('.about-content');
    if (!profileCardInner || !aboutContent) return;

    aboutContent.addEventListener('touchend', (e) => {
        e.preventDefault();
        profileCardInner.classList.toggle('touch-flipped');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateGameCards();
    initAboutAnimation();
    initCarouselSwipe();
    initTouchCardFlip();
    SnakeGame.init();
    HoldButton.init();
});
