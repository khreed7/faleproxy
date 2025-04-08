// Polyfill for browser globals used by cheerio/undici
global.ReadableStream = global.ReadableStream || class ReadableStream {};
global.FormData = global.FormData || class FormData {};
global.Blob = global.Blob || class Blob {};
global.File = global.File || class File {};
global.Headers = global.Headers || class Headers {
  constructor() {}
  append() {}
  set() {}
  get() {}
};
global.Request = global.Request || class Request {};
global.Response = global.Response || class Response {};

// Make sure these are defined for the nock dependency
global.fetch = global.fetch || (() => Promise.resolve());
global.WebSocket = global.WebSocket || class WebSocket {};

// Silence console.error during tests
const originalConsoleError = console.error;
console.error = (...args) => {
  // Don't print "Error fetching URL" messages during tests
  if (args[0] === 'Error fetching URL:') return;
  originalConsoleError(...args);
};
