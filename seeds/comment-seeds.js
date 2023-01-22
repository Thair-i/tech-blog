const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I Love Traveling ",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Test",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I like dogs",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;