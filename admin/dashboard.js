document.addEventListener("DOMContentLoaded", function() {
    function addCourse() {
        const courseNameInput = document.getElementById("course-name");
        const courseName = courseNameInput.value.trim();
        
        if (courseName === "") {
            alert("Please enter a course name.");
            return;
        }
        
        const courseList = document.querySelector(".course-list");
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.textContent = courseName;
        courseCard.onclick = function() {
            showCourseDetails(courseName);
        };
        
        courseList.appendChild(courseCard);
        courseNameInput.value = "";
    }
    
    function showCourseDetails(courseName) {
        alert("Showing details for " + courseName);
    }
    
    document.querySelector("button").addEventListener("click", addCourse);
});
