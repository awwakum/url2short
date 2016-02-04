# url2short
URL Shortener

### demo
https://url2short.herokuapp.com/

User stories:

- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- When I visit that shortened URL, it will redirect me to my original link.
    
### Example creation usage: 
```sh
https://url2short.herokuapp.com/new/https://www.google.com 
```
### If you want to pass a site that doesn't exist (or an invalid url) for some reason you can do:
```sh
https://url2short.herokuapp.com/new/invalid?allow=true
```
### Example creation output: 
```sh
url is found: http://freecodecamp.com/news	Short url is: https://url2short.herokuapp.com/Vkj8Kb2tg
```
### Usage:
```sh
https://url2short.herokuapp.com/4kgNpQnKe
```
### Will redirect to:
http://freecodecamp.com/news