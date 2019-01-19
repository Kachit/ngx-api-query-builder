import { QueryBuilderService } from './query-builder.service';

export const QueryBuilderProvider = {
    provide: QueryBuilderService,
    useFactory: QueryBuilderFactory
};

export function QueryBuilderFactory() {
    return new QueryBuilderService();
}
