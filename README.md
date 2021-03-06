# File upload bug

https://github.com/sveltejs/kit/issues/4832

This repo is to demonstrate a bug that occurs when dynamically adding files to the `static` folder when using `@sveltejs/adapter-node`.

## Reproduction

Clone this repo and build it.

```bash
npm run build
```

Next, navigate to the `build` directory and run the `index.js`

```bash
cd build && node index.js
```

Notice how after uploading files and clicking the links, a `404` is received, _even though_ the file is within the `static` folder.

![choose](.github/choose.png)
![submitted](.github/submitted.png)
![file](.github/file.png)
![404](.github/404.png)

## Notes

This seems to _only_ be an issue when running in production. Running in development works just fine

```bash
npm run dev # or preview <-- Works just fine
```
