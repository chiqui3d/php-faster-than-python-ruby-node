
This is a repository where small scripts are speed tested in the languages PHP, Python, Ruby and Node.js.

More will be added little by little and with different Frameworks.

The tests are done with Docker and with official repositories of each language to execute the scripts without dependencies, in the future if they are added with dependencies, for example for the frameworks. For the frameworks, a library in GO will be used to measure the response.

The times may vary depending on the machine where it is used, I use it in my personal computer, but I know that the difference will be more or less the same.

The first frameworks to be analyzed will be:

* TS.ED (Node.js) https://github.com/TypedProject/tsed
* Symfony (PHP) https://github.com/symfony/symfony
* Laravel (PHP) https://github.com/laravel/laravel
* Ruby on Rails (Ruby) https://github.com/rails/rails
* Django (Python) https://github.com/django/django

Any contribution or suggestion to suggestion the test is welcome.

> In these first tests it is demonstrated that PHP is faster, and it still remains to add tests with version 8 with JIT

* `--rm` will remove the container after execution
* `-v $(pwd):/app/` will mount current directory
* `php:7.4` i is the image
* `php /app/php/Fibonacci.php` is the command which will be executed after the container is created

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
# Ruby
## Fibonacci
```
docker container run --rm -v $(pwd):/app/ ruby:2.7 ruby /app/ruby/Fibonacci.rb
```
### Output
`0.0191022`

## Read Website
```
docker container run --rm -v $(pwd):/app/ ruby:2.7 ruby /app/ruby/ReadWeb.rb
```
### Output
```
13872
0.2795085
```
# Python
## Fibonacci
```
docker container run --rm -v $(pwd):/app/ python:3.9 python /app/python/Fibonacci.py
```
### Output
`0.022989988327026367`

## Read Website
```
docker container run --rm -v $(pwd):/app/ python:3.9 python /app/python/ReadWeb.py
```
### Output
```
13847
0.7469260692596436
```
And adding the time before adding the request library
`0.15877413749694824`

# Node.js
## Fibonacci
```
docker container run --rm -v $(pwd):/app/ node:14 node /app/node/Fibonacci.js
```
### Output
`0.014000000000000012`

## Read Website
```
docker container run --rm -v $(pwd):/app/ node:14 node /app/node/Fibonacci.js
```
### Output
```
48601
0.22399999999999998
```

Also while adding other tests, you can see other types of Benchmarks, where you can also see the great speed of PHP, along with other frameworks.

* https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=fortune&l=zijzzz-1r
* https://github.com/the-benchmarker/web-frameworks
