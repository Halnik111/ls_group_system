import React, {useState} from 'react';
import CanvasRectangles from "../util/CanvasRectangles";

const Home = () => {
    const [inputFiles, setInputFiles] = useState([]);
    const [files, setFiles] = useState([]);
    
    const uploadImages = async () => {
        if (inputFiles.length > 0) {
            const compressedImage = await resizeImage(inputFiles[0], 1200, 1200, 0.7);
            const formData = new FormData();
            formData.append('files', compressedImage, inputFiles.name);
            
            fetch("http://localhost:3001/api/upload", {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setFiles(data);
                })
                .catch(err => console.log(err));
        }
    }

    const resizeImage = (file, maxWidth, maxHeight, quality) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Maintain aspect ratio
                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob(
                        (blob) => resolve(blob),
                        'image/jpeg',
                        quality
                    );
                };
                img.onerror = (err) => reject(err);
            };
        });
    };

    return (
        <div className={'flex justify-center items-center flex-col mb-6'}>
            <div className={'m-4 text-xl'}>Home</div>
            <div className={'flex w-full h-full justify-center items-center flex-col'}>
                <div className={''}>Testing API</div>
                <input className={"cursor-pointer relative w-[100px] pt-10 bg-transparent file:invisible before:content-['Select..'] before:w-[100px] before:justify-center before:flex before:absolute"} 
                       onChange={e => setInputFiles(e.target.files)} type="file" multiple/>
                <div className={"text-lg p-1 m-1 border-b cursor-pointer"} onClick={() => uploadImages()}>Upload</div>
            </div>
            {files.message &&
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    {files.url &&
                        <CanvasRectangles imageUrl={files.url} detections={files.detections} product={files.product}/>}
                    <div className={'text-xl underline underline-offset-4'}>ID: {files.product.productID}</div>
                </div>
            }
        </div>
    );
};

export default Home;