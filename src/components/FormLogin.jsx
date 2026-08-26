import {useState} from "react";

function FormLogin(){
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.email.includes("@")) {
            setError("Email tidak valid");
            return;
        }
        if (form.password.length < 6) {
            setError("Password harus minimal 6 karakter");
            return;
        }
        // Jika semua validasi berhasil, reset error dan lakukan login
        setError("");
        // Tambahkan logika login di sini
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default FormLogin;