# Landing page project: DAMA

[<img src="./src/assets/img/logo-dark.svg">](http://damacad.com.br/)

Initially I thought a single landing page could be done from 'scratch' with only HTML, CSS and JS, but it turned out that the project had a lot of dynamic features, animations and uniquely styled elements, resulting in too long of HTML and CSS code.

It would be much easier to work if I could just split the code in components, so that's what I did — with ReactJs.

Although it and other modules I used increase the final build folder size, the productivity I gained and time I saved cannot be dismissed. And, of course, my client didn't mind not having a light speed first load time.

## :zap: Core technologies: ReactJS + Typescript

![Image of Yaktocat](https://res.cloudinary.com/practicaldev/image/fetch/s--w2IiZCYn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h81icix026ga3zzgtozm.png)

## :gear: Main modules I used:

- Node-Sass;
- Chakra-UI;
- React-Slick;
- React-Snap;

## :question: How I solved the crawling problem of CRA default build:

The default build folder of Create React App template is a totally dynamic web app, so search engines can't crawl it properly.

Although it is far from a perfect solution, I found out React-Snap, which can create a static HTML file from the default build folder that can then be hydrated with the matching JS bundles on the client side.

Gladly, I had only a few issues trying to make some Chakra-UI components work properly with React-Snap, mainly due to conflicts between hydration and JS-generated-CSS.

### To try this app by yourself use `yarn start` or `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
