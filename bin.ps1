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

# remove all files in the ASSETS folder to ensure a clean build
Remove-Item "$ProjectRootPath\ASSETS\" -Recurse -Force

# build the yayjaybae.com site and copy the output to the ASSETS folder
cd "$ProjectRootPath\frontend"; npm install; npm run build
xcopy "$ProjectRootPath\frontend\out" "$ProjectRootPath\ASSETS" /E /I /Y

# return to root and run the wrangler command
cd $ProjectRootPath; npx --yes wrangler@latest $Command
