import React from 'react';

// function App() {

//   var empsArray = 
// 			[
// 					{"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
// 					{"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
// 					{"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
//           {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
// 					{"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
// 					{"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
//           {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
// 					{"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
// 					{"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30}
// 			];	


//       let resultsArray = empsArray.map(item =>  
//         <tr>
//           <td>{item.empno}</td>
//           <td>{item.ename}</td>
//           <td>{item.job}</td>
//           <td>{item.sal}</td>
//           <td>{item.deptno}</td>
//         </tr> );

//   return (
//       <>
//         <h3>Developing Web Applications using React JS</h3>
//         <hr/>

//         <table  border="2" width="500">
         
//           <tr>
//             <th>Empno</th>
//             <th>Ename</th>
//             <th>Job</th>
//             <th>Salary</th>
//             <th>Deptno </th>
//           </tr>

//           {resultsArray}

//         </table>
       
       
//       </>     
//   );
// }

// App.js (or any other appropriate file)
import ImageGallery from './ImageGallery';

const App = () => {
  const imageArray = ["image1.jpg", "image2.jpg", "image3.jpg"];

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={imageArray} />
    </div>
  );
};



// const App = () => {
//   let usersArray = [
//     {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
//     {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
//     {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
//     {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
//     {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
//     {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
//   ];

//   const UsersList = ({ usersArray }) => {
//     return (
//       <div>
//         <h1>Users List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Email</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Avatar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usersArray.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.email}</td>
//                 <td>{user.first_name}</td>
//                 <td>{user.last_name}</td>
//                 <td>
//                   <img src={user.avatar} alt={user.first_name} style={{ width: 50, height: 50 }} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <UsersList usersArray={usersArray} />
//     </div>
//   );
// };


export default App;