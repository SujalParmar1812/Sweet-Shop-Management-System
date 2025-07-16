const backendUrl = '/api/sweets';

function getAllSweets() {
    fetch(backendUrl)
        .then(res => res.json())
        .then(renderTable);
}

//searching feature
function searchSweets() {
    const name = document.getElementById('searchName').value;
    const category = document.getElementById('searchCategory').value;
    const maxPrice = document.getElementById('searchMaxPrice').value;

    const query = new URLSearchParams();
    if (name) query.append('name', name);
    if (category) query.append('category', category);
    if (maxPrice) query.append('maxPrice', maxPrice);

    fetch(`/api/sweets/search?${query.toString()}`)
        .then(res => res.json())
        .then(renderTable);
       
}

//adding sweet feature
function addSweet() {
    const sweet = {
        id: Number(document.getElementById('addId').value),
        name: document.getElementById('addName').value,
        category: document.getElementById('addCategory').value,
        price: Number(document.getElementById('addPrice').value),
        quantity: Number(document.getElementById('addQuantity').value)
    };

    fetch(backendUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sweet)
    })
    .then(res => res.json())
    .then(() => getAllSweets());

}

//deleting sweet feature
function deleteSweet(id) {
    fetch(`/api/sweets/${id}`, { method: 'DELETE' })
        .then(() => getAllSweets());
}


//purchasing sweet feature
function purchaseSweet(id) {
    fetch(`/api/sweets/purchase/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ quantity: 1 })
    }).then(() => getAllSweets());
}

//restocking sweets feature
function restockSweet(id) {
    const qty = prompt('Enter new quantity:');
    if (qty) {
        fetch(`/api/sweets/restock/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ quantity: Number(qty) })
        }).then(() => getAllSweets());
    }
}

//function for rendering table on frontend upon changes
function renderTable(sweets) {
    const tbody = document.getElementById('sweetTable');
    tbody.innerHTML = '';
    sweets.forEach(sweet => {
        tbody.innerHTML += `
            <tr>
                <td>${sweet.id}</td>
                <td>${sweet.name}</td>
                <td>${sweet.category}</td>
                <td>${sweet.price}</td>
                <td>${sweet.quantity}</td>
                <td>
                    <button onclick="purchaseSweet(${sweet.id})">Purchase</button>
                    <button onclick="restockSweet(${sweet.id})">Restock</button>
                    <button onclick="deleteSweet(${sweet.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

//all sweets available in shop
getAllSweets();