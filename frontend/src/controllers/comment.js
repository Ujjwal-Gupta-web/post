export const get_comments = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const ans = await res.json();
    return ans;
  };