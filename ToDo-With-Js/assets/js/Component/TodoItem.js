import html from "../core.js";
import { connect } from "../store.js";

function TodoItem({todo,index,editing}) {
 
return html`
<li class="${todo.completed  && 'completed'} ${editing===index && 'editing'}">
						<div class="view">
							<input class="toggle " 
                            type="checkbox"
                             ${todo.completed  && 'checked'}
                            onchange="dispatch('toggle',${index})"
                            >
							<label ondblclick="dispatch('startEdit',${index})">${todo.title}</label>
							<button class="destroy" onclick="dispatch('destroy',${index})"></button>
						</div>
						<input class="edit" value="${todo.title}"
                        onchange="dispatch('endEdit',this.value)"
                        >
					</li>
`
}
export default connect()(TodoItem) ;