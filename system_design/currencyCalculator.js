/*
answer = https://github.com/Shrewbitz/BBproblems/blob/master/bbcurrencyexchange.js
Q: design a system that is a currency calculator 
(pretend api is built and you can pull the data in any format)

[['USD', 'JPY', 103], ['USD', 'SEK', 10], ['USD', 'RUB', 91], ['EUR', 'AUD', 1.5], 
['GBP', 'JPY', 141], ['GBP', 'EUR', 1.1]]
so 1 usd is 103 jpy

but what if there is no direct way.like USD to GBP
we need to do 

what if we need to cache the results?


Questions: 
What methods should our class support?
find()
add()

strategy:
We want to make searching for the conversion between any two values in our input 
array a constant time operation.
upon construction: for each exchange passed in out initial array ['CR1', 'CR2', rate], 
create a key in our state for the first country and the second country. 
Set each key = an empty object which will contain its exchange rates.
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
something like this
Also in the construction, create a commonalities obj between exchanges that aren't direct.
this.commonalities = {
    'USDGBP': 'JPY'
}
This makes it easy to calculate rate between two indirectly related currencies.
GBP JPY => 141
USD JPY => 103
GBP USD => 1.37


outcome: 
This will make for an expensive object construction, but now looking up the
exchange rate of any two currencies a constant time operation

*/

class Exchange {
    constructor(exchanges) {
        this.currencies = {};
        this.commonalities = {};
        this.addCurrencies(exchanges);
    }

    addCurrencies(exchanges) {

    }
}