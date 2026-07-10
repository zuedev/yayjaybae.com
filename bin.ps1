<#
.SYNOPSIS
    Build and run/deploy the yayjaybae.com site.

.USAGE
    .\bin.ps1 dev|deploy
#>

param(
    [Parameter(Position = 0)]
    [string]$Command
)

function Show-Help {
    Write-Host ""
    Write-Host "Usage: .\bin.ps1 <command>"
    Write-Host ""
    Write-Host "Commands:"
    Write-Host "  dev      Build the sites and start a local Wrangler dev server"
    Write-Host "  deploy   Build the sites and deploy them with Wrangler"
    Write-Host ""
}

if ($Command -notin @("dev", "deploy")) {
    Show-Help
    exit 0
}

$ProjectRootPath = Get-Location

Remove-Item "$ProjectRootPath\ASSETS\*" -Recurse -Force

cd "$ProjectRootPath\sites\yayjaybae.com"
npm install
npm run build

xcopy "$ProjectRootPath\sites\yayjaybae.com\out" "$ProjectRootPath\ASSETS\yayjaybae.com" /E /I /Y

xcopy "$ProjectRootPath\sites\new-layout.yayjaybae.com" "$ProjectRootPath\ASSETS\new-layout.yayjaybae.com" /E /I /Y

cd $ProjectRootPath

npx --yes wrangler@latest $Command
