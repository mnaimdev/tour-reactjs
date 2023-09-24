
import { useState } from 'react';
import './Tour.css';



const Tour = ({tour, removeList}) => {
const [readMore, setReadMore] = useState(false);

 return (
    <div>

        {
            tour.map((item) => {
                return <div key={item.id} className="container">
                    <div className="single">
                    <p><b>Id: </b> {item.id}</p>
                    <p><b>Name: </b>{item.name}</p>
                    <p><b>Email: </b>{item.email}</p>
                    <p><b>Comment: </b>
                    {readMore ? item.body : `${item.body.substring(0, 100)}...`}
                    </p>
                        <button className="load" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less': 'show more'}
                        </button>
                    
                    <br />
                    <br />
                    
                    <button className="removeBtn" onClick={() => removeList(item.id)}>Not Interested</button>
                    </div>
                </div>


            })
        }
    </div>

 )
}

export default Tour;