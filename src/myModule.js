//myModule.js

import {ToDo, ToDoCheck, ToDoProject} from './toDo.js';

//A Module for editing DOM
const DisplayController  = (()=>{

    const content = document.querySelector("#content");

    let aVariable = "hello"

    //privates is better to declare starting with _
    //set popup to visible
    let _showPopUp = (something)=>{
        console.log(something);
    }

    let saySomething = (something) =>{
        _showPopUp(something);
    }

    const createEventListeners = () =>{
        const btnShowProjectForm = document.querySelector("#btnShowProjectForm");
        const btnCreateProject = document.querySelector("#btnCreateProject");

        const projectFormDiv = document.querySelector("#projectFormDiv");
        const formProject = document.querySelector("#formProject");

        const taskFormDiv = document.querySelector("#taskFormDiv");

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
                let date = formPTDate.value.split("-")
                console.log(date);
                

            }
        })
        

    }

    const showProjects = (projectsArr) =>{
        // console.log(projectsArr);
        content.innerHTML = "";
        projectsArr.forEach((project)=>{
            const projectDiv = document.createElement("div");

            projectDiv.classList.add("project");
            projectDiv.innerHTML = `<h2>${project.getTitle()}</h2>`

            project.getList().forEach((task)=>{
                const taskDiv = document.createElement("div");

                taskDiv.classList.add("task"); 

                taskDiv.innerHTML = `<h3>${task.getTitle()}</h3>`;
                taskDiv.innerHTML += `<p>${task.getDesc()}</p>`
                taskDiv.innerHTML += `<p>${task.getDueDate()}</p>`
                taskDiv.innerHTML += `<p>Priority: ${task.getPriority()}</p>`
                taskDiv.innerHTML += `<p>${task.getNotes()}</p>`
                projectDiv.appendChild(taskDiv);
            })
            

            content.appendChild(projectDiv);
        })
        


    }

    return {saySomething, showProjects, createEventListeners}
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
        DisplayController.createEventListeners();



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

    const _addProject = (project) =>{
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
        _addProject(ToDoProject("My Project", ToDo("My Task"
                                                    , "Must be done immediately, priority 5!"
                                                    , "A date"
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

    return{startUpProcess}
})();


export {DisplayController, LogicModule};