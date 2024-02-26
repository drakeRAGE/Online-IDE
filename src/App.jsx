import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#110c1b" color="blue.200" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App;

// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Home from './pages/Home';
// // import EditorPage from './pages/EditorPage';
// import {CodeEditor} from './components/CodeEditor';
// function App() {
//     return (
//         <>
//             <div>
//                 <Toaster
//                     position="top-right"
//                     toastOptions={{
//                         success: {
//                             theme: {
//                                 primary: '#4aed88',
//                             },
//                         },
//                     }}
//                 ></Toaster>
//             </div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route
//                         path="/editor/:roomId"
//                         element={<CodeEditor />}
//                     ></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;

