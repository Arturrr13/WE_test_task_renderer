"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = require("./middleware/auth");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
//const URL = 'http://localhost:5173' // for dev mode
const URL = 'https://fullstackapp-test.onrender.com'; // for dev renderer.com
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: URL
}));
app.use('/api', index_1.default);
// @ts-ignore
app.use(auth_1.authMiddleware);
app.use(express_1.default.static(path_1.default.resolve(__dirname, './dist'), { maxAge: '1y', etag: false }));
app.get('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", ['X-Requested-With', 'content-type', 'credentials']);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.sendFile(path_1.default.join(__dirname, './dist/index.html'));
});
app.listen(PORT, () => console.log('YEP'));
