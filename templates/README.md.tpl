# React Merchants

> React merchants

## To run

```
npm install
npm start
open http://localhost:3004
```

{{range rss "https://domain.tld/feed.xml" 5}}
Published: {{humanize .PublishedAt}}
{{end}}
