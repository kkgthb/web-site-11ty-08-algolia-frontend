# An algolia front-end using CDN-based Algolia Instant Search libraries

This codebase has nothing to do with 11ty -- I'm just using 11ty as a convenient way to break up an HTML codebase and let it run in a `localhost` environment using values stored in a `/.env` file.

The `.env` file looks like this:

```
ALGOLIA_APP_ID=ABC123DEF987
ALGOLIA_API_KEY=1abcde234ffed5678cbaabcdef909876efdcba
ALGOLIA_INDEX_NAME=really_cool_index_name
```

## JavaScript library instant search

So far, at my `example.com/search01` path, I've successfully pulled 3 environment variables _(my Algolia app ID, my front-end Algolia search API key, and my Algolia index name)_ into some front-end JavaScript that injects a bunch of DOM into the following HTML:

```html
<div id="search-searchbar" class=""></div>
<div id="search-poweredby" class=""></div>
<div id="search-hits" class=""></div>
```

Check out `/src/computed_pseudo_pages/singleton_search_page_01.liquid` and the `<SCRIPT>` tags it leverages, which I broke out into `/src/_includes/components/search_approach_01/initial_imports.html` and `/src/_includes/components/search_approach_01/widgets_script.html`.

## Non-JavaScript search

From the `example.com` home page, you can submit a search into the "**Search approach #1**" box and it will take you to `example.com/search01/?query=your_query`, and actual search results for `your_query` will be in the search results, so that's also neat.

Check out `/src/computed_pseudo_pages/singleton_home_page.liquid` and the `<SCRIPT>` tags it leverages, which I broke out into `/src/_includes/components/search_approach_01/initial_imports.html` and `/src/_includes/components/search_approach_01/widgets_script.html`.

## To do:  click tracking

The two architectures above were enough to embed search into my personal web site _(I literally just hand-typed the application ID, application key, & index name into `<SCRIPT>` tags the HTML of a web page on my site)_.

However, I'd really like to do click tracking, and I am having the darndest time figuring out how to do _that_ with Algolia's CDN-based libraries.