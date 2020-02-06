<p align="center">
  <a href="https://exshak.com">
    <img src="./src/assets/images/favicon.png" alt="exshak" width="100" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/exshak/portfolio">
    <img src="https://img.shields.io/badge/build-passing-success.svg" alt="build: status"/>
  </a>
  <a href="https://styled-components.com">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" alt="style: styled"/>
  </a>
  <a href="https://netlifycms.org">
    <img src="https://img.shields.io/badge/cms-netlify--cms-00bbcc.svg" alt="cms: netlify"/>
  </a>
  <a href="https://jestjs.io">
    <img src="https://img.shields.io/badge/tests-jest-00cc99.svg" alt="tests: jest"/>
  </a>
  <a href="https://app.netlify.com/sites/exshak/deploys">
    <img src="https://api.netlify.com/api/v1/badges/f25861b2-d1c2-428f-8294-a8e879445740/deploy-status" alt="netlify: status"/>
  </a>
</p>

---

My personal portfolio where I can showcase projects I've been working on. I wanted something fast and with good SEO, so a static website generator like Gatsby seemed like the best fit. It reads data from markdown files, so it's super easy for me to keep adding Portfolio items as I keep developing stuff.

_Have a great idea to contribute? Make a pull request, I'm always looking for ways to improve my [portfolio](https://exshak.com)._

## Features

- Dark Mode
- Forms & reCAPTCHA
- Google Analytics
- Page Transition Links
- React Spring Animations
- Netlify CD, CMS
- PWA
- SEO

## Quick Start

Clone repository, install dependencies, start server

```sh
git clone https://github.com/exshak/portfolio.git
cd portfolio
yarn                   # npm install
yarn start             # npm start
# to deploy
yarn build             # npm build
```

Visit site at _`localhost:8000`_

## Built With

- [React](https://reactjs.org)
- [Gatsby](https://gatsbyjs.org)
- [Styled Components](https://styled-components.com)
- [React Spring](https://react-spring.io)
- [Netlify CMS](https://netlifycms.org)
- [Jest](https://jestjs.io)
- [Netlify](https://netlify.com)

#### Folder Structure

```sh
.
├── config            # SEO manifest
├── content           # CMS collections
├── src
│   ├── assets        # Icons and images
│   ├── components    # Javascript and css
│   ├── pages         # Site pages and routes
│   └── utils         # Utility functions/hooks
└── static            # Netlify CMS configuration
```

## License

[MIT](./LICENSE)
