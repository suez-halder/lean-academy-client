# Lean Academy: website demo
## Live Link
https://lean-academy-1346d.web.app/

- Lean academy is a website based on weight loss program for summer school camp. This is a MERN stack website where you can do each CRUD operations. Authentication(Firebase) system is implemented for login/register.
- There are 3 types of users(Student, Instructor, Admin) in Lean Academy website:
-- Student Dashboard: Once a user register, he/she will become automatically a user. They can select a class which is added by instructor and approved by admin. Enroll in a particular class by paying through Stripe payment gateway, see their payment history, delete any class if they want. 
-- -- 
-- Instructor Dashboard: Admin can change the role of a user from Student to Instructor. Once a user becomes instructor, he/she can add new a new class, edit that particular class, also see their all classes lists where they can see how many students have enrolled in their course. Note, once the instructor add any class, it will be in pending state. Once the Admin approves the class, then Students can enroll. 
-- --
-- Admin Dashboard: Admin can manage all users and all classes. Only Admin has the permission to change the role of the user, either instructor or admin. Admin can also manage all the classes like, Admin can see all available seats for a particular class, approve, deny, or provide feedback to any class. 

- Admin email: admin@admin.com 
- Admin password: Admin123@

-- --
- Lean academy homepage consists of popular 6 classes enrolled by the student which is added by the instructor and approved by the Admin. MongoDB aggregate is used to perform this task in the backend server. 
- In the menu bar there's a Class page where all the approved classes are listed and student can select them. If the available seats of any class become 0, then a student cannot further select it.
- Only valid Student/Instructor/Admin can navigate to their own dashboard. Their api path has been secured using JWT token.
- Dark/light theme toggle, mobile responsive.
-- --
## Technologies:
--  HTML - CSS - Tailwind - DaisyUI - Headless UI-  React - MongoDB - Express - Firebase - Vercel - Axios - JWT - Stripe - React Query 