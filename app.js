// Handle cross-origin requests in JavaScript
// For CORS, server-side configuration is required.
// JSONP example
function jsonpCallback(data) {
    console.log(data);
  }
  
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://example.com/api?callback=jsonpCallback';
  document.head.appendChild(scriptElement);
  