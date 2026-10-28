const request = require("supertest");
const app = require("./app");

describe("Node.js application", () => {
    test("GET / returns a successful response", async() => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        expect(response.body.version).toBe("1.0.0");
    
    });

    test("GET /health reports a healthy application", async()=>{
        const response = await request(app).get("/health");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("healthy");
    });
    

});