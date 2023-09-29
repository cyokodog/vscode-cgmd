export const getPreviewHtml = (
  articleHtml: string
) => /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#000" />
<style>
</style>
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.006672e3.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.9f41b2aa.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.0742cd41.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.1c49e999.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/done.68e1779d.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/404.0b5c69bf.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/done.e88a158a.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.25bedb19.css" />
<link rel="stylesheet" href="https://www.codegrid.net/_astro/_slug_.43fe5b84.css" />
<script src="https://www.codegrid.net/assets/generated/components/codegrid-components.min.js"></script>
</head>
<body>
<main class="cmn-Main">
<div class="cg-Article_Body astro-JWU2CTGO">
<div class="cg-CGMarkdown svelte-xv7zxx">
${articleHtml}
</div>
</div>
</main>
</body>
</html>
`;
