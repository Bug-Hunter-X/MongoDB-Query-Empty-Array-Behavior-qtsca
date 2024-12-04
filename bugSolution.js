```javascript
function findDocuments(field, array) {
  if (array.length === 0) {
    // Handle empty array case
    return db.collection('myCollection').find({}); // Return all documents
  } else {
    // Standard $in operation
    return db.collection('myCollection').find({ field: { $in: array } });
  }
}

// Example usage:
const results = findDocuments('myField', []);
results.forEach(doc => print(JSON.stringify(doc)));

const results2 = findDocuments('myField', [1, 2, 3]);
results2.forEach(doc => print(JSON.stringify(doc)));
```