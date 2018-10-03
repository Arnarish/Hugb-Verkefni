//greeting.test.js
const greeting = require ('./Greeting');

test("returns greeting with custom name", () => {
	expect(greeting("Mei")).toBe("Hello, Mei!");
});