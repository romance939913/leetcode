/*
answer = https://github.com/Shrewbitz/BBproblems/blob/master/bbcurrencyexchange.js
Q: design a system that is a currency calculator 
(pretend api is built and you can pull the data in any format)

[['USD', 'JPY', 103], ['USD', 'SEK', 10], ['USD', 'RUB', 91], ['EUR', 'AUD', 1.5], 
['GBP', 'JPY', 141], ['GBP', 'EUR', 1.1]]
so 1 usd is 103 jpy

but what if there is no direct way. like USD to GBP?
how do we find that? Can we incorporate a cache?

strategy:
Make searching for a conversion between any two values in our input array O(1)
upon construction: for each exchange passed in out initial array ['CR1', 'CR2', rate], 
create a key in our state for the first country and the second country. 
Set each key = an empty object which will contain its exchange rates. Something like this:
this.currencies = {
    'USD': {
        'JPY': 103,
        'SEK': 10,
        'RUB': 91,
    },
    'JPY': {
        'USD': 0.0097,
        'GBP': 0.00709,
    }
    'EUR': {
        'AUD': 1.5,
    },
    'GBP': {
        'EUR': 1.1,
        'JPY': 141,
    },
}

Searching for non-direct exchanges:
conduct a breadth first search where the function looks through every one of the
result (top) currency's direct exchange rates for the start currency (bottom). if the
exchange doesn't exist directly, look through each direct exchange's children to see
if they have a direct exchange with our desired currency.
Meanwhile passing along the rate of exchange up to the current currency:
path * currentExchange
for each currency in the path

incorporating a cache:
This will prevent that long BFS method from executing as often^^


outcome: 
This will make for an expensive object construction, but now looking up the
exchange rate of any two currencies a constant time operation
*/

class Exchange {
    constructor(exchanges) {
        this.currencies = {};
        this.cache = {};
        this.addCurrencies(exchanges);
    }

    find(top, bottom) {
        if (!!this.currencies[top][bottom]) {
            console.log("answer found in original data structure")
            return this.currencies[top][bottom];
        } else if (this.cache[top+bottom]) {
            console.log("used cache to find the answer!")
            return this.cache[top+bottom];
        } else {
            let queue = [top, 1];
            let set = new Set();
            set.add(top);
            while (queue.length) {
                let crncy = queue.shift();
                let rate = queue.shift();
                if (this.currencies[crncy][bottom]) {
                    console.log("answer found through BFS");
                    this.cache[top + bottom] = rate * this.currencies[crncy][bottom];
                    return rate * this.currencies[crncy][bottom];
                } else {
                    let keys = Object.keys(this.currencies[crncy]);
                    for (let i = 0; i < keys.length; i++) {
                        if (set.has(keys[i])) continue;
                        set.add(keys[i]);
                        queue.push(keys[i], rate * this.currencies[crncy][keys[i]])
                        if (!this.currencies[top][keys[i]] && !this.cache[top+keys[i]]) {
                            this.cache[top+keys[i]] = rate * this.currencies[crncy][keys[i]]
                        }
                    }
                }
            }
        }
        return "unable to convert with current data";
    }

    addCurrencies(exchanges) {
        exchanges.forEach(sub => {
            let first = sub[0];
            let second = sub[1];
            let rate = sub[2]
            if (!this.currencies[first]) this.currencies[first] = {};
            this.currencies[first][second] = rate;
            if (!this.currencies[second]) this.currencies[second] = {};
            this.currencies[second][first] = 1 / rate;
        })
    }
}

let x = new Exchange([['USD', 'JPY', 103], ['USD', 'SEK', 10], ['USD', 'RUB', 91], 
['EUR', 'AUD', 1.5], ['GBP', 'JPY', 141], ['GBP', 'EUR', 1.1]])

// console.log(x.currencies);
console.log(x.find("USD", "JPY")) // => 0.0097
console.log(x.find("GBP", "USD")) // => 1.36
console.log(x.find("GBP", "RUB")) // => 124.5728
console.log(x.find("GBP", "AUD")) // => 1.65
console.log(x.cache);
