function login(username, password) {
    if (!username || username.trim() === "") {
        throw new Error("Username không được để trống");
    }

    if (password === undefined || password === null || password === "") {
        throw new Error("Password không được để trống");
    }

    if (username === "admin" && password === "1234") {
        return {
            success: true,
            message: "Đăng nhập thành công",
            username: username
        };
    }

    throw new Error("Sai username hoặc password");
}

module.exports = { login };
