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

export const newsTemplate = {
    'newsId|+1': 1,
    'title': '@title(5, 10)',
    'content': '@paragraph(1, 3)',
    'image': function() {
        return generateRandomImageUrl();
    }
};
