document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu code
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Quote form modal code
    const quoteForm = document.querySelector('.quote form');
    const modal = document.getElementById('quote-modal');
    const modalReply = document.getElementById('quote-reply');
    const closeModal = document.querySelector('.close-modal');

    if (quoteForm && modal && modalReply && closeModal) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            modalReply.textContent = "Thank you for your request! We'll get back to you soon.";
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Chat modal code
    const chatIcon = document.querySelector('.chat');
    const chatModal = document.getElementById('chat-modal');
    const closeChat = document.querySelector('.close-chat');

    if (chatModal && closeChat) {
        // Show chat modal on page load
        chatModal.style.display = 'block';

        // Open chat modal when chat icon is clicked
        if (chatIcon) {
            chatIcon.addEventListener('click', function() {
                chatModal.style.display = 'block';
                positionChatModal();
            });
        }

        // Close chat modal
        closeChat.addEventListener('click', function() {
            chatModal.style.display = 'none';
        });

        chatModal.addEventListener('click', function(e) {
            if (e.target === chatModal) {
                chatModal.style.display = 'none';
            }
        });
    }
});
