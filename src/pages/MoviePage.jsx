// import React from "react";
// import { UserAuth } from "../context/AuthContext";

// const MoviePage = () => {
//   const [movies, setMovies] = useState();

//   const { user } = UserAuth();

//   useEffect(() => {
//     onSnapshot(doc(db, "users", "savedShows", `${user?.email}`), (doc) => {
//       setMovies(doc.data()?.savedShows);
//     });
//   }, [user?.email]);
//   return (
//     <div>
//       <div className="w-full h-[550px] text-white">
//         <div className="w-full h-full">
//           <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
//           <img
//             className="w-full h-full object-cover"
//             src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//             alt={movie?.title}
//           />
//         </div>
//         <div className="absolute item-center justify-start space-y-2 top-[20%] md:top-[30%] px-2 md:px-16">
//           <p className="text-2xl md:text-4xl">{movie?.title}</p>
//           <div className="space-x-4">
//             <button className="border rounded px-5 py-2 text-sm">Review</button>
//             <button className="bg-black text-white rounded px-5 py-2 text-sm">
//               See Reviews
//             </button>
//           </div>
//           <div className="flex items-center justify-between px-10">
//           <p className="text-sm md:text-md text-gray-400">
//             Released: {movie?.release_date}
//           </p>
//           <p className="text-sm md:text-md text-gray-400">
//             Adult: {movie?.adult}
//           </p>
//           <p className="text-sm md:text-md text-gray-400">
//             Released: {movie?.popularity}
//           </p>
//           </div>

//           <p className="text-md md:text-xl">{movie?.overview}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoviePage;
