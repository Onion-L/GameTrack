import Mock from 'mockjs';
import {newsTemplate} from "./module/newsTemplate.js";


// 生成包含图片的新闻数据数组
const newsData = Mock.mock('/mock/news','get',{
    'list|100': [newsTemplate] // 生成包含 100 条新闻数据的数组
}).list;
