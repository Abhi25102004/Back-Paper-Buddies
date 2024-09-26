// course list of objects 
let lessons =[
    {
        "id":"1",
        "name":"1ST SEMESTER MATHEMATICS",
        "details":"Algebra-I and Calculus-I",
        "semester":"1",
        "subject":"Mathematics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzBJbjVyOiDrHPFX76rO3TF_&si=pKoxt2YhRLj1kfbZ",
        "syllabus":"Maths_1.pdf",
        "questionPaper":""
    },
    {
        "id":"2",
        "name":"1ST SEMESTER PHYSICS",
        "details":"Mathematical Physics-I, Mechanics, Waves and Acoustics",
        "semester":"1",
        "subject":"Physics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzAE0qPVXMFUNznv0zESb2Fq&si=myKQU44WsO46xdIu",
        "syllabus":"Physics_Syllabus_1.pdf",
        "questionPaper":""
    },
    {
        "id":"3",
        "name":"3RD SEMESTER MATHEMATICS",
        "details":"Statics and Calculus-II",
        "semester":"3",
        "subject":"Mathematics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzDv2V5DrOvfyMvVZQtKwY2K&si=wfUe5jmfCetp3rUv",
        "syllabus":"Maths_3.pdf",
        "questionPaper":""
    },
    {
        "id":"4",
        "name":"3RD SEMESTER PHYSICS",
        "details":"Thermal Physics, Optics",
        "semester":"3",
        "subject":"Physics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzCIVjZ8qz5BZGW1B9kqDcBY&si=XHiGE2rjBPizYbR5",
        "syllabus":"Physics_Syllabus_3.pdf",
        "questionPaper":""
    },
    {
        "id":"5",
        "name":"5TH SEMESTER COMPUTER SCIENCE",
        "details":"Operating System and Introduction To LINUX",
        "semester":"5",
        "subject":"Computer Science",
        "contents":"https://youtube.com/playlist?list=PL3eEXnCBViH-SiXK96TZd-7k3Qvk5g1YH&si=NrkQZ4-ljBU_sABO",
        "syllabus":"Operating_System.pdf",
        "questionPaper":""
    },
    {
        "id":"6",
        "name":"5TH SEMESTER COMPUTER SCIENCE",
        "details":"Object Oriented Programming Through Java",
        "semester":"5",
        "subject":"Computer Science",
        "contents":"https://youtube.com/playlist?list=PLbGui_ZYuhij8Oplrvjt_RlDliZQgdxoV&si=XeEWCK0AJV_1X5Pn",
        "syllabus":"Object_Java.pdf",
        "questionPaper":""
    }
]


function selectedOptions(semester , subject){
    let fillString = "";
    if (semester == "" && subject == ""){
        fillString = "";
        lessons.forEach((lesson) => {
            fillString += `<div class="course-card">
            <h3>${lesson.name}</h3> 
            <p>${lesson.details}</p> 
            <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
            </div>`;
        });
    }
    else if(semester == "" && subject != ""){
        fillString = "";
        lessons.forEach((lesson) => {
            if(lesson.subject == subject){
                fillString += `<div class="course-card">
                <h3>${lesson.name}</h3> 
                <p>${lesson.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
                </div>`;
            }
        });
    }
    else if(semester != "" && subject == ""){
        fillString = "";
        lessons.forEach((lesson) => {
            if(lesson.semester == semester){
                fillString += `<div class="course-card">
                <h3>${lesson.name}</h3> 
                <p>${lesson.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
                </div>`;
            }
        });
    }
    else{
        fillString = "";
        lessons.forEach((lesson) => {
            if(lesson.subject == subject && lesson.semester == semester){
                fillString += `<div class="course-card">
                <h3>${lesson.name}</h3> 
                <p>${lesson.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
                </div>`;
            }
        });
    }
    return fillString;
}

function gotoCoursePage(id){
    let indexId = parseInt(id) - 1;
    let values = lessons[indexId];
    window.location.href = `courseDetailPage.html?name=${values.name}&details=${values.details}&playlist=${values.contents}&syllabus=${values.syllabus}&question=${values.questionPaper}`;
}

// when dom is loaded
document.addEventListener("DOMContentLoaded",function(){
    const fullPath = window.location.pathname;

    const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);

    // when file is courseDetailPage
    if(fileName == "courseDetailPage.html"){
        const urlParams = new URLSearchParams(window.location.search);

        // Access multiple query parameters
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
            <li><a href="https://anthonys.ac.in/pages/facilities/fclt_library.php">Previous Year Question Papers</a></li>
        </ul>
        </div>`
    }
    
    // checking if file is index or course
    else if(fileName == "index.html" || fileName == "courses.html"){
        
        let htmlString = "";

        // if file is index
        if(fileName == "index.html"){
            htmlString = "";
            for(let i = 0 ; i<3 ; i++){
                let courseDetails = lessons[i];
                htmlString += `<div class="course-card">
                <h3>${courseDetails.name}</h3> 
                <p>${courseDetails.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${courseDetails.id})">Enroll Now</button> 
                </div>`;
            }
            document.querySelector(".courses").innerHTML = htmlString;
        }

        // if the file is course
        else{
            htmlString = "";
            let valueSemester = "";
            let valueSubject = "";
            lessons.forEach((lesson) => {
                htmlString += `<div class="course-card">
                <h3>${lesson.name}</h3> 
                <p>${lesson.details}</p> 
                <button class="btn-link" onclick = "gotoCoursePage(${lesson.id})" >Enroll Now</button> 
                </div>`;
            });
            document.querySelector(".course-list").innerHTML = htmlString;

            // when semester is selected
            document.querySelector("#semester").onchange = function(){
                valueSemester = this.value;
                document.querySelector(".course-list").innerHTML = selectedOptions(valueSemester , valueSubject);
            }

            // when subject is selected 
            document.querySelector("#subject").onchange = function(){
                valueSubject = this.value;
                document.querySelector(".course-list").innerHTML = selectedOptions(valueSemester , valueSubject);
            }
        }
    }
});