function NewComponentToBeTested() {
  const students = ["Sabina", "Alex", "Victoria", "Kelvin"];
  return(
    <>
      <p>Students' Names List</p>
      <ul>
      {
        students.map((student) =>(
          <li key={student}>{student}</li>
        ))
      }
      </ul>
    </>
  )
}

export default NewComponentToBeTested;