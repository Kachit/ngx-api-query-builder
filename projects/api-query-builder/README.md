# Angular API query builder module
[![Npm badge](https://img.shields.io/npm/v/@kachit/angular-api-query-builder.svg)][npm]
[![NPM downloads][npm-download]][npm]
[![npm License](https://img.shields.io/npm/l/ng-packagr.svg?style=flat-square)](https://github.com/ng-packagr/ng-packagr/blob/master/LICENSE)
![angular](https://img.shields.io/badge/angular-^9.0-lightgrey.svg?style=flat-square)  

[npm]: https://www.npmjs.com/package/@kachit/angular-api-query-builder
[npm-download]: https://img.shields.io/npm/dm/@kachit/angular-api-query-builder.svg?style=flat-square

Angular API query filter builder

```bash
npm i @kachit/angular-api-query-builder
```

```js
//app.module.ts
import { ApiQueryBuilderModule } from '@kachit/angular-api-query-builder';

@NgModule({
  imports: [
    ...
    ApiQueryBuilderModule,
  ],
})
export class AppModule { }


//your-service-class.ts
import { QueryBuilderService } from '@kachit/angular-api-query-builder';
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
