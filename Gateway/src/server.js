const express = require("express");
const morgar = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgar("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

module.exports = app;
