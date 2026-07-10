$ProjectRootPath = Get-Location

Remove-Item "$ProjectRootPath\ASSETS\*" -Recurse -Force

cd "$ProjectRootPath\sites\yayjaybae.com"
npm install
npm run build

xcopy "$ProjectRootPath\sites\yayjaybae.com\out" "$ProjectRootPath\ASSETS\yayjaybae.com" /E /I /Y

xcopy "$ProjectRootPath\sites\new-layout.yayjaybae.com" "$ProjectRootPath\ASSETS\new-layout.yayjaybae.com" /E /I /Y

cd $ProjectRootPath
npx --yes wrangler@latest dev