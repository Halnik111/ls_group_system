import React, {useEffect, useRef} from 'react';

const CanvasRectangles = ({imageUrl, detections, product}) => {
    const canvasRef = useRef(null);
    const imageSrc = imageUrl

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; 

        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src = imageSrc;

        image.onload = () => {
            // Set canvas size based on image
            canvas.width = image.width;
            canvas.height = image.height;

            // Draw the image
            ctx.drawImage(image, 0, 0);

            // Draw rectangles options
            ctx.strokeStyle = "aqua"; // Rectangle border color
            ctx.lineWidth = 2;

            const points = product.productIDLocation.vertices;

            // Find min/max x and y
            const minX = Math.min(...points.map(p => p.x));
            const minY = Math.min(...points.map(p => p.y));
            const maxX = Math.max(...points.map(p => p.x));
            const maxY = Math.max(...points.map(p => p.y));

            const width = maxX - minX;
            const height = maxY - minY;

            ctx.strokeRect(minX, minY, width, height);
            
            // detections.forEach(detection => {
            //     const points = detection.boundingPoly.vertices;
            //
            //     // Find min/max x and y
            //     const minX = Math.min(...points.map(p => p.x));
            //     const minY = Math.min(...points.map(p => p.y));
            //     const maxX = Math.max(...points.map(p => p.x));
            //     const maxY = Math.max(...points.map(p => p.y));
            //
            //     const width = maxX - minX;
            //     const height = maxY - minY;
            //
            //     ctx.strokeRect(minX, minY, width, height);
            // });
        };
    }, ); 
    
    return (
        <canvas ref={canvasRef} className={'max-w-2xl'}/>
    );
};

export default CanvasRectangles;