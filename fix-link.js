const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix </div> to </Link> for secondary projects
content = content.replace(
  /View Source\n\s*<\/a>\n\s*\)\}\n\s*<\/div>/g,
  'View Source\n                    </a>\n                  )}\n                </Link>'
);

fs.writeFileSync('src/app/page.tsx', content);
