function login(role) {
  if (role === 'admin') {
    window.location.href = 'login.html';
  } else if (role === 'student') {
    window.location.href = 'login (1).html';
  }
}





/*login admin*/

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple mock validation (replace with PHP/MySQL later)
  if (username === "101" && password === "123456") {            
    window.location.href = "dash.html";
  } else {
    alert("Invalid credentials");
  }

  return false; // Prevent default form submission
}





/*login student*/




function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validation for demo
  if (username === "101" && password === "123456") {
    alert("Login successful!");
    window.location.href = "book search (student).html"; // redirection possible
  } else {
    alert("Invalid username or password.");
  }

  return false; // prevent form from submitting normally
}



/*dashbord*/





// Form submission handling
        document.getElementById('addBookForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const title = document.getElementById('bookTitle').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.innerHTML = `
                <div style="position: fixed; top: 20px; right: 20px; background: #2ecc71; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.15); z-index: 1000; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-check-circle" style="font-size: 20px;"></i>
                    <div>
                        <strong>Success!</strong><br>
                        "${title}" by ${author} (ISBN: ${isbn}) has been added to the library.
                    </div>
                </div>
            `;
            
            document.body.appendChild(successMsg);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
            
            // Reset form
            this.reset();
        });
        
        // Menu item click handling
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                menuItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // If signout is clicked
                if (this.querySelector('span').textContent === 'Signout') {
                    alert('You have been signed out successfully!');
                    document.querySelectorAll('.menu-item')[0].classList.add('active');
                }
            });
        });
      
      
        
        // Toggle sidebar on mobile
        const toggleSidebar = document.querySelector('.toggle-sidebar');
        const sidebar = document.querySelector('.sidebar');
        
        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        // Initialize with today's date
        document.getElementById('publicationDate').valueAsDate = new Date();
        





        /*search books*/



        document.addEventListener('DOMContentLoaded', function() {
            const searchButton = document.getElementById('searchButton');
            const searchInput = document.getElementById('searchInput');
            
            // Search functionality
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                    // In a real application, this would trigger an AJAX request
                    // and update the results table
                } else {
                    alert('Please enter a search term');
                }
            });
            
            // Allow search with Enter key
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchButton.click();
                }
            });
            
            // Filter change handlers
            const filters = document.querySelectorAll('.filter-group select');
            filters.forEach(filter => {
                filter.addEventListener('change', function() {
                    alert(`Filter changed: ${this.id}`);
                    // In a real application, this would update the search results
                });
            });
            
            // Action buttons
            const actionButtons = document.querySelectorAll('.action-btn');
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const action = this.querySelector('i').className;
                    const bookTitle = this.closest('tr').querySelector('td:nth-child(2)').textContent;
                    
                    if (action.includes('fa-eye')) {
                        alert(`Viewing details for: ${bookTitle}`);
                    } else if (action.includes('fa-edit')) {
                        alert(`Editing: ${bookTitle}`);
                    } else if (action.includes('fa-trash')) {
                        if (confirm(`Are you sure you want to delete "${bookTitle}"?`)) {
                            alert(`"${bookTitle}" has been deleted.`);
                        }
                    }
                });
            });
        });


        /*book udapte*/


        document.addEventListener('DOMContentLoaded', function() {
            const searchBtn = document.getElementById('searchBookBtn');
            const bookIdInput = document.getElementById('bookIdInput');
            const updateForm = document.getElementById('updateForm');
            const changeCoverBtn = document.getElementById('changeCoverBtn');
            const bookCoverImg = document.getElementById('bookCoverImg');
            
            // Simulated book database
            const books = {
                'LIB-001': {
                    title: 'The Great Gatsby',
                    author: 'F. Scott Fitzgerald',
                    isbn: '978-0743273565',
                    category: 'fiction',
                    year: 1925,
                    pages: 218,
                    language: 'english',
                    status: 'available',
                    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.'
                },
                'LIB-002': {
                    title: 'To Kill a Mockingbird',
                    author: 'Harper Lee',
                    isbn: '978-0446310789',
                    category: 'fiction',
                    year: 1960,
                    pages: 324,
                    language: 'english',
                    status: 'checked-out',
                    description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, it has become a classic of modern American literature. The plot and characters are loosely based on Lee\'s observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10.'
                }
            };
            
            // Search book functionality
            searchBtn.addEventListener('click', function() {
                const bookId = bookIdInput.value.trim().toUpperCase();
                
                if (bookId === '') {
                    alert('Please enter a Book ID');
                    return;
                }
                
                if (books[bookId]) {
                    // Populate form with book data
                    const book = books[bookId];
                    document.getElementById('bookTitle').value = book.title;
                    document.getElementById('bookAuthor').value = book.author;
                    document.getElementById('bookIsbn').value = book.isbn;
                    document.getElementById('bookCategory').value = book.category;
                    document.getElementById('bookYear').value = book.year;
                    document.getElementById('bookPages').value = book.pages;
                    document.getElementById('bookLanguage').value = book.language;
                    document.getElementById('bookStatus').value = book.status;
                    document.getElementById('bookDescription').value = book.description;
                    
                    // Update status indicator
                    const statusIndicator = document.querySelector('.status-indicator');
                    statusIndicator.className = 'status-indicator';
                    statusIndicator.innerHTML = `<i class="fas fa-${book.status === 'available' ? 'check' : book.status === 'checked-out' ? 'book-reader' : 'clock'}"></i> ${book.status.charAt(0).toUpperCase() + book.status.slice(1).replace('-', ' ')}`;
                    
                    if (book.status === 'available') {
                        statusIndicator.classList.add('status-available');
                    } else if (book.status === 'checked-out') {
                        statusIndicator.classList.add('status-checked-out');
                        statusIndicator.style.backgroundColor = 'rgba(231, 76, 60, 0.15)';
                        statusIndicator.style.color = '#e74c3c';
                    } else {
                        statusIndicator.classList.add('status-reserved');
                        statusIndicator.style.backgroundColor = 'rgba(243, 156, 18, 0.15)';
                        statusIndicator.style.color = '#f39c12';
                    }
                    
                    // Show update form
                    updateForm.style.display = 'block';
                    
                    // Scroll to form
                    updateForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                    alert('Book not found. Please check the Book ID and try again.');
                    updateForm.style.display = 'none';
                }
            });
            
            // Allow search with Enter key
            bookIdInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchBtn.click();
                }
            });
            
            // Change cover button (simulated)
            changeCoverBtn.addEventListener('click', function() {
                alert('Cover image upload functionality would be implemented here');
            });
            
            // Save changes button
            document.querySelector('.btn-primary').addEventListener('click', function() {
                const bookId = bookIdInput.value.trim().toUpperCase();
                alert(`Changes saved successfully for Book ID: ${bookId}`);
            });
            
            // Update & Publish button
            document.querySelector('.btn-success').addEventListener('click', function() {
                const bookId = bookIdInput.value.trim().toUpperCase();
                alert(`Book updated and published successfully: ${bookId}`);
            });
            
            // Cancel button
            document.querySelector('.btn-cancel').addEventListener('click', function() {
                if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
                    updateForm.style.display = 'none';
                    bookIdInput.value = '';
                }
            });
        });



        /*view order*/





         document.addEventListener('DOMContentLoaded', function() {
            const searchButton = document.getElementById('searchButton');
            const bookSearch = document.getElementById('bookSearch');
            const authorSearchBtn = document.getElementById('authorSearchBtn');
            const authorSearch = document.getElementById('authorSearch');
            
            // Search functionality for orders
            searchButton.addEventListener('click', function() {
                const searchTerm = bookSearch.value.trim();
                if (searchTerm) {
                    alert(`Searching orders for: ${searchTerm}`);
                    // In a real app, this would filter the orders table
                } else {
                    alert('Please enter a book name to search');
                }
            });
            
            // Search functionality for authors
            authorSearchBtn.addEventListener('click', function() {
                const authorTerm = authorSearch.value.trim();
                if (authorTerm) {
                    alert(`Searching books by author: ${authorTerm}`);
                    // In a real app, this would filter the suggested books
                }
            });
            
            // Allow search with Enter key
            bookSearch.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchButton.click();
                }
            });
            
            authorSearch.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    authorSearchBtn.click();
                }
            });
            
            // Highlight expired orders that are still active
            const rows = document.querySelectorAll('.orders-table tbody tr');
            const today = new Date();
            
            rows.forEach(row => {
                const expiryDateText = row.cells[5].textContent;
                const statusBadge = row.cells[6].querySelector('.status-badge');
                
                if (statusBadge.classList.contains('status-active')) {
                    // Convert DD/MM/YYYY to Date object
                    const [day, month, year] = expiryDateText.split('/');
                    const expiryDate = new Date(`${year}-${month}-${day}`);
                    
                    if (expiryDate < today) {
                        statusBadge.className = 'status-badge status-expired';
                        statusBadge.textContent = 'Expired';
                        row.style.backgroundColor = 'rgba(231, 76, 60, 0.05)';
                    }
                }
            });
        });



            



