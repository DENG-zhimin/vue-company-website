import { Ref, ref } from 'vue';

export type ApiRequest = () => Promise<void>;

export interface UsableAPI<T> {
  response: Ref<T | undefined>;
  request: ApiRequest;
}

function useApi(url: RequestInfo, options: RequestInit) {
  const response: Ref = ref();
  const request = async () => {
    const res = await fetch(url, options);
    const data = res.json();
    response.value = data;
  };
  return {
    response,
    request,
  };
}
export { useApi };
export default useApi;
