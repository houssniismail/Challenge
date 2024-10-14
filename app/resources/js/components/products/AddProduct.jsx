import React, { useState } from 'react';

const AddProduct = () => {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', categoryName);
        formData.append('description', description);
        formData.append('price', price);
        if (image) formData.append('image', image); // Append image file if it exists
        formData.append('category_id', categoryId);

        fetch('http://localhost:8000/api/add/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData, // Don't set Content-Type; the browser will set it correctly
        })
            .then(async (response) => {
                const text = await response.text();
                console.log('Full Response:', text);

                // Attempt to parse as JSON if possible
                try {
                    const data = JSON.parse(text);
                    console.log('Parsed Data:', data);
                    // Reset form fields after successful submission
                    setCategoryName('');
                    setDescription('');
                    setPrice('');
                    setImage(null);
                    setCategoryId(null);
                } catch (error) {
                    console.error('JSON Parsing Error:', error);
                }
            })
            .catch((error) => {
                console.error('Fetch Error:', error);
            });
    };


    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="categoryName">Category Name:</label>
                    <input
                        type="text"
                        id="categoryName"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                <div>
                    <label htmlFor="categoryId">Category ID:</label>
                    <input
                        type="number"
                        id="categoryId"
                        value={categoryId || ''}
                        onChange={(e) => setCategoryId(e.target.value ? parseInt(e.target.value) : null)}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
