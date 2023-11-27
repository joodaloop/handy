# Handy

## text-only
* CSS reset, cross-browser consistency. one for UI, one for text pages.
* Manipulate CSS custom properties.

## generation
* UUIDs – *handy.generate.uuidv4()*
* Snowflake-ids – *handy.generate.snowflake()*
* nanoid

## hashing: 
  * MD5 - *handy.hash.md5(text, salt?)*
  * SHA256 – *handy.hash.sha256(text, salt?)*
  * SHA2 – *handy.hash.sha2(text, salt?)*
  * ~[Tinyhash](https://github.com/nodeleap/tinyhash)~ 
  * Murmurhash – *handy.hash.murmur(text, salt?)*
  * scrypt – *handy.hash.scrypt(text, salt?)*

## string manipulation
* truncate text
* slugify
* strip html
* sanitise
* base64 encode/decode,
* pad
* valid CSS colours
* color conversion

## numbers
* format numbers, random in range, clamp value?
* matrix methods[transformation-matrix/src at main · chrvadala/transformation-matrix](https://github.com/chrvadala/transformation-matrix/tree/main/src)

## arrays & objects
* Shuffle – *handy.array.shuffle(array)*
* Sample – *handy.array.sample(array, numberOfElements)*
* deep merge – *handy.array.merge(array) or handy.object.merge(object)* 
* object recursive search – 
* remove duplicates – *handy.array.deduplicate(array) or handy.object.deduplicate(object)* 
* “find” predicate
* ~[https://lodash.com/docs/4.17.15](https://lodash.com/docs/4.17.15)~
* ~[https://underscorejs.org/docs/modules/findWhere.html](https://underscorejs.org/docs/modules/findWhere.html)~
* ~[https://underscorejs.org/docs/modules/where.html](https://underscorejs.org/docs/modules/where.html)~

## performance
* delay, ~[denounce, throttle](https://garden.bradwoods.io/notes/javascript/performance/debounce-throttle)~, ~[memoize](https://garden.bradwoods.io/notes/javascript/performance/memoization)~, timer
* Common animation utilities

## UI
* modals (microModal)
* tooltips (microTip, Tippy)
* slide from bottom modal?
* keyboard shortcuts
* mobile touch?
* Simple bar, TinySlider (for scroll bars)
* smooth scroll
* autocomplete
* Simple toast component
* draggable?
https://github.com/gnat/surreal


## validation
  * email
  * password
    * Only numbers, letters, special characters. Pass in an allow array .
  * phone number
  * URL-safe username
    * Params: URL-safe, maxlength, character-sensitive. Reserved routes (Django list)
  * valid URL
    * type (ftp, https, http)

## forms
* serialise form input to json
* populate form fields from json

## Fetch wrapper

## Reactivity
* global stores - https://www.arrow-js.com
* check nanostore


## Images
* canvas to blob
* convert between formats
* handle uploading?

## dates
* relative time
* Date conversion: dd-mm-yyyy, dd-mmm-yy, yyyy-mm-dd, dd-mm-y

## storage
* stringify and serialise automatically from localstorage
* set cookie, get cookie (cookie-cincher)
* wrap indexedDB (dexie, idb)

## data formats
* CSV, YAML, TOML

## web APIs
Clipboard
* copyTextToClipboard() – *handy.clipboard.getPlainText(navigator.clipboard), handy.clipboard.getRichText(navigator.clipboard)*
* pasteTextFromClipboard() – *handy.clipboard.pastePlainText(navigator.clipboard), handy.clipboard.pasteRichText(navigator.clipboard)*
* IndexedDB (wrapper that works like localstorage)
* Web Workers
* createWorker()
* postMessage()
* terminateWorker()
* Notifications
* requestPermission()
* showNotification()
* Network Information
* getConnectionInfo()
* monitorConnectivity()
* Web Audio
  * loadAudio()
  * playAudio()
  * audioFilters()

## ???
* fuzzy search (fuse.js), search
* micro-query - *handy.any(‘.selector’), handy.all(‘.selector’)*
* micro-promisify - interesting
* Google auth??? 


# Social cards

If you want Facebook/Twitter/every other app to generate a preview card for your webpage, you'll need to add these tags within the `<head>` tag. 


Facebook Open Graph tags, used by most apps.

```html
<meta property="og:url" content="https://eliza.dotink.co" />
<meta property="og:title" content="Eliza: a chatbot written in Ink" />
<meta property="og:description" content="Eliza is a simple chatbot written in Ink based on the original ELIZA from MIT AI lab." />
<meta property="og:image" content="https://eliza.dotink.co/img/eliza.jpg" />
```


Twitter Card (large image card) tags, used by...just Twitter

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@thesephist">
<meta name="twitter:title" content="Eliza: a chatbot written in Ink">
<meta name="twitter:description" content="Eliza is a simple chatbot written in Ink based on the original ELIZA from MIT AI lab." />
<meta name="twitter:image" content="https://eliza.dotink.co/img/eliza.jpg" />
```

**Note:** These tags will generate the large image, which Twitter currently renders as just an image with a small link watermark. If you want to use the smaller card (shown below), that shows the title and description, change the `content` to `summary_image` instead.


## Details

Password allowed characters follows [this list](https://owasp.org/www-community/password-special-characters)