class RedditAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    getRedditPost(postId) {
      fetch(`https://www.reddit.com/api/info.json?id=${postId}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // Process the response data
          console.log(data);
          // Extract the post details from the response and perform further actions
          // For example:
          const post = data.data.children[0].data;
          console.log('Post title:', post.title);
          console.log('Author:', post.author);
          console.log('Score:', post.score);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
  
  // Usage:
  const apiKey = 'tmtP_5uW_LPBN5TaqeddBQ';
  const redditApi = new RedditAPI(apiKey);
  const postId = '13yfvki';
  redditApi.getRedditPost(postId);

  console.log("hello world")