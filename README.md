# Lean Academy: Website Demo
The Lean Academy is a MERN stack-based website specifically designed for a weight loss program for summer school camps. It features complete CRUD operations with an authentication system and robust backend.

## Live Link
https://lean-academy-1346d.web.app/
-- -- 
### Features
#### ***User Roles:***
The website distinguishes between three types of users: Students, Instructors, and Admins, each with its own specific dashboard.

-- **Student Dashboard:** Once registered, a user becomes a student by default. They can select a class added by the instructor and approved by the admin, enroll in classes through Stripe payment gateway, view their payment history, and remove any class if desired.

-- **Instructor Dashboard:** Admins can change a user's role from Student to Instructor. Instructors can then add new classes, edit existing ones, and view the list of their classes along with enrolled student counts. Any class added by an instructor is in pending status until approved by the Admin.

-- **Admin Dashboard:** Admins manage all users and classes. They alone can change a user's role to either Instructor or Admin. Admins also manage classes: viewing seat availability for each class, approving, denying, or providing feedback for each class.

Admin credentials for the website:
- Email: admin@admin.com 
- Password: Admin123@

-- --
#### ***Website Layout:***
- **Homepage:** Showcases six popular classes chosen by students. These classes are added by instructors and approved by Admin. This function is carried out in the backend server using MongoDB aggregate.

- **Classes Page:** All approved classes are listed on the 'Class' page in the menu bar. Students can choose from these classes until seat availability reaches zero.

- **Dashboard Access:** Only valid Students, Instructors, or Admins can navigate to their respective dashboards. Access to these paths has been secured using JWT tokens.

- **Website Design:** The website design supports both dark/light theme toggle and is mobile responsive.
-- --
### Technologies
*HTML - CSS - React - Tailwind - DaisyUI - Headless UI - MongoDB - Express - Firebase - Vercel - React Query - Axios - JWT - Stripe*