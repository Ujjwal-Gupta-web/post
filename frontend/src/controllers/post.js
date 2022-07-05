const base = "http://localhost:5000";

export const get_posts = async () => {
    const res = await fetch(`${base}/post/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("user")
        },
    });
    const ans = await res.json();
    return ans;
};

export const get_post_by_id = async (id) => {
    const res = await fetch(`${base}/post/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("user")
        },
    });
    const ans = await res.json();
    return ans;
};

export const add_post = async (obj) => {
    const res = await fetch(`${base}/post/`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("user")
        },
    });
    const ans = await res.json();
    return ans;
};

