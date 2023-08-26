import React, { useState } from 'react';
import axios from 'axios';
import styles from '../components/imageUploader.module.css'

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0])); //  Uploaded image
  };

  const classifyByUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:3001/classifyuploadimage', 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.elements} >
        <input type='file' onChange={handleFileChange} />
        <button 
       className={styles.uploadbtn} onClick={classifyByUpload}>Upload and Classify</button>
      </div>
      <div>
        {imageUrl && <img src={imageUrl} alt='Uploaded' width='300' />}
        {loading ? (
          <p>Loading...</p>
        ) : result ? (
          result.predictions.map((item, index) => (
            <p key={index}>
              {item.tagName}: {Math.round(item.probability * 100)}%
            </p>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default ImageUploader;
