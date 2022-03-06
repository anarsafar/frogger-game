# Frogger game
A retro atari game build using vanilla JS, HTML and CSS. Tools used: Webpack, Babel, ESLint

Frogger is a 1981 arcade game developed by Konami and originally published by Sega. The game was originally going to be titled "Highway Crossing Frog," but the executives 
at Sega felt it did not capture the true nature of the game and was changed simply to "Frogger". The object of the game is to direct a frog to its home by crossing a busy
road and navigating a river by jumping on logs. By 2005, Frogger in its various home video game incarnations had sold 20 million copies worldwide, including 5 million in 
the United States. The game found its way into popular culture, including television and music.

## What used?
- JS arrow functions
- EventListeners
- SetInterval
- clearInterval
- DOM Manipulation
- Webpack
- ESLint config
- Babel 7

# Rules for game
- You will start on your blue starting block, or 'starting-block'
- You have 10 seconds from pressing the start button to get to your red block or 'ending-block' to win the game
- You will lose if the time runs out
- You will lose if you get hit by a car, or 'c1'
- You will lose if you fall into the river, or '.l4, .l5, .lf2, .lf3'
- You will be safe on the road, or '.c2, .c3'
- You will be safe on the logs, or '.l1, .l2, .l3'
- You will move with the logs when on them
- You can pause the game by pressing the same button as you did to start the game
