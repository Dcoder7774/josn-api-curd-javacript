const tableData = document.getElementById('tableData');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const sortButton = document.getElementById('sortButton');
const addPostForm = document.querySelector('.add-post-form');
const updateBtn = document.getElementById('updateBtn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let username = document.getElementById('userName');

let url = 'https://jsonplaceholder.typicode.com/users';

let userData = [];
let sortedData = []; // Array to hold the sorted data

// Sort Button:
sortButton.addEventListener('click', function () {
  sortTable();
});

// Add event listeners to arrow icons in table headers:
document.querySelectorAll('.fas.fa-sort').forEach((arrow) => {
  arrow.addEventListener('click', function () {
    const columnName = this.parentElement.textContent.trim();
    sortTable(columnName);
  });
});

function sortTable(columnName) {
  sortedData = [...userData]; // Copy the userData array to preserve the original data

  switch (columnName) {
    case 'Name':
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'User Name':
      sortedData.sort((a, b) => a.username.localeCompare(b.username));
      break;
    case 'Email':
      sortedData.sort((a, b) => a.email.localeCompare(b.email));
      break;
    case 'Phone Number':
      sortedData.sort((a, b) => a.phone.localeCompare(b.phone));
      break;
    default:
      // Sort by ID as default
      sortedData.sort((a, b) => a.id - b.id);
  }

  displayUserData(sortedData);
}

// Search Bar  || Search Button:
searchBtn.addEventListener('click', function () {
  const searchString = searchBar.value.toLowerCase();
  const showUserData = userData.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchString) ||
      user.email.toLowerCase().includes(searchString) ||
      user.phone.toString().toLowerCase().includes(searchString) ||
      user.username.toLowerCase().includes(searchString) ||
      user.id.toString().includes(searchString)
    );
  });
  displayUserData(showUserData);
  searchBar.value = '';
});

// Create = Insert Table
// Method Post:
addPostForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      phone: phone.value,
      username: username.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      userData.push(json);

      // Check if the sorting is applied before calling the sortTable() function
      if (sortedData.length > 0) {
        sortedData.push(json);
        sortTable();
      } else {
        displayUserData(userData);
      }
    });
  name.value = '';
  email.value = '';
  phone.value = '';
  username.value = '';
});

const loadUser = async () => {
  try {
    let res = await fetch(url);
    userData = await res.json();
    displayUserData(userData);
    let editId;
    tableData.addEventListener('click', (e) => {
      e.preventDefault();

      let deleteButtonIsPressed = e.target.id === 'deletePost';
      let editButtonIsPressed = e.target.id == 'editPost';

      if (deleteButtonIsPressed) {
        const tableRow = e.target.parentElement.parentElement;
        tableRow.remove();
      }
      if (editButtonIsPressed) {
        let parent = e.target.parentElement.parentElement;
        editId = parent.cells[0].textContent;

        let nameContent = parent.cells[1].textContent;
        let userContent = parent.cells[2].textContent;
        let emailContent = parent.cells[3].textContent;
        let phoneContent = parent.cells[4].textContent;

        name.value = nameContent;
        email.value = emailContent;
        phone.value = phoneContent;
        username.value = userContent;
      }

      updateBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const index = userData.findIndex(
          (user) => user.id.toString() === editId
        );

        if (index !== -1) {
          userData[index].name = name.value;
          userData[index].email = email.value;
          userData[index].phone = phone.value;
          userData[index].username = username.value;

          const tableRows = tableData.getElementsByTagName('tr');
          for (let i = 0; i < tableRows.length; i++) {
            const row = tableRows[i];
            if (row.cells[0].textContent === editId) {
              row.cells[1].textContent = name.value;
              row.cells[2].textContent = username.value;
              row.cells[3].textContent = email.value;
              row.cells[4].textContent = phone.value;
              break;
            }
          }

          name.value = '';
          email.value = '';
          phone.value = '';
          username.value = '';

          editId = null;
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const displayUserData = (users) => {
  const userString = users
    .map((user) => {
      return `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
          <button class="btn" id="editPost">Edit</button>
          <button class="btn" id="deletePost">Delete</button>
        </td></tr>`;
    })
    .join('');
  tableData.innerHTML = userString;
};

loadUser();
