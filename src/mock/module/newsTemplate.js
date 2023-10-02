// 创建一个模拟图片链接的函数
import Mock from "mockjs";

function generateRandomImageUrl() {
    const imgUrls = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/160',
        'https://via.placeholder.com/170',
        'https://via.placeholder.com/180',
        'https://via.placeholder.com/190'
    ];
    return Mock.Random.pick(imgUrls);
}

// 创建一个新闻数据的模板
export const newsTemplate = {
    'id|+1': 1, // 自增的 id
    'title': '@title(5, 10)', // 随机生成中文标题，标题长度在 5 到 10 之间
    'content': '@paragraph(1, 3)', // 随机生成中文段落，段落数在 1 到 3 之间
    'image': function() { // 随机生成图片链接
        return generateRandomImageUrl();
    }
};
