// Efek Latar Belakang Interaktif - Magical Ice / Elfie Blue Colors
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Elfie's color palette (Ice magic, pale blues, deep sapphire)
const colors = [
    'rgba(224, 242, 254, 0.4)', // Icy blue
    'rgba(56, 189, 248, 0.35)', // Bright glow blue
    'rgba(14, 165, 233, 0.25)', // Sky blue
    'rgba(58, 80, 107, 0.3)'    // Deep magic blue
];

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 80 + 40; // Large soft glow shapes
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.4; // Slow moving
        this.vy = (Math.random() - 0.5) * 0.4;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        // Wrap around edges
        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create particle array
const particles = [];
const particleCount = 18;
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw and update particles
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// Handle resizing
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Start animation
animate();