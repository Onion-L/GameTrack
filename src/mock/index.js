import Mock from 'mockjs';
import {newsTemplate} from "./module/newsTemplate.js";


// 生成包含图片的新闻数据数组
const newsData = Mock.mock('/mock/news','get',{
    'list|100': [newsTemplate] // 生成包含 100 条新闻数据的数组
}).list;

Mock.mock('/login','post',(options) => {
    const {username, password} = JSON.parse(options.body);
    console.log(options)
    console.log(username,password)
    if(username === 'admin' && password === '123456') {
        return Mock.mock({
            code: 200,
            message: 'login succeed',
            data: {
                token: Mock.Random.guid(), // 生成随机的 token
                username: 'admin',
                // 其他用户信息字段
            },
        });
    }else {
        return Mock.mock({
            code: 401,
            message: '用户名或密码错误',
        });
    }
})
