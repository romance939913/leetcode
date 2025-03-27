/*
Implement the UndergroundSystem class:

void checkIn(int id, string stationName, int t)
A customer with a card id equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
void checkOut(int id, string stationName, int t)
A customer with a card id equal to id, gets out from the station stationName at time t.
double getAverageTime(string startStation, string endStation)
Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.

Example 2:
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667
 

Questions: are averages affected by the time of the day? 
Should there be a rush hour component?

Strategy:
Goal is to make every method O(1) time complexity
Instance variables
this.currentRiders = {
    riderId: ["departureStation", time]
};
this.routes = {
	“departureStation”: {
		“destinationStation1”: [avg, tripCount],
		“destinationStation2”: [avg, tripCount]
    },
}

Upon checkin:
enter into currentRiders => [id] = [“departure station”, time]

Upon checkout:
Find the currentRider’s departure station in the currentRider’s table
Find the station in this.departures, and it’s corresponding destination
execute ((avg * tripCount) + (t2 - t1))  / (tripCount + 1) to get new average
Increment trip count
Remove currentRider

Upon GetAverageTime
Index into departures, index into corresponding destination, return avg;

outcome: all operations are O(1) Time complexity
*/
class UndergroundSystem {
   
}

let undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge"));       // return 14.00000. 
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));          // return 11.00000. 
undergroundSystem.checkIn(10, "Leyton", 24);
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));          // return 12.00000
