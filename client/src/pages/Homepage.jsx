import React,{useContext} from 'react';

// import components
import Card from '../components/Card';

// import custom hooks
import useFetch from '../hooks/useFetch';

const Homepage = () => {
    const [contacts] = useFetch("http://localhost:3000/api/v1/contacts");

    console.log(contacts);

    return (
        <div className='flex-1 flex pt-5 pr-24 pl-24 items-center flex-col bg-gray-300'>
            {/* page title */}
            <h1 className='text-2xl justify-start font-semibold mb-5'>Homepage</h1>

            {/* page content */}
            {contacts && contacts.map(contact => (
                <Card key={contact._id} contact={contact} />
            ))}
        </div>
    );
}

export default Homepage;
