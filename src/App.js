import "./App.css";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";
import NoteFile from "./Components/NoteFile";
import CreateArea from "./Components/CreateArea";

function App() {

  function addNote(note){

  }

  return (
    <div>
      <Heading />
      <CreateArea 
        onAdd = {addNote}
      />
      {NoteFile.map( newnote => {
        return (
          <Notes
            key={newnote.key}
            title={newnote.title}
            content={newnote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
