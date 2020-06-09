# 后台管理界面

# tips

1. 当使用 ts 开发并使用 Vuetify 做为组件库时，可能会报<code> Could not find a declaration file for module 'vuetify/lib' </code>的错误，需要修改项目根目录中的<code> tsconfig.json </code>。

```
// tsconfig.json

{
  "compilerOptions": {
    "types": ["vuetify"]
  }
}
```

2. 使用 MD 风格样式图标时，可选用多种图标库。具体参考官网文档。

# 安装依赖

```
yarn install
```

# 启动服务

```
yarn serve
```

# 构建线上环境

```
yarn build
```
