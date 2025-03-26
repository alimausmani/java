// import './CourseCard.css';

// const CourseCards = () => {
//     return (
//         <div className="containers">
//             <div className="card">
//                 <div className="icon">
//                     <img className='IMG1' src="https://static.vecteezy.com/system/resources/previews/019/518/544/original/programming-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="Online Counseling Icon" />
//                 </div>
//                 <h3>Programming Languages</h3>
//                 <p className='peragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore.?</p>
//                 <a className='anchor' href="#">Learn More →</a>
//             </div>
//             <div className="card">
//                 <div className="icon">
//                     <img src="https://skilllauncher.com/uploads/thumbnails/course_thumbnails/course_thumbnail_155.jpg" alt="Audio Course Icon" />
//                 </div>
//                 <h3>DSA Course</h3>
//                 <p className='peragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore.?</p>
//                 <a className='anchor' href="#">Learn More →</a>
//             </div>
//             <div className="card">
//                 <div className="icon">
//                     <img src="data:image/png;base64,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" alt="Professional Training Icon" />
//                 </div>
//                 <h3>Professional Training</h3>
//                 <p className='peragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore. ?</p>
//                 <a className='anchor' href="#">Learn More →</a>
//             </div>
//         </div>
//     );
// }

// export default CourseCards;