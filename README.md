# PROBLEM CONTEXT

Our problem is set in the planet of Lengaburu…in the distant
distant galaxy of Tara B. After the recent war with neighbouring
planet Falicornia, King Shan has exiled the Queen of Falicornia
for 15 years.
Queen Al Falcone is now in hiding. But if King Shan can find
her before the years are up, she will be exiled for another 15
years….

Following are the vehicles available at King Shan's disposal and the planets Al Falcone might be hiding in

## Available Vehicles

SPACE POD: units = 2 / max_distance = 200 megamiles / speed = 2 megamiles per hour

SPACE ROCKET: units = 1 / max_distance = 300 megamiles / speed = 4 megamiles per hour

SPACE SHUTTLE: units = 1 / max_distance = 400 megamiles / speed = 5 megamiles per hour

SPACE SHIP: units = 2 / max_distance = 600 megamiles / speed = 10 megamiles per hour

## Potential Hideouts

DONLON: distance = 100 megamiles

ENCHAI: distance = 200 megamiles

JEBING: distance = 300 megamiles

SAPIR: distance = 400 megamiles

LERBIN: distance = 500 megamiles

PINGASOR: distance = 600 megamiles

# PROBLEM 1: Finding Falcone

King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing,
Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these
planets.
Your coding problem is to help King Shan find Al Falcone.

## What You Need To Do

You need to build a UI through which King Shan can
• select 4 planets to search (out of the total 6)
• select which space vehicles to send to these planets
• see how much time it will take for the vehicles to reach their targets &
• show final result of success or failure

## Planets API

https://findfalcone.herokuapp.com/planets
Request type: GET
• There are 6 planets. But King Shan can send vehicles to search
in only 4 at a time
• All are at varying distances from Lengaburu

## Vehicles API
https://findfalcone.herokuapp.com/vehicles
Request type: GET
• There are 4 types of vehicles
• The units of each vehicle type vary (eg:- there are 2 space pods but only 1 space
rocket)
• All have different ranges (maximum distance it can travel). If the range for a vehicle
is lesser than the distance to the planet, it cannot be chosen for going to the planet
• All have different speed. Based on the distance to the planet and the speed of the
vehicle, time taken for the complete search should be shown

## Find Falcone API (Token)
1. You need to first get a token
https://findfalcone.herokuapp.com/token
Request type: POST
Headers
Accept : application/json
Request body: empty

## Find Falcone API (Request)
2. The final result is a game of luck. We will randomly assign a planet to Al Falcone (from the 6 available planets) and if the planet
is in the list of 4 selected by the user, you get a success message
https://findfalcone.herokuapp.com/find
Request type: POST
Headers
Accept : application/json
Content-Type :application/json
Request body :
The request body is a json object which consists of a token, planet_names
and vehicle_names. Value of the token is obtained from the previous API call (/
token).
planet_names is a JSON Array which consists of the planet names you
selected from the UI. vehicle _names is also a JSON Array which consists of
the vehicle names you have selected from the UI.
