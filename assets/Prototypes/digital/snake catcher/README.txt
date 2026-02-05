Description
A minimalist idle game centered around catching snakes. Players can actively pursue snakes or passively wait for them to wander into range—either way, every successful catch rewards coins.
These coins can be reinvested to expand the catch radius, unlock new snake varieties, and increase the total number of snakes on screen, creating a self-reinforcing progression loop of growth and reward.

Prototype Goal
The primary goal of this prototype was to explore game design without a fail state. By removing loss conditions entirely, the experience is intended to feel soothing and low-pressure.
While this version is a prototype, the long-term vision emphasizes a calming gameplay loop paired with visually pleasing motion and presentation.

Technical Highlights

Procedural Snake Movement (Inverse Kinematics)
Each snake’s movement is driven by Inverse Kinematics rather than pre-authored animations. Individual joints respond dynamically to the position of the previous joint based on a defined rule set, allowing for fluid, organic motion without requiring hundreds of baked animations.

Memory-Efficient Snake Respawning
When a snake despawns, two snakes are generated in its place. One of these is the original snake, repositioned outside the viewport and recolored, rather than fully destroyed and recreated.
This reuse of objects reduces memory overhead and improves runtime performance, enabling higher snake counts without additional cost.