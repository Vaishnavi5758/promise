// Simulating user data
const user = {
    id: 1,
    lastActivityTime: null,
  };
  
  // Simulating a list of user's posts
  const posts = [];
  
  // Function to update the user's last activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date().toLocaleString();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  
  // Function to create a post
  function createPost(postContent) {
    return new Promise((resolve) => {
      const post = {
        id: posts.length + 1,
        content: postContent,
        timestamp: new Date().toLocaleString(),
      };
      posts.push(post);
      resolve(post);
    });
  }
  
  // Function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      const index = posts.findIndex((post) => post.id === postId);
      if (index !== -1) {
        posts.splice(index, 1);
        resolve(postId);
      } else {
        reject(`Post with ID ${postId} not found.`);
      }
    });
  }
  
  // Use Promise.all to create a post and update the user's last activity time
  Promise.all([createPost("Sample post content"), updateLastUserActivityTime()])
    .then(([post, activityTime]) => {
      console.log("Post created:", post);
      console.log("Last activity time:", activityTime);
  
      // Delete the last post
      return deletePost(posts[posts.length - 1].id);
    })
    .then((deletedPostId) => {
      console.log("Post deleted with ID:", deletedPostId);
      console.log("Remaining posts:", posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  