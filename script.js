
var algorithmList = document.getElementById('algorithmList');
var searchInput = document.getElementById('searchInput');


function searchAlgorithm() {
    var searchTerm = searchInput.value.toLowerCase();

    
    for (var i = 0; i < algorithmList.children.length; i++) {
        var algorithm = algorithmList.children[i];
        var algorithmText = algorithm.textContent.toLowerCase();

        if (algorithmText.includes(searchTerm)) {
            algorithm.style.display = 'block';  
        } else {
            algorithm.style.display = 'none';   
        }
    }
}



document.addEventListener('DOMContentLoaded', function () {
    var liItems = document.querySelectorAll('.li-1');

    liItems.forEach(function (li) {
        li.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#a9c4db'; 
        });

        li.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; 
        });
    });
});






