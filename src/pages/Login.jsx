import { useState } from "react";
import Page from "../components/Page";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {};
    if (form.username === "user" && form.password === "123") {
      user.name = "Orxan";
      user.permission = "user";
    } else if (form.username === "admin" && form.password === "123") {
      user.name = "Admin";
      user.permission = "admin";
    }
    localStorage.setItem("token", 1);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/";
  };

  return (
    <Page title="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="form-label">Username</label>
          <input
            value={form.username}
            onChange={(e) =>
              setForm((f) => ({ ...f, username: e.target.value }))
            }
            className="form-element"
          />
        </div>
        <div className="form-control">
          <label className="form-label">Password</label>
          <input
            value={form.password}
            onChange={(e) =>
              setForm((f) => ({ ...f, password: e.target.value }))
            }
            className="form-element"
          />
        </div>
        <div className="flex justify-end">
          <button className="btn">Login</button>
        </div>
      </form>
    </Page>
  );
}

export default Login;
