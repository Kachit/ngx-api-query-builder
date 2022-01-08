# Angular API query filter builder
[![Npm badge](https://img.shields.io/npm/v/@kachit/ngx-api-query-builder.svg)][npm]
[![NPM downloads][npm-download]][npm]
[![npm License](https://img.shields.io/npm/l/ng-packagr.svg?style=flat-square)](https://github.com/kachit/ngx-api-query-builder/blob/master/LICENSE)
![angular](https://img.shields.io/badge/angular-^13.0-lightgrey.svg?style=flat-square)  

[npm]: https://www.npmjs.com/package/@kachit/ngx-api-query-builder
[npm-download]: https://img.shields.io/npm/dm/@kachit/ngx-api-query-builder.svg?style=flat-square

Angular API query filter builder

```bash
npm i @kachit/ngx-api-query-builder
```

```js
//your-service-class.ts
import { QueryBuilderService } from '@kachit/ngx-api-query-builder';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

let qb = new QueryBuilderService();
let http = new HttpClient();
let params = qb.eq('active', true).build();

let url = 'http://api.your-domain.com/foo';
let data = http.get(url, {params: params}).pipe(
    map((response) => { return response.data})
);
```

```http request
GET http://api.your-domain.com/foo?filter[$eq][active]=true
```
