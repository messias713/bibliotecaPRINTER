// src/printer.js
export const printer = {
    outputElement: null,
    
    setOutputElement: function(elementId) {
        this.outputElement = document.getElementById(elementId);
        if (!this.outputElement) {
            console.error('Elemento de saída não encontrado!');
        }
    },

    appendMessage: function(message) {
        if (this.outputElement) {
            this.outputElement.innerHTML += `${message}<br>`;
        } else {
            console.error('Elemento de saída não encontrado!');
        }
    },

    appendImage: function(src, alt = '') {
        if (this.outputElement) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.style.maxWidth = '100%';
            this.outputElement.appendChild(img);
            this.outputElement.innerHTML += '<br>';
        } else {
            console.error('Elemento de saída não encontrado!');
        }
    },

    appendVideo: function(src, width = 320, height = 240, controls = true) {
        if (this.outputElement) {
            const video = document.createElement('video');
            video.src = src;
            video.width = width;
            video.height = height;
            video.controls = controls;
            this.outputElement.appendChild(video);
            this.outputElement.innerHTML += '<br>';
        } else {
            console.error('Elemento de saída não encontrado!');
        }
    },
    
    clearOutput: function() {
        if (this.outputElement) {
            this.outputElement.innerHTML = '';
        } else {
            console.error('Elemento de saída não encontrado!');
        }
    }
};

