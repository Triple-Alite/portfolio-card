# Personal Portfolio Card

A single-page portfolio "card," styled like an index card or reference sheet, built with plain HTML, CSS and JavaScript. Made for Task 1 of the SpireX Foundation web development internship.

## Features
- One self-contained, responsive card (not a multi-page site)
- Light / dark mode toggle, remembers your choice when storage is available
- Skills, projects and contact info laid out as clean field rows
- Working front-end contact form with validation and status feedback
- No frameworks, no build step

## Tech stack
- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript
- IBM Plex Mono & IBM Plex Sans via Google Fonts

## Run it
Open `index.html` in any browser. There's no build step. For live-reload while editing, the VS Code "Live Server" extension works well.

## Customize it
Everything lives in `index.html`, with matching styles in `style.css`. Replace:

| Field | Where |
|---|---|
| Name, initials, page title | `<h1>`, `.mark`, and the page `<title>` |
| Role & bio | the `.role` and `.bio` paragraphs |
| Social & resume links | the `.links-row` under the bio |
| Skills | the `<dl>` rows under **Skills** |
| Projects | the three `.project` articles under **Projects** |
| Contact details | the `<dl>` rows under **Contact** |

Colors and fonts are CSS custom properties at the top of `style.css`: `:root` for light mode, `[data-theme="dark"]` for dark. Change `--blue` and `--red` to restyle the whole card.

## Deploy it
Push this folder to a GitHub repo, then turn on GitHub Pages (Settings, then Pages, then Deploy from branch, `main`, root folder). That gives you a live link to share alongside your repo, which is handy since this task asks for both a GitHub link and a screenshot of the working page.

## Author
Abdulsalam Abubakar Abolaji
