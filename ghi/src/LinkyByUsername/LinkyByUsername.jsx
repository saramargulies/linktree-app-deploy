// import React, { useEffect, useState } from "react";
// import "react-router-dom";
// import { useParams, Link } from "react-router-dom";

// const LinkyByUsername = () => {
//   let { username } = useParams();

//   const [parks, setParks] = useState([]);

//   const fetchData = async () => {
//     const url = `${process.env.REACT_APP_API_HOST}/api/parks/${state}`;

//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       setParks(data.data);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <>
//       <div className="page-container">
//         <div className="small-spacer"></div>
//         <h1>National Parks in {state}</h1>
//         <div className="m-5">
//           <table>
//             <tbody>
//               {parks.map((park) => {
//                 return (
//                   <tr key={park.id}>
//                     <td>
//                       <div className="card mb-3">
//                         <div className="row g-0">
//                           <div className="col-md-4 d-flex align-items-center">
//                             {park.images.length > 0 && (
//                               <img
//                                 className="img-fluid rounded-start"
//                                 src={park.images[0].url}
//                                 alt={park.fullName}
//                               />
//                             )}
//                           </div>
//                           <div className="col-md-8">
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {" "}
//                                 <Link
//                                   className="link stretched-link"
//                                   to={`/park/${park.parkCode}`}
//                                 >
//                                   {park.fullName}
//                                 </Link>
//                               </h5>
//                               <p className="card-text">{park.description}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//         <div className="small-spacer"></div>
//       </div>
//     </>
//   );
// };

// export default LinkyByUsername;
