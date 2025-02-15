---
title: "Fractal Structures"
excerpt: "Drawing some famous fractals with Python."
collection: portfolio
---

<style>
.project__buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.btn--github {
    background-color: #24292e;
    color: white;
}

.btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.btn i {
    margin-right: 0.5rem;
}

.project__summary {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
}

.methods-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.method-card {
    background: #f8f9fa;
    padding: 1.25rem;
    border-radius: 6px;
    border: 1px solid #e9ecef;
}

.method-card h4 {
    color: #2d3748;
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
}

.method-card p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
}

.method-card img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    transition: transform 0.2s ease;
}

.method-card a:hover img {
    transform: scale(1.02);
}
</style>

<div class="project__buttons">
    <a href="https://github.com/rishikeshbadari/fractals" class="btn btn--github" title="View on GitHub" style="text-decoration: none;">
        <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
    </a>
</div>

<div class="project__summary">
    <p>Derivations/Explanations for these structures are in the READMEs in each branch.</p>
</div>

<div class="methods-grid">
    <div class="method-card">
        <h4>Mandelbrot Set</h4>
        <a href="https://github.com/rishikeshbadari/fractals/blob/mandelbrot/README.md">
            <img src="/images/mandelbrot.png" alt="Mandelbrot Set Fractal">
        </a>
    </div>
    <div class="method-card">
        <h4>Barnsley Fern</h4>
        <a href="https://github.com/rishikeshbadari/fractals/blob/barnsley-fern/README.md">
            <img src="/images/barnsley-fern.png" alt="Barnsley Fern Fractal">
        </a>
    </div>
    <div class="method-card">
        <h4>Julia Set</h4>
        <a href="https://github.com/rishikeshbadari/fractals/blob/julia/README.md">
            <img src="/images/julia.png" alt="Julia Set Fractal">
        </a>
    </div>
    <div class="method-card">
        <h4>Seigal Disk</h4>
        <a href="https://github.com/rishikeshbadari/fractals/blob/julia/README.md">
            <img src="/images/seigal-disk.png" alt="Seigal Disk Fractal">
        </a>
    </div>
</div>