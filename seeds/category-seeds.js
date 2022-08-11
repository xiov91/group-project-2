const { Category } = require('../models');

const categoryData = [
    {
        name: "Site News & Announcements",
        description: "Anything new and exciting will be posted here!",
        post_id: 1,
        user_id: 2
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;