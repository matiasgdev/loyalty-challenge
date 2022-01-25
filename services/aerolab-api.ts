import { aerolabApiEndpoint } from "../misc/aerolab-endpoint";
import { resources } from "../misc/resources";
import { Data } from "../types/Data";
import { Resources } from "../types/Resources";
import { _fetch } from "../utils/_fetch";

export const aerolabApi = <T = any>(resource: string, data?: Data['redeem'] | Data['add-points']) => {
  const endpoint = resources[resource as Resources];
  const baseUrl = process.env.AEROLAB_API_BASE_URL ?? aerolabApiEndpoint;
  const url = baseUrl.concat(endpoint);

  const options: RequestInit = {
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
    },
  };

  if (data) options.body = JSON.stringify(data);

  return _fetch<T>(url, options);
};