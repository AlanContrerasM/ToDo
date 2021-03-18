//myModule.js

import {ToDo, ToDoCheck, ToDoProject} from './toDo.js';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//A Module for editing DOM
const DisplayController  = (()=>{

    const content = document.querySelector("#content");


    //privates is better to declare starting with _
    //set popup to visible
    let _showPopUp = (something)=>{
        console.log(something);
    }

    let saySomething = (something) =>{
        _showPopUp(something);
    }

    const createInitialEventListeners = () =>{
        const btnShowProjectForm = document.querySelector("#btnShowProjectForm");
        const btnCreateProject = document.querySelector("#btnCreateProject");
        const btnsDeleteProject = document.querySelectorAll(".deleteProject");
        

        const projectFormDiv = document.querySelector("#projectFormDiv");
        const formProject = document.querySelector("#formProject");

        const btnShowTaskForm = document.querySelectorAll(".showTaskForm");
        const taskFormDiv = document.querySelector("#taskFormDiv");
        const formTask = document.querySelector("#formTask");
        const btnCreateTask = document.querySelector("#btnCreateTask");
        const btnsDeleteTask = document.querySelectorAll(".deleteTask");

        // event listener for create project
        btnShowProjectForm.addEventListener("click", (e)=>{
            console.log("pressed btnShowProjectForm");
            projectFormDiv.classList.remove("hidden");
            formProject.reset();
        })

        btnCreateProject.addEventListener("click", (e)=>{

            const formPTitle = document.querySelector("#formPTitle")
            const formPTTitle = document.querySelector("#formPTTitle")
            const formPTDesc = document.querySelector("#formPTDesc")
            const formPTDate = document.querySelector("#formPTDate")
            const formPTPrior = document.querySelector("#formPTPriority")
            const formPTNotes = document.querySelector("#formPTNotes")



            console.log("pressed create project")
            e.preventDefault();
            let isCorrect = formProject.checkValidity();
            formProject.reportValidity();
            if(isCorrect){
                
                LogicModule.addProject(ToDoProject(formPTitle.value,
                                                    ToDo(formPTTitle.value,
                                                            formPTDesc.value,
                                                            formPTDate.value,
                                                            formPTPrior.value,
                                                            formPTNotes.value)));
                projectFormDiv.classList.add("hidden");
            }
        })

        btnsDeleteProject.forEach((btn) =>{
            btn.addEventListener("click", (e)=>{
                LogicModule.removeProject(e.target.previousSibling.textContent)

            })
        })

        btnShowTaskForm.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                taskFormDiv.classList.remove("hidden");
                taskFormDiv.firstElementChild.firstElementChild.innerHTML = `New Task for: ${e.target.id}`;
            })
            formTask.reset();
        })

        btnCreateTask.addEventListener("click", (e) =>{
            
            const formTitle = document.querySelector("#formTTitle")
            const formDesc = document.querySelector("#formTDesc")
            const formDate = document.querySelector("#formTDate")
            const formPrior = document.querySelector("#formTPriority")
            const formNotes = document.querySelector("#formTNotes")

            //getting project title from title of taskformDiv
            let projectTitle = btnCreateTask.parentNode.firstElementChild.innerHTML.split(": ")[1];
            // console.log("pressed create task for: " + projectTitle);
            e.preventDefault();
            let isCorrect = formTask.checkValidity();
            // console.log(isCorrect);
            formTask.reportValidity();
            if(isCorrect){
                
                LogicModule.addTask(projectTitle,
                                                    ToDo(formTitle.value,
                                                            formDesc.value,
                                                            formDate.value,
                                                            formPrior.value,
                                                            formNotes.value))
                taskFormDiv.classList.add("hidden");
            }
        })

        btnsDeleteTask.forEach((btn) =>{
            btn.addEventListener("click", (e)=>{
                // console.log("clicked");
                LogicModule.removeTask(e.target.parentNode.parentNode.firstElementChild.textContent, e.target.previousSibling.textContent)

            })
        })
        

    }

    const createEventListeners = () =>{
        const btnsDeleteProject = document.querySelectorAll(".deleteProject");
        


        const btnShowTaskForm = document.querySelectorAll(".showTaskForm");
        const taskFormDiv = document.querySelector("#taskFormDiv");
        const formTask = document.querySelector("#formTask");
        const btnCreateTask = document.querySelector("#btnCreateTask");
        const btnsDeleteTask = document.querySelectorAll(".deleteTask");

        btnsDeleteProject.forEach((btn) =>{
            btn.addEventListener("click", (e)=>{
                LogicModule.removeProject(e.target.previousSibling.textContent)

            })
        })

        btnShowTaskForm.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                taskFormDiv.classList.remove("hidden");
                taskFormDiv.firstElementChild.firstElementChild.innerHTML = `New Task for: ${e.target.id}`;
            })
            formTask.reset();
        })

        btnCreateTask.addEventListener("click", (e) =>{
            
            const formTitle = document.querySelector("#formTTitle")
            const formDesc = document.querySelector("#formTDesc")
            const formDate = document.querySelector("#formTDate")
            const formPrior = document.querySelector("#formTPriority")
            const formNotes = document.querySelector("#formTNotes")

            //getting project title from title of taskformDiv
            let projectTitle = btnCreateTask.parentNode.firstElementChild.innerHTML.split(": ")[1];
            // console.log("pressed create task for: " + projectTitle);
            e.preventDefault();
            let isCorrect = formTask.checkValidity();
            // console.log(isCorrect);
            formTask.reportValidity();
            if(isCorrect){
                
                LogicModule.addTask(projectTitle,
                                                    ToDo(formTitle.value,
                                                            formDesc.value,
                                                            formDate.value,
                                                            formPrior.value,
                                                            formNotes.value))
                taskFormDiv.classList.add("hidden");
            }
        })

        btnsDeleteTask.forEach((btn) =>{
            btn.addEventListener("click", (e)=>{
                // console.log("clicked");
                LogicModule.removeTask(e.target.parentNode.parentNode.firstElementChild.textContent, e.target.previousSibling.textContent)

            })
        })
    }

    const showProjects = (projectsArr) =>{
        // console.log(projectsArr);
        content.innerHTML = "";
        projectsArr.forEach((project)=>{
            const projectDiv = document.createElement("div");

            projectDiv.classList.add("project");

            projectDiv.innerHTML = `<h2>${project.getTitle()}</h2>`;
            projectDiv.innerHTML += `<p class="deleteProject">X</p>`;

            project.getList().forEach((task)=>{
                const taskDiv = document.createElement("div");

                taskDiv.classList.add("task"); 

                taskDiv.innerHTML = `<h3>Task: ${task.getTitle()}</h3>`;
                taskDiv.innerHTML += `<p class="deleteTask">Delete</p>`;
                taskDiv.innerHTML += `<p>Desc: ${task.getDesc()}</p>`
                taskDiv.innerHTML += `<p>Due Date: ${task.getDueDate()}</p>`

                let dateArr = task.getDueDate().split("-");
                // console.log(dateArr)
                //imported from date-fns
                taskDiv.innerHTML += `<p>*${formatDistanceToNow(new Date(
                                                                Number(dateArr[0]), 
                                                                Number(dateArr[1])-1,
                                                                Number(dateArr[2])),
                                                                { addSuffix: true })}</p>`
                taskDiv.innerHTML += `<p>Priority: ${task.getPriority()}</p>`
                taskDiv.innerHTML += `<p>* ${task.getNotes()}</p>`
                projectDiv.appendChild(taskDiv);
            })
            
            projectDiv.innerHTML += `<button id="${project.getTitle()}" class="showTaskForm">Add Task</button>`;

            content.appendChild(projectDiv);
        })
        

        DisplayController.createEventListeners();
    }

    return {saySomething, showProjects, createInitialEventListeners, createEventListeners}
})();


const LogicModule = (()=>{

    let projects = [];

    const startUpProcess = () =>{

        //local Storage stuff
        if(checkLocalStorage()){
            _populateProjectsArr();

        }else{
            console.log("no MyProjects in localStorage, or empty");
            _createDefaultProj();
        }


        DisplayController.showProjects(projects);
        DisplayController.createInitialEventListeners();



    }

    const _populateProjectsArr = () =>{

        projects=[]; //emptying projects array

        let myProjectsStorage = localStorage.getItem("myProjects").split("#:#:#");

        myProjectsStorage.pop();
        // console.log(myProjectsStorage);

        myProjectsStorage.forEach((project)=>{
            //getting the project name, and eliminating from string
            let projectTitle = "";
            let taskArr = [];
            let i = project.indexOf("#-#")
            projectTitle = project.slice(0,i);
            project = project.substr(i + 3);
            
            //getting all the tasks from project and creating them
            const tasks = [];
            taskArr = project.split("#-#");
            // console.log(taskArr);
            taskArr.pop();
            taskArr.forEach((task)=>{
                let details = task.split("-#-");
                // console.log(details);
                tasks.push(ToDo(details[0], details[1], details[2], Number(details[3]),details[4]));
            })

            projects.push(ToDoProject( projectTitle, tasks));
            // console.log(projects);


        })


    }

    const addProject = (project) =>{
        projects.push(project);

        DisplayController.showProjects(projects);

        _populateLocalStorage();

    }

    const _populateLocalStorage = () =>{
        let newString = "";
        // console.log(projects[0].getTitle());
        projects.forEach((project)=>{
            
            newString += project.getTitle() + "#-#";
            project.getList().forEach(task =>{
                newString += task.getTitle() + "-#-"
                +task.getDesc() + "-#-"
                +task.getDueDate() + "-#-"
                +task.getPriority() + "-#-"
                +task.getNotes() + "#-#";
            });
            newString += "#:#:#"
        })

        // console.log(newString);

        localStorage.setItem("myProjects",newString)
        //localStorage.removeItem("myProjects");
    }

    const _createDefaultProj = () =>{
        addProject(ToDoProject("My Project", ToDo("My Task"
                                                    , "Must be done immediately, priority 5!"
                                                    , "2021-08-19"
                                                    , 5
                                                    , "The world is ending!")));
    }

    const checkLocalStorage = () =>{
        if(localStorage.getItem("myProjects") == null){      
            return false;
        }else if(localStorage.getItem("myProjects") == ""){
            return false;
        }else{
            return true;
        }
    }

    const removeProject = (project) =>{
        // console.log("trying to remove " + project);
        let indextoDelete;
        projects.forEach((ToDoProject, index)=>{
            if(ToDoProject.getTitle() == project){
                indextoDelete = index;
            }

        })

        projects.splice(indextoDelete,1);

        DisplayController.showProjects(projects);

        _populateLocalStorage();

        

        
    }

    const addTask = (project, task)=>{
        let projectIndex;
        projects.forEach((ToDoProject, index)=>{
            if(ToDoProject.getTitle() == project){
                projectIndex = index;
            }

        })

        projects[projectIndex].addToDo(task);

        DisplayController.showProjects(projects);

        _populateLocalStorage();
    }

    const removeTask = (project, task) =>{


        console.log("trying to remove " + project + " and " + task);
        let indexOfProject;
        projects.forEach((ToDoProject, index)=>{
            if(ToDoProject.getTitle() == project){
                indexOfProject = index;
            }

        })

        projects[indexOfProject].removeToDo(task);

        DisplayController.showProjects(projects);

        _populateLocalStorage();

        
    }

    return{startUpProcess, addProject, removeProject, addTask, removeTask}
})();


export {DisplayController, LogicModule};