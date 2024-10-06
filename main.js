// course list of objects 
let lessons =[
    {
        "id":1,
        "name":"1ST SEMESTER MATHEMATICS",
        "details":"Algebra-I and Calculus-I",
        "semester":"1",
        "subject":"Mathematics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzBJbjVyOiDrHPFX76rO3TF_&si=pKoxt2YhRLj1kfbZ",
        "syllabus":"Maths_1.pdf",
        "questionPaper":"sem1Maths.pdf"
    },
    {
        "id":2,
        "name":"1ST SEMESTER PHYSICS",
        "details":"Mathematical Physics-I, Mechanics, Waves and Acoustics",
        "semester":"1",
        "subject":"Physics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzAE0qPVXMFUNznv0zESb2Fq&si=myKQU44WsO46xdIu",
        "syllabus":"Physics_Syllabus_1.pdf",
        "questionPaper":"sem1Physics.pdf"
    },
    {
        "id":3,
        "name":"3RD SEMESTER MATHEMATICS",
        "details":"Statics and Calculus-II",
        "semester":"3",
        "subject":"Mathematics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzDv2V5DrOvfyMvVZQtKwY2K&si=wfUe5jmfCetp3rUv",
        "syllabus":"Maths_3.pdf",
        "questionPaper":""
    },
    {
        "id":4,
        "name":"3RD SEMESTER PHYSICS",
        "details":"Thermal Physics, Optics",
        "semester":"3",
        "subject":"Physics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzCIVjZ8qz5BZGW1B9kqDcBY&si=XHiGE2rjBPizYbR5",
        "syllabus":"Physics_Syllabus_3.pdf",
        "questionPaper":""
    }
]


if(!localStorage.getItem('PopularCourses')){
    localStorage.setItem('PopularCourses',[1,2,3]);
}

function gotoCoursePage(id){
    let indexId = id - 1;
    let values = lessons[indexId];
    let list = JSON.parse("["+localStorage.getItem('PopularCourses')+"]");
    if(!list.includes(id)){
        list.shift();
        list.push(id);
    }
    localStorage.setItem('PopularCourses',list);
    window.location.href = `courseDetailPage.html?name=${values.name}&details=${values.details}&playlist=${values.contents}&syllabus=${values.syllabus}&question=${values.questionPaper}`;
}

const fullPath = window.location.pathname;
const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);

if(fileName == "index.html" || fileName == ""){
    const doc = document.querySelector(".courses")
    lessons.forEach((lesson) => {
        if(localStorage.getItem('PopularCourses').includes(lesson.id)){
            doc.innerHTML +=`<div class="course-card">
            <h3>${lesson.name}</h3> 
            <p>${lesson.details}</p> 
            <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
            </div>`;
        }
    })    
}
else if(fileName == "courses.html"){

    let valueSemester = "";
    let valueSubject = "";

    function selectedOptions(semester , subject){
        let list = []; 
        if (semester == "" && subject == ""){
            list = [1,2,3,4];
        }
        else if(semester == "" && subject != ""){
            lessons.forEach((lesson) => {
                if(lesson.subject == subject){
                   list.push(lesson.id); 
                }
            });
        }
        else if(semester != "" && subject == ""){
            lessons.forEach((lesson) => {
                if(lesson.semester == semester){
                    list.push(lesson.id);
                }
            });
        }
        else{
            lessons.forEach((lesson) => {
                if(lesson.subject == subject && lesson.semester == semester){
                    list.push(lesson.id);
                }
            });
        }
        console.log(list);
        return list;
    }

    function AddingLesson(LessonList){
        const doc = document.querySelector(".course-list");
        doc.innerHTML = "";
        lessons.forEach((lesson) => {
            if(LessonList.includes(lesson.id)){
                doc.innerHTML +=`<div class="course-card">
                <h3>${lesson.name}</h3> 
                <p>${lesson.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
                </div>`;
            }
        })
    }

    document.querySelector("#semester").onchange = function(){
        valueSemester = this.value;
        AddingLesson(selectedOptions(valueSemester , valueSubject));
    }

    document.querySelector("#subject").onchange = function(){
        valueSubject = this.value;
        AddingLesson(selectedOptions(valueSemester , valueSubject));
    }

    AddingLesson([1,2,3,4]);

    console.log(typeof(localStorage.getItem('PopularCourses')));
}
else{
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const details = urlParams.get('details');
    const playlist = urlParams.get('playlist');
    const syllabus = urlParams.get('syllabus');
    const question = urlParams.get('question');
    
    document.querySelector('.course-detail').innerHTML=`<div class="course-info">
    <div>
        <h1 class="course-title">${name}</h1>
        <p>${details}</p>
    </div>
    </div>

    <div class="resources">
    <h3>Additional Resources</h3>
    <ul>
        <li><a href="${syllabus}">Download Course Syllabus</a></li>
        <li><a href="${playlist}">Video Playlist</a></li>
        <li><a href="${question}">Previous Year Question Papers</a></li>
    </ul>
    </div>`
}    
