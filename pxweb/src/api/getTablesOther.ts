import { paths } from './schema';

export type SuccesResponse = paths["/api/v2/tables"]["get"]["responses"][200]["content"]["application/json"];

export const getTables = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v2/tables`);
        if (response.status === 200) {
            const data = await response.json();
            return data as SuccesResponse;
        } else {
            throw "No response";
        }
    } catch (e) {
        console.log('e', e);
    }
}