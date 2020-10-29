import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import CourseTeacher from "../components/course_teacher/course_teacher"
import foto from "../img/Profe3.jpg"

export default function teacher_detail() {
  return (
    <>
      <Navbar />
      <div className="course-teacher">
        <CourseTeacher
          star={4.5}
          rutafoto={foto}
          name="Git y GitHub en HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
        <CourseTeacher
          star={2}
          rutafoto={foto}
          name="GitHub y HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
        <CourseTeacher
          star={3.5}
          rutafoto={foto}
          name="GitHub y HTML"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ab
        doloribus. Autem, quibusdam. Quibusdam, ducimus voluptate enim similique
        ipsa repudiandae placeat laudantium eligendi cupiditate id, doloribus
        vitae provident dignissimos obcaecati minus asperiores mollitia!
        Deserunt eveniet quae in velit quasi totam adipisci ducimus earum?
        Voluptatem quam ex, deserunt soluta a reprehenderit."
        />
      </div>
      <Footer />
    </>
  )
}
