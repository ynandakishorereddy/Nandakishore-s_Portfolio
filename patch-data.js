const fs = require('fs');

let data = fs.readFileSync('src/lib/portfolio-data.ts', 'utf8');

data = data.replace(
  /overview:\s*"A cross-platform oral health companion[^"]*"/,
  match => `images: ["/projects/orcare-1.png", "/projects/orcare-2.png", "/projects/orcare-3.png"],\n      ` + match
);

data = data.replace(
  /overview: "Full-stack AI interview-prep[^"]*"/,
  match => `images: ["/projects/prepiq-1.png", "/projects/prepiq-2.png", "/projects/prepiq-3.png"],\n        ` + match
);

data = data.replace(
  /overview: "Enterprise-grade Farm Management system[^"]*"/,
  match => `images: ["/projects/farm-1.png", "/projects/farm-2.png", "/projects/farm-3.png"],\n        ` + match
);

data = data.replace(
  /overview: "AI-powered retail analytics dashboard[^"]*"/,
  match => `images: ["/projects/retail-1.png", "/projects/retail-2.png", "/projects/retail-3.png"],\n        ` + match
);

fs.writeFileSync('src/lib/portfolio-data.ts', data);
