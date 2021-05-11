let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');

    for (let index = 0; index < li.length; index++) {
        let a = li[index].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
           li[index].getElementsByClassName.display = ''; 
        } else {
            li[index].style.display = 'none';
        }
    }
}