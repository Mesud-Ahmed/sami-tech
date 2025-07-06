'use client';
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function UploadImages() {
    const [imageUrls, setImageUrls] = useState([]);
  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset="laptop-presets"
        onSuccessAction={(results) => {
          setImageUrls((prev) => [...prev, results.info.secure_url]); // You get the uploaded file's info
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Upload Images
          </button>
        )}
      </CldUploadWidget>

      {imageUrls.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative w-48 h-48">
              <img
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() =>
                  setImageUrls((prev) => prev.filter((_, i) => i !== index))
                }
                className="cursor-pointer absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        type="hidden"
        name="imageUrls"
        required
        value={JSON.stringify(imageUrls)}
      />
    </div>
  );
}
