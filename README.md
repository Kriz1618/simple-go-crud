
## Init go project
`go mod init github.com/Kriz1618/go-react-crud`

## Install dependecies
`go get github.com/gofiber/fiber/v2`
`go get go.mongodb.org/mongo-driver`
`go get go.mongodb.org/mongo-driver/mongo`
`go install github.com/cosmtrek/air@latest`

## Run
`go run .` 

*In another console type `cd client/ && npm run start`*


## Deploy to heroku
* `heroku login`
* `heroku create go-reat-crud`
* git flow `git add . / git commit -m`
* `git push heroku master`

**After pushing the code run build in the client, if deploy fails, modify the go version to the previous and try again**