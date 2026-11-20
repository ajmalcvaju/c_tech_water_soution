Add-Type -AssemblyName System.Drawing

function CropImage($srcPath, $destPath, $x, $y, $w, $h) {
    $resolved = (Resolve-Path $srcPath).Path
    $src = [System.Drawing.Image]::FromFile($resolved)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $rectDest = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $rectSrc = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $g.DrawImage($src, $rectDest, $rectSrc, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Cropped to $destPath"
}

CropImage 'public\images\reference\media_1794633511296_6b126ad7.jpg' 'public\images\badge-27years.png' 540 120 180 200
CropImage 'public\images\reference\media_1794633511296_6b126ad7.jpg' 'public\images\products\water-purifiers-lineup.png' 50 250 560 270
CropImage 'public\images\reference\media_1794633511296_6b126ad7.jpg' 'public\images\products\frp-treatment-plant.png' 560 90 170 430
CropImage 'public\images\reference\media_1794633511131_be4c85fb.jpg' 'public\images\products\medical-oxygen-cylinders.png' 240 340 200 310
CropImage 'public\images\reference\media_1794633511131_be4c85fb.jpg' 'public\images\products\oxygen-regulator-meter.png' 180 380 120 150
