//A factory function

const ToDo = (title, description, dueDate, priority, notes)=>{

    const getTitle = () => title;
    const getDesc = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;


    return{getTitle, getDesc, getDueDate, getPriority, getNotes};

}

const ToDoCheck = (title, description, dueDate, priority = 5, notes, checklist)=>{

    const {getTitle, getDesc, getDueDate, getPriority, getNotes} = 
        ToDo(title, description, dueDate, priority, notes);
    
        const getChecklist = () => checklist;

    return{getTitle, getDesc, getDueDate, getPriority, getNotes, getChecklist};
}

const ToDoProject = (title, toDoArr) =>{
    let _list = [];
    if(Array.isArray(toDoArr)){
        _list = toDoArr;
    }else{
        _list.push(toDoArr);
    }
    const getTitle = () => title;
    const setTitle = (newTitle) =>{ title = newTitle};
    const getList = () => _list;
    const setList = (list) => {_list = list};

    return {getTitle, setTitle, getList, setList}


}

export {ToDo, ToDoCheck, ToDoProject}