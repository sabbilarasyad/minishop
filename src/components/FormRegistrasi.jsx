import { useState } from "react";

function FormRegistrasi() {
    const [form, setForm] = useState({
        email: "", 
        password: "", 
        konfirmasiPassword: "" 
    });
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
        if (form.password !== form.konfirmasiPassword) {
            setError("Password dan konfirmasi password tidak cocok");
            return;
        }
        // Jika semua validasi berhasil, reset error dan lakukan registrasi
        setError("");
        // Tambahkan logika registrasi di sini
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
            <div>
                <input
                    type="password"
                    placeholder="Konfirmasi Password"
                    value={form.konfirmasiPassword}
                    onChange={(e) => setForm({ ...form, konfirmasiPassword: e.target.value })}
                />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Registrasi</button>
        </form>
    );
}

export default FormRegistrasi;