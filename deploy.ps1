$ProjectRootPath = Get-Location

cd "$ProjectRootPath\sites\yayjaybae.com"
npm install
npm run build

xcopy "$ProjectRootPath\sites\yayjaybae.com\out" "$ProjectRootPath\ASSETS\sites\yayjaybae.com" /E /I /Y

xcopy "$ProjectRootPath\sites\new-layout.yayjaybae.com" "$ProjectRootPath\ASSETS\sites\new-layout.yayjaybae.com" /E /I /Y

cd $ProjectRootPath
npx --yes wrangler@latest deploy