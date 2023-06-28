# React Merchants

> React merchants

## To run

```
npm install
npm start
open http://localhost:3004
```

{{range recentContributions 10}}
Name: {{.Repo.Name}}
Description: {{.Repo.Description}}
URL: {{.Repo.URL}})
Occurred: {{humanize .OccurredAt}}
{{end}}
