
import './App.css'
import { getImageUrl } from './imgSrc.js';


// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 100
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li><b>Profession:</b> {profession}</li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }
function LogIn(props) {
  return (<>User logged in</>)
}

function LogOut(props) {
  return (<>User logged out</>)
}

function App({ firstName, lastName }) {

  // const handleClick = (event) => {
  //   alert("Hello")
  //   console.log("type:", event.target.type)
  //   console.log("name:", event.target.name)
  //   console.log("value:", event.target.value)
  // }

  // const printData = (e) => {
  //   console.log("type: " + e.type);
  //   console.log("name: " + e.target.name)
  //   console.log("value: ", e.target.value)
  //   e.preventDefault();
  // }



  let isLogIn = false
  return (
    <>

      {isLogIn ? <LogIn /> : <LogOut />}
      {/* <div>
        <h1>Notable Scientists</h1>
        <Profile
          imageId="szV5sdG"
          name="Maria Skłodowska-Curie"
          profession="physicist and chemist"
          discovery="polonium (chemical element)"
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ]}
        />
        <Profile
          imageId='YfeOqp2'
          name='Katsuko Saruhashi'
          profession='geochemist'
          discovery="a method for measuring carbon dioxide in seawater"
          awards={[
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
          ]}
        />
      </div> */}

      {/* <h1>{firstName} {lastName}</h1> */}

      {/* 
      <form onSubmit={printData}>
        NAME: <input type="text" /> <input type="submit" />
      </form> */}

      {/* NAME: <input type="text" onChange={printData} name='txt-1' />

      <button onClick={handleClick} name="clickBtn" value="I am a button">click me</button> */}

    </>
  )
}

export default App
