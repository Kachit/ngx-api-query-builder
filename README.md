# Angular API query builder module
Angular API query filter builder

```bash
npm i angular-api-query-builder
```

```js
//app.module.ts
import { ApiQueryBuilderModule } from 'angular-api-query-builder';

@NgModule({
  imports: [
    ...
    ApiQueryBuilderModule,
  ],
})
export class AppModule { }


//your-service-class.ts
import { QueryBuilderService } from 'angular-api-query-builder';
let qb = new QueryBuilderService();
let params = qb.eq('active', true).build();
```

```http request
GET http://api.your-domain.com/foo?filter[$eq][active]=true
```
