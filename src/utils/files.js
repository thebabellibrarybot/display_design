// src/utils/paintings.js

// Grab all painting images grouped by year folders:
// src/assets/paintings/2001/..., 2002/..., etc.
const paintingModules = import.meta.glob(
    "../assets/paintings/*/*.{jpg,jpeg,png,gif}",
    { eager: true }
  );
  
  export function groupPaintingsByYear() {
    const byYear = {};
  
    for (const [path, module] of Object.entries(paintingModules)) {
      // Example path: "../assets/paintings/2001/painting1.jpg"
      const match = path.match(/paintings\/(\d{4})\//);
      if (!match) continue;
  
      const year = match[1];
      const src = module.default;
  
      if (!byYear[year]) byYear[year] = [];
      byYear[year].push({
        src,
        alt: `Painting from ${year}`,
      });
    }
  
    return byYear;
  }
  export function getFilesForYear(year) {
    const results = [];
  
    for (const [path, module] of Object.entries(paintingModules)) {
      // Example path: "../assets/paintings/2001/file.jpg"
      const match = path.match(/paintings\/(\d{4})\//);
      if (!match) continue;
  
      const folderName = match[1];
      if (folderName !== year) continue; // only pick files in that folder
  
      results.push({
        src: module.default,
        alt: `Painting from ${year}`,
        path
      });
    }
  
    return results;
  }
  