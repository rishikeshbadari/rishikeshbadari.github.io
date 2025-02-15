---
title: "Smart Cropping Tool"
excerpt: "Crops images by finding the \"least important\" seams. Sample of full website."
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

.btn--demo {
    background-color: #4a5568;
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
}

.method-card p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
}
</style>

<div class="project__buttons">
    <a href="https://github.com/rishikeshbadari/image-resizer" class="btn btn--github" title="View on GitHub" style="text-decoration: none;">
        <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
    </a>
    <a href="/image-resizer/image-resizer.html" class="btn btn--demo" title="Try Tool" style="text-decoration: none;">
        <i class="fas fa-crop-alt" aria-hidden="true"></i><span>Try Tool</span>
    </a>
</div>

<div class="project__summary">
    <p>A new image cropping tool that uses seam-carving algorithm to preserve important image content while resizing.</p>
</div>

<iframe src="/image-resizer/image-resizer.html" width="700" height="700" style="border: none;"></iframe>