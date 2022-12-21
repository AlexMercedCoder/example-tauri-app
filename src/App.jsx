import { invoke } from '@tauri-apps/api/tauri'
import {createSignal} from "solid-js"

function App() {

  const [word, setWord] = createSignal("")

  const handleClick = async (event) => {
    // invoke backend action and save result in variable
    const result = await invoke("return_string", {
          word: "You triggered the tauri action!"
        })

    // alert the return value
    setWord(result)
  }

  return (
    <div>
      <h1>Word signal is currently: {word}</h1>
      <button onClick={handleClick}>Trigger the Tauri Action</button>
    </div>
  );
}

export default App;
