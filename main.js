// course list of objects 
let lessons =[
    {
        "name":"1ST SEMESTER MATHEMATICS",
        "details":"Algebra-I and Calculus-I",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzBJbjVyOiDrHPFX76rO3TF_&si=pKoxt2YhRLj1kfbZ",
        "syllabus":"Maths_1.pdf"
    },
    {
        "name":"1ST SEMESTER PHYSICS",
        "details":"Mathematical Physics-I, Mechanics, Waves and Acoustics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzAE0qPVXMFUNznv0zESb2Fq&si=myKQU44WsO46xdIu",
        "syllabus":"Physics_Syllabus_1.pdf"
    },
    {
        "name":"3RD SEMESTER MATHEMATICS",
        "details":"Statics and Calculus-II",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzDv2V5DrOvfyMvVZQtKwY2K&si=wfUe5jmfCetp3rUv",
        "syllabus":"Maths_3.pdf"
    },
    {
        "name":"3RD SEMESTER PHYSICS",
        "details":"Thermal Physics, Optics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzCIVjZ8qz5BZGW1B9kqDcBY&si=XHiGE2rjBPizYbR5",
        "syllabus":"Physics_Syllabus_3.pdf"
    }
]

function gotoCoursePage(id){
    let values = lessons[id];
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

if(fileName == "courseDetailPage.html"){
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const details = urlParams.get('details');
    const playlist = urlParams.get('playlist');
    const syllabus = urlParams.get('syllabus');
    
    document.querySelector('#AddInformation').innerHTML=`<div class="row mb-4">
            <div class="col-12 text-center">
                <h1 class="course-title">${name}</h1>
                <p class="lead">${details}</p>
            </div>
        </div>
        
        <div class="resources">
            <h3 class="text-center">Additional Resources</h3>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                    <a href="${syllabus}" class="text-decoration-none">Download Course Syllabus</a>
                </li>
                <li class="list-group-item">
                    <a href="${playlist}" class="text-decoration-none">Video Playlist</a>
                </li>
                <li class="list-group-item">
                    <a href="https://anthonys.ac.in/pages/facilities/fclt_library.php" class="text-decoration-none">Previous Year Question Papers</a>
                </li>
            </ul>
        </div>`;
}