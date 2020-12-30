/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl 
and it returns a short URL such as http://tinyurl.com/4e9iAk.
Design the encode and decode methods for the TinyURL service. There is no restriction on 
how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL

Encodes a URL to a shortened URL.

@param {string} longUrl
@return {string}

example: 
input: 'https://www.thisisasuperlongurlyowhatisgoingonwiththisurldude.com/asjhfajdshfa;osdfhajdsfhajksdhfakjsdhkjrgbqouwth0q9ru238ytqu342ythu/++/sdjkfasdlkfjadsl/'
output: 'https:tinyurl.com/a4d321'
output: 'tinyurl/'
*/
const globalState = {

}

var encode = function (longUrl) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length
    let alreadyInState = true;
    while (alreadyInState) {
        let aN = ''
        while (aN.length <= 6) {
            let idx = Math.random(0, characters.length)
            aN += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        if (!globalState[aN]) {
            let shortUrl = `https:tinyurl.com/${aN}`
            globalState[shortUrl] = longUrl
            return shortUrl
        }
    }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

// input:'https:tinyurl.com/a4d321'
// output:'https://www.thisisasuperlongurlyowhatisgoingonwiththisurldude.com/asjhfajdshfa;osdfhajdsfhajksdhfakjsdhkjrgbqouwth0q9ru238ytqu342ythu/++/sdjkfasdlkfjadsl/'

var decode = function (shortUrl) {
    if (!!globalState[shortUrl]) {
        return globalState[shortUrl]
    } else {
        return 'error'
    }
};

let a = encode('thisisisakjfajskghjklashga')
let b = decode(a);
console.log(a);
console.log(b)

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */