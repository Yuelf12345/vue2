const Koa = require('koa')
const Router = require('koa-router')    //路由管理
const { koaBody } = require('koa-body') //解析参数
const cors = require('koa2-cors')       //cors跨域

const jwt = require('jsonwebtoken');

const app = new Koa()
const router = new Router()

// app.use(cors({
//     origin: 'http://localhost:3000',    // 前端地址  origin: '*' 允许所有地址
//     credentials: true
//   }));
app.use(koaBody())
app.use(router.routes())


app.use((ctx, next) => {
    ctx.body = '后台'
    next()
})


router.post('/login', (ctx, next) => {
    const { name } = ctx.request.body
    console.log('用户名:', name);
    ctx.body = {
        code: 200,
        msg: '登录成功',
        data: {
            token: jwt.sign({ name }, 'demo', { expiresIn: '10h' }),
        }
    }
})
router.get('/getData', (ctx, next) => {
    // 频道请求头有没有token
    let token = ctx.header.authorization?.replace('Bearer ', '') || ''
    console.log('token',token);
    if(token){
        decoded = jwt.verify(token, 'demo');
        console.log('decoded',decoded);
        const {name} = decoded
        if(name == 'admin'){
            ctx.body = {
                code: 200,
                data: {
                    msg:'admin数据'
                }
            }
        }else{
            ctx.body = {
                code: 200,
                data: {
                    msg:'supAdmin数据'
                }
            }
        }
    }else{
        ctx.body = {
            code: 200,
            data: {
                msg:'没有权限'
            }
        }
    }
})


app.listen(5000, () => {
    console.log('服务器已启动,请访问http://localhost:5000');
})