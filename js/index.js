var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

        /* Button script  */
var myModal = document.getElementById('modalContacto');
var btnContacto = document.getElementById('contactoBtn1');

myModal.addEventListener('show.bs.modal', function (event) {
    console.log('El modal se comenzó a mostrar.');
    btnContacto.classList.remove('btn-outline-success');  
    btnContacto.classList.add('btn-outline-warning');  
    tnContacto.setAttribute('disabled', 'disabled')

})

myModal.addEventListener('shown.bs.modal', function (event) {
    console.log('El modal se está mostrando.')
})

myModal.addEventListener('hide.bs.modal', function (event) {
    console.log('El modal se está ocultando.')
})

myModal.addEventListener('hidden.bs.modal', function (event) {
    console.log('El modal se está ocultó.')
    btnContacto.classList.remove('btn-outline-warning');  
    btnContacto.classList.add('btn-outline-success');  
    btnContacto.removeAttribute('disabled')
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        })