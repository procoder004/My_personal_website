const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('So\'rov qabul qilindi:', req.url);
    
    // Bosh sahifa
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Xatolik: index.html topilmadi');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    // CSS fayllari
    else if (req.url.endsWith('.css')) {
        const cssPath = path.join(__dirname, req.url);
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('CSS fayli topilmadi');
            }
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        });
    }
    // JavaScript fayllari
    else if (req.url.endsWith('.js')) {
        const jsPath = path.join(__dirname, req.url);
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('JS fayli topilmadi');
            }
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(data);
        });
    }
    // Rasmlar
    else if (req.url.match(/\.(jpg|jpeg|png|gif)$/)) {
        const imgPath = path.join(__dirname, req.url);
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('Rasm topilmadi');
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
        });
    }
    // Boshqa hamma narsa
    else {
        res.writeHead(404);
        res.end('Sahifa topilmadi: ' + req.url);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('===================================');
    console.log('✅ SERVER MUVAFFAQIYATLI ISHGA TUSHDI!');
    console.log('📍 Manzil: http://localhost:' + PORT);
    console.log('📍 Yopish uchun: Ctrl + C');
    console.log('===================================');
});