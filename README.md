
This is a repository where small scripts are speed tested in the languages PHP, Python, Ruby and Node.js.

More will be added little by little and with different Frameworks.

The tests are done with Docker and with official repositories of each language to execute the scripts without dependencies, in the future if they are added with dependencies, for example for the frameworks. For the frameworks, a library in GO will be used to measure the response.

The times may vary depending on the machine where it is used, I use it in my personal computer, but I know that the difference will be more or less the same.

Any contribution or suggestion to suggestion the test is welcome.

# PHP
## Fibonacci 
```
docker container run --rm -v $(pwd):/app/ php:7.4-cli php /app/php/Fibonacci.php
```
### Output 
`0.0042481422424316`

## Read Website
```
docker container run --rm -v $(pwd):/app/ php:7.4 php /app/php/ReadWeb.php
```
### Output
```
48621
0.16656184196472
```
