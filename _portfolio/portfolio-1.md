---
title: "Fine-tuning LLMs for Classification Tasks"
excerpt: "Semester Project for CS 7643: Deep Learning"
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

.btn--paper {
    background-color: #2ea44f;
    color: white;
}

.btn--poster {
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

.btn--github {
    background-color: #24292e;
    color: white;
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
    /* margin-top: 1rem; */
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
    <a href="https://github.com/rishikeshbadari/cs7643" class="btn btn--github" title="View on GitHub" style="text-decoration: none;">
        <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
    </a>
    <a href="https://raw.githubusercontent.com/rishikeshbadari/cs7643/main/Final_Paper.pdf" class="btn btn--paper" title="Download Final Paper" style="text-decoration: none;" download="Final_Paper.pdf">
        <i class="fas fa-file-alt" aria-hidden="true"></i><span>Final Paper</span>
    </a>
    <a href="https://raw.githubusercontent.com/rishikeshbadari/cs7643/main/Poster.pdf" class="btn btn--poster" title="Download Poster" style="text-decoration: none;" download="Poster.pdf">
            <i class="fas fa-image" aria-hidden="true"></i><span>Poster</span>
    </a>
</div>
<div class="project__summary">
    <p>This project investigates the potential of Large Language Models (LLMs) to perform image classification tasks traditionally handled by Convolutional Neural Networks (CNNs). Using the MNIST handwritten digit dataset as a benchmark, we explore eight different image encoding methods to adapt LLMs for visual recognition tasks.</p>
    <div class="methods-grid">
        <div class="method-card">
            <h4>Model Architecture</h4>
            <p>Implemented using Llama-2-7b with a classification head and Low-Rank Adaptation (LoRA) for efficient fine-tuning, achieving up to 99.1% accuracy on MNIST classification.</p>
        </div>
        <div class="method-card">
            <h4>Encoding Methods</h4>
            <p>Explored pixel-value sequences, normalized pixel-values, base64 encoding, and binary inputs, each in both flat and row-wise formats for spatial information preservation.</p>
        </div>
        <div class="method-card">
            <h4>Key Findings</h4>
            <p>Row-wise pixel value encoding performed best (99.1%), closely followed by binary sequences (98.8%), suggesting that preserving spatial relationships is more crucial than maintaining fine-grained pixel values.</p>
        </div>
        <div class="method-card">
            <h4>Impact</h4>
            <p>Demonstrates LLMs' potential beyond natural language processing, challenging the assumption that specialized architectures like CNNs are necessary for image classification tasks.</p>
        </div>
    </div>
</div>