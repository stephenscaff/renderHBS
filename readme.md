# RenderHBS

A utility to compile and render handlebars templates (client side) from a data source.
Uses the Fetch API, so polyfill that if need be.

ES5 and ES6 versions included.

## Usage

Include in your project, and go like:

```
 /**
  * Render Articles
  */
import RenderHBS from '../components/_RenderHBS.js'

var data = articles_data;
var el = document.querySelector('#js-articles');
var template ='templates/article.hbs';

RenderHBS.init(data, el, template)
```

With some Handlebars template like:
```
/**
 * templates/article.hbs
 */
 {{#this}}
 <article class="post">
   <a class="post__link" href="{{article_link}}">
     <figure class="post__figure">
       <img class="post__img" src="{{article_image_src}}" alt="">
     </figure>
     <header class="post__header">
       <h3 class="post__title">{{article_title}}</h3>
       <p class="post__excerpt">{{article_excerpt}}</p>
      </header>
    </a>
 </article>
 {{/this}}
```

And then some data all like:
```
 /**
  * articles obj
  */
  var articles_data = [
  {
    "article_title": "Some Post About Some Thing",
    "article_image_src": "http://yomom.com/images/yomom.jpg",
    "article_author": "Carlos Danger",
    "article_excerpt": "This is a article that must be told...",
    "article_url": "http://yomom.com/some-article",
  },
  ...
]
```
