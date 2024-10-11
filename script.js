
document.addEventListener('DOMContentLoaded', () => {
    fetchCourses();
});

function fetchCourses() {
    const courses = [
        { id: 1, title: 'Mathématiques', file: 'maths.pdf' },
        { id: 2, title: 'Physique', file: 'physique.pdf' },
        { id: 3, title: 'Chimie', file: 'chimie.pdf' },
    ];

    const courseList = document.getElementById('course-list');

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <a href="pdfs/${course.file}" download>Télécharger PDF</a>
        `;
        courseList.appendChild(courseItem);
    });
}
