document.addEventListener("DOMContentLoaded", function() {
    // Load the PDF file using a library or framework
    // For example, you can use PDF.js, ViewerJS, or similar libraries
    // Here's an example using PDF.js:
    const pdfPath = 'Pain of every student.pdf';
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';

    pdfjsLib.getDocument(pdfPath).promise.then(function(pdfDoc) {
        // Display the first page of the PDF file
        pdfDoc.getPage(1).then(function(page) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const viewport = page.getViewport({ scale: 1 });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext);
            pdfViewer.appendChild(canvas);
        });
    });
});
