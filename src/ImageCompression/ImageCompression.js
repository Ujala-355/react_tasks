import React, {useState} from "react";
import imageCompression from "browser-image-compression";

const ImageUpload=()=>{
    const [compressed,setCompressed]=useState(null);
    const handleImageChange=async(e)=>{
        const file=e.target.files[0]
        if (file){
            try{
                const options={
                    maxSizeMB:1,
                    maxWidthOrHeight:800,
                    useWebWorker:true,
                }
                const compressedFile=await imageCompression(file,options);
                const reader=new FileReader();
                reader.onloadend=()=>{
                    setCompressed(reader.result);
                }
                reader.readAsDataURL(compressedFile);
            }
            catch(error){
                console.log("Error compressing image",error);
            }
        }
    }
    return(
        <>
            <input type="file" accept="image/*" onChange={handleImageChange}/>
            {compressed &&(
                <div>
                    <p>Compressed Image</p>
                    <img src={compressed} alt="Compressed"/>
                </div>
            )}
        </>
    )

}
export default ImageUpload;