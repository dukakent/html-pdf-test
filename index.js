const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const html = fs.readFileSync('./views/report.html', 'utf8');
const options = {
  format: 'A4',
  base: 'file://' + path.resolve('./views') + '/'
};

pdf.create(html, options).toFile('./report.pdf', function (err, res) {
  console.log(res);
});
