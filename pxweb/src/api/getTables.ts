import { paths } from './schema';
import createClient from "openapi-fetch";

export type SuccesResponse = paths["/api/v2/tables"]["get"]["responses"][200]["content"]["application/json"];
export type QueryType = paths["/api/v2/tables"]["get"]["parameters"]["query"];

const { GET } = createClient<paths>({ baseUrl: "/api" });

export const getTables = (query: QueryType) => GET("/api/v2/tables", {
    params: {
        query
    }
})