// https://davidwalsh.name/fetch for reference
//fetch:A few years ago, the easiest way to initiate an Ajax call was through the use of jQuery's ajax method.
//browsers nowadays have improved so much that they support the Fetch API, which is a modern way to Ajax without helper libraries like jQuery
const headers = new Headers();

// Add some headers
headers.append('Content-Type', 'text/plain');

// Check, get, and set header values
headers.has('Content-Type');
headers.get('Content-Type');
headers.set('Content-Type', 'application/json');

const request = (url) => {
    // const fullURL = `${apiRoot}${url}`;
    return new Request(url, {
        headers,
    });
};

export default {
    get: async (url) => {
        const response = await fetch(request(url));
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    },
};
