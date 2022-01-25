export const _fetch = <ResponseType = any>(url: string, options?: RequestInit): Promise<ResponseType> =>
  new Promise(async (resolve, rejects) => {
    try {
      let ok: boolean;
      const response = await fetch(url, options);

      ok = !Boolean(response.status >= 400);

      const json = await response.json();

      if (!ok) {
        json.status = response.status;
        rejects(json as ResponseType);
      }

      resolve(json);
    } catch (error) {
      rejects(error);
    }
  });
