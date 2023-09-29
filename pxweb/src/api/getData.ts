import { paths } from './schema';
import createClient from "openapi-fetch";

export type SuccesResponse = paths["/tables/{id}/data"]["get"]["responses"][200]["content"]["application/json"];
export type QueryType = paths["/tables/{id}/data"]["get"]["parameters"]["query"];

const { GET } = createClient<paths>({ baseUrl: "/api" });

export const getData = (id: string, query: QueryType) => GET("/tables/{id}/data", {
    params: {
        query,
        path: {
            id
        },
        }
    }
)