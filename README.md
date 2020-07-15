<img width="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="SplatNET" src="https://mirayxs.github.io/SplatNET/assets/images/SP2chatlog/OctMessageLog06_00.png">

# SplatNET 
>>>>>>>>>> ## An open source Splatoon Discord.js Bot

<img src="https://img.shields.io/badge/Latest%20Version-v5.2.0-7289da?style=for-the-badge"> <a href="https://mirayxs.github.io/SplatNET"><img src="https://img.shields.io/badge/SplatNET-Website-7289da?style=for-the-badge"></a>
    
|  |  | 
| - | - |
| Basic requirements| [![JavaScript](https://img.shields.io/badge/language-javascript-F7DF1E.svg?logo=JavaScript)](https://www.javascript.com) [![NodeJS](https://img.shields.io/badge/Node.js-12.13.0-339933.svg?logo=Node.js)](https://nodejs.org) [![DiscordJS](https://img.shields.io/badge/Discord.js-v12.2.0-7289DA.svg?logo=Discord)](https://discord.js.org) |
| Github Repository Info |[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?logo=github)](https://www.gnu.org/licenses/gpl-3.0) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MirayXS/SplatNET.svg?logo=Github&style=popout&logoColor=white) ![GitHub repo size](https://img.shields.io/github/repo-size/MirayXS/SplatNET?logo=github) |
| Dependencies | [![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=MirayXS/SplatNET)](https://dependabot.com)  [![david-dm-org](https://img.shields.io/david/Asgarrrrr/Luna?color=4F36EC&style=flat-square)](https://david-dm.org/MirayXS/SplatNET) [![Known Vulnerabilities](https://snyk.io/test/github/MirayXS/SplatNET/badge.svg?targetFile=package.json)](https://snyk.io/test/github/MirayXS/SplatNET?targetFile=package.json) |

## Table Of Contents
<details>
<summary>Click to reveal</summary>

<br>

- [Selfhosting](#selfhosting)
  - [Installation](#installation)
    - [Prerequisite](#prerequisite)
    - [Downloading and installing steps](#downloading-and-installing-steps)
- [Command list](#command-list)
  - [General](#general)
  - [Core](#core)
  - [Random Generator](#random-generator)
- [Internal Data](#internal-data)
  - [Random Generator Images](#random-generator-images)
      - SplatHeX
      - MirayAPI
- [Schedules](#schedules)
  - Main API
      - Co-op (Salmon Run)
        - Current Schedules
        - Next Schedules
        - Reward Item
      - Schedules (Turf War, Ranked, League)
        - Current Schedules
        - Next Schedules
</details>

## Features
<details>
<summary>Click to reveal</summary>

<br>

- Splatoon Information Data
  - Schedules
      - Turf War, Ranked, League
        - Current Schedules
        - Next Schedules
      - Co-op (Salmon Run)
        - Current Schedules
        - Next Schedules
        - Reward Item
        
- Splatoon Random Generator
  - Generate a random private session code
  - Mode Random Generator
  - Weapon Random Generator
  - Stage Random Generator
  - Sub Weapon Random Generator
  - Skill Random Generator
  - Shoes Random Generator
  - Brand Random Generator
  - Clothes Random Generator
  - Head Gear Random Generator
  - Memcake Random Generator
  - Splatfest Stage Random Generator
  - Splatfest Color Random Generator
</details>

## Todo

- [ ] Events Folder⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀(guildCreate.js, guildDelete.js)
- [ ] Owner ID Setup⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ (setup.js, config/config.json)
- [ ] Random Generator : Random Gear⠀⠀⠀⠀⠀⠀⠀⠀⠀(`splat!randomgear` - Gear Set Randomizer)
- [ ] Random Generator : Random Set⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀(`splat!randomset`  - Full Set Randomizer)
- [ ] Random Generator : Random Team Weapon⠀⠀ (`splat!randomteamweapon` - Team Weapons Randomizer)
- [ ] Random Generator : Random Team Gear⠀⠀⠀⠀⠀(`splat!randomteamgear` - Team Gear Randomizer)
- [ ] Item and Gear Data **names** JSON Files⠀⠀⠀⠀⠀ ⠀(for the above random generators) *[From SplatHeX](https://mirayxs.github.io/SplatHeX/splat2/en_files.html)*
- [ ] Randomizers -> Random Generator

<hr>

# Selfhosting  

## Installation

##### Prerequisite

-   To wake up SplatNET, Node.js 12.13.0 or newer must be [installed](https://nodejs.org/en/download/).

##### Downloading and installing steps

1.  **[Download](https://github.com/MirayXS/SplatNET/archive/master.zip)** the latest version of SplatNET.

2.  Configure SplatNET :
    -   Run `node setup.js`
    -   You will need to create a bot application in the **[developers portal](https://discordapp.com/developers/applications/me)**
    -   Just follow the configuration steps, **and that's it !**

3.  Getting Started
    -   Run `node index.js`
    -   **SplatNET is now operational ! 🎉**
    
# Command list

<hr>

<p>
  <img src="https://mirayxs.github.io/SplatNET/assets/images/SP2icons/S2_Icon_Marina.png" height="200" title="Marina" align="right">
</p>

### General
* `splat!currentmaps` Displays the current Splatoon 2 Gamemodes/Maps <br><br>
* `splat!nextmaps` Displays the upcoming Splatoon 2 Gamemodes/Maps <br><br>
* `splat!currentsalmonrun` Displays current Splatoon 2 Salmon Run Map/Weapons <br><br>
* `splat!nextsalmonrun` Displays upcoming Splatoon 2 Salmon Run Map/Weapons

<hr>

<p>
  <img src="https://mirayxs.github.io/SplatHeX/splathex/splathex2logo.png" height="200" title="HeX-Tools" align="right">
</p>

### Core
* `splat!help` Displays Base Help with all my commands <br><br>
* `splat!ping` Returns the bot's average ping <br><br>
* `splat!stats` Returns bot stats

<hr>

<p>
  <img src="https://mirayxs.github.io/SplatHeX/splatools/splatools.png" height="200" title="TOOLS" align="right">
</p>

### Random Generator
* `splat!sp2code` Generates a random private session code (DMs) <br><br>
* `splat!randommode` Mode Random Generator <br><br>
* `splat!randoweapon` Weapon Random Generator <br><br>
* `splat!randomstage` Stage Random Generator <br><br>
* `splat!randomsub` Sub Weapon Random Generator <br><br>
* `splat!randomskill` Skill Random Generator <br><br>
* `splat!randomshoes` Shoes Random Generator <br><br>
* `splat!randombrand` Brand Random Generator <br><br>
* `splat!randomclothes` Clothes Random Generator <br><br>
* `splat!randomheadgear` Head Gear Random Generator <br><br>
* `splat!randommemcake` Memcake Random Generator <br><br>
* `splat!randomfeststage` Splatfest Stage Random Generator <br><br>
* `splat!randomfestcolor` Splatfest Color Random Generator

<hr>

<!-- <img src="https://mirayxs.github.io/SplatNET/assets/images/SP2chatlog/OctMessageLog10_00.png" align="center"> -->

### Internal Data
#### Random Generator Images
<div align="left">
<a href="https://github.com/MirayXS/SplatHeX">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=MirayXS&repo=SplatHeX" />
</a>
<a href="https://github.com/MirayXS/MirayAPI/tree/master/sp2">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=MirayXS&repo=MirayAPI" />
</a>
    </div>

<hr>

#### Schedules
- Main API: [splatoon2.ink JSON Data](https://splatoon2.ink)
  - Co-op (Salmon Run)
    - Current Schedules: [splatoon2.ink/data/coop-schedules.json](https://splatoon2.ink/data/coop-schedules.json)
    - Next Schedules   : [splatoon2.ink/data/coop-schedules.json](https://splatoon2.ink/data/coop-schedules.json)
    - Reward Item      : [splatoon2.ink/data/timeline.json](https://splatoon2.ink/data/timeline.json)
  - Schedules (Turf War, Ranked, League)
    - Current Schedules: [splatoon2.ink/data/schedules.json](https://splatoon2.ink/data/schedules.json)
    - Next Schedules   : [splatoon2.ink/data/schedules.json](https://splatoon2.ink/data/schedules.json)

