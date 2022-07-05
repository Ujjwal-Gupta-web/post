const base = "http://localhost:5000";


export const get_user = async () => {
  const res = await fetch(`${base}/user/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token":localStorage.getItem("user")
    },
  });
  const ans = await res.json();
  return ans;
};

export const get_user_by_id = async (id) => {
  const res = await fetch(`${base}/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token":localStorage.getItem("user")
    },
  });
  const ans = await res.json();
  return ans;
};

export const login_user = async (obj) => {
    const res = await fetch(`${base}/user/login`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans;
};

export const signup_user = async (obj) => {
    const res = await fetch(`${base}/user/signup`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans;
};
