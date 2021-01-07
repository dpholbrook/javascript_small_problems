document.addEventListener('DOMContentLoaded', () => {

  let app = (function() {
    let todo_items = [
      { id: 1, title: 'Homework' },
      { id: 2, title: 'Shopping' },
      { id: 3, title: 'Calling Mom' },
      { id: 4, title: 'Coffee with John '}
    ];

    return {
      renderTodos() {
        this.todoContainer.innerHTML = this.todoTemplate({todo_items: this.todos});
      },
  
      bindEvents() {
        this.todoContainer.addEventListener('click', this.handleRemove.bind(this));
        this.todoContainer.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        this.contextMenu.addEventListener('click', this.handleDelete.bind(this));
        document.addEventListener('click', this.handleBodyClick.bind(this));
      },
  
      handleDelete(event) {
        if (event.target.classList.contains('delete')) {
          this.hide(this.contextMenu);
          this.remove.click();
        }
      },
  
      show(element) {
        element.classList.add('show');
        element.classList.remove('hide');
      },
  
      hide(element) {
        element.classList.remove('show');
        element.classList.add('hide');
      },
  
      handleBodyClick(event) {
        if (event.target.classList.contains('remove')
        || event.target.classList.contains('delete')
        || event.target.classList.contains('button')) {
          return;
        } else {
          this.hide(this.contextMenu);
          if (this.popup) {
            this.hide(this.popup);
            this.hide(this.overlay);
          }
        }
      },
  
      handleContextMenu(event) {
        event.preventDefault();
        this.todo = event.target.closest('.todo');
        this.remove = this.todo.querySelector('.remove');
        this.show(this.contextMenu);
        this.contextMenu.style.left = (event.clientX + 10).toString() + 'px';
        this.contextMenu.style.top = (event.clientY + 10).toString() + 'px';
      },
  
      handleRemove(event) {
        if (event.target.classList.contains('remove')) {
          this.popupWrapper.innerHTML = this.popupTemplate();
          this.toggle(this.overlay, this.popupWrapper);
          let todoId = event.target.closest('.todo').getAttribute('data-id');
          this.popup = document.querySelector('#popup');
  
          this.popup.addEventListener('click', event => {
            if (event.target.id === 'yes') {
              this.removeTodo(Number(todoId));
              this.renderTodos();
            }
            if (event.target.classList.contains('button')) {
              this.popup.remove();
              this.toggle(this.overlay, this.popupWrapper);
            }
          });
        }
      },
  
      removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      },
  
      toggle(...elements) {
        elements.forEach(element => {
          element.classList.toggle('hide');
          element.classList.toggle('show');
        });
      },
  
      init() {
        this.todoTemplate = Handlebars.compile(document.querySelector('#todoTemplate').innerHTML);
        this.popupTemplate = Handlebars.compile(document.querySelector('#popupTemplate').innerHTML);
        this.todoContainer = document.querySelector('#todos');
        this.overlay = document.querySelector('#overlay');
        this.popupWrapper = document.querySelector('#popupWrapper');
        this.contextMenu = document.querySelector('#context-menu');
        this.todos = todo_items;
        this.renderTodos();
        this.bindEvents();
        return this;
      },
    };
  })();

  app.init();
  
});
