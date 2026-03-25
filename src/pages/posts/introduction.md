---
  layout: ../../layouts/MarkdownPostLayout.astro
  title: 'Trying Astro content-driven framework'
  pubDate: 2026-25-03
  description: 'This is the first post of my life :3'
  author: 'Guilherme Galabarof'
  image:
      url: 'https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg'
      alt: 'Funny meme cat that looks suspicious.'
  tags: ["software", "frontend"]
---

#Astro
getting to understand Astro was amazing, it is a simple concept in pratice by the framework that put content and user first.


Astro is responsible to applying the concept of Islands in frontend, spliting parts of a website to improve perfomance based on how each part should be best rendered, including SSG, SSR, ISR and CSG.

The first part of tutorial was simples.
create, publish, configure server, push.

in netfily I had to change a configuration to get the /dist as publish directory.

the major thing is that this remember me a lot of building websites back in the agency day (ten years ago). which was in my personal opnion, much more fun to develop.

that said, I think astro deal quiet well with the complexity of choosing to render server or client side.

also noting, netlify is consuming fast, I should not commit to master - creating a new branch to do PR instead .

vite is fundamental for Astro to use it's own files as data, importing posts from posts folder is awesome.

things:
- children: seems to be here as slots, something similar to Outlet from material-ui.

- one layout: I think because every page is a page, like MPA should be, the layout cannot be imported and used for every singles page perhaps?
