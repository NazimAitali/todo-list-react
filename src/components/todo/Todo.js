import React from "react";
import Elem from "../element/Elem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function Todo({ input, setInput, list, setList, err, setErr }) {
  const add = () => {
    setErr("");
    setList((prev) => {
      if (input !== "") {
        return [...prev, input];
      } else {
        return setList([...prev]), setErr("Insert task to continue in your list");
      }
    });
    setInput("");
  };
  return (
    <div className="todo-container">
      <div className="add-container">
        <div className="add-content">
          <input
            className="input"
            minlength="1" maxlength="65"
            type="text"
            value={input}
            placeholder="insert you task here"
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <FontAwesomeIcon className="btn-add" onClick={add} icon={faPlusCircle} />
        </div>
      </div>
      <div className="list">
        <ol>
          {err ? (<><div className="error">{err}</div><button className="btn-return" onClick={(()=>{setErr("")})} ><FontAwesomeIcon icon={faArrowCircleUp}/>&nbsp;&nbsp;Return to list</button></>
            
          ) : (
            <>
              {list.length !== 0 ? (
                <>
                  {list.map((elem, index) => {
                    return (
                      <Elem
                        key={index}
                        id={index}
                        elem={elem}
                        onSelect={(id) => {
                          setList((prev) => {
                            return prev.filter((arr, index) => {
                              return index !== id;
                            });
                          });
                        }}
                      />
                    );
                  })}
                </>
              ) : (<div className="no-task">Insert task to create list</div>
                
              )}
            </>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
