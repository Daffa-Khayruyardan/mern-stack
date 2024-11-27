import React,{useContext, useEffect} from 'react';
import axios from 'axios';

// import components
import Card from '../components/Card';

// import custom hooks
import useContactContext from '../hooks/useContactContext';
import useAuthContext from '../hooks/useAuthContext';

const Homepage = () => {
    const {contacts,dispatch} = useContactContext();
    const {user} = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/v1/contacts", { 
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
    
                dispatch({type: 'SET_CONTACT', payload: response.data});
            }catch(err) {
                console.log(err);
            }
        }

        if(user) {
            fetchData();
        }
    }, [user]);

    
    console.log(user);

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
