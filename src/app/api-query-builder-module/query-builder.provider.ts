import { QueryBuilderService } from './query-builder.service';

export const QueryBuilderProvider = {
    provide: QueryBuilderService,
    useFactory: function() {
        return new QueryBuilderService();
    }
};
