function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

// hover time

document.addEventListener('DOMContentLoaded', function() {
    let activeElement = null;
    const books = document.querySelectorAll('.book');

    if (books.length > 0) {
        books.forEach(function(book) {
            /* // Mouse events
            book.addEventListener('mouseover', function() {
                if (this !== activeElement) {
                    this.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                }
            });

            book.addEventListener('mouseout', function() {
                if (this !== activeElement) {
                    setTimeout(() => {
                        this.style.boxShadow = 'none';
                    }, 3000);
                }
            }); */

            // Touch events
            book.addEventListener('touchstart', function() {
                if (this !== activeElement) {
                    this.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                }
            });

            book.addEventListener('touchend', function() {
                if (this !== activeElement) {
                    setTimeout(() => {
                        this.style.boxShadow = 'none';
                    }, 5000);
                }
            });

            // Click event to deactivate other elements
            book.addEventListener('click', function() {
                if (activeElement !== null && activeElement !== this) {
                    activeElement.style.boxShadow = 'none';
                }
                activeElement = this;
            });
        });
    }
});
