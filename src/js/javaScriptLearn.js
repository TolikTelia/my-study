import React, {useState, useRef, useEffect} from 'react';
import Symbols from '../js/es6/symbols'
import Iterators from '../js/es6/iterators'
import MapAndOthers from '../js/es6/New collection types'
import PromiseLearning from '../js/es6/Promise'
import Generators from '../js/es6/generators'
import Proxy from '../js/es6/proxy'
import AsyncFunctions from '../js/es6/asyncFunctions'

import Dom from '../js/Environment/dom'
import Contains from '../js/Environment/contains'
import ModifyingDocument from '../js/Environment/modifyingDocument'
import Metrix from '../js/Environment/metrix'
import SizeAndScroll from '../js/Environment/sizeAndScroll'
import Coordinates from '../js/Environment/coordinates'

import DispatchEvent from '../js/Events/dispatchEvent'
import UiEvents from '../js/Events/UI events'
import DragAnDrop from '../js/Events/dragAnDrop'
import KeyBoardEvents from '../js/Events/keyBoardEvents'

import FormPropertiesAndMethods from '../js/form/FormPropertiesAndMethods'
import EventsChangeInput from '../js/form/eventsChangeInput'
import FormsSubmit from '../js/form/formsSubmit'
import OnloadOnerror from "../js/other/onloadOnerror";

import MutationObserver from '../js/Miscellaneous/mutationObserver'
import SelectionRange from '../js/Miscellaneous/selectionRange'


const JavaScriptLearn = () => {


    customElements.define('show-hello', class extends HTMLElement {
        connectedCallback() {
            const shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = `<p>Hello, <span style="color: red">${this.getAttribute('name')}</span></p>`;
        }
    });


    // let buffer = new ArrayBuffer(8);
    // console.log(buffer.byteLength);
    //
    // let sixtyFourView = new Uint16Array(buffer);
    //
    // sixtyFourView[0] = 255;
    // sixtyFourView[3] = 21;
    //
    // console.log(sixtyFourView);
    ////////////////////////////////////
    // let xhr = new XMLHttpRequest();


    let db = useRef().current;

    const [value, setValue] = useState('some');
    const [version, setVersion] = useState(1);
    const helloNameRef = useRef();

    const createDB = () => {
        console.log(value, version);
        let openRequest = indexedDB.open(value, version);
        openRequest.onupgradeneeded = (e) => {
            db = openRequest.result;
            const toBuy = db.createObjectStore('toBuy', {keyPath: 'vitya'});
            const Todo = db.createObjectStore('todo', {keyPath: 'title'});
        };

        openRequest.onsuccess = () => {
            console.log("success");
            db = openRequest.result
            // console.log(db.name);
            // console.log(db.version);
        };

        openRequest.onerror = (e) => {
            console.error("Error", e.target.error);
        };
    };

    const addNote = () => {

        const note = {
            vitya: 'hello',
            text: 'hi))0)'
        };

        const tx = db.transaction('toBuy', 'readwrite');
        const toBuy = tx.objectStore('toBuy');
        toBuy.add(note)

    };

    useEffect(() => {
       console.log(helloNameRef.current.shadowRoot.host)
    });

  return (
    <div className="App">
      <header className="App-header">
        <div className={'App-column'}>
          <h2>ES6</h2>
          <Symbols />
          <Iterators />
          <MapAndOthers />
          <PromiseLearning />
          <Generators />
          <Proxy />
          <AsyncFunctions />
        </div>
        <div className={'App-column'}>
            <h2>DOM, BOM и JS</h2>
            <Dom />
            <Contains />
            <ModifyingDocument />
            <Metrix />
            <SizeAndScroll />
            <Coordinates />
        </div>
        <div className={'App-column'}>
            <DispatchEvent />
            <UiEvents />
            <DragAnDrop />
            <KeyBoardEvents />
        </div>
        <div className={'App-column'}>
            {/*<FormPropertiesAndMethods />*/}
            {/*<EventsChangeInput />*/}
            <FormsSubmit />
        </div>
        <div className={'App-column'}>
            <input type="text" onChange={(e) => {setValue(e.target.value)}} value={value} id={'textDB'} />
            version <input type="text" onChange={(e) => {setVersion(e.target.value)}} value={version} id={'txtVersion'}  />
            <button id={'createDB'} onClick={createDB}>create db</button>

            <button onClick={addNote}>add note</button>
        </div>
          <show-hello ref={helloNameRef} >
          <div className={'App-column'}>
          <h2>ES6</h2>
          <Symbols />
          <Iterators />
          <MapAndOthers />
          <PromiseLearning />
          <Generators />
          <Proxy />
          <AsyncFunctions />
          </div>
          <div className={'App-column'}>
          <h2>DOM, BOM и JS</h2>
          <Dom />
          <Contains />
          <ModifyingDocument />
          <Metrix />
          <SizeAndScroll />
          <Coordinates />
          </div>
          <div className={'App-column'}>
          <DispatchEvent />
          <UiEvents />
          <DragAnDrop />
          <KeyBoardEvents />
          </div>
          <div className={'App-column'}>
          <FormPropertiesAndMethods />
          <EventsChangeInput />
          <FormsSubmit />
          </div>
          <div className={'App-column'}>
          <input type="text" onChange={(e) => {setValue(e.target.value)}} value={value} id={'textDB'} />
          version <input type="text" onChange={(e) => {setVersion(e.target.value)}} value={version} id={'txtVersion'}  />
          <button id={'createDB'} onClick={createDB}>create db</button>

              <button onClick={() => {}} name='John'>2</button>
          </div>
          </show-hello>
      </header>
    </div>
  );
};

export default JavaScriptLearn;