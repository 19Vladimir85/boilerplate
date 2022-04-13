export const getAllPosts = () => fetch('https://api.react-learning.ru/posts', {
  headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTYiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.NSpeS2cCntT5QxThI6pbpuqytZRKZu9Q3IsfLG7f3uA'
  }
})
  .then(res => res.json());

  export const getUser = () => fetch('https://api.react-learning.ru/users/me', {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTYiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.NSpeS2cCntT5QxThI6pbpuqytZRKZu9Q3IsfLG7f3uA'
    }
  })
    .then(res => res.json());

    export const updateLike = (isLiked, id) => fetch(`https://api.react-learning.ru/posts/likes/${id}`, {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTYiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.NSpeS2cCntT5QxThI6pbpuqytZRKZu9Q3IsfLG7f3uA',
        "Content-type": "application/json",
      }, 
      method: isLiked? "DELETE":"PUT"

    })
      .then(res => res.json());

      export const deletePost = (id) => fetch(`https://api.react-learning.ru/posts/${id}`, {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTYiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.NSpeS2cCntT5QxThI6pbpuqytZRKZu9Q3IsfLG7f3uA',
        "Content-type": "application/json",
      }, 
      method: "DELETE"
    })
    .then(res => res.json());

