import React, { useState } from 'react';
import '../../../css/AddCategoryStyle.css'
const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [parentId, setParentId] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        const categoryData = {
            name: categoryName,
            parent_id: parentId,
        };


        fetch('http://localhost:8000/api/add/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setCategoryName('');
                setParentId(null);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="parentId">Parent Category ID:</label>
                    <input
                        type="number"
                        id="parentId"
                        value={parentId || ''}
                        onChange={(e) => setParentId(e.target.value ? parseInt(e.target.value) : null)}
                    />
                </div>
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
