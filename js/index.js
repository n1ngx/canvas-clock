"use strict";
//
window.addEventListener('load', windowLoadEventHandler);
function windowLoadEventHandler() {
    var w = 500, h = 300, cw = w / 2, ch = h / 2, c = document.querySelector('#c'), ctx = c.getContext('2d'), d = Math.PI / 180, r = 140;
    function loop() {
        requestAnimationFrame(loop);
        draw();
    }
    loop();
    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(cw, ch);
        yuan();
        kedu();
        shizhen();
        ctx.restore();
    }
    function yuan() {
        ctx.strokeStyle = '#999';
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 360 * d);
        ctx.moveTo(r + 5, 0);
        ctx.arc(0, 0, r + 5, 0, 360 * d);
        ctx.stroke();
        ctx.closePath();
    }
    function kedu() {
        ctx.strokeStyle = '#999';
        ctx.save();
        ctx.rotate(-90 * d);
        for (var i = 0; i < 12; ++i) {
            ctx.save();
            ctx.rotate(i * 360 / 12 * d);
            ctx.beginPath();
            ctx.moveTo(r - 20, 0);
            ctx.lineTo(r, 0);
            ctx.stroke();
            ctx.closePath();
            ctx.save();
            ctx.translate(105, -3);
            ctx.rotate(90 * d);
            ctx.font = '12px';
            ctx.fillText(i + '', 0, 0);
            ctx.restore();
            ctx.restore();
        }
        for (var i = 0; i < 60; ++i) {
            ctx.save();
            ctx.rotate(i * 360 / 60 * d);
            ctx.beginPath();
            ctx.moveTo(r - 10, 0);
            ctx.lineTo(r, 0);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
        ctx.restore();
    }
    function shizhen() {
        var now = new Date(), h = now.getHours() % 12, m = now.getMinutes(), s = now.getSeconds();
        ctx.strokeStyle = '#999';
        ctx.lineCap = 'round';
        ctx.save();
        ctx.rotate(-90 * d);
        // 时针
        ctx.save();
        ctx.rotate(h * 360 / 12 * d);
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(50, 0);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        // 分针
        ctx.save();
        ctx.rotate(m * 360 / 60 * d);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(75, 0);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        // 秒针
        ctx.save();
        ctx.rotate(s * 360 / 60 * d);
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.restore();
    }
}
