const { login } = require("./auth");

test("Smoke Test - Đăng nhập đúng admin/123", () => {
    const result = login("admin", "123");

    expect(result.success).toBe(true);
});
