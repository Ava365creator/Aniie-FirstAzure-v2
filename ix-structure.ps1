# Save this as fix-structure.ps1
Write-Host "=== Fixing Next.js Structure ===" -ForegroundColor Green

# Show current structure
Write-Host "`nCurrent structure:" -ForegroundColor Yellow
Get-ChildItem -Recurse | Where-Object { $_.PSIsContainer } | Select-Object FullName

# Clean up duplicates
Write-Host "`nCleaning duplicates..." -ForegroundColor Yellow
if (Test-Path "app\app") { 
    Remove-Item -Recurse -Force "app\app"
    Write-Host "Removed duplicate app folder" -ForegroundColor Cyan
}

# Move files
Write-Host "`nMoving files..." -ForegroundColor Yellow
$filesToMove = @("layout.tsx", "page.tsx", "globals.css")
foreach ($file in $filesToMove) {
    if (Test-Path $file) {
        Move-Item $file "app\" -Force
        Write-Host "Moved $file to app\" -ForegroundColor Cyan
    }
}

# Create directories
Write-Host "`nCreating directories..." -ForegroundColor Yellow
$folders = @(
    "app\jobs",
    "app\talent", 
    "app\employers",
    "app\candidates",
    "app\about",
    "app\contact",
    "components",
    "public",
    ".github\workflows"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
        Write-Host "Created $folder" -ForegroundColor Cyan
    }
}

# Create .gitignore
Write-Host "`nCreating .gitignore..." -ForegroundColor Yellow
$gitignore = @'
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# Azure
.azure/
logs/
'@

Set-Content -Path ".gitignore" -Value $gitignore
Write-Host "Created .gitignore" -ForegroundColor Cyan

# Create basic pages
Write-Host "`nCreating basic pages..." -ForegroundColor Yellow

# Jobs page
$jobsPage = @'
export default function JobsPage() {
  return (
    <div className="container-custom py-10">
      <h1 className="text-4xl font-bold mb-6">Find Jobs</h1>
      <p className="text-gray-600">Browse thousands of job opportunities...</p>
    </div>
  )
}
'@
Set-Content -Path "app\jobs\page.tsx" -Value $jobsPage

# About page
$aboutPage = @'
export default function AboutPage() {
  return (
    <div className="container-custom py-10">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-gray-600">Learn about our recruitment company...</p>
    </div>
  )
}
'@
Set-Content -Path "app\about\page.tsx" -Value $aboutPage

# Create favicon
if (!(Test-Path "public\favicon.ico")) {
    New-Item -ItemType File -Path "public\favicon.ico" | Out-Null
    Write-Host "Created placeholder favicon.ico" -ForegroundColor Cyan
}

Write-Host "`n=== Structure Fixed Successfully! ===" -ForegroundColor Green
Write-Host "Run these commands next:" -ForegroundColor Yellow
Write-Host "1. npm install" -ForegroundColor Cyan
Write-Host "2. npm run dev" -ForegroundColor Cyan
Write-Host "3. Test at http://localhost:3000" -ForegroundColor Cyan