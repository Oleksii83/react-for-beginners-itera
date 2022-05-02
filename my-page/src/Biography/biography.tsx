const data = {
  name: "Oleksii",
  biography: "Very interested in React, I want to develop in this direction!",
  contacts: "city: Zaporizhzhya tel:+380()"

}

const Biography = () => (
    <div>
        <h1>My name {data.name} </h1>
    <h3>Short biography: {data.biography}</h3>
    <p>Contacts: {data.contacts}</p>
    </div>
)

export default Biography