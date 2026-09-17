const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Mật khẩu sai", () => {
        expect(() => {
            login("admin", "456");
        }).toThrow("Sai username hoặc password");
    });

    test("Username rỗng", () => {
        expect(() => {
            login("", "123");
        }).toThrow("Username không được để trống");
    });

    test("Password rỗng", () => {
        expect(() => {
            login("admin", "");
        }).toThrow("Password không được để trống");
    });

    test("Username chứa ký tự đặc biệt", () => {
        expect(() => {
            login("@@@", "123");
        }).toThrow("Sai username hoặc password");
    });

    test("Tài khoản không tồn tại", () => {
        expect(() => {
            login("user123", "123");
        }).toThrow("Sai username hoặc password");
    });

});
