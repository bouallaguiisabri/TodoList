//import "./css/main.css";
//import DisplayTodos from "./components/DisplayTodos";
//import Todos from "./components/Todos";

import { motion } from "framer-motion";
import Addtask from "./componnet/Addtask";
import DisplayTask from "./componnet/displayTask";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Addtask />
        <DisplayTask />
      </motion.div>
    </div>
  );
}

export default App;
