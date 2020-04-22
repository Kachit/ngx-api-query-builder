import { QueryBuilderService } from './query-builder.service';
import { QueryBuilderOperator } from './query-builder-operator.enum';
import { QueryBuilderField } from './query-builder-field.enum';
import { QueryBuilderOrder } from './query-builder-order.enum';
import { HttpParams } from '@angular/common/http';

describe('QueryBuilderService', () => {
  let service: QueryBuilderService;

  beforeEach(() => {
    service = new QueryBuilderService();
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should build', () => {
    service.eq('foo', 'bar').ne('bar', 'baz');
    let result = service.build();
    let params = new HttpParams();
    params.set(QueryBuilderField.FILTER + '[foo][' + QueryBuilderOperator.EQ + ']', 'bar');
    params.set(QueryBuilderField.FILTER + '[bar][' + QueryBuilderOperator.NE + ']', 'baz');
    expect(result.toString()).toEqual(params.toString());
  });
});
