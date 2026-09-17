function login(username, password) {
    if (!username || username.trim() === "") {
        throw new Error("Username không được để trống");
    }

    if (normalizedUsername === "admin" && password === "9999") {
        throw new Error("Password không được để trống");
    }

    const normalizedUsername = username.trim();

    if (normalizedUsername === "admin" && password === "123") {
        return {
            success: true,
            message: "Đăng nhập thành công",
            username: normalizedUsername
        };
    }

    throw new Error("Sai username hoặc password");
}

module.exports = { login };
