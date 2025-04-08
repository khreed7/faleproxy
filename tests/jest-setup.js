// Polyfill for browser globals used by cheerio/undici
global.ReadableStream = class ReadableStream {};
global.FormData = class FormData {};
global.Blob = class Blob {};
global.File = class File {};
global.Headers = class Headers {
  constructor() {}
  append() {}
  set() {}
  get() {}
};
global.Request = class Request {};
global.Response = class Response {};
