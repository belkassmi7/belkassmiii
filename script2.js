   // Button functionality
        document.getElementById('viewData').addEventListener('click', function() {
            alert('Data information will be displayed here.');
        });
        
        document.getElementById('returnBook').addEventListener('click', function() {
            alert('Return book process initiated.');
        });
        
        document.getElementById('placeOrder').addEventListener('click', function() {
            alert('Order placement screen will open.');
        });
        
        document.getElementById('logout').addEventListener('click', function() {
            alert('You have been logged out successfully.');
        });
        
        // Search functionality
        document.getElementById('searchBookBtn').addEventListener('click', searchBooks);
        document.getElementById('searchAuthorBtn').addEventListener('click', searchAuthors);
        
        // Suggested items functionality
        const suggestedItems = document.querySelectorAll('.suggested-item');
        suggestedItems.forEach(item => {
            item.addEventListener('click', function() {
                const bookName = this.textContent.trim();
                document.getElementById('bookName').value = bookName;
                searchBooks();
            });
        });
        
        function searchBooks() {
            const searchTerm = document.getElementById('bookName').value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');
            
            if (!searchTerm) {
                // Show all rows if search is empty
                rows.forEach(row => row.style.display = '');
                return;
            }
            
            let found = false;
            rows.forEach(row => {
                const title = row.cells[0].textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    row.style.display = '';
                    found = true;
                } else {
                    row.style.display = 'none';
                }
            });
            
            if (!found) {
                alert('No books found with that title.');
            }
        }
        
        function searchAuthors() {
            const searchTerm = document.getElementById('authorName').value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');
            
            if (!searchTerm) {
                // Show all rows if search is empty
                rows.forEach(row => row.style.display = '');
                return;
            }
            
            let found = false;
            rows.forEach(row => {
                const author = row.cells[1].textContent.toLowerCase();
                if (author.includes(searchTerm)) {
                    row.style.display = '';
                    found = true;
                } else {
                    row.style.display = 'none';
                }
            });
            
            if (!found) {
                alert('No books found for that author.');
            }
        }
        
        // Allow Enter key to trigger search
        document.getElementById('bookName').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchBooks();
            }
        });
        
        document.getElementById('authorName').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchAuthors();
            }
        });
        
        // Animation for page load
        document.addEventListener('DOMContentLoaded', function() {
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach((row, index) => {
                row.style.opacity = '0';
                row.style.transform = 'translateY(20px)';
                row.style.transition = 'opacity 0.5s, transform 0.5s';
                
                setTimeout(() => {
                    row.style.opacity = '1';
                    row.style.transform = 'translateY(0)';
                }, 200 * index);
            });
        });



        /*view data info*/





        // Navigation functionality
        const navOptions = document.querySelectorAll('.nav-option');
        navOptions.forEach(option => {
            option.addEventListener('click', function() {
                navOptions.forEach(opt => opt.classList.remove('active-option'));
                this.classList.add('active-option');
                
                if (this.textContent.includes('Logout')) {
                    alert('You have been securely logged out of the system.');
                }
            });
        });
        
        // Calculate fine functionality
        document.getElementById('calcFineBtn').addEventListener('click', function() {
            const resultArea = document.getElementById('fineResult');
            
            // Calculate days overdue
            const issueDate = new Date('2021-12-12');
            const dueDate = new Date('2022-01-12');
            const today = new Date();
            
            // Calculate days overdue (for demo, use due date)
            const timeDiff = today.getTime() - dueDate.getTime();
            const daysOverdue = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));
            
            // Calculate fine
            const dailyRate = 0.50;
            const fineAmount = daysOverdue * dailyRate;
            
            // Update result display
            document.querySelector('.fine-total').textContent = `$${fineAmount.toFixed(2)}`;
            document.querySelectorAll('.fine-value-text')[0].textContent = 
                `${daysOverdue} day${daysOverdue !== 1 ? 's' : ''}`;
            document.querySelectorAll('.fine-value-text')[2].textContent = 
                `$${fineAmount.toFixed(2)}`;
            
            // Show result with animation
            resultArea.style.display = 'block';
            resultArea.style.opacity = '0';
            resultArea.style.transform = 'translateY(25px)';
            resultArea.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                resultArea.style.opacity = '1';
                resultArea.style.transform = 'translateY(0)';
            }, 100);
        });
        
        // Book search functionality
        document.querySelector('.search-input-group button').addEventListener('click', function() {
            const searchTerm = document.getElementById('bookQuery').value;
            if (searchTerm) {
                // Simulate search
                const books = [
                    "Darkness At Noon", "Invisible Man", "Secret Agent", 
                    "The Rainbow", "The Age Of Innocence"
                ];
                
                const found = books.filter(book => 
                    book.toLowerCase().includes(searchTerm.toLowerCase())
                );
                
                if (found.length > 0) {
                    alert(`Books found:\n\n${found.map(b => `• ${b}`).join('\n')}`);
                } else {
                    alert('No books match your search criteria.');
                }
            } else {
                alert('Please enter a book title or ID to search');
            }
        });
        
        // Allow Enter key for search
        document.getElementById('bookQuery').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-input-group button').click();
            }
        });
        
        // Page load animations
        document.addEventListener('DOMContentLoaded', function() {
            const dataItems = document.querySelectorAll('.data-item, .search-area, .date-grid');
            dataItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(25px)';
                item.style.transition = 'opacity 0.6s, transform 0.6s';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 300 * (index + 1));
            });
        });








        /*return book*/





         // Button functionality
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                if (this.textContent.includes('Logout')) {
                    alert('You have been logged out successfully.');
                }
            });
        });
        
        // Calculate fine functionality
        document.getElementById('calculateBtn').addEventListener('click', function() {
            const resultContainer = document.getElementById('resultContainer');
            
            // Calculate fine based on dates
            const issueDate = new Date(2021, 11, 12); // Dec 12, 2021
            const expiryDate = new Date(2022, 0, 12); // Jan 12, 2022
            const today = new Date();
            
            // Calculate days overdue (for demo purposes, use expiry date)
            const timeDiff = today.getTime() - expiryDate.getTime();
            const daysOverdue = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));
            
            // Calculate fine
            const dailyRate = 0.50;
            const fineAmount = daysOverdue * dailyRate;
            
            // Update the result display
            document.querySelector('.fine-amount').textContent = `$${fineAmount.toFixed(2)}`;
            document.querySelector('.fine-details .fine-value:first-child').textContent = 
                `${daysOverdue} day${daysOverdue !== 1 ? 's' : ''}`;
            document.querySelector('.fine-details .fine-value:nth-child(4)').textContent = 
                `$${(fineAmount).toFixed(2)}`;
            
            // Show the result container with animation
            resultContainer.style.display = 'block';
            resultContainer.style.opacity = '0';
            resultContainer.style.transform = 'translateY(20px)';
            resultContainer.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                resultContainer.style.opacity = '1';
                resultContainer.style.transform = 'translateY(0)';
            }, 100);
        });
        
        // Book search functionality
        document.querySelector('.search-input-group button').addEventListener('click', function() {
            const searchTerm = document.getElementById('bookSearch').value;
            if (searchTerm) {
                // Simulate search results
                const books = [
                    "Darkness At Noon", "Invisible Man", "Secret Agent", 
                    "The Rainbow", "The Age Of Innocence"
                ];
                
                const found = books.filter(book => 
                    book.toLowerCase().includes(searchTerm.toLowerCase())
                );
                
                if (found.length > 0) {
                    alert(`Found books:\n\n- ${found.join('\n- ')}`);
                } else {
                    alert('No books found matching your search.');
                }
            } else {
                alert('Please enter a book title or ID to search');
            }
        });
        
        // Allow Enter key for search
        document.getElementById('bookSearch').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-input-group button').click();
            }
        });
        
        // Animation for page load
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.detail-item, .search-box, .date-container');
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s, transform 0.5s';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 200 * (index + 1));
            });
        });