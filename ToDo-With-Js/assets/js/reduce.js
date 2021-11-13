import Storage from "./util/Storage.js"
const init = {
   todos: Storage.get(),
   filter:'all',
   filters: {
       all: ()=>true,
       active:todo=> !todo.completed,
       completed:todo=>todo.completed
   },
   editing:null
}

const actions={
    add({todos},title) {
        todos.push({title,completed:false})
        Storage.set(todos)
    },
    toggle({todos},index) {
      const todo=  todos[index]
      todo.completed=!todo.completed
      Storage.set(todos)
    },
    toggleAll({todos},completed) {
        todos.forEach(todo => todo.completed=completed  );
        Storage.set(todos)
      
    },
    destroy({todos},index) {
        todos.splice(index,1)
        Storage.set(todos)
    },
    switchFilter(state,filter) {
        state.filter=filter
    },
    clearCompleted(state,filter) {
        state.todos=state.todos.filter(state.filters.active)
        Storage.set(state.todos)
    },
    startEdit(state,index) {
        state.editing=index
    },
    endEdit(state,title) {
        if(state.editing!= null) {
            state.todos[state.editing].title=title
            state.editing=null
            Storage.set(state.todos)
        }
    }
}

export default function reducer(state=init,action,args) {
   actions[action]&& actions[action](state,...args)
   return state
}