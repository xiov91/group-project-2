const { Post } = require('../models');

const postData = [
    {
        title: 'This is a post!',
        post_text: 'It is a really good post, too.',
        category: 'news',
        user_id: 1
    },
    {
        title: 'This is cooler a post!',
        post_text: 'Definitely, try not to think about it.',
        category: 'art',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;