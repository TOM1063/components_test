"use client";

import React from "react";
import imageCompression from "browser-image-compression";
import { useState } from "react";

function Gen() {
  let [resizedImage, setResizedImage] = useState(null);
  let [resizing, setResizing] = useState(false);

  async function handleResize(event) {
    setResizing(true);
    if (resizedImage) setResizedImage(null);
    var imageFile = event.target.files[0];
    console.log("resizing : ", imageFile);
    const options = {
      maxWidthOrHeight: 768,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log("resized : ", compressedFile);
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB
      const compressedFileUrl = URL.createObjectURL(compressedFile);
      const a = document.createElement("a");
      a.href = compressedFileUrl;
      a.download = "resized.png";
      a.click();
      setResizedImage(compressedFileUrl);
      setResizing(false);
    } catch (error) {
      console.log(error);
      setResizing(false);
    }
  }

  return (
    <div>
      <h1>クライアントサイドで画像解像度を下げる</h1>
      <input type="file" onChange={handleResize}></input>
      {resizedImage && (
        <div>
          <img src={resizedImage}></img>
        </div>
      )}
      {resizing && (
        <div>
          <p>処理中です...</p>
        </div>
      )}
    </div>
  );
}

export default Gen;
