const pulangPergiRadio = document.getElementById("pulang-pergi");
        const sekaliJalanRadio = document.getElementById("sekali-jalan");
        const returnDateField = document.getElementById("return-date");

        // Add event listeners for radio buttons
        pulangPergiRadio.addEventListener("change", toggleReturnDateField);
        sekaliJalanRadio.addEventListener("change", toggleReturnDateField);

        function toggleReturnDateField() {
            // Show "Tanggal Kembali" only if "Pulang Pergi" is selected
            returnDateField.style.display = pulangPergiRadio.checked ? "block" : "none";
        }

        // Initialize visibility on page load
        toggleReturnDateField();
        function navigateToPage() {
            window.location.href = 'penerbangan.html';
            window.location.href = 'promosi.html';

        }