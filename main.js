let lessons =[
    {
        "id":"1",
        "name":"1ST SEMESTER MATHEMATICS",
        "details":"Algebra-I and Calculus-I",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzBJbjVyOiDrHPFX76rO3TF_&si=pKoxt2YhRLj1kfbZ"
    },
    {
        "id":"2",
        "name":"1ST SEMESTER PHYSICS",
        "details":"Mathematical Physics-I, Mechanics, Waves and Acoustics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzAE0qPVXMFUNznv0zESb2Fq&si=myKQU44WsO46xdIu"
    },
    {
        "id":"3",
        "name":"3RD SEMESTER MATHEMATICS",
        "details":"Statics and Calculus-II",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzCIVjZ8qz5BZGW1B9kqDcBY&si=XHiGE2rjBPizYbR5"
    },
    {
        "id":"4",
        "name":"3RD SEMESTER PHYSICS",
        "details":"Thermal Physics, Optics",
        "contents":"https://youtube.com/playlist?list=PL8tjymE0TCzDv2V5DrOvfyMvVZQtKwY2K&si=wfUe5jmfCetp3rUv"
    },
    {
        "id":"5",
        "name":"5TH SEMESTER COMPUTER SCIENCE",
        "details":"Operating System and Introduction To LINUX",
        "contents":"https://youtube.com/playlist?list=PL3eEXnCBViH-SiXK96TZd-7k3Qvk5g1YH&si=NrkQZ4-ljBU_sABO"
    },
    {
        "id":"6",
        "name":"5TH SEMESTER COMPUTER SCIENCE",
        "details":"Object Oriented Programming Through Java",
        "contents":"https://youtube.com/playlist?list=PLbGui_ZYuhij8Oplrvjt_RlDliZQgdxoV&si=XeEWCK0AJV_1X5Pn"
    }
]

document.addEventListener("DOMContentLoaded",function(){
    const fullPath = window.location.pathname;

    const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);

    if(fileName == "courseDetailPage.html"){
        const urlParams = new URLSearchParams(window.location.search);

        // Access multiple query parameters
        const name = urlParams.get('name');
        const details = urlParams.get('details');
        const playlist = urlParams.get('playlist');
        const sectionFill = document.querySelector('.course-detail')
        sectionFill.innerHTML=`<div class="course-info">
        <div>
            <h1 class="course-title">${name}</h1>
            <p>${details}</p>
        </div>
    </div>

    <div class="resources">
        <h3>Additional Resources</h3>
        <ul>
            <li><a href="https://anthonys.ac.in/pages/facilities/fclt_library.php">Download Course Syllabus</a></li>
            <li><a href="${playlist}">Video Playlist</a></li>
            <li><a href="https://anthonys.ac.in/pages/facilities/fclt_library.php">Previous Year Question Papers</a></li>
        </ul>
    </div>`
    }
    else{
        document.querySelectorAll('.btn-link').forEach(button =>{
            button.onclick = function(){
                let indexId = parseInt(button.dataset.id) - 1;
                let values = lessons[indexId];
                window.location.href = `courseDetailPage.html?name=${values.name}&details=${values.details}&playlist=${values.contents}`;
            }
        })
    }
});