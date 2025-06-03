---
title: Example article
published: 2018-03-28
updated: 2018-03-28
description: The best techniques for sharing code snippets and screencasts that will help propel your open source projects to success.
image: "https://prod-files-secure.s3.us-west-2.amazonaws.com/f467702f-9f5e-4653-bed9-5e0f3d612bbf/08e9ffb5-9f6d-442b-b470-ce2e62a6b6b2/blur-codes-coding-577585.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQSBM2GL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T013117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGIKeH9w%2BMvGybe0bI4i%2Fbv1KSZuo31XN4rhI%2BmJ39JdAiAixFNcPrIID0BYTl6JXgVxBNAgW2p7I63vR9ai%2BhVdYSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWj6mha%2BGDC7WHFylKtwDiXkItG0SxsQ0k2Fb4i3%2F3usULj5IEGMwHwM%2BmIxPIFBJPwYeVqhsVOfPC1oTwFlQujj9y%2F0VnucAMh6oUDqzoCFpF3sYV3T%2F2jteRgVvUXepOW1YYZ7vOtT04jJe9ZycdhHvfjTldCytKP%2F95DwZOdYnEHjDIMvPU9%2BQi1maWQAq4U%2Fhh%2BZ6YB3Wk3WoGUVj6r0O9DdCQrYbZraJaMClr35BL%2Fniqb1HuHAppRvcNjqpALFjUUuJWQQwkFuYnTPYZHICmGpLc%2BgX%2FnmIP0n56yBtLrNQx1fKKx7%2FNFZ3NtzWozLesDQUJauz773gqZ%2F9SJoHeyJNoY4noVqPNndbnV%2BnCP6TWiTq1Vui9%2Fr9ultW9PkUFvpt%2BERUs5xcUGAaVLc2Dix7c9vCQ%2B4VwnMS%2Blp3jaZNd4ogCwaMfYtiHI42EUa116YGk1cGOecd6Xz8ACc3aXn2%2FCY%2FymI0yEn6c89K2YGmWexea5TzPzcZwuEV9qPTsoFOQFdyjbKagATwOGLsMKwqVlgqp5E3LEco9gq0xcv40zHwzId5%2B8PkSn4fA%2FCsmApTGSr47QqmyQeTR2DJ6EqXbNib3usZkWkRxCq5TO%2B9FoBJSWAEAdW1qIDQWJLTeKxvz3upJBwwnIz5wQY6pgEAOEI6dOkjIwUwr6Bnr1ASA1AW58J3eoqNwIncWQWNdLdvzoCPiPAn4UKvWvd0Rm76v70c7tghtls41dvP1jJj2Om1sv6vTVXdAsF9Ccv688J2wjVH5dY7yTKAbjNHiBtvvsjZ1%2Bid8%2F3%2FB7Sfd%2FLxaugb2J6WP%2B1eLrum9tvz80N%2FH1konUHGCYleT%2BM4hYC83HTFBksPVUKewOzkM4dbY0OoW%2B05&X-Amz-Signature=f87f9d817f56a6e72dcfb089b91f264b742112975349b3a5acf2c61a57693ffb&X-Amz-SignedHeaders=host&x-id=GetObject"
tags: [OSS, Node.js]
category: ''
draft: false
lang: ''
---


_The best techniques for sharing code snippets and screencasts that will help propel your open source projects to success._


# Intro


Creating your own open source projects can be extremely rewarding, but it can be hard to break through the noise and get other developers to trust and use your software. You can gain a lot of ground by following [common best practices](https://opensource.guide/) like including solid documentation, adding unit tests, integrating with a CI/CD oriented towards open-source projects (like [travis-ci](https://travis-ci.org/) or [circle-ci](https://circleci.com/)), and enforcing consistent style conventions.


One of the most effective and easiest ways I’ve found to make open source projects really stand out from the crowd is **adding quality screenshots or animated demos**. Whenever I see this attention to detail, not only does it prove to me that the author cares about the project, but it’s the absolute fastest way to convey what the project actually does.


![Animation Credit: CSS-only coding animation by Chris Dermody](https://prod-files-secure.s3.us-west-2.amazonaws.com/f467702f-9f5e-4653-bed9-5e0f3d612bbf/f25171e8-0137-43ff-8420-4e64311374a0/css-coding.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMO24GTI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T013118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD5KufM0arigdqsxA3mC8Vhk4CJGdUzzCdiIC%2FjqXIRmAIhALD6DrOpu4GXMT0J31ZW32LqGyjQ2NBIca1Mt9RDJGVXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBlpEDLG5YQAS7DMYq3AMvUg2mN%2BbYM7QlsgG%2FUVw3ORZf1%2B%2Ft%2BoKCMgIJg2Qi%2FMarIFgbEunAuimFd8Q37wD76bZfO7HM9CfDqS7J%2FqBDEUWrGzp5GhI9XjugBIFOM5keHfCx1iz6Qn%2BhrxWHdpqvBSzrDVrhvfzoISeh5LSgt%2F6hZgBev%2BraFE95ofat8d5SVNYpR0izxYWVOpKNVcmHGb0Zd9SygsfYqNXRCQSJbiHuEDTH3aCmseDLIUKWqgVVjQ%2BeO0vcWwSCPJDugJIFBzEsDAIWSRNFD0lbEvoHmgQM4ndYYPCUQokVXcQIB6y8Eoxrtu1cwFzga9tU%2B2BEVw4uIIeZq2mjhv5SFMP%2FHTxwdaAhnban4OMtGP3eXUcBtXWxi6x1v1n7Cosl7DW1kJhkiNk2FAq%2FWhuPrpa5UlvMjKDCMauQTF5oP%2F0XSN2NhObLWUktRxAc1SjzfOGIbsYjAgK3FS0t7RpUskQqYLww63hkV1EJG8HMFGk1Vs8hTNHw7MjmS68GrF010lDJHVfqqw%2BWivsFQklphQzxODpj8u7OKIy4%2BwffLwGEmFujmgm4i7OBK3X2zZ38x%2BvW6ZiWGbPRfc90VzPVJw391DQ3c1cuXkHYjqjg9DlRbmU8xN9iQFbqt8c6yTCSjPnBBjqkAYvYU7roTGih26n9BD7jAj61kUwNGww0KjXAOzAmkOeUVstNCGKBWXv0zharKF8yXdH9vny6OZJmxyiGJuBfYZwKWVVK1H0asLE6a3HmVtbvydYGdNe5ZEipZbwPlhealBKog1t0NeDDHtfQ3GB5jEq4UbKKPd4SK5PASqN8%2BzsWoyQttkTEHDFzlsXDzCUF0R62rIV0TK0aKJd0pABjy7xohU8H&X-Amz-Signature=7b99b9502784695e888924b177a1cf5ef544a86667d0425945c5754ffba0779f&X-Amz-SignedHeaders=host&x-id=GetObject)

> A picture is worth a thousand words. — Cliche saying that’s totes relevant

Including quality screenshots and demos is becoming an increasingly important part of what I’d call **Developer UX**, that is the flow a prospective developer takes from considering adding your project as a dependency all the way through successful integration and future maintenance.


Towards that end, we’ll be looking at three common use cases for improving the developer UX of your open source projects with media:

- Static code snippets (images)
- Animated code demos (GIFs or animated SVGs)
- Project screencasts (videos)

# **Static Code Snippets**


Sharing small bits of static code is definitely the most common and important use case on this list. Every open source project’s readme should include some easily parseable _example usage_ snippet, so let’s start there.


## **GitHub-Flavored Markdown Snippets**


At the easiest end of the spectrum, GitHub allows [syntax highlighting](https://guides.github.com/features/mastering-markdown/) in markdown code snippets. Hopefully, this style of embedding is familiar to you, and if not, I would definitely recommend starting here.


```javascript
const pMap = require('p-map')
const got = require('got')

const sites = [
  getWebsiteFromUsername('sindresorhus'), //=> Promise
  'ava.li',
  'todomvc.com',
  'github.com'
]

const mapper = el => got.head(el).then(res => res.requestUrl)

pMap(sites, mapper, { concurrency: 2 })
  .then(result => {
    console.log(result)
    //=> ['http://sindresorhus.com/', 'http://ava.li/', 'http://todomvc.com/', 'http://github.com/']
  })
```


## **GitHub Gists**


The code snippet above also provides an example of an extremely popular way of sharing static code snippets via [GitHub Gists](https://help.github.com/articles/about-gists/), which have the following advantages:

- Linkable
- Support versioning
- Support discussion via comments
- Syntax highlighting

## **Carbon**


Markdown snippets and GitHub gists are both useful, but if you really want to make your code pop, then look no further than [Carbon](https://github.com/dawnlabs/carbon).


![Image Credit: Carbon](https://prod-files-secure.s3.us-west-2.amazonaws.com/f467702f-9f5e-4653-bed9-5e0f3d612bbf/fa44fbba-90b4-4f40-a00f-fa6eb7fd37e3/carbon.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMO24GTI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T013118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD5KufM0arigdqsxA3mC8Vhk4CJGdUzzCdiIC%2FjqXIRmAIhALD6DrOpu4GXMT0J31ZW32LqGyjQ2NBIca1Mt9RDJGVXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBlpEDLG5YQAS7DMYq3AMvUg2mN%2BbYM7QlsgG%2FUVw3ORZf1%2B%2Ft%2BoKCMgIJg2Qi%2FMarIFgbEunAuimFd8Q37wD76bZfO7HM9CfDqS7J%2FqBDEUWrGzp5GhI9XjugBIFOM5keHfCx1iz6Qn%2BhrxWHdpqvBSzrDVrhvfzoISeh5LSgt%2F6hZgBev%2BraFE95ofat8d5SVNYpR0izxYWVOpKNVcmHGb0Zd9SygsfYqNXRCQSJbiHuEDTH3aCmseDLIUKWqgVVjQ%2BeO0vcWwSCPJDugJIFBzEsDAIWSRNFD0lbEvoHmgQM4ndYYPCUQokVXcQIB6y8Eoxrtu1cwFzga9tU%2B2BEVw4uIIeZq2mjhv5SFMP%2FHTxwdaAhnban4OMtGP3eXUcBtXWxi6x1v1n7Cosl7DW1kJhkiNk2FAq%2FWhuPrpa5UlvMjKDCMauQTF5oP%2F0XSN2NhObLWUktRxAc1SjzfOGIbsYjAgK3FS0t7RpUskQqYLww63hkV1EJG8HMFGk1Vs8hTNHw7MjmS68GrF010lDJHVfqqw%2BWivsFQklphQzxODpj8u7OKIy4%2BwffLwGEmFujmgm4i7OBK3X2zZ38x%2BvW6ZiWGbPRfc90VzPVJw391DQ3c1cuXkHYjqjg9DlRbmU8xN9iQFbqt8c6yTCSjPnBBjqkAYvYU7roTGih26n9BD7jAj61kUwNGww0KjXAOzAmkOeUVstNCGKBWXv0zharKF8yXdH9vny6OZJmxyiGJuBfYZwKWVVK1H0asLE6a3HmVtbvydYGdNe5ZEipZbwPlhealBKog1t0NeDDHtfQ3GB5jEq4UbKKPd4SK5PASqN8%2BzsWoyQttkTEHDFzlsXDzCUF0R62rIV0TK0aKJd0pABjy7xohU8H&X-Amz-Signature=5c8b432c0087ba042f02e8d1d4829e834145a31ce7fbd8bc84e397965fdb5759&X-Amz-SignedHeaders=host&x-id=GetObject)


Carbon is a very popular open source project that allows you to easily create aesthetically pleasing code screenshots, along with a plethora of customization options and community plugins. It’s a great choice for making a hero image standout in your readme, increasing engagement on social media, or for writing engineering-related blog posts like this one 😛.


# **Animated Code Demos**


Including a high quality, inline demo that quickly demonstrates your project’s core use case is the single most important suggestion I have to give.


There are a ton of different ways to go about creating these types of demos, however, so I’d like to discuss what I’ve found to be the best approach here.

> Asciinema is a free tool that lets you record and share your terminal sessions, the right way.

[**Asciinema**](https://asciinema.org/) provides a lightweight, purely text-based approach to terminal recording, which allows you to make lossless recordings that can then be shared directly or rendered to animated SVG, animated GIF, or video. It surprised me just how many popular open source projects on GitHub make use of Asciinema — I would highly recommend checking it out.


![Example Asciinema screencast converted to a GIF (credit: create-react-library) Note that the quality of this embedded GIF is much lower than the animated SVG in the linked readme as discussed below.](https://prod-files-secure.s3.us-west-2.amazonaws.com/f467702f-9f5e-4653-bed9-5e0f3d612bbf/dd51c676-a398-43be-ac67-1fb524b22fa8/crl.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMO24GTI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T013118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD5KufM0arigdqsxA3mC8Vhk4CJGdUzzCdiIC%2FjqXIRmAIhALD6DrOpu4GXMT0J31ZW32LqGyjQ2NBIca1Mt9RDJGVXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBlpEDLG5YQAS7DMYq3AMvUg2mN%2BbYM7QlsgG%2FUVw3ORZf1%2B%2Ft%2BoKCMgIJg2Qi%2FMarIFgbEunAuimFd8Q37wD76bZfO7HM9CfDqS7J%2FqBDEUWrGzp5GhI9XjugBIFOM5keHfCx1iz6Qn%2BhrxWHdpqvBSzrDVrhvfzoISeh5LSgt%2F6hZgBev%2BraFE95ofat8d5SVNYpR0izxYWVOpKNVcmHGb0Zd9SygsfYqNXRCQSJbiHuEDTH3aCmseDLIUKWqgVVjQ%2BeO0vcWwSCPJDugJIFBzEsDAIWSRNFD0lbEvoHmgQM4ndYYPCUQokVXcQIB6y8Eoxrtu1cwFzga9tU%2B2BEVw4uIIeZq2mjhv5SFMP%2FHTxwdaAhnban4OMtGP3eXUcBtXWxi6x1v1n7Cosl7DW1kJhkiNk2FAq%2FWhuPrpa5UlvMjKDCMauQTF5oP%2F0XSN2NhObLWUktRxAc1SjzfOGIbsYjAgK3FS0t7RpUskQqYLww63hkV1EJG8HMFGk1Vs8hTNHw7MjmS68GrF010lDJHVfqqw%2BWivsFQklphQzxODpj8u7OKIy4%2BwffLwGEmFujmgm4i7OBK3X2zZ38x%2BvW6ZiWGbPRfc90VzPVJw391DQ3c1cuXkHYjqjg9DlRbmU8xN9iQFbqt8c6yTCSjPnBBjqkAYvYU7roTGih26n9BD7jAj61kUwNGww0KjXAOzAmkOeUVstNCGKBWXv0zharKF8yXdH9vny6OZJmxyiGJuBfYZwKWVVK1H0asLE6a3HmVtbvydYGdNe5ZEipZbwPlhealBKog1t0NeDDHtfQ3GB5jEq4UbKKPd4SK5PASqN8%2BzsWoyQttkTEHDFzlsXDzCUF0R62rIV0TK0aKJd0pABjy7xohU8H&X-Amz-Signature=abf22cc8278e6b24724569486dc4f4b4b0528aebc16a02d94420f15768252a14&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Animated SVG or GIFs?**


We all know GIFs are a horribly inefficient, lossy format, but let’s dig a little deeper into this particular use case.


Compare the above embedded screencast gif to the animated SVG of the same screencast from the [readme](https://github.com/transitive-bullshit/create-react-library). It’s difficult to embed an inline comparison side-by-side, but the animated SVG is **significantly sharper and smaller**, coming in at 73kb vs 4.4MB for the lower quality GIF.


Why is this even a discussion then? Well, you can’t exactly include custom HTML in a Medium blog post, now can you? And for that matter, there are a lot of places where using custom animated SVGs won’t fly, and for the foreseeable future, GIFs will live on as a fallback for those use cases. But open source authors, please consider using animated SVG versus GIFs for your GitHub projects!


There are some very popular open source projects on GitHub that have started using more efficient animated SVGs for their demos, such as [create-react-app](https://github.com/facebook/create-react-app), but in general, you’ll find GIFs to be much more common.


Here's a few examples of using the excellent [svg-term-cli](https://github.com/marionebl/svg-term-cli) to generate our lossless animated SVG.


```bash
# generate animated SVG
svg-term --cast 'fxdtpprue51QZkeViQurqPg8V' --out demo.svg --window --width=80 --height=24 --term=iterm2 --profile=Snazzy

# generate single frame SVG at 20 seconds into the screencast
svg-term --cast 'fxdtpprue51QZkeViQurqPg8V' --out screenshot.svg --window --width=80 --height=24 --term=iterm2 --profile=Snazzy --at 20000
```


It’s important to note that when discussing animated SVGs, we’re really talking about embedding an HTML snippet into GitHub-flavored markdown that links to an SVG file encoded with each frame as an SVG group and the animation defined via CSS keyframes (example SVG source).


```html
<p align="center">
  <img width="600" src="https://cdn.rawgit.com/transitive-bullshit/create-react-library/master/media/demo.svg">
</p>
```


Insert this HTML snippet into any GitHub-flavored markdown file to embed the linked animated SVG with optimal sharpness and low size overhead compared with a comparable GIF.


For reference, here is the screencast from [create-react-library](https://github.com/transitive-bullshit/create-react-library) we’ve been using as an example in several different formats:

- Original [asciicast](https://asciinema.org/a/167645)
- High quality [animated SVG](https://camo.githubusercontent.com/3f38f2bacbc1a6b49a5172232e8a4ccb9f10173f/68747470733a2f2f63646e2e7261776769742e636f6d2f7472616e7369746976652d62756c6c736869742f6372656174652d72656163742d6c6962726172792f6d61737465722f6d656469612f64656d6f2e737667) created with [svg-term-cli](https://github.com/marionebl/svg-term-cli)
- Low quality [GIF](https://cdn-images-1.medium.com/max/1600/1*6XX4DHE0HSHrGjiLFxmigQ.gif) created with [asciicast2gif](https://github.com/asciinema/asciicast2gif)

## **Capturing and Optimizing GIFs**


Asciinema is great for terminal-based recording, but what if you want to record a UI component or website? Well, my first and foremost answer here is to always include a usable demo if possible alongside your project, especially if it’s a frontend web project. It’s really easy to get started with GitHub [Page’s](https://pages.github.com/) free hosting!


If you do want to include a GIF, I’d recommend using either [GIPHY Capture](https://giphy.com/apps/giphycapture) or [Kap](https://getkap.co/) to record your screen and output a GIF. Alternatively, if you have a video recorded from another source, I’d recommend using [Gifski](https://github.com/sindresorhus/gifski-app) to convert the video to an as-optimized-as-possible GIF for ease of embedding.


```markdown
<!-- html snippet customizing embedded gif -->
<img src="https://cdn.rawgit.com/terkelg/prompts/master/media/number.gif" alt="example prompt" width="499" height="103" />

<!-- raw markdown can also be used to ambed a gif -->
![](https://cdn.rawgit.com/terkelg/prompts/master/media/number.gif)
```


![Quality demo GIF embedded in readme using the snippet above. (image credit: prompts by terkelg)](https://prod-files-secure.s3.us-west-2.amazonaws.com/f467702f-9f5e-4653-bed9-5e0f3d612bbf/597cca0f-7d56-4cef-ab22-09f9886e42e5/prompts.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMO24GTI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T013118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD5KufM0arigdqsxA3mC8Vhk4CJGdUzzCdiIC%2FjqXIRmAIhALD6DrOpu4GXMT0J31ZW32LqGyjQ2NBIca1Mt9RDJGVXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBlpEDLG5YQAS7DMYq3AMvUg2mN%2BbYM7QlsgG%2FUVw3ORZf1%2B%2Ft%2BoKCMgIJg2Qi%2FMarIFgbEunAuimFd8Q37wD76bZfO7HM9CfDqS7J%2FqBDEUWrGzp5GhI9XjugBIFOM5keHfCx1iz6Qn%2BhrxWHdpqvBSzrDVrhvfzoISeh5LSgt%2F6hZgBev%2BraFE95ofat8d5SVNYpR0izxYWVOpKNVcmHGb0Zd9SygsfYqNXRCQSJbiHuEDTH3aCmseDLIUKWqgVVjQ%2BeO0vcWwSCPJDugJIFBzEsDAIWSRNFD0lbEvoHmgQM4ndYYPCUQokVXcQIB6y8Eoxrtu1cwFzga9tU%2B2BEVw4uIIeZq2mjhv5SFMP%2FHTxwdaAhnban4OMtGP3eXUcBtXWxi6x1v1n7Cosl7DW1kJhkiNk2FAq%2FWhuPrpa5UlvMjKDCMauQTF5oP%2F0XSN2NhObLWUktRxAc1SjzfOGIbsYjAgK3FS0t7RpUskQqYLww63hkV1EJG8HMFGk1Vs8hTNHw7MjmS68GrF010lDJHVfqqw%2BWivsFQklphQzxODpj8u7OKIy4%2BwffLwGEmFujmgm4i7OBK3X2zZ38x%2BvW6ZiWGbPRfc90VzPVJw391DQ3c1cuXkHYjqjg9DlRbmU8xN9iQFbqt8c6yTCSjPnBBjqkAYvYU7roTGih26n9BD7jAj61kUwNGww0KjXAOzAmkOeUVstNCGKBWXv0zharKF8yXdH9vny6OZJmxyiGJuBfYZwKWVVK1H0asLE6a3HmVtbvydYGdNe5ZEipZbwPlhealBKog1t0NeDDHtfQ3GB5jEq4UbKKPd4SK5PASqN8%2BzsWoyQttkTEHDFzlsXDzCUF0R62rIV0TK0aKJd0pABjy7xohU8H&X-Amz-Signature=eae5452be6d570686507bbb10731e1b44e998fb5166ce642730709fd70ee5638&X-Amz-SignedHeaders=host&x-id=GetObject)


# **Project Screencasts**


If your project is becoming more involved or you’re launching your project to a wider audience, including walkthrough video(s) can really help with user onboarding and support.


## **Screenflow**


My go-to screen recording software is [ScreenFlow](https://www.telestream.net/screenflow/overview.htm), which is not cheap at $129, but gives you a lot of powerful, quality tools for the price, including precise rectangular screen recording, video and audio track mixing, audio voiceovers, transition effects, and more. This type of screencast is quite a bit more complicated than the screenshots and terminal session recordings we were looking at earlier.


# **Conclusion**


Developer UX is important for promoting and marketing your work, which can in turn lead to very real consequences, as getting noticed for your open source contributions is definitely one of the best ways to gain notoriety and land big job opportunities as a software engineer.


I hope some of the techniques I’ve covered help you to promote your open source projects. If you’ve found this article useful and end up creating a snazzy screenshot or animated demo, add a comment linking to your project and let me know!


And as always, don’t forget to spread the ❤️… in the form of beautiful coding demos, of course!


---


> 👉 Follow me on twitter for more awesome stuff like this [@transitive_bs](https://twitter.com/transitive_bs)

