/**
 * Representation of HTTP methods.
 */
export enum Method {
  // The `GET` variant.
  Get = 0,
  // The `POST` variant.
  Post,
  // The `HEAD` variant.
  Head,
  // The `DELETE` variant.
  Delete,
  // The `PUT` variant.
  Put,
  // The `PATCH` variant.
  Patch,
  // The `ALL` variant.
  All,
  // The `OPTIONS` variant.
  Options,
  // The `TRACE` variant.
  Trace,
  // The `CONNECT` variant.
  Connect,
}

/**
 * Returns the string representation of HTTP methods.
 */
export const METHOD_TEXT: Readonly<Record<Method, string>> = {
  [Method.Get]: 'GET',
  [Method.Post]: 'POST',
  [Method.Head]: 'HEAD',
  [Method.Delete]: 'DELETE',
  [Method.Put]: 'PUT',
  [Method.Patch]: 'PATCH',
  [Method.All]: 'ALL',
  [Method.Options]: 'OPTIONS',
  [Method.Trace]: 'TRACE',
  [Method.Connect]: 'CONNECT',
};
