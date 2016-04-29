/*

git clone git@github.com-rogusdev:rogusdev/fauxapi.git
#touch app.js
npm install koa co-body
#npm init

if adding routes:
http://weblogs.asp.net/shijuvarghese/a-simple-crud-demo-with-koa-js

*/

var app = require('koa')(),
    parse = require('co-body');


/*

curl -s --data \
 "{\"email\":\"EMAILADDRESS\",\"password\":\"PASSWORD\"}" \
 https://ASDFSDASAS.execute-api.us-east-1.amazonaws.com/dev/auth/email/login \
 | node -e "console.log(JSON.parse(require('fs').readFileSync('/dev/stdin')))"

{ login: false }

{ login: true,
 identityId: 'us-east-1:xxxxxx-xxxxx-xxx-xxxx-xxxxxxx',
 token: 'xcxcvxcvxcvxcvxcvxcvxcvxcvxc' }

curl -s --data \
 "{\"email\":\"EMAILADDRESS\",\"password\":\"PASSWORD\"}" \
 http://localhost:3003/dev/auth/email/login \
 | node -e "console.log(JSON.parse(require('fs').readFileSync('/dev/stdin')))"

 */
app.use(function *(){
    var response = {};
    var login = yield parse.json(this);
    console.log(login);

    if (login.email == "EMAILADDRESS" && login.password == "PASSWORD")
    {
        response = {'login': true,
            'identityId': 'us-east-1:xxxxxx-xxxxx-xxx-xxxx-xxxxxxx',
            'token': 'xcxcvxcvxcvxcvxcvxcvxcvxcvxc' }
    }
    else
    {
        response = {'login' : false};
    }

    this.body = JSON.stringify(response);
});

app.listen(3003);

console.log('Started listening @ ' + new Date());
