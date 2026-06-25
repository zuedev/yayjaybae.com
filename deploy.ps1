# powershell script to deploy the project

# store current path for later use
$ProjectRootPath = Get-Location

# build old.yayjaybae.com
cd "$ProjectRootPath\old.yayjaybae.com"
npm install
npm run build

# copy build files to ASSETS directory
xcopy "$ProjectRootPath\old.yayjaybae.com\out" "$ProjectRootPath\ASSETS\old.yayjaybae.com" /E /I /Y

# build yayjaybae.com
echo "Nothing to build for yayjaybae.com, skipping build step."

# copy build files to ASSETS directory
xcopy "$ProjectRootPath\yayjaybae.com" "$ProjectRootPath\ASSETS\yayjaybae.com" /E /I /Y

# return to root and deploy project
cd $ProjectRootPath
npx --yes wrangler@latest publish