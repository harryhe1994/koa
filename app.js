const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');


const app = new Koa();

app.use(bodyParser());

app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async (ctx, next) => {
    // ctx.response.body = '<h1>Index</h1>'
    ctx.response.body = {"name": "harry"};
});

router.post('/api/add', async (ctx, next) => {
    let body = ctx.request.body;
    console.log(body.iteration);
    ctx.response.body = body;
});

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000');