const Koa = require('koa');
const route = require('koa-route');
const cors = require('@koa/cors');

const app = new Koa();

const getUserInfo = ctx => {
    console.log('接收到接口调用，getInfo')
    ctx.response.type = 'json';

    ctx.response.body = {data: 'test'};
};

const updateUserInfo = ctx => {

};

app.use(cors())
app.use(route.get('/userinfo/get', getUserInfo));
app.use(route.get('/userinfo/update', updateUserInfo));

app.on('error', (err, ctx) =>{
    console.error('server error', err);
});
  
app.listen(3010);
