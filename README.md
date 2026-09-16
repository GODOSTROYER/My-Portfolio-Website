<h2 align="center">
  Portfolio Website - v2.0<br/>
  <a href="https://arnav.fun" target="_blank">Arnav.fun</a>
</h2>

<p align="center">My first portfolio website — Arnav.Fun :)</p>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;

</center>

## Status

**This is my first portfolio, built in 2023, and it is no longer maintained.**
It has been superseded by my current portfolio, live at **[www.arnavbule.in](https://www.arnavbule.in)** — source at [GODOSTROYER/arnav-portfolio-2025](https://github.com/GODOSTROYER/arnav-portfolio-2025).

The [arnav.fun](https://arnav.fun) domain is still online, but it now serves a different site — this 2023 build is not what is deployed there. The code here is kept as an archive of where things started.

## Built With

My personal portfolio <a href="https://arnav.fun" target="_blank">Arnav.fun</a> which features some of my github projects as well as my resume and technical skills.<br/>

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

Notable libraries in use: `react-router-dom` for routing, `react-bootstrap` + `bootstrap` for layout, `react-tsparticles` for the animated particle background, `typewriter-effect` for the rotating headline, `react-pdf` / `@react-pdf/renderer` for the in-browser resume, and `react-github-calendar` for the contribution graph.

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

To produce the static production build, run `npm run build` — the output lands in `build/` and can be served by any static host.

> Heads up: this is an older Create React App toolchain (`react-scripts` 5.0.0, React 17). On a modern Node release the install or dev server may need a period-appropriate Node version to build cleanly.

## Project Structure

```
.
├── public/             # static shell — index.html, favicon, manifest, robots.txt
└── src/
    ├── App.js          # routes: / (home), /project, /about, /resume
    ├── components/
    │   ├── Home/       # landing section + typewriter intro (Home.js, Home2.js, Type.js)
    │   ├── About/      # bio card, tech stack, tool stack, GitHub contribution calendar
    │   ├── Projects/   # project cards
    │   ├── Resume/     # in-browser PDF resume viewer with download button
    │   ├── Navbar.js   # nav, Footer.js, Pre.js (preloader),
    │   └── ...         # Particle.js (background), ScrollToTop.js
    └── Assets/         # images, SVGs and the resume PDF
```

## Usage Instructions

Open the project folder and Navigate to `/src/components/`. <br/>
You will find all the components used and you can edit your information accordingly.

## Author

**Arnav Bule**

- Portfolio: [www.arnavbule.in](https://www.arnavbule.in)
- GitHub: [@GODOSTROYER](https://github.com/GODOSTROYER)

### Show your support

Give a ⭐ if you like this website!
