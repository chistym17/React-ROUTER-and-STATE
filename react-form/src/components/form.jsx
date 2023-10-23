

const Form = () => {

const handleSubmit=e=>
{
console.log(e.target.name.value)
console.log(e.target.email.value)

}

const getemail=e=>
{

console.log(e.target.value)

}


    return (
        <div>

      <form  onSubmit={handleSubmit}>
           <input type="text" name="name" id="" /> <br />
            <br />
            <input type="email" name="email" id="" /> <br />
                     <br />

            <input type="password" name="pass" id="" onChange={getemail} /> <br />
            <br />

         <button type="submit">submit</button>

        </form>

        </div>
    );
};

export default Form;