const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem() {
    //Chama a função de remover a borda antes de adicionar para que somente uma borda esteja aparecendo
    removeBorder();
    //Adiciona a borda à aba
    this.classList.add('tab-border');

    hideAllContents();

    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function hideAllContents() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}


// Ao clicar em uma aba, a função selectItem será chamada
tabItems.forEach(tabItem => tabItem.addEventListener('click', selectItem));