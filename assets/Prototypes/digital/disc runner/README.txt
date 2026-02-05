A high-precision platformer built around a singular, versatile mechanic: a kinetic disc that serves as both a projectile and a portable platform. The game focuses on a 50/50 split between environmental puzzle-solving (finding the path) and mechanical execution (executing the path).

Core Gameplay Mechanics
The player's primary tool is a boomerang disc that interacts with both the environment and the player's movement state.

The Disc Jump: Players can throw the disc along the horizontal or vertical axis. Jumping off a horizontal disc acts as a standard platform boost, while jumping off a vertical disc allows for mid-air wall jumps.

The Boomerang Effect: The disc naturally returns to the player. Mastering the timing of its return is essential for chaining movements.

Ricochet Physics: The disc bounces off solid surfaces. This allows players to "set up" platforms in hard-to-reach areas by banking shots off walls.

Momentum Dash: Upon catching the disc, the player gains a brief dash window. This creates a rhythmic "Throw → Jump → Catch → Dash" loop that rewards precision timing.

Design Philosophy
The level design is predicated on two distinct challenges:

The Logical Challenge: Levels are designed as "movement puzzles." Because the disc can be bounced and jumped off of in various orientations, players must first visualize the sequence of throws and bounces required to navigate a space.

The Execution Challenge: Once the "how" is solved, the player must execute frame-perfect inputs. The combination of wall jumps, disc-boosts, and dash windows allows for high-skill expression and "flow state" gameplay.

Technical Implementation
A significant focus was placed on the "feel" of the game and the seamlessness of the world exploration.

Dynamic Room-to-Room Camera System
To maintain focus on precision, I developed a custom camera controller that manages transitions between non-uniform spaces.

Framing Logic: The system automatically adjusts zoom levels and offsets to ensure that rooms of any dimension are perfectly centered and framed within the viewport.

Seamless Transitions: Using viewport-boundary detection, the camera helper functions predict the player's intended destination and transition smoothly without breaking the game's momentum.

Optimization: The camera logic intelligently culled off-screen assets, ensuring high performance even in complex levels.

Key Takeaways
Iteration: Refined the "snap-to" logic of the disc jump to ensure it felt responsive rather than frustrating.

Emergent Gameplay: Discovered that the ricochet mechanic allowed for speedrunning skips I hadn't originally intended, which I then leaned into during level design.