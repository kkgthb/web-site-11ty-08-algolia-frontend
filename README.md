# An algolia front-end using CDN-based Algolia Instant Search libraries

This codebase has nothing to do with 11ty.  When I developed the code at first, I was just coding in a single `c:\example\algoliaindex.html` and double-clicking it to open it in my browser.

I've 11ty-ified the single HTML file as a convenient way to break up the codebase into more legible parts, as a way to let it run in a `localhost` environment _(which makes `<FORM>` submissions actually work)_, and as a way to use values stored in a `/.env` file rather than hand-typing an application ID, application key, & index name into `<SCRIPT>` tags.

FYI, the `.env` file looks like this:

```
ALGOLIA_APP_ID=ABC123DEF987
ALGOLIA_API_KEY=1abcde234ffed5678cbaabcdef909876efdcba
ALGOLIA_INDEX_NAME=really_cool_index_name
```

---

## JavaScript library instant search

So far, at my `example.com/search01` path, I've successfully pulled 3 environment variables _(my Algolia app ID, my front-end Algolia search API key, and my Algolia index name)_ into some front-end JavaScript that injects a bunch of DOM into the following HTML:

```html
<div id="search-searchbar" class=""></div>
<div id="search-poweredby" class=""></div>
<div id="search-hits" class=""></div>
```

Check out `/src/computed_pseudo_pages/singleton_search_page_01.liquid` and the `<SCRIPT>` tags it leverages, which I broke out into `/src/_includes/components/search_approach_01/initial_imports.html` and `/src/_includes/components/search_approach_01/widgets_script.html`.

This architecture let me embed search into my personal web site using Algolia's CDN-distributed Instant Search libraries.

I actually did simply hand-type the application ID, application key, & index name into `<SCRIPT>` tags the HTML of a web page on my site.  No fancy plugins or anything like that.

![Screenshot of the search page](https://katiekodes.com/images/screenshots/screenshots-algolia/screenshot-algolia-search-simple-frontend.png)

---

## Non-JavaScript search

From the `example.com` home page, you can submit a search into the "**Search approach #1**" box and it will take you to `example.com/search01/?query=your_query`, and actual search results for `your_query` will be in the search results, so that's also neat.

I have this architecture on every page of my site, right below the header.  I like that it avoids injecting site-wide client-side JavaScript from Algolia, when very few people actually search my site.

---

## To do:  click tracking

I'd really like to do click tracking to see which results people actually enjoy when they search my site.

Sadly, I am having the darndest time figuring out how to do _that_ with Algolia's CDN-based libraries.

Maybe if I'm lucky, I'll figure it out and post it here.