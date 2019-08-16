# This is a little exercise

Proof of concept on a very basic calculation problem.

# Prerequisites
* NodeJS (10.16.0)
* NPM (6.9.0)
* git

# Install
Execute the following commands:
```
npm i
```
## IMPORTANT
This project has a json file that emulates a db, if you want to create a new data file, you can execute the command:
 ```
npm run fake-db
```
But, **It is not necessary to run to test the project from your git cloning**.


# Test
To run the test commands, you must execute the following in the terminal
```
npm test
```

# Reports/Analytics
If you want to execute the functions via terminal, you can use the following option:
Calculate real profit
```
./scripts/profit.js --portafolio=89522 --startDate=20180101 --endDate=20180101
```
Calculate ideal profit
```
./scripts/idealProfit.js --portafolio=89522 --startDate=20180101 --endDate=20180101 
```
calculate non-payment percentage
```
./scripts/noPaymentPercent.js --portafolio=89522 --startDate=20180101 --endDate=20180101 
```



