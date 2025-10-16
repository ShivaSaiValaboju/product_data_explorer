"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
class Cache {
    constructor(ttlSeconds = 3600) {
        this.cache = new node_cache_1.default({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2,
        });
    }
    async get(key) {
        return this.cache.get(key);
    }
    async set(key, value) {
        this.cache.set(key, value);
    }
    async invalidate(key) {
        this.cache.del(key);
    }
    async clear() {
        this.cache.flushAll();
    }
}
exports.Cache = Cache;
